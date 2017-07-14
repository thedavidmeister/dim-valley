// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21504 = arguments.length;
var i__8982__auto___21505 = (0);
while(true){
if((i__8982__auto___21505 < len__8981__auto___21504)){
args__8988__auto__.push((arguments[i__8982__auto___21505]));

var G__21506 = (i__8982__auto___21505 + (1));
i__8982__auto___21505 = G__21506;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(children) : hoplon.core.div.call(null,children));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq21503){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21503));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21513 = arguments.length;
var i__8982__auto___21514 = (0);
while(true){
if((i__8982__auto___21514 < len__8981__auto___21513)){
args__8988__auto__.push((arguments[i__8982__auto___21514]));

var G__21515 = (i__8982__auto___21514 + (1));
i__8982__auto___21514 = G__21515;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21508 = cljs.core.cst$kw$css;
var G__21509 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__21510 = cljs.core.cst$kw$class;
var G__21511 = "clearfix";
var G__21512 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21508,G__21509,G__21510,G__21511,G__21512) : hoplon.core.div.call(null,G__21508,G__21509,G__21510,G__21511,G__21512));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq21507){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21507));
});

