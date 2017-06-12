(ns layout.header-block
 (:require
  [hoplon.core :as h]
  layout.content-block
  wheel.font.core))

(defn header [heading tagline]
 (layout.content-block/content-inner
  (h/div
   :css (merge
         {:padding "2.67rem 0"}
         (wheel.font.core/font->css-map fonts.config/gentium-basic))
   (h/h1
    :css {:margin "0 0 1.2rem 0"}
    heading)

   (h/span
    :css {:font-size "2.2rem"
          :max-width "600px"
          :display "inline-block"
          :margin-top "1rem"}
    tagline))))
