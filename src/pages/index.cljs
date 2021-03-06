(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  fonts.config
  wheel.font.google.hoplon
  layout.config
  layout.spacer
  layout.middle-right
  menu.flower
  menu.drawers
  pages.milly
  pages.dim-valley
  pages.legal
  pages.contact
  pages.work-with-us
  pages.github
  pages.dave
  pages.privacy
  styles.core
  mapbox.dom))

(h/html
 (h/head
  (wheel.font.google.hoplon/link fonts.config/fonts)
  (styles.core/style)
  (mapbox.dom/stylesheet))
 (h/body
  :css {:background (str "linear-gradient(135deg, " (clojure.string/join ", " (colours.ui-gradients/stops)) ")")
        :min-height "100vh"
        :width "100vw"
        :overflow-x "hidden"
        :background-attachment "fixed"}

  (let [items [{:text "about" :f pages.dim-valley/content :handler :about}
               {:text "legal" :f pages.legal/content :handler :legal}
               {:text "privacy" :f pages.privacy/content :handler :privacy}
               {:text "contact" :f pages.contact/content :handler :contact}
               {:text "rates" :f pages.work-with-us/content :handler :work-with-us}
               ; {:url "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/octocat.jpg" :f pages.github/content :handler :github}
               {:url "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png" :f pages.dave/content :handler :dave}
               {:url "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png" :f pages.milly/content :handler :milly}]]
   [
    (menu.flower/menu
     items
     150)

    (layout.middle-right/middle-right
     (menu.drawers/drawers
      (h/for-tpl [item items]
       (menu.drawers/drawer
        (j/cell= (= (wheel.route.core/path->bidi route.state/history route.config/routes route.config/fallback-handler)
                    (select-keys item [:handler])))
        (layout.content-block/content-outer
         (h/div
          (h/div (j/cell= ((:f item))))))))))])))
