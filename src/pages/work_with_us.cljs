(ns pages.work-with-us
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  layout.spacer
  image.hoplon
  type.body-text
  wheel.link.hoplon))

(defn content []
 [
  (image.hoplon/cropped
   :src "https://s3-ap-southeast-2.amazonaws.com/estimatework/collab.jpeg"
   :width "100%"
   :height "400px"
   :css {:margin-bottom "4px"})


  (layout.content-block/content-inner
   (h/h1 "How we work")
   (h/h2 "Our availability")
   (type.body-text/p
    "Building " (wheel.link.hoplon/external "https://estimate-work.com/" "Estimate Work") " is currently our primary focus, limiting our overall availability, but we are happy to provide services to new and existing clients on an ad-hoc basis.")
   (type.body-text/p "We work on a contract basis on projects with clearly defined scope and deliverables.")

   (type.body-text/p
    (h/strong "Dave") " is available " (h/strong "up to 3 days per week. ") (h/strong "Milly") " is available " (h/strong "up to 2 days per week."))

   (type.body-text/p
    "Our preference is for most or all project work to be " (h/strong "conducted remotely") ", using common telecommute technologies such as Google Hangouts, Slack, Flowdock, etc. to stay connected and in sync. We are able to commute to locations in central Melbourne for meetings, research or other discrete tasks."))

  (layout.content-block/content-inner
   (h/h2 "Our rates")
   (type.body-text/p
    (h/strong "Our hourly rate:") " $AUD 120 + GST"
    (h/br)
    (h/strong "Our day rate (prebooked):") " $AUD 800 + GST")
   (layout.spacer/vertical-spacer))])
