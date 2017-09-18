// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__20556 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20556)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20303__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20304__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20304__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20305__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20305__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20306__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20306__auto__)){
return (envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2(data__20303__auto__,"details") : envelope__20306__auto__.call(null,data__20303__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return data__20303__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20556)){
var G__20558 = (console["error"]);
var G__20559 = msg;
var G__20560 = (function (){var data__20303__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20304__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20304__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20305__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20305__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20306__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20306__auto__)){
return (envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2(data__20303__auto__,"details") : envelope__20306__auto__.call(null,data__20303__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return data__20303__auto__;
}
})();
var fexpr__20557 = oops.state.get_console_reporter();
return (fexpr__20557.cljs$core$IFn$_invoke$arity$3 ? fexpr__20557.cljs$core$IFn$_invoke$arity$3(G__20558,G__20559,G__20560) : fexpr__20557.call(null,G__20558,G__20559,G__20560));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20556)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20556)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20561 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20561)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20303__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20304__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20304__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20305__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20305__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20306__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20306__auto__)){
return (envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2(data__20303__auto__,"details") : envelope__20306__auto__.call(null,data__20303__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return data__20303__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20561)){
var G__20563 = (console["warn"]);
var G__20564 = msg;
var G__20565 = (function (){var data__20303__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20304__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20304__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20305__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20305__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20306__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20306__auto__)){
return (envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20306__auto__.cljs$core$IFn$_invoke$arity$2(data__20303__auto__,"details") : envelope__20306__auto__.call(null,data__20303__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return data__20303__auto__;
}
})();
var fexpr__20562 = oops.state.get_console_reporter();
return (fexpr__20562.cljs$core$IFn$_invoke$arity$3 ? fexpr__20562.cljs$core$IFn$_invoke$arity$3(G__20563,G__20564,G__20565) : fexpr__20562.call(null,G__20563,G__20564,G__20565));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20561)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20561)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20572 = arguments.length;
var i__9520__auto___20573 = (0);
while(true){
if((i__9520__auto___20573 < len__9519__auto___20572)){
args__9526__auto__.push((arguments[i__9520__auto___20573]));

var G__20574 = (i__9520__auto___20573 + (1));
i__9520__auto___20573 = G__20574;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20568){
var vec__20569 = p__20568;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20566){
var G__20567 = cljs.core.first(seq20566);
var seq20566__$1 = cljs.core.next(seq20566);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20567,seq20566__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20576 = oops.config.get_child_factory();
var child_factory_20576__$1 = (function (){var G__20577 = child_factory_20576;
var G__20577__$1 = (((G__20577 instanceof cljs.core.Keyword))?G__20577.fqn:null);
switch (G__20577__$1) {
case "js-obj":
return ((function (G__20577,G__20577__$1,child_factory_20576){
return (function (){
return {};
});
;})(G__20577,G__20577__$1,child_factory_20576))

break;
case "js-array":
return ((function (G__20577,G__20577__$1,child_factory_20576){
return (function (){
return [];
});
;})(G__20577,G__20577__$1,child_factory_20576))

break;
default:
return child_factory_20576;

}
})();

var child_obj_20575 = (child_factory_20576__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20576__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20576__$1.call(null,obj,key));
(obj[key] = child_obj_20575);

return child_obj_20575;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_20581 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20581);

return selector_path_20581;
} else {
var selector_path_20582 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20582);

