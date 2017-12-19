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
    "We have been working together for nearly a decade, across many businesses, roles, jobs and projects - sometimes 1:1 and other times as part of a larger team.")

   (layout.body-text/p
    "Our skills and experience have grown symbiotically together; between us we offer end-to-end web and product services, from ideation and research through to delivery and optimisation.")

   (layout.body-text/p
    "We aim to keep Dim Valley small and focussed to suit our lifestyle and personal goals.")

   (layout.body-text/p
    "We primarily do three things under the Dim Valley banner:"
    (h/ol
     (h/li "build long-term " (h/em "strategic") " relationships with our clients")
     (h/li "facilitate our own personal growth")
     (h/li "dedicate our time and code to better the industry.")))

   (h/h2 "Our expertise")

   (layout.body-text/p
    "Milly has"
    (h/ul
     (h/li "won awards for her writing, published several short stories and was offered a book deal")
     (h/li "edited and written for several online publications")
     (h/li "worked in a delivery role as a front-end engineer for several years")
     (h/li "worked as lead UX researcher/advocate for several years")
     (h/li "sat on and hosted many tech panels, given talks, run events and volunteered in the tech community")
     (h/li "often advocated for women's equality in tech")))

   (layout.body-text/p
    "Dave has"
    (h/ul
     (h/li "owned and operated a digital agency for around 5 years with a dozen staff")
     (h/li "acted as CTO and chief solutions architect for several years at a rapidly scaling startup")
     (h/li "contributed hundreds of patches and code reviews to open source projects globally")
     (h/li "built the tech stack for estimate-work.com (ongoing)")))

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

   (h/h2 "Wordplay")
   (layout.body-text/p
    "Dim Valley is a tongue-in-cheek play on our names, Dave + Milly.")
   (layout.body-text/p
    "Other potentially great options included:"
    (h/ul
     (h/li "Evilly mad")
     (h/li "All my dive")
     (h/li "Lively dam")))
   (layout.body-text/p
    "But we've made our choice and are sticking with it! 😉")

   (layout.spacer/vertical-spacer))))
