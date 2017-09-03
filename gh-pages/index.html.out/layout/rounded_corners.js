// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.rounded_corners');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.rounded_corners.wrapper = (function layout$rounded_corners$wrapper(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21512 = arguments.length;
var i__8982__auto___21513 = (0);
while(true){
if((i__8982__auto___21513 < len__8981__auto___21512)){
args__8988__auto__.push((arguments[i__8982__auto___21513]));

var G__21514 = (i__8982__auto___21513 + (1));
i__8982__auto___21513 = G__21514;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21509 = cljs.core.cst$kw$css;
var G__21510 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$border_DASH_radius,layout.config.border_radius_amount,cljs.core.cst$kw$_DASH_webkit_DASH_border_DASH_radius,layout.config.border_radius_amount], null);
var G__21511 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21509,G__21510,G__21511) : hoplon.core.div.call(null,G__21509,G__21510,G__21511));
});

layout.rounded_corners.wrapper.cljs$lang$maxFixedArity = (0);

layout.rounded_corners.wrapper.cljs$lang$applyTo = (function (seq21508){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21508));
});

