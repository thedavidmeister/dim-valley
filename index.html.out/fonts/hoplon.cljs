(ns fonts.hoplon
 (:require fonts.config))

(defn font-map->css-map
 [font-map]
 (let [names [(get font-map :name) (get font-map :fallback fonts.config/default-fallback)]]
  {:font-family (->> names
                 (remove nil?)
                 (clojure.string/join ", "))}))
