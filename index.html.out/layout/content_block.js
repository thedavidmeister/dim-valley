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
var len__9519__auto___24577 = arguments.length;
var i__9520__auto___24578 = (0);
while(true){
if((i__9520__auto___24578 < len__9519__auto___24577)){
args__9526__auto__.push((arguments[i__9520__auto___24578]));

var G__24579 = (i__9520__auto___24578 + (1));
i__9520__auto___24578 = G__24579;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24576){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24576));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24588 = arguments.length;
var i__9520__auto___24589 = (0);
while(true){
if((i__9520__auto___24589 < len__9519__auto___24588)){
args__9526__auto__.push((arguments[i__9520__auto___24589]));

var G__24590 = (i__9520__auto___24589 + (1));
i__9520__auto___24589 = G__24590;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24581 = cljs.core.cst$kw$css;
var G__24582 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24583 = cljs.core.cst$kw$class;
var G__24584 = "clearfix";
var G__24585 = layout.spacer.vertical_spacer();
var G__24586 = children;
var G__24587 = layout.spacer.vertical_spacer();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24581,G__24582,G__24583,G__24584,G__24585,G__24586,G__24587) : hoplon.core.div.call(null,G__24581,G__24582,G__24583,G__24584,G__24585,G__24586,G__24587));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24580){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24580));
});

