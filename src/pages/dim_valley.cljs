(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  layout.rounded-corners
  layout.spacer))

(defn content []
 []
 (layout.rounded-corners/wrapper
  (h/div
   :css {:position "relative"}
   (image.hoplon/cropped
    :src "https://c1.staticflickr.com/5/4147/5171955995_e22e6c41d4_b.jpg"
    :width "100%"
    :height "400px"
    :css {:margin-bottom "4px"
          :filter "saturate(0)"})
   (h/h1 "dim valley"
    :css {:position "absolute"
          :color "white"
          :top "50%"
          :left "0"
          :right "0"
          :display "black"
          :text-align "center"
          :width "100%"
          :letter-spacing "0.2em"}))

  (layout.content-block/content-inner
   (h/h2 "A modern business service consultancy")
   (layout.body-text/p "Milly Schmidt and Dave Meister have developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns, technologies and tools to solve their unique problems.")
   (layout.spacer/vertical-spacer))))
