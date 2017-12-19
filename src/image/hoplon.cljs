(ns image.hoplon
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  image.data))

(h/defelem cropped
 "An image cropped around its center. Uses background images."
 [{:keys [src height width css] :as attributes}]
 (h/div
  :css (j/cell= (merge {:background-image (str "url(\"" src "\")")
                        :background-repeat "no-repeat"
                        :background-size "cover"
                        :background-position "center"}
                       css
                       (when height {:height height})
                       (when width {:width width})))
  (dissoc attributes :src :height :width :css)))

(h/defelem header
 [attributes _]
 (let [header-styles {:width "100%"
                      :height "400px"
                      :margin-bottom "4px"
                      :filter "saturate(0)"}]
  (cropped
   (update attributes :css merge header-styles))))

(def default-header (partial header :src image.data/default-header))
