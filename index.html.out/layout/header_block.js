// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.header_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.content_block');
goog.require('wheel.font.core');
layout.header_block.header = (function layout$header_block$header(heading,tagline){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24053 = cljs.core.cst$kw$css;
var G__24054 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"2.67rem 0"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__24055 = (function (){var G__24057 = cljs.core.cst$kw$css;
var G__24058 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$font_DASH_size,"4rem"], null);
var G__24059 = heading;
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$3(G__24057,G__24058,G__24059) : hoplon.core.h1.call(null,G__24057,G__24058,G__24059));
})();
var G__24056 = (function (){var G__24060 = cljs.core.cst$kw$css;
var G__24061 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"1rem"], null);
var G__24062 = tagline;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__24060,G__24061,G__24062) : hoplon.core.span.call(null,G__24060,G__24061,G__24062));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24053,G__24054,G__24055,G__24056) : hoplon.core.div.call(null,G__24053,G__24054,G__24055,G__24056));
})()], 0));
});
