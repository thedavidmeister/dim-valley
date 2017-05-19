// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20579 = cljs.core.cst$kw$css;
var G__20580 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__20581 = (function (){var G__20583 = heading;
var G__20584 = cljs.core.cst$kw$css;
var G__20585 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$font_DASH_size,"4rem"], null);
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__20583,G__20584,G__20585) : hoplon.core.h1.call(null,G__20583,G__20584,G__20585));
})();
var G__20582 = (function (){var G__20586 = tagline;
var G__20587 = cljs.core.cst$kw$css;
var G__20588 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"1rem"], null);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20586,G__20587,G__20588) : hoplon.core.span.call(null,G__20586,G__20587,G__20588));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20579,G__20580,G__20581,G__20582) : hoplon.core.div.call(null,G__20579,G__20580,G__20581,G__20582));
})()], 0));
});
