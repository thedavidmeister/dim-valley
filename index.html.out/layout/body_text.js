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
var vec__24743 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(1),null);
var G__24746 = cljs.core.cst$kw$css;
var G__24747 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,"600px"], null),cljs.core.cst$kw$css.cljs$core$IFn$_invoke$arity$1(attributes)], 0));
var G__24748 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attributes,cljs.core.cst$kw$css);
var G__24749 = children;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$4(G__24746,G__24747,G__24748,G__24749) : hoplon.core.p.call(null,G__24746,G__24747,G__24748,G__24749));
};
var layout$body_text$p = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24750__i = 0, G__24750__a = new Array(arguments.length -  0);
while (G__24750__i < G__24750__a.length) {G__24750__a[G__24750__i] = arguments[G__24750__i + 0]; ++G__24750__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24750__a,0,null);
} 
return layout$body_text$p__delegate.call(this,args__18466__auto__);};
layout$body_text$p.cljs$lang$maxFixedArity = 0;
layout$body_text$p.cljs$lang$applyTo = (function (arglist__24751){
var args__18466__auto__ = cljs.core.seq(arglist__24751);
return layout$body_text$p__delegate(args__18466__auto__);
});
layout$body_text$p.cljs$core$IFn$_invoke$arity$variadic = layout$body_text$p__delegate;
return layout$body_text$p;
})()
;
