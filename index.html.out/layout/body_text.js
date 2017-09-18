// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.body_text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
layout.body_text.p = (function() { 
var layout$body_text$p__delegate = function (args__18466__auto__){
var vec__24610 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24610,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24610,(1),null);
var G__24613 = cljs.core.cst$kw$css;
var G__24614 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"600px"], null),cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(attributes)], 0));
var G__24615 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,cljs.core.cst$kw$css);
var G__24616 = children;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__24613,G__24614,G__24615,G__24616) : hoplon.core.p.call(null,G__24613,G__24614,G__24615,G__24616));
};
var layout$body_text$p = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24617__i = 0, G__24617__a = new Array(arguments.length -  0);
while (G__24617__i < G__24617__a.length) {G__24617__a[G__24617__i] = arguments[G__24617__i + 0]; ++G__24617__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24617__a,0,null);
} 
return layout$body_text$p__delegate.call(this,args__18466__auto__);};
layout$body_text$p.cljs$lang$maxFixedArity = 0;
layout$body_text$p.cljs$lang$applyTo = (function (arglist__24618){
var args__18466__auto__ = cljs.core.seq(arglist__24618);
return layout$body_text$p__delegate(args__18466__auto__);
});
layout$body_text$p.cljs$core$IFn$_invoke$arity$variadic = layout$body_text$p__delegate;
return layout$body_text$p;
})()
;
