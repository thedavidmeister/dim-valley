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
var args__9524__auto__ = [];
var len__9517__auto___19841 = arguments.length;
var i__9518__auto___19842 = (0);
while(true){
if((i__9518__auto___19842 < len__9517__auto___19841)){
args__9524__auto__.push((arguments[i__9518__auto___19842]));

var G__19843 = (i__9518__auto___19842 + (1));
i__9518__auto___19842 = G__19843;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19839){
var G__19840 = cljs.core.first(seq19839);
var seq19839__$1 = cljs.core.next(seq19839);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19840,seq19839__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19851 = arguments.length;
var i__9518__auto___19852 = (0);
while(true){
if((i__9518__auto___19852 < len__9517__auto___19851)){
args__9524__auto__.push((arguments[i__9518__auto___19852]));

var G__19853 = (i__9518__auto___19852 + (1));
i__9518__auto___19852 = G__19853;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19846){
var vec__19847 = p__19846;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19847,(0),null);
var G__19850 = (function (){var or__8240__auto__ = config;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19850) : key.call(null,G__19850));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq19844){
var G__19845 = cljs.core.first(seq19844);
var seq19844__$1 = cljs.core.next(seq19844);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__19845,seq19844__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19860 = arguments.length;
var i__9518__auto___19861 = (0);
while(true){
if((i__9518__auto___19861 < len__9517__auto___19860)){
args__9524__auto__.push((arguments[i__9518__auto___19861]));

var G__19862 = (i__9518__auto___19861 + (1));
i__9518__auto___19861 = G__19862;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19856){
var vec__19857 = p__19856;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19857,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8240__auto__ = config;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19854){
var G__19855 = cljs.core.first(seq19854);
var seq19854__$1 = cljs.core.next(seq19854);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__19855,seq19854__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19868 = arguments.length;
var i__9518__auto___19869 = (0);
while(true){
if((i__9518__auto___19869 < len__9517__auto___19868)){
args__9524__auto__.push((arguments[i__9518__auto___19869]));

var G__19870 = (i__9518__auto___19869 + (1));
i__9518__auto___19869 = G__19870;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19864){
var vec__19865 = p__19864;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19865,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19863){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19863));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19876 = arguments.length;
var i__9518__auto___19877 = (0);
while(true){
if((i__9518__auto___19877 < len__9517__auto___19876)){
args__9524__auto__.push((arguments[i__9518__auto___19877]));

var G__19878 = (i__9518__auto___19877 + (1));
i__9518__auto___19877 = G__19878;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19872){
var vec__19873 = p__19872;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19873,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19871){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19871));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19884 = arguments.length;
var i__9518__auto___19885 = (0);
while(true){
if((i__9518__auto___19885 < len__9517__auto___19884)){
args__9524__auto__.push((arguments[i__9518__auto___19885]));

var G__19886 = (i__9518__auto___19885 + (1));
i__9518__auto___19885 = G__19886;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19880){
var vec__19881 = p__19880;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19881,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19879){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19879));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19892 = arguments.length;
var i__9518__auto___19893 = (0);
while(true){
if((i__9518__auto___19893 < len__9517__auto___19892)){
args__9524__auto__.push((arguments[i__9518__auto___19893]));

var G__19894 = (i__9518__auto___19893 + (1));
i__9518__auto___19893 = G__19894;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19888){
var vec__19889 = p__19888;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19889,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19887){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19887));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19900 = arguments.length;
var i__9518__auto___19901 = (0);
while(true){
if((i__9518__auto___19901 < len__9517__auto___19900)){
args__9524__auto__.push((arguments[i__9518__auto___19901]));

var G__19902 = (i__9518__auto___19901 + (1));
i__9518__auto___19901 = G__19902;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19896){
var vec__19897 = p__19896;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19895){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19895));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___19908 = arguments.length;
var i__9518__auto___19909 = (0);
while(true){
if((i__9518__auto___19909 < len__9517__auto___19908)){
args__9524__auto__.push((arguments[i__9518__auto___19909]));

var G__19910 = (i__9518__auto___19909 + (1));
i__9518__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19904){
var vec__19905 = p__19904;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19905,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19903){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19903));
});

