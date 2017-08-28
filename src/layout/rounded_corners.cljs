(ns layout.rounded-corners
 (:require
  [hoplon.core :as h]
  layout.config))

(defn wrapper
 [& children]
 (h/div :css {:overflow "hidden"
              :border-radius layout.config/border-radius-amount
              :-webkit-border-radius layout.config/border-radius-amount}
  children))
