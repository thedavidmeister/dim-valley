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
var G__21107 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes));
return (wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21107) : wheel.route.core.routes_QMARK_.call(null,G__21107));
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
return (function (G__21115){
return G__21115;
});})(c,history))
).call(null,c);
c__14260__auto__.update = ((function (c__14260__auto__,c,history){
return (function (p1__21108_SHARP_){
return history.setToken(p1__21108_SHARP_);
});})(c__14260__auto__,c,history))
;

return c__14260__auto__;
})();
var G__21116_21121 = history;
var G__21117_21122 = goog.History.EventType.NAVIGATE;
var G__21118_21123 = ((function (G__21116_21121,G__21117_21122,_,c,history){
return (function (e){
var G__21119 = c;
var G__21120 = e.token;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21119,G__21120) : cljs.core.reset_BANG_.call(null,G__21119,G__21120));
});})(G__21116_21121,G__21117_21122,_,c,history))
;
goog.events.listen(G__21116_21121,G__21117_21122,G__21118_21123);

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
var args21124 = [];
var len__8981__auto___21127 = arguments.length;
var i__8982__auto___21128 = (0);
while(true){
if((i__8982__auto___21128 < len__8981__auto___21127)){
args21124.push((arguments[i__8982__auto___21128]));

var G__21129 = (i__8982__auto___21128 + (1));
i__8982__auto___21128 = G__21129;
continue;
} else {
}
break;
}

var G__21126 = args21124.length;
switch (G__21126) {
case 2:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21124.length)].join('')));

}
});

wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2 = (function (path,routes){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes)):routes);
var path__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(path))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path) : cljs.core.deref.call(null,path)):path);
if(cljs.core.truth_(wheel.route.core.routes_QMARK_(routes__$1))){
} else {
throw (new Error("Assert failed: (routes? routes)"));
}

return bidi.bidi.match_route(routes__$1,path__$1);
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
var args21131 = [];
var len__8981__auto___21134 = arguments.length;
var i__8982__auto___21135 = (0);
while(true){
if((i__8982__auto___21135 < len__8981__auto___21134)){
args21131.push((arguments[i__8982__auto___21135]));

var G__21136 = (i__8982__auto___21135 + (1));
i__8982__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var G__21133 = args21131.length;
switch (G__21133) {
case 2:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21131.length)].join('')));

}
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (routes,handler){
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (routes,handler,params){
var routes__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(routes))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes)):routes);
var handler__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(handler))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(handler) : cljs.core.deref.call(null,handler)):handler);
var params__$1 = (cljs.core.truth_(javelin.core.cell_QMARK_(params))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(params) : cljs.core.deref.call(null,params)):params);
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
var args21138 = [];
var len__8981__auto___21143 = arguments.length;
var i__8982__auto___21144 = (0);
while(true){
if((i__8982__auto___21144 < len__8981__auto___21143)){
args21138.push((arguments[i__8982__auto___21144]));

var G__21145 = (i__8982__auto___21144 + (1));
i__8982__auto___21144 = G__21145;
continue;
} else {
}
break;
}

