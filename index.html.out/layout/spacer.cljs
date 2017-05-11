(ns layout.spacer
 (:require
  layout.config
  [hoplon.core :as h]))

(defn vertical-spacer
 ([] (vertical-spacer nil))
 ([height]
  (let [height (or height layout.config/spacer-height)]
   (h/div :css {:height height}))))
