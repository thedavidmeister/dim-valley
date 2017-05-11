(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  fonts.config
  fonts.hoplon
  fonts.google-fonts
  layout.config
  layout.spacer
  layout.middle-right
  menu.flower))

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
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops)) ")")
        :color (last (colours.ui-gradients/stops))
        :min-height "100vh"}

  (menu.flower/menu
   (reverse
    [
     {:url "milly.png"}
     {:url "dave.png"}
     {:url "octocat.png"}
     {:text "legal"}
     {:text "blog"}
     {:text "dim valley pty. ltd."}])
   200)

  (layout.middle-right/middle-right
   (h/div
    :css {
          :padding (clojure.string/join " " [0 0 layout.config/spacer-height layout.config/spacer-width])
          :background-color "white"
          :border-width "4px"
          :border-style "dotted"
          :border-color (last (colours.ui-gradients/stops))
          :border-image-source "url('border-dots.svg')"
          :border-image-slice "33% 33%"
          :border-image-repeat "round"
          :background-clip "padding-box"
          :border-right "none"}
    (h/div
     {:css {:width "cacl(60vw - 4px)"}}

     (h/div
      :css (merge
            {:margin "2.67rem 0"}
            (fonts.hoplon/font-map->css-map fonts.config/playfair))
      (h/h1 "Amelia Schmidt"
       :css {:margin 0
             :font-size "4rem"})
      (h/span "I believe the modern business consciously develops and evolves its unique model and way of doing business such that, over time, the needs of the business and customer quite naturally become one and the same."
       :css {:font-size "1rem"}))

     (h/img
      :src "https://pbs.twimg.com/media/C8DGQUCVYAABgc-.jpg:large"
      :css {:width "calc(75vw - 4px)"
            :margin-left "-5vw"})

     (h/h2 "User experience research")

     (h/ul
      "I can provide the following UX services:"
      (h/li "Design Sprint, Lean and Design Thinking workshops and planning facilitator")
      (h/li "User testing at all phases of the product lifecycle")
      (h/li "User interface prototyping and wireframing")
      (h/li "User experience research data synthesis"))

     (h/h2 "User interface engineering")

     (h/ul
      "I can provide the following front-end engineering services:"
      (h/li "Advanced HTML/CSS implementations of preprocessors, frameworks, and other abstractions")
      (h/li "Custom JavaScript leveraging popular frameworks such as React, Angular, jQuery, etc.")
      (h/li "Custom Clojure(Script) using the Hoplon UI framework (this site is built on Hoplon)"))

     (h/h2 "Modern business education")

     (h/ul
      "I can prepare and present educational courses on the following topics:"
      (h/li "Agile project management")
      (h/li "Design thinking")
      (h/li "HTML, CSS and JavaScript")
      (h/li "Web computer science fundamentals"))

     (h/h2 "Public speaking, panel discussions, social change")

     (h/p "I am passionate about the next generation of coders being women."))))))