var G__21140 = args21138.length;
switch (G__21140) {
case 3:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21138.length)].join('')));

}
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (history,routes,handler){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (history,routes,handler,params){
var G__21141 = history;
var G__21142 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,params))].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21141,G__21142) : cljs.core.reset_BANG_.call(null,G__21141,G__21142));
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
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(bidi__$1),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$route_DASH_params.cljs$core$IFn$_invoke$arity$1(bidi__$1),params], 0)));
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash = (function wheel$route$core$_QMARK__QMARK_history_cell__set_hash(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test = (function (){
if(typeof wheel.route.core.t_wheel$route$core21147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
wheel.route.core.t_wheel$route$core21147 = (function (meta21148){
this.meta21148 = meta21148;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
wheel.route.core.t_wheel$route$core21147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21149,meta21148__$1){
var self__ = this;
var _21149__$1 = this;
return (new wheel.route.core.t_wheel$route$core21147(meta21148__$1));
});

wheel.route.core.t_wheel$route$core21147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21149){
var self__ = this;
var _21149__$1 = this;
return self__.meta21148;
});

wheel.route.core.t_wheel$route$core21147.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

wheel.route.core.t_wheel$route$core21147.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___20478__auto__ = self____$1;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20478__auto__,self____$1){
return (function (G__21151,G__21152,G__21155,G__21153,G__21154){
if(cljs.core.truth_((function (){var G__21156 = G__21152;
var G__21157 = G__21153;
var G__21158 = (G__21154.cljs$core$IFn$_invoke$arity$0 ? G__21154.cljs$core$IFn$_invoke$arity$0() : G__21154.call(null));
return (G__21151.cljs$core$IFn$_invoke$arity$3 ? G__21151.cljs$core$IFn$_invoke$arity$3(G__21156,G__21157,G__21158) : G__21151.call(null,G__21156,G__21157,G__21158));
})())){
return (G__21155.cljs$core$IFn$_invoke$arity$0 ? G__21155.cljs$core$IFn$_invoke$arity$0() : G__21155.call(null));
} else {
return null;
}
});})(c,p,___20478__auto__,self____$1))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21147.prototype.apply = (function (self__,args21150){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21150)));
});

wheel.route.core.t_wheel$route$core21147.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___20478__auto__ = this;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20478__auto__){
return (function (G__21159,G__21160,G__21163,G__21161,G__21162){
if(cljs.core.truth_((function (){var G__21164 = G__21160;
var G__21165 = G__21161;
var G__21166 = (G__21162.cljs$core$IFn$_invoke$arity$0 ? G__21162.cljs$core$IFn$_invoke$arity$0() : G__21162.call(null));
return (G__21159.cljs$core$IFn$_invoke$arity$3 ? G__21159.cljs$core$IFn$_invoke$arity$3(G__21164,G__21165,G__21166) : G__21159.call(null,G__21164,G__21165,G__21166));
})())){
return (G__21163.cljs$core$IFn$_invoke$arity$0 ? G__21163.cljs$core$IFn$_invoke$arity$0() : G__21163.call(null));
} else {
return null;
}
});})(c,p,___20478__auto__))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta21148], null);
});

wheel.route.core.t_wheel$route$core21147.cljs$lang$type = true;

wheel.route.core.t_wheel$route$core21147.cljs$lang$ctorStr = "wheel.route.core/t_wheel$route$core21147";

wheel.route.core.t_wheel$route$core21147.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"wheel.route.core/t_wheel$route$core21147");
});

wheel.route.core.__GT_t_wheel$route$core21147 = (function wheel$route$core$__GT_t_wheel$route$core21147(meta21148){
return (new wheel.route.core.t_wheel$route$core21147(meta21148));
});

}

return (new wheel.route.core.t_wheel$route$core21147(null));
});

wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell__set_hash;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",34,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell__set_hash)?wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_history_cell = (function wheel$route$core$_QMARK__QMARK_history_cell(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test = (function (){
var c = wheel.route.core.history_cell();
try{var values__20410__auto___21170 = (function (){var x__8694__auto__ = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c)) == null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20411__auto___21171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20410__auto___21170);
if(cljs.core.truth_(result__20411__auto___21171)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20410__auto___21170),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20410__auto___21170);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21167){var t__20448__auto___21172 = e21167;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,t__20448__auto___21172,cljs.core.cst$kw$message,null], null));
}
try{var values__20410__auto___21173 = (function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20411__auto___21174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__20410__auto___21173);
if(cljs.core.truth_(result__20411__auto___21174)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.string_QMARK_,values__20410__auto___21173),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$string_QMARK_,values__20410__auto___21173);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21168){var t__20448__auto___21175 = e21168;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,t__20448__auto___21175,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(c,"bar") : cljs.core.reset_BANG_.call(null,c,"bar"));

