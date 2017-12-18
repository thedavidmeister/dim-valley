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

var G__20562 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20562)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20309__auto__ = data;
var or__8240__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20310__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20310__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20311__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20311__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20312__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20312__auto__)){
return (envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2(data__20309__auto__,"details") : envelope__20312__auto__.call(null,data__20309__auto__,"details"));
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
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return data__20309__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20562)){
var G__20564 = (console["error"]);
var G__20565 = msg;
var G__20566 = (function (){var data__20309__auto__ = data;
var or__8240__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20310__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20310__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20311__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20311__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20312__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20312__auto__)){
return (envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2(data__20309__auto__,"details") : envelope__20312__auto__.call(null,data__20309__auto__,"details"));
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
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return data__20309__auto__;
}
})();
var fexpr__20563 = oops.state.get_console_reporter();
return (fexpr__20563.cljs$core$IFn$_invoke$arity$3 ? fexpr__20563.cljs$core$IFn$_invoke$arity$3(G__20564,G__20565,G__20566) : fexpr__20563.call(null,G__20564,G__20565,G__20566));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20562)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20562)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20567 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20567)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20309__auto__ = data;
var or__8240__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20310__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20310__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20311__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20311__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20312__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20312__auto__)){
return (envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2(data__20309__auto__,"details") : envelope__20312__auto__.call(null,data__20309__auto__,"details"));
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
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return data__20309__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20567)){
var G__20569 = (console["warn"]);
var G__20570 = msg;
var G__20571 = (function (){var data__20309__auto__ = data;
var or__8240__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20310__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20310__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20311__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20311__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20312__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20312__auto__)){
return (envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20312__auto__.cljs$core$IFn$_invoke$arity$2(data__20309__auto__,"details") : envelope__20312__auto__.call(null,data__20309__auto__,"details"));
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
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return data__20309__auto__;
}
})();
var fexpr__20568 = oops.state.get_console_reporter();
return (fexpr__20568.cljs$core$IFn$_invoke$arity$3 ? fexpr__20568.cljs$core$IFn$_invoke$arity$3(G__20569,G__20570,G__20571) : fexpr__20568.call(null,G__20569,G__20570,G__20571));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20567)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20567)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9524__auto__ = [];
var len__9517__auto___20578 = arguments.length;
var i__9518__auto___20579 = (0);
while(true){
if((i__9518__auto___20579 < len__9517__auto___20578)){
args__9524__auto__.push((arguments[i__9518__auto___20579]));

var G__20580 = (i__9518__auto___20579 + (1));
i__9518__auto___20579 = G__20580;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20574){
var vec__20575 = p__20574;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20572){
var G__20573 = cljs.core.first(seq20572);
var seq20572__$1 = cljs.core.next(seq20572);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20573,seq20572__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20582 = oops.config.get_child_factory();
var child_factory_20582__$1 = (function (){var G__20583 = child_factory_20582;
var G__20583__$1 = (((G__20583 instanceof cljs.core.Keyword))?G__20583.fqn:null);
switch (G__20583__$1) {
case "js-obj":
return ((function (G__20583,G__20583__$1,child_factory_20582){
return (function (){
return {};
});
;})(G__20583,G__20583__$1,child_factory_20582))

break;
case "js-array":
return ((function (G__20583,G__20583__$1,child_factory_20582){
return (function (){
return [];
});
;})(G__20583,G__20583__$1,child_factory_20582))

break;
default:
return child_factory_20582;

}
})();

var child_obj_20581 = (child_factory_20582__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20582__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20582__$1.call(null,obj,key));
(obj[key] = child_obj_20581);

return child_obj_20581;
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
var selector_path_20587 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20587);

return selector_path_20587;
} else {
var selector_path_20588 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20588);

