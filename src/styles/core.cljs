(ns styles.core
 (:require
  [hoplon.core :as h]
  colours.ui-gradients)
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
 font-size: 1.4rem;
 line-height: 2.9rem;
 font-family: 'Open Sans', sans-serif;
 color: " colours.ui-gradients/base-colour ";
}

body > table:after {
 content: '';
 width: 100%;
 height: 100%;
 position: fixed;
 bottom: 0;
 top: 0;
 left: 0;
 right: 0;
 background-image: url('https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/mountain-range-outline-silhouette.svg');
 background-position: bottom;
 z-index: -1;
 background-repeat-y: no-repeat;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  font-family: 'Gentium Basic', serif;
  margin-top: 2.4rem;
}

h1 {
 font-size: 4.8rem;
 line-height: 5.2rem;
 font-weight: bold;
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
 display: inline-block;
 text-decoration: underline;
 cursor: pointer;
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
