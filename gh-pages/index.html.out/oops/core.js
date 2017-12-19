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

var G__20974 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20974)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20721__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20722__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20722__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20723__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20723__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20724__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20724__auto__)){
return (envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2(data__20721__auto__,"details") : envelope__20724__auto__.call(null,data__20721__auto__,"details"));
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
return data__20721__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20974)){
var G__20976 = (console["error"]);
var G__20977 = msg;
var G__20978 = (function (){var data__20721__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20722__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20722__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20723__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20723__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20724__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20724__auto__)){
return (envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2(data__20721__auto__,"details") : envelope__20724__auto__.call(null,data__20721__auto__,"details"));
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
return data__20721__auto__;
}
})();
var fexpr__20975 = oops.state.get_console_reporter();
return (fexpr__20975.cljs$core$IFn$_invoke$arity$3 ? fexpr__20975.cljs$core$IFn$_invoke$arity$3(G__20976,G__20977,G__20978) : fexpr__20975.call(null,G__20976,G__20977,G__20978));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20974)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20974)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__20979 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__20979)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__20721__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20722__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20722__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20723__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20723__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20724__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20724__auto__)){
return (envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2(data__20721__auto__,"details") : envelope__20724__auto__.call(null,data__20721__auto__,"details"));
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
return data__20721__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__20979)){
var G__20981 = (console["warn"]);
var G__20982 = msg;
var G__20983 = (function (){var data__20721__auto__ = data;
var or__8242__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__20722__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__20722__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__20723__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__20723__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__20724__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__20724__auto__)){
return (envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__20724__auto__.cljs$core$IFn$_invoke$arity$2(data__20721__auto__,"details") : envelope__20724__auto__.call(null,data__20721__auto__,"details"));
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
return data__20721__auto__;
}
})();
var fexpr__20980 = oops.state.get_console_reporter();
return (fexpr__20980.cljs$core$IFn$_invoke$arity$3 ? fexpr__20980.cljs$core$IFn$_invoke$arity$3(G__20981,G__20982,G__20983) : fexpr__20980.call(null,G__20981,G__20982,G__20983));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__20979)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20979)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9526__auto__ = [];
var len__9519__auto___20990 = arguments.length;
var i__9520__auto___20991 = (0);
while(true){
if((i__9520__auto___20991 < len__9519__auto___20990)){
args__9526__auto__.push((arguments[i__9520__auto___20991]));

var G__20992 = (i__9520__auto___20991 + (1));
i__9520__auto___20991 = G__20992;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__20986){
var vec__20987 = p__20986;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20987,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq20984){
var G__20985 = cljs.core.first(seq20984);
var seq20984__$1 = cljs.core.next(seq20984);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__20985,seq20984__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_20994 = oops.config.get_child_factory();
var child_factory_20994__$1 = (function (){var G__20995 = child_factory_20994;
var G__20995__$1 = (((G__20995 instanceof cljs.core.Keyword))?G__20995.fqn:null);
switch (G__20995__$1) {
case "js-obj":
return ((function (G__20995,G__20995__$1,child_factory_20994){
return (function (){
return {};
});
;})(G__20995,G__20995__$1,child_factory_20994))

break;
case "js-array":
return ((function (G__20995,G__20995__$1,child_factory_20994){
return (function (){
return [];
});
;})(G__20995,G__20995__$1,child_factory_20994))

break;
default:
return child_factory_20994;

}
})();

var child_obj_20993 = (child_factory_20994__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_20994__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_20994__$1.call(null,obj,key));
(obj[key] = child_obj_20993);

return child_obj_20993;
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
var selector_path_20999 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_20999);

return selector_path_20999;
} else {
var selector_path_21000 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_21000);

