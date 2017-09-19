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

var G__20586 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20586)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20333__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20334__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20334__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20335__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20335__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20336__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20336__auto__)){
return (envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2(data__20333__auto__,"details") : envelope__20336__auto__.call(null,data__20333__auto__,"details"));
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
return data__20333__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20586)){
var G__20588 = (console["error"]);
var G__20589 = msg;
var G__20590 = (function (){var data__20333__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20334__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20334__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20335__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20335__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20336__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20336__auto__)){
return (envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2(data__20333__auto__,"details") : envelope__20336__auto__.call(null,data__20333__auto__,"details"));
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
return data__20333__auto__;
}
})();
var fexpr__20587 = oops.state.get_console_reporter();
return (fexpr__20587.cljs$core$IFn$_invoke$arity$3 ? fexpr__20587.cljs$core$IFn$_invoke$arity$3(G__20588,G__20589,G__20590) : fexpr__20587.call(null,G__20588,G__20589,G__20590));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20586)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20586)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20591 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20591)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20333__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20334__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20334__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20335__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20335__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20336__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20336__auto__)){
return (envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2(data__20333__auto__,"details") : envelope__20336__auto__.call(null,data__20333__auto__,"details"));
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
return data__20333__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20591)){
var G__20593 = (console["warn"]);
var G__20594 = msg;
var G__20595 = (function (){var data__20333__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20334__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20334__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20335__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20335__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20336__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20336__auto__)){
return (envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20336__auto__.cljs$core$IFn$_invoke$arity$2(data__20333__auto__,"details") : envelope__20336__auto__.call(null,data__20333__auto__,"details"));
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
return data__20333__auto__;
}
})();
var fexpr__20592 = oops.state.get_console_reporter();
return (fexpr__20592.cljs$core$IFn$_invoke$arity$3 ? fexpr__20592.cljs$core$IFn$_invoke$arity$3(G__20593,G__20594,G__20595) : fexpr__20592.call(null,G__20593,G__20594,G__20595));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20591)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20591)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20602 = arguments.length;
var i__9520__auto___20603 = (0);
while(true){
if((i__9520__auto___20603 < len__9519__auto___20602)){
args__9526__auto__.push((arguments[i__9520__auto___20603]));

var G__20604 = (i__9520__auto___20603 + (1));
i__9520__auto___20603 = G__20604;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20598){
var vec__20599 = p__20598;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20596){
var G__20597 = cljs.core.first(seq20596);
var seq20596__$1 = cljs.core.next(seq20596);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20597,seq20596__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20606 = oops.config.get_child_factory();
var child_factory_20606__$1 = (function (){var G__20607 = child_factory_20606;
var G__20607__$1 = (((G__20607 instanceof cljs.core.Keyword))?G__20607.fqn:null);
switch (G__20607__$1) {
case "js-obj":
return ((function (G__20607,G__20607__$1,child_factory_20606){
return (function (){
return {};
});
;})(G__20607,G__20607__$1,child_factory_20606))

break;
case "js-array":
return ((function (G__20607,G__20607__$1,child_factory_20606){
return (function (){
return [];
});
;})(G__20607,G__20607__$1,child_factory_20606))

break;
default:
return child_factory_20606;

}
})();

var child_obj_20605 = (child_factory_20606__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20606__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20606__$1.call(null,obj,key));
(obj[key] = child_obj_20605);

return child_obj_20605;
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
var selector_path_20611 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20611);

return selector_path_20611;
} else {
var selector_path_20612 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20612);

