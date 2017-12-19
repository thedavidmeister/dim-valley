// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
goog.require('layout.rounded_corners');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24572 = arguments.length;
var i__9518__auto___24573 = (0);
while(true){
if((i__9518__auto___24573 < len__9517__auto___24572)){
args__9524__auto__.push((arguments[i__9518__auto___24573]));

var G__24574 = (i__9518__auto___24573 + (1));
i__9518__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24571){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24571));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24581 = arguments.length;
var i__9518__auto___24582 = (0);
while(true){
if((i__9518__auto___24582 < len__9517__auto___24581)){
args__9524__auto__.push((arguments[i__9518__auto___24582]));

var G__24583 = (i__9518__auto___24582 + (1));
i__9518__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24576 = cljs.core.cst$kw$css;
var G__24577 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24578 = cljs.core.cst$kw$class;
var G__24579 = "clearfix";
var G__24580 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24576,G__24577,G__24578,G__24579,G__24580) : hoplon.core.div.call(null,G__24576,G__24577,G__24578,G__24579,G__24580));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24575){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24575));
});

