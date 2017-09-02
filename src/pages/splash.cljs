(ns pages.splash
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.spacer
  type.subtitle
  type.button
  type.title
  layout.spacer))

(defn content
 []
 (h/div :css {:text-align "center"
              :margin-top "30vh"}
  (type.title/h1 "Dim Valley")
  (type.subtitle/p "Solving problems for digital businesses")
  (layout.spacer/vertical-spacer)
  (type.button/cta "Work with us" :about)))
