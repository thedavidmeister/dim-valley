(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  fonts.hoplon
  fonts.config
  colours.ui-gradients))

; Hoplonified from https://codepen.io/jordanlachance/pen/yOJdRr

(defn polar->cartesian
 [radius radians]
 [(* radius (.cos js/Math radians))
  (* radius (.sin js/Math radians))])

(defn n->px [n] (str n "px"))

(defn outer-wrapper
 [offset outer-radius item-radius & children]
 (prn outer-radius)
 (h/div
  :css (j/cell= {:position "fixed"
                 :left (n->px outer-radius)
                 :bottom (n->px outer-radius)
                 :overflow "visible"})
  children))

(defn open-button
 [open? radius transition-length]
 (let [open? (or open? (j/cell false))]
  (h/div
   :click #(swap! open? not)
   :css (j/cell= {; We give a couple px buffer to avoid antialiasing artefacts
                  ; when the circles are stacked in the z-axis.
                  :width (* radius 2)
                  :height (* radius 2)
                  :border-radius (n->px radius)
                  :position "absolute"
                  :left (n->px (- radius))
                  :bottom (n->px (- radius))
                  :z-index 1
                  :cursor "pointer"})

   (let [width (j/cell= (/ radius 2))
         ; sin(PI/4) = rotated-offset / width
         ; rotated-offset = (width x sin(PI /4))
         rotated-offset (j/cell= (/ (* width
                                       (.sin js/Math (/ (.-PI js/Math) 4)))
                                    2))
         height (j/cell= (/ radius 12))
         ; rotated-offset (j/cell= (* 2 width))
         left (j/cell= (+ radius (- (/ width 2))))
         top (j/cell= (+ radius (- (/ height 2))))
         color (j/cell= (last (colours.ui-gradients/stops)))
         default-css (j/cell= {:width (n->px width)
                               :height (n->px height)
                               :left (n->px left)
                               :background-color color
                               :position "absolute"
                               :transition (str "transform " transition-length "s ease, "
                                                "background-color " transition-length "s ease")})]
    [
     ; top line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {:top (n->px (- top (* 2 height)))
                      :transform (str
                                      "translate3d(0px, " (if open? rotated-offset 0) "px, 0px)"
                                      "rotate(" (if open? "45deg" "0deg") ") ")}
                     (when open? {:background-color "white"}))))

     ; center line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {
                      :top (n->px top)
                      :transform (str "scale(" (if open? 0 1) ")")})))

     ; bottom line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {:top (n->px (+ top (* 2 height)))
                      :transform (str
                                      "translate3d(0px, -" (if open? rotated-offset 0) "px, 0px)"
                                      "rotate(" (if open? "-45deg" "0deg") ") ")}
                     (when open? {:background-color "white"}))))]))))

(defn menu
 [items radius]
 (let [open? (j/cell false)
       ; Outer radius of the element = item radius + item offset.
       ; Ratio = item radius / item offset.
       ; Outer radius = radius + offset
       ; Outer radius = (ratio x offset) + offset
       ; Outer radius = (1 + ratio) x offset
       ; offset = Outer radius / (1 + ratio)
       ratio 0.3
       offset (j/cell= (/ radius (+ 1 ratio)))
       item-radius (j/cell= (* ratio offset))

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
  (outer-wrapper
   0
   radius
   item-radius

   (h/div
    :css {:position "relative"
          :z-index 1}
    (open-button open? item-radius total-transition-length))
   (h/div
    :css {:z-index 0}
    (h/for-tpl [[i [x y] item] i-xy-item]
     (let [transition-delay (j/cell= (if open?
                                      (* i base-transition-length)
                                      0))
           url (j/cell= (:url item))
           text (j/cell= (:text item))]
      (h/div
       (h/when-tpl text
        (h/table
         :css {:position "absolute"
               :width "100%"
               :height "100%"}
         (h/tr
          (h/td
           :valign "center"
           :css (merge
                 {:text-align "center"}
                 (fonts.hoplon/font-map->css-map fonts.config/playfair))
           text))))

       (h/div
        :css (j/cell= {
                       :position "absolute"
                       :background-color "white"
                       :top 0
                       :left 0
                       :bottom 0
                       :right 0
                       :transition (str "opacity " total-transition-length "s ease " transition-delay "s")
                       :opacity (if open? 0 1)}))
       :css (j/cell= (merge
                      {
                       :position "absolute"
                       :overflow "hidden"
                       :left (n->px (- item-radius))
                       :bottom (n->px (- item-radius))
                       :background-image (when url (str "url('" url "')"))
                       :background-size "contain"
                       :background-repeat "no-repeat"
                       :background-position "center"
                       :background-color "white"
                       :width (* 2 item-radius)
                       :height (* 2 item-radius)
                       :border-radius (n->px item-radius)
                       :transition (str "transform " total-transition-length "s ease " transition-delay "s")
                       :cursor "pointer"}
                      {:transform (if open? (str "translate(" x "px, " y "px)")
                                            "translate(0, 0)")})))))))))
