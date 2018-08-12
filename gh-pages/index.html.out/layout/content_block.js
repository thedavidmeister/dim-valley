// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
goog.require('layout.rounded_corners');
goog.require('layout.spacer');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24482 = arguments.length;
var i__9520__auto___24483 = (0);
while(true){
if((i__9520__auto___24483 < len__9519__auto___24482)){
args__9526__auto__.push((arguments[i__9520__auto___24483]));

var G__24484 = (i__9520__auto___24483 + (1));
i__9520__auto___24483 = G__24484;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24481){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24481));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24493 = arguments.length;
var i__9520__auto___24494 = (0);
while(true){
if((i__9520__auto___24494 < len__9519__auto___24493)){
args__9526__auto__.push((arguments[i__9520__auto___24494]));

var G__24495 = (i__9520__auto___24494 + (1));
i__9520__auto___24494 = G__24495;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24486 = cljs.core.cst$kw$css;
var G__24487 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24488 = cljs.core.cst$kw$class;
var G__24489 = "clearfix";
var G__24490 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
var G__24491 = children;
var G__24492 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24486,G__24487,G__24488,G__24489,G__24490,G__24491,G__24492) : hoplon.core.div.call(null,G__24486,G__24487,G__24488,G__24489,G__24490,G__24491,G__24492));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24485){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24485));
});

