(ns type.title
 (:require
  [hoplon.core :as h]))

(h/defelem h1
 [attributes children]
 (h/h1
  :css (merge {:font-size "9rem"
               :color "white"
               :margin-bottom "0"}
              (:css attributes))
  (dissoc attributes :css)
  children))
