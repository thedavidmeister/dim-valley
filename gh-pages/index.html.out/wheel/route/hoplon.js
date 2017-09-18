// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var wheel$route$hoplon$link__delegate = function (args__18862__auto__){
var vec__24946 = hoplon.core.parse_args(args__18862__auto__);
var map__24949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24946,(0),null);
var map__24949__$1 = ((((!((map__24949 == null)))?((((map__24949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24949):map__24949);
var attributes = map__24949__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24949__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24946,(1),null);
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

var params__$1 = (function (){var fexpr__24953 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24952){
var G__24951 = G__24952;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24951)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__24951)){
return null;
} else {
return G__24952;

}
}
});})(vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24953.cljs$core$IFn$_invoke$arity$1 ? fexpr__24953.cljs$core$IFn$_invoke$arity$1(params) : fexpr__24953.call(null,params));
})();
var bidi_EQ_ = (function (){var fexpr__24958 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24956,G__24954,G__24957,G__24955){
return (G__24954.cljs$core$IFn$_invoke$arity$3 ? G__24954.cljs$core$IFn$_invoke$arity$3(G__24955,G__24956,G__24957) : G__24954.call(null,G__24955,G__24956,G__24957));
});})(params__$1,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24958.cljs$core$IFn$_invoke$arity$4 ? fexpr__24958.cljs$core$IFn$_invoke$arity$4(routes,wheel.route.core.path__GT_bidi,fallback,history) : fexpr__24958.call(null,routes,wheel.route.core.path__GT_bidi,fallback,history));
})();
var current_handler_QMARK_ = (function (){var fexpr__24964 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24961,G__24960,G__24959){
var G__24965 = G__24960;
var G__24966 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24961);
return (G__24959.cljs$core$IFn$_invoke$arity$2 ? G__24959.cljs$core$IFn$_invoke$arity$2(G__24965,G__24966) : G__24959.call(null,G__24965,G__24966));
});})(params__$1,bidi_EQ_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24964.cljs$core$IFn$_invoke$arity$3 ? fexpr__24964.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,handler,cljs.core._EQ_) : fexpr__24964.call(null,bidi_EQ_,handler,cljs.core._EQ_));
})();
var current_params_QMARK_ = (function (){var fexpr__24972 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24969,G__24967,G__24968){
var G__24973 = G__24968;
var G__24974 = (function (){var or__8638__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24969);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (G__24967.cljs$core$IFn$_invoke$arity$2 ? G__24967.cljs$core$IFn$_invoke$arity$2(G__24973,G__24974) : G__24967.call(null,G__24973,G__24974));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24972.cljs$core$IFn$_invoke$arity$3 ? fexpr__24972.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,cljs.core._EQ_,params__$1) : fexpr__24972.call(null,bidi_EQ_,cljs.core._EQ_,params__$1));
})();
var G__24975 = cljs.core.cst$kw$class;
var G__24976 = "route-link";
var G__24977 = cljs.core.cst$kw$click;
var G__24978 = ((function (G__24975,G__24976,G__24977,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (){
if(cljs.core.truth_(cljs.core.deref(params__$1))){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,params__$1);
} else {
return wheel.route.core.handler_BANG_(history,routes,handler);
}
});})(G__24975,G__24976,G__24977,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__24979 = cljs.core.cst$kw$data_DASH_current;
var G__24980 = (function (){var fexpr__24991 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24975,G__24976,G__24977,G__24978,G__24979,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24983,G__24984,G__24985,G__24987,G__24986){
var G__24992 = (function (){var G__24993 = G__24985;
var G__24994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__24986)?"handler":null),(cljs.core.truth_(G__24987)?"params":null)], null);
return (G__24984.cljs$core$IFn$_invoke$arity$2 ? G__24984.cljs$core$IFn$_invoke$arity$2(G__24993,G__24994) : G__24984.call(null,G__24993,G__24994));
})();
return (G__24983.cljs$core$IFn$_invoke$arity$1 ? G__24983.cljs$core$IFn$_invoke$arity$1(G__24992) : G__24983.call(null,G__24992));
});})(G__24975,G__24976,G__24977,G__24978,G__24979,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24946,map__24949,map__24949__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24991.cljs$core$IFn$_invoke$arity$5 ? fexpr__24991.cljs$core$IFn$_invoke$arity$5(cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_) : fexpr__24991.call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_));
})();
var G__24981 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__24982 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__24975,G__24976,G__24977,G__24978,G__24979,G__24980,G__24981,G__24982) : hoplon.core.a.call(null,G__24975,G__24976,G__24977,G__24978,G__24979,G__24980,G__24981,G__24982));
};
var wheel$route$hoplon$link = function (var_args){
var args__18862__auto__ = null;
if (arguments.length > 0) {
var G__24995__i = 0, G__24995__a = new Array(arguments.length -  0);
while (G__24995__i < G__24995__a.length) {G__24995__a[G__24995__i] = arguments[G__24995__i + 0]; ++G__24995__i;}
  args__18862__auto__ = new cljs.core.IndexedSeq(G__24995__a,0,null);
} 
return wheel$route$hoplon$link__delegate.call(this,args__18862__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__24996){
var args__18862__auto__ = cljs.core.seq(arglist__24996);
return wheel$route$hoplon$link__delegate(args__18862__auto__);
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
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$foo,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null),child], 0));
try{var values__17761__auto___25008 = (function (){var x__9592__auto__ = el;
return cljs.core._conj((function (){var x__9592__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___25009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__17761__auto___25008);
if(cljs.core.truth_(result__17762__auto___25009)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__17761__auto___25008),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__17761__auto___25008);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24997){var t__17806__auto___25010 = e24997;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__17806__auto___25010,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__17761__auto___25011 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9592__auto__);
})();
var result__17762__auto___25012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25011);
if(cljs.core.truth_(result__17762__auto___25012)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25011),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25011);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24998){var t__17806__auto___25013 = e24998;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17806__auto___25013,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25014 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9592__auto__);
})();
var result__17762__auto___25015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25014);
if(cljs.core.truth_(result__17762__auto___25015)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25014),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25014);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24999){var t__17806__auto___25016 = e24999;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17806__auto___25016,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__17761__auto___25017 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9592__auto__);
})();
var result__17762__auto___25018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25017);
if(cljs.core.truth_(result__17762__auto___25018)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25017),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25017);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25000){var t__17806__auto___25019 = e25000;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17806__auto___25019,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25020 = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25020);
if(cljs.core.truth_(result__17762__auto___25021)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25020),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25020);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25001){var t__17806__auto___25022 = e25001;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17806__auto___25022,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/123");

try{var values__17761__auto___25023 = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25023);
if(cljs.core.truth_(result__17762__auto___25024)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25023),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25023);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25002){var t__17806__auto___25025 = e25002;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17806__auto___25025,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25026 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9592__auto__);
})();
var result__17762__auto___25027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25026);
if(cljs.core.truth_(result__17762__auto___25027)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25026),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25026);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25003){var t__17806__auto___25028 = e25003;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17806__auto___25028,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/456");

try{var values__17761__auto___25029 = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25029);
if(cljs.core.truth_(result__17762__auto___25030)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25029),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25029);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25004){var t__17806__auto___25031 = e25004;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17806__auto___25031,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25032 = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25033 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25032);
if(cljs.core.truth_(result__17762__auto___25033)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25032),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25032);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25005){var t__17806__auto___25034 = e25005;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17806__auto___25034,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"bar");

