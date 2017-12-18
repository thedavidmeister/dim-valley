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
<<<<<<< HEAD
var wheel$route$hoplon$link__delegate = function (args__18464__auto__){
var vec__24749 = hoplon.core.parse_args(args__18464__auto__);
var map__24752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(0),null);
var map__24752__$1 = ((((!((map__24752 == null)))?((((map__24752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24752):map__24752);
var attributes = map__24752__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24752__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24749,(1),null);
=======
var wheel$route$hoplon$link__delegate = function (args__19628__auto__){
var vec__24686 = hoplon.core.parse_args(args__19628__auto__);
var map__24689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24686,(0),null);
var map__24689__$1 = ((((!((map__24689 == null)))?((((map__24689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24689):map__24689);
var attributes = map__24689__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$history);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$routes);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$handler);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24689__$1,cljs.core.cst$kw$fallback);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24686,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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

<<<<<<< HEAD
var params__$1 = (function (){var fexpr__24756 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24755){
var G__24754 = G__24755;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24754)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__24754)){
return null;
} else {
return G__24755;

}
}
});})(vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24756.cljs$core$IFn$_invoke$arity$1 ? fexpr__24756.cljs$core$IFn$_invoke$arity$1(params) : fexpr__24756.call(null,params));
})();
var bidi_EQ_ = (function (){var fexpr__24761 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24759,G__24757,G__24760,G__24758){
return (G__24757.cljs$core$IFn$_invoke$arity$3 ? G__24757.cljs$core$IFn$_invoke$arity$3(G__24758,G__24759,G__24760) : G__24757.call(null,G__24758,G__24759,G__24760));
});})(params__$1,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24761.cljs$core$IFn$_invoke$arity$4 ? fexpr__24761.cljs$core$IFn$_invoke$arity$4(routes,wheel.route.core.path__GT_bidi,fallback,history) : fexpr__24761.call(null,routes,wheel.route.core.path__GT_bidi,fallback,history));
})();
var current_handler_QMARK_ = (function (){var fexpr__24767 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24764,G__24763,G__24762){
var G__24768 = G__24763;
var G__24769 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24764);
return (G__24762.cljs$core$IFn$_invoke$arity$2 ? G__24762.cljs$core$IFn$_invoke$arity$2(G__24768,G__24769) : G__24762.call(null,G__24768,G__24769));
});})(params__$1,bidi_EQ_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24767.cljs$core$IFn$_invoke$arity$3 ? fexpr__24767.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,handler,cljs.core._EQ_) : fexpr__24767.call(null,bidi_EQ_,handler,cljs.core._EQ_));
})();
var current_params_QMARK_ = (function (){var fexpr__24775 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24772,G__24770,G__24771){
var G__24776 = G__24771;
var G__24777 = (function (){var or__8240__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24772);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var params__$1 = (function (){var fexpr__24693 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24692){
var G__24691 = G__24692;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__24691)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params,G__24691)){
return null;
} else {
return G__24692;

}
}
});})(vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24693.cljs$core$IFn$_invoke$arity$1 ? fexpr__24693.cljs$core$IFn$_invoke$arity$1(params) : fexpr__24693.call(null,params));
})();
var bidi_EQ_ = (function (){var fexpr__24698 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24696,G__24694,G__24697,G__24695){
return (G__24694.cljs$core$IFn$_invoke$arity$3 ? G__24694.cljs$core$IFn$_invoke$arity$3(G__24695,G__24696,G__24697) : G__24694.call(null,G__24695,G__24696,G__24697));
});})(params__$1,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24698.cljs$core$IFn$_invoke$arity$4 ? fexpr__24698.cljs$core$IFn$_invoke$arity$4(routes,wheel.route.core.path__GT_bidi,fallback,history) : fexpr__24698.call(null,routes,wheel.route.core.path__GT_bidi,fallback,history));
})();
var current_handler_QMARK_ = (function (){var fexpr__24704 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24701,G__24700,G__24699){
var G__24705 = G__24700;
var G__24706 = cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24701);
return (G__24699.cljs$core$IFn$_invoke$arity$2 ? G__24699.cljs$core$IFn$_invoke$arity$2(G__24705,G__24706) : G__24699.call(null,G__24705,G__24706));
});})(params__$1,bidi_EQ_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24704.cljs$core$IFn$_invoke$arity$3 ? fexpr__24704.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,handler,cljs.core._EQ_) : fexpr__24704.call(null,bidi_EQ_,handler,cljs.core._EQ_));
})();
var current_params_QMARK_ = (function (){var fexpr__24712 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (params__$1,bidi_EQ_,current_handler_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24709,G__24707,G__24708){
var G__24713 = G__24708;
var G__24714 = (function (){var or__8242__auto__ = cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24709);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
<<<<<<< HEAD
return (G__24770.cljs$core$IFn$_invoke$arity$2 ? G__24770.cljs$core$IFn$_invoke$arity$2(G__24776,G__24777) : G__24770.call(null,G__24776,G__24777));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24775.cljs$core$IFn$_invoke$arity$3 ? fexpr__24775.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,cljs.core._EQ_,params__$1) : fexpr__24775.call(null,bidi_EQ_,cljs.core._EQ_,params__$1));
})();
var G__24778 = cljs.core.cst$kw$class;
var G__24779 = "route-link";
var G__24780 = cljs.core.cst$kw$click;
var G__24781 = ((function (G__24778,G__24779,G__24780,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
=======
return (G__24707.cljs$core$IFn$_invoke$arity$2 ? G__24707.cljs$core$IFn$_invoke$arity$2(G__24713,G__24714) : G__24707.call(null,G__24713,G__24714));
});})(params__$1,bidi_EQ_,current_handler_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24712.cljs$core$IFn$_invoke$arity$3 ? fexpr__24712.cljs$core$IFn$_invoke$arity$3(bidi_EQ_,cljs.core._EQ_,params__$1) : fexpr__24712.call(null,bidi_EQ_,cljs.core._EQ_,params__$1));
})();
var G__24715 = cljs.core.cst$kw$class;
var G__24716 = "route-link";
var G__24717 = cljs.core.cst$kw$click;
var G__24718 = ((function (G__24715,G__24716,G__24717,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
if(cljs.core.truth_(cljs.core.deref(params__$1))){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,params__$1);
} else {
return wheel.route.core.handler_BANG_(history,routes,handler);
}
<<<<<<< HEAD
});})(G__24778,G__24779,G__24780,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__24782 = cljs.core.cst$kw$data_DASH_current;
var G__24783 = (function (){var fexpr__24794 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24778,G__24779,G__24780,G__24781,G__24782,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24786,G__24787,G__24788,G__24790,G__24789){
var G__24795 = (function (){var G__24796 = G__24788;
var G__24797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__24789)?"handler":null),(cljs.core.truth_(G__24790)?"params":null)], null);
return (G__24787.cljs$core$IFn$_invoke$arity$2 ? G__24787.cljs$core$IFn$_invoke$arity$2(G__24796,G__24797) : G__24787.call(null,G__24796,G__24797));
})();
return (G__24786.cljs$core$IFn$_invoke$arity$1 ? G__24786.cljs$core$IFn$_invoke$arity$1(G__24795) : G__24786.call(null,G__24795));
});})(G__24778,G__24779,G__24780,G__24781,G__24782,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24749,map__24752,map__24752__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24794.cljs$core$IFn$_invoke$arity$5 ? fexpr__24794.cljs$core$IFn$_invoke$arity$5(cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_) : fexpr__24794.call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_));
})();
var G__24784 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__24785 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__24778,G__24779,G__24780,G__24781,G__24782,G__24783,G__24784,G__24785) : hoplon.core.a.call(null,G__24778,G__24779,G__24780,G__24781,G__24782,G__24783,G__24784,G__24785));
};
var wheel$route$hoplon$link = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__24798__i = 0, G__24798__a = new Array(arguments.length -  0);
while (G__24798__i < G__24798__a.length) {G__24798__a[G__24798__i] = arguments[G__24798__i + 0]; ++G__24798__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__24798__a,0,null);
} 
return wheel$route$hoplon$link__delegate.call(this,args__18464__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__24799){
var args__18464__auto__ = cljs.core.seq(arglist__24799);
return wheel$route$hoplon$link__delegate(args__18464__auto__);
=======
});})(G__24715,G__24716,G__24717,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
;
var G__24719 = cljs.core.cst$kw$data_DASH_current;
var G__24720 = (function (){var fexpr__24731 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24715,G__24716,G__24717,G__24718,G__24719,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children){
return (function (G__24723,G__24724,G__24725,G__24727,G__24726){
var G__24732 = (function (){var G__24733 = G__24725;
var G__24734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(G__24726)?"handler":null),(cljs.core.truth_(G__24727)?"params":null)], null);
return (G__24724.cljs$core$IFn$_invoke$arity$2 ? G__24724.cljs$core$IFn$_invoke$arity$2(G__24733,G__24734) : G__24724.call(null,G__24733,G__24734));
})();
return (G__24723.cljs$core$IFn$_invoke$arity$1 ? G__24723.cljs$core$IFn$_invoke$arity$1(G__24732) : G__24723.call(null,G__24732));
});})(G__24715,G__24716,G__24717,G__24718,G__24719,params__$1,bidi_EQ_,current_handler_QMARK_,current_params_QMARK_,vec__24686,map__24689,map__24689__$1,attributes,history,routes,handler,params,fallback,children))
);
return (fexpr__24731.cljs$core$IFn$_invoke$arity$5 ? fexpr__24731.cljs$core$IFn$_invoke$arity$5(cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_) : fexpr__24731.call(null,cljs.core.seq,cljs.core.remove,cljs.core.nil_QMARK_,current_params_QMARK_,current_handler_QMARK_));
})();
var G__24721 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$params,cljs.core.cst$kw$fallback], 0));
var G__24722 = children;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$8(G__24715,G__24716,G__24717,G__24718,G__24719,G__24720,G__24721,G__24722) : hoplon.core.a.call(null,G__24715,G__24716,G__24717,G__24718,G__24719,G__24720,G__24721,G__24722));
};
var wheel$route$hoplon$link = function (var_args){
var args__19628__auto__ = null;
if (arguments.length > 0) {
var G__24735__i = 0, G__24735__a = new Array(arguments.length -  0);
while (G__24735__i < G__24735__a.length) {G__24735__a[G__24735__i] = arguments[G__24735__i + 0]; ++G__24735__i;}
  args__19628__auto__ = new cljs.core.IndexedSeq(G__24735__a,0,null);
} 
return wheel$route$hoplon$link__delegate.call(this,args__19628__auto__);};
wheel$route$hoplon$link.cljs$lang$maxFixedArity = 0;
wheel$route$hoplon$link.cljs$lang$applyTo = (function (arglist__24736){
var args__19628__auto__ = cljs.core.seq(arglist__24736);
return wheel$route$hoplon$link__delegate(args__19628__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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
<<<<<<< HEAD
try{var values__17363__auto___24811 = (function (){var x__9194__auto__ = el;
return cljs.core._conj((function (){var x__9194__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24812 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__17363__auto___24811);
if(cljs.core.truth_(result__17364__auto___24812)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__17363__auto___24811),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__17363__auto___24811);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24800){var t__17408__auto___24813 = e24800;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__17408__auto___24813,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__17363__auto___24814 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9194__auto__);
})();
var result__17364__auto___24815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___24814);
if(cljs.core.truth_(result__17364__auto___24815)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___24814),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___24814);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24801){var t__17408__auto___24816 = e24801;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17408__auto___24816,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24817 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9194__auto__);
})();
var result__17364__auto___24818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___24817);
if(cljs.core.truth_(result__17364__auto___24818)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___24817),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___24817);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24802){var t__17408__auto___24819 = e24802;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17408__auto___24819,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__17363__auto___24820 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9194__auto__);
})();
var result__17364__auto___24821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___24820);
if(cljs.core.truth_(result__17364__auto___24821)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___24820),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___24820);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24803){var t__17408__auto___24822 = e24803;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__17408__auto___24822,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24823 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24824 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24823);
if(cljs.core.truth_(result__17364__auto___24824)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24823),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24823);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24804){var t__17408__auto___24825 = e24804;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17408__auto___24825,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/123");

try{var values__17363__auto___24826 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24827 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24826);
if(cljs.core.truth_(result__17364__auto___24827)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24826),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24826);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24805){var t__17408__auto___24828 = e24805;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17408__auto___24828,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24829 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9194__auto__);
})();
var result__17364__auto___24830 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___24829);
if(cljs.core.truth_(result__17364__auto___24830)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___24829),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___24829);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24806){var t__17408__auto___24831 = e24806;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__17408__auto___24831,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/456");

try{var values__17363__auto___24832 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24833 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24832);
if(cljs.core.truth_(result__17364__auto___24833)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24832),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24832);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24807){var t__17408__auto___24834 = e24807;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17408__auto___24834,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24835 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24836 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24835);
if(cljs.core.truth_(result__17364__auto___24836)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24835),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24835);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24808){var t__17408__auto___24837 = e24808;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17408__auto___24837,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"bar");

