(set-env!
  :dependencies
  '[
    [org.clojure/clojure "1.9.0-alpha19"]
    [org.clojure/clojurescript "1.9.908"]
    [adzerk/boot-cljs          "1.7.228-2"]
    [adzerk/boot-reload        "0.4.13"]
    [hoplon/javelin            "3.9.0"]
    [hoplon/hoplon "7.1.0-SNAPSHOT"]
    [tailrecursion/boot-jetty  "0.1.3"]
    [camel-snake-kebab "0.4.0"]
    [cljsjs/js-yaml "3.3.1-0"]
    [thedavidmeister/wheel "0.3.0-SNAPSHOT"]
    [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[hoplon.boot-hoplon :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]])

(let [compiler-options {:foreign-libs [{:file "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js"
                                        :provides ["lib.mapbox"]}]
                        :externs ["externs.js"]}]

 (deftask front-dev
  "Build for local development."
  []
  (comp
   (watch)
   (speak)
   (hoplon)
   (reload)
   (cljs :compiler-options compiler-options)
   (serve :port 8000)))

 (deftask build
  []
  (comp
   (hoplon)
   (cljs
    :optimizations :advanced
    :compiler-options compiler-options)))

 (deftask deploy
  []
  (comp
   (build)
   (target
    :dir #{"gh-pages"})
   (github-pages))))
