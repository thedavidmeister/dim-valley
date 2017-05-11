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
     {:css {:width "70vw"}}

     (h/div
      :css (fonts.hoplon/font-map->css-map fonts.config/playfair)
      (h/h1 "Dim valley pty. ltd."
       :css {:margin-bottom 0})
      "Modern business services.")

     (layout.spacer/vertical-spacer)

     (h/img :src "https://pbs.twimg.com/media/C8DGQUCVYAABgc-.jpg:large" :css {:width "100%"})
     (h/blockquote "\"I believe the modern business consciously develops and adopts a model of doing business such that the needs of the business and customer very naturally become one and the same.")
     (h/h2 "Amelia Schmidt")

     (h/p "I am currently available for user experience (UX) research contracts, preparing and presenting educational courses, front-end engineering, and other public speaking/panel engagements.")
     (h/p "I am passionate about the next generation of coders being women. I recently volunteered time and provided professional services for both " (h/a :href "https://codelikeagirl.org/" :target "_blank" "Code like a girl") " and " (h/a :href "https://girlsintech.org/" :target "_blank" "Girls in Tech") ".")

     (h/h2 "David Meister")
     (h/blockquote "\"I believe the modern business is networked, data driven and highly automated"))))))