try{var values__17761__auto___25035 = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25035);
if(cljs.core.truth_(result__17762__auto___25036)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25035),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25035);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25006){var t__17806__auto___25037 = e25006;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17806__auto___25037,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = (function (){var x__9592__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25007){var t__17806__auto__ = e25007;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
wheel.route.hoplon._QMARK__QMARK_link_click = (function wheel$route$hoplon$_QMARK__QMARK_link_click(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test = (function (){
var history_25043 = wheel.route.core.history_cell();
var routes_25044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_25045 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_25046 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_25047 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history_25043,cljs.core.cst$kw$routes,routes_25044,cljs.core.cst$kw$handler,handler_25046,cljs.core.cst$kw$params,params_25045], 0));
cljs.core.reset_BANG_(history_25043,"bar/123");

wheel.dom.events.trigger_native_BANG_(el_25047,"click");

try{var values__17761__auto___25048 = cljs.core._conj((function (){var x__9592__auto__ = cljs.core.deref(history_25043);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"foo/123");
var result__17762__auto___25049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25048);
if(cljs.core.truth_(result__17762__auto___25049)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25048),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25048);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25038){var t__17806__auto___25050 = e25038;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17806__auto___25050,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_25043,"bar/123");

cljs.core.reset_BANG_(params_25045,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

wheel.dom.events.trigger_native_BANG_(el_25047,"click");

try{var values__17761__auto___25051 = cljs.core._conj((function (){var x__9592__auto__ = cljs.core.deref(history_25043);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"foo/456");
var result__17762__auto___25052 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25051);
if(cljs.core.truth_(result__17762__auto___25052)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25051),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25051);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25039){var t__17806__auto___25053 = e25039;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17806__auto___25053,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_25043,"bar/123");

cljs.core.reset_BANG_(handler_25046,cljs.core.cst$kw$baz);

cljs.core.reset_BANG_(params_25045,null);

wheel.dom.events.trigger_native_BANG_(el_25047,"click");

try{var values__17761__auto___25054 = cljs.core._conj((function (){var x__9592__auto__ = cljs.core.deref(history_25043);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"baz");
var result__17762__auto___25055 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25054);
if(cljs.core.truth_(result__17762__auto___25055)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25054),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25054);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25040){var t__17806__auto___25056 = e25040;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17806__auto___25056,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = (function (){var fexpr__25041 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, ["foo",cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar], null)], null);
});})(history))
);
return (fexpr__25041.cljs$core$IFn$_invoke$arity$0 ? fexpr__25041.cljs$core$IFn$_invoke$arity$0() : fexpr__25041.call(null));
})();
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$bar], 0));
cljs.core.reset_BANG_(history,"foo");

wheel.dom.events.trigger_native_BANG_(el,"click");

try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = cljs.core.deref(history);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"bar");
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25042){var t__17806__auto__ = e25042;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
