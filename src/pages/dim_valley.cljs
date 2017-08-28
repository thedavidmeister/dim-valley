(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  layout.spacer
  type.body-text))

(defn content []
 []
 [(h/div
   :css {:position "relative"}
   (image.hoplon/cropped
    :src "https://c1.staticflickr.com/5/4147/5171955995_e22e6c41d4_b.jpg"
    :width "100%"
    :height "400px"
    :css {:margin-bottom "4px"
          :filter "saturate(0)"}))
  (layout.content-block/content-inner
   (h/h1 "What we do")
   (type.body-text/p "At Dim Valley, we've developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns and technologies to solve their unique problems.")
   (type.body-text/p "Our speciality is building product development processes that scale. The work we do is always definable and measurable. We move the needle.")
   (type.body-text/p "Tell us what challenges your organisation is facing and we will recommend a solution. We'll help you solve the problems you're facing now with solutions that prepare you for the future.")
   (layout.spacer/vertical-spacer))])
