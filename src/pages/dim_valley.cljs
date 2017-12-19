(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  layout.spacer))

(defn content []
 []
 (h/div
  (h/div
   :css {:position "relative"}
   (image.hoplon/default-header)

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
