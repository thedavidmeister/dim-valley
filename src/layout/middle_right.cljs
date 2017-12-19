(ns layout.middle-right
 (:require
  [hoplon.core :as h]
  layout.config))

(def content-percent 60)
(def spacer-percent (* 0.5 (- 100 content-percent)))

(defn spacer
 []
 (h/div
  :class "layout-spacer"
  :css {:width (str spacer-percent "vw")
        :height "10vh"
        :float "left"}))

(h/defelem content-div
 [_ children]
 (h/div
  :css {:width (str content-percent "vw")
        :float "left"}
  children))

(defn spacer-row
 []
 (h/div
  :css {:height "10vh"
        :width "100%"
        :float "left"
        :clear "both"}))
(defn content-row
 [content]
 (h/div
  :css {
        :width "100%"
        :overflow "hidden"}
  (spacer)
  (content-div
   :css {:overflow-x "visible"}
   content)))

(defn middle-right
 [children]
 (let [content-percent 50
       spacer-percent (- 100 (* 2 content-percent))]
  (h/div
   :css {:width "100%"}
   (spacer-row)
   (content-row children)
   (spacer-row))))
