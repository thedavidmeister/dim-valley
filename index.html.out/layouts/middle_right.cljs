(ns layouts.middle-right
 (:require [hoplon.core :as h]))

(defn spacer-td []
 (h/td
  :css {:width "5vw"
        :height "5vh"}))

(defn spacer-tr [] (h/tr (spacer-td) (h/td)))
(defn content-tr [content] (h/tr (h/td) (h/td content)))

(defn middle-right
 [children]
 (h/table
  :cellpadding 0
  :cellspacing 0
  :css {:width "100%"}
  (spacer-tr)
  (content-tr children)
  (spacer-tr)))
