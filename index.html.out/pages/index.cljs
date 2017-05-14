(ns ^{:hoplon/page "index.html"} pages.index
 (:require
  colours.ui-gradients
  [hoplon.core :as h]
  [javelin.core :as j]
  hoplon.jquery
  fonts.config
  wheel.hoplon.google-fonts.dom
  layout.config
  layout.spacer
  layout.middle-right
  menu.flower
  menu.drawers
  pages.milly
  pages.dim-valley
  pages.legal
  pages.github
  pages.dave
  styles.core
  mapbox.dom))

(h/html
 (h/head
  (wheel.hoplon.google-fonts.dom/link fonts.config/fonts)
  (styles.core/style)
  (mapbox.dom/stylesheet))
 (h/body
  :css {:background (str "linear-gradient(to left, " (clojure.string/join ", " (colours.ui-gradients/stops)) ")")
        :min-height "100vh"
        :width "100vw"
        :overflow-x "hidden"}

  (let [routes [{:text "dim valley pty. ltd." :f pages.dim-valley/content}
                {:text "legal" :f pages.legal/content}
                {:url "octocat.png" :f pages.github/content}
                {:url "dave.png" :f pages.dave/content}
                {:url "milly.png" :f pages.milly/content}]
        current-route (let [c (j/cell nil)
                            route-in-routes? (fn [r rs] (some? (first (filter #(= r %) rs))))]
                       (j/cell=
                        (if (route-in-routes? c routes)
                         c
                         (first routes))
                        #(reset! c %)))]
   [
    (menu.flower/menu
     current-route
     routes
     200)

    (layout.middle-right/middle-right
     (menu.drawers/drawers
      (h/for-tpl [route routes]
       (menu.drawers/drawer
        (j/cell= (= route current-route))
        "calc(75vw + 4px)"

        (layout.content-block/content-outer
         (h/div
          {:css {:width "cacl(60vw - 4px)"}}
          (h/div (j/cell= ((:f route))))))))))])))
