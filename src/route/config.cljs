(ns route.config
 (:require wheel.route.core))

(def routes
 ["" {"dave" :dave
      "milly" :milly
      "legal" :legal
      "github" :github
      "work-with-us" :work-with-us
      "contact" :contact
      "about" :about
      "privacy" :privacy}])

(assert (wheel.route.core/routes? routes))

(def fallback-handler :about)
