// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.route.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.History');
goog.require('bidi.bidi');
goog.require('medley.core');
goog.require('cuerdas.core');
goog.require('javelin.core');
goog.require('schema.core');
goog.require('bidi.schema');
goog.require('cljs.test');
wheel.route.core.routes_QMARK_ = (function wheel$route$core$routes_QMARK_(routes){
if(cljs.core.truth_(javelin.core.cell_QMARK_(routes))){
var G__21023 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes));
return (wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21023) : wheel.route.core.routes_QMARK_.call(null,G__21023));
} else {
return cljs.core.not(schema.core.check(bidi.schema.RoutePair,routes));
}
});
/**
 * A cell analagous to hoplon's route cell, based on Google Closure History API
 */
wheel.route.core.history_cell = (function wheel$route$core$history_cell(){
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var history = (new goog.History());
var _ = (function (){var c__14260__auto__ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history){
return (function (G__21031){
return G__21031;
});})(c,history))
).call(null,c);
c__14260__auto__.update = ((function (c__14260__auto__,c,history){
return (function (p1__21024_SHARP_){
return history.setToken(p1__21024_SHARP_);
});})(c__14260__auto__,c,history))
;

return c__14260__auto__;
})();
var G__21032_21037 = history;
var G__21033_21038 = goog.History.EventType.NAVIGATE;
var G__21034_21039 = ((function (G__21032_21037,G__21033_21038,_,c,history){
return (function (e){
var G__21035 = c;
var G__21036 = e.token;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21035,G__21036) : cljs.core.reset_BANG_.call(null,G__21035,G__21036));
});})(G__21032_21037,G__21033_21038,_,c,history))
;
goog.events.listen(G__21032_21037,G__21033_21038,G__21034_21039);

history.setEnabled(true);

return _;
});
/**
 * Fetches the current hash from the window location, sans left # character
 */
wheel.route.core.current_hash = (function wheel$route$core$current_hash(){
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2(window.location.hash,"#");
});
/**
 * Given a path, routes and fallback handler, returns a bidi location
 */
wheel.route.core.path__GT_bidi = (function wheel$route$core$path__GT_bidi(var_args){
var args21040 = [];
var len__8981__auto___21043 = arguments.length;
var i__8982__auto___21044 = (0);
while(true){
if((i__8982__auto___21044 < len__8981__auto___21043)){
args21040.push((arguments[i__8982__auto___21044]));

var G__21045 = (i__8982__auto___21044 + (1));
i__8982__auto___21044 = G__21045;
continue;
} else {
}
break;
}

var G__21042 = args21040.length;
switch (G__21042) {
case 2:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21040.length)].join('')));

}
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2 = (function (path,routes){
return bidi.bidi.match_route(routes,path);
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3 = (function (path,routes,fallback){
var or__7760__auto__ = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(path,routes);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
}
});

wheel.route.core.path__GT_bidi.cljs$lang$maxFixedArity = 3;

/**
 * Given a bidi handler, and optionally bidi params, returns a path
 */
wheel.route.core.bidi__GT_path = (function wheel$route$core$bidi__GT_path(var_args){
var args21047 = [];
var len__8981__auto___21050 = arguments.length;
var i__8982__auto___21051 = (0);
while(true){
if((i__8982__auto___21051 < len__8981__auto___21050)){
args21047.push((arguments[i__8982__auto___21051]));

var G__21052 = (i__8982__auto___21051 + (1));
i__8982__auto___21051 = G__21052;
continue;
} else {
}
break;
}

var G__21049 = args21047.length;
switch (G__21049) {
case 2:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21047.length)].join('')));

}
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (routes,handler){
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (routes,handler,params){
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

if((handler instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? handler)"));
}

if(cljs.core.map_QMARK_(params)){
} else {
throw (new Error("Assert failed: (map? params)"));
}

var with_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bidi.bidi.path_for,routes,handler);
var param_list = cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(with_handler,param_list);
});

wheel.route.core.bidi__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * Set the history cell to the given handler and params
 */
