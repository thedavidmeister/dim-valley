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
var len__9519__auto___24441 = arguments.length;
var i__9520__auto___24442 = (0);
while(true){
if((i__9520__auto___24442 < len__9519__auto___24441)){
args__9526__auto__.push((arguments[i__9520__auto___24442]));

var G__24443 = (i__9520__auto___24442 + (1));
i__9520__auto___24442 = G__24443;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24440){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24440));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24450 = arguments.length;
var i__9520__auto___24451 = (0);
while(true){
if((i__9520__auto___24451 < len__9519__auto___24450)){
args__9526__auto__.push((arguments[i__9520__auto___24451]));

var G__24452 = (i__9520__auto___24451 + (1));
i__9520__auto___24451 = G__24452;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24445 = cljs.core.cst$kw$css;
var G__24446 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24447 = cljs.core.cst$kw$class;
var G__24448 = "clearfix";
var G__24449 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24445,G__24446,G__24447,G__24448,G__24449) : hoplon.core.div.call(null,G__24445,G__24446,G__24447,G__24448,G__24449));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24444){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24444));
});

