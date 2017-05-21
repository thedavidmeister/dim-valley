// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
var route$hoplon$link__delegate = function (args__14859__auto__){
var vec__23515 = hoplon.core.parse_args(args__14859__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23515,(1),null);
return wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,route.state.history,cljs.core.cst$kw$routes,route.config.routes], null),attributes], 0)),children], 0));
};
var route$hoplon$link = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__23518__i = 0, G__23518__a = new Array(arguments.length -  0);
while (G__23518__i < G__23518__a.length) {G__23518__a[G__23518__i] = arguments[G__23518__i + 0]; ++G__23518__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__23518__a,0);
} 
return route$hoplon$link__delegate.call(this,args__14859__auto__);};
route$hoplon$link.cljs$lang$maxFixedArity = 0;
route$hoplon$link.cljs$lang$applyTo = (function (arglist__23519){
var args__14859__auto__ = cljs.core.seq(arglist__23519);
return route$hoplon$link__delegate(args__14859__auto__);
});
route$hoplon$link.cljs$core$IFn$_invoke$arity$variadic = route$hoplon$link__delegate;
return route$hoplon$link;
})()
;
