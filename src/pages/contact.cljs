(ns pages.contact
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  [unit.conversion :as u]
  layout.content-block
  layout.header-block
  colours.ui-gradients
  mapbox.dom
  mapbox.api
  wheel.math.geometry
  wheel.address.hoplon
  layout.spacer
  wheel.phone.hoplon
  contact.hoplon
  layout.body-text))

(defn dv-marker [width]

 (let [; cos(45) = marker-width / line-length
       ; line-length = marker-width / cos(45)
       line-length (j/cell= (/ width (.cos js/Math (wheel.math.geometry/degrees->radians 45))))
       base-css (j/cell= {:width (u/n->px line-length)
                          :height (u/n->px (/ width 6))
                          :background-color colours.ui-gradients/base-colour
                          :position "absolute"
                          :top 0
                          :left 0})]
  (h/div
   :css {:position "relative"}
   ;line 1
   (h/div
    :css (j/cell= (merge base-css
                         {:transform "rotate(45deg)"})))

   ; line 2
   (h/div
    :css (j/cell= (merge base-css
                         {:transform "rotate(-45deg)"}))))))


(defn dv-map
 []
 (let [ll (mapbox.api/lng-lat 144.995415 -37.826018)
       marker-width 20
       options {"center" ll
                "style" "mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd"
                "zoom" 13
                "interactive" false
                "logoPosition" "bottom-right"}
       el (mapbox.dom/map :css {:width "100%"
                                :height "400px"
                                :margin-bottom "4px"}
                          :options options
                          :marker (dv-marker marker-width)
                          :marker-options {:offset (map (comp - #(/ % 2)) [marker-width marker-width])})]
  el))


(defn content []
 (h/div
  (dv-map)
  (layout.content-block/content-inner
   (h/h1 "Let's work together.")
   (layout.body-text/p
    "If you are interested in working with us, let's talk.")

   (layout.body-text/p
    "We prefer to meet in person before committing to anything new." (h/br)
    "Both of us love to ride our bikes around Melbourne." (h/br)
    "If you are within 10km of the CBD we will come to you!")

   (contact.hoplon/details)

   (pages.work-with-us/link)

   (layout.spacer/vertical-spacer))))