try{var values__17363__auto___24838 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24838);
if(cljs.core.truth_(result__17364__auto___24839)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24838),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24838);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24809){var t__17408__auto___24840 = e24809;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__17408__auto___24840,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e24810){var t__17408__auto__ = e24810;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
=======
try{var values__18527__auto___24748 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = child;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___24749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.contains_QMARK_,values__18527__auto___24748);
if(cljs.core.truth_(result__18528__auto___24749)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.contains_QMARK_,values__18527__auto___24748),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,values__18527__auto___24748);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24737){var t__18572__auto___24750 = e24737;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_contains_QMARK_,cljs.core.cst$sym$el,cljs.core.cst$sym$child),cljs.core.cst$kw$actual,t__18572__auto___24750,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"123"], null));

try{var values__18527__auto___24751 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__18528__auto___24752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24751);
if(cljs.core.truth_(result__18528__auto___24752)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24751),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___24751);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24738){var t__18572__auto___24753 = e24738;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__18572__auto___24753,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24754 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__18528__auto___24755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24754);
if(cljs.core.truth_(result__18528__auto___24755)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24754),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___24754);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24739){var t__18572__auto___24756 = e24739;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__18572__auto___24756,cljs.core.cst$kw$message,null], null));
}
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

try{var values__18527__auto___24757 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=handler]"),x__9196__auto__);
})();
var result__18528__auto___24758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24757);
if(cljs.core.truth_(result__18528__auto___24758)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24757),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___24757);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24740){var t__18572__auto___24759 = e24740;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]"),cljs.core.cst$kw$actual,t__18572__auto___24759,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24760 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24761 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24760);
if(cljs.core.truth_(result__18528__auto___24761)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24760),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24760);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24741){var t__18572__auto___24762 = e24741;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__18572__auto___24762,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/123");

try{var values__18527__auto___24763 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24764 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24763);
if(cljs.core.truth_(result__18528__auto___24764)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24763),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24763);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24742){var t__18572__auto___24765 = e24742;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__18572__auto___24765,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24766 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-current*=params]"),x__9196__auto__);
})();
var result__18528__auto___24767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24766);
if(cljs.core.truth_(result__18528__auto___24767)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24766),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___24766);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24743){var t__18572__auto___24768 = e24743;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]"),cljs.core.cst$kw$actual,t__18572__auto___24768,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"baz/456");

