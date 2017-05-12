(ns menu.drawers
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  menu.config))

(defn drawers [& children]
 (h/div
  :css {:width "100%"
        ; :overflow-x "hidden"
        :z-index 0
        :position "relative"}
  children))

(defn drawer [open? offset & children]
 (let [transition-length menu.config/transition-length]
  (j/with-let
   [el (h/div
        :css (j/cell= {
                       :transition (str "transform " transition-length "s ease " (if open? transition-length 0) "s")
                       :transform (str "translateX(" (if open? "0px" offset) ")")
                       ; :transition-delay (str (if open? transition-length 0) "s")
                       :z-index (if open? 1 0)
                       :position (if open? "relative" "absolute")
                       :width "100%"
                       ; :height "100%"
                       ; :min-height "100vh"
                       :top 0
                       :left 0})
        (h/div
         :class "clearfix"
         :position "relative"
         children))]

   ; Scroll to the top of the page when a new drawer opens.
   (j/cell=
    (when open?
     (.animate (js/jQuery "html, body") (clj->js {"scrollTop" 0}) transition-length))))))
