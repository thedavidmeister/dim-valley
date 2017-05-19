// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('fonts.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
fonts.config.default_fallback = "sans-serif";
fonts.config.playfair = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wheel$font_SLASH_name,"Playfair Display",cljs.core.cst$kw$wheel$font_SLASH_fallback,"serif"], null);
fonts.config.raleway = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wheel$font_SLASH_name,"Raleway",cljs.core.cst$kw$wheel$font_SLASH_variants,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["400","700"], null)], null);
fonts.config.fonts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fonts.config.playfair,fonts.config.raleway], null);
