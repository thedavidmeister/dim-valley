(ns pages.dim-valley
 (:require
  [hoplon.core :as h]
  layout.header-block
  layout.content-block))

(defn content []
 []
 (layout.header-block/header
  "Dim valley pty. ltd."
  ["A.B.N. 38 617 641 595"
   (h/br)
   "Modern business services"]))
