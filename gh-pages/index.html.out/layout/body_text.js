// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.body_text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
layout.body_text.p = (function() { 
var layout$body_text$p__delegate = function (args__14861__auto__){
var vec__20376 = hoplon.core.parse_args(args__14861__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20376,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20376,(1),null);
var G__20379 = cljs.core.cst$kw$css;
var G__20380 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"600px"], null),cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(attributes)], 0));
var G__20381 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,cljs.core.cst$kw$css);
var G__20382 = children;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__20379,G__20380,G__20381,G__20382) : hoplon.core.p.call(null,G__20379,G__20380,G__20381,G__20382));
};
var layout$body_text$p = function (var_args){
var args__14861__auto__ = null;
if (arguments.length > 0) {
var G__20383__i = 0, G__20383__a = new Array(arguments.length -  0);
while (G__20383__i < G__20383__a.length) {G__20383__a[G__20383__i] = arguments[G__20383__i + 0]; ++G__20383__i;}
  args__14861__auto__ = new cljs.core.IndexedSeq(G__20383__a,0);
} 
return layout$body_text$p__delegate.call(this,args__14861__auto__);};
layout$body_text$p.cljs$lang$maxFixedArity = 0;
layout$body_text$p.cljs$lang$applyTo = (function (arglist__20384){
var args__14861__auto__ = cljs.core.seq(arglist__20384);
return layout$body_text$p__delegate(args__14861__auto__);
});
layout$body_text$p.cljs$core$IFn$_invoke$arity$variadic = layout$body_text$p__delegate;
return layout$body_text$p;
})()
;
