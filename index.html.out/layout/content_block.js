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
var args__9524__auto__ = [];
var len__9517__auto___24579 = arguments.length;
var i__9518__auto___24580 = (0);
while(true){
if((i__9518__auto___24580 < len__9517__auto___24579)){
args__9524__auto__.push((arguments[i__9518__auto___24580]));

var G__24581 = (i__9518__auto___24580 + (1));
i__9518__auto___24580 = G__24581;
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

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq24578){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24578));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24590 = arguments.length;
var i__9518__auto___24591 = (0);
while(true){
if((i__9518__auto___24591 < len__9517__auto___24590)){
args__9524__auto__.push((arguments[i__9518__auto___24591]));

var G__24592 = (i__9518__auto___24591 + (1));
i__9518__auto___24591 = G__24592;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24583 = cljs.core.cst$kw$css;
var G__24584 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__24585 = cljs.core.cst$kw$class;
var G__24586 = "clearfix";
var G__24587 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
var G__24588 = children;
var G__24589 = layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__24583,G__24584,G__24585,G__24586,G__24587,G__24588,G__24589) : hoplon.core.div.call(null,G__24583,G__24584,G__24585,G__24586,G__24587,G__24588,G__24589));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq24582){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24582));
});

