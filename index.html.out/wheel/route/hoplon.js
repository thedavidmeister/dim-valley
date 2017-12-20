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
var vec__24786 = hoplon.core.parse_args(args__18466__auto__);
var map__24789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24786,(0),null);
var map__24789__$1 = ((((!((map__24789 == null)))?((((map__24789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24789):map__24789);
var attributes = map__24789__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24789__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24789__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24789__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24789__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24789__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24786,(1),null);
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

var params__$1 = (function (){var fexpr__24793 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24792){
var G__24791 = G__24792;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24791)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__24791)){
return null;
} else {
return G__24792;

}
}
});})(vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24793.cljs$core$IFn$_invoke$arity$1 ? fexpr__24793.cljs$core$IFn$_invoke$arity$1(params) : fexpr__24793.call(null,params));
})();
var bidi_EQ_ = (function (){var fexpr__24798 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24796,G__24794,G__24797,G__24795){
return (G__24794.cljs$core$IFn$_invoke$arity$3 ? G__24794.cljs$core$IFn$_invoke$arity$3(G__24795,G__24796,G__24797) : G__24794.call(null,G__24795,G__24796,G__24797));
});})(params__$1,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24798.cljs$core$IFn$_invoke$arity$4 ? fexpr__24798.cljs$core$IFn$_invoke$arity$4(routes,wheel.route.core.path__GT_bidi,fallback,history) : fexpr__24798.call(null,routes,wheel.route.core.path__GT_bidi,fallback,history));
})();
var current_handler_QMARK_ = (function (){var fexpr__24804 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24801,G__24800,G__24799){
var G__24805 = G__24800;
var G__24806 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24801);
return (G__24799.cljs$core$IFn$_invoke$arity$2 ? G__24799.cljs$core$IFn$_invoke$arity$2(G__24805,G__24806) : G__24799.call(null,G__24805,G__24806));
});})(params__$1,bidi_EQ_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24804.cljs$core$IFn$_invoke$arity$3 ? fexpr__24804.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,handler,cljs.core._EQ_) : fexpr__24804.call(null,bidi_EQ_,handler,cljs.core._EQ_));
})();
var current_params_QMARK_ = (function (){var fexpr__24812 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24809,G__24807,G__24808){
var G__24813 = G__24808;
var G__24814 = (function (){var or__8242__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24809);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (G__24807.cljs$core$IFn$_invoke$arity$2 ? G__24807.cljs$core$IFn$_invoke$arity$2(G__24813,G__24814) : G__24807.call(null,G__24813,G__24814));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24812.cljs$core$IFn$_invoke$arity$3 ? fexpr__24812.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,cljs.core._EQ_,params__$1) : fexpr__24812.call(null,bidi_EQ_,cljs.core._EQ_,params__$1));
})();
var G__24815 = cljs.core.cst$kw$class;
var G__24816 = "route-link";
var G__24817 = cljs.core.cst$kw$click;
var G__24818 = ((function (G__24815,G__24816,G__24817,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (){
if(cljs.core.truth_(cljs.core.deref(params__$1))){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,params__$1);
} else {
return wheel.route.core.handler_BANG_(history,routes,handler);
}
});})(G__24815,G__24816,G__24817,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__24819 = cljs.core.cst$kw$data_DASH_current;
var G__24820 = (function (){var fexpr__24831 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24815,G__24816,G__24817,G__24818,G__24819,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24823,G__24824,G__24825,G__24827,G__24826){
var G__24832 = (function (){var G__24833 = G__24825;
var G__24834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__24826)?"handler":null),(cljs.core.truth_(G__24827)?"params":null)], null);
return (G__24824.cljs$core$IFn$_invoke$arity$2 ? G__24824.cljs$core$IFn$_invoke$arity$2(G__24833,G__24834) : G__24824.call(null,G__24833,G__24834));
})();
return (G__24823.cljs$core$IFn$_invoke$arity$1 ? G__24823.cljs$core$IFn$_invoke$arity$1(G__24832) : G__24823.call(null,G__24832));
});})(G__24815,G__24816,G__24817,G__24818,G__24819,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24786,map__24789,map__24789__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24831.cljs$core$IFn$_invoke$arity$5 ? fexpr__24831.cljs$core$IFn$_invoke$arity$5(cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_) : fexpr__24831.call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_));
})();
var G__24821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__24822 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__24815,G__24816,G__24817,G__24818,G__24819,G__24820,G__24821,G__24822) : hoplon.core.a.call(null,G__24815,G__24816,G__24817,G__24818,G__24819,G__24820,G__24821,G__24822));
};
var wheel$route$hoplon$link = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24835__i = 0, G__24835__a = new Array(arguments.length -  0);
while (G__24835__i < G__24835__a.length) {G__24835__a[G__24835__i] = arguments[G__24835__i + 0]; ++G__24835__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24835__a,0,null);
} 
return wheel$route$hoplon$link__delegate.call(this,args__18466__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__24836){
var args__18466__auto__ = cljs.core.seq(arglist__24836);
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
try{var values__17365__auto___24848 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__17365__auto___24848);
if(cljs.core.truth_(result__17366__auto___24849)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__17365__auto___24848),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__17365__auto___24848);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24837){var t__17410__auto___24850 = e24837;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__17410__auto___24850,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__17365__auto___24851 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__17366__auto___24852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24851);
if(cljs.core.truth_(result__17366__auto___24852)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24851),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24851);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24838){var t__17410__auto___24853 = e24838;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17410__auto___24853,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24854 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__17366__auto___24855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24854);
if(cljs.core.truth_(result__17366__auto___24855)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24854),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24854);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24839){var t__17410__auto___24856 = e24839;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17410__auto___24856,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__17365__auto___24857 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__17366__auto___24858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24857);
if(cljs.core.truth_(result__17366__auto___24858)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24857),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24857);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24840){var t__17410__auto___24859 = e24840;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17410__auto___24859,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24860 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24860);
if(cljs.core.truth_(result__17366__auto___24861)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24860),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24860);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24841){var t__17410__auto___24862 = e24841;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto___24862,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/123");

try{var values__17365__auto___24863 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24863);
if(cljs.core.truth_(result__17366__auto___24864)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24863),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24863);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24842){var t__17410__auto___24865 = e24842;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24865,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24866 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__17366__auto___24867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24866);
if(cljs.core.truth_(result__17366__auto___24867)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24866),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24866);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24843){var t__17410__auto___24868 = e24843;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17410__auto___24868,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/456");

try{var values__17365__auto___24869 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24869);
if(cljs.core.truth_(result__17366__auto___24870)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24869),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24869);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24844){var t__17410__auto___24871 = e24844;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24871,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24872 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24872);
if(cljs.core.truth_(result__17366__auto___24873)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24872),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24872);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24845){var t__17410__auto___24874 = e24845;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto___24874,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"bar");

