// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.font.google.hoplon');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('wheel.stylesheet.hoplon');
goog.require('wheel.font.google.core');
/**
 * Given a sequence of fonts returns the stylesheet link to Google Fonts
 */
wheel.font.google.hoplon.link = (function wheel$font$google$hoplon$link(fonts__$1){
return wheel.stylesheet.hoplon.link.call(null,wheel.font.google.core.fonts__GT_url.call(null,fonts__$1));
});

//# sourceMappingURL=hoplon.js.map