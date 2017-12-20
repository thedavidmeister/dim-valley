// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('route.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('route.state');
goog.require('route.config');
goog.require('wheel.route.hoplon');
/**
 * @param {...*} var_args
 */
route.hoplon.link = (function() { 
var route$hoplon$link__delegate = function (args__18466__auto__){
var vec__24899 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24899,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24899,(1),null);
return wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,route.state.history,cljs.core.cst$kw$routes,route.config.routes], null),attributes], 0)),children], 0));
};
var route$hoplon$link = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24902__i = 0, G__24902__a = new Array(arguments.length -  0);
while (G__24902__i < G__24902__a.length) {G__24902__a[G__24902__i] = arguments[G__24902__i + 0]; ++G__24902__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24902__a,0,null);
} 
return route$hoplon$link__delegate.call(this,args__18466__auto__);};
route$hoplon$link.cljs$lang$maxFixedArity = 0;
route$hoplon$link.cljs$lang$applyTo = (function (arglist__24903){
var args__18466__auto__ = cljs.core.seq(arglist__24903);
return route$hoplon$link__delegate(args__18466__auto__);
});
route$hoplon$link.cljs$core$IFn$_invoke$arity$variadic = route$hoplon$link__delegate;
return route$hoplon$link;
})()
;
