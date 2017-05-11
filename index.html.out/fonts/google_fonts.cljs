(ns fonts.google-fonts
 (:require [hoplon.core :as h]))

(defn fonts
 [fs]
 (let [name->uri-name #(clojure.string/replace % " " "+")
       family-string (clojure.string/join "|" (map (comp name->uri-name :name) fs))
       f->style-string #(str "font-family: '" (:name %) "', " (:fallback %) ";")]
  [(h/link
    :href (str "https://fonts.googleapis.com/css?family=" family-string)
    :rel "stylesheet"
    :type "text/css")
   (h/style
    (clojure.string/join " " (map f->style-string fs)))]))
