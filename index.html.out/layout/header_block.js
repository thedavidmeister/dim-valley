// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20353 = cljs.core.cst$kw$css;
var G__20354 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__20355 = (function (){var G__20357 = cljs.core.cst$kw$css;
var G__20358 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,"0 0 1.2rem 0"], null);
var G__20359 = heading;
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__20357,G__20358,G__20359) : hoplon.core.h1.call(null,G__20357,G__20358,G__20359));
})();
var G__20356 = (function (){var G__20360 = cljs.core.cst$kw$css;
var G__20361 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"2.2rem",cljs.core.cst$kw$max_DASH_width,"600px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$margin_DASH_top,"1rem"], null);
var G__20362 = tagline;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20360,G__20361,G__20362) : hoplon.core.span.call(null,G__20360,G__20361,G__20362));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20353,G__20354,G__20355,G__20356) : hoplon.core.div.call(null,G__20353,G__20354,G__20355,G__20356));
})()], 0));
});
