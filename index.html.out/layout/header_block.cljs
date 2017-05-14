(ns layout.header-block
 (:require
  [hoplon.core :as h]
  layout.content-block
  wheel.hoplon.google-fonts.api))

(defn header [heading tagline]
 (layout.content-block/content-inner
  (h/div
   :css (merge
         {:padding "2.67rem 0"}
         (wheel.hoplon.google-fonts.api/font->css-map fonts.config/playfair))
   (h/h1 heading
    :css {:margin 0
          :font-size "4rem"})
   (h/span tagline
    :css {:font-size "1rem"}))))
