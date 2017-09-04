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
var G__21397 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(routes) : cljs.core.deref.call(null,routes));
return (wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1 ? wheel.route.core.routes_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21397) : wheel.route.core.routes_QMARK_.call(null,G__21397));
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
return (function (G__21405){
return G__21405;
});})(c,history))
).call(null,c);
c__14260__auto__.update = ((function (c__14260__auto__,c,history){
return (function (p1__21398_SHARP_){
return history.setToken(p1__21398_SHARP_);
});})(c__14260__auto__,c,history))
;

return c__14260__auto__;
})();
var G__21406_21411 = history;
var G__21407_21412 = goog.History.EventType.NAVIGATE;
var G__21408_21413 = ((function (G__21406_21411,G__21407_21412,_,c,history){
return (function (e){
var G__21409 = c;
var G__21410 = e.token;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21409,G__21410) : cljs.core.reset_BANG_.call(null,G__21409,G__21410));
});})(G__21406_21411,G__21407_21412,_,c,history))
;
goog.events.listen(G__21406_21411,G__21407_21412,G__21408_21413);

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
var args21414 = [];
var len__8981__auto___21417 = arguments.length;
var i__8982__auto___21418 = (0);
while(true){
if((i__8982__auto___21418 < len__8981__auto___21417)){
args21414.push((arguments[i__8982__auto___21418]));

var G__21419 = (i__8982__auto___21418 + (1));
i__8982__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var G__21416 = args21414.length;
switch (G__21416) {
case 2:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21414.length)].join('')));

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
var args21421 = [];
var len__8981__auto___21424 = arguments.length;
var i__8982__auto___21425 = (0);
while(true){
if((i__8982__auto___21425 < len__8981__auto___21424)){
args21421.push((arguments[i__8982__auto___21425]));

var G__21426 = (i__8982__auto___21425 + (1));
i__8982__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var G__21423 = args21421.length;
switch (G__21423) {
case 2:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21421.length)].join('')));

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
var args21428 = [];
var len__8981__auto___21433 = arguments.length;
var i__8982__auto___21434 = (0);
while(true){
if((i__8982__auto___21434 < len__8981__auto___21433)){
args21428.push((arguments[i__8982__auto___21434]));

var G__21435 = (i__8982__auto___21434 + (1));
i__8982__auto___21434 = G__21435;
continue;
} else {
}
break;
}

var G__21430 = args21428.length;
switch (G__21430) {
case 3:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21428.length)].join('')));

}
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (history,routes,handler){
return wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.EMPTY);
});

wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (history,routes,handler,params){
var G__21431 = history;
var G__21432 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(routes,handler,params))].join('');
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21431,G__21432) : cljs.core.reset_BANG_.call(null,G__21431,G__21432));
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
if(typeof wheel.route.core.t_wheel$route$core21437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
wheel.route.core.t_wheel$route$core21437 = (function (meta21438){
this.meta21438 = meta21438;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
wheel.route.core.t_wheel$route$core21437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21439,meta21438__$1){
var self__ = this;
var _21439__$1 = this;
return (new wheel.route.core.t_wheel$route$core21437(meta21438__$1));
});

wheel.route.core.t_wheel$route$core21437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21439){
var self__ = this;
var _21439__$1 = this;
return self__.meta21438;
});

wheel.route.core.t_wheel$route$core21437.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

wheel.route.core.t_wheel$route$core21437.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___20768__auto__ = self____$1;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20768__auto__,self____$1){
return (function (G__21441,G__21442,G__21445,G__21443,G__21444){
if(cljs.core.truth_((function (){var G__21446 = G__21442;
var G__21447 = G__21443;
var G__21448 = (G__21444.cljs$core$IFn$_invoke$arity$0 ? G__21444.cljs$core$IFn$_invoke$arity$0() : G__21444.call(null));
return (G__21441.cljs$core$IFn$_invoke$arity$3 ? G__21441.cljs$core$IFn$_invoke$arity$3(G__21446,G__21447,G__21448) : G__21441.call(null,G__21446,G__21447,G__21448));
})())){
return (G__21445.cljs$core$IFn$_invoke$arity$0 ? G__21445.cljs$core$IFn$_invoke$arity$0() : G__21445.call(null));
} else {
return null;
}
});})(c,p,___20768__auto__,self____$1))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21437.prototype.apply = (function (self__,args21440){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args21440)));
});

wheel.route.core.t_wheel$route$core21437.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___20768__auto__ = this;
var c = wheel.route.core.history_cell();
var p = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
window.location.hash = p;

