// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.rounded_corners');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.rounded_corners.wrapper = (function layout$rounded_corners$wrapper(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24435 = arguments.length;
var i__9520__auto___24436 = (0);
while(true){
if((i__9520__auto___24436 < len__9519__auto___24435)){
args__9526__auto__.push((arguments[i__9520__auto___24436]));

var G__24437 = (i__9520__auto___24436 + (1));
i__9520__auto___24436 = G__24437;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24432 = cljs.core.cst$kw$css;
var G__24433 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$border_DASH_radius,layout.config.border_radius_amount,cljs.core.cst$kw$_DASH_webkit_DASH_border_DASH_radius,layout.config.border_radius_amount], null);
var G__24434 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24432,G__24433,G__24434) : hoplon.core.div.call(null,G__24432,G__24433,G__24434));
});

layout.rounded_corners.wrapper.cljs$lang$maxFixedArity = (0);

layout.rounded_corners.wrapper.cljs$lang$applyTo = (function (seq24431){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24431));
});

