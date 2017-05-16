(ns pages.milly
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block))

(defn content []
 [
  (layout.header-block/header
   "Amelia Schmidt (Milly)"
   "I believe modern businesses should consciously develop and evolve their unique model in a way that, over time, the needs of the business and customer naturally become one and the same.")

  (layout.content-block/content-inner
   (h/a (h/img :src "linkedin.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://www.linkedin.com/in/ameliaschmidt/")
   (h/a (h/img :src "github.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://github.com/meelijane/")
   (h/a (h/img :src "medium.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://medium.com/@meeli/")
   (h/a (h/img :src "twitter.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://twitter.com/meelijane/"))

  (h/img
   :src "https://pbs.twimg.com/media/C8DGQUCVYAABgc-.jpg:large"
   :css {:width "100%"
         :margin "4px 0"})

  (layout.content-block/content-inner
   (h/h2 "What I do")
   (h/p "I see design as a mode of communication. My practice is centred around people and my work is collaborative and facilitative. It's less important to me that my opinion is what we deliver and more important that we solve problems for people in the most elegant and efficient way we can.")
   (h/p "I achieve this through " (h/strong "user experience design, user interface design and engineering, modern business education, written communication and community engagement and ambassadorship."))
   (h/p "I have developed and implemented design and front-end systems for products, focusing on sustainability and extensibility. I have researched and built products from the ground up, including " (h/a :href "https://estimate-work.com" "Estimate Work.") " I speak regularly on panels and teach seminars at meetups and educational organisations like General Assembly. I write across a range of topics including culture, philosophy and technology for international business news publication, Quartz.")

   (h/h2 "User experience design")
   (h/strong "User experience design is a series of activities that generate and facilitate ideas from multiple parties, including your end-users, which allows for a strategy and delivery that has a high likelihood of success due to mitigation of personal bias and an openness to solving problems by facing them head-on. I offer the following UX services, and more:")

   (h/ul
    (h/li "Usability testing at all phases of the product lifecycle")
    (h/li "User interface prototyping and wireframing using various softwares including Axure, Balsamiq, or by hand")
    (h/li "Multi-faceted user experience research and data synthesis, both remote and in person")
    (h/li "Planning and facilitation of workshops and stakeholder management activities leveraging popular frameworks and methdologies such as GV Design Sprint, Lean UX, Human Centred Design, Design Thinking, Design Studios, Jobs To Be Done, etc."))

   (h/h2 "User interface engineering and design")
   (h/strong "When designing web interfaces, I am uniquely able to iterate quickly and easily in that I am able to execute visual design, engineering and content creation/strategy. I can provide the following services:")

   (h/ul
    (h/li "Advanced HTML/CSS implementations of preprocessors, frameworks, and other abstractions")
    (h/li "Custom JavaScript leveraging popular frameworks such as React, Angular, jQuery, etc.")
    (h/li "Custom Clojure(Script) using the Hoplon UI framework (this site is built on Hoplon)")
    (h/li "Visual design assets using various programs, including Sketch, Adobe XD, etc.")
    (h/li "Content strategy and delivery for interfaces.")
    (h/li "Modular design and component-driven design systems."))

   (h/h2 "Modern business education")
   (h/strong "I believe modern businesses should take advantage of the collaborative, innovative techniques emerging from the design and engineering communities. Cross-functional learning and collaboration is key to organisations thriving in a world growing every more agile. I can prepare and present educational courses on the following topics:")

   (h/ul
    (h/li "Agile project management")
    (h/li "Design thinking")
    (h/li "HTML, CSS and JavaScript fundamentals")
    (h/li "Web computer science fundamentals")
    (h/li "What is user experience design?"))

   (h/h2 "Public speaking, community engagement and ambassadorship")
   (h/strong "I am passionate about encouraging young women to thrive in the technology industry. I strongly believe that we can improve the way businesses work and the services they provide by creating more diverse and open workplaces. I spend time engaging with the local community to promote cross-functional knowledge and skillsharing, design thinking across different business practices and design and engineering education for all levels. I'm available on request for the following:")
   (h/ul
    (h/li "Panel moderation or participation")
    (h/li "Seminars, webinars, keynotes or talks")
    (h/li "Mentoring")
    (h/li "Design leadership and advice")))])
