(ns our-services.hoplon
 (:require
  [hoplon.core :as h]
  layout.body-text))

(defn service-list
 []
 (layout.body-text/p
  "Specific commercial services that we offer (in no particular order) include:"
  (h/ul
   (h/li "Copywriting and editing")
   (h/li "Full stack web development")
   (h/li "User experience (UX) research, consolidation, interpretation, advocacy and advice")
   (h/li "Private/corporate/community workshops and training")
   (h/li "Technical planning and documentation")
   (h/li "Product development strategy"))))
