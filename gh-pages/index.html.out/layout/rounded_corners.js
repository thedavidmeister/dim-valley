// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.rounded_corners');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.rounded_corners.wrapper = (function layout$rounded_corners$wrapper(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23846 = arguments.length;
var i__9916__auto___23847 = (0);
while(true){
if((i__9916__auto___23847 < len__9915__auto___23846)){
args__9922__auto__.push((arguments[i__9916__auto___23847]));

var G__23848 = (i__9916__auto___23847 + (1));
i__9916__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__23843 = cljs.core.cst$kw$css;
var G__23844 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$border_DASH_radius,layout.config.border_radius_amount,cljs.core.cst$kw$_DASH_webkit_DASH_border_DASH_radius,layout.config.border_radius_amount], null);
var G__23845 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23843,G__23844,G__23845) : hoplon.core.div.call(null,G__23843,G__23844,G__23845));
});

layout.rounded_corners.wrapper.cljs$lang$maxFixedArity = (0);

layout.rounded_corners.wrapper.cljs$lang$applyTo = (function (seq23842){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23842));
});

