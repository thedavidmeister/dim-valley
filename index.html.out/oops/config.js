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
var args__9526__auto__ = [];
var len__9519__auto___19739 = arguments.length;
var i__9520__auto___19740 = (0);
while(true){
if((i__9520__auto___19740 < len__9519__auto___19739)){
args__9526__auto__.push((arguments[i__9520__auto___19740]));

var G__19741 = (i__9520__auto___19740 + (1));
i__9520__auto___19740 = G__19741;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19737){
var G__19738 = cljs.core.first(seq19737);
var seq19737__$1 = cljs.core.next(seq19737);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19738,seq19737__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19749 = arguments.length;
var i__9520__auto___19750 = (0);
while(true){
if((i__9520__auto___19750 < len__9519__auto___19749)){
args__9526__auto__.push((arguments[i__9520__auto___19750]));

var G__19751 = (i__9520__auto___19750 + (1));
i__9520__auto___19750 = G__19751;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19744){
var vec__19745 = p__19744;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19745,(0),null);
var G__19748 = (function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19748) : key.call(null,G__19748));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq19742){
var G__19743 = cljs.core.first(seq19742);
var seq19742__$1 = cljs.core.next(seq19742);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__19743,seq19742__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19758 = arguments.length;
var i__9520__auto___19759 = (0);
while(true){
if((i__9520__auto___19759 < len__9519__auto___19758)){
args__9526__auto__.push((arguments[i__9520__auto___19759]));

var G__19760 = (i__9520__auto___19759 + (1));
i__9520__auto___19759 = G__19760;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19754){
var vec__19755 = p__19754;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19755,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19752){
var G__19753 = cljs.core.first(seq19752);
var seq19752__$1 = cljs.core.next(seq19752);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__19753,seq19752__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19766 = arguments.length;
var i__9520__auto___19767 = (0);
while(true){
if((i__9520__auto___19767 < len__9519__auto___19766)){
args__9526__auto__.push((arguments[i__9520__auto___19767]));

var G__19768 = (i__9520__auto___19767 + (1));
i__9520__auto___19767 = G__19768;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19762){
var vec__19763 = p__19762;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19763,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19761){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19761));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19774 = arguments.length;
var i__9520__auto___19775 = (0);
while(true){
if((i__9520__auto___19775 < len__9519__auto___19774)){
args__9526__auto__.push((arguments[i__9520__auto___19775]));

var G__19776 = (i__9520__auto___19775 + (1));
i__9520__auto___19775 = G__19776;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19770){
var vec__19771 = p__19770;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19771,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19769){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19769));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19782 = arguments.length;
var i__9520__auto___19783 = (0);
while(true){
if((i__9520__auto___19783 < len__9519__auto___19782)){
args__9526__auto__.push((arguments[i__9520__auto___19783]));

var G__19784 = (i__9520__auto___19783 + (1));
i__9520__auto___19783 = G__19784;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19778){
var vec__19779 = p__19778;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19779,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19777){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19777));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19790 = arguments.length;
var i__9520__auto___19791 = (0);
while(true){
if((i__9520__auto___19791 < len__9519__auto___19790)){
args__9526__auto__.push((arguments[i__9520__auto___19791]));

var G__19792 = (i__9520__auto___19791 + (1));
i__9520__auto___19791 = G__19792;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19786){
var vec__19787 = p__19786;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19787,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19785){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19785));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19798 = arguments.length;
var i__9520__auto___19799 = (0);
while(true){
if((i__9520__auto___19799 < len__9519__auto___19798)){
args__9526__auto__.push((arguments[i__9520__auto___19799]));

var G__19800 = (i__9520__auto___19799 + (1));
i__9520__auto___19799 = G__19800;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19794){
var vec__19795 = p__19794;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19795,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19793){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19793));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19806 = arguments.length;
var i__9520__auto___19807 = (0);
while(true){
if((i__9520__auto___19807 < len__9519__auto___19806)){
args__9526__auto__.push((arguments[i__9520__auto___19807]));

var G__19808 = (i__9520__auto___19807 + (1));
i__9520__auto___19807 = G__19808;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19802){
var vec__19803 = p__19802;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19803,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19801){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19801));
});

