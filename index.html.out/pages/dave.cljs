(ns pages.dave
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block))

(defn content []
 [
  (layout.header-block/header
   "David Meister (Dave)"
   [
    (h/p "The modern company understands how to apply both brains and machine to any problem.")
    (h/p
     "Good design starts slow but gains momentum over time."
     (h/br)
     "Bad design always loses its momentum in the end.")
    (h/p
     "I love the process of building large systems from composable, rock-solid smaller parts.")
    (h/a (h/img :src "github.svg" :css {:width "30px" :display "inline-block" :margin-right "10px"}) :href "https://github.com/thedavidmeister/")])

  (layout.content-block/content-inner
   (h/h2 "Availability")
   (h/p
    "My primary focus is building a " (wheel.link.hoplon/external "https://estimate-work.com/" "project planning and estimation tool") " for agencies and freelancers."
    (h/br)
    (h/strong "I am available for ad-hoc contract work,") " where the weekly commitment is less than full-time.")
   (layout.spacer/vertical-spacer))

  (h/img
   :src "dave-photo.png"
   :css {:width "100%"}
   :margin "4px 0")

  (layout.content-block/content-inner
   (h/h2 "What I do")
   (h/p
    "After 10+ years of experience building web software, I have learned to spend less time worrying about the surface details of delivery and more time thinking about the entire software lifecycle. "
    "My way of seeing the world is to leverage long-term trends to my advantage and try to understand the emergent behaviour of systems. "
    "That's not to say I don't care for the details. Rather, I evaluate the importance of each detail and only dedicate time to something if its value is high.")
   (h/p
    "Practically, this means that I'm often found advising on projects before they begin, evaluating tech stacks, approaches and high level decisions that could make or break a project down the line."
    "I owned a boutique digital agency for 5 years so am experienced in stakeholder management, producing tender responses, R&D documentation and project planning."
    "I have a particular interest in decisions that have long term flow-on effects, and helping teams understand the trade-offs they are making before rushing blindly in based on gut feel.")
   (h/p
    "I find the Theory of Constraints to be a big influence on the way I solve problems. Methodically working through a problem, finding and managing each constraint, is something that I enjoy."
    "With my experience, I don't find it overwhelming to work on a specific problem for days or even weeks at a time if need be."))])

   ; (h/h2 "Tender responses")
   ; (h/p "Responding to tenders and project briefs requires a combination of business nous and technical understanding that I am uniquely positioned to offer.")
   ;
   ; (h/ul
   ;  (h/li "")
   ;  (h/li ""))
   ;
   ; (h/h2 "Tech stack planning")
   ; (h/p "I have experience across various tech stacks, OO, imperative and functional languages included. I have spent a long time comparing and researching different approaches and my philosophy is that every project and unique and there's no one-size-fits-all appraoch.")
   ;
   ; (h/ul
   ;  (h/li "")
   ;  (h/li ""))
   ;
   ; (h/h2 "Prototyping and R&D")
   ; (h/p "As a senior engineer I'm capable of spinning up prototypes and spikes where needed. I have experience with R&D reporting and documentation and am .")
   ;
   ; (h/ul
   ;  (h/li "")
   ;  (h/li "")))])
