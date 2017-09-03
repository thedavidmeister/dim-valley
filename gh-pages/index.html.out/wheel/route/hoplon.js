// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.route.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.route.core');
goog.require('wheel.dom.traversal');
goog.require('wheel.dom.events');
goog.require('hoplon.core');
goog.require('hoplon.jquery');
goog.require('javelin.core');
goog.require('cljs.test');
/**
 * Returns a routing link. Pass :wheel.route/preserve-params to params to preserve them on navigation
 * @param {...*} var_args
 */
wheel.route.hoplon.link = (function() { 
var wheel$route$hoplon$link__delegate = function (args__14861__auto__){
var vec__23564 = hoplon.core.parse_args(args__14861__auto__);
var map__23567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(0),null);
var map__23567__$1 = ((((!((map__23567 == null)))?((((map__23567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23567):map__23567);
var attributes = map__23567__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23567__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,(1),null);
if(cljs.core.truth_(javelin.core.cell_QMARK_(history))){
} else {
throw (new Error("Assert failed: (j/cell? history)"));
}

if(cljs.core.truth_(routes)){
} else {
throw (new Error("Assert failed: routes"));
}

if(cljs.core.truth_(handler)){
} else {
throw (new Error("Assert failed: handler"));
}

var params__$1 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__23570){
var G__23569 = G__23570;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23569)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__23569)){
return null;
} else {
return G__23570;

}
}
});})(vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
).call(null,params);
var bidi_EQ_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__23573,G__23571,G__23574,G__23572){
return (G__23571.cljs$core$IFn$_invoke$arity$3 ? G__23571.cljs$core$IFn$_invoke$arity$3(G__23572,G__23573,G__23574) : G__23571.call(null,G__23572,G__23573,G__23574));
});})(params__$1,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
).call(null,routes,wheel.route.core.path__GT_bidi,fallback,history);
var current_handler_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__23577,G__23576,G__23575){
var G__23578 = G__23576;
var G__23579 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__23577);
return (G__23575.cljs$core$IFn$_invoke$arity$2 ? G__23575.cljs$core$IFn$_invoke$arity$2(G__23578,G__23579) : G__23575.call(null,G__23578,G__23579));
});})(params__$1,bidi_EQ_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
).call(null,bidi_EQ_,handler,cljs.core._EQ_);
var current_params_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__23582,G__23580,G__23581){
var G__23583 = G__23581;
var G__23584 = (function (){var or__7760__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__23582);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (G__23580.cljs$core$IFn$_invoke$arity$2 ? G__23580.cljs$core$IFn$_invoke$arity$2(G__23583,G__23584) : G__23580.call(null,G__23583,G__23584));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
).call(null,bidi_EQ_,cljs.core._EQ_,params__$1);
var G__23585 = cljs.core.cst$kw$class;
var G__23586 = "route-link";
var G__23587 = cljs.core.cst$kw$click;
var G__23588 = ((function (G__23585,G__23586,G__23587,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(params__$1) : cljs.core.deref.call(null,params__$1)))){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,params__$1);
} else {
return wheel.route.core.handler_BANG_(history,routes,handler);
}
});})(G__23585,G__23586,G__23587,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__23589 = cljs.core.cst$kw$data_DASH_current;
var G__23590 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23585,G__23586,G__23587,G__23588,G__23589,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__23593,G__23594,G__23595,G__23597,G__23596){
var G__23598 = (function (){var G__23599 = G__23595;
var G__23600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__23596)?"handler":null),(cljs.core.truth_(G__23597)?"params":null)], null);
return (G__23594.cljs$core$IFn$_invoke$arity$2 ? G__23594.cljs$core$IFn$_invoke$arity$2(G__23599,G__23600) : G__23594.call(null,G__23599,G__23600));
})();
return (G__23593.cljs$core$IFn$_invoke$arity$1 ? G__23593.cljs$core$IFn$_invoke$arity$1(G__23598) : G__23593.call(null,G__23598));
});})(G__23585,G__23586,G__23587,G__23588,G__23589,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__23564,map__23567,map__23567__$1,attributes,history,routes,handler,params,fallback,children))
).call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_);
var G__23591 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.array_seq([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__23592 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__23585,G__23586,G__23587,G__23588,G__23589,G__23590,G__23591,G__23592) : hoplon.core.a.call(null,G__23585,G__23586,G__23587,G__23588,G__23589,G__23590,G__23591,G__23592));
};
var wheel$route$hoplon$link = function (var_args){
var args__14861__auto__ = null;
if (arguments.length > 0) {
var G__23601__i = 0, G__23601__a = new Array(arguments.length -  0);
while (G__23601__i < G__23601__a.length) {G__23601__a[G__23601__i] = arguments[G__23601__i + 0]; ++G__23601__i;}
  args__14861__auto__ = new cljs.core.IndexedSeq(G__23601__a,0);
} 
return wheel$route$hoplon$link__delegate.call(this,args__14861__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__23602){
var args__14861__auto__ = cljs.core.seq(arglist__23602);
return wheel$route$hoplon$link__delegate(args__14861__auto__);
});
wheel$route$hoplon$link.cljs$core$IFn$_invoke$arity$variadic = wheel$route$hoplon$link__delegate;
return wheel$route$hoplon$link;
})()
;
wheel.route.hoplon._QMARK__QMARK_link = (function wheel$route$hoplon$_QMARK__QMARK_link(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test = (function (){
var history = wheel.route.core.history_cell();
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["baz/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$baz])], null);
var child = (hoplon.core.div.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$0() : hoplon.core.div.call(null));
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$foo,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null),child], 0));
try{var values__20294__auto___23614 = (function (){var x__8694__auto__ = el;
return cljs.core._conj((function (){var x__8694__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20295__auto___23615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__20294__auto___23614);
if(cljs.core.truth_(result__20295__auto___23615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__20294__auto___23614),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__20294__auto___23614);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23603){var t__20332__auto___23616 = e23603;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__20332__auto___23616,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__20294__auto___23617 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__8694__auto__);
})();
var result__20295__auto___23618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20294__auto___23617);
if(cljs.core.truth_(result__20295__auto___23618)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20294__auto___23617),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__20294__auto___23617);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23604){var t__20332__auto___23619 = e23604;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__20332__auto___23619,cljs.core.cst$kw$message,null], null));
}
try{var values__20294__auto___23620 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__8694__auto__);
})();
var result__20295__auto___23621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20294__auto___23620);
if(cljs.core.truth_(result__20295__auto___23621)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20294__auto___23620),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__20294__auto___23620);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23605){var t__20332__auto___23622 = e23605;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__20332__auto___23622,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__20294__auto___23623 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__8694__auto__);
})();
var result__20295__auto___23624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20294__auto___23623);
if(cljs.core.truth_(result__20295__auto___23624)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20294__auto___23623),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__20294__auto___23623);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23606){var t__20332__auto___23625 = e23606;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__20332__auto___23625,cljs.core.cst$kw$message,null], null));
}
try{var values__20294__auto___23626 = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto___23627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto___23626);
if(cljs.core.truth_(result__20295__auto___23627)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto___23626),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto___23626);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23607){var t__20332__auto___23628 = e23607;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__20332__auto___23628,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history,"baz/123") : cljs.core.reset_BANG_.call(null,history,"baz/123"));