return selector_path_21000;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_21001 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_21001);
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
var path_21003 = (function (){var path_21002 = oops.core.build_path_dynamically(selector);

return path_21002;
})();
var len_21004 = path_21003.length;
var i_21005 = (0);
var obj_21006 = obj;
while(true){
if((i_21005 < len_21004)){
var mode_21007 = (path_21003[i_21005]);
var key_21008 = (path_21003[(i_21005 + (1))]);
var next_obj_21009 = oops.core.get_key_dynamically(obj_21006,key_21008,mode_21007);
var G__21010 = mode_21007;
switch (G__21010) {
case (0):
var G__21012 = (i_21005 + (2));
var G__21013 = next_obj_21009;
i_21005 = G__21012;
obj_21006 = G__21013;
continue;

break;
case (1):
if(!((next_obj_21009 == null))){
var G__21014 = (i_21005 + (2));
var G__21015 = next_obj_21009;
i_21005 = G__21014;
obj_21006 = G__21015;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_21009 == null))){
var G__21016 = (i_21005 + (2));
var G__21017 = next_obj_21009;
i_21005 = G__21016;
obj_21006 = G__21017;
continue;
} else {
var G__21018 = (i_21005 + (2));
var G__21019 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_21006,key_21008) : oops.core.punch_key_dynamically_BANG_.call(null,obj_21006,key_21008));
i_21005 = G__21018;
obj_21006 = G__21019;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21010)].join('')));

}
} else {
return obj_21006;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_21021 = (function (){var path_21020 = oops.core.build_path_dynamically(selector);

return path_21020;
})();
var len_21022 = path_21021.length;
if((len_21022 < (4))){
return [obj,(function (){var path_21024 = path_21021;
var len_21025 = path_21024.length;
var i_21026 = (0);
var obj_21027 = obj;
while(true){
if((i_21026 < len_21025)){
var mode_21028 = (path_21024[i_21026]);
var key_21029 = (path_21024[(i_21026 + (1))]);
var next_obj_21030 = oops.core.get_key_dynamically(obj_21027,key_21029,mode_21028);
var G__21045 = mode_21028;
switch (G__21045) {
case (0):
var G__21049 = (i_21026 + (2));
var G__21050 = next_obj_21030;
i_21026 = G__21049;
obj_21027 = G__21050;
continue;

break;
case (1):
if(!((next_obj_21030 == null))){
var G__21051 = (i_21026 + (2));
var G__21052 = next_obj_21030;
i_21026 = G__21051;
obj_21027 = G__21052;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_21030 == null))){
var G__21053 = (i_21026 + (2));
var G__21054 = next_obj_21030;
i_21026 = G__21053;
obj_21027 = G__21054;
continue;
} else {
var G__21055 = (i_21026 + (2));
var G__21056 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_21027,key_21029) : oops.core.punch_key_dynamically_BANG_.call(null,obj_21027,key_21029));
i_21026 = G__21055;
obj_21027 = G__21056;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21045)].join('')));

}
} else {
return obj_21027;
}
break;
}
})()];
} else {
var target_obj_21023 = (function (){var path_21031 = path_21021.slice((0),(len_21022 - (2)));
var len_21032 = path_21031.length;
var i_21033 = (0);
var obj_21034 = obj;
while(true){
if((i_21033 < len_21032)){
var mode_21035 = (path_21031[i_21033]);
var key_21036 = (path_21031[(i_21033 + (1))]);
var next_obj_21037 = oops.core.get_key_dynamically(obj_21034,key_21036,mode_21035);
var G__21046 = mode_21035;
switch (G__21046) {
case (0):
var G__21058 = (i_21033 + (2));
var G__21059 = next_obj_21037;
i_21033 = G__21058;
obj_21034 = G__21059;
continue;

break;
case (1):
if(!((next_obj_21037 == null))){
var G__21060 = (i_21033 + (2));
var G__21061 = next_obj_21037;
i_21033 = G__21060;
obj_21034 = G__21061;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_21037 == null))){
var G__21062 = (i_21033 + (2));
var G__21063 = next_obj_21037;
i_21033 = G__21062;
obj_21034 = G__21063;
continue;
} else {
var G__21064 = (i_21033 + (2));
var G__21065 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_21034,key_21036) : oops.core.punch_key_dynamically_BANG_.call(null,obj_21034,key_21036));
i_21033 = G__21064;
obj_21034 = G__21065;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21046)].join('')));

}
} else {
return obj_21034;
}
break;
}
})();
return [target_obj_21023,(function (){var path_21038 = [(path_21021[(len_21022 - (2))]),(path_21021[(len_21022 - (1))])];
var len_21039 = path_21038.length;
var i_21040 = (0);
var obj_21041 = target_obj_21023;
while(true){
if((i_21040 < len_21039)){
var mode_21042 = (path_21038[i_21040]);
var key_21043 = (path_21038[(i_21040 + (1))]);
var next_obj_21044 = oops.core.get_key_dynamically(obj_21041,key_21043,mode_21042);
var G__21047 = mode_21042;
switch (G__21047) {
case (0):
var G__21067 = (i_21040 + (2));
var G__21068 = next_obj_21044;
i_21040 = G__21067;
obj_21041 = G__21068;
continue;

break;
case (1):
if(!((next_obj_21044 == null))){
var G__21069 = (i_21040 + (2));
var G__21070 = next_obj_21044;
i_21040 = G__21069;
obj_21041 = G__21070;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_21044 == null))){
var G__21071 = (i_21040 + (2));
var G__21072 = next_obj_21044;
i_21040 = G__21071;
obj_21041 = G__21072;
continue;
} else {
var G__21073 = (i_21040 + (2));
var G__21074 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_21041,key_21043) : oops.core.punch_key_dynamically_BANG_.call(null,obj_21041,key_21043));
i_21040 = G__21073;
obj_21041 = G__21074;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21047)].join('')));

}
} else {
return obj_21041;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_21076 = (function (){var path_21075 = oops.core.build_path_dynamically(selector);

return path_21075;
})();
var len_21079 = path_21076.length;
var parent_obj_path_21080 = path_21076.slice((0),(len_21079 - (2)));
var key_21077 = (path_21076[(len_21079 - (1))]);
var mode_21078 = (path_21076[(len_21079 - (2))]);
var parent_obj_21081 = (function (){var path_21082 = parent_obj_path_21080;
var len_21083 = path_21082.length;
var i_21084 = (0);
var obj_21085 = obj;
while(true){
if((i_21084 < len_21083)){
var mode_21086 = (path_21082[i_21084]);
var key_21087 = (path_21082[(i_21084 + (1))]);
var next_obj_21088 = oops.core.get_key_dynamically(obj_21085,key_21087,mode_21086);
var G__21089 = mode_21086;
switch (G__21089) {
case (0):
var G__21091 = (i_21084 + (2));
var G__21092 = next_obj_21088;
i_21084 = G__21091;
obj_21085 = G__21092;
continue;

break;
case (1):
if(!((next_obj_21088 == null))){
var G__21093 = (i_21084 + (2));
var G__21094 = next_obj_21088;
i_21084 = G__21093;
obj_21085 = G__21094;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_21088 == null))){
var G__21095 = (i_21084 + (2));
var G__21096 = next_obj_21088;
i_21084 = G__21095;
obj_21085 = G__21096;
continue;
} else {
var G__21097 = (i_21084 + (2));
var G__21098 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_21085,key_21087) : oops.core.punch_key_dynamically_BANG_.call(null,obj_21085,key_21087));
i_21084 = G__21097;
obj_21085 = G__21098;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21089)].join('')));

}
} else {
return obj_21085;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_21081,key_21077,val,mode_21078);
});
