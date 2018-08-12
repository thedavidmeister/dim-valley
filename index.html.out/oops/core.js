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

var G__20564 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20564)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20311__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20312__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20312__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20313__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20313__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20314__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20314__auto__)){
return (envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2(data__20311__auto__,"details") : envelope__20314__auto__.call(null,data__20311__auto__,"details"));
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
return data__20311__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20564)){
var G__20566 = (console["error"]);
var G__20567 = msg;
var G__20568 = (function (){var data__20311__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20312__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20312__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20313__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20313__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20314__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20314__auto__)){
return (envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2(data__20311__auto__,"details") : envelope__20314__auto__.call(null,data__20311__auto__,"details"));
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
return data__20311__auto__;
}
})();
var fexpr__20565 = oops.state.get_console_reporter();
return (fexpr__20565.cljs$core$IFn$_invoke$arity$3 ? fexpr__20565.cljs$core$IFn$_invoke$arity$3(G__20566,G__20567,G__20568) : fexpr__20565.call(null,G__20566,G__20567,G__20568));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20564)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20564)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20569 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20569)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20311__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20312__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20312__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20313__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20313__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20314__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20314__auto__)){
return (envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2(data__20311__auto__,"details") : envelope__20314__auto__.call(null,data__20311__auto__,"details"));
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
return data__20311__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20569)){
var G__20571 = (console["warn"]);
var G__20572 = msg;
var G__20573 = (function (){var data__20311__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20312__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20312__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20313__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20313__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20314__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20314__auto__)){
return (envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20314__auto__.cljs$core$IFn$_invoke$arity$2(data__20311__auto__,"details") : envelope__20314__auto__.call(null,data__20311__auto__,"details"));
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
return data__20311__auto__;
}
})();
var fexpr__20570 = oops.state.get_console_reporter();
return (fexpr__20570.cljs$core$IFn$_invoke$arity$3 ? fexpr__20570.cljs$core$IFn$_invoke$arity$3(G__20571,G__20572,G__20573) : fexpr__20570.call(null,G__20571,G__20572,G__20573));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20569)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20569)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20580 = arguments.length;
var i__9520__auto___20581 = (0);
while(true){
if((i__9520__auto___20581 < len__9519__auto___20580)){
args__9526__auto__.push((arguments[i__9520__auto___20581]));

var G__20582 = (i__9520__auto___20581 + (1));
i__9520__auto___20581 = G__20582;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20576){
var vec__20577 = p__20576;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20577,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20574){
var G__20575 = cljs.core.first(seq20574);
var seq20574__$1 = cljs.core.next(seq20574);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20575,seq20574__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20584 = oops.config.get_child_factory();
var child_factory_20584__$1 = (function (){var G__20585 = child_factory_20584;
var G__20585__$1 = (((G__20585 instanceof cljs.core.Keyword))?G__20585.fqn:null);
switch (G__20585__$1) {
case "js-obj":
return ((function (G__20585,G__20585__$1,child_factory_20584){
return (function (){
return {};
});
;})(G__20585,G__20585__$1,child_factory_20584))

break;
case "js-array":
return ((function (G__20585,G__20585__$1,child_factory_20584){
return (function (){
return [];
});
;})(G__20585,G__20585__$1,child_factory_20584))

break;
default:
return child_factory_20584;

}
})();

var child_obj_20583 = (child_factory_20584__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20584__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20584__$1.call(null,obj,key));
(obj[key] = child_obj_20583);

return child_obj_20583;
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
var selector_path_20589 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20589);

return selector_path_20589;
} else {
var selector_path_20590 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20590);

