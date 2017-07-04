(ns route.config
 (:require wheel.route.core))

(def routes
 ["" {"dave" :dave
      "milly" :milly
      "legal" :legal
      "github" :github
      "contact" :contact
      "about" :about}])

(assert (wheel.route.core/routes? routes))

(def fallback-handler :about)
