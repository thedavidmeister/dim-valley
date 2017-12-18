// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___13901 = arguments.length;
var i__9518__auto___13902 = (0);
while(true){
if((i__9518__auto___13902 < len__9517__auto___13901)){
args__9524__auto__.push((arguments[i__9518__auto___13902]));

var G__13903 = (i__9518__auto___13902 + (1));
i__9518__auto___13902 = G__13903;
=======
var args__9526__auto__ = [];
var len__9519__auto___15065 = arguments.length;
var i__9520__auto___15066 = (0);
while(true){
if((i__9520__auto___15066 < len__9519__auto___15065)){
args__9526__auto__.push((arguments[i__9520__auto___15066]));

var G__15067 = (i__9520__auto___15066 + (1));
i__9520__auto___15066 = G__15067;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13900){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13900));
=======
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq15064){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15064));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___13905 = arguments.length;
var i__9518__auto___13906 = (0);
while(true){
if((i__9518__auto___13906 < len__9517__auto___13905)){
args__9524__auto__.push((arguments[i__9518__auto___13906]));

var G__13907 = (i__9518__auto___13906 + (1));
i__9518__auto___13906 = G__13907;
=======
var args__9526__auto__ = [];
var len__9519__auto___15069 = arguments.length;
var i__9520__auto___15070 = (0);
while(true){
if((i__9520__auto___15070 < len__9519__auto___15069)){
args__9526__auto__.push((arguments[i__9520__auto___15070]));

var G__15071 = (i__9520__auto___15070 + (1));
i__9520__auto___15070 = G__15071;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13904){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13904));
});

var g_QMARK__13911 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq15068){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15068));
});

var g_QMARK__15075 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
<<<<<<< HEAD
var g_13912 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13911){
=======
var g_15076 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__15075){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
<<<<<<< HEAD
});})(g_QMARK__13911))
,null));
var mkg_13913 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13911,g_13912){
=======
});})(g_QMARK__15075))
,null));
var mkg_15077 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__15075,g_15076){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
<<<<<<< HEAD
});})(g_QMARK__13911,g_13912))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13911,g_13912,mkg_13913){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__13908 = cljs.core.deref(g_QMARK__13911);
return (fexpr__13908.cljs$core$IFn$_invoke$arity$1 ? fexpr__13908.cljs$core$IFn$_invoke$arity$1(x) : fexpr__13908.call(null,x));
});})(g_QMARK__13911,g_13912,mkg_13913))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13911,g_13912,mkg_13913){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__13909 = cljs.core.deref(mkg_13913);
return (fexpr__13909.cljs$core$IFn$_invoke$arity$1 ? fexpr__13909.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__13909.call(null,gfn));
});})(g_QMARK__13911,g_13912,mkg_13913))
=======
});})(g_QMARK__15075,g_15076))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__15075,g_15076,mkg_15077){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__15072 = cljs.core.deref(g_QMARK__15075);
return (fexpr__15072.cljs$core$IFn$_invoke$arity$1 ? fexpr__15072.cljs$core$IFn$_invoke$arity$1(x) : fexpr__15072.call(null,x));
});})(g_QMARK__15075,g_15076,mkg_15077))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__15075,g_15076,mkg_15077){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__15073 = cljs.core.deref(mkg_15077);
return (fexpr__15073.cljs$core$IFn$_invoke$arity$1 ? fexpr__15073.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__15073.call(null,gfn));
});})(g_QMARK__15075,g_15076,mkg_15077))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