try{var values__18527__auto___24769 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24770 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24769);
if(cljs.core.truth_(result__18528__auto___24770)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24769),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24769);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24744){var t__18572__auto___24771 = e24744;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__18572__auto___24771,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24772 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24773 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24772);
if(cljs.core.truth_(result__18528__auto___24773)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24772),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24772);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24745){var t__18572__auto___24774 = e24745;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__18572__auto___24774,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history,"bar");

try{var values__18527__auto___24775 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=handler]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24776 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24775);
if(cljs.core.truth_(result__18528__auto___24776)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24775),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24775);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24746){var t__18572__auto___24777 = e24746;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=handler]")),cljs.core.cst$kw$actual,t__18572__auto___24777,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-current*=params]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e24747){var t__18572__auto__ = e24747;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-current*=params]")),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/route/hoplon.cljs",16,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link)?wheel.route.hoplon._QMARK__QMARK_link.cljs$lang$test:null)]));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
wheel.route.hoplon._QMARK__QMARK_link_click = (function wheel$route$hoplon$_QMARK__QMARK_link_click(){
return cljs.test.test_var(wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var);
});
wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test = (function (){
<<<<<<< HEAD
var history_24846 = wheel.route.core.history_cell();
var routes_24847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_24848 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_24849 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_24850 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history_24846,cljs.core.cst$kw$routes,routes_24847,cljs.core.cst$kw$handler,handler_24849,cljs.core.cst$kw$params,params_24848], 0));
cljs.core.reset_BANG_(history_24846,"bar/123");

