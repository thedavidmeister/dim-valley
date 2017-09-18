(ns pages.privacy
 (:require
  [hoplon.core :as h]
  layout.content-block
  contact.hoplon
  contact.data
  thedavidmeister.privacy-policy))

(defn content
 []
 (h/div
  (layout.content-block/content-inner
   (thedavidmeister.privacy-policy/policy
    :entity-name (constantly "Dim Valley")
    :entity-description (constantly "a modern business service consultancy owned and operated by David Meister and Amelia Schmidt.")

    :contact-details contact.hoplon/details
    :unsubscribe-email-address (constantly (:email contact.data/milly))))))
