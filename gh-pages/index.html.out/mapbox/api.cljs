(ns mapbox.api
 (:require
  [hoplon.core :as h]
  lib.mapbox
  mapbox.config))

(def mapbox-key (str (random-uuid)))

(defn init [token]
 (when-not (= token (aget js/mapboxgl "accessToken"))
  (aset js/mapboxgl "accessToken" token)))

(defn lng-lat
 "Returns a mapbox LngLat object from given co-ordinates"
 ([[lng lat]] (lng-lat lng lat))
 ([lng lat]
  {:pre [(number? lng) (number? lat)]}
  (js/mapboxgl.LngLat. lng lat)))

; Because of the async behaviour of the map and the way the mapbox Map
; constructor works, and the fact that mapbox doesn't provide an off-the-shelf
; solution for looking up the associated map object from the DOM element, we
; need to roll a bit of a system for this ourselves.
(defn map-el->map [el]
 (.data js/jQuery el mapbox-key))

(defn set-map-el! [el m]
 (.data js/jQuery el mapbox-key m))

(defn with-marker!
 "Given a map container DOM element, a marker element and a long/lat, add the marker to the map"
 [map-el marker-el ll marker-options]
 (h/with-dom map-el
  (doto (js/mapboxgl.Marker. marker-el (clj->js marker-options))
        (.setLngLat ll)
        (.addTo (map-el->map map-el)))))

(defn el->map!
 "Given an el, instantiates a map in the element and returns the map object"
 [el options]
 (init mapbox.config/token)
 (let [options (merge {"container" el}
                      options)]
  (h/with-dom el
   (let [m (js/mapboxgl.Map. (clj->js options))]
    (set-map-el! el m)))))
