(ns styles.core
 (:require
  [hoplon.core :as h])
 (:require-macros
  macros.slurp))

(defn normalize [] (macros.slurp/slurp "https://necolas.github.io/normalize.css/latest/normalize.css"))

(defn style []
 (h/style
  [
   (normalize)
   (str "
* {
  box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color: " colours.ui-gradients/base-colour ";
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: 'Playfair Display', serif;
}

img {
  display: block;
}

.clearfix:after, .clearfix:before {
  content: \"\";
  display: table;
  clear: both;
}

a {
 color: " colours.ui-gradients/secondary-colour ";
}

a:hover {
 color: black;
}
")]))
