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
var len__9519__auto___14926 = arguments.length;
var i__9520__auto___14927 = (0);
while(true){
if((i__9520__auto___14927 < len__9519__auto___14926)){
args__9526__auto__.push((arguments[i__9520__auto___14927]));

var G__14928 = (i__9520__auto___14927 + (1));
i__9520__auto___14927 = G__14928;
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

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq14924){
var G__14925 = cljs.core.first(seq14924);
var seq14924__$1 = cljs.core.next(seq14924);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14925,seq14924__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14936 = arguments.length;
var i__9520__auto___14937 = (0);
while(true){
if((i__9520__auto___14937 < len__9519__auto___14936)){
args__9526__auto__.push((arguments[i__9520__auto___14937]));

var G__14938 = (i__9520__auto___14937 + (1));
i__9520__auto___14937 = G__14938;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14931){
var vec__14932 = p__14931;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14932,(0),null);
var G__14935 = (function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__14935) : key.call(null,G__14935));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq14929){
var G__14930 = cljs.core.first(seq14929);
var seq14929__$1 = cljs.core.next(seq14929);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__14930,seq14929__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14945 = arguments.length;
var i__9520__auto___14946 = (0);
while(true){
if((i__9520__auto___14946 < len__9519__auto___14945)){
args__9526__auto__.push((arguments[i__9520__auto___14946]));

var G__14947 = (i__9520__auto___14946 + (1));
i__9520__auto___14946 = G__14947;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14941){
var vec__14942 = p__14941;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14942,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__8242__auto__ = config;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq14939){
var G__14940 = cljs.core.first(seq14939);
var seq14939__$1 = cljs.core.next(seq14939);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14940,seq14939__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14953 = arguments.length;
var i__9520__auto___14954 = (0);
while(true){
if((i__9520__auto___14954 < len__9519__auto___14953)){
args__9526__auto__.push((arguments[i__9520__auto___14954]));

var G__14955 = (i__9520__auto___14954 + (1));
i__9520__auto___14954 = G__14955;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14949){
var vec__14950 = p__14949;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14950,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq14948){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14948));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14961 = arguments.length;
var i__9520__auto___14962 = (0);
while(true){
if((i__9520__auto___14962 < len__9519__auto___14961)){
args__9526__auto__.push((arguments[i__9520__auto___14962]));

var G__14963 = (i__9520__auto___14962 + (1));
i__9520__auto___14962 = G__14963;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14957){
var vec__14958 = p__14957;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq14956){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14956));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14969 = arguments.length;
var i__9520__auto___14970 = (0);
while(true){
if((i__9520__auto___14970 < len__9519__auto___14969)){
args__9526__auto__.push((arguments[i__9520__auto___14970]));

var G__14971 = (i__9520__auto___14970 + (1));
i__9520__auto___14970 = G__14971;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14965){
var vec__14966 = p__14965;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq14964){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14964));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14977 = arguments.length;
var i__9520__auto___14978 = (0);
while(true){
if((i__9520__auto___14978 < len__9519__auto___14977)){
args__9526__auto__.push((arguments[i__9520__auto___14978]));

var G__14979 = (i__9520__auto___14978 + (1));
i__9520__auto___14978 = G__14979;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__14973){
var vec__14974 = p__14973;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14974,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq14972){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14972));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14985 = arguments.length;
var i__9520__auto___14986 = (0);
while(true){
if((i__9520__auto___14986 < len__9519__auto___14985)){
args__9526__auto__.push((arguments[i__9520__auto___14986]));

var G__14987 = (i__9520__auto___14986 + (1));
i__9520__auto___14986 = G__14987;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14981){
var vec__14982 = p__14981;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14982,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq14980){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14980));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14993 = arguments.length;
var i__9520__auto___14994 = (0);
while(true){
if((i__9520__auto___14994 < len__9519__auto___14993)){
args__9526__auto__.push((arguments[i__9520__auto___14994]));

var G__14995 = (i__9520__auto___14994 + (1));
i__9520__auto___14994 = G__14995;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14989){
var vec__14990 = p__14989;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq14988){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14988));
});