try{var values__17365__auto___24875 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24875);
if(cljs.core.truth_(result__17366__auto___24876)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24875),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24875);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24846){var t__17410__auto___24877 = e24846;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17410__auto___24877,cljs.core.cst$kw$message,null], null));
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
}catch (e24847){var t__17410__auto__ = e24847;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
wheel.route.hoplon._QMARK__QMARK_link_click = (function wheel$route$hoplon$_QMARK__QMARK_link_click(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test = (function (){
var history_24883 = wheel.route.core.history_cell();
var routes_24884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_24885 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_24886 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_24887 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history_24883,cljs.core.cst$kw$routes,routes_24884,cljs.core.cst$kw$handler,handler_24886,cljs.core.cst$kw$params,params_24885], 0));
cljs.core.reset_BANG_(history_24883,"bar/123");

wheel.dom.events.trigger_native_BANG_(el_24887,"click");

try{var values__17365__auto___24888 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24883);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/123");
var result__17366__auto___24889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24888);
if(cljs.core.truth_(result__17366__auto___24889)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24888),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24888);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24878){var t__17410__auto___24890 = e24878;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24890,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24883,"bar/123");

cljs.core.reset_BANG_(params_24885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

wheel.dom.events.trigger_native_BANG_(el_24887,"click");

try{var values__17365__auto___24891 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24883);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/456");
var result__17366__auto___24892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24891);
if(cljs.core.truth_(result__17366__auto___24892)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24891),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24891);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24879){var t__17410__auto___24893 = e24879;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24893,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24883,"bar/123");

cljs.core.reset_BANG_(handler_24886,cljs.core.cst$kw$baz);

cljs.core.reset_BANG_(params_24885,null);

wheel.dom.events.trigger_native_BANG_(el_24887,"click");

try{var values__17365__auto___24894 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24883);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"baz");
var result__17366__auto___24895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24894);
if(cljs.core.truth_(result__17366__auto___24895)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24894),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24894);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24880){var t__17410__auto___24896 = e24880;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto___24896,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = (function (){var fexpr__24881 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, ["foo",cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar], null)], null);
});})(history))
);
return (fexpr__24881.cljs$core$IFn$_invoke$arity$0 ? fexpr__24881.cljs$core$IFn$_invoke$arity$0() : fexpr__24881.call(null));
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
}catch (e24882){var t__17410__auto__ = e24882;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
