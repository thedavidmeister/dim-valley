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

var G__20585 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20585)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20332__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20333__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20333__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20334__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20334__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20335__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20335__auto__)){
return (envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2(data__20332__auto__,"details") : envelope__20335__auto__.call(null,data__20332__auto__,"details"));
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
return data__20332__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20585)){
var G__20587 = (console["error"]);
var G__20588 = msg;
var G__20589 = (function (){var data__20332__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20333__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20333__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20334__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20334__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20335__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20335__auto__)){
return (envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2(data__20332__auto__,"details") : envelope__20335__auto__.call(null,data__20332__auto__,"details"));
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
return data__20332__auto__;
}
})();
var fexpr__20586 = oops.state.get_console_reporter();
return (fexpr__20586.cljs$core$IFn$_invoke$arity$3 ? fexpr__20586.cljs$core$IFn$_invoke$arity$3(G__20587,G__20588,G__20589) : fexpr__20586.call(null,G__20587,G__20588,G__20589));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20585)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20585)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20590 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20590)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20332__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20333__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20333__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20334__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20334__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20335__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20335__auto__)){
return (envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2(data__20332__auto__,"details") : envelope__20335__auto__.call(null,data__20332__auto__,"details"));
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
return data__20332__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20590)){
var G__20592 = (console["warn"]);
var G__20593 = msg;
var G__20594 = (function (){var data__20332__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20333__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20333__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20334__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20334__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20335__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20335__auto__)){
return (envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20335__auto__.cljs$core$IFn$_invoke$arity$2(data__20332__auto__,"details") : envelope__20335__auto__.call(null,data__20332__auto__,"details"));
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
return data__20332__auto__;
}
})();
var fexpr__20591 = oops.state.get_console_reporter();
return (fexpr__20591.cljs$core$IFn$_invoke$arity$3 ? fexpr__20591.cljs$core$IFn$_invoke$arity$3(G__20592,G__20593,G__20594) : fexpr__20591.call(null,G__20592,G__20593,G__20594));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20590)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20590)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20601 = arguments.length;
var i__9520__auto___20602 = (0);
while(true){
if((i__9520__auto___20602 < len__9519__auto___20601)){
args__9526__auto__.push((arguments[i__9520__auto___20602]));

var G__20603 = (i__9520__auto___20602 + (1));
i__9520__auto___20602 = G__20603;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20597){
var vec__20598 = p__20597;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20598,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20595){
var G__20596 = cljs.core.first(seq20595);
var seq20595__$1 = cljs.core.next(seq20595);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20596,seq20595__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20605 = oops.config.get_child_factory();
var child_factory_20605__$1 = (function (){var G__20606 = child_factory_20605;
var G__20606__$1 = (((G__20606 instanceof cljs.core.Keyword))?G__20606.fqn:null);
switch (G__20606__$1) {
case "js-obj":
return ((function (G__20606,G__20606__$1,child_factory_20605){
return (function (){
return {};
});
;})(G__20606,G__20606__$1,child_factory_20605))

break;
case "js-array":
return ((function (G__20606,G__20606__$1,child_factory_20605){
return (function (){
return [];
});
;})(G__20606,G__20606__$1,child_factory_20605))

break;
default:
return child_factory_20605;

}
})();

var child_obj_20604 = (child_factory_20605__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20605__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20605__$1.call(null,obj,key));
(obj[key] = child_obj_20604);

return child_obj_20604;
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
var selector_path_20610 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20610);

return selector_path_20610;
} else {
var selector_path_20611 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_20611);

