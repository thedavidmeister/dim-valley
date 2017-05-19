// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___18348 = arguments.length;
var i__8982__auto___18349 = (0);
while(true){
if((i__8982__auto___18349 < len__8981__auto___18348)){
args__8988__auto__.push((arguments[i__8982__auto___18349]));

var G__18350 = (i__8982__auto___18349 + (1));
i__8982__auto___18349 = G__18350;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__18345 = cljs.core.cst$kw$css;
var G__18346 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$border_DASH_width,"4px",cljs.core.cst$kw$border_DASH_style,"dotted",cljs.core.cst$kw$border_DASH_color,cljs.core.last(colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$border_DASH_image_DASH_source,"url('border-dots.svg')",cljs.core.cst$kw$border_DASH_image_DASH_slice,"33% 33%",cljs.core.cst$kw$border_DASH_image_DASH_repeat,"round",cljs.core.cst$kw$border_DASH_right,"none"], null);
var G__18347 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18345,G__18346,G__18347) : hoplon.core.div.call(null,G__18345,G__18346,G__18347));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq18344){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18344));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__8988__auto__ = [];
var len__8981__auto___18357 = arguments.length;
var i__8982__auto___18358 = (0);
while(true){
if((i__8982__auto___18358 < len__8981__auto___18357)){
args__8988__auto__.push((arguments[i__8982__auto___18358]));

var G__18359 = (i__8982__auto___18358 + (1));
i__8982__auto___18358 = G__18359;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__18352 = cljs.core.cst$kw$css;
var G__18353 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__18354 = cljs.core.cst$kw$class;
var G__18355 = "clearfix";
var G__18356 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__18352,G__18353,G__18354,G__18355,G__18356) : hoplon.core.div.call(null,G__18352,G__18353,G__18354,G__18355,G__18356));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq18351){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18351));
});

