(ns menu.drawers
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  menu.config
  animation.easings))

(defn drawers [& children]
 (h/div
  :css {:width "100%"
        :z-index 0
        :position "relative"}
  children))

(defn drawer [open? offset & children]
 (let [transition-length menu.config/transition-length]
  (j/with-let
   [el (h/div
        :css (j/cell=
              (merge
               {
                :transition (str "all " transition-length "s " (:ease-out-quart animation.easings/easings) " " (if open? transition-length 0) "s")
                :transform (str "translateX(90vw)")
                :z-index 0
                :position "absolute"
                :width "100%"
                :top 0
                :left 0
                :opacity 0}
               (when open?
                {:position "relative"
                 :z-index 1
                 :transform "translateX(0px)"
                 :opacity 1})))
        (h/div
         :class "clearfix"
         :position "relative"
         children))]

   ; Scroll to the top of the page when a new drawer opens.
   (j/cell=
    (when open?
     (.animate (js/jQuery "html, body") (clj->js {"scrollTop" 0}) transition-length))))))
