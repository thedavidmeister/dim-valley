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

var G__24537 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__24537)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__24284__auto__ = data;
var or__8638__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24285__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24285__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24286__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24286__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24287__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24287__auto__)){
return (envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2(data__24284__auto__,"details") : envelope__24287__auto__.call(null,data__24284__auto__,"details"));
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
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return data__24284__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__24537)){
var G__24539 = (console["error"]);
var G__24540 = msg;
var G__24541 = (function (){var data__24284__auto__ = data;
var or__8638__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24285__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24285__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24286__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24286__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24287__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24287__auto__)){
return (envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2(data__24284__auto__,"details") : envelope__24287__auto__.call(null,data__24284__auto__,"details"));
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
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return data__24284__auto__;
}
})();
var fexpr__24538 = oops.state.get_console_reporter();
return (fexpr__24538.cljs$core$IFn$_invoke$arity$3 ? fexpr__24538.cljs$core$IFn$_invoke$arity$3(G__24539,G__24540,G__24541) : fexpr__24538.call(null,G__24539,G__24540,G__24541));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24537)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24537)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24542 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__24542)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__24284__auto__ = data;
var or__8638__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24285__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24285__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24286__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24286__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24287__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24287__auto__)){
return (envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2(data__24284__auto__,"details") : envelope__24287__auto__.call(null,data__24284__auto__,"details"));
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
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return data__24284__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__24542)){
var G__24544 = (console["warn"]);
var G__24545 = msg;
var G__24546 = (function (){var data__24284__auto__ = data;
var or__8638__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5288__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5288__auto__)){
var devtools__24285__auto__ = temp__5288__auto__;
var temp__5288__auto____$1 = (devtools__24285__auto__["toolbox"]);
if(cljs.core.truth_(temp__5288__auto____$1)){
var toolbox__24286__auto__ = temp__5288__auto____$1;
var temp__5288__auto____$2 = (toolbox__24286__auto__["envelope"]);
if(cljs.core.truth_(temp__5288__auto____$2)){
var envelope__24287__auto__ = temp__5288__auto____$2;
if(cljs.core.fn_QMARK_(envelope__24287__auto__)){
return (envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__24287__auto__.cljs$core$IFn$_invoke$arity$2(data__24284__auto__,"details") : envelope__24287__auto__.call(null,data__24284__auto__,"details"));
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
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return data__24284__auto__;
}
})();
var fexpr__24543 = oops.state.get_console_reporter();
return (fexpr__24543.cljs$core$IFn$_invoke$arity$3 ? fexpr__24543.cljs$core$IFn$_invoke$arity$3(G__24544,G__24545,G__24546) : fexpr__24543.call(null,G__24544,G__24545,G__24546));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__24542)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24542)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9922__auto__ = [];
var len__9915__auto___24553 = arguments.length;
var i__9916__auto___24554 = (0);
while(true){
if((i__9916__auto___24554 < len__9915__auto___24553)){
args__9922__auto__.push((arguments[i__9916__auto___24554]));

var G__24555 = (i__9916__auto___24554 + (1));
i__9916__auto___24554 = G__24555;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24549){
var vec__24550 = p__24549;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24550,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24547){
var G__24548 = cljs.core.first(seq24547);
var seq24547__$1 = cljs.core.next(seq24547);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__24548,seq24547__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_24557 = oops.config.get_child_factory();
var child_factory_24557__$1 = (function (){var G__24558 = child_factory_24557;
var G__24558__$1 = (((G__24558 instanceof cljs.core.Keyword))?G__24558.fqn:null);
switch (G__24558__$1) {
case "js-obj":
return ((function (G__24558,G__24558__$1,child_factory_24557){
return (function (){
return {};
});
;})(G__24558,G__24558__$1,child_factory_24557))

break;
case "js-array":
return ((function (G__24558,G__24558__$1,child_factory_24557){
return (function (){
return [];
});
;})(G__24558,G__24558__$1,child_factory_24557))

break;
default:
return child_factory_24557;

}
})();

var child_obj_24556 = (child_factory_24557__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_24557__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_24557__$1.call(null,obj,key));
(obj[key] = child_obj_24556);

return child_obj_24556;
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
var selector_path_24562 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_24562);

return selector_path_24562;
} else {
var selector_path_24563 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_24563);