wheel.dom.events.trigger_native_BANG_(el_24850,"click");

try{var values__17363__auto___24851 = cljs.core._conj((function (){var x__9194__auto__ = cljs.core.deref(history_24846);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),"foo/123");
var result__17364__auto___24852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24851);
if(cljs.core.truth_(result__17364__auto___24852)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24851),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24851);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24841){var t__17408__auto___24853 = e24841;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17408__auto___24853,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24846,"bar/123");

cljs.core.reset_BANG_(params_24848,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

wheel.dom.events.trigger_native_BANG_(el_24850,"click");

try{var values__17363__auto___24854 = cljs.core._conj((function (){var x__9194__auto__ = cljs.core.deref(history_24846);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),"foo/456");
var result__17364__auto___24855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24854);
if(cljs.core.truth_(result__17364__auto___24855)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24854),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24854);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24842){var t__17408__auto___24856 = e24842;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17408__auto___24856,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24846,"bar/123");

cljs.core.reset_BANG_(handler_24849,cljs.core.cst$kw$baz);

cljs.core.reset_BANG_(params_24848,null);

wheel.dom.events.trigger_native_BANG_(el_24850,"click");

try{var values__17363__auto___24857 = cljs.core._conj((function (){var x__9194__auto__ = cljs.core.deref(history_24846);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),"baz");
var result__17364__auto___24858 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24857);
if(cljs.core.truth_(result__17364__auto___24858)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24857),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24857);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24843){var t__17408__auto___24859 = e24843;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17408__auto___24859,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = (function (){var fexpr__24844 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
=======
var history_24783 = wheel.route.core.history_cell();
var routes_24784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$foo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar/",cljs.core.cst$kw$x], null),cljs.core.cst$kw$bar,"baz",cljs.core.cst$kw$baz])], null);
var params_24785 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$wheel$route_SLASH_preserve_DASH_params);
var handler_24786 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$foo);
var el_24787 = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history_24783,cljs.core.cst$kw$routes,routes_24784,cljs.core.cst$kw$handler,handler_24786,cljs.core.cst$kw$params,params_24785], 0));
cljs.core.reset_BANG_(history_24783,"bar/123");

