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
var len__9519__auto___24584 = arguments.length;
var i__9520__auto___24585 = (0);
while(true){
if((i__9520__auto___24585 < len__9519__auto___24584)){
args__9526__auto__.push((arguments[i__9520__auto___24585]));

var G__24586 = (i__9520__auto___24585 + (1));
i__9520__auto___24585 = G__24586;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24583){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24583));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24595 = arguments.length;
var i__9520__auto___24596 = (0);
while(true){
if((i__9520__auto___24596 < len__9519__auto___24595)){
args__9526__auto__.push((arguments[i__9520__auto___24596]));

var G__24597 = (i__9520__auto___24596 + (1));
i__9520__auto___24596 = G__24597;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24588 = cljs.core.cst$kw$css;
var G__24589 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24590 = cljs.core.cst$kw$class;
var G__24591 = "clearfix";
var G__24592 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
var G__24593 = children;
var G__24594 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24588,G__24589,G__24590,G__24591,G__24592,G__24593,G__24594) : hoplon.core.div.call(null,G__24588,G__24589,G__24590,G__24591,G__24592,G__24593,G__24594));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24587){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24587));
});

