(ns pages.legal
 (:require
  [hoplon.core :as h]
  layout.content-block
  wheel.link.hoplon
  wheel.abn.hoplon))

(defn content []
 (h/div
  (image.hoplon/default-header)
  (layout.content-block/content-inner
   (h/h1 "Dim Valley Pty. Ltd.")
   (layout.body-text/p
    "Est. 2017-03-20"
    (h/br)
    "A.B.N. " (wheel.abn.hoplon/abn "38 617 641 595"))

   (h/h2 "Contracts")
   (layout.body-text/p
    "We are generally pretty flexible and happy to negotiate contracts to meet real and reasonable needs but there are a few items that we take a firm stance on. The below is " (h/em "not") " a contract nor comprehensive, only an example of the most obvious considerations.")

   (h/h3 "Ability to negotiate")
   (layout.body-text/p
    (h/strong "We expect to read and negotiate any new contract " (h/em "before") " starting work."))
   (layout.body-text/p
    "We can provide a standard contract upon request.")
   (layout.body-text/p
    "Please allow time for and do not delay this process if you have urgent work.")

   (h/h3 "Intellectual property (IP)")
   (layout.body-text/p "Please do not expect us to transfer any IP before full payment of invoices has been made.")
   (layout.body-text/p "Don't expect us to review or warrant the legality of licenses in open source code we recommend or use. We prefer standard open source licenses such as LGPL/MIT/Eclipse where available but we are not lawyers and do not extensively review transitive dependencies.")
   (layout.body-text/p
    (h/strong "We will only transfer IP for code/documents delivered directly to your organisation's standard code/document repositories."))

   (h/h3 "Payment")
   (layout.body-text/p "We work and charge for time and materials " (h/em "de facto") ". Time includes any and all time tracked, materials includes reasonable travel expenses (among other things).")
   (layout.body-text/p "Other payment schedules, such as fixed fee, must be explicitly discussed and agreed to.")
   (layout.body-text/p "Payment must be made in full and on time.")
   (layout.body-text/p "We won't accept anything that limits our ability to collect payment.")

   (h/h3 "Not your employees")
   (layout.body-text/p "We maintain honest, above board and sustainable business relationships. We are not your employees and will avoid anything that reads like employment.")
   (layout.body-text/p "We have multiple clients, some of them may be directly or indirectly in competition with you now or in the future. We can agree to confidentiality but not exclusivity.")
   (layout.body-text/p "We can say \"no\" to you if you ask us to do something we consider unreasonable or outside the scope of our engagement.")
   (layout.body-text/p
    (h/strong "We expect contracts to be fair and include sensible protections and benefits to the ongoing business needs of " (h/em "all") " involved parties."))

   (h/h3 "Responsibility and liability")
   (layout.body-text/p "We will only take responsibility for things that we have direct and obvious control over.")
   (layout.body-text/p "We will not accept any liabilities that contradict clauses in our insurance policies.")
   (layout.body-text/p
    (h/strong "We will not accept liability significantly above and beyond the value of the contract."))

   (h/h3 "Kill fees")
   (layout.body-text/p "If you expect us to set aside many " (h/em "specific") " dates and times for your use we might request a \"kill fee\" clause.")
   (layout.body-text/p "This clause entitles us to a guaranteed minimum percentage (e.g. 60%) of the total expected value of the contract in the unlikely case that the project is cancelled outright by you after signing with us.")

   (h/h2 "Insurances")

   (h/h3 "Professional Indemnity, Public & Products Liability")
   (layout.body-text/p
    "Insurer: " (wheel.link.hoplon/external "https://www.dualaustralia.com.au/" "Dual Australia Pty. Ltd.")
    (h/br)
    "Professional Indemnity limit: " (h/strong "A$2,000,000")
    (h/br)
    "Public & Products Liability limit: " (h/strong "A$20,000,000")
    (h/br)
    "Certificate of Currency (valid until 2020-08-08): " (wheel.link.hoplon/external "https://dim-valley-public.s3-ap-southeast-2.amazonaws.com/legal-docs/2019-2020-dim-valley-certificate-of-currency.pdf" "Dim Valley Pty. Ltd. & Nice Feature Pty. Ltd."))

   (h/h3 "WorkCover")
   (layout.body-text/p
    "Insurer: " (wheel.link.hoplon/external "https://www.allianz.com.au" "Allianz")
    (h/br)
    "Certificate of Currency (valid until 30/06/2019): " (wheel.link.hoplon/external "https://dim-valley-public.s3-ap-southeast-2.amazonaws.com/legal-docs/2019_workcover_insurance_certificate_of_currency.pdf" "Dim Valley Pty. Ltd.")))))