return selector_path_20590;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20591 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20591);
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
var path_20593 = (function (){var path_20592 = oops.core.build_path_dynamically(selector);

return path_20592;
})();
var len_20594 = path_20593.length;
var i_20595 = (0);
var obj_20596 = obj;
while(true){
if((i_20595 < len_20594)){
var mode_20597 = (path_20593[i_20595]);
var key_20598 = (path_20593[(i_20595 + (1))]);
var next_obj_20599 = oops.core.get_key_dynamically(obj_20596,key_20598,mode_20597);
var G__20600 = mode_20597;
switch (G__20600) {
case (0):
var G__20602 = (i_20595 + (2));
var G__20603 = next_obj_20599;
i_20595 = G__20602;
obj_20596 = G__20603;
continue;

break;
case (1):
if(!((next_obj_20599 == null))){
var G__20604 = (i_20595 + (2));
var G__20605 = next_obj_20599;
i_20595 = G__20604;
obj_20596 = G__20605;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20599 == null))){
var G__20606 = (i_20595 + (2));
var G__20607 = next_obj_20599;
i_20595 = G__20606;
obj_20596 = G__20607;
continue;
} else {
var G__20608 = (i_20595 + (2));
var G__20609 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20596,key_20598) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20596,key_20598));
i_20595 = G__20608;
obj_20596 = G__20609;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20600)].join('')));

}
} else {
return obj_20596;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20611 = (function (){var path_20610 = oops.core.build_path_dynamically(selector);

return path_20610;
})();
var len_20612 = path_20611.length;
if((len_20612 < (4))){
return [obj,(function (){var path_20614 = path_20611;
var len_20615 = path_20614.length;
var i_20616 = (0);
var obj_20617 = obj;
while(true){
if((i_20616 < len_20615)){
var mode_20618 = (path_20614[i_20616]);
var key_20619 = (path_20614[(i_20616 + (1))]);
var next_obj_20620 = oops.core.get_key_dynamically(obj_20617,key_20619,mode_20618);
var G__20635 = mode_20618;
switch (G__20635) {
case (0):
var G__20639 = (i_20616 + (2));
var G__20640 = next_obj_20620;
i_20616 = G__20639;
obj_20617 = G__20640;
continue;

break;
case (1):
if(!((next_obj_20620 == null))){
var G__20641 = (i_20616 + (2));
var G__20642 = next_obj_20620;
i_20616 = G__20641;
obj_20617 = G__20642;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20620 == null))){
var G__20643 = (i_20616 + (2));
var G__20644 = next_obj_20620;
i_20616 = G__20643;
obj_20617 = G__20644;
continue;
} else {
var G__20645 = (i_20616 + (2));
var G__20646 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20617,key_20619) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20617,key_20619));
i_20616 = G__20645;
obj_20617 = G__20646;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20635)].join('')));

}
} else {
return obj_20617;
}
break;
}
})()];
} else {
var target_obj_20613 = (function (){var path_20621 = path_20611.slice((0),(len_20612 - (2)));
var len_20622 = path_20621.length;
var i_20623 = (0);
var obj_20624 = obj;
while(true){
if((i_20623 < len_20622)){
var mode_20625 = (path_20621[i_20623]);
var key_20626 = (path_20621[(i_20623 + (1))]);
var next_obj_20627 = oops.core.get_key_dynamically(obj_20624,key_20626,mode_20625);
var G__20636 = mode_20625;
switch (G__20636) {
case (0):
var G__20648 = (i_20623 + (2));
var G__20649 = next_obj_20627;
i_20623 = G__20648;
obj_20624 = G__20649;
continue;

break;
case (1):
if(!((next_obj_20627 == null))){
var G__20650 = (i_20623 + (2));
var G__20651 = next_obj_20627;
i_20623 = G__20650;
obj_20624 = G__20651;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20627 == null))){
var G__20652 = (i_20623 + (2));
var G__20653 = next_obj_20627;
i_20623 = G__20652;
obj_20624 = G__20653;
continue;
} else {
var G__20654 = (i_20623 + (2));
var G__20655 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20624,key_20626) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20624,key_20626));
i_20623 = G__20654;
obj_20624 = G__20655;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20636)].join('')));

}
} else {
return obj_20624;
}
break;
}
})();
return [target_obj_20613,(function (){var path_20628 = [(path_20611[(len_20612 - (2))]),(path_20611[(len_20612 - (1))])];
var len_20629 = path_20628.length;
var i_20630 = (0);
var obj_20631 = target_obj_20613;
while(true){
if((i_20630 < len_20629)){
var mode_20632 = (path_20628[i_20630]);
var key_20633 = (path_20628[(i_20630 + (1))]);
var next_obj_20634 = oops.core.get_key_dynamically(obj_20631,key_20633,mode_20632);
var G__20637 = mode_20632;
switch (G__20637) {
case (0):
var G__20657 = (i_20630 + (2));
var G__20658 = next_obj_20634;
i_20630 = G__20657;
obj_20631 = G__20658;
continue;

break;
case (1):
if(!((next_obj_20634 == null))){
var G__20659 = (i_20630 + (2));
var G__20660 = next_obj_20634;
i_20630 = G__20659;
obj_20631 = G__20660;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20634 == null))){
var G__20661 = (i_20630 + (2));
var G__20662 = next_obj_20634;
i_20630 = G__20661;
obj_20631 = G__20662;
continue;
} else {
var G__20663 = (i_20630 + (2));
var G__20664 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20631,key_20633) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20631,key_20633));
i_20630 = G__20663;
obj_20631 = G__20664;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20637)].join('')));

}
} else {
return obj_20631;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20666 = (function (){var path_20665 = oops.core.build_path_dynamically(selector);

return path_20665;
})();
var len_20669 = path_20666.length;
var parent_obj_path_20670 = path_20666.slice((0),(len_20669 - (2)));
var key_20667 = (path_20666[(len_20669 - (1))]);
var mode_20668 = (path_20666[(len_20669 - (2))]);
var parent_obj_20671 = (function (){var path_20672 = parent_obj_path_20670;
var len_20673 = path_20672.length;
var i_20674 = (0);
var obj_20675 = obj;
while(true){
if((i_20674 < len_20673)){
var mode_20676 = (path_20672[i_20674]);
var key_20677 = (path_20672[(i_20674 + (1))]);
var next_obj_20678 = oops.core.get_key_dynamically(obj_20675,key_20677,mode_20676);
var G__20679 = mode_20676;
switch (G__20679) {
case (0):
var G__20681 = (i_20674 + (2));
var G__20682 = next_obj_20678;
i_20674 = G__20681;
obj_20675 = G__20682;
continue;

break;
case (1):
if(!((next_obj_20678 == null))){
var G__20683 = (i_20674 + (2));
var G__20684 = next_obj_20678;
i_20674 = G__20683;
obj_20675 = G__20684;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20678 == null))){
var G__20685 = (i_20674 + (2));
var G__20686 = next_obj_20678;
i_20674 = G__20685;
obj_20675 = G__20686;
continue;
} else {
var G__20687 = (i_20674 + (2));
var G__20688 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20675,key_20677) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20675,key_20677));
i_20674 = G__20687;
obj_20675 = G__20688;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20679)].join('')));

}
} else {
return obj_20675;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20671,key_20667,val,mode_20668);
});
