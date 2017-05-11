// Compiled by ClojureScript 1.9.293 {}
goog.provide('fonts.config');
goog.require('cljs.core');
fonts.config.default_fallback = "sans-serif";
fonts.config.playfair = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Playfair Display",new cljs.core.Keyword(null,"fallback","fallback",761637929),"serif"], null);
fonts.config.raleway = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Raleway",new cljs.core.Keyword(null,"fallback","fallback",761637929),"sans-serif"], null);
fonts.config.fonts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fonts.config.playfair,fonts.config.raleway], null);

//# sourceMappingURL=config.js.map