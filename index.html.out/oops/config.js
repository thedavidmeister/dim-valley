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
var len__9519__auto___19735 = arguments.length;
var i__9520__auto___19736 = (0);
while(true){
if((i__9520__auto___19736 < len__9519__auto___19735)){
args__9526__auto__.push((arguments[i__9520__auto___19736]));

var G__19737 = (i__9520__auto___19736 + (1));
i__9520__auto___19736 = G__19737;
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

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19733){
var G__19734 = cljs.core.first(seq19733);
var seq19733__$1 = cljs.core.next(seq19733);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19734,seq19733__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19745 = arguments.length;
var i__9520__auto___19746 = (0);
while(true){
if((i__9520__auto___19746 < len__9519__auto___19745)){
args__9526__auto__.push((arguments[i__9520__auto___19746]));

var G__19747 = (i__9520__auto___19746 + (1));
i__9520__auto___19746 = G__19747;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19740){
var vec__19741 = p__19740;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19741,(0),null);
var G__19744 = (function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19744) : key.call(null,G__19744));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq19738){
var G__19739 = cljs.core.first(seq19738);
var seq19738__$1 = cljs.core.next(seq19738);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__19739,seq19738__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19754 = arguments.length;
var i__9520__auto___19755 = (0);
while(true){
if((i__9520__auto___19755 < len__9519__auto___19754)){
args__9526__auto__.push((arguments[i__9520__auto___19755]));

var G__19756 = (i__9520__auto___19755 + (1));
i__9520__auto___19755 = G__19756;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19750){
var vec__19751 = p__19750;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19751,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19748){
var G__19749 = cljs.core.first(seq19748);
var seq19748__$1 = cljs.core.next(seq19748);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__19749,seq19748__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19762 = arguments.length;
var i__9520__auto___19763 = (0);
while(true){
if((i__9520__auto___19763 < len__9519__auto___19762)){
args__9526__auto__.push((arguments[i__9520__auto___19763]));

var G__19764 = (i__9520__auto___19763 + (1));
i__9520__auto___19763 = G__19764;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19758){
var vec__19759 = p__19758;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19759,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19757){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19757));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19770 = arguments.length;
var i__9520__auto___19771 = (0);
while(true){
if((i__9520__auto___19771 < len__9519__auto___19770)){
args__9526__auto__.push((arguments[i__9520__auto___19771]));

var G__19772 = (i__9520__auto___19771 + (1));
i__9520__auto___19771 = G__19772;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19766){
var vec__19767 = p__19766;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19767,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19765){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19765));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19778 = arguments.length;
var i__9520__auto___19779 = (0);
while(true){
if((i__9520__auto___19779 < len__9519__auto___19778)){
args__9526__auto__.push((arguments[i__9520__auto___19779]));

var G__19780 = (i__9520__auto___19779 + (1));
i__9520__auto___19779 = G__19780;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19774){
var vec__19775 = p__19774;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19775,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19773){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19773));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19786 = arguments.length;
var i__9520__auto___19787 = (0);
while(true){
if((i__9520__auto___19787 < len__9519__auto___19786)){
args__9526__auto__.push((arguments[i__9520__auto___19787]));

var G__19788 = (i__9520__auto___19787 + (1));
i__9520__auto___19787 = G__19788;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19782){
var vec__19783 = p__19782;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19783,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19781){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19781));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19794 = arguments.length;
var i__9520__auto___19795 = (0);
while(true){
if((i__9520__auto___19795 < len__9519__auto___19794)){
args__9526__auto__.push((arguments[i__9520__auto___19795]));

var G__19796 = (i__9520__auto___19795 + (1));
i__9520__auto___19795 = G__19796;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19790){
var vec__19791 = p__19790;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19791,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19789){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19789));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19802 = arguments.length;
var i__9520__auto___19803 = (0);
while(true){
if((i__9520__auto___19803 < len__9519__auto___19802)){
args__9526__auto__.push((arguments[i__9520__auto___19803]));

var G__19804 = (i__9520__auto___19803 + (1));
i__9520__auto___19803 = G__19804;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19798){
var vec__19799 = p__19798;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19799,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19797){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19797));
});