wheel.route.core.navigate_BANG_ = (function wheel$route$core$navigate_BANG_(var_args){
var args21054 = [];
var len__8981__auto___21059 = arguments.length;
var i__8982__auto___21060 = (0);
while(true){
if((i__8982__auto___21060 < len__8981__auto___21059)){
args21054.push((arguments[i__8982__auto___21060]));

var G__21061 = (i__8982__auto___21060 + (1));
i__8982__auto___21060 = G__21061;
continue;
} else {
}
break;
}

var G__21056 = args21054.length;
switch (G__21056) {
case 3:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21054.length)].join('')));

}
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (history,routes,handler){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (history,routes,handler,params){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes)):routes);
var handler__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(handler))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handler) : cljs.core.deref.call(null,handler)):handler);
var params__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(params))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(params) : cljs.core.deref.call(null,params)):params);
if(cljs.core.truth_(javelin.core.cell_QMARK_(history))){
} else {
throw (new Error("Assert failed: (j/cell? history)"));
}

if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

if((handler__$1 instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? handler)"));
}

if(cljs.core.map_QMARK_(params__$1)){
} else {
throw (new Error("Assert failed: (map? params)"));
}

var G__21057 = history;
var G__21058 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes__$1,handler__$1,params__$1))].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21057,G__21058) : cljs.core.reset_BANG_.call(null,G__21057,G__21058));
});

wheel.route.core.navigate_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Set the history cell to the given handler without changing the params
 */
wheel.route.core.handler_BANG_ = (function wheel$route$core$handler_BANG_(history,routes,handler){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history) : cljs.core.deref.call(null,history)),routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1));
});
/**
 * Set the history cell to the given params without changing the handler
 */
wheel.route.core.params_BANG_ = (function wheel$route$core$params_BANG_(history,routes,params){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history) : cljs.core.deref.call(null,history)),routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(bidi__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1),params], 0)));
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash = (function wheel$route$core$_QMARK__QMARK_history_cell__set_hash(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test = (function (){
if(typeof wheel.route.core.t_wheel$route$core21063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
wheel.route.core.t_wheel$route$core21063 = (function (meta21064){
this.meta21064 = meta21064;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
wheel.route.core.t_wheel$route$core21063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21065,meta21064__$1){
var self__ = this;
var _21065__$1 = this;
return (new wheel.route.core.t_wheel$route$core21063(meta21064__$1));
});

wheel.route.core.t_wheel$route$core21063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21065){
var self__ = this;
var _21065__$1 = this;
return self__.meta21064;
});

wheel.route.core.t_wheel$route$core21063.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

wheel.route.core.t_wheel$route$core21063.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___20394__auto__ = self____$1;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20394__auto__,self____$1){
return (function (G__21067,G__21068,G__21071,G__21069,G__21070){
if(cljs.core.truth_((function (){var G__21072 = G__21068;
var G__21073 = G__21069;
var G__21074 = (G__21070.cljs$core$IFn$_invoke$arity$0 ? G__21070.cljs$core$IFn$_invoke$arity$0() : G__21070.call(null));
return (G__21067.cljs$core$IFn$_invoke$arity$3 ? G__21067.cljs$core$IFn$_invoke$arity$3(G__21072,G__21073,G__21074) : G__21067.call(null,G__21072,G__21073,G__21074));
})())){
return (G__21071.cljs$core$IFn$_invoke$arity$0 ? G__21071.cljs$core$IFn$_invoke$arity$0() : G__21071.call(null));
} else {
return null;
}
});})(c,p,___20394__auto__,self____$1))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21063.prototype.apply = (function (self__,args21066){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21066)));
});

wheel.route.core.t_wheel$route$core21063.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___20394__auto__ = this;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20394__auto__){
return (function (G__21075,G__21076,G__21079,G__21077,G__21078){
if(cljs.core.truth_((function (){var G__21080 = G__21076;
var G__21081 = G__21077;
var G__21082 = (G__21078.cljs$core$IFn$_invoke$arity$0 ? G__21078.cljs$core$IFn$_invoke$arity$0() : G__21078.call(null));
return (G__21075.cljs$core$IFn$_invoke$arity$3 ? G__21075.cljs$core$IFn$_invoke$arity$3(G__21080,G__21081,G__21082) : G__21075.call(null,G__21080,G__21081,G__21082));
})())){
return (G__21079.cljs$core$IFn$_invoke$arity$0 ? G__21079.cljs$core$IFn$_invoke$arity$0() : G__21079.call(null));
} else {
return null;
}
});})(c,p,___20394__auto__))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta21064], null);
});

wheel.route.core.t_wheel$route$core21063.cljs$lang$type = true;

wheel.route.core.t_wheel$route$core21063.cljs$lang$ctorStr = "wheel.route.core/t_wheel$route$core21063";

wheel.route.core.t_wheel$route$core21063.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"wheel.route.core/t_wheel$route$core21063");
});