return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,p,___20768__auto__){
return (function (G__21449,G__21450,G__21453,G__21451,G__21452){
if(cljs.core.truth_((function (){var G__21454 = G__21450;
var G__21455 = G__21451;
var G__21456 = (G__21452.cljs$core$IFn$_invoke$arity$0 ? G__21452.cljs$core$IFn$_invoke$arity$0() : G__21452.call(null));
return (G__21449.cljs$core$IFn$_invoke$arity$3 ? G__21449.cljs$core$IFn$_invoke$arity$3(G__21454,G__21455,G__21456) : G__21449.call(null,G__21454,G__21455,G__21456));
})())){
return (G__21453.cljs$core$IFn$_invoke$arity$0 ? G__21453.cljs$core$IFn$_invoke$arity$0() : G__21453.call(null));
} else {
return null;
}
});})(c,p,___20768__auto__))
).call(null,cljs.core._EQ_,p,done,c,wheel.route.core.current_hash);
});

wheel.route.core.t_wheel$route$core21437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta21438], null);
});

wheel.route.core.t_wheel$route$core21437.cljs$lang$type = true;

wheel.route.core.t_wheel$route$core21437.cljs$lang$ctorStr = "wheel.route.core/t_wheel$route$core21437";

wheel.route.core.t_wheel$route$core21437.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"wheel.route.core/t_wheel$route$core21437");
});

wheel.route.core.__GT_t_wheel$route$core21437 = (function wheel$route$core$__GT_t_wheel$route$core21437(meta21438){
return (new wheel.route.core.t_wheel$route$core21437(meta21438));
});

}

return (new wheel.route.core.t_wheel$route$core21437(null));
});

wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell__set_hash;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell_DASH__DASH_set_DASH_hash,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",34,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell__set_hash)?wheel.route.core._QMARK__QMARK_history_cell__set_hash.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_history_cell = (function wheel$route$core$_QMARK__QMARK_history_cell(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test = (function (){
var c = wheel.route.core.history_cell();
try{var values__20700__auto___21460 = (function (){var x__8694__auto__ = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c)) == null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20701__auto___21461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__20700__auto___21460);
if(cljs.core.truth_(result__20701__auto___21461)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__20700__auto___21460),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__20700__auto___21460);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21457){var t__20738__auto___21462 = e21457;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c))),cljs.core.cst$kw$actual,t__20738__auto___21462,cljs.core.cst$kw$message,null], null));
}
try{var values__20700__auto___21463 = (function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20701__auto___21464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,values__20700__auto___21463);
if(cljs.core.truth_(result__20701__auto___21464)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.string_QMARK_,values__20700__auto___21463),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$string_QMARK_,values__20700__auto___21463);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21458){var t__20738__auto___21465 = e21458;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c)),cljs.core.cst$kw$actual,t__20738__auto___21465,cljs.core.cst$kw$message,null], null));
}
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(c,"bar") : cljs.core.reset_BANG_.call(null,c,"bar"));

try{var values__20700__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})(),"bar");
var result__20701__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto__);
if(cljs.core.truth_(result__20701__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20701__auto__;
}catch (e21459){var t__20738__auto__ = e21459;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"bar",cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_history_cell;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_history_DASH_cell,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_history_DASH_cell,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",24,1,89,89,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_history_cell)?wheel.route.core._QMARK__QMARK_history_cell.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_path__GT_bidi = (function wheel$route$core$_QMARK__QMARK_path__GT_bidi(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test = (function (){
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,handler], null);
var fallback = cljs.core.cst$kw$bar;
try{var values__20700__auto___21468 = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,handler], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3(path,routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto___21469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto___21468);
if(cljs.core.truth_(result__20701__auto___21469)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto___21468),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto___21468);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21466){var t__20738__auto___21470 = e21466;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$handler], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.cst$sym$path,cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20738__auto___21470,cljs.core.cst$kw$message,null], null));
}
try{var values__20700__auto__ = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,fallback], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.path__GT_bidi.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join(''),routes,fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto__);
if(cljs.core.truth_(result__20701__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20701__auto__;
}catch (e21467){var t__20738__auto__ = e21467;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,cljs.core.cst$sym$fallback], null),cljs.core.list(cljs.core.cst$sym$path_DASH__GT_bidi,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$random_DASH_uuid)),cljs.core.cst$sym$routes,cljs.core.cst$sym$fallback)),cljs.core.cst$kw$actual,t__20738__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_path__GT_bidi;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_path_DASH__GT_bidi,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_path_DASH__GT_bidi,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",22,1,99,99,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_path__GT_bidi)?wheel.route.core._QMARK__QMARK_path__GT_bidi.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_bidi__GT_path = (function wheel$route$core$_QMARK__QMARK_bidi__GT_path(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test = (function (){
try{var values__20700__auto___21473 = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo");
var result__20701__auto___21474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto___21473);
if(cljs.core.truth_(result__20701__auto___21474)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto___21473),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto___21473);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21471){var t__20738__auto___21475 = e21471;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo",cljs.core.cst$kw$foo], null),cljs.core.cst$kw$foo,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.cst$kw$actual,t__20738__auto___21475,cljs.core.cst$kw$message,null], null));
}
try{var values__20700__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.route.core.bidi__GT_path.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"/foo/123");
var result__20701__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto__);
if(cljs.core.truth_(result__20701__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20701__auto__;
}catch (e21472){var t__20738__auto__ = e21472;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"/foo/123",cljs.core.list(cljs.core.cst$sym$bidi_DASH__GT_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/foo/",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.cst$kw$bar], null),cljs.core.cst$kw$foo], null)], null)], null),cljs.core.cst$kw$foo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bar,(123)], null))),cljs.core.cst$kw$actual,t__20738__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_bidi__GT_path;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_bidi_DASH__GT_path,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_bidi_DASH__GT_path,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",22,1,110,110,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_bidi__GT_path)?wheel.route.core._QMARK__QMARK_bidi__GT_path.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_navigate_BANG_ = (function wheel$route$core$_QMARK__QMARK_navigate_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test = (function (){
var history_21480 = wheel.route.core.history_cell();
var path_21481 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_21482 = cljs.core.cst$kw$foo;
var routes_21483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_21481,handler_21482], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$3(history_21480,routes_21483,handler_21482);

try{var values__20700__auto___21484 = (function (){var x__8694__auto__ = path_21481;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto___21485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto___21484);
if(cljs.core.truth_(result__20701__auto___21485)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto___21484),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto___21484);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21476){var t__20738__auto___21486 = e21476;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$path,cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto___21486,cljs.core.cst$kw$message,null], null));
}
var history = wheel.route.core.history_cell();
var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var param_key = cljs.core.cst$kw$bar;
var param_value = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler = cljs.core.cst$kw$foo;
var routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler])])], null);
wheel.route.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$4(history,routes,handler,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value]));