try{var values__20294__auto___23629 = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto___23630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto___23629);
if(cljs.core.truth_(result__20295__auto___23630)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto___23629),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto___23629);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23608){var t__20332__auto___23631 = e23608;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__20332__auto___23631,cljs.core.cst$kw$message,null], null));
}
try{var values__20294__auto___23632 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__8694__auto__);
})();
var result__20295__auto___23633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20294__auto___23632);
if(cljs.core.truth_(result__20295__auto___23633)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20294__auto___23632),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__20294__auto___23632);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23609){var t__20332__auto___23634 = e23609;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__20332__auto___23634,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history,"baz/456") : cljs.core.reset_BANG_.call(null,history,"baz/456"));

try{var values__20294__auto___23635 = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto___23636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto___23635);
if(cljs.core.truth_(result__20295__auto___23636)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto___23635),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto___23635);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23610){var t__20332__auto___23637 = e23610;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__20332__auto___23637,cljs.core.cst$kw$message,null], null));
}
try{var values__20294__auto___23638 = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto___23639 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto___23638);
if(cljs.core.truth_(result__20295__auto___23639)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto___23638),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto___23638);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23611){var t__20332__auto___23640 = e23611;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__20332__auto___23640,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history,"bar") : cljs.core.reset_BANG_.call(null,history,"bar"));

