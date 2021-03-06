(ns menu.flower
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  [unit.conversion :as u]
  fonts.config
  menu.config
  colours.ui-gradients
  wheel.math.geometry
  wheel.font.core
  route.hoplon))

; Loosely based on https://codepen.io/jordanlachance/pen/yOJdRr but heavily
; reworked and Hoplonified :)

(def big-scale 1.3)

(defn outer-wrapper
 [outer-radius open? button-hover? transition-length & children]
 (let [transition-length (/ transition-length 2)]
  (h/div
   :css (j/cell= {:position "fixed"
                  :left (u/n->px outer-radius)
                  :bottom (u/n->px outer-radius)
                  :overflow "visible"
                  :transition (str "transform " transition-length "s " menu.config/easing)
                  :transform (str "scale(" (if (and button-hover? (not open?)) big-scale 1) ")")
                  :z-index 3})
   children)))

(defn open-button
 [open? mouseover? radius transition-length]
 (let [open? (or open? (j/cell false))
       mouseover? (or mouseover? (j/cell false))
       transition-length (/ transition-length 2)]
  (h/div
   :click #(swap! open? not)

   :mouseenter #(reset! mouseover? true)
   :mouseleave #(reset! mouseover? false)

   :css (j/cell= {; We give a couple px buffer to avoid antialiasing artefacts
                  ; when the circles are stacked in the z-axis.
                  :width (* radius 2)
                  :height (* radius 2)
                  :border-radius (u/n->px radius)
                  :position "absolute"
                  :left (u/n->px (- radius))
                  :bottom (u/n->px (- radius))
                  :z-index 1
                  :cursor "pointer"
                  :transition (str "transform " transition-length "s " menu.config/easing)
                  :transform (str "scale(" (if (and open? mouseover?) big-scale 1) ")")})

   (let [; round the height and width to avoid rendering bugs
         width (j/cell= (Math/round (* radius 0.5)))
         height (j/cell= (Math/round (/ radius 12)))

         left (j/cell= (+ radius (* width -0.5)))
         top (j/cell= (+ radius (* height -0.5)))

         offset (j/cell= (* height 2))

         ; rotated-offset (j/cell= (* 2 width))

         color (j/cell= (last (colours.ui-gradients/stops)))

         default-css (j/cell= {:width (u/n->px width)
                               :height (u/n->px height)
                               ; round to avoid a bug where the circle moves off
                               ; centre during scaling animation
                               ; https://github.com/thedavidmeister/dim-valley/issues/114
                               :left (u/n->px (Math/round left))
                               :background-color color
                               :position "absolute"
                               :transition (str "transform " transition-length "s ease, "
                                                "background-color " transition-length "s ease")})]
    [
     ; top line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {:top (u/n->px (- top offset))
                      :transform (str
                                      "translate3d(0px, " (if open? offset 0) "px, 0px)"
                                      "rotate(" (if open? "45deg" "0deg") ") ")}
                     (when open? {:background-color "white"}))))

     ; center line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {
                      :top (u/n->px top)
                      :transform (str "scale(" (if open? 0 1) ")")})))

     ; bottom line
     (h/div
      :css (j/cell= (merge
                     default-css
                     {:top (u/n->px (+ top (* 2 height)))
                      :transform (str
                                      "translate3d(0px, -" (if open? offset 0) "px, 0px)"
                                      "rotate(" (if open? "-45deg" "0deg") ") ")}
                     (when open? {:background-color "white"}))))]))))

(defn menu
 [items radius]
 (let [open? (j/cell false)
       button-hover? (j/cell false)

       ; Outer radius of the element = item radius + item offset.
       ; Ratio = item radius / item offset.
       ; Outer radius = radius + offset
       ; Outer radius = (ratio x offset) + offset
       ; Outer radius = (1 + ratio) x offset
       ; offset = Outer radius / (1 + ratio)
       ratio 0.4
       offset (j/cell= (/ radius (+ 1 ratio)))
       item-radius (j/cell= (* ratio offset))

       radians-per-item (j/cell= (/ (* 2 (.-PI js/Math)) (count items)))
       i-xy-item (j/cell=
                  (map-indexed
                   (fn [i item]
                    [i
                     (wheel.math.geometry/polar->cartesian offset (* i radians-per-item))
                     item])
                   items))
       total-transition-length menu.config/transition-length
       base-transition-length (j/cell= (/ total-transition-length (count items)))]
  (outer-wrapper
   radius
   open?
   button-hover?
   total-transition-length

   (h/div
    :css {:position "relative"
          :z-index 1}
    (open-button open? button-hover? item-radius total-transition-length))
   (h/div
    :css {:z-index 0}
    (h/for-tpl [[i [x y] item] i-xy-item]
     (let [transition-delay (j/cell= (if open?
                                      (* i base-transition-length)
                                      0))
           url (j/cell= (:url item))
           text (j/cell= (:text item))
           handler (j/cell= (:handler item))
           mouseover? (j/cell false)
           interacting? (j/cell= (and mouseover? open?))]

      ; Outer div handles the cartesian offsets for the petal.
      (h/div
       :css (j/cell= (merge
                      {
                       :transition (str "transform " total-transition-length "s " menu.config/easing " " transition-delay "s")}
                      {:transform (if open? (str "translate(" x "px, " y "px)")
                                            "translate(0, 0)")}))

       (route.hoplon/link
        :handler handler
        :css (j/cell= {:color (if interacting? "black" colours.ui-gradients/base-colour)
                       :display "inline"})

        ; Inner div handles interations with the petal.
        (h/div
         :mouseenter #(reset! mouseover? true)
         :mouseleave #(reset! mouseover? false)
         :click #(j/dosync
                  (reset! open? false)
                  ; Return true to ensure click bubbles to the route link.
                  true)
         :css (j/cell= {:transition (str "transform " (/ total-transition-length 2) "s " menu.config/easing)
                        :transform (str "scale(" (if interacting? big-scale 1) ")")
                        :width (* 2 item-radius)
                        :height (* 2 item-radius)
                        :border-radius (u/n->px item-radius)
                        :border "4px solid"
                        :background-image (when url (str "url('" url "')"))
                        :background-size "contain"
                        :background-repeat "no-repeat"
                        :background-position "center"
                        :background-color "white"
                        :position "absolute"
                        :overflow "hidden"
                        :left (u/n->px (- item-radius))
                        :bottom (u/n->px (- item-radius))
                        :cursor "pointer"})

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
                   (wheel.font.core/font->css-map fonts.config/gentium-basic))
             text))))

         (h/div
          :css (j/cell= {
                         :position "absolute"
                         :background-color "white"
                         :top 0
                         :left 0
                         :bottom 0
                         :right 0
                         :transition (str "opacity " total-transition-length "s " menu.config/easing " " transition-delay "s")
                         :opacity (if open? 0 1)})))))))))))
