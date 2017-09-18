// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
goog.require('layout.rounded_corners');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23852 = arguments.length;
var i__9916__auto___23853 = (0);
while(true){
if((i__9916__auto___23853 < len__9915__auto___23852)){
args__9922__auto__.push((arguments[i__9916__auto___23853]));

var G__23854 = (i__9916__auto___23853 + (1));
i__9916__auto___23853 = G__23854;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return layout.rounded_corners.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0));
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq23851){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23851));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23861 = arguments.length;
var i__9916__auto___23862 = (0);
while(true){
if((i__9916__auto___23862 < len__9915__auto___23861)){
args__9922__auto__.push((arguments[i__9916__auto___23862]));

var G__23863 = (i__9916__auto___23862 + (1));
i__9916__auto___23862 = G__23863;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__23856 = cljs.core.cst$kw$css;
var G__23857 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding_DASH_left,layout.config.spacer_width,cljs.core.cst$kw$padding_DASH_right,layout.config.spacer_width,cljs.core.cst$kw$background_DASH_color,"white"], null);
var G__23858 = cljs.core.cst$kw$class;
var G__23859 = "clearfix";
var G__23860 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__23856,G__23857,G__23858,G__23859,G__23860) : hoplon.core.div.call(null,G__23856,G__23857,G__23858,G__23859,G__23860));
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq23855){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23855));
});

