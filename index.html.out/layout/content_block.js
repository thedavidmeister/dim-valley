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
var len__9519__auto___24561 = arguments.length;
var i__9520__auto___24562 = (0);
while(true){
if((i__9520__auto___24562 < len__9519__auto___24561)){
args__9526__auto__.push((arguments[i__9520__auto___24562]));

var G__24563 = (i__9520__auto___24562 + (1));
i__9520__auto___24562 = G__24563;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24560){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24560));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24572 = arguments.length;
var i__9520__auto___24573 = (0);
while(true){
if((i__9520__auto___24573 < len__9519__auto___24572)){
args__9526__auto__.push((arguments[i__9520__auto___24573]));

var G__24574 = (i__9520__auto___24573 + (1));
i__9520__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24565 = cljs.core.cst$kw$css;
var G__24566 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24567 = cljs.core.cst$kw$class;
var G__24568 = "clearfix";
var G__24569 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
var G__24570 = children;
var G__24571 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24565,G__24566,G__24567,G__24568,G__24569,G__24570,G__24571) : hoplon.core.div.call(null,G__24565,G__24566,G__24567,G__24568,G__24569,G__24570,G__24571));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24564){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24564));
});

