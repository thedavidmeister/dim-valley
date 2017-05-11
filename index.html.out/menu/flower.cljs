(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]))

; Hoplonified from https://codepen.io/jordanlachance/pen/yOJdRr

(defn polar->cartesian
 [radius radians]
 [(* radius (.cos js/Math radians))
  (* radius (.sin js/Math radians))])

(defn n->px [n] (str n "px"))

(defn open-button
 [open? radius]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)
   :css (j/cell= {; We give a couple px buffer to avoid antialiasing artefacts
                  ; when the circles are stacked in the z-axis.
                  :width (+ radius 2)
                  :height (+ radius 2)
                  :background-color "white"
                  :border-radius (n->px radius)
                  :position "absolute"
                  :left "-1px"
                  :top "-2px"
                  :z-index 1
                  :cursor "pointer"}))))

(defn menu
 [items width]
 (let [open? (j/cell false)
       ; Total width of the element = 2x menu item radius + 2x menu item offset.
       ; Ratio = menu item radius / menu item offset.
       ; Width / 2 = radius + offset
       ; Width / 2 = (ratio x offset) + offset
       ; Width / 2 = (1 + ratio) x offset
       ; offset = Width / (2 x (1 + ratio))
       ratio 0.5
       offset (j/cell= (/ width (* 2 (+ 1 ratio))))
       radius (j/cell= (* ratio offset))

       radians-per-item (j/cell= (/ (* 2 (.-PI js/Math)) (count items)))
       i-xy-item (j/cell=
                  (map-indexed
                   (fn [i item]
                    [i
                     (polar->cartesian offset (* i radians-per-item))
                     item])
                   items))
       total-transition-length 0.6
       base-transition-length (j/cell= (/ total-transition-length (count items)))]
  (h/div
   :css {:position "relative"
         :z-index 1}
   (open-button open? radius)
   (h/div
    :css {:z-index 0}
    (h/for-tpl [[i [x y] item] i-xy-item]
     (h/div
      :css (j/cell= (merge
                     {:position "absolute"
                      :left 0
                      :top 0
                      :background-color "white"
                      :width radius
                      :height radius
                      :border-radius (n->px radius)
                      :transition (let [transition-delay (if open?
                                                          (* i base-transition-length)
                                                          0)]
                                   (str "transform " total-transition-length "s ease " transition-delay "s"))
                      :cursor "pointer"}
                     {:transform (if open? (str "translate(" x "px, " y "px)")
                                           "translate(0, 0)")}))))))))
