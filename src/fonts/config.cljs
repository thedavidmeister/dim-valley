(ns fonts.config)

(def default-fallback "sans-serif")

(def playfair {:wheel.font/name "Playfair Display"
               :wheel.font/fallback "serif"})

(def raleway {:wheel.font/name "Raleway"
              :wheel.font/variants ["400" "700"]})

(def fonts [playfair raleway])
