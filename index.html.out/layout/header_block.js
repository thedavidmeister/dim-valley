// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24087 = cljs.core.cst$kw$css;
var G__24088 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__24089 = (function (){var G__24091 = heading;
var G__24092 = cljs.core.cst$kw$css;
var G__24093 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$font_DASH_size,"4rem"], null);
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__24091,G__24092,G__24093) : hoplon.core.h1.call(null,G__24091,G__24092,G__24093));
})();
var G__24090 = (function (){var G__24094 = tagline;
var G__24095 = cljs.core.cst$kw$css;
var G__24096 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"1rem"], null);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__24094,G__24095,G__24096) : hoplon.core.span.call(null,G__24094,G__24095,G__24096));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24087,G__24088,G__24089,G__24090) : hoplon.core.div.call(null,G__24087,G__24088,G__24089,G__24090));
})()], 0));
});
