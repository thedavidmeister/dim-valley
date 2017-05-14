// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.hoplon.google_fonts.dom');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('wheel.hoplon.stylesheet.dom');
goog.require('wheel.hoplon.google_fonts.api');
/**
 * Given a sequence of fonts returns the stylesheet link to Google Fonts
 */
wheel.hoplon.google_fonts.dom.link = (function wheel$hoplon$google_fonts$dom$link(fonts__$1){
return wheel.hoplon.stylesheet.dom.link.call(null,wheel.hoplon.google_fonts.api.fonts__GT_url.call(null,fonts__$1));
});

//# sourceMappingURL=dom.js.map