return selector_path_24563;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5288__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5288__auto__)){
var issue_24564 = temp__5288__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_24564);
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
var path_24566 = (function (){var path_24565 = oops.core.build_path_dynamically(selector);

return path_24565;
})();
var len_24567 = path_24566.length;
var i_24568 = (0);
var obj_24569 = obj;
while(true){
if((i_24568 < len_24567)){
var mode_24570 = (path_24566[i_24568]);
var key_24571 = (path_24566[(i_24568 + (1))]);
var next_obj_24572 = oops.core.get_key_dynamically(obj_24569,key_24571,mode_24570);
var G__24573 = mode_24570;
switch (G__24573) {
case (0):
var G__24575 = (i_24568 + (2));
var G__24576 = next_obj_24572;
i_24568 = G__24575;
obj_24569 = G__24576;
continue;

break;
case (1):
if(!((next_obj_24572 == null))){
var G__24577 = (i_24568 + (2));
var G__24578 = next_obj_24572;
i_24568 = G__24577;
obj_24569 = G__24578;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24572 == null))){
var G__24579 = (i_24568 + (2));
var G__24580 = next_obj_24572;
i_24568 = G__24579;
obj_24569 = G__24580;
continue;
} else {
var G__24581 = (i_24568 + (2));
var G__24582 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24569,key_24571) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24569,key_24571));
i_24568 = G__24581;
obj_24569 = G__24582;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24573)].join('')));

}
} else {
return obj_24569;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_24584 = (function (){var path_24583 = oops.core.build_path_dynamically(selector);

return path_24583;
})();
var len_24585 = path_24584.length;
if((len_24585 < (4))){
return [obj,(function (){var path_24587 = path_24584;
var len_24588 = path_24587.length;
var i_24589 = (0);
var obj_24590 = obj;
while(true){
if((i_24589 < len_24588)){
var mode_24591 = (path_24587[i_24589]);
var key_24592 = (path_24587[(i_24589 + (1))]);
var next_obj_24593 = oops.core.get_key_dynamically(obj_24590,key_24592,mode_24591);
var G__24608 = mode_24591;
switch (G__24608) {
case (0):
var G__24612 = (i_24589 + (2));
var G__24613 = next_obj_24593;
i_24589 = G__24612;
obj_24590 = G__24613;
continue;

break;
case (1):
if(!((next_obj_24593 == null))){
var G__24614 = (i_24589 + (2));
var G__24615 = next_obj_24593;
i_24589 = G__24614;
obj_24590 = G__24615;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24593 == null))){
var G__24616 = (i_24589 + (2));
var G__24617 = next_obj_24593;
i_24589 = G__24616;
obj_24590 = G__24617;
continue;
} else {
var G__24618 = (i_24589 + (2));
var G__24619 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24590,key_24592) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24590,key_24592));
i_24589 = G__24618;
obj_24590 = G__24619;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24608)].join('')));

}
} else {
return obj_24590;
}
break;
}
})()];
} else {
var target_obj_24586 = (function (){var path_24594 = path_24584.slice((0),(len_24585 - (2)));
var len_24595 = path_24594.length;
var i_24596 = (0);
var obj_24597 = obj;
while(true){
if((i_24596 < len_24595)){
var mode_24598 = (path_24594[i_24596]);
var key_24599 = (path_24594[(i_24596 + (1))]);
var next_obj_24600 = oops.core.get_key_dynamically(obj_24597,key_24599,mode_24598);
var G__24609 = mode_24598;
switch (G__24609) {
case (0):
var G__24621 = (i_24596 + (2));
var G__24622 = next_obj_24600;
i_24596 = G__24621;
obj_24597 = G__24622;
continue;

break;
case (1):
if(!((next_obj_24600 == null))){
var G__24623 = (i_24596 + (2));
var G__24624 = next_obj_24600;
i_24596 = G__24623;
obj_24597 = G__24624;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24600 == null))){
var G__24625 = (i_24596 + (2));
var G__24626 = next_obj_24600;
i_24596 = G__24625;
obj_24597 = G__24626;
continue;
} else {
var G__24627 = (i_24596 + (2));
var G__24628 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24597,key_24599) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24597,key_24599));
i_24596 = G__24627;
obj_24597 = G__24628;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24609)].join('')));

}
} else {
return obj_24597;
}
break;
}
})();
return [target_obj_24586,(function (){var path_24601 = [(path_24584[(len_24585 - (2))]),(path_24584[(len_24585 - (1))])];
var len_24602 = path_24601.length;
var i_24603 = (0);
var obj_24604 = target_obj_24586;
while(true){
if((i_24603 < len_24602)){
var mode_24605 = (path_24601[i_24603]);
var key_24606 = (path_24601[(i_24603 + (1))]);
var next_obj_24607 = oops.core.get_key_dynamically(obj_24604,key_24606,mode_24605);
var G__24610 = mode_24605;
switch (G__24610) {
case (0):
var G__24630 = (i_24603 + (2));
var G__24631 = next_obj_24607;
i_24603 = G__24630;
obj_24604 = G__24631;
continue;

break;
case (1):
if(!((next_obj_24607 == null))){
var G__24632 = (i_24603 + (2));
var G__24633 = next_obj_24607;
i_24603 = G__24632;
obj_24604 = G__24633;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24607 == null))){
var G__24634 = (i_24603 + (2));
var G__24635 = next_obj_24607;
i_24603 = G__24634;
obj_24604 = G__24635;
continue;
} else {
var G__24636 = (i_24603 + (2));
var G__24637 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24604,key_24606) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24604,key_24606));
i_24603 = G__24636;
obj_24604 = G__24637;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24610)].join('')));

}
} else {
return obj_24604;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_24639 = (function (){var path_24638 = oops.core.build_path_dynamically(selector);

return path_24638;
})();
var len_24642 = path_24639.length;
var parent_obj_path_24643 = path_24639.slice((0),(len_24642 - (2)));
var key_24640 = (path_24639[(len_24642 - (1))]);
var mode_24641 = (path_24639[(len_24642 - (2))]);
var parent_obj_24644 = (function (){var path_24645 = parent_obj_path_24643;
var len_24646 = path_24645.length;
var i_24647 = (0);
var obj_24648 = obj;
while(true){
if((i_24647 < len_24646)){
var mode_24649 = (path_24645[i_24647]);
var key_24650 = (path_24645[(i_24647 + (1))]);
var next_obj_24651 = oops.core.get_key_dynamically(obj_24648,key_24650,mode_24649);
var G__24652 = mode_24649;
switch (G__24652) {
case (0):
var G__24654 = (i_24647 + (2));
var G__24655 = next_obj_24651;
i_24647 = G__24654;
obj_24648 = G__24655;
continue;

break;
case (1):
if(!((next_obj_24651 == null))){
var G__24656 = (i_24647 + (2));
var G__24657 = next_obj_24651;
i_24647 = G__24656;
obj_24648 = G__24657;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_24651 == null))){
var G__24658 = (i_24647 + (2));
var G__24659 = next_obj_24651;
i_24647 = G__24658;
obj_24648 = G__24659;
continue;
} else {
var G__24660 = (i_24647 + (2));
var G__24661 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_24648,key_24650) : oops.core.punch_key_dynamically_BANG_.call(null,obj_24648,key_24650));
i_24647 = G__24660;
obj_24648 = G__24661;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24652)].join('')));

}
} else {
return obj_24648;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_24644,key_24640,val,mode_24641);
});
