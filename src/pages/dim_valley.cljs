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
   (h/h2 "Multidisciplinary team of two")
   (layout.body-text/p
    "We are "
    (route.hoplon/link
     :handler :milly
     "Milly Schmidt")
    " and "
    (route.hoplon/link
     :handler :dave
     "Dave Meister")
    ".")

   (layout.body-text/p
    "We have worked together for nearly a decade across many businesses, roles, jobs and projects.")

   (layout.body-text/p
    "Our skills and experience have grown symbiotically together; between us we offer end-to-end web and product services, from ideation and research through to delivery and optimisation.")

   (layout.body-text/p
    "We aim to keep Dim Valley small and focussed to suit our lifestyle and personal goals.")

   (layout.body-text/p
    "We do just three things under the Dim Valley banner:"
    (h/ol
     (h/li "build long-term " (h/em "mutually beneficial") " relationships with our clients")
     (h/li "facilitate our own personal growth")
     (h/li "dedicate our time and code to better the industry.")))

   (layout.body-text/p
    (route.hoplon/link
     :handler :milly
     "Read more about Milly's focus and expertise"))

   (layout.body-text/p
    (route.hoplon/link
     :handler :dave
     "Read more about Dave's focus and expertise"))

   (h/h2 "Modern business services")
   (layout.body-text/p
    "We have embraced a business-first approach to technology and a human-first approach to product development.")

   (layout.body-text/p
    "We work with organisations in an honest and bespoke manner, leveraging our unique expertise to tackle their unique problems.")

   (layout.body-text/p
    "Specific commercial services that we offer (in no particular order) include:"
    (h/ul
     (h/li "Copywriting and editing")
     (h/li "Full stack web development")
     (h/li "User experience (UX) research, consolidation, interpretation, advocacy and advice")
     (h/li "Corporate/community workshops and training")
     (h/li "Technical planning and documentation")
     (h/li "Product development strategy")))

   (layout.body-text/p)
   (route.hoplon/link
    :handler :work-with-us
    "Check our current rates and availability.")

   (h/h2 "Some light wordplay")
   (layout.body-text/p
    "Dim Valley is a tongue-in-cheek play on our names.")
   (layout.body-text/p
    "Other potentially great options include "
    (h/em "evilly mad")
    ", "
    (h/em "all my dive")
    ", and "
    (h/em "lively dam")
    " but we've made our choice and are sticking with it! 😉")

   (layout.spacer/vertical-spacer))))
