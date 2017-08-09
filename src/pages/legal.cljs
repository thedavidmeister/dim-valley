(ns pages.legal
 (:require
  [hoplon.core :as h]
  layout.content-block
  wheel.link.hoplon))

(defn content []
 (layout.content-block/content-inner
  (h/h1 "Legal documents")
  (h/h2 "Insurances")
  (h/h3 "Professional Indemnity, Public & Products Liability")
  (h/p
   "Insurer: " (wheel.link.hoplon/external "https://www.dualaustralia.com.au/" "Dual Australia Pty. Ltd.")
   (h/br)
   "Professional Indemnity: $AUD 2,000,000"
   (h/br)
   "Public & Products Liability: $AUD 20,000,000"
   (h/br)
   "Certificate of Currency (2017-08-08): " (wheel.link.hoplon/external "https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/legal-docs/Certificate+of+currency+2017-8-8+P-IT016234517I-3.pdf" "Dim Valley Pty. Ltd. & Nice Feature Pty. Ltd"))))
