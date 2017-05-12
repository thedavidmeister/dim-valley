(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.content-block))

(defn content []
 (layout.content-block/content-inner
  (h/div "Dim valley")))
