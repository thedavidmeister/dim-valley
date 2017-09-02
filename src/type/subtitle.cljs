(ns type.subtitle
 (:require
  [hoplon.core :as h]))

(h/defelem p
 [attributes children]
 (h/p
  :css (merge {:text-transform "uppercase"
               :font-size "12px"
               :font-weight "bold"
               :color "white"}
              (:css attributes))
  (dissoc attributes :css)
  children))