return selector_path_20588;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20589 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20589);
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
var path_20591 = (function (){var path_20590 = oops.core.build_path_dynamically(selector);

return path_20590;
})();
var len_20592 = path_20591.length;
var i_20593 = (0);
var obj_20594 = obj;
while(true){
if((i_20593 < len_20592)){
var mode_20595 = (path_20591[i_20593]);
var key_20596 = (path_20591[(i_20593 + (1))]);
var next_obj_20597 = oops.core.get_key_dynamically(obj_20594,key_20596,mode_20595);
var G__20598 = mode_20595;
switch (G__20598) {
case (0):
var G__20600 = (i_20593 + (2));
var G__20601 = next_obj_20597;
i_20593 = G__20600;
obj_20594 = G__20601;
continue;

break;
case (1):
if(!((next_obj_20597 == null))){
var G__20602 = (i_20593 + (2));
var G__20603 = next_obj_20597;
i_20593 = G__20602;
obj_20594 = G__20603;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20597 == null))){
var G__20604 = (i_20593 + (2));
var G__20605 = next_obj_20597;
i_20593 = G__20604;
obj_20594 = G__20605;
continue;
} else {
var G__20606 = (i_20593 + (2));
var G__20607 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20594,key_20596) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20594,key_20596));
i_20593 = G__20606;
obj_20594 = G__20607;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20598)].join('')));

}
} else {
return obj_20594;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20609 = (function (){var path_20608 = oops.core.build_path_dynamically(selector);

return path_20608;
})();
var len_20610 = path_20609.length;
if((len_20610 < (4))){
return [obj,(function (){var path_20612 = path_20609;
var len_20613 = path_20612.length;
var i_20614 = (0);
var obj_20615 = obj;
while(true){
if((i_20614 < len_20613)){
var mode_20616 = (path_20612[i_20614]);
var key_20617 = (path_20612[(i_20614 + (1))]);
var next_obj_20618 = oops.core.get_key_dynamically(obj_20615,key_20617,mode_20616);
var G__20633 = mode_20616;
switch (G__20633) {
case (0):
var G__20637 = (i_20614 + (2));
var G__20638 = next_obj_20618;
i_20614 = G__20637;
obj_20615 = G__20638;
continue;

break;
case (1):
if(!((next_obj_20618 == null))){
var G__20639 = (i_20614 + (2));
var G__20640 = next_obj_20618;
i_20614 = G__20639;
obj_20615 = G__20640;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20618 == null))){
var G__20641 = (i_20614 + (2));
var G__20642 = next_obj_20618;
i_20614 = G__20641;
obj_20615 = G__20642;
continue;
} else {
var G__20643 = (i_20614 + (2));
var G__20644 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20615,key_20617) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20615,key_20617));
i_20614 = G__20643;
obj_20615 = G__20644;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20633)].join('')));

}
} else {
return obj_20615;
}
break;
}
})()];
} else {
var target_obj_20611 = (function (){var path_20619 = path_20609.slice((0),(len_20610 - (2)));
var len_20620 = path_20619.length;
var i_20621 = (0);
var obj_20622 = obj;
while(true){
if((i_20621 < len_20620)){
var mode_20623 = (path_20619[i_20621]);
var key_20624 = (path_20619[(i_20621 + (1))]);
var next_obj_20625 = oops.core.get_key_dynamically(obj_20622,key_20624,mode_20623);
var G__20634 = mode_20623;
switch (G__20634) {
case (0):
var G__20646 = (i_20621 + (2));
var G__20647 = next_obj_20625;
i_20621 = G__20646;
obj_20622 = G__20647;
continue;

break;
case (1):
if(!((next_obj_20625 == null))){
var G__20648 = (i_20621 + (2));
var G__20649 = next_obj_20625;
i_20621 = G__20648;
obj_20622 = G__20649;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20625 == null))){
var G__20650 = (i_20621 + (2));
var G__20651 = next_obj_20625;
i_20621 = G__20650;
obj_20622 = G__20651;
continue;
} else {
var G__20652 = (i_20621 + (2));
var G__20653 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20622,key_20624) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20622,key_20624));
i_20621 = G__20652;
obj_20622 = G__20653;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20634)].join('')));

}
} else {
return obj_20622;
}
break;
}
})();
return [target_obj_20611,(function (){var path_20626 = [(path_20609[(len_20610 - (2))]),(path_20609[(len_20610 - (1))])];
var len_20627 = path_20626.length;
var i_20628 = (0);
var obj_20629 = target_obj_20611;
while(true){
if((i_20628 < len_20627)){
var mode_20630 = (path_20626[i_20628]);
var key_20631 = (path_20626[(i_20628 + (1))]);
var next_obj_20632 = oops.core.get_key_dynamically(obj_20629,key_20631,mode_20630);
var G__20635 = mode_20630;
switch (G__20635) {
case (0):
var G__20655 = (i_20628 + (2));
var G__20656 = next_obj_20632;
i_20628 = G__20655;
obj_20629 = G__20656;
continue;

break;
case (1):
if(!((next_obj_20632 == null))){
var G__20657 = (i_20628 + (2));
var G__20658 = next_obj_20632;
i_20628 = G__20657;
obj_20629 = G__20658;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20632 == null))){
var G__20659 = (i_20628 + (2));
var G__20660 = next_obj_20632;
i_20628 = G__20659;
obj_20629 = G__20660;
continue;
} else {
var G__20661 = (i_20628 + (2));
var G__20662 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20629,key_20631) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20629,key_20631));
i_20628 = G__20661;
obj_20629 = G__20662;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20635)].join('')));

}
} else {
return obj_20629;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20664 = (function (){var path_20663 = oops.core.build_path_dynamically(selector);

return path_20663;
})();
var len_20667 = path_20664.length;
var parent_obj_path_20668 = path_20664.slice((0),(len_20667 - (2)));
var key_20665 = (path_20664[(len_20667 - (1))]);
var mode_20666 = (path_20664[(len_20667 - (2))]);
var parent_obj_20669 = (function (){var path_20670 = parent_obj_path_20668;
var len_20671 = path_20670.length;
var i_20672 = (0);
var obj_20673 = obj;
while(true){
if((i_20672 < len_20671)){
var mode_20674 = (path_20670[i_20672]);
var key_20675 = (path_20670[(i_20672 + (1))]);
var next_obj_20676 = oops.core.get_key_dynamically(obj_20673,key_20675,mode_20674);
var G__20677 = mode_20674;
switch (G__20677) {
case (0):
var G__20679 = (i_20672 + (2));
var G__20680 = next_obj_20676;
i_20672 = G__20679;
obj_20673 = G__20680;
continue;

break;
case (1):
if(!((next_obj_20676 == null))){
var G__20681 = (i_20672 + (2));
var G__20682 = next_obj_20676;
i_20672 = G__20681;
obj_20673 = G__20682;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20676 == null))){
var G__20683 = (i_20672 + (2));
var G__20684 = next_obj_20676;
i_20672 = G__20683;
obj_20673 = G__20684;
continue;
} else {
var G__20685 = (i_20672 + (2));
var G__20686 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20673,key_20675) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20673,key_20675));
i_20672 = G__20685;
obj_20673 = G__20686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20677)].join('')));

}
} else {
return obj_20673;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20669,key_20665,val,mode_20666);
});