return selector_path_20582;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20583 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20583);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_20585 = (function (){var path_20584 = oops.core.build_path_dynamically(selector);

return path_20584;
})();
var len_20586 = path_20585.length;
var i_20587 = (0);
var obj_20588 = obj;
while(true){
if((i_20587 < len_20586)){
var mode_20589 = (path_20585[i_20587]);
var key_20590 = (path_20585[(i_20587 + (1))]);
var next_obj_20591 = oops.core.get_key_dynamically(obj_20588,key_20590,mode_20589);
var G__20592 = mode_20589;
switch (G__20592) {
case (0):
var G__20594 = (i_20587 + (2));
var G__20595 = next_obj_20591;
i_20587 = G__20594;
obj_20588 = G__20595;
continue;

break;
case (1):
if(!((next_obj_20591 == null))){
var G__20596 = (i_20587 + (2));
var G__20597 = next_obj_20591;
i_20587 = G__20596;
obj_20588 = G__20597;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20591 == null))){
var G__20598 = (i_20587 + (2));
var G__20599 = next_obj_20591;
i_20587 = G__20598;
obj_20588 = G__20599;
continue;
} else {
var G__20600 = (i_20587 + (2));
var G__20601 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20588,key_20590) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20588,key_20590));
i_20587 = G__20600;
obj_20588 = G__20601;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20592)].join('')));

}
} else {
return obj_20588;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20603 = (function (){var path_20602 = oops.core.build_path_dynamically(selector);

return path_20602;
})();
var len_20604 = path_20603.length;
if((len_20604 < (4))){
return [obj,(function (){var path_20606 = path_20603;
var len_20607 = path_20606.length;
var i_20608 = (0);
var obj_20609 = obj;
while(true){
if((i_20608 < len_20607)){
var mode_20610 = (path_20606[i_20608]);
var key_20611 = (path_20606[(i_20608 + (1))]);
var next_obj_20612 = oops.core.get_key_dynamically(obj_20609,key_20611,mode_20610);
var G__20627 = mode_20610;
switch (G__20627) {
case (0):
var G__20631 = (i_20608 + (2));
var G__20632 = next_obj_20612;
i_20608 = G__20631;
obj_20609 = G__20632;
continue;

break;
case (1):
if(!((next_obj_20612 == null))){
var G__20633 = (i_20608 + (2));
var G__20634 = next_obj_20612;
i_20608 = G__20633;
obj_20609 = G__20634;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20612 == null))){
var G__20635 = (i_20608 + (2));
var G__20636 = next_obj_20612;
i_20608 = G__20635;
obj_20609 = G__20636;
continue;
} else {
var G__20637 = (i_20608 + (2));
var G__20638 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20609,key_20611) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20609,key_20611));
i_20608 = G__20637;
obj_20609 = G__20638;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20627)].join('')));

}
} else {
return obj_20609;
}
break;
}
})()];
} else {
var target_obj_20605 = (function (){var path_20613 = path_20603.slice((0),(len_20604 - (2)));
var len_20614 = path_20613.length;
var i_20615 = (0);
var obj_20616 = obj;
while(true){
if((i_20615 < len_20614)){
var mode_20617 = (path_20613[i_20615]);
var key_20618 = (path_20613[(i_20615 + (1))]);
var next_obj_20619 = oops.core.get_key_dynamically(obj_20616,key_20618,mode_20617);
var G__20628 = mode_20617;
switch (G__20628) {
case (0):
var G__20640 = (i_20615 + (2));
var G__20641 = next_obj_20619;
i_20615 = G__20640;
obj_20616 = G__20641;
continue;

break;
case (1):
if(!((next_obj_20619 == null))){
var G__20642 = (i_20615 + (2));
var G__20643 = next_obj_20619;
i_20615 = G__20642;
obj_20616 = G__20643;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20619 == null))){
var G__20644 = (i_20615 + (2));
var G__20645 = next_obj_20619;
i_20615 = G__20644;
obj_20616 = G__20645;
continue;
} else {
var G__20646 = (i_20615 + (2));
var G__20647 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20616,key_20618) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20616,key_20618));
i_20615 = G__20646;
obj_20616 = G__20647;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20628)].join('')));

}
} else {
return obj_20616;
}
break;
}
})();
return [target_obj_20605,(function (){var path_20620 = [(path_20603[(len_20604 - (2))]),(path_20603[(len_20604 - (1))])];
var len_20621 = path_20620.length;
var i_20622 = (0);
var obj_20623 = target_obj_20605;
while(true){
if((i_20622 < len_20621)){
var mode_20624 = (path_20620[i_20622]);
var key_20625 = (path_20620[(i_20622 + (1))]);
var next_obj_20626 = oops.core.get_key_dynamically(obj_20623,key_20625,mode_20624);
var G__20629 = mode_20624;
switch (G__20629) {
case (0):
var G__20649 = (i_20622 + (2));
var G__20650 = next_obj_20626;
i_20622 = G__20649;
obj_20623 = G__20650;
continue;

break;
case (1):
if(!((next_obj_20626 == null))){
var G__20651 = (i_20622 + (2));
var G__20652 = next_obj_20626;
i_20622 = G__20651;
obj_20623 = G__20652;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20626 == null))){
var G__20653 = (i_20622 + (2));
var G__20654 = next_obj_20626;
i_20622 = G__20653;
obj_20623 = G__20654;
continue;
} else {
var G__20655 = (i_20622 + (2));
var G__20656 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20623,key_20625) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20623,key_20625));
i_20622 = G__20655;
obj_20623 = G__20656;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20629)].join('')));

}
} else {
return obj_20623;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20658 = (function (){var path_20657 = oops.core.build_path_dynamically(selector);

return path_20657;
})();
var len_20661 = path_20658.length;
var parent_obj_path_20662 = path_20658.slice((0),(len_20661 - (2)));
var key_20659 = (path_20658[(len_20661 - (1))]);
var mode_20660 = (path_20658[(len_20661 - (2))]);
var parent_obj_20663 = (function (){var path_20664 = parent_obj_path_20662;
var len_20665 = path_20664.length;
var i_20666 = (0);
var obj_20667 = obj;
while(true){
if((i_20666 < len_20665)){
var mode_20668 = (path_20664[i_20666]);
var key_20669 = (path_20664[(i_20666 + (1))]);
var next_obj_20670 = oops.core.get_key_dynamically(obj_20667,key_20669,mode_20668);
var G__20671 = mode_20668;
switch (G__20671) {
case (0):
var G__20673 = (i_20666 + (2));
var G__20674 = next_obj_20670;
i_20666 = G__20673;
obj_20667 = G__20674;
continue;

break;
case (1):
if(!((next_obj_20670 == null))){
var G__20675 = (i_20666 + (2));
var G__20676 = next_obj_20670;
i_20666 = G__20675;
obj_20667 = G__20676;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20670 == null))){
var G__20677 = (i_20666 + (2));
var G__20678 = next_obj_20670;
i_20666 = G__20677;
obj_20667 = G__20678;
continue;
} else {
var G__20679 = (i_20666 + (2));
var G__20680 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20667,key_20669) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20667,key_20669));
i_20666 = G__20679;
obj_20667 = G__20680;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20671)].join('')));

}
} else {
return obj_20667;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20663,key_20659,val,mode_20660);
});
