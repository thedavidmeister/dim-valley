(ns pages.dave
 (:require
  [hoplon.core :as h]
  layout.content-block
  layout.header-block
  layout.body-text
  image.hoplon
  social.hoplon
  wheel.abn.core
  wheel.link.hoplon))

(defn content []
 [
  (image.hoplon/cropped
   :src "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave-photo.jpg"
   :width "100%"
   :height "400px"
   :css {:margin-bottom "4px"})

  (layout.content-block/content-inner
   (layout.spacer/vertical-spacer)
   (social.hoplon/icon-links
    :linkedin "https://www.linkedin.com/in/dmeister/"
    :github "https://github.com/thedavidmeister"
    :medium "https://medium.com/@thedavidmeister"
    :twitter "https://twitter.com/thedavidmeister"))

  (layout.header-block/header
   "David Meister (Dave)"
   "Owner and CTO at Dim Valley Pty. Ltd. & Nice Feature Pty. Ltd.")

  (layout.content-block/content-inner
   (h/h2 "I believe...")
   (layout.body-text/p "Simple beats complex.")
   (layout.body-text/p "Quality is a process.")
   (layout.body-text/p "Machines are better machines than humans.")
   (layout.body-text/p "Effective systems are composed from effective parts."))

  (layout.content-block/content-inner
   (h/h2 "Experience")
   (h/h3 "Commercial")
   (h/ul
    (h/li (h/strong "10+ years total") " professional web experience.")
    (h/li (h/strong "Started out") " making cool MySpace pages for local indie bands.")
    (h/li (h/strong "3 years building") " " (wheel.link.hoplon/external "http://furstmedia.com.au/" "Furst Media's") " publishing platform (10% MoM growth).")
    (h/li (h/strong "5 years owning and operating") " my previous digital agency, " (wheel.link.hoplon/external (wheel.abn.core/abr-search-url "58147061121") "Godel") ".")
    (h/li (h/strong "2 years as chief solutions architect") " at " (wheel.link.hoplon/external "http://equiem.com.au/" "Equiem") " " (wheel.link.hoplon/external "http://equiem.com.au/2016" "(100% YoY growth)") ".")
    (h/li (h/strong "Current owner and CTO") " of Dim Valley and Nice Feature."))
   (h/h3 "Open source")
   (h/ul
    (h/li
     (h/strong (wheel.link.hoplon/external "http://drupalcores.com/countries.html" "6th in Australia"))
     " for contributions to " (wheel.link.hoplon/external "https://www.drupal.org/" "Drupal") " core.")
    (h/li
     (h/strong "Fully automated " (wheel.link.hoplon/external "https://github.com/thedavidmeister/radiant-brook" "bitcoin trading bot"))
     " written in " (wheel.link.hoplon/external "https://symfony.com/" "PHP/Symfony") ".")
    (h/li
     (h/strong (wheel.link.hoplon/external "http://xoroshiro.di.unimi.it/" "Xoroshiro128+") " pseudorandom number generator")
     " implemented " (wheel.link.hoplon/external "https://github.com/thedavidmeister/xoroshiro128" "in clojure") ".")
    (h/li
     (h/strong "The " (wheel.link.hoplon/external "https://hoplon.io/" "Hoplon") " web framework")
     ", contributing to development, support and documentation.")
    (h/li
     (h/strong (wheel.link.hoplon/external "https://github.com/thedavidmeister/dim-valley" "This website"))
     " built in " (wheel.link.hoplon/external "https://hoplon.io/" "Hoplon") ", leveraging a ton of " (wheel.link.hoplon/external "https://github.com/thedavidmeister/wheel" "my own intellectual property") ".")))

  (layout.content-block/content-inner
   (h/h2 "Availability")
   (layout.body-text/p
    "Building " (wheel.link.hoplon/external "https://estimate-work.com/" "Estimate Work") " is currently my primary focus, limiting my overall availability, but I am happy to provide services to new and existing clients on an ad-hoc basis.")

   (layout.body-text/p
    "I am available " (h/strong "up to 3 days per week") " to contract on projects with a clearly defined scope and deliverables.")

   (layout.body-text/p
    "My preference is for most or all project work to be " (h/strong "conducted remotely") ", using common telecommute technologies such as Google Hangouts, Slack, Flowdock, etc. to stay connected and in sync."))

  (layout.content-block/content-inner
   (h/h2 "Rate card")
   (layout.body-text/p
    "1 hour = $AUD 120 + GST"
    (h/br)
    "1 day (prebooked) = $AUD 800 + GST"))

  (layout.content-block/content-inner
   (h/h2 "Case studies")
   (h/h3 "Estimate Work")
   (layout.body-text/p
    "Estimate Work is a project planning tool designed to assist small teams working with hard deadlines, limited resources and significant risks to quantify and manage their " (wheel.link.hoplon/external "https://en.wikipedia.org/wiki/Project_management_triangle" "iron triangle") ".")
   (layout.body-text/p
    "The Estimate Work product is being bootstrapped by Milly and myself and is 100% self-funded. Many key features are still in planning or active development stages. Regardless, our experience with the chosen tech stack and early feedback from the target market are both positive.")
   (layout.body-text/p
    (h/h4 "Estimate Work's tech stack:")
    (h/ul
     (h/li (wheel.link.hoplon/external "https://clojure.org/" "Clojure") " + " (wheel.link.hoplon/external "https://clojurescript.org/" "ClojureScript") " for server and client side programming")
     (h/li (wheel.link.hoplon/external "https://blog.estimate-work.com/a-new-world-writing-css-in-clojurescript-and-life-after-sass-bdf5bc80a24f" "Garden CSS preprocessor/abstraction"))
     (h/li (wheel.link.hoplon/external "http://hoplon.io/" "Hoplon") " web framework")
     (h/li (wheel.link.hoplon/external "https://github.com/tonsky/datascript" "Datascript") " as a client-side database")
     (h/li (wheel.link.hoplon/external "https://www.rethinkdb.com/" "RethinkDB") " as a back-end data persistence layer")
     (h/li (wheel.link.hoplon/external "https://auth0.com/" "Auth0") " for authentiation/SSO")
     (h/li (wheel.link.hoplon/external "https://stripe.com/au" "Stripe") " as payment gateway")
     (h/li (wheel.link.hoplon/external "https://github.com/ptaoussanis/sente" "AJAX + WebSockets") " for client/server communication"))
    (layout.spacer/vertical-spacer)))])
