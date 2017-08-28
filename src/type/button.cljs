(ns type.button
 (:require
  [hoplon.core :as h]
  fonts.config
  colours.ui-gradients))

(h/defelem cta
 [attributes text route]
 (h/button :class "cta"
  text))
