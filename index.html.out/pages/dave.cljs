(ns pages.dave
 (:require
  [hoplon.core :as h]
  layout.content-block))

(defn content []
 (layout.content-block/content-inner
  (h/div "dave")))
