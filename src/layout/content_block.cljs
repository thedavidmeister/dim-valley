(ns layout.content-block
 (:require
  [hoplon.core :as h]
  layout.config
  colours.ui-gradients))

(defn content-outer [& children]
 (h/div
  children))

(defn content-inner [& children]
 (h/div
  :css {:padding-left layout.config/spacer-width
        :background-color "white"}
  :class "clearfix"
  children))
