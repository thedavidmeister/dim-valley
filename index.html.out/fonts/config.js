// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('fonts.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
fonts.config.default_fallback = "sans-serif";
fonts.config.gentium_basic = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wheel$font_SLASH_name,"Gentium Basic",cljs.core.cst$kw$wheel$font_SLASH_fallback,"serif"], null);
fonts.config.open_sans = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wheel$font_SLASH_name,"Open Sans",cljs.core.cst$kw$wheel$font_SLASH_variants,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["400","700"], null)], null);
fonts.config.fonts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fonts.config.gentium_basic,fonts.config.open_sans], null);
