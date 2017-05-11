(ns colours.ui-gradients
 (:require
  camel-snake-kebab.core
  colours.config)
 (:require-macros macros.slurp))

(defn stops
 ([] (stops colours.config/gradient-name))
 ([name]
  (let [parse (.-parse js/JSON)]
   (get
    (some->>
     (macros.slurp/slurp "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json")
     parse
     js->clj
     (filter #(= name (get % "name")))
     first)
    "colors"))))