try{var values__20294__auto___23641 = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto___23642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto___23641);
if(cljs.core.truth_(result__20295__auto___23642)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto___23641),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto___23641);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23612){var t__20332__auto___23643 = e23612;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__20332__auto___23643,cljs.core.cst$kw$message,null], null));
}
try{var values__20294__auto__ = (function (){var x__8694__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20295__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20294__auto__);
if(cljs.core.truth_(result__20295__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20294__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20294__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20295__auto__;
}catch (e23613){var t__20332__auto__ = e23613;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__20332__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/eho/9txbbm/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
wheel.route.hoplon._QMARK__QMARK_link_click = (function wheel$route$hoplon$_QMARK__QMARK_link_click(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test = (function (){
var history_23652 = wheel.route.core.history_cell();
var routes_23653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_23654 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_23655 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_23656 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$history,history_23652,cljs.core.cst$kw$routes,routes_23653,cljs.core.cst$kw$handler,handler_23655,cljs.core.cst$kw$params,params_23654], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history_23652,"bar/123") : cljs.core.reset_BANG_.call(null,history_23652,"bar/123"));

wheel.dom.events.trigger_native_BANG_(el_23656,"click");

try{var values__20294__auto___23657 = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_23652) : cljs.core.deref.call(null,history_23652));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"foo/123");
var result__20295__auto___23658 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20294__auto___23657);
if(cljs.core.truth_(result__20295__auto___23658)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20294__auto___23657),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20294__auto___23657);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23644){var t__20332__auto___23659 = e23644;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__20332__auto___23659,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history_23652,"bar/123") : cljs.core.reset_BANG_.call(null,history_23652,"bar/123"));

var G__23645_23660 = params_23654;
var G__23646_23661 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23645_23660,G__23646_23661) : cljs.core.reset_BANG_.call(null,G__23645_23660,G__23646_23661));

wheel.dom.events.trigger_native_BANG_(el_23656,"click");

try{var values__20294__auto___23662 = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_23652) : cljs.core.deref.call(null,history_23652));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"foo/456");
var result__20295__auto___23663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20294__auto___23662);
if(cljs.core.truth_(result__20295__auto___23663)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20294__auto___23662),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20294__auto___23662);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23647){var t__20332__auto___23664 = e23647;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__20332__auto___23664,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history_23652,"bar/123") : cljs.core.reset_BANG_.call(null,history_23652,"bar/123"));

var G__23648_23665 = handler_23655;
var G__23649_23666 = cljs.core.cst$kw$baz;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23648_23665,G__23649_23666) : cljs.core.reset_BANG_.call(null,G__23648_23665,G__23649_23666));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(params_23654,null) : cljs.core.reset_BANG_.call(null,params_23654,null));

wheel.dom.events.trigger_native_BANG_(el_23656,"click");

try{var values__20294__auto___23667 = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_23652) : cljs.core.deref.call(null,history_23652));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"baz");
var result__20295__auto___23668 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20294__auto___23667);
if(cljs.core.truth_(result__20295__auto___23668)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20294__auto___23667),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20294__auto___23667);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23650){var t__20332__auto___23669 = e23650;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__20332__auto___23669,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, ["foo",cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar], null)], null);
});})(history))
).call(null);
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$bar], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(history,"foo") : cljs.core.reset_BANG_.call(null,history,"foo"));

wheel.dom.events.trigger_native_BANG_(el,"click");

try{var values__20294__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history) : cljs.core.deref.call(null,history));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"bar");
var result__20295__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20294__auto__);
if(cljs.core.truth_(result__20295__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20294__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20294__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20295__auto__;
}catch (e23651){var t__20332__auto__ = e23651;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__20332__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/eho/9txbbm/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
