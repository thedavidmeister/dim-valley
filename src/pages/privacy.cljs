(ns pages.privacy
 (:require
  [hoplon.core :as h]
  layout.content-block
  contact.hoplon
  thedavidmeister.privacy-policy))

(defn content
 []
 (h/div
  (layout.content-block/content-inner
   (thedavidmeister.privacy-policy/policy
    :entity-name (constantly "Dim Valley pty. ltd.")
    :entity-description (constantly "a modern business service consultancy")

    :contact-details (contact.hoplon/details)
    :unsubscribe-email-address (constantly (:milly contact.data/email))))))