try{var values__20700__auto___21487 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto___21488 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto___21487);
if(cljs.core.truth_(result__20701__auto___21488)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto___21487),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto___21487);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21477){var t__20738__auto___21489 = e21477;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto___21489,cljs.core.cst$kw$message,null], null));
}
var path_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
var handler_SINGLEQUOTE_ = cljs.core.cst$kw$baz;
var routes_SINGLEQUOTE_ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentArrayMap.createAsIfByAssoc([path,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler]),path_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",param_key], null),handler_SINGLEQUOTE_])])], null);
wheel.route.core.handler_BANG_(history,routes_SINGLEQUOTE_,handler_SINGLEQUOTE_);

try{var values__20700__auto___21490 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto___21491 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto___21490);
if(cljs.core.truth_(result__20701__auto___21491)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto___21490),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto___21490);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21478){var t__20738__auto___21492 = e21478;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto___21492,cljs.core.cst$kw$message,null], null));
}
var param_value_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
wheel.route.core.params_BANG_(history,routes_SINGLEQUOTE_,cljs.core.PersistentArrayMap.createAsIfByAssoc([param_key,param_value_SINGLEQUOTE_]));

try{var values__20700__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_value_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto__);
if(cljs.core.truth_(result__20701__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20701__auto__;
}catch (e21479){var t__20738__auto__ = e21479;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$path_SINGLEQUOTE_,"/",cljs.core.cst$sym$param_DASH_value_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_navigate_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_navigate_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_navigate_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",21,1,116,116,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_navigate_BANG_)?wheel.route.core._QMARK__QMARK_navigate_BANG_.cljs$lang$test:null)]));
wheel.route.core._QMARK__QMARK_handler_BANG_ = (function wheel$route$core$_QMARK__QMARK_handler_BANG_(){
return cljs.test.test_var(wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var);
});
wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test = (function (){
var history = wheel.route.core.history_cell();
var path = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history){
return (function (G__21493){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__21493.cljs$core$IFn$_invoke$arity$0 ? G__21493.cljs$core$IFn$_invoke$arity$0() : G__21493.call(null)))].join('');
});})(history))
).call(null,cljs.core.random_uuid);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path){
return (function (){
return cljs.core.cst$kw$foo;
});})(history,path))
).call(null);
var routes = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (history,path,handler){
return (function (G__21495,G__21494){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21494,G__21495], null);
});})(history,path,handler))
).call(null,handler,path);
wheel.route.core.handler_BANG_(history,routes,handler);

try{var values__20700__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path) : cljs.core.deref.call(null,path)))].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.route.core.current_hash();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20701__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20700__auto__);
if(cljs.core.truth_(result__20701__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20700__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20700__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20701__auto__;
}catch (e21496){var t__20738__auto__ = e21496;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$path)),cljs.core.list(cljs.core.cst$sym$current_DASH_hash)),cljs.core.cst$kw$actual,t__20738__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$var = new cljs.core.Var(function(){return wheel.route.core._QMARK__QMARK_handler_BANG_;},cljs.core.cst$sym$wheel$route$core_SLASH__QMARK__QMARK_handler_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$route$core,cljs.core.cst$sym$_QMARK__QMARK_handler_BANG_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6g/9txbbm/index.html.out/wheel/route/core.cljs",20,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.route.core._QMARK__QMARK_handler_BANG_)?wheel.route.core._QMARK__QMARK_handler_BANG_.cljs$lang$test:null)]));
