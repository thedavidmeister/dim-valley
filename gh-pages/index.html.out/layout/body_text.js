// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.body_text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
/**
 * @param {...*} var_args
 */
layout.body_text.p = (function() { 
var layout$body_text$p__delegate = function (args__18862__auto__){
var vec__19425 = hoplon.core.parse_args(args__18862__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(1),null);
var G__19428 = cljs.core.cst$kw$css;
var G__19429 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"600px"], null),cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(attributes)], 0));
var G__19430 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,cljs.core.cst$kw$css);
var G__19431 = children;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__19428,G__19429,G__19430,G__19431) : hoplon.core.p.call(null,G__19428,G__19429,G__19430,G__19431));
};
var layout$body_text$p = function (var_args){
var args__18862__auto__ = null;
if (arguments.length > 0) {
var G__19432__i = 0, G__19432__a = new Array(arguments.length -  0);
while (G__19432__i < G__19432__a.length) {G__19432__a[G__19432__i] = arguments[G__19432__i + 0]; ++G__19432__i;}
  args__18862__auto__ = new cljs.core.IndexedSeq(G__19432__a,0,null);
} 
return layout$body_text$p__delegate.call(this,args__18862__auto__);};
layout$body_text$p.cljs$lang$maxFixedArity = 0;
layout$body_text$p.cljs$lang$applyTo = (function (arglist__19433){
var args__18862__auto__ = cljs.core.seq(arglist__19433);
return layout$body_text$p__delegate(args__18862__auto__);
});
layout$body_text$p.cljs$core$IFn$_invoke$arity$variadic = layout$body_text$p__delegate;
return layout$body_text$p;
})()
;