/**
 * Generate a single value using generator.
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13911,g_13912,mkg_13913){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__13910 = cljs.core.deref(g_13912);
return (fexpr__13910.cljs$core$IFn$_invoke$arity$1 ? fexpr__13910.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__13910.call(null,generator));
});})(g_QMARK__13911,g_13912,mkg_13913))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__13914 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__13914.cljs$core$IFn$_invoke$arity$2 ? fexpr__13914.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__13914.call(null,rnd,size));
}));
});
var g__13872__auto___13934 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.generate = ((function (g_QMARK__15075,g_15076,mkg_15077){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__15074 = cljs.core.deref(g_15076);
return (fexpr__15074.cljs$core$IFn$_invoke$arity$1 ? fexpr__15074.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__15074.call(null,generator));
});})(g_QMARK__15075,g_15076,mkg_15077))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__15078 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__15078.cljs$core$IFn$_invoke$arity$2 ? fexpr__15078.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__15078.call(null,rnd,size));
}));
});
var g__15036__auto___15098 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.hash_map = ((function (g__13872__auto___13934){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13935 = arguments.length;
var i__9518__auto___13936 = (0);
while(true){
if((i__9518__auto___13936 < len__9517__auto___13935)){
args__9524__auto__.push((arguments[i__9518__auto___13936]));

var G__13937 = (i__9518__auto___13936 + (1));
i__9518__auto___13936 = G__13937;
=======
cljs.spec.gen.alpha.hash_map = ((function (g__15036__auto___15098){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15099 = arguments.length;
var i__9520__auto___15100 = (0);
while(true){
if((i__9520__auto___15100 < len__9519__auto___15099)){
args__9526__auto__.push((arguments[i__9520__auto___15100]));

var G__15101 = (i__9520__auto___15100 + (1));
i__9520__auto___15100 = G__15101;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13934))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13934){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13934),args);
});})(g__13872__auto___13934))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15098))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15098){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15098),args);
});})(g__15036__auto___15098))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__13872__auto___13934){
return (function (seq13915){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13915));
});})(g__13872__auto___13934))
;


var g__13872__auto___13938 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__15036__auto___15098){
return (function (seq15079){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15079));
});})(g__15036__auto___15098))
;


var g__15036__auto___15102 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.list = ((function (g__13872__auto___13938){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13939 = arguments.length;
var i__9518__auto___13940 = (0);
while(true){
if((i__9518__auto___13940 < len__9517__auto___13939)){
args__9524__auto__.push((arguments[i__9518__auto___13940]));

var G__13941 = (i__9518__auto___13940 + (1));
i__9518__auto___13940 = G__13941;
=======
cljs.spec.gen.alpha.list = ((function (g__15036__auto___15102){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15103 = arguments.length;
var i__9520__auto___15104 = (0);
while(true){
if((i__9520__auto___15104 < len__9519__auto___15103)){
args__9526__auto__.push((arguments[i__9520__auto___15104]));

var G__15105 = (i__9520__auto___15104 + (1));
i__9520__auto___15104 = G__15105;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13938))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13938){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13938),args);
});})(g__13872__auto___13938))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15102))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15102){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15102),args);
});})(g__15036__auto___15102))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__13872__auto___13938){
return (function (seq13916){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13916));
});})(g__13872__auto___13938))
;


var g__13872__auto___13942 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__15036__auto___15102){
return (function (seq15080){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15080));
});})(g__15036__auto___15102))
;


var g__15036__auto___15106 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.map = ((function (g__13872__auto___13942){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13943 = arguments.length;
var i__9518__auto___13944 = (0);
while(true){
if((i__9518__auto___13944 < len__9517__auto___13943)){
args__9524__auto__.push((arguments[i__9518__auto___13944]));

var G__13945 = (i__9518__auto___13944 + (1));
i__9518__auto___13944 = G__13945;
=======
cljs.spec.gen.alpha.map = ((function (g__15036__auto___15106){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15107 = arguments.length;
var i__9520__auto___15108 = (0);
while(true){
if((i__9520__auto___15108 < len__9519__auto___15107)){
args__9526__auto__.push((arguments[i__9520__auto___15108]));

var G__15109 = (i__9520__auto___15108 + (1));
i__9520__auto___15108 = G__15109;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13942))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13942){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13942),args);
});})(g__13872__auto___13942))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15106))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15106){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15106),args);
});})(g__15036__auto___15106))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__13872__auto___13942){
return (function (seq13917){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13917));
});})(g__13872__auto___13942))
;


var g__13872__auto___13946 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__15036__auto___15106){
return (function (seq15081){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15081));
});})(g__15036__auto___15106))
;


var g__15036__auto___15110 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.not_empty = ((function (g__13872__auto___13946){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13947 = arguments.length;
var i__9518__auto___13948 = (0);
while(true){
if((i__9518__auto___13948 < len__9517__auto___13947)){
args__9524__auto__.push((arguments[i__9518__auto___13948]));

var G__13949 = (i__9518__auto___13948 + (1));
i__9518__auto___13948 = G__13949;
=======
cljs.spec.gen.alpha.not_empty = ((function (g__15036__auto___15110){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15111 = arguments.length;
var i__9520__auto___15112 = (0);
while(true){
if((i__9520__auto___15112 < len__9519__auto___15111)){
args__9526__auto__.push((arguments[i__9520__auto___15112]));

var G__15113 = (i__9520__auto___15112 + (1));
i__9520__auto___15112 = G__15113;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13946))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13946){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13946),args);
});})(g__13872__auto___13946))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15110))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15110){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15110),args);
});})(g__15036__auto___15110))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__13872__auto___13946){
return (function (seq13918){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13918));
});})(g__13872__auto___13946))
;


var g__13872__auto___13950 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__15036__auto___15110){
return (function (seq15082){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15082));
});})(g__15036__auto___15110))
;


var g__15036__auto___15114 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.set = ((function (g__13872__auto___13950){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13951 = arguments.length;
var i__9518__auto___13952 = (0);
while(true){
if((i__9518__auto___13952 < len__9517__auto___13951)){
args__9524__auto__.push((arguments[i__9518__auto___13952]));

var G__13953 = (i__9518__auto___13952 + (1));
i__9518__auto___13952 = G__13953;
=======
cljs.spec.gen.alpha.set = ((function (g__15036__auto___15114){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15115 = arguments.length;
var i__9520__auto___15116 = (0);
while(true){
if((i__9520__auto___15116 < len__9519__auto___15115)){
args__9526__auto__.push((arguments[i__9520__auto___15116]));

var G__15117 = (i__9520__auto___15116 + (1));
i__9520__auto___15116 = G__15117;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13950))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13950){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13950),args);
});})(g__13872__auto___13950))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15114))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15114){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15114),args);
});})(g__15036__auto___15114))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__13872__auto___13950){
return (function (seq13919){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13919));
});})(g__13872__auto___13950))
;


var g__13872__auto___13954 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__15036__auto___15114){
return (function (seq15083){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15083));
});})(g__15036__auto___15114))
;


var g__15036__auto___15118 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector = ((function (g__13872__auto___13954){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13955 = arguments.length;
var i__9518__auto___13956 = (0);
while(true){
if((i__9518__auto___13956 < len__9517__auto___13955)){
args__9524__auto__.push((arguments[i__9518__auto___13956]));

var G__13957 = (i__9518__auto___13956 + (1));
i__9518__auto___13956 = G__13957;
=======
cljs.spec.gen.alpha.vector = ((function (g__15036__auto___15118){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15119 = arguments.length;
var i__9520__auto___15120 = (0);
while(true){
if((i__9520__auto___15120 < len__9519__auto___15119)){
args__9526__auto__.push((arguments[i__9520__auto___15120]));

var G__15121 = (i__9520__auto___15120 + (1));
i__9520__auto___15120 = G__15121;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13954))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13954){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13954),args);
});})(g__13872__auto___13954))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15118))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15118){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15118),args);
});})(g__15036__auto___15118))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__13872__auto___13954){
return (function (seq13920){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13920));
});})(g__13872__auto___13954))
;


var g__13872__auto___13958 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__15036__auto___15118){
return (function (seq15084){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15084));
});})(g__15036__auto___15118))
;


var g__15036__auto___15122 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.vector_distinct = ((function (g__13872__auto___13958){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13959 = arguments.length;
var i__9518__auto___13960 = (0);
while(true){
if((i__9518__auto___13960 < len__9517__auto___13959)){
args__9524__auto__.push((arguments[i__9518__auto___13960]));

var G__13961 = (i__9518__auto___13960 + (1));
i__9518__auto___13960 = G__13961;
=======
cljs.spec.gen.alpha.vector_distinct = ((function (g__15036__auto___15122){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15123 = arguments.length;
var i__9520__auto___15124 = (0);
while(true){
if((i__9520__auto___15124 < len__9519__auto___15123)){
args__9526__auto__.push((arguments[i__9520__auto___15124]));

var G__15125 = (i__9520__auto___15124 + (1));
i__9520__auto___15124 = G__15125;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13958))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13958){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13958),args);
});})(g__13872__auto___13958))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15122))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15122){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15122),args);
});})(g__15036__auto___15122))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__13872__auto___13958){
return (function (seq13921){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13921));
});})(g__13872__auto___13958))
;


var g__13872__auto___13962 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__15036__auto___15122){
return (function (seq15085){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15085));
});})(g__15036__auto___15122))
;


var g__15036__auto___15126 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.fmap = ((function (g__13872__auto___13962){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13963 = arguments.length;
var i__9518__auto___13964 = (0);
while(true){
if((i__9518__auto___13964 < len__9517__auto___13963)){
args__9524__auto__.push((arguments[i__9518__auto___13964]));

var G__13965 = (i__9518__auto___13964 + (1));
i__9518__auto___13964 = G__13965;
=======
cljs.spec.gen.alpha.fmap = ((function (g__15036__auto___15126){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15127 = arguments.length;
var i__9520__auto___15128 = (0);
while(true){
if((i__9520__auto___15128 < len__9519__auto___15127)){
args__9526__auto__.push((arguments[i__9520__auto___15128]));

var G__15129 = (i__9520__auto___15128 + (1));
i__9520__auto___15128 = G__15129;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13962))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13962){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13962),args);
});})(g__13872__auto___13962))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15126))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15126){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15126),args);
});})(g__15036__auto___15126))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__13872__auto___13962){
return (function (seq13922){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13922));
});})(g__13872__auto___13962))
;


var g__13872__auto___13966 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__15036__auto___15126){
return (function (seq15086){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15086));
});})(g__15036__auto___15126))
;


var g__15036__auto___15130 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.elements = ((function (g__13872__auto___13966){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13967 = arguments.length;
var i__9518__auto___13968 = (0);
while(true){
if((i__9518__auto___13968 < len__9517__auto___13967)){
args__9524__auto__.push((arguments[i__9518__auto___13968]));

var G__13969 = (i__9518__auto___13968 + (1));
i__9518__auto___13968 = G__13969;
=======
cljs.spec.gen.alpha.elements = ((function (g__15036__auto___15130){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15131 = arguments.length;
var i__9520__auto___15132 = (0);
while(true){
if((i__9520__auto___15132 < len__9519__auto___15131)){
args__9526__auto__.push((arguments[i__9520__auto___15132]));

var G__15133 = (i__9520__auto___15132 + (1));
i__9520__auto___15132 = G__15133;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13966))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13966){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13966),args);
});})(g__13872__auto___13966))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15130))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15130){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15130),args);
});})(g__15036__auto___15130))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__13872__auto___13966){
return (function (seq13923){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13923));
});})(g__13872__auto___13966))
;


var g__13872__auto___13970 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__15036__auto___15130){
return (function (seq15087){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15087));
});})(g__15036__auto___15130))
;


var g__15036__auto___15134 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.bind = ((function (g__13872__auto___13970){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13971 = arguments.length;
var i__9518__auto___13972 = (0);
while(true){
if((i__9518__auto___13972 < len__9517__auto___13971)){
args__9524__auto__.push((arguments[i__9518__auto___13972]));

var G__13973 = (i__9518__auto___13972 + (1));
i__9518__auto___13972 = G__13973;
=======
cljs.spec.gen.alpha.bind = ((function (g__15036__auto___15134){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15135 = arguments.length;
var i__9520__auto___15136 = (0);
while(true){
if((i__9520__auto___15136 < len__9519__auto___15135)){
args__9526__auto__.push((arguments[i__9520__auto___15136]));

var G__15137 = (i__9520__auto___15136 + (1));
i__9520__auto___15136 = G__15137;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13970))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13970){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13970),args);
});})(g__13872__auto___13970))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15134))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15134){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15134),args);
});})(g__15036__auto___15134))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__13872__auto___13970){
return (function (seq13924){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13924));
});})(g__13872__auto___13970))
;


var g__13872__auto___13974 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__15036__auto___15134){
return (function (seq15088){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15088));
});})(g__15036__auto___15134))
;


var g__15036__auto___15138 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.choose = ((function (g__13872__auto___13974){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13975 = arguments.length;
var i__9518__auto___13976 = (0);
while(true){
if((i__9518__auto___13976 < len__9517__auto___13975)){
args__9524__auto__.push((arguments[i__9518__auto___13976]));

var G__13977 = (i__9518__auto___13976 + (1));
i__9518__auto___13976 = G__13977;
=======
cljs.spec.gen.alpha.choose = ((function (g__15036__auto___15138){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15139 = arguments.length;
var i__9520__auto___15140 = (0);
while(true){
if((i__9520__auto___15140 < len__9519__auto___15139)){
args__9526__auto__.push((arguments[i__9520__auto___15140]));

var G__15141 = (i__9520__auto___15140 + (1));
i__9520__auto___15140 = G__15141;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13974))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13974){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13974),args);
});})(g__13872__auto___13974))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15138))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15138){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15138),args);
});})(g__15036__auto___15138))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__13872__auto___13974){
return (function (seq13925){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13925));
});})(g__13872__auto___13974))
;


var g__13872__auto___13978 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__15036__auto___15138){
return (function (seq15089){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15089));
});})(g__15036__auto___15138))
;


var g__15036__auto___15142 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.one_of = ((function (g__13872__auto___13978){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13979 = arguments.length;
var i__9518__auto___13980 = (0);
while(true){
if((i__9518__auto___13980 < len__9517__auto___13979)){
args__9524__auto__.push((arguments[i__9518__auto___13980]));

var G__13981 = (i__9518__auto___13980 + (1));
i__9518__auto___13980 = G__13981;
=======
cljs.spec.gen.alpha.one_of = ((function (g__15036__auto___15142){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15143 = arguments.length;
var i__9520__auto___15144 = (0);
while(true){
if((i__9520__auto___15144 < len__9519__auto___15143)){
args__9526__auto__.push((arguments[i__9520__auto___15144]));

var G__15145 = (i__9520__auto___15144 + (1));
i__9520__auto___15144 = G__15145;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13978))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13978){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13978),args);
});})(g__13872__auto___13978))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15142))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15142){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15142),args);
});})(g__15036__auto___15142))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__13872__auto___13978){
return (function (seq13926){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13926));
});})(g__13872__auto___13978))
;


var g__13872__auto___13982 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__15036__auto___15142){
return (function (seq15090){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15090));
});})(g__15036__auto___15142))
;


var g__15036__auto___15146 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.such_that = ((function (g__13872__auto___13982){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13983 = arguments.length;
var i__9518__auto___13984 = (0);
while(true){
if((i__9518__auto___13984 < len__9517__auto___13983)){
args__9524__auto__.push((arguments[i__9518__auto___13984]));

var G__13985 = (i__9518__auto___13984 + (1));
i__9518__auto___13984 = G__13985;
=======
cljs.spec.gen.alpha.such_that = ((function (g__15036__auto___15146){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15147 = arguments.length;
var i__9520__auto___15148 = (0);
while(true){
if((i__9520__auto___15148 < len__9519__auto___15147)){
args__9526__auto__.push((arguments[i__9520__auto___15148]));

var G__15149 = (i__9520__auto___15148 + (1));
i__9520__auto___15148 = G__15149;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13982))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13982){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13982),args);
});})(g__13872__auto___13982))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15146))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15146){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15146),args);
});})(g__15036__auto___15146))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__13872__auto___13982){
return (function (seq13927){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13927));
});})(g__13872__auto___13982))
;


var g__13872__auto___13986 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__15036__auto___15146){
return (function (seq15091){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15091));
});})(g__15036__auto___15146))
;


var g__15036__auto___15150 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.tuple = ((function (g__13872__auto___13986){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13987 = arguments.length;
var i__9518__auto___13988 = (0);
while(true){
if((i__9518__auto___13988 < len__9517__auto___13987)){
args__9524__auto__.push((arguments[i__9518__auto___13988]));

var G__13989 = (i__9518__auto___13988 + (1));
i__9518__auto___13988 = G__13989;
=======
cljs.spec.gen.alpha.tuple = ((function (g__15036__auto___15150){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15151 = arguments.length;
var i__9520__auto___15152 = (0);
while(true){
if((i__9520__auto___15152 < len__9519__auto___15151)){
args__9526__auto__.push((arguments[i__9520__auto___15152]));

var G__15153 = (i__9520__auto___15152 + (1));
i__9520__auto___15152 = G__15153;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13986))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13986){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13986),args);
});})(g__13872__auto___13986))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15150))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15150){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15150),args);
});})(g__15036__auto___15150))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__13872__auto___13986){
return (function (seq13928){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13928));
});})(g__13872__auto___13986))
;


var g__13872__auto___13990 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__15036__auto___15150){
return (function (seq15092){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15092));
});})(g__15036__auto___15150))
;


var g__15036__auto___15154 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.sample = ((function (g__13872__auto___13990){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13991 = arguments.length;
var i__9518__auto___13992 = (0);
while(true){
if((i__9518__auto___13992 < len__9517__auto___13991)){
args__9524__auto__.push((arguments[i__9518__auto___13992]));

var G__13993 = (i__9518__auto___13992 + (1));
i__9518__auto___13992 = G__13993;
=======
cljs.spec.gen.alpha.sample = ((function (g__15036__auto___15154){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15155 = arguments.length;
var i__9520__auto___15156 = (0);
while(true){
if((i__9520__auto___15156 < len__9519__auto___15155)){
args__9526__auto__.push((arguments[i__9520__auto___15156]));

var G__15157 = (i__9520__auto___15156 + (1));
i__9520__auto___15156 = G__15157;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13990))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13990){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13990),args);
});})(g__13872__auto___13990))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15154))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15154){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15154),args);
});})(g__15036__auto___15154))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__13872__auto___13990){
return (function (seq13929){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13929));
});})(g__13872__auto___13990))
;


var g__13872__auto___13994 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__15036__auto___15154){
return (function (seq15093){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15093));
});})(g__15036__auto___15154))
;


var g__15036__auto___15158 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.return$ = ((function (g__13872__auto___13994){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13995 = arguments.length;
var i__9518__auto___13996 = (0);
while(true){
if((i__9518__auto___13996 < len__9517__auto___13995)){
args__9524__auto__.push((arguments[i__9518__auto___13996]));

var G__13997 = (i__9518__auto___13996 + (1));
i__9518__auto___13996 = G__13997;
=======
cljs.spec.gen.alpha.return$ = ((function (g__15036__auto___15158){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15159 = arguments.length;
var i__9520__auto___15160 = (0);
while(true){
if((i__9520__auto___15160 < len__9519__auto___15159)){
args__9526__auto__.push((arguments[i__9520__auto___15160]));

var G__15161 = (i__9520__auto___15160 + (1));
i__9520__auto___15160 = G__15161;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13994))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13994){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13994),args);
});})(g__13872__auto___13994))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15158))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15158){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15158),args);
});})(g__15036__auto___15158))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__13872__auto___13994){
return (function (seq13930){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13930));
});})(g__13872__auto___13994))
;


var g__13872__auto___13998 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__15036__auto___15158){
return (function (seq15094){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15094));
});})(g__15036__auto___15158))
;


var g__15036__auto___15162 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__13872__auto___13998){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___13999 = arguments.length;
var i__9518__auto___14000 = (0);
while(true){
if((i__9518__auto___14000 < len__9517__auto___13999)){
args__9524__auto__.push((arguments[i__9518__auto___14000]));

var G__14001 = (i__9518__auto___14000 + (1));
i__9518__auto___14000 = G__14001;
=======
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__15036__auto___15162){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15163 = arguments.length;
var i__9520__auto___15164 = (0);
while(true){
if((i__9520__auto___15164 < len__9519__auto___15163)){
args__9526__auto__.push((arguments[i__9520__auto___15164]));

var G__15165 = (i__9520__auto___15164 + (1));
i__9520__auto___15164 = G__15165;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___13998))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___13998){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___13998),args);
});})(g__13872__auto___13998))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15162))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15162){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15162),args);
});})(g__15036__auto___15162))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13872__auto___13998){
return (function (seq13931){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13931));
});})(g__13872__auto___13998))
;


var g__13872__auto___14002 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__15036__auto___15162){
return (function (seq15095){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15095));
});})(g__15036__auto___15162))
;


var g__15036__auto___15166 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.double_STAR_ = ((function (g__13872__auto___14002){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14003 = arguments.length;
var i__9518__auto___14004 = (0);
while(true){
if((i__9518__auto___14004 < len__9517__auto___14003)){
args__9524__auto__.push((arguments[i__9518__auto___14004]));

var G__14005 = (i__9518__auto___14004 + (1));
i__9518__auto___14004 = G__14005;
=======
cljs.spec.gen.alpha.double_STAR_ = ((function (g__15036__auto___15166){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15167 = arguments.length;
var i__9520__auto___15168 = (0);
while(true){
if((i__9520__auto___15168 < len__9519__auto___15167)){
args__9526__auto__.push((arguments[i__9520__auto___15168]));

var G__15169 = (i__9520__auto___15168 + (1));
i__9520__auto___15168 = G__15169;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___14002))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___14002){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___14002),args);
});})(g__13872__auto___14002))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15166))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15166){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15166),args);
});})(g__15036__auto___15166))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__13872__auto___14002){
return (function (seq13932){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13932));
});})(g__13872__auto___14002))
;


var g__13872__auto___14006 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__15036__auto___15166){
return (function (seq15096){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15096));
});})(g__15036__auto___15166))
;


var g__15036__auto___15170 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.frequency = ((function (g__13872__auto___14006){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14007 = arguments.length;
var i__9518__auto___14008 = (0);
while(true){
if((i__9518__auto___14008 < len__9517__auto___14007)){
args__9524__auto__.push((arguments[i__9518__auto___14008]));

var G__14009 = (i__9518__auto___14008 + (1));
i__9518__auto___14008 = G__14009;
=======
cljs.spec.gen.alpha.frequency = ((function (g__15036__auto___15170){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15171 = arguments.length;
var i__9520__auto___15172 = (0);
while(true){
if((i__9520__auto___15172 < len__9519__auto___15171)){
args__9526__auto__.push((arguments[i__9520__auto___15172]));

var G__15173 = (i__9520__auto___15172 + (1));
i__9520__auto___15172 = G__15173;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13872__auto___14006))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13872__auto___14006){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__13872__auto___14006),args);
});})(g__13872__auto___14006))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15036__auto___15170))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15036__auto___15170){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__15036__auto___15170),args);
});})(g__15036__auto___15170))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__13872__auto___14006){
return (function (seq13933){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13933));
});})(g__13872__auto___14006))
;

var g__13885__auto___14031 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__15036__auto___15170){
return (function (seq15097){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15097));
});})(g__15036__auto___15170))
;

var g__15049__auto___15195 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.any = ((function (g__13885__auto___14031){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14032 = arguments.length;
var i__9518__auto___14033 = (0);
while(true){
if((i__9518__auto___14033 < len__9517__auto___14032)){
args__9524__auto__.push((arguments[i__9518__auto___14033]));

var G__14034 = (i__9518__auto___14033 + (1));
i__9518__auto___14033 = G__14034;
=======
cljs.spec.gen.alpha.any = ((function (g__15049__auto___15195){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15196 = arguments.length;
var i__9520__auto___15197 = (0);
while(true){
if((i__9520__auto___15197 < len__9519__auto___15196)){
args__9526__auto__.push((arguments[i__9520__auto___15197]));

var G__15198 = (i__9520__auto___15197 + (1));
i__9520__auto___15197 = G__15198;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14031))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14031){
return (function (args){
return cljs.core.deref(g__13885__auto___14031);
});})(g__13885__auto___14031))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15195))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15195){
return (function (args){
return cljs.core.deref(g__15049__auto___15195);
});})(g__15049__auto___15195))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__13885__auto___14031){
return (function (seq14010){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14010));
});})(g__13885__auto___14031))
;


var g__13885__auto___14035 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__15049__auto___15195){
return (function (seq15174){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15174));
});})(g__15049__auto___15195))
;


var g__15049__auto___15199 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.any_printable = ((function (g__13885__auto___14035){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14036 = arguments.length;
var i__9518__auto___14037 = (0);
while(true){
if((i__9518__auto___14037 < len__9517__auto___14036)){
args__9524__auto__.push((arguments[i__9518__auto___14037]));

var G__14038 = (i__9518__auto___14037 + (1));
i__9518__auto___14037 = G__14038;
=======
cljs.spec.gen.alpha.any_printable = ((function (g__15049__auto___15199){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15200 = arguments.length;
var i__9520__auto___15201 = (0);
while(true){
if((i__9520__auto___15201 < len__9519__auto___15200)){
args__9526__auto__.push((arguments[i__9520__auto___15201]));

var G__15202 = (i__9520__auto___15201 + (1));
i__9520__auto___15201 = G__15202;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14035))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14035){
return (function (args){
return cljs.core.deref(g__13885__auto___14035);
});})(g__13885__auto___14035))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15199))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15199){
return (function (args){
return cljs.core.deref(g__15049__auto___15199);
});})(g__15049__auto___15199))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__13885__auto___14035){
return (function (seq14011){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14011));
});})(g__13885__auto___14035))
;


var g__13885__auto___14039 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__15049__auto___15199){
return (function (seq15175){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15175));
});})(g__15049__auto___15199))
;


var g__15049__auto___15203 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.boolean$ = ((function (g__13885__auto___14039){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14040 = arguments.length;
var i__9518__auto___14041 = (0);
while(true){
if((i__9518__auto___14041 < len__9517__auto___14040)){
args__9524__auto__.push((arguments[i__9518__auto___14041]));

var G__14042 = (i__9518__auto___14041 + (1));
i__9518__auto___14041 = G__14042;
=======
cljs.spec.gen.alpha.boolean$ = ((function (g__15049__auto___15203){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15204 = arguments.length;
var i__9520__auto___15205 = (0);
while(true){
if((i__9520__auto___15205 < len__9519__auto___15204)){
args__9526__auto__.push((arguments[i__9520__auto___15205]));

var G__15206 = (i__9520__auto___15205 + (1));
i__9520__auto___15205 = G__15206;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14039))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14039){
return (function (args){
return cljs.core.deref(g__13885__auto___14039);
});})(g__13885__auto___14039))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15203))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15203){
return (function (args){
return cljs.core.deref(g__15049__auto___15203);
});})(g__15049__auto___15203))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__13885__auto___14039){
return (function (seq14012){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14012));
});})(g__13885__auto___14039))
;


var g__13885__auto___14043 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__15049__auto___15203){
return (function (seq15176){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15176));
});})(g__15049__auto___15203))
;


var g__15049__auto___15207 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char$ = ((function (g__13885__auto___14043){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14044 = arguments.length;
var i__9518__auto___14045 = (0);
while(true){
if((i__9518__auto___14045 < len__9517__auto___14044)){
args__9524__auto__.push((arguments[i__9518__auto___14045]));

var G__14046 = (i__9518__auto___14045 + (1));
i__9518__auto___14045 = G__14046;
=======
cljs.spec.gen.alpha.char$ = ((function (g__15049__auto___15207){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15208 = arguments.length;
var i__9520__auto___15209 = (0);
while(true){
if((i__9520__auto___15209 < len__9519__auto___15208)){
args__9526__auto__.push((arguments[i__9520__auto___15209]));

var G__15210 = (i__9520__auto___15209 + (1));
i__9520__auto___15209 = G__15210;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14043))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14043){
return (function (args){
return cljs.core.deref(g__13885__auto___14043);
});})(g__13885__auto___14043))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15207))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15207){
return (function (args){
return cljs.core.deref(g__15049__auto___15207);
});})(g__15049__auto___15207))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__13885__auto___14043){
return (function (seq14013){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14013));
});})(g__13885__auto___14043))
;


var g__13885__auto___14047 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__15049__auto___15207){
return (function (seq15177){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15177));
});})(g__15049__auto___15207))
;


var g__15049__auto___15211 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alpha = ((function (g__13885__auto___14047){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14048 = arguments.length;
var i__9518__auto___14049 = (0);
while(true){
if((i__9518__auto___14049 < len__9517__auto___14048)){
args__9524__auto__.push((arguments[i__9518__auto___14049]));

var G__14050 = (i__9518__auto___14049 + (1));
i__9518__auto___14049 = G__14050;
=======
cljs.spec.gen.alpha.char_alpha = ((function (g__15049__auto___15211){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15212 = arguments.length;
var i__9520__auto___15213 = (0);
while(true){
if((i__9520__auto___15213 < len__9519__auto___15212)){
args__9526__auto__.push((arguments[i__9520__auto___15213]));

var G__15214 = (i__9520__auto___15213 + (1));
i__9520__auto___15213 = G__15214;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14047))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14047){
return (function (args){
return cljs.core.deref(g__13885__auto___14047);
});})(g__13885__auto___14047))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15211))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15211){
return (function (args){
return cljs.core.deref(g__15049__auto___15211);
});})(g__15049__auto___15211))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__13885__auto___14047){
return (function (seq14014){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14014));
});})(g__13885__auto___14047))
;


var g__13885__auto___14051 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__15049__auto___15211){
return (function (seq15178){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15178));
});})(g__15049__auto___15211))
;


var g__15049__auto___15215 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__13885__auto___14051){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14052 = arguments.length;
var i__9518__auto___14053 = (0);
while(true){
if((i__9518__auto___14053 < len__9517__auto___14052)){
args__9524__auto__.push((arguments[i__9518__auto___14053]));

var G__14054 = (i__9518__auto___14053 + (1));
i__9518__auto___14053 = G__14054;
=======
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__15049__auto___15215){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15216 = arguments.length;
var i__9520__auto___15217 = (0);
while(true){
if((i__9520__auto___15217 < len__9519__auto___15216)){
args__9526__auto__.push((arguments[i__9520__auto___15217]));

var G__15218 = (i__9520__auto___15217 + (1));
i__9520__auto___15217 = G__15218;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14051))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14051){
return (function (args){
return cljs.core.deref(g__13885__auto___14051);
});})(g__13885__auto___14051))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15215))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15215){
return (function (args){
return cljs.core.deref(g__15049__auto___15215);
});})(g__15049__auto___15215))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__13885__auto___14051){
return (function (seq14015){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14015));
});})(g__13885__auto___14051))
;


var g__13885__auto___14055 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__15049__auto___15215){
return (function (seq15179){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15179));
});})(g__15049__auto___15215))
;


var g__15049__auto___15219 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.char_ascii = ((function (g__13885__auto___14055){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14056 = arguments.length;
var i__9518__auto___14057 = (0);
while(true){
if((i__9518__auto___14057 < len__9517__auto___14056)){
args__9524__auto__.push((arguments[i__9518__auto___14057]));

var G__14058 = (i__9518__auto___14057 + (1));
i__9518__auto___14057 = G__14058;
=======
cljs.spec.gen.alpha.char_ascii = ((function (g__15049__auto___15219){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15220 = arguments.length;
var i__9520__auto___15221 = (0);
while(true){
if((i__9520__auto___15221 < len__9519__auto___15220)){
args__9526__auto__.push((arguments[i__9520__auto___15221]));

var G__15222 = (i__9520__auto___15221 + (1));
i__9520__auto___15221 = G__15222;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14055))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14055){
return (function (args){
return cljs.core.deref(g__13885__auto___14055);
});})(g__13885__auto___14055))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15219))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15219){
return (function (args){
return cljs.core.deref(g__15049__auto___15219);
});})(g__15049__auto___15219))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__13885__auto___14055){
return (function (seq14016){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14016));
});})(g__13885__auto___14055))
;


var g__13885__auto___14059 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__15049__auto___15219){
return (function (seq15180){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15180));
});})(g__15049__auto___15219))
;


var g__15049__auto___15223 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.double$ = ((function (g__13885__auto___14059){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14060 = arguments.length;
var i__9518__auto___14061 = (0);
while(true){
if((i__9518__auto___14061 < len__9517__auto___14060)){
args__9524__auto__.push((arguments[i__9518__auto___14061]));

var G__14062 = (i__9518__auto___14061 + (1));
i__9518__auto___14061 = G__14062;
=======
cljs.spec.gen.alpha.double$ = ((function (g__15049__auto___15223){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15224 = arguments.length;
var i__9520__auto___15225 = (0);
while(true){
if((i__9520__auto___15225 < len__9519__auto___15224)){
args__9526__auto__.push((arguments[i__9520__auto___15225]));

var G__15226 = (i__9520__auto___15225 + (1));
i__9520__auto___15225 = G__15226;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14059))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14059){
return (function (args){
return cljs.core.deref(g__13885__auto___14059);
});})(g__13885__auto___14059))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15223))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15223){
return (function (args){
return cljs.core.deref(g__15049__auto___15223);
});})(g__15049__auto___15223))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__13885__auto___14059){
return (function (seq14017){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14017));
});})(g__13885__auto___14059))
;


var g__13885__auto___14063 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__15049__auto___15223){
return (function (seq15181){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15181));
});})(g__15049__auto___15223))
;


var g__15049__auto___15227 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.int$ = ((function (g__13885__auto___14063){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14064 = arguments.length;
var i__9518__auto___14065 = (0);
while(true){
if((i__9518__auto___14065 < len__9517__auto___14064)){
args__9524__auto__.push((arguments[i__9518__auto___14065]));

var G__14066 = (i__9518__auto___14065 + (1));
i__9518__auto___14065 = G__14066;
=======
cljs.spec.gen.alpha.int$ = ((function (g__15049__auto___15227){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15228 = arguments.length;
var i__9520__auto___15229 = (0);
while(true){
if((i__9520__auto___15229 < len__9519__auto___15228)){
args__9526__auto__.push((arguments[i__9520__auto___15229]));

var G__15230 = (i__9520__auto___15229 + (1));
i__9520__auto___15229 = G__15230;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14063))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14063){
return (function (args){
return cljs.core.deref(g__13885__auto___14063);
});})(g__13885__auto___14063))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15227))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15227){
return (function (args){
return cljs.core.deref(g__15049__auto___15227);
});})(g__15049__auto___15227))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__13885__auto___14063){
return (function (seq14018){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14018));
});})(g__13885__auto___14063))
;


var g__13885__auto___14067 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__15049__auto___15227){
return (function (seq15182){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15182));
});})(g__15049__auto___15227))
;


var g__15049__auto___15231 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword = ((function (g__13885__auto___14067){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14068 = arguments.length;
var i__9518__auto___14069 = (0);
while(true){
if((i__9518__auto___14069 < len__9517__auto___14068)){
args__9524__auto__.push((arguments[i__9518__auto___14069]));

var G__14070 = (i__9518__auto___14069 + (1));
i__9518__auto___14069 = G__14070;
=======
cljs.spec.gen.alpha.keyword = ((function (g__15049__auto___15231){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15232 = arguments.length;
var i__9520__auto___15233 = (0);
while(true){
if((i__9520__auto___15233 < len__9519__auto___15232)){
args__9526__auto__.push((arguments[i__9520__auto___15233]));

var G__15234 = (i__9520__auto___15233 + (1));
i__9520__auto___15233 = G__15234;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14067))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14067){
return (function (args){
return cljs.core.deref(g__13885__auto___14067);
});})(g__13885__auto___14067))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15231))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15231){
return (function (args){
return cljs.core.deref(g__15049__auto___15231);
});})(g__15049__auto___15231))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__13885__auto___14067){
return (function (seq14019){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14019));
});})(g__13885__auto___14067))
;


var g__13885__auto___14071 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__15049__auto___15231){
return (function (seq15183){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15183));
});})(g__15049__auto___15231))
;


var g__15049__auto___15235 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.keyword_ns = ((function (g__13885__auto___14071){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14072 = arguments.length;
var i__9518__auto___14073 = (0);
while(true){
if((i__9518__auto___14073 < len__9517__auto___14072)){
args__9524__auto__.push((arguments[i__9518__auto___14073]));

var G__14074 = (i__9518__auto___14073 + (1));
i__9518__auto___14073 = G__14074;
=======
cljs.spec.gen.alpha.keyword_ns = ((function (g__15049__auto___15235){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15236 = arguments.length;
var i__9520__auto___15237 = (0);
while(true){
if((i__9520__auto___15237 < len__9519__auto___15236)){
args__9526__auto__.push((arguments[i__9520__auto___15237]));

var G__15238 = (i__9520__auto___15237 + (1));
i__9520__auto___15237 = G__15238;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14071))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14071){
return (function (args){
return cljs.core.deref(g__13885__auto___14071);
});})(g__13885__auto___14071))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15235))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15235){
return (function (args){
return cljs.core.deref(g__15049__auto___15235);
});})(g__15049__auto___15235))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__13885__auto___14071){
return (function (seq14020){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14020));
});})(g__13885__auto___14071))
;


var g__13885__auto___14075 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__15049__auto___15235){
return (function (seq15184){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15184));
});})(g__15049__auto___15235))
;


var g__15049__auto___15239 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer = ((function (g__13885__auto___14075){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14076 = arguments.length;
var i__9518__auto___14077 = (0);
while(true){
if((i__9518__auto___14077 < len__9517__auto___14076)){
args__9524__auto__.push((arguments[i__9518__auto___14077]));

var G__14078 = (i__9518__auto___14077 + (1));
i__9518__auto___14077 = G__14078;
=======
cljs.spec.gen.alpha.large_integer = ((function (g__15049__auto___15239){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15240 = arguments.length;
var i__9520__auto___15241 = (0);
while(true){
if((i__9520__auto___15241 < len__9519__auto___15240)){
args__9526__auto__.push((arguments[i__9520__auto___15241]));

var G__15242 = (i__9520__auto___15241 + (1));
i__9520__auto___15241 = G__15242;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14075))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14075){
return (function (args){
return cljs.core.deref(g__13885__auto___14075);
});})(g__13885__auto___14075))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15239))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15239){
return (function (args){
return cljs.core.deref(g__15049__auto___15239);
});})(g__15049__auto___15239))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__13885__auto___14075){
return (function (seq14021){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14021));
});})(g__13885__auto___14075))
;


var g__13885__auto___14079 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__15049__auto___15239){
return (function (seq15185){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15185));
});})(g__15049__auto___15239))
;


var g__15049__auto___15243 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.ratio = ((function (g__13885__auto___14079){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14080 = arguments.length;
var i__9518__auto___14081 = (0);
while(true){
if((i__9518__auto___14081 < len__9517__auto___14080)){
args__9524__auto__.push((arguments[i__9518__auto___14081]));

var G__14082 = (i__9518__auto___14081 + (1));
i__9518__auto___14081 = G__14082;
=======
cljs.spec.gen.alpha.ratio = ((function (g__15049__auto___15243){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15244 = arguments.length;
var i__9520__auto___15245 = (0);
while(true){
if((i__9520__auto___15245 < len__9519__auto___15244)){
args__9526__auto__.push((arguments[i__9520__auto___15245]));

var G__15246 = (i__9520__auto___15245 + (1));
i__9520__auto___15245 = G__15246;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14079))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14079){
return (function (args){
return cljs.core.deref(g__13885__auto___14079);
});})(g__13885__auto___14079))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15243))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15243){
return (function (args){
return cljs.core.deref(g__15049__auto___15243);
});})(g__15049__auto___15243))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__13885__auto___14079){
return (function (seq14022){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14022));
});})(g__13885__auto___14079))
;


var g__13885__auto___14083 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__15049__auto___15243){
return (function (seq15186){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15186));
});})(g__15049__auto___15243))
;


var g__15049__auto___15247 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type = ((function (g__13885__auto___14083){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14084 = arguments.length;
var i__9518__auto___14085 = (0);
while(true){
if((i__9518__auto___14085 < len__9517__auto___14084)){
args__9524__auto__.push((arguments[i__9518__auto___14085]));

var G__14086 = (i__9518__auto___14085 + (1));
i__9518__auto___14085 = G__14086;
=======
cljs.spec.gen.alpha.simple_type = ((function (g__15049__auto___15247){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15248 = arguments.length;
var i__9520__auto___15249 = (0);
while(true){
if((i__9520__auto___15249 < len__9519__auto___15248)){
args__9526__auto__.push((arguments[i__9520__auto___15249]));

var G__15250 = (i__9520__auto___15249 + (1));
i__9520__auto___15249 = G__15250;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14083))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14083){
return (function (args){
return cljs.core.deref(g__13885__auto___14083);
});})(g__13885__auto___14083))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15247))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15247){
return (function (args){
return cljs.core.deref(g__15049__auto___15247);
});})(g__15049__auto___15247))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__13885__auto___14083){
return (function (seq14023){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14023));
});})(g__13885__auto___14083))
;


var g__13885__auto___14087 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__15049__auto___15247){
return (function (seq15187){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15187));
});})(g__15049__auto___15247))
;


var g__15049__auto___15251 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type_printable = ((function (g__13885__auto___14087){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14088 = arguments.length;
var i__9518__auto___14089 = (0);
while(true){
if((i__9518__auto___14089 < len__9517__auto___14088)){
args__9524__auto__.push((arguments[i__9518__auto___14089]));

var G__14090 = (i__9518__auto___14089 + (1));
i__9518__auto___14089 = G__14090;
=======
cljs.spec.gen.alpha.simple_type_printable = ((function (g__15049__auto___15251){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15252 = arguments.length;
var i__9520__auto___15253 = (0);
while(true){
if((i__9520__auto___15253 < len__9519__auto___15252)){
args__9526__auto__.push((arguments[i__9520__auto___15253]));

var G__15254 = (i__9520__auto___15253 + (1));
i__9520__auto___15253 = G__15254;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14087))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14087){
return (function (args){
return cljs.core.deref(g__13885__auto___14087);
});})(g__13885__auto___14087))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15251))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15251){
return (function (args){
return cljs.core.deref(g__15049__auto___15251);
});})(g__15049__auto___15251))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__13885__auto___14087){
return (function (seq14024){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14024));
});})(g__13885__auto___14087))
;


var g__13885__auto___14091 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__15049__auto___15251){
return (function (seq15188){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15188));
});})(g__15049__auto___15251))
;


var g__15049__auto___15255 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string = ((function (g__13885__auto___14091){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14092 = arguments.length;
var i__9518__auto___14093 = (0);
while(true){
if((i__9518__auto___14093 < len__9517__auto___14092)){
args__9524__auto__.push((arguments[i__9518__auto___14093]));

var G__14094 = (i__9518__auto___14093 + (1));
i__9518__auto___14093 = G__14094;
=======
cljs.spec.gen.alpha.string = ((function (g__15049__auto___15255){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15256 = arguments.length;
var i__9520__auto___15257 = (0);
while(true){
if((i__9520__auto___15257 < len__9519__auto___15256)){
args__9526__auto__.push((arguments[i__9520__auto___15257]));

var G__15258 = (i__9520__auto___15257 + (1));
i__9520__auto___15257 = G__15258;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14091))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14091){
return (function (args){
return cljs.core.deref(g__13885__auto___14091);
});})(g__13885__auto___14091))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15255))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15255){
return (function (args){
return cljs.core.deref(g__15049__auto___15255);
});})(g__15049__auto___15255))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__13885__auto___14091){
return (function (seq14025){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14025));
});})(g__13885__auto___14091))
;


var g__13885__auto___14095 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__15049__auto___15255){
return (function (seq15189){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15189));
});})(g__15049__auto___15255))
;


var g__15049__auto___15259 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_ascii = ((function (g__13885__auto___14095){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14096 = arguments.length;
var i__9518__auto___14097 = (0);
while(true){
if((i__9518__auto___14097 < len__9517__auto___14096)){
args__9524__auto__.push((arguments[i__9518__auto___14097]));

var G__14098 = (i__9518__auto___14097 + (1));
i__9518__auto___14097 = G__14098;
=======
cljs.spec.gen.alpha.string_ascii = ((function (g__15049__auto___15259){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15260 = arguments.length;
var i__9520__auto___15261 = (0);
while(true){
if((i__9520__auto___15261 < len__9519__auto___15260)){
args__9526__auto__.push((arguments[i__9520__auto___15261]));

var G__15262 = (i__9520__auto___15261 + (1));
i__9520__auto___15261 = G__15262;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14095))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14095){
return (function (args){
return cljs.core.deref(g__13885__auto___14095);
});})(g__13885__auto___14095))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15259))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15259){
return (function (args){
return cljs.core.deref(g__15049__auto___15259);
});})(g__15049__auto___15259))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__13885__auto___14095){
return (function (seq14026){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14026));
});})(g__13885__auto___14095))
;


var g__13885__auto___14099 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__15049__auto___15259){
return (function (seq15190){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15190));
});})(g__15049__auto___15259))
;


var g__15049__auto___15263 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__13885__auto___14099){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14100 = arguments.length;
var i__9518__auto___14101 = (0);
while(true){
if((i__9518__auto___14101 < len__9517__auto___14100)){
args__9524__auto__.push((arguments[i__9518__auto___14101]));

var G__14102 = (i__9518__auto___14101 + (1));
i__9518__auto___14101 = G__14102;
=======
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__15049__auto___15263){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15264 = arguments.length;
var i__9520__auto___15265 = (0);
while(true){
if((i__9520__auto___15265 < len__9519__auto___15264)){
args__9526__auto__.push((arguments[i__9520__auto___15265]));

var G__15266 = (i__9520__auto___15265 + (1));
i__9520__auto___15265 = G__15266;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14099))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14099){
return (function (args){
return cljs.core.deref(g__13885__auto___14099);
});})(g__13885__auto___14099))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15263))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15263){
return (function (args){
return cljs.core.deref(g__15049__auto___15263);
});})(g__15049__auto___15263))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__13885__auto___14099){
return (function (seq14027){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14027));
});})(g__13885__auto___14099))
;


var g__13885__auto___14103 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__15049__auto___15263){
return (function (seq15191){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15191));
});})(g__15049__auto___15263))
;


var g__15049__auto___15267 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol = ((function (g__13885__auto___14103){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14104 = arguments.length;
var i__9518__auto___14105 = (0);
while(true){
if((i__9518__auto___14105 < len__9517__auto___14104)){
args__9524__auto__.push((arguments[i__9518__auto___14105]));

var G__14106 = (i__9518__auto___14105 + (1));
i__9518__auto___14105 = G__14106;
=======
cljs.spec.gen.alpha.symbol = ((function (g__15049__auto___15267){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15268 = arguments.length;
var i__9520__auto___15269 = (0);
while(true){
if((i__9520__auto___15269 < len__9519__auto___15268)){
args__9526__auto__.push((arguments[i__9520__auto___15269]));

var G__15270 = (i__9520__auto___15269 + (1));
i__9520__auto___15269 = G__15270;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14103))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14103){
return (function (args){
return cljs.core.deref(g__13885__auto___14103);
});})(g__13885__auto___14103))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15267))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15267){
return (function (args){
return cljs.core.deref(g__15049__auto___15267);
});})(g__15049__auto___15267))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__13885__auto___14103){
return (function (seq14028){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14028));
});})(g__13885__auto___14103))
;


var g__13885__auto___14107 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__15049__auto___15267){
return (function (seq15192){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15192));
});})(g__15049__auto___15267))
;


var g__15049__auto___15271 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.symbol_ns = ((function (g__13885__auto___14107){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14108 = arguments.length;
var i__9518__auto___14109 = (0);
while(true){
if((i__9518__auto___14109 < len__9517__auto___14108)){
args__9524__auto__.push((arguments[i__9518__auto___14109]));

var G__14110 = (i__9518__auto___14109 + (1));
i__9518__auto___14109 = G__14110;
=======
cljs.spec.gen.alpha.symbol_ns = ((function (g__15049__auto___15271){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15272 = arguments.length;
var i__9520__auto___15273 = (0);
while(true){
if((i__9520__auto___15273 < len__9519__auto___15272)){
args__9526__auto__.push((arguments[i__9520__auto___15273]));

var G__15274 = (i__9520__auto___15273 + (1));
i__9520__auto___15273 = G__15274;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14107))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14107){
return (function (args){
return cljs.core.deref(g__13885__auto___14107);
});})(g__13885__auto___14107))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15271))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15271){
return (function (args){
return cljs.core.deref(g__15049__auto___15271);
});})(g__15049__auto___15271))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__13885__auto___14107){
return (function (seq14029){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14029));
});})(g__13885__auto___14107))
;


var g__13885__auto___14111 = (new cljs.spec.gen.alpha.LazyVar((function (){
=======
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__15049__auto___15271){
return (function (seq15193){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15193));
});})(g__15049__auto___15271))
;


var g__15049__auto___15275 = (new cljs.spec.gen.alpha.LazyVar((function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
<<<<<<< HEAD
cljs.spec.gen.alpha.uuid = ((function (g__13885__auto___14111){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9524__auto__ = [];
var len__9517__auto___14112 = arguments.length;
var i__9518__auto___14113 = (0);
while(true){
if((i__9518__auto___14113 < len__9517__auto___14112)){
args__9524__auto__.push((arguments[i__9518__auto___14113]));

var G__14114 = (i__9518__auto___14113 + (1));
i__9518__auto___14113 = G__14114;
=======
cljs.spec.gen.alpha.uuid = ((function (g__15049__auto___15275){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9526__auto__ = [];
var len__9519__auto___15276 = arguments.length;
var i__9520__auto___15277 = (0);
while(true){
if((i__9520__auto___15277 < len__9519__auto___15276)){
args__9526__auto__.push((arguments[i__9520__auto___15277]));

var G__15278 = (i__9520__auto___15277 + (1));
i__9520__auto___15277 = G__15278;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});})(g__13885__auto___14111))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13885__auto___14111){
return (function (args){
return cljs.core.deref(g__13885__auto___14111);
});})(g__13885__auto___14111))
=======
var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});})(g__15049__auto___15275))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__15049__auto___15275){
return (function (args){
return cljs.core.deref(g__15049__auto___15275);
});})(g__15049__auto___15275))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__13885__auto___14111){
return (function (seq14030){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14030));
});})(g__13885__auto___14111))
=======
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__15049__auto___15275){
return (function (seq15194){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15194));
});})(g__15049__auto___15275))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___14117 = arguments.length;
var i__9518__auto___14118 = (0);
while(true){
if((i__9518__auto___14118 < len__9517__auto___14117)){
args__9524__auto__.push((arguments[i__9518__auto___14118]));

var G__14119 = (i__9518__auto___14118 + (1));
i__9518__auto___14118 = G__14119;
=======
var args__9526__auto__ = [];
var len__9519__auto___15281 = arguments.length;
var i__9520__auto___15282 = (0);
while(true){
if((i__9520__auto___15282 < len__9519__auto___15281)){
args__9526__auto__.push((arguments[i__9520__auto___15282]));

var G__15283 = (i__9520__auto___15282 + (1));
i__9520__auto___15282 = G__15283;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
<<<<<<< HEAD
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__14115_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14115_SHARP_);
=======
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__15279_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__15279_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

<<<<<<< HEAD
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14116){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14116));
=======
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq15280){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15280));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
<<<<<<< HEAD
return (function (p1__14120_SHARP_){
return (new Date(p1__14120_SHARP_));
=======
return (function (p1__15284_SHARP_){
return (new Date(p1__15284_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
