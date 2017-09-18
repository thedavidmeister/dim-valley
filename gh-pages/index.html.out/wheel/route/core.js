// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var G__23240 = cljs.core.deref(routes);
return (wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23240) : wheel.route.core.routes_QMARK_.call(null,G__23240));
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
var _ = (function (){var c__15701__auto__ = (function (){var fexpr__23243 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,history){
return (function (G__23242){
return G__23242;
});})(c,history))
);
return (fexpr__23243.cljs$core$IFn$_invoke$arity$1 ? fexpr__23243.cljs$core$IFn$_invoke$arity$1(c) : fexpr__23243.call(null,c));
})();
c__15701__auto__.update = ((function (c__15701__auto__,c,history){
return (function (p1__23241_SHARP_){
return history.setToken(p1__23241_SHARP_);
});})(c__15701__auto__,c,history))
;

return c__15701__auto__;
})();
var G__23244_23247 = history;
var G__23245_23248 = goog.History.EventType.NAVIGATE;
var G__23246_23249 = ((function (G__23244_23247,G__23245_23248,_,c,history){
return (function (e){
return cljs.core.reset_BANG_(c,e.token);
});})(G__23244_23247,G__23245_23248,_,c,history))
;
goog.events.listen(G__23244_23247,G__23245_23248,G__23246_23249);

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
var G__23251 = arguments.length;
switch (G__23251) {
case 2:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2 = (function (path,routes){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?cljs.core.deref(routes):routes);
var path__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(path))?cljs.core.deref(path):path);
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

return bidi.bidi.match_route(routes__$1,path__$1);
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3 = (function (path,routes,fallback){
var or__8638__auto__ = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(path,routes);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
}
});

wheel.route.core.path__GT_bidi.cljs$lang$maxFixedArity = 3;

/**
 * Given a bidi handler, and optionally bidi params, returns a path
 */
wheel.route.core.bidi__GT_path = (function wheel$route$core$bidi__GT_path(var_args){
var G__23254 = arguments.length;
switch (G__23254) {
case 2:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (routes,handler){
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (routes,handler,params){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?cljs.core.deref(routes):routes);
var handler__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(handler))?cljs.core.deref(handler):handler);
var params__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(params))?cljs.core.deref(params):params);
var with_handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bidi.bidi.path_for,routes__$1,handler__$1);
var param_list = cljs.core.flatten(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,params__$1));
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(with_handler,param_list);
});

wheel.route.core.bidi__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * Set the history cell to the given handler and params
 */
wheel.route.core.navigate_BANG_ = (function wheel$route$core$navigate_BANG_(var_args){
var G__23257 = arguments.length;
switch (G__23257) {
case 3:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (history,routes,handler){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (history,routes,handler,params){
return cljs.core.reset_BANG_(history,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,params))].join(''));
});

wheel.route.core.navigate_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Set the history cell to the given handler without changing the params
 */
wheel.route.core.handler_BANG_ = (function wheel$route$core$handler_BANG_(history,routes,handler){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(history,routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1));
});
/**
 * Set the history cell to the given params without changing the handler
 */
wheel.route.core.params_BANG_ = (function wheel$route$core$params_BANG_(history,routes,params){
var bidi__$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2(history,routes);
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(bidi__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1),params], 0)));
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash = (function wheel$route$core$_QMARK__QMARK_history_cell__set_hash(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test = (function (){
if(typeof wheel.route.core.t_wheel$route$core23259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
wheel.route.core.t_wheel$route$core23259 = (function (meta23260){
this.meta23260 = meta23260;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
wheel.route.core.t_wheel$route$core23259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23261,meta23260__$1){
var self__ = this;
var _23261__$1 = this;
return (new wheel.route.core.t_wheel$route$core23259(meta23260__$1));
});

wheel.route.core.t_wheel$route$core23259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23261){
var self__ = this;
var _23261__$1 = this;
return self__.meta23260;
});

wheel.route.core.t_wheel$route$core23259.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

wheel.route.core.t_wheel$route$core23259.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___17836__auto__ = self____$1;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

var fexpr__23271 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___17836__auto__,self____$1){
return (function (G__23263,G__23264,G__23267,G__23265,G__23266){
if(cljs.core.truth_((function (){var G__23272 = G__23264;
var G__23273 = G__23265;
var G__23274 = (G__23266.cljs$core$IFn$_invoke$arity$0 ? G__23266.cljs$core$IFn$_invoke$arity$0() : G__23266.call(null));
return (G__23263.cljs$core$IFn$_invoke$arity$3 ? G__23263.cljs$core$IFn$_invoke$arity$3(G__23272,G__23273,G__23274) : G__23263.call(null,G__23272,G__23273,G__23274));
})())){
return (G__23267.cljs$core$IFn$_invoke$arity$0 ? G__23267.cljs$core$IFn$_invoke$arity$0() : G__23267.call(null));
} else {
return null;
}
});})(c,p,___17836__auto__,self____$1))
);
return (fexpr__23271.cljs$core$IFn$_invoke$arity$5 ? fexpr__23271.cljs$core$IFn$_invoke$arity$5(cljs.core._EQ_,p,done,c,wheel.route.core.current_hash) : fexpr__23271.call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash));
});

