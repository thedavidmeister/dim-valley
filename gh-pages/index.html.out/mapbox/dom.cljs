(ns mapbox.dom
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  mapbox.api
  lib.mapbox)
 (:refer-clojure :exclude [map]))

(h/defelem map
 [{:keys [options marker marker-options] :as attributes} children]
 (j/with-let [el (h/div (dissoc attributes :options :marker :marker-options) children)]
  (mapbox.api/el->map! el options)
  (let [center (get options "center")]
   (when (and marker center)
    (mapbox.api/with-marker! el marker center marker-options)))))

; https://www.mapbox.com/install/js/cdn-install/
(defn stylesheet []
 (h/link
  :href "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css"
  :rel "stylesheet"))