return selector_path_20611;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_20612 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_20612);
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
var path_20614 = (function (){var path_20613 = oops.core.build_path_dynamically(selector);

return path_20613;
})();
var len_20615 = path_20614.length;
var i_20616 = (0);
var obj_20617 = obj;
while(true){
if((i_20616 < len_20615)){
var mode_20618 = (path_20614[i_20616]);
var key_20619 = (path_20614[(i_20616 + (1))]);
var next_obj_20620 = oops.core.get_key_dynamically(obj_20617,key_20619,mode_20618);
var G__20621 = mode_20618;
switch (G__20621) {
case (0):
var G__20623 = (i_20616 + (2));
var G__20624 = next_obj_20620;
i_20616 = G__20623;
obj_20617 = G__20624;
continue;

break;
case (1):
if(!((next_obj_20620 == null))){
var G__20625 = (i_20616 + (2));
var G__20626 = next_obj_20620;
i_20616 = G__20625;
obj_20617 = G__20626;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20620 == null))){
var G__20627 = (i_20616 + (2));
var G__20628 = next_obj_20620;
i_20616 = G__20627;
obj_20617 = G__20628;
continue;
} else {
var G__20629 = (i_20616 + (2));
var G__20630 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20617,key_20619) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20617,key_20619));
i_20616 = G__20629;
obj_20617 = G__20630;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20621)].join('')));

}
} else {
return obj_20617;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_20632 = (function (){var path_20631 = oops.core.build_path_dynamically(selector);

return path_20631;
})();
var len_20633 = path_20632.length;
if((len_20633 < (4))){
return [obj,(function (){var path_20635 = path_20632;
var len_20636 = path_20635.length;
var i_20637 = (0);
var obj_20638 = obj;
while(true){
if((i_20637 < len_20636)){
var mode_20639 = (path_20635[i_20637]);
var key_20640 = (path_20635[(i_20637 + (1))]);
var next_obj_20641 = oops.core.get_key_dynamically(obj_20638,key_20640,mode_20639);
var G__20656 = mode_20639;
switch (G__20656) {
case (0):
var G__20660 = (i_20637 + (2));
var G__20661 = next_obj_20641;
i_20637 = G__20660;
obj_20638 = G__20661;
continue;

break;
case (1):
if(!((next_obj_20641 == null))){
var G__20662 = (i_20637 + (2));
var G__20663 = next_obj_20641;
i_20637 = G__20662;
obj_20638 = G__20663;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20641 == null))){
var G__20664 = (i_20637 + (2));
var G__20665 = next_obj_20641;
i_20637 = G__20664;
obj_20638 = G__20665;
continue;
} else {
var G__20666 = (i_20637 + (2));
var G__20667 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20638,key_20640) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20638,key_20640));
i_20637 = G__20666;
obj_20638 = G__20667;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20656)].join('')));

}
} else {
return obj_20638;
}
break;
}
})()];
} else {
var target_obj_20634 = (function (){var path_20642 = path_20632.slice((0),(len_20633 - (2)));
var len_20643 = path_20642.length;
var i_20644 = (0);
var obj_20645 = obj;
while(true){
if((i_20644 < len_20643)){
var mode_20646 = (path_20642[i_20644]);
var key_20647 = (path_20642[(i_20644 + (1))]);
var next_obj_20648 = oops.core.get_key_dynamically(obj_20645,key_20647,mode_20646);
var G__20657 = mode_20646;
switch (G__20657) {
case (0):
var G__20669 = (i_20644 + (2));
var G__20670 = next_obj_20648;
i_20644 = G__20669;
obj_20645 = G__20670;
continue;

break;
case (1):
if(!((next_obj_20648 == null))){
var G__20671 = (i_20644 + (2));
var G__20672 = next_obj_20648;
i_20644 = G__20671;
obj_20645 = G__20672;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20648 == null))){
var G__20673 = (i_20644 + (2));
var G__20674 = next_obj_20648;
i_20644 = G__20673;
obj_20645 = G__20674;
continue;
} else {
var G__20675 = (i_20644 + (2));
var G__20676 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20645,key_20647) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20645,key_20647));
i_20644 = G__20675;
obj_20645 = G__20676;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20657)].join('')));

}
} else {
return obj_20645;
}
break;
}
})();
return [target_obj_20634,(function (){var path_20649 = [(path_20632[(len_20633 - (2))]),(path_20632[(len_20633 - (1))])];
var len_20650 = path_20649.length;
var i_20651 = (0);
var obj_20652 = target_obj_20634;
while(true){
if((i_20651 < len_20650)){
var mode_20653 = (path_20649[i_20651]);
var key_20654 = (path_20649[(i_20651 + (1))]);
var next_obj_20655 = oops.core.get_key_dynamically(obj_20652,key_20654,mode_20653);
var G__20658 = mode_20653;
switch (G__20658) {
case (0):
var G__20678 = (i_20651 + (2));
var G__20679 = next_obj_20655;
i_20651 = G__20678;
obj_20652 = G__20679;
continue;

break;
case (1):
if(!((next_obj_20655 == null))){
var G__20680 = (i_20651 + (2));
var G__20681 = next_obj_20655;
i_20651 = G__20680;
obj_20652 = G__20681;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20655 == null))){
var G__20682 = (i_20651 + (2));
var G__20683 = next_obj_20655;
i_20651 = G__20682;
obj_20652 = G__20683;
continue;
} else {
var G__20684 = (i_20651 + (2));
var G__20685 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20652,key_20654) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20652,key_20654));
i_20651 = G__20684;
obj_20652 = G__20685;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20658)].join('')));

}
} else {
return obj_20652;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_20687 = (function (){var path_20686 = oops.core.build_path_dynamically(selector);

return path_20686;
})();
var len_20690 = path_20687.length;
var parent_obj_path_20691 = path_20687.slice((0),(len_20690 - (2)));
var key_20688 = (path_20687[(len_20690 - (1))]);
var mode_20689 = (path_20687[(len_20690 - (2))]);
var parent_obj_20692 = (function (){var path_20693 = parent_obj_path_20691;
var len_20694 = path_20693.length;
var i_20695 = (0);
var obj_20696 = obj;
while(true){
if((i_20695 < len_20694)){
var mode_20697 = (path_20693[i_20695]);
var key_20698 = (path_20693[(i_20695 + (1))]);
var next_obj_20699 = oops.core.get_key_dynamically(obj_20696,key_20698,mode_20697);
var G__20700 = mode_20697;
switch (G__20700) {
case (0):
var G__20702 = (i_20695 + (2));
var G__20703 = next_obj_20699;
i_20695 = G__20702;
obj_20696 = G__20703;
continue;

break;
case (1):
if(!((next_obj_20699 == null))){
var G__20704 = (i_20695 + (2));
var G__20705 = next_obj_20699;
i_20695 = G__20704;
obj_20696 = G__20705;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_20699 == null))){
var G__20706 = (i_20695 + (2));
var G__20707 = next_obj_20699;
i_20695 = G__20706;
obj_20696 = G__20707;
continue;
} else {
var G__20708 = (i_20695 + (2));
var G__20709 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_20696,key_20698) : oops.core.punch_key_dynamically_BANG_.call(null,obj_20696,key_20698));
i_20695 = G__20708;
obj_20696 = G__20709;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20700)].join('')));

}
} else {
return obj_20696;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_20692,key_20688,val,mode_20689);
});
