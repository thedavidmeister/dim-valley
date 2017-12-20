(ns pages.privacy
 (:require
  [hoplon.core :as h]
  layout.content-block
  contact.hoplon
  contact.data
  wheel.email.hoplon
  thedavidmeister.privacy-policy))

(defn content
 []
 (h/div
  (image.hoplon/default-header)
  (layout.content-block/content-inner
   (thedavidmeister.privacy-policy/policy
    :entity-name (constantly "Dim Valley")
    :entity-description (constantly "a modern business service consultancy owned and operated by David Meister and Amelia Schmidt.")

    :contact-details contact.hoplon/details
    :unsubscribe-email-address
    (partial
     wheel.email.hoplon/email
     :address (:email contact.data/milly)
     :subject "Unsubscribe from email marketing"
     :body "Hi, as per the Dim Valley privacy policy, I would like to unsubscribe from future email marketing."))
   (layout.spacer/vertical-spacer))))
