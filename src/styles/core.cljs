(ns styles.core
 (:require
  [hoplon.core :as h])
 (:require-macros
  wheel.slurp.core))

(defn normalize [] (wheel.slurp.core/slurp "https://necolas.github.io/normalize.css/latest/normalize.css"))

(defn style []
 (h/style
  [
   (normalize)
   (str "
* {
  box-sizing: border-box;
}

html {
 font-size: 62.5%;
}

body {
    margin: 0;
    padding: 0;
    font-size: 1.9rem;
    line-height: 2.9rem;
    font-family: 'Raleway', sans-serif;
    color: " colours.ui-gradients/base-colour ";
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  margin-top: 4.4rem;
}

ul {
 margin-left: 2rem;
}

img {
  display: block;
}

svg {
 fill: " colours.ui-gradients/base-colour ";
 fill-rule:evenodd;
 clip-rule:evenodd;
 stroke-linejoin:round;
 stroke-miterlimit:1.41421;
}

svg:hover {
 fill: black;
}

.clearfix:after, .clearfix:before {
  content: \"\";
  display: table;
  clear: both;
}

a {
 color: black;
}

a:hover {
 color: black;
}

ul {
 padding-left: 0;
}

ul li {
 list-style-type: circle;
 margin: 1em 0;
}
")]))
