(ns layout.content-block
 (:require
  [hoplon.core :as h]
  layout.config
  colours.ui-gradients
  layout.rounded-corners
  layout.spacer))

(defn content-outer [& children]
 (layout.rounded-corners/wrapper
  children))

(defn content-inner [& children]
 (h/div
  :css {:padding-left layout.config/spacer-width
        :padding-right layout.config/spacer-width
        :background-color "white"}
  :class "clearfix"
  (layout.spacer/vertical-spacer)
  children
  (layout.spacer/vertical-spacer)))
