(ns animation.easings
 (:require
  cljsjs.js-yaml
  camel-snake-kebab.core)
 (:require-macros wheel.slurp.core))

; http://easings.net/

(def easings
 (some->>
  (wheel.slurp.core/slurp "https://raw.githubusercontent.com/ai/easings.net/a7e62e859ceccc499f69050564d2c42b2f416fbe/src/easings.yml")
  (.load js/jsyaml)
  js->clj
  (remove (fn [e] (let [css (get e "css")] (or (= "no" css) (nil? css)))))
  (map (fn [e] [(camel-snake-kebab.core/->kebab-case-keyword (get e "name"))
                (get e "css")]))
  (into {})))
