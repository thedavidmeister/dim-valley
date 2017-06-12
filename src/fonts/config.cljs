(ns fonts.config)

(def default-fallback "sans-serif")

(def gentium-basic {:wheel.font/name "Gentium Basic"
                    :wheel.font/fallback "serif"})

(def open-sans {:wheel.font/name "Open Sans"
                :wheel.font/variants ["400" "700"]})

(def fonts [gentium-basic open-sans])
