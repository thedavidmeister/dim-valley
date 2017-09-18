(ns contact.hoplon
 (:require
  [hoplon.core :as h]
  contact.data
  wheel.phone.hoplon
  wheel.address.hoplon))

(defn details
 []
 [
  (h/p (h/strong "Milly: ") (wheel.phone.hoplon/phone (:phone contact.data/milly)) " | " (:email contact.data/milly))
  (h/p (h/strong "Dave: ") (wheel.phone.hoplon/phone (:phone contact.data/dave)) " | " (:email contact.data/dave))
  (h/p (h/strong "We are based at ") (wheel.address.hoplon/simple contact.data/address))])
