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
var vec__24749 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(1),null);
var G__24752 = cljs.core.cst$kw$css;
var G__24753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"600px"], null),cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(attributes)], 0));
var G__24754 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,cljs.core.cst$kw$css);
var G__24755 = children;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__24752,G__24753,G__24754,G__24755) : hoplon.core.p.call(null,G__24752,G__24753,G__24754,G__24755));
};
var layout$body_text$p = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24756__i = 0, G__24756__a = new Array(arguments.length -  0);
while (G__24756__i < G__24756__a.length) {G__24756__a[G__24756__i] = arguments[G__24756__i + 0]; ++G__24756__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24756__a,0,null);
} 
return layout$body_text$p__delegate.call(this,args__18466__auto__);};
layout$body_text$p.cljs$lang$maxFixedArity = 0;
layout$body_text$p.cljs$lang$applyTo = (function (arglist__24757){
var args__18466__auto__ = cljs.core.seq(arglist__24757);
return layout$body_text$p__delegate(args__18466__auto__);
});
layout$body_text$p.cljs$core$IFn$_invoke$arity$variadic = layout$body_text$p__delegate;
return layout$body_text$p;
})()
;
