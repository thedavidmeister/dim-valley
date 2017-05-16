(set-env!
  :dependencies '[
                  [org.clojure/clojure "1.9.0-alpha15"]
                  [org.clojure/clojurescript "1.9.521"]
                  [adzerk/boot-cljs          "1.7.228-2"]
                  [adzerk/boot-reload        "0.4.13"]
                  [hoplon/javelin            "3.9.0"]
                  [hoplon/hoplon             "7.0.1"]
                  [tailrecursion/boot-jetty  "0.1.3"]
                  [camel-snake-kebab "0.4.0"]
                  [cljsjs/js-yaml "3.3.1-0"]
                  [thedavidmeister/wheel "0.2.0-SNAPSHOT"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
  '[adzerk.boot-cljs         :refer [cljs]]
  '[adzerk.boot-reload       :refer [reload]]
  '[hoplon.boot-hoplon       :refer [hoplon prerender]]
  '[tailrecursion.boot-jetty :refer [serve]])

(let [compiler-options {:foreign-libs [{:file "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.js"
                                        :provides ["lib.mapbox"]}]}]

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

 (deftask gh-pages
  "Build for production deployment."
  []
  (comp
   (hoplon)
   (cljs :compiler-options compiler-options)
   (target :dir #{"gh-pages"}))))
