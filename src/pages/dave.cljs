(ns pages.dave
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block))

(defn content []
 [
  (layout.header-block/header
   "David Meister (Dave)"
   "I believe that technology should be designed to outlast its creators. Well-designed systems start slow and quickly speed up, instead of starting fast and immediately slowing down. Composable, simple systems that leverage automation are easily usable for both people and machines. The same principles apply to businesses at various stages of their process.")

  (layout.content-block/content-inner
   (h/a (h/img :src "github.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://github.com/thedavidmeister/"))

  (h/img
   :src "dave-photo.png"
   :css {:width "100%"}
   :margin "4px 0")

  (layout.content-block/content-inner
   (h/h2 "What I do")
   (h/p "With 10+ years of experience building software, I spend less time worrying about syntax and more time thinking about the lifecycle of a project. My way of seeing the world is big picture, but that's not to say I don't care for the details. Rather, I evaluate the importance of every detail and spend time on them if their value is high.")
   (h/p "Practically, this means that I'm often found advising on projects before they begin, evaluating tech stacks, approaches and high level decisions that make or break a project. I am skilled in stakeholder management meetings, tender responses, R&D documentation and project planning. I have a particular interest in decisions that have long flow-on effects, and helping teams understand the trade-offs they are making before rushing blindly in based on gut feel.")
   (h/p "I find the Theory of Constraints to be a big influence on the way I solve problems. Methodically working through a problem, unblocking each constraint, is something I am well-practised in. With my experience, I don't find it overwhelming to work on problems for days at a time if need be.")

   (h/h2 "Tender responses")
   (h/p "Responding to tenders and project briefs requires a combination of business nous and technical understanding that I am uniquely positioned to offer.")

   (h/ul
    (h/li "")
    (h/li ""))

   (h/h2 "Tech stack planning")
   (h/p "I have experience across various tech stacks, OO, imperative and functional languages included. I have spent a long time comparing and researching different approaches and my philosophy is that every project and unique and there's no one-size-fits-all appraoch.")

   (h/ul
    (h/li "")
    (h/li ""))

   (h/h2 "Prototyping and R&D")
   (h/p "As a senior engineer I'm capable of spinning up prototypes and spikes where needed. I have experience with R&D reporting and documentation and am .")

   (h/ul
    (h/li "")
    (h/li "")))])
