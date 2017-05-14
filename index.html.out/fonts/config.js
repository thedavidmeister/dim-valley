// Compiled by ClojureScript 1.9.542 {}
goog.provide('fonts.config');
goog.require('cljs.core');
fonts.config.default_fallback = "sans-serif";
fonts.config.playfair = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"Playfair Display",new cljs.core.Keyword("wheel.font","fallback","wheel.font/fallback",-846790857),"serif"], null);
fonts.config.raleway = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wheel.font","name","wheel.font/name",109325103),"Raleway",new cljs.core.Keyword("wheel.font","variants","wheel.font/variants",-702745790),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["400","700"], null)], null);
fonts.config.fonts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fonts.config.playfair,fonts.config.raleway], null);

//# sourceMappingURL=config.js.map