wheel.route.core.__GT_t_wheel$route$core21063 = (function wheel$route$core$__GT_t_wheel$route$core21063(meta21064){
return (new wheel.route.core.t_wheel$route$core21063(meta21064));
});

}

return (new wheel.route.core.t_wheel$route$core21063(null));
});

wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell__set_hash;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/route/core.cljs",34,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell__set_hash)?wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_history_cell = (function wheel$route$core$_QMARK__QMARK_history_cell(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test = (function (){
var c = wheel.route.core.history_cell();
try{var values__20326__auto___21086 = (function (){var x__8694__auto__ = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c)) == null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20327__auto___21087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20326__auto___21086);
if(cljs.core.truth_(result__20327__auto___21087)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20326__auto___21086),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20326__auto___21086);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21083){var t__20364__auto___21088 = e21083;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,t__20364__auto___21088,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___21089 = (function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20327__auto___21090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__20326__auto___21089);
if(cljs.core.truth_(result__20327__auto___21090)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.string_QMARK_,values__20326__auto___21089),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$string_QMARK_,values__20326__auto___21089);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21084){var t__20364__auto___21091 = e21084;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,t__20364__auto___21091,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(c,"bar") : cljs.core.reset_BANG_.call(null,c,"bar"));

try{var values__20326__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})(),"bar");
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e21085){var t__20364__auto__ = e21085;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/route/core.cljs",24,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell)?wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_path__GT_bidi = (function wheel$route$core$_QMARK__QMARK_path__GT_bidi(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test = (function (){
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,handler], null);
var fallback = cljs.core.cst$kw$bar;
try{var values__20326__auto___21094 = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3(path,routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___21095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___21094);
if(cljs.core.truth_(result__20327__auto___21095)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___21094),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___21094);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21092){var t__20364__auto___21096 = e21092;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20364__auto___21096,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto__ = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e21093){var t__20364__auto__ = e21093;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_path__GT_bidi;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_path_DASH__GT_bidi,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_path_DASH__GT_bidi,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/route/core.cljs",22,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_path__GT_bidi)?wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_bidi__GT_path = (function wheel$route$core$_QMARK__QMARK_bidi__GT_path(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test = (function (){
try{var values__20326__auto___21099 = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo");
var result__20327__auto___21100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___21099);
if(cljs.core.truth_(result__20327__auto___21100)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___21099),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___21099);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21097){var t__20364__auto___21101 = e21097;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,t__20364__auto___21101,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo/123");
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e21098){var t__20364__auto__ = e21098;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_bidi__GT_path;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_bidi_DASH__GT_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_bidi_DASH__GT_path,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/route/core.cljs",22,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_bidi__GT_path)?wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_navigate_BANG_ = (function wheel$route$core$_QMARK__QMARK_navigate_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test = (function (){
var history_21106 = wheel.route.core.history_cell();
var path_21107 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_21108 = cljs.core.cst$kw$foo;
var routes_21109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_21107,handler_21108], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3(history_21106,routes_21109,handler_21108);

try{var values__20326__auto___21110 = (function (){var x__8694__auto__ = path_21107;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___21111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___21110);
if(cljs.core.truth_(result__20327__auto___21111)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___21110),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___21110);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21102){var t__20364__auto___21112 = e21102;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20364__auto___21112,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var param_key = cljs.core.cst$kw$bar;
var param_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler])])], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value]));

try{var values__20326__auto___21113 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___21114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___21113);
if(cljs.core.truth_(result__20327__auto___21114)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___21113),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___21113);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21103){var t__20364__auto___21115 = e21103;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20364__auto___21115,cljs.core.cst$kw$message,null], null));
}
var path_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_SINGLEQUOTE_ = cljs.core.cst$kw$baz;
var routes_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler]),path_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler_SINGLEQUOTE_])])], null);
wheel.route.core.handler_BANG_(history,routes_SINGLEQUOTE_,handler_SINGLEQUOTE_);

try{var values__20326__auto___21116 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___21117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___21116);
if(cljs.core.truth_(result__20327__auto___21117)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___21116),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___21116);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21104){var t__20364__auto___21118 = e21104;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20364__auto___21118,cljs.core.cst$kw$message,null], null));
}
var param_value_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
wheel.route.core.params_BANG_(history,routes_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value_SINGLEQUOTE_]));

try{var values__20326__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e21105){var t__20364__auto__ = e21105;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_navigate_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_navigate_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_navigate_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/route/core.cljs",21,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_navigate_BANG_)?wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test:null)]));