wheel.route.core.t_wheel$route$core23259.prototype.apply = (function (self__,args23262){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23262)));
});

wheel.route.core.t_wheel$route$core23259.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___17836__auto__ = this;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

var fexpr__23283 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___17836__auto__){
return (function (G__23275,G__23276,G__23279,G__23277,G__23278){
if(cljs.core.truth_((function (){var G__23284 = G__23276;
var G__23285 = G__23277;
var G__23286 = (G__23278.cljs$core$IFn$_invoke$arity$0 ? G__23278.cljs$core$IFn$_invoke$arity$0() : G__23278.call(null));
return (G__23275.cljs$core$IFn$_invoke$arity$3 ? G__23275.cljs$core$IFn$_invoke$arity$3(G__23284,G__23285,G__23286) : G__23275.call(null,G__23284,G__23285,G__23286));
})())){
return (G__23279.cljs$core$IFn$_invoke$arity$0 ? G__23279.cljs$core$IFn$_invoke$arity$0() : G__23279.call(null));
} else {
return null;
}
});})(c,p,___17836__auto__))
);
return (fexpr__23283.cljs$core$IFn$_invoke$arity$5 ? fexpr__23283.cljs$core$IFn$_invoke$arity$5(cljs.core._EQ_,p,done,c,wheel.route.core.current_hash) : fexpr__23283.call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash));
});

wheel.route.core.t_wheel$route$core23259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta23260], null);
});

wheel.route.core.t_wheel$route$core23259.cljs$lang$type = true;

wheel.route.core.t_wheel$route$core23259.cljs$lang$ctorStr = "wheel.route.core/t_wheel$route$core23259";

wheel.route.core.t_wheel$route$core23259.cljs$lang$ctorPrWriter = (function (this__9309__auto__,writer__9310__auto__,opt__9311__auto__){
return cljs.core._write(writer__9310__auto__,"wheel.route.core/t_wheel$route$core23259");
});

wheel.route.core.__GT_t_wheel$route$core23259 = (function wheel$route$core$__GT_t_wheel$route$core23259(meta23260){
return (new wheel.route.core.t_wheel$route$core23259(meta23260));
});

}

return (new wheel.route.core.t_wheel$route$core23259(null));
});

wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell__set_hash;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",34,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell__set_hash)?wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_history_cell = (function wheel$route$core$_QMARK__QMARK_history_cell(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test = (function (){
var c = wheel.route.core.history_cell();
try{var values__17761__auto___23290 = (function (){var x__9592__auto__ = (cljs.core.deref(c) == null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___23291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___23290);
if(cljs.core.truth_(result__17762__auto___23291)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___23290),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___23290);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23287){var t__17806__auto___23292 = e23287;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,t__17806__auto___23292,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___23293 = (function (){var x__9592__auto__ = cljs.core.deref(c);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___23294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__17761__auto___23293);
if(cljs.core.truth_(result__17762__auto___23294)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.string_QMARK_,values__17761__auto___23293),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$string_QMARK_,values__17761__auto___23293);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23288){var t__17806__auto___23295 = e23288;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,t__17806__auto___23295,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(c,"bar");

try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),"bar");
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e23289){var t__17806__auto__ = e23289;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",24,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell)?wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_path__GT_bidi = (function wheel$route$core$_QMARK__QMARK_path__GT_bidi(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test = (function (){
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,handler], null);
var fallback = cljs.core.cst$kw$bar;
try{var values__17761__auto___23298 = (function (){var x__9592__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3(path,routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___23299 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___23298);
if(cljs.core.truth_(result__17762__auto___23299)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___23298),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___23298);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23296){var t__17806__auto___23300 = e23296;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__17806__auto___23300,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = (function (){var x__9592__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e23297){var t__17806__auto__ = e23297;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_path__GT_bidi;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_path_DASH__GT_bidi,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_path_DASH__GT_bidi,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",22,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_path__GT_bidi)?wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_bidi__GT_path = (function wheel$route$core$_QMARK__QMARK_bidi__GT_path(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test = (function (){
try{var values__17761__auto___23303 = cljs.core._conj((function (){var x__9592__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"/foo");
var result__17762__auto___23304 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___23303);
if(cljs.core.truth_(result__17762__auto___23304)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___23303),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___23303);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23301){var t__17806__auto___23305 = e23301;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,t__17806__auto___23305,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"/foo/123");
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e23302){var t__17806__auto__ = e23302;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_bidi__GT_path;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_bidi_DASH__GT_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_bidi_DASH__GT_path,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",22,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_bidi__GT_path)?wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_navigate_BANG_ = (function wheel$route$core$_QMARK__QMARK_navigate_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test = (function (){
var history_23310 = wheel.route.core.history_cell();
var path_23311 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_23312 = cljs.core.cst$kw$foo;
var routes_23313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_23311,handler_23312], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3(history_23310,routes_23313,handler_23312);

try{var values__17761__auto___23314 = (function (){var x__9592__auto__ = path_23311;
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___23315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___23314);
if(cljs.core.truth_(result__17762__auto___23315)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___23314),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___23314);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23306){var t__17806__auto___23316 = e23306;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto___23316,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var param_key = cljs.core.cst$kw$bar;
var param_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler])])], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value]));

try{var values__17761__auto___23317 = (function (){var x__9592__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___23318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___23317);
if(cljs.core.truth_(result__17762__auto___23318)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___23317),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___23317);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23307){var t__17806__auto___23319 = e23307;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto___23319,cljs.core.cst$kw$message,null], null));
}
var path_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_SINGLEQUOTE_ = cljs.core.cst$kw$baz;
var routes_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler]),path_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler_SINGLEQUOTE_])])], null);
wheel.route.core.handler_BANG_(history,routes_SINGLEQUOTE_,handler_SINGLEQUOTE_);

try{var values__17761__auto___23320 = (function (){var x__9592__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto___23321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___23320);
if(cljs.core.truth_(result__17762__auto___23321)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___23320),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___23320);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23308){var t__17806__auto___23322 = e23308;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto___23322,cljs.core.cst$kw$message,null], null));
}
var param_value_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
wheel.route.core.params_BANG_(history,routes_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value_SINGLEQUOTE_]));

try{var values__17761__auto__ = (function (){var x__9592__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e23309){var t__17806__auto__ = e23309;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_navigate_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_navigate_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_navigate_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",21,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_navigate_BANG_)?wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_handler_BANG_ = (function wheel$route$core$_QMARK__QMARK_handler_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test = (function (){
var history = wheel.route.core.history_cell();
var path = (function (){var fexpr__23324 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (G__23323){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__23323.cljs$core$IFn$_invoke$arity$0 ? G__23323.cljs$core$IFn$_invoke$arity$0() : G__23323.call(null)))].join('');
});})(history))
);
return (fexpr__23324.cljs$core$IFn$_invoke$arity$1 ? fexpr__23324.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid) : fexpr__23324.call(null,cljs.core.random_uuid));
})();
var handler = (function (){var fexpr__23325 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path){
return (function (){
return cljs.core.cst$kw$foo;
});})(history,path))
);
return (fexpr__23325.cljs$core$IFn$_invoke$arity$0 ? fexpr__23325.cljs$core$IFn$_invoke$arity$0() : fexpr__23325.call(null));
})();
var routes = (function (){var fexpr__23328 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path,handler){
return (function (G__23327,G__23326){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23326,G__23327], null);
});})(history,path,handler))
);
return (fexpr__23328.cljs$core$IFn$_invoke$arity$2 ? fexpr__23328.cljs$core$IFn$_invoke$arity$2(handler,path) : fexpr__23328.call(null,handler,path));
})();
wheel.route.core.handler_BANG_(history,routes,handler);

try{var values__17761__auto__ = (function (){var x__9592__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(path))].join('');
return cljs.core._conj((function (){var x__9592__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e23329){var t__17806__auto__ = e23329;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_handler_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_handler_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_handler_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/route/core.cljs",20,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_handler_BANG_)?wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test:null)]));
