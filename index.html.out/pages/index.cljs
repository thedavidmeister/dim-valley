(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  hoplon.jquery
  fonts.config
  fonts.hoplon
  fonts.google-fonts
  layout.config
  layout.spacer
  layout.middle-right))

(def gradient-name "Day Tripper")
(def gradient-stops (colours.ui-gradients/stops gradient-name))

(h/html
 (h/head
  (h/link
   :href "https://necolas.github.io/normalize.css/latest/normalize.css"
   :rel "stylesheet"
   :type "text/css")
  (fonts.google-fonts/fonts fonts.config/fonts)
  (h/link
   :href "app.css"
   :rel "stylesheet"
   :type "text/css"))
 (h/body
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " gradient-stops) ")")
        :min-height "100vh"}

  (layout.middle-right/middle-right
   (h/div
    :css {
          :padding (clojure.string/join " " [layout.config/spacer-height 0 layout.config/spacer-height layout.config/spacer-width])
          :background-color "white"
          :border-width "4px"
          :border-style "dotted"
          :border-color (first gradient-stops)
          :border-image-source "url('border-dots.svg')"
          :border-image-slice "33% 33%"
          :border-image-repeat "round"
          :background-clip "padding-box"
          :border-right "none"}
    (h/div
     :css (fonts.hoplon/font-map->css-map fonts.config/playfair)
     (h/h1 "Dim valley pty. ltd."
      :css {:margin-bottom 0})
     "Modern business services.")

    (layout.spacer/vertical-spacer)

    (h/h2 "Amelia Schmidt")
    (h/blockquote "\"I believe the modern business puts customer needs at the heart of their business model")

    (h/h2 "David Meister")
    (h/blockquote "\"I believe the modern business is networked, data driven and highly automated")))))
