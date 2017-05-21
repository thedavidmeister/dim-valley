// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21750 = arguments.length;
var i__8982__auto___21751 = (0);
while(true){
if((i__8982__auto___21751 < len__8981__auto___21750)){
args__8988__auto__.push((arguments[i__8982__auto___21751]));

var G__21752 = (i__8982__auto___21751 + (1));
i__8982__auto___21751 = G__21752;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21747 = cljs.core.cst$kw$css;
var G__21748 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$border_DASH_width,"4px",cljs.core.cst$kw$border_DASH_style,"dotted",cljs.core.cst$kw$border_DASH_color,cljs.core.last(colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$border_DASH_image_DASH_source,"url('border-dots.svg')",cljs.core.cst$kw$border_DASH_image_DASH_slice,"33% 33%",cljs.core.cst$kw$border_DASH_image_DASH_repeat,"round",cljs.core.cst$kw$border_DASH_right,"none"], null);
var G__21749 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21747,G__21748,G__21749) : hoplon.core.div.call(null,G__21747,G__21748,G__21749));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq21746){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21746));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21759 = arguments.length;
var i__8982__auto___21760 = (0);
while(true){
if((i__8982__auto___21760 < len__8981__auto___21759)){
args__8988__auto__.push((arguments[i__8982__auto___21760]));

var G__21761 = (i__8982__auto___21760 + (1));
i__8982__auto___21760 = G__21761;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21754 = cljs.core.cst$kw$css;
var G__21755 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__21756 = cljs.core.cst$kw$class;
var G__21757 = "clearfix";
var G__21758 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21754,G__21755,G__21756,G__21757,G__21758) : hoplon.core.div.call(null,G__21754,G__21755,G__21756,G__21757,G__21758));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq21753){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21753));
});

