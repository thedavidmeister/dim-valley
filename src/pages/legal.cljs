(ns pages.legal
 (:require
  [hoplon.core :as h]
  layout.content-block
  wheel.link.hoplon
  wheel.abn.hoplon))

(defn content []
 (h/div
  (layout.content-block/content-inner
   (h/h1 "Dim Valley Pty. Ltd.")
   (h/p
    "Est. 2017-03-20"
    (h/br)
    "A.B.N. " (wheel.abn.hoplon/abn "38 617 641 595"))
   (h/h2 "Insurances")
   (h/h3 "Professional Indemnity, Public & Products Liability")
   (h/p
    "Insurer: " (wheel.link.hoplon/external "https://www.dualaustralia.com.au/" "Dual Australia Pty. Ltd.")
    (h/br)
    "Professional Indemnity limit: " (h/strong "A$2,000,000")
    (h/br)
    "Public & Products Liability limit: " (h/strong "A$20,000,000")
    (h/br)
    "Certificate of Currency (2017-08-08): " (wheel.link.hoplon/external "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/legal-docs/Certificate+of+currency+2017-8-8+P-IT016234517I-3.pdf" "Dim Valley Pty. Ltd. & Nice Feature Pty. Ltd.")))))
