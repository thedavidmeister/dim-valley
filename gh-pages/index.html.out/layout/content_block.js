// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
goog.require('layout.rounded_corners');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21515 = arguments.length;
var i__8982__auto___21516 = (0);
while(true){
if((i__8982__auto___21516 < len__8981__auto___21515)){
args__8988__auto__.push((arguments[i__8982__auto___21516]));

var G__21517 = (i__8982__auto___21516 + (1));
i__8982__auto___21516 = G__21517;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([children], 0));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq21514){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21514));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21524 = arguments.length;
var i__8982__auto___21525 = (0);
while(true){
if((i__8982__auto___21525 < len__8981__auto___21524)){
args__8988__auto__.push((arguments[i__8982__auto___21525]));

var G__21526 = (i__8982__auto___21525 + (1));
i__8982__auto___21525 = G__21526;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21519 = cljs.core.cst$kw$css;
var G__21520 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__21521 = cljs.core.cst$kw$class;
var G__21522 = "clearfix";
var G__21523 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21519,G__21520,G__21521,G__21522,G__21523) : hoplon.core.div.call(null,G__21519,G__21520,G__21521,G__21522,G__21523));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq21518){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21518));
});