wheel.dom.events.trigger_native_BANG_(el_24787,"click");

try{var values__18527__auto___24788 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24783);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/123");
var result__18528__auto___24789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___24788);
if(cljs.core.truth_(result__18528__auto___24789)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___24788),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___24788);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24778){var t__18572__auto___24790 = e24778;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/123",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__18572__auto___24790,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24783,"bar/123");

cljs.core.reset_BANG_(params_24785,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,"456"], null));

wheel.dom.events.trigger_native_BANG_(el_24787,"click");

try{var values__18527__auto___24791 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24783);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"foo/456");
var result__18528__auto___24792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___24791);
if(cljs.core.truth_(result__18528__auto___24792)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___24791),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___24791);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24779){var t__18572__auto___24793 = e24779;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"foo/456",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__18572__auto___24793,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(history_24783,"bar/123");

cljs.core.reset_BANG_(handler_24786,cljs.core.cst$kw$baz);

cljs.core.reset_BANG_(params_24785,null);

wheel.dom.events.trigger_native_BANG_(el_24787,"click");

try{var values__18527__auto___24794 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history_24783);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"baz");
var result__18528__auto___24795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___24794);
if(cljs.core.truth_(result__18528__auto___24795)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___24794),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___24794);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24780){var t__18572__auto___24796 = e24780;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"baz",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__18572__auto___24796,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var routes = (function (){var fexpr__24781 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 2, ["foo",cljs.core.cst$kw$foo,"bar",cljs.core.cst$kw$bar], null)], null);
});})(history))
);
<<<<<<< HEAD
return (fexpr__24844.cljs$core$IFn$_invoke$arity$0 ? fexpr__24844.cljs$core$IFn$_invoke$arity$0() : fexpr__24844.call(null));
=======
return (fexpr__24781.cljs$core$IFn$_invoke$arity$0 ? fexpr__24781.cljs$core$IFn$_invoke$arity$0() : fexpr__24781.call(null));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
var el = wheel.route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,history,cljs.core.cst$kw$routes,routes,cljs.core.cst$kw$handler,cljs.core.cst$kw$bar], 0));
cljs.core.reset_BANG_(history,"foo");

wheel.dom.events.trigger_native_BANG_(el,"click");

<<<<<<< HEAD
try{var values__17363__auto__ = cljs.core._conj((function (){var x__9194__auto__ = cljs.core.deref(history);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),"bar");
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e24845){var t__17408__auto__ = e24845;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
=======
try{var values__18527__auto__ = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.deref(history);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"bar");
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e24782){var t__18572__auto__ = e24782;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$history)),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.hoplon._QMARK__QMARK_link_click;},cljs.core.cst$sym$wheel$route$hoplon_SLASH__QMARK__QMARK_link_DASH_click,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$hoplon,cljs.core.cst$sym$_QMARK__QMARK_link_DASH_click,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/route/hoplon.cljs",22,1,81,81,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.hoplon._QMARK__QMARK_link_click)?wheel.route.hoplon._QMARK__QMARK_link_click.cljs$lang$test:null)]));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