try{var values__20410__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})(),"bar");
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e21169){var t__20448__auto__ = e21169;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",24,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell)?wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_path__GT_bidi = (function wheel$route$core$_QMARK__QMARK_path__GT_bidi(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test = (function (){
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,handler], null);
var fallback = cljs.core.cst$kw$bar;
try{var values__20410__auto___21178 = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3(path,routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___21179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___21178);
if(cljs.core.truth_(result__20411__auto___21179)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___21178),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___21178);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21176){var t__20448__auto___21180 = e21176;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20448__auto___21180,cljs.core.cst$kw$message,null], null));
}
try{var values__20410__auto__ = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e21177){var t__20448__auto__ = e21177;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_path__GT_bidi;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_path_DASH__GT_bidi,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_path_DASH__GT_bidi,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",22,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_path__GT_bidi)?wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_bidi__GT_path = (function wheel$route$core$_QMARK__QMARK_bidi__GT_path(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test = (function (){
try{var values__20410__auto___21183 = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo");
var result__20411__auto___21184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___21183);
if(cljs.core.truth_(result__20411__auto___21184)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___21183),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___21183);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21181){var t__20448__auto___21185 = e21181;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,t__20448__auto___21185,cljs.core.cst$kw$message,null], null));
}
try{var values__20410__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo/123");
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e21182){var t__20448__auto__ = e21182;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_bidi__GT_path;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_bidi_DASH__GT_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_bidi_DASH__GT_path,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",22,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_bidi__GT_path)?wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_navigate_BANG_ = (function wheel$route$core$_QMARK__QMARK_navigate_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test = (function (){
var history_21190 = wheel.route.core.history_cell();
var path_21191 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_21192 = cljs.core.cst$kw$foo;
var routes_21193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_21191,handler_21192], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3(history_21190,routes_21193,handler_21192);

try{var values__20410__auto___21194 = (function (){var x__8694__auto__ = path_21191;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___21195 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___21194);
if(cljs.core.truth_(result__20411__auto___21195)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___21194),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___21194);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21186){var t__20448__auto___21196 = e21186;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto___21196,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var param_key = cljs.core.cst$kw$bar;
var param_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler])])], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value]));

try{var values__20410__auto___21197 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___21198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___21197);
if(cljs.core.truth_(result__20411__auto___21198)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___21197),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___21197);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21187){var t__20448__auto___21199 = e21187;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto___21199,cljs.core.cst$kw$message,null], null));
}
var path_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_SINGLEQUOTE_ = cljs.core.cst$kw$baz;
var routes_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler]),path_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler_SINGLEQUOTE_])])], null);
wheel.route.core.handler_BANG_(history,routes_SINGLEQUOTE_,handler_SINGLEQUOTE_);

try{var values__20410__auto___21200 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___21201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___21200);
if(cljs.core.truth_(result__20411__auto___21201)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___21200),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___21200);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21188){var t__20448__auto___21202 = e21188;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto___21202,cljs.core.cst$kw$message,null], null));
}
var param_value_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
wheel.route.core.params_BANG_(history,routes_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value_SINGLEQUOTE_]));

try{var values__20410__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e21189){var t__20448__auto__ = e21189;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_navigate_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_navigate_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_navigate_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",21,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_navigate_BANG_)?wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_handler_BANG_ = (function wheel$route$core$_QMARK__QMARK_handler_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test = (function (){
var history = wheel.route.core.history_cell();
var path = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (G__21203){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__21203.cljs$core$IFn$_invoke$arity$0 ? G__21203.cljs$core$IFn$_invoke$arity$0() : G__21203.call(null)))].join('');
});})(history))
).call(null,cljs.core.random_uuid);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path){
return (function (){
return cljs.core.cst$kw$foo;
});})(history,path))
).call(null);
var routes = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path,handler){
return (function (G__21205,G__21204){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21204,G__21205], null);
});})(history,path,handler))
).call(null,handler,path);
wheel.route.core.handler_BANG_(history,routes,handler);

try{var values__20410__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path) : cljs.core.deref.call(null,path)))].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e21206){var t__20448__auto__ = e21206;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_handler_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_handler_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_handler_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e80/9txbbm/index.html.out/wheel/route/core.cljs",20,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_handler_BANG_)?wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test:null)]));
