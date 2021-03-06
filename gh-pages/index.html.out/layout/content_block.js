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
var len__9519__auto___24516 = arguments.length;
var i__9520__auto___24517 = (0);
while(true){
if((i__9520__auto___24517 < len__9519__auto___24516)){
args__9526__auto__.push((arguments[i__9520__auto___24517]));

var G__24518 = (i__9520__auto___24517 + (1));
i__9520__auto___24517 = G__24518;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24515){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24515));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24527 = arguments.length;
var i__9520__auto___24528 = (0);
while(true){
if((i__9520__auto___24528 < len__9519__auto___24527)){
args__9526__auto__.push((arguments[i__9520__auto___24528]));

var G__24529 = (i__9520__auto___24528 + (1));
i__9520__auto___24528 = G__24529;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24520 = cljs.core.cst$kw$css;
var G__24521 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24522 = cljs.core.cst$kw$class;
var G__24523 = "clearfix";
var G__24524 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
var G__24525 = children;
var G__24526 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24520,G__24521,G__24522,G__24523,G__24524,G__24525,G__24526) : hoplon.core.div.call(null,G__24520,G__24521,G__24522,G__24523,G__24524,G__24525,G__24526));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24519){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24519));
});

