(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  [javelin.core :as j]
  colours.ui-gradients
  layout.header-block
  layout.content-block
  layout.spacer
  wheel.math.geometry
  wheel.abn.hoplon
  wheel.address.hoplon
  address.config))

(defn content []
 [
  (image.hoplon/cropped
   :src "https://c1.staticflickr.com/5/4147/5171955995_e22e6c41d4_b.jpg"
   :width "100%"
   :height "400px"
   :css {:margin-bottom "4px"
         :filter "saturate(0)"})
  (layout.header-block/header
   "Dim Valley"
   "Modern business services")
  (layout.content-block/content-inner
   (layout.body-text/p "Milly Schmidt and Dave Meister have developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns, technologies and tools to solve their unique problems."))])
