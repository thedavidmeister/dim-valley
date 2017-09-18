// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20126 = arguments.length;
var i__9916__auto___20127 = (0);
while(true){
if((i__9916__auto___20127 < len__9915__auto___20126)){
args__9922__auto__.push((arguments[i__9916__auto___20127]));

var G__20128 = (i__9916__auto___20127 + (1));
i__9916__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq20124){
var G__20125 = cljs.core.first(seq20124);
var seq20124__$1 = cljs.core.next(seq20124);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20125,seq20124__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20136 = arguments.length;
var i__9916__auto___20137 = (0);
while(true){
if((i__9916__auto___20137 < len__9915__auto___20136)){
args__9922__auto__.push((arguments[i__9916__auto___20137]));

var G__20138 = (i__9916__auto___20137 + (1));
i__9916__auto___20137 = G__20138;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__20131){
var vec__20132 = p__20131;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132,(0),null);
var G__20135 = (function (){var or__8638__auto__ = config;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__20135) : key.call(null,G__20135));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq20129){
var G__20130 = cljs.core.first(seq20129);
var seq20129__$1 = cljs.core.next(seq20129);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__20130,seq20129__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20145 = arguments.length;
var i__9916__auto___20146 = (0);
while(true){
if((i__9916__auto___20146 < len__9915__auto___20145)){
args__9922__auto__.push((arguments[i__9916__auto___20146]));

var G__20147 = (i__9916__auto___20146 + (1));
i__9916__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__20141){
var vec__20142 = p__20141;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20142,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8638__auto__ = config;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq20139){
var G__20140 = cljs.core.first(seq20139);
var seq20139__$1 = cljs.core.next(seq20139);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__20140,seq20139__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20153 = arguments.length;
var i__9916__auto___20154 = (0);
while(true){
if((i__9916__auto___20154 < len__9915__auto___20153)){
args__9922__auto__.push((arguments[i__9916__auto___20154]));

var G__20155 = (i__9916__auto___20154 + (1));
i__9916__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__20149){
var vec__20150 = p__20149;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20150,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq20148){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20148));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20161 = arguments.length;
var i__9916__auto___20162 = (0);
while(true){
if((i__9916__auto___20162 < len__9915__auto___20161)){
args__9922__auto__.push((arguments[i__9916__auto___20162]));

var G__20163 = (i__9916__auto___20162 + (1));
i__9916__auto___20162 = G__20163;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__20157){
var vec__20158 = p__20157;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20158,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq20156){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20156));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20169 = arguments.length;
var i__9916__auto___20170 = (0);
while(true){
if((i__9916__auto___20170 < len__9915__auto___20169)){
args__9922__auto__.push((arguments[i__9916__auto___20170]));

var G__20171 = (i__9916__auto___20170 + (1));
i__9916__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__20165){
var vec__20166 = p__20165;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20166,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq20164){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20164));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20177 = arguments.length;
var i__9916__auto___20178 = (0);
while(true){
if((i__9916__auto___20178 < len__9915__auto___20177)){
args__9922__auto__.push((arguments[i__9916__auto___20178]));

var G__20179 = (i__9916__auto___20178 + (1));
i__9916__auto___20178 = G__20179;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__20173){
var vec__20174 = p__20173;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq20172){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20172));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20185 = arguments.length;
var i__9916__auto___20186 = (0);
while(true){
if((i__9916__auto___20186 < len__9915__auto___20185)){
args__9922__auto__.push((arguments[i__9916__auto___20186]));

var G__20187 = (i__9916__auto___20186 + (1));
i__9916__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20181){
var vec__20182 = p__20181;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20182,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq20180){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20180));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20193 = arguments.length;
var i__9916__auto___20194 = (0);
while(true){
if((i__9916__auto___20194 < len__9915__auto___20193)){
args__9922__auto__.push((arguments[i__9916__auto___20194]));

var G__20195 = (i__9916__auto___20194 + (1));
i__9916__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20189){
var vec__20190 = p__20189;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20190,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq20188){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20188));
});

