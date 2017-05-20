// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20584 = cljs.core.cst$kw$css;
var G__20585 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__20586 = (function (){var G__20588 = heading;
var G__20589 = cljs.core.cst$kw$css;
var G__20590 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$font_DASH_size,"4rem"], null);
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__20588,G__20589,G__20590) : hoplon.core.h1.call(null,G__20588,G__20589,G__20590));
})();
var G__20587 = (function (){var G__20591 = tagline;
var G__20592 = cljs.core.cst$kw$css;
var G__20593 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"1rem"], null);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20591,G__20592,G__20593) : hoplon.core.span.call(null,G__20591,G__20592,G__20593));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20584,G__20585,G__20586,G__20587) : hoplon.core.div.call(null,G__20584,G__20585,G__20586,G__20587));
})()], 0));
});
