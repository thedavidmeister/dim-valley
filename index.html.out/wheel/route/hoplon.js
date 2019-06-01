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
var wheel$route$hoplon$link__delegate = function (args__18466__auto__){
var vec__24696 = hoplon.core.parse_args(args__18466__auto__);
var map__24699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24696,(0),null);
var map__24699__$1 = ((((!((map__24699 == null)))?((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24699):map__24699);
var attributes = map__24699__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24696,(1),null);
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

var params__$1 = (function (){var fexpr__24703 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24702){
var G__24701 = G__24702;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24701)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__24701)){
return null;
} else {
return G__24702;

}
}
});})(vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24703.cljs$core$IFn$_invoke$arity$1 ? fexpr__24703.cljs$core$IFn$_invoke$arity$1(params) : fexpr__24703.call(null,params));
})();
var bidi_EQ_ = (function (){var fexpr__24708 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24706,G__24704,G__24707,G__24705){
return (G__24704.cljs$core$IFn$_invoke$arity$3 ? G__24704.cljs$core$IFn$_invoke$arity$3(G__24705,G__24706,G__24707) : G__24704.call(null,G__24705,G__24706,G__24707));
});})(params__$1,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24708.cljs$core$IFn$_invoke$arity$4 ? fexpr__24708.cljs$core$IFn$_invoke$arity$4(routes,wheel.route.core.path__GT_bidi,fallback,history) : fexpr__24708.call(null,routes,wheel.route.core.path__GT_bidi,fallback,history));
})();
var current_handler_QMARK_ = (function (){var fexpr__24714 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24711,G__24710,G__24709){
var G__24715 = G__24710;
var G__24716 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24711);
return (G__24709.cljs$core$IFn$_invoke$arity$2 ? G__24709.cljs$core$IFn$_invoke$arity$2(G__24715,G__24716) : G__24709.call(null,G__24715,G__24716));
});})(params__$1,bidi_EQ_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24714.cljs$core$IFn$_invoke$arity$3 ? fexpr__24714.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,handler,cljs.core._EQ_) : fexpr__24714.call(null,bidi_EQ_,handler,cljs.core._EQ_));
})();
var current_params_QMARK_ = (function (){var fexpr__24722 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24719,G__24717,G__24718){
var G__24723 = G__24718;
var G__24724 = (function (){var or__8242__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24719);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (G__24717.cljs$core$IFn$_invoke$arity$2 ? G__24717.cljs$core$IFn$_invoke$arity$2(G__24723,G__24724) : G__24717.call(null,G__24723,G__24724));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24722.cljs$core$IFn$_invoke$arity$3 ? fexpr__24722.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,cljs.core._EQ_,params__$1) : fexpr__24722.call(null,bidi_EQ_,cljs.core._EQ_,params__$1));
})();
var G__24725 = cljs.core.cst$kw$class;
var G__24726 = "route-link";
var G__24727 = cljs.core.cst$kw$click;
var G__24728 = ((function (G__24725,G__24726,G__24727,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (){
if(cljs.core.truth_(cljs.core.deref(params__$1))){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,params__$1);
} else {
return wheel.route.core.handler_BANG_(history,routes,handler);
}
});})(G__24725,G__24726,G__24727,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__24729 = cljs.core.cst$kw$data_DASH_current;
var G__24730 = (function (){var fexpr__24741 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24725,G__24726,G__24727,G__24728,G__24729,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24733,G__24734,G__24735,G__24737,G__24736){
var G__24742 = (function (){var G__24743 = G__24735;
var G__24744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__24736)?"handler":null),(cljs.core.truth_(G__24737)?"params":null)], null);
return (G__24734.cljs$core$IFn$_invoke$arity$2 ? G__24734.cljs$core$IFn$_invoke$arity$2(G__24743,G__24744) : G__24734.call(null,G__24743,G__24744));
})();
return (G__24733.cljs$core$IFn$_invoke$arity$1 ? G__24733.cljs$core$IFn$_invoke$arity$1(G__24742) : G__24733.call(null,G__24742));
});})(G__24725,G__24726,G__24727,G__24728,G__24729,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24696,map__24699,map__24699__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24741.cljs$core$IFn$_invoke$arity$5 ? fexpr__24741.cljs$core$IFn$_invoke$arity$5(cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_) : fexpr__24741.call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_));
})();
var G__24731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__24732 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__24725,G__24726,G__24727,G__24728,G__24729,G__24730,G__24731,G__24732) : hoplon.core.a.call(null,G__24725,G__24726,G__24727,G__24728,G__24729,G__24730,G__24731,G__24732));
};
var wheel$route$hoplon$link = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24745__i = 0, G__24745__a = new Array(arguments.length -  0);
while (G__24745__i < G__24745__a.length) {G__24745__a[G__24745__i] = arguments[G__24745__i + 0]; ++G__24745__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24745__a,0,null);
} 
return wheel$route$hoplon$link__delegate.call(this,args__18466__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__24746){
var args__18466__auto__ = cljs.core.seq(arglist__24746);
return wheel$route$hoplon$link__delegate(args__18466__auto__);
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
try{var values__17365__auto___24758 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__17365__auto___24758);
if(cljs.core.truth_(result__17366__auto___24759)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__17365__auto___24758),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__17365__auto___24758);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24747){var t__17410__auto___24760 = e24747;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__17410__auto___24760,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__17365__auto___24761 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__17366__auto___24762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24761);
if(cljs.core.truth_(result__17366__auto___24762)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24761),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24761);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24748){var t__17410__auto___24763 = e24748;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17410__auto___24763,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24764 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__17366__auto___24765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24764);
if(cljs.core.truth_(result__17366__auto___24765)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24764),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24764);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24749){var t__17410__auto___24766 = e24749;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17410__auto___24766,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__17365__auto___24767 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__17366__auto___24768 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24767);
if(cljs.core.truth_(result__17366__auto___24768)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24767),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24767);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24750){var t__17410__auto___24769 = e24750;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17410__auto___24769,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24770 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24771 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24770);
if(cljs.core.truth_(result__17366__auto___24771)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24770),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24770);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24751){var t__17410__auto___24772 = e24751;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto___24772,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/123");

try{var values__17365__auto___24773 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24774 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24773);
if(cljs.core.truth_(result__17366__auto___24774)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24773),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24773);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24752){var t__17410__auto___24775 = e24752;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24775,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24776 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__17366__auto___24777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24776);
if(cljs.core.truth_(result__17366__auto___24777)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24776),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24776);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24753){var t__17410__auto___24778 = e24753;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17410__auto___24778,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/456");

try{var values__17365__auto___24779 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24780 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24779);
if(cljs.core.truth_(result__17366__auto___24780)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24779),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24779);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24754){var t__17410__auto___24781 = e24754;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24781,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24782 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24783 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24782);
if(cljs.core.truth_(result__17366__auto___24783)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24782),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24782);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24755){var t__17410__auto___24784 = e24755;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto___24784,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"bar");

