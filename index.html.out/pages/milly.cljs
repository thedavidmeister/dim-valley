(ns pages.milly
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block))

(defn content []
 [
  (layout.header-block/header
   "Amelia Schmidt"
   "I believe the modern business consciously develops and evolves its unique model and way of doing business such that, over time, the needs of the business and customer quite naturally become one and the same.")

  (h/img
   :src "https://pbs.twimg.com/media/C8DGQUCVYAABgc-.jpg:large"
   :css {:width "100%"
         :margin "4px 0"})

  (layout.content-block/content-inner
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

   (h/p "I am passionate about the next generation of coders being women."))])
