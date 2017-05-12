(ns layout.content-block
 (:require
  [hoplon.core :as h]
  layout.config))

(defn content-outer [& children]
 (h/div
  :css {
        :border-width "4px"
        :border-style "dotted"
        :border-color (last (colours.ui-gradients/stops))
        :border-image-source "url('border-dots.svg')"
        :border-image-slice "33% 33%"
        :border-image-repeat "round"
        :border-right "none"}
  children))

(defn content-inner [& children]
 (h/div
  :css {:padding-left layout.config/spacer-width
        :background-color "white"}
  :class "clearfix"
  children))
