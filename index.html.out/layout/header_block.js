// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24099 = cljs.core.cst$kw$css;
var G__24100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__24101 = (function (){var G__24103 = cljs.core.cst$kw$css;
var G__24104 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$font_DASH_size,"4rem"], null);
var G__24105 = heading;
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__24103,G__24104,G__24105) : hoplon.core.h1.call(null,G__24103,G__24104,G__24105));
})();
var G__24102 = (function (){var G__24106 = cljs.core.cst$kw$css;
var G__24107 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"1rem"], null);
var G__24108 = tagline;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__24106,G__24107,G__24108) : hoplon.core.span.call(null,G__24106,G__24107,G__24108));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24099,G__24100,G__24101,G__24102) : hoplon.core.div.call(null,G__24099,G__24100,G__24101,G__24102));
})()], 0));
});