try{var values__17365__auto___24785 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24785);
if(cljs.core.truth_(result__17366__auto___24786)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24785),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24785);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24756){var t__17410__auto___24787 = e24756;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24787,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24757){var t__17410__auto__ = e24757;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/root/.boot/cache/tmp/root/project/jl/i688ot/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
wheel.route.hoplon._QMARK__QMARK_link_click = (function wheel$route$hoplon$_QMARK__QMARK_link_click(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test = (function (){
var history_24793 = wheel.route.core.history_cell();
var routes_24794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_24795 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_24796 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_24797 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history_24793,cljs.core.cst$kw$routes,routes_24794,cljs.core.cst$kw$handler,handler_24796,cljs.core.cst$kw$params,params_24795], 0));
cljs.core.reset_BANG_(history_24793,"bar/123");

wheel.dom.events.trigger_native_BANG_(el_24797,"click");

try{var values__17365__auto___24798 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24793);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/123");
var result__17366__auto___24799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24798);
if(cljs.core.truth_(result__17366__auto___24799)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24798),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24798);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24788){var t__17410__auto___24800 = e24788;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24800,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24793,"bar/123");

cljs.core.reset_BANG_(params_24795,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

wheel.dom.events.trigger_native_BANG_(el_24797,"click");

try{var values__17365__auto___24801 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24793);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/456");
var result__17366__auto___24802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24801);
if(cljs.core.truth_(result__17366__auto___24802)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24801),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24801);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24789){var t__17410__auto___24803 = e24789;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24803,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24793,"bar/123");

cljs.core.reset_BANG_(handler_24796,cljs.core.cst$kw$baz);

cljs.core.reset_BANG_(params_24795,null);

wheel.dom.events.trigger_native_BANG_(el_24797,"click");

try{var values__17365__auto___24804 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24793);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"baz");
var result__17366__auto___24805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24804);
if(cljs.core.truth_(result__17366__auto___24805)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24804),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24804);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24790){var t__17410__auto___24806 = e24790;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24806,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = (function (){var fexpr__24791 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, ["foo",cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar], null)], null);
});})(history))
);
return (fexpr__24791.cljs$core$IFn$_invoke$arity$0 ? fexpr__24791.cljs$core$IFn$_invoke$arity$0() : fexpr__24791.call(null));
})();
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$bar], 0));
cljs.core.reset_BANG_(history,"foo");

wheel.dom.events.trigger_native_BANG_(el,"click");

try{var values__17365__auto__ = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"bar");
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24792){var t__17410__auto__ = e24792;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/root/.boot/cache/tmp/root/project/jl/i688ot/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
