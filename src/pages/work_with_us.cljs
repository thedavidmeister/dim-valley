(ns pages.work-with-us
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block
  layout.spacer
  image.hoplon
  layout.body-text
  wheel.link.hoplon
  route.hoplon
  our-services.hoplon))

(defn link
 []
 (route.hoplon/link
  :handler :work-with-us
  "Check our current rates and availability."))

(defn content []
 (h/div
  (image.hoplon/header
   :src "https://s3-ap-southeast-2.amazonaws.com/estimatework/collab.jpeg")

  (layout.content-block/content-inner
   (h/h1 "Work with us")

   (h/h2 "Availability")

   (layout.body-text/p
    (h/strong "We are both available for short-medium term contracts up to 3 days per week."))

   (layout.body-text/p
    (h/strong
     "Milly is available for advocacy and community engagements."))

   (layout.body-text/p
    "We typically take on commercial engagements ranging from several days to 3-6 months.")

   (our-services.hoplon/service-list)

   (h/h2 "Rates")
   (layout.body-text/p
    (h/strong "Our hourly rate:") " $AUD 120 + GST"
    (h/br)
    (h/strong "Our day rate (prebooked):") " $AUD 800 + GST"))))
