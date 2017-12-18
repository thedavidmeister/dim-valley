// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
goog.require('layout.rounded_corners');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24467 = arguments.length;
var i__9520__auto___24468 = (0);
while(true){
if((i__9520__auto___24468 < len__9519__auto___24467)){
args__9526__auto__.push((arguments[i__9520__auto___24468]));

var G__24469 = (i__9520__auto___24468 + (1));
i__9520__auto___24468 = G__24469;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24466){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24466));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24476 = arguments.length;
var i__9520__auto___24477 = (0);
while(true){
if((i__9520__auto___24477 < len__9519__auto___24476)){
args__9526__auto__.push((arguments[i__9520__auto___24477]));

var G__24478 = (i__9520__auto___24477 + (1));
i__9520__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24471 = cljs.core.cst$kw$css;
var G__24472 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24473 = cljs.core.cst$kw$class;
var G__24474 = "clearfix";
var G__24475 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24471,G__24472,G__24473,G__24474,G__24475) : hoplon.core.div.call(null,G__24471,G__24472,G__24473,G__24474,G__24475));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24470){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24470));
});