return selector_path_20612;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20613 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20613);
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
var path_20615 = (function (){var path_20614 = oops.core.build_path_dynamically(selector);

return path_20614;
})();
var len_20616 = path_20615.length;
var i_20617 = (0);
var obj_20618 = obj;
while(true){
if((i_20617 < len_20616)){
var mode_20619 = (path_20615[i_20617]);
var key_20620 = (path_20615[(i_20617 + (1))]);
var next_obj_20621 = oops.core.get_key_dynamically(obj_20618,key_20620,mode_20619);
var G__20622 = mode_20619;
switch (G__20622) {
case (0):
var G__20624 = (i_20617 + (2));
var G__20625 = next_obj_20621;
i_20617 = G__20624;
obj_20618 = G__20625;
continue;

break;
case (1):
if(!((next_obj_20621 == null))){
var G__20626 = (i_20617 + (2));
var G__20627 = next_obj_20621;
i_20617 = G__20626;
obj_20618 = G__20627;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20621 == null))){
var G__20628 = (i_20617 + (2));
var G__20629 = next_obj_20621;
i_20617 = G__20628;
obj_20618 = G__20629;
continue;
} else {
var G__20630 = (i_20617 + (2));
var G__20631 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20618,key_20620) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20618,key_20620));
i_20617 = G__20630;
obj_20618 = G__20631;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20622)].join('')));

}
} else {
return obj_20618;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20633 = (function (){var path_20632 = oops.core.build_path_dynamically(selector);

return path_20632;
})();
var len_20634 = path_20633.length;
if((len_20634 < (4))){
return [obj,(function (){var path_20636 = path_20633;
var len_20637 = path_20636.length;
var i_20638 = (0);
var obj_20639 = obj;
while(true){
if((i_20638 < len_20637)){
var mode_20640 = (path_20636[i_20638]);
var key_20641 = (path_20636[(i_20638 + (1))]);
var next_obj_20642 = oops.core.get_key_dynamically(obj_20639,key_20641,mode_20640);
var G__20657 = mode_20640;
switch (G__20657) {
case (0):
var G__20661 = (i_20638 + (2));
var G__20662 = next_obj_20642;
i_20638 = G__20661;
obj_20639 = G__20662;
continue;

break;
case (1):
if(!((next_obj_20642 == null))){
var G__20663 = (i_20638 + (2));
var G__20664 = next_obj_20642;
i_20638 = G__20663;
obj_20639 = G__20664;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20642 == null))){
var G__20665 = (i_20638 + (2));
var G__20666 = next_obj_20642;
i_20638 = G__20665;
obj_20639 = G__20666;
continue;
} else {
var G__20667 = (i_20638 + (2));
var G__20668 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20639,key_20641) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20639,key_20641));
i_20638 = G__20667;
obj_20639 = G__20668;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20657)].join('')));

}
} else {
return obj_20639;
}
break;
}
})()];
} else {
var target_obj_20635 = (function (){var path_20643 = path_20633.slice((0),(len_20634 - (2)));
var len_20644 = path_20643.length;
var i_20645 = (0);
var obj_20646 = obj;
while(true){
if((i_20645 < len_20644)){
var mode_20647 = (path_20643[i_20645]);
var key_20648 = (path_20643[(i_20645 + (1))]);
var next_obj_20649 = oops.core.get_key_dynamically(obj_20646,key_20648,mode_20647);
var G__20658 = mode_20647;
switch (G__20658) {
case (0):
var G__20670 = (i_20645 + (2));
var G__20671 = next_obj_20649;
i_20645 = G__20670;
obj_20646 = G__20671;
continue;

break;
case (1):
if(!((next_obj_20649 == null))){
var G__20672 = (i_20645 + (2));
var G__20673 = next_obj_20649;
i_20645 = G__20672;
obj_20646 = G__20673;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20649 == null))){
var G__20674 = (i_20645 + (2));
var G__20675 = next_obj_20649;
i_20645 = G__20674;
obj_20646 = G__20675;
continue;
} else {
var G__20676 = (i_20645 + (2));
var G__20677 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20646,key_20648) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20646,key_20648));
i_20645 = G__20676;
obj_20646 = G__20677;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20658)].join('')));

}
} else {
return obj_20646;
}
break;
}
})();
return [target_obj_20635,(function (){var path_20650 = [(path_20633[(len_20634 - (2))]),(path_20633[(len_20634 - (1))])];
var len_20651 = path_20650.length;
var i_20652 = (0);
var obj_20653 = target_obj_20635;
while(true){
if((i_20652 < len_20651)){
var mode_20654 = (path_20650[i_20652]);
var key_20655 = (path_20650[(i_20652 + (1))]);
var next_obj_20656 = oops.core.get_key_dynamically(obj_20653,key_20655,mode_20654);
var G__20659 = mode_20654;
switch (G__20659) {
case (0):
var G__20679 = (i_20652 + (2));
var G__20680 = next_obj_20656;
i_20652 = G__20679;
obj_20653 = G__20680;
continue;

break;
case (1):
if(!((next_obj_20656 == null))){
var G__20681 = (i_20652 + (2));
var G__20682 = next_obj_20656;
i_20652 = G__20681;
obj_20653 = G__20682;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20656 == null))){
var G__20683 = (i_20652 + (2));
var G__20684 = next_obj_20656;
i_20652 = G__20683;
obj_20653 = G__20684;
continue;
} else {
var G__20685 = (i_20652 + (2));
var G__20686 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20653,key_20655) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20653,key_20655));
i_20652 = G__20685;
obj_20653 = G__20686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20659)].join('')));

}
} else {
return obj_20653;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20688 = (function (){var path_20687 = oops.core.build_path_dynamically(selector);

return path_20687;
})();
var len_20691 = path_20688.length;
var parent_obj_path_20692 = path_20688.slice((0),(len_20691 - (2)));
var key_20689 = (path_20688[(len_20691 - (1))]);
var mode_20690 = (path_20688[(len_20691 - (2))]);
var parent_obj_20693 = (function (){var path_20694 = parent_obj_path_20692;
var len_20695 = path_20694.length;
var i_20696 = (0);
var obj_20697 = obj;
while(true){
if((i_20696 < len_20695)){
var mode_20698 = (path_20694[i_20696]);
var key_20699 = (path_20694[(i_20696 + (1))]);
var next_obj_20700 = oops.core.get_key_dynamically(obj_20697,key_20699,mode_20698);
var G__20701 = mode_20698;
switch (G__20701) {
case (0):
var G__20703 = (i_20696 + (2));
var G__20704 = next_obj_20700;
i_20696 = G__20703;
obj_20697 = G__20704;
continue;

break;
case (1):
if(!((next_obj_20700 == null))){
var G__20705 = (i_20696 + (2));
var G__20706 = next_obj_20700;
i_20696 = G__20705;
obj_20697 = G__20706;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20700 == null))){
var G__20707 = (i_20696 + (2));
var G__20708 = next_obj_20700;
i_20696 = G__20707;
obj_20697 = G__20708;
continue;
} else {
var G__20709 = (i_20696 + (2));
var G__20710 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20697,key_20699) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20697,key_20699));
i_20696 = G__20709;
obj_20697 = G__20710;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20701)].join('')));

}
} else {
return obj_20697;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20693,key_20689,val,mode_20690);
});
