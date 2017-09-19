(ns contact.hoplon
 (:require
  [hoplon.core :as h]
  contact.data
  wheel.email.hoplon
  wheel.phone.hoplon
  wheel.address.hoplon))

(defn details
 []
 (let [email-subject "Dim Valley enquiry"
       email-body "Hi, I saw the Dim Valley website and want to organise a time to discuss my project :)"]
  [
   (h/p
    (h/strong "Milly: ")
    (wheel.phone.hoplon/phone (:phone contact.data/milly)) " | "
    (wheel.email.hoplon/email
     :address (:email contact.data/milly)
     :subject email-subject
     :body email-body))
   (h/p
    (h/strong "Dave: ")
    (wheel.phone.hoplon/phone (:phone contact.data/dave)) " | "
    (wheel.email.hoplon/email
     :address (:email contact.data/dave)
     :subject email-subject
     :body email-body))
   (h/p (h/strong "We are based at ") (wheel.address.hoplon/simple contact.data/address))]))
