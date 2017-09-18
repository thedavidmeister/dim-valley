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
var len__9519__auto___19835 = arguments.length;
var i__9520__auto___19836 = (0);
while(true){
if((i__9520__auto___19836 < len__9519__auto___19835)){
args__9526__auto__.push((arguments[i__9520__auto___19836]));

var G__19837 = (i__9520__auto___19836 + (1));
i__9520__auto___19836 = G__19837;
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

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19833){
var G__19834 = cljs.core.first(seq19833);
var seq19833__$1 = cljs.core.next(seq19833);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19834,seq19833__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19845 = arguments.length;
var i__9520__auto___19846 = (0);
while(true){
if((i__9520__auto___19846 < len__9519__auto___19845)){
args__9526__auto__.push((arguments[i__9520__auto___19846]));

var G__19847 = (i__9520__auto___19846 + (1));
i__9520__auto___19846 = G__19847;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19840){
var vec__19841 = p__19840;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19841,(0),null);
var G__19844 = (function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19844) : key.call(null,G__19844));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq19838){
var G__19839 = cljs.core.first(seq19838);
var seq19838__$1 = cljs.core.next(seq19838);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__19839,seq19838__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19854 = arguments.length;
var i__9520__auto___19855 = (0);
while(true){
if((i__9520__auto___19855 < len__9519__auto___19854)){
args__9526__auto__.push((arguments[i__9520__auto___19855]));

var G__19856 = (i__9520__auto___19855 + (1));
i__9520__auto___19855 = G__19856;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19850){
var vec__19851 = p__19850;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19851,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19848){
var G__19849 = cljs.core.first(seq19848);
var seq19848__$1 = cljs.core.next(seq19848);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__19849,seq19848__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19862 = arguments.length;
var i__9520__auto___19863 = (0);
while(true){
if((i__9520__auto___19863 < len__9519__auto___19862)){
args__9526__auto__.push((arguments[i__9520__auto___19863]));

var G__19864 = (i__9520__auto___19863 + (1));
i__9520__auto___19863 = G__19864;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19858){
var vec__19859 = p__19858;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19859,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19857){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19857));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19870 = arguments.length;
var i__9520__auto___19871 = (0);
while(true){
if((i__9520__auto___19871 < len__9519__auto___19870)){
args__9526__auto__.push((arguments[i__9520__auto___19871]));

var G__19872 = (i__9520__auto___19871 + (1));
i__9520__auto___19871 = G__19872;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19866){
var vec__19867 = p__19866;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19865){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19865));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19878 = arguments.length;
var i__9520__auto___19879 = (0);
while(true){
if((i__9520__auto___19879 < len__9519__auto___19878)){
args__9526__auto__.push((arguments[i__9520__auto___19879]));

var G__19880 = (i__9520__auto___19879 + (1));
i__9520__auto___19879 = G__19880;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19874){
var vec__19875 = p__19874;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19875,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19873){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19873));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19886 = arguments.length;
var i__9520__auto___19887 = (0);
while(true){
if((i__9520__auto___19887 < len__9519__auto___19886)){
args__9526__auto__.push((arguments[i__9520__auto___19887]));

var G__19888 = (i__9520__auto___19887 + (1));
i__9520__auto___19887 = G__19888;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19882){
var vec__19883 = p__19882;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19881){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19881));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19894 = arguments.length;
var i__9520__auto___19895 = (0);
while(true){
if((i__9520__auto___19895 < len__9519__auto___19894)){
args__9526__auto__.push((arguments[i__9520__auto___19895]));

var G__19896 = (i__9520__auto___19895 + (1));
i__9520__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19890){
var vec__19891 = p__19890;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19891,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19889){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19889));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___19902 = arguments.length;
var i__9520__auto___19903 = (0);
while(true){
if((i__9520__auto___19903 < len__9519__auto___19902)){
args__9526__auto__.push((arguments[i__9520__auto___19903]));

var G__19904 = (i__9520__auto___19903 + (1));
i__9520__auto___19903 = G__19904;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19898){
var vec__19899 = p__19898;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19899,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19897){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19897));
});

