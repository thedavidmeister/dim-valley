// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
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

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22002 = arguments.length;
var i__8982__auto___22003 = (0);
while(true){
if((i__8982__auto___22003 < len__8981__auto___22002)){
args__8988__auto__.push((arguments[i__8982__auto___22003]));

var G__22004 = (i__8982__auto___22003 + (1));
i__8982__auto___22003 = G__22004;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq22001){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22001));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22006 = arguments.length;
var i__8982__auto___22007 = (0);
while(true){
if((i__8982__auto___22007 < len__8981__auto___22006)){
args__8988__auto__.push((arguments[i__8982__auto___22007]));

var G__22008 = (i__8982__auto___22007 + (1));
i__8982__auto___22007 = G__22008;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq22005){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22005));
});

var g_QMARK__22009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_22010 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22009){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22009))
,null));
var mkg_22011 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22009,g_22010){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22009,g_22010))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__22009,g_22010,mkg_22011){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__22009) : cljs.core.deref.call(null,g_QMARK__22009)).call(null,x);
});})(g_QMARK__22009,g_22010,mkg_22011))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__22009,g_22010,mkg_22011){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_22011) : cljs.core.deref.call(null,mkg_22011)).call(null,gfn);
});})(g_QMARK__22009,g_22010,mkg_22011))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__22009,g_22010,mkg_22011){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_22010) : cljs.core.deref.call(null,g_22010)).call(null,generator);
});})(g_QMARK__22009,g_22010,mkg_22011))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__21973__auto___22031 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21973__auto___22031){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22032 = arguments.length;
var i__8982__auto___22033 = (0);
while(true){
if((i__8982__auto___22033 < len__8981__auto___22032)){
args__8988__auto__.push((arguments[i__8982__auto___22033]));

var G__22034 = (i__8982__auto___22033 + (1));
i__8982__auto___22033 = G__22034;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22031))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22031){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22031) : cljs.core.deref.call(null,g__21973__auto___22031)),args);
});})(g__21973__auto___22031))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21973__auto___22031){
return (function (seq22012){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22012));
});})(g__21973__auto___22031))
;


var g__21973__auto___22035 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21973__auto___22035){
return (function cljs$spec$impl$gen$list(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22036 = arguments.length;
var i__8982__auto___22037 = (0);
while(true){
if((i__8982__auto___22037 < len__8981__auto___22036)){
args__8988__auto__.push((arguments[i__8982__auto___22037]));

var G__22038 = (i__8982__auto___22037 + (1));
i__8982__auto___22037 = G__22038;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22035))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22035){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22035) : cljs.core.deref.call(null,g__21973__auto___22035)),args);
});})(g__21973__auto___22035))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21973__auto___22035){
return (function (seq22013){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22013));
});})(g__21973__auto___22035))
;


var g__21973__auto___22039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21973__auto___22039){
return (function cljs$spec$impl$gen$map(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22040 = arguments.length;
var i__8982__auto___22041 = (0);
while(true){
if((i__8982__auto___22041 < len__8981__auto___22040)){
args__8988__auto__.push((arguments[i__8982__auto___22041]));

var G__22042 = (i__8982__auto___22041 + (1));
i__8982__auto___22041 = G__22042;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22039))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22039){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22039) : cljs.core.deref.call(null,g__21973__auto___22039)),args);
});})(g__21973__auto___22039))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21973__auto___22039){
return (function (seq22014){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22014));
});})(g__21973__auto___22039))
;


var g__21973__auto___22043 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21973__auto___22043){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22044 = arguments.length;
var i__8982__auto___22045 = (0);
while(true){
if((i__8982__auto___22045 < len__8981__auto___22044)){
args__8988__auto__.push((arguments[i__8982__auto___22045]));

var G__22046 = (i__8982__auto___22045 + (1));
i__8982__auto___22045 = G__22046;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22043))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22043){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22043) : cljs.core.deref.call(null,g__21973__auto___22043)),args);
});})(g__21973__auto___22043))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21973__auto___22043){
return (function (seq22015){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22015));
});})(g__21973__auto___22043))
;


var g__21973__auto___22047 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21973__auto___22047){
return (function cljs$spec$impl$gen$set(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22048 = arguments.length;
var i__8982__auto___22049 = (0);
while(true){
if((i__8982__auto___22049 < len__8981__auto___22048)){
args__8988__auto__.push((arguments[i__8982__auto___22049]));

var G__22050 = (i__8982__auto___22049 + (1));
i__8982__auto___22049 = G__22050;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22047))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22047){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22047) : cljs.core.deref.call(null,g__21973__auto___22047)),args);
});})(g__21973__auto___22047))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21973__auto___22047){
return (function (seq22016){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22016));
});})(g__21973__auto___22047))
;


var g__21973__auto___22051 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21973__auto___22051){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22052 = arguments.length;
var i__8982__auto___22053 = (0);
while(true){
if((i__8982__auto___22053 < len__8981__auto___22052)){
args__8988__auto__.push((arguments[i__8982__auto___22053]));

var G__22054 = (i__8982__auto___22053 + (1));
i__8982__auto___22053 = G__22054;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22051))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22051){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22051) : cljs.core.deref.call(null,g__21973__auto___22051)),args);
});})(g__21973__auto___22051))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21973__auto___22051){
return (function (seq22017){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22017));
});})(g__21973__auto___22051))
;


var g__21973__auto___22055 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21973__auto___22055){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22056 = arguments.length;
var i__8982__auto___22057 = (0);
while(true){
if((i__8982__auto___22057 < len__8981__auto___22056)){
args__8988__auto__.push((arguments[i__8982__auto___22057]));

var G__22058 = (i__8982__auto___22057 + (1));
i__8982__auto___22057 = G__22058;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22055))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22055){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22055) : cljs.core.deref.call(null,g__21973__auto___22055)),args);
});})(g__21973__auto___22055))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21973__auto___22055){
return (function (seq22018){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22018));
});})(g__21973__auto___22055))
;


var g__21973__auto___22059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21973__auto___22059){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22060 = arguments.length;
var i__8982__auto___22061 = (0);
while(true){
if((i__8982__auto___22061 < len__8981__auto___22060)){
args__8988__auto__.push((arguments[i__8982__auto___22061]));

var G__22062 = (i__8982__auto___22061 + (1));
i__8982__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22059))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22059){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22059) : cljs.core.deref.call(null,g__21973__auto___22059)),args);
});})(g__21973__auto___22059))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21973__auto___22059){
return (function (seq22019){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22019));
});})(g__21973__auto___22059))
;


var g__21973__auto___22063 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21973__auto___22063){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22064 = arguments.length;
var i__8982__auto___22065 = (0);
while(true){
if((i__8982__auto___22065 < len__8981__auto___22064)){
args__8988__auto__.push((arguments[i__8982__auto___22065]));

var G__22066 = (i__8982__auto___22065 + (1));
i__8982__auto___22065 = G__22066;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22063))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22063){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22063) : cljs.core.deref.call(null,g__21973__auto___22063)),args);
});})(g__21973__auto___22063))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21973__auto___22063){
return (function (seq22020){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22020));
});})(g__21973__auto___22063))
;


var g__21973__auto___22067 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21973__auto___22067){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22068 = arguments.length;
var i__8982__auto___22069 = (0);
while(true){
if((i__8982__auto___22069 < len__8981__auto___22068)){
args__8988__auto__.push((arguments[i__8982__auto___22069]));

var G__22070 = (i__8982__auto___22069 + (1));
i__8982__auto___22069 = G__22070;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22067))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22067){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22067) : cljs.core.deref.call(null,g__21973__auto___22067)),args);
});})(g__21973__auto___22067))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21973__auto___22067){
return (function (seq22021){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22021));
});})(g__21973__auto___22067))
;


var g__21973__auto___22071 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21973__auto___22071){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22072 = arguments.length;
var i__8982__auto___22073 = (0);
while(true){
if((i__8982__auto___22073 < len__8981__auto___22072)){
args__8988__auto__.push((arguments[i__8982__auto___22073]));

var G__22074 = (i__8982__auto___22073 + (1));
i__8982__auto___22073 = G__22074;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22071))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22071){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22071) : cljs.core.deref.call(null,g__21973__auto___22071)),args);
});})(g__21973__auto___22071))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21973__auto___22071){
return (function (seq22022){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22022));
});})(g__21973__auto___22071))
;


var g__21973__auto___22075 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21973__auto___22075){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22076 = arguments.length;
var i__8982__auto___22077 = (0);
while(true){
if((i__8982__auto___22077 < len__8981__auto___22076)){
args__8988__auto__.push((arguments[i__8982__auto___22077]));

var G__22078 = (i__8982__auto___22077 + (1));
i__8982__auto___22077 = G__22078;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22075))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22075){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22075) : cljs.core.deref.call(null,g__21973__auto___22075)),args);
});})(g__21973__auto___22075))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21973__auto___22075){
return (function (seq22023){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22023));
});})(g__21973__auto___22075))
;


var g__21973__auto___22079 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21973__auto___22079){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22080 = arguments.length;
var i__8982__auto___22081 = (0);
while(true){
if((i__8982__auto___22081 < len__8981__auto___22080)){
args__8988__auto__.push((arguments[i__8982__auto___22081]));

var G__22082 = (i__8982__auto___22081 + (1));
i__8982__auto___22081 = G__22082;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22079))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22079){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22079) : cljs.core.deref.call(null,g__21973__auto___22079)),args);
});})(g__21973__auto___22079))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21973__auto___22079){
return (function (seq22024){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22024));
});})(g__21973__auto___22079))
;


var g__21973__auto___22083 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21973__auto___22083){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22084 = arguments.length;
var i__8982__auto___22085 = (0);
while(true){
if((i__8982__auto___22085 < len__8981__auto___22084)){
args__8988__auto__.push((arguments[i__8982__auto___22085]));

var G__22086 = (i__8982__auto___22085 + (1));
i__8982__auto___22085 = G__22086;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22083))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22083){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22083) : cljs.core.deref.call(null,g__21973__auto___22083)),args);
});})(g__21973__auto___22083))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21973__auto___22083){
return (function (seq22025){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22025));
});})(g__21973__auto___22083))
;


var g__21973__auto___22087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21973__auto___22087){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22088 = arguments.length;
var i__8982__auto___22089 = (0);
while(true){
if((i__8982__auto___22089 < len__8981__auto___22088)){
args__8988__auto__.push((arguments[i__8982__auto___22089]));

var G__22090 = (i__8982__auto___22089 + (1));
i__8982__auto___22089 = G__22090;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22087))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22087){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22087) : cljs.core.deref.call(null,g__21973__auto___22087)),args);
});})(g__21973__auto___22087))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21973__auto___22087){
return (function (seq22026){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22026));
});})(g__21973__auto___22087))
;


var g__21973__auto___22091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21973__auto___22091){
return (function cljs$spec$impl$gen$return(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22092 = arguments.length;
var i__8982__auto___22093 = (0);
while(true){
if((i__8982__auto___22093 < len__8981__auto___22092)){
args__8988__auto__.push((arguments[i__8982__auto___22093]));

var G__22094 = (i__8982__auto___22093 + (1));
i__8982__auto___22093 = G__22094;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22091))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22091){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22091) : cljs.core.deref.call(null,g__21973__auto___22091)),args);
});})(g__21973__auto___22091))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21973__auto___22091){
return (function (seq22027){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22027));
});})(g__21973__auto___22091))
;


var g__21973__auto___22095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21973__auto___22095){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22096 = arguments.length;
var i__8982__auto___22097 = (0);
while(true){
if((i__8982__auto___22097 < len__8981__auto___22096)){
args__8988__auto__.push((arguments[i__8982__auto___22097]));

var G__22098 = (i__8982__auto___22097 + (1));
i__8982__auto___22097 = G__22098;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22095))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22095){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22095) : cljs.core.deref.call(null,g__21973__auto___22095)),args);
});})(g__21973__auto___22095))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21973__auto___22095){
return (function (seq22028){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22028));
});})(g__21973__auto___22095))
;


var g__21973__auto___22099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__21973__auto___22099){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22100 = arguments.length;
var i__8982__auto___22101 = (0);
while(true){
if((i__8982__auto___22101 < len__8981__auto___22100)){
args__8988__auto__.push((arguments[i__8982__auto___22101]));

var G__22102 = (i__8982__auto___22101 + (1));
i__8982__auto___22101 = G__22102;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22099))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22099){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22099) : cljs.core.deref.call(null,g__21973__auto___22099)),args);
});})(g__21973__auto___22099))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__21973__auto___22099){
return (function (seq22029){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22029));
});})(g__21973__auto___22099))
;


var g__21973__auto___22103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__21973__auto___22103){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22104 = arguments.length;
var i__8982__auto___22105 = (0);
while(true){
if((i__8982__auto___22105 < len__8981__auto___22104)){
args__8988__auto__.push((arguments[i__8982__auto___22105]));

var G__22106 = (i__8982__auto___22105 + (1));
i__8982__auto___22105 = G__22106;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21973__auto___22103))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21973__auto___22103){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21973__auto___22103) : cljs.core.deref.call(null,g__21973__auto___22103)),args);
});})(g__21973__auto___22103))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__21973__auto___22103){
return (function (seq22030){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22030));
});})(g__21973__auto___22103))
;

var g__21986__auto___22128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21986__auto___22128){
return (function cljs$spec$impl$gen$any(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22129 = arguments.length;
var i__8982__auto___22130 = (0);
while(true){
if((i__8982__auto___22130 < len__8981__auto___22129)){
args__8988__auto__.push((arguments[i__8982__auto___22130]));

var G__22131 = (i__8982__auto___22130 + (1));
i__8982__auto___22130 = G__22131;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22128))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22128){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22128) : cljs.core.deref.call(null,g__21986__auto___22128));
});})(g__21986__auto___22128))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21986__auto___22128){
return (function (seq22107){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22107));
});})(g__21986__auto___22128))
;


var g__21986__auto___22132 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21986__auto___22132){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22133 = arguments.length;
var i__8982__auto___22134 = (0);
while(true){
if((i__8982__auto___22134 < len__8981__auto___22133)){
args__8988__auto__.push((arguments[i__8982__auto___22134]));

var G__22135 = (i__8982__auto___22134 + (1));
i__8982__auto___22134 = G__22135;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22132))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22132){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22132) : cljs.core.deref.call(null,g__21986__auto___22132));
});})(g__21986__auto___22132))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21986__auto___22132){
return (function (seq22108){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22108));
});})(g__21986__auto___22132))
;


var g__21986__auto___22136 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21986__auto___22136){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22137 = arguments.length;
var i__8982__auto___22138 = (0);
while(true){
if((i__8982__auto___22138 < len__8981__auto___22137)){
args__8988__auto__.push((arguments[i__8982__auto___22138]));

var G__22139 = (i__8982__auto___22138 + (1));
i__8982__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22136))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22136){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22136) : cljs.core.deref.call(null,g__21986__auto___22136));
});})(g__21986__auto___22136))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21986__auto___22136){
return (function (seq22109){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22109));
});})(g__21986__auto___22136))
;


var g__21986__auto___22140 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21986__auto___22140){
return (function cljs$spec$impl$gen$char(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22141 = arguments.length;
var i__8982__auto___22142 = (0);
while(true){
if((i__8982__auto___22142 < len__8981__auto___22141)){
args__8988__auto__.push((arguments[i__8982__auto___22142]));

var G__22143 = (i__8982__auto___22142 + (1));
i__8982__auto___22142 = G__22143;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22140))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22140){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22140) : cljs.core.deref.call(null,g__21986__auto___22140));
});})(g__21986__auto___22140))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21986__auto___22140){
return (function (seq22110){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22110));
});})(g__21986__auto___22140))
;


var g__21986__auto___22144 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21986__auto___22144){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22145 = arguments.length;
var i__8982__auto___22146 = (0);
while(true){
if((i__8982__auto___22146 < len__8981__auto___22145)){
args__8988__auto__.push((arguments[i__8982__auto___22146]));

var G__22147 = (i__8982__auto___22146 + (1));
i__8982__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22144))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22144){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22144) : cljs.core.deref.call(null,g__21986__auto___22144));
});})(g__21986__auto___22144))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21986__auto___22144){
return (function (seq22111){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22111));
});})(g__21986__auto___22144))
;


var g__21986__auto___22148 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21986__auto___22148){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22149 = arguments.length;
var i__8982__auto___22150 = (0);
while(true){
if((i__8982__auto___22150 < len__8981__auto___22149)){
args__8988__auto__.push((arguments[i__8982__auto___22150]));

var G__22151 = (i__8982__auto___22150 + (1));
i__8982__auto___22150 = G__22151;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22148))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22148){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22148) : cljs.core.deref.call(null,g__21986__auto___22148));
});})(g__21986__auto___22148))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21986__auto___22148){
return (function (seq22112){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22112));
});})(g__21986__auto___22148))
;


var g__21986__auto___22152 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21986__auto___22152){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22153 = arguments.length;
var i__8982__auto___22154 = (0);
while(true){
if((i__8982__auto___22154 < len__8981__auto___22153)){
args__8988__auto__.push((arguments[i__8982__auto___22154]));

var G__22155 = (i__8982__auto___22154 + (1));
i__8982__auto___22154 = G__22155;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22152))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22152){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22152) : cljs.core.deref.call(null,g__21986__auto___22152));
});})(g__21986__auto___22152))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21986__auto___22152){
return (function (seq22113){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22113));
});})(g__21986__auto___22152))
;


var g__21986__auto___22156 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21986__auto___22156){
return (function cljs$spec$impl$gen$double(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22157 = arguments.length;
var i__8982__auto___22158 = (0);
while(true){
if((i__8982__auto___22158 < len__8981__auto___22157)){
args__8988__auto__.push((arguments[i__8982__auto___22158]));

var G__22159 = (i__8982__auto___22158 + (1));
i__8982__auto___22158 = G__22159;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22156))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22156){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22156) : cljs.core.deref.call(null,g__21986__auto___22156));
});})(g__21986__auto___22156))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21986__auto___22156){
return (function (seq22114){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22114));
});})(g__21986__auto___22156))
;


var g__21986__auto___22160 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21986__auto___22160){
return (function cljs$spec$impl$gen$int(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22161 = arguments.length;
var i__8982__auto___22162 = (0);
while(true){
if((i__8982__auto___22162 < len__8981__auto___22161)){
args__8988__auto__.push((arguments[i__8982__auto___22162]));

var G__22163 = (i__8982__auto___22162 + (1));
i__8982__auto___22162 = G__22163;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22160))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22160){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22160) : cljs.core.deref.call(null,g__21986__auto___22160));
});})(g__21986__auto___22160))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21986__auto___22160){
return (function (seq22115){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22115));
});})(g__21986__auto___22160))
;


var g__21986__auto___22164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21986__auto___22164){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22165 = arguments.length;
var i__8982__auto___22166 = (0);
while(true){
if((i__8982__auto___22166 < len__8981__auto___22165)){
args__8988__auto__.push((arguments[i__8982__auto___22166]));

var G__22167 = (i__8982__auto___22166 + (1));
i__8982__auto___22166 = G__22167;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22164))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22164){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22164) : cljs.core.deref.call(null,g__21986__auto___22164));
});})(g__21986__auto___22164))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21986__auto___22164){
return (function (seq22116){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22116));
});})(g__21986__auto___22164))
;


var g__21986__auto___22168 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21986__auto___22168){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22169 = arguments.length;
var i__8982__auto___22170 = (0);
while(true){
if((i__8982__auto___22170 < len__8981__auto___22169)){
args__8988__auto__.push((arguments[i__8982__auto___22170]));

var G__22171 = (i__8982__auto___22170 + (1));
i__8982__auto___22170 = G__22171;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22168))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22168){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22168) : cljs.core.deref.call(null,g__21986__auto___22168));
});})(g__21986__auto___22168))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21986__auto___22168){
return (function (seq22117){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22117));
});})(g__21986__auto___22168))
;


var g__21986__auto___22172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21986__auto___22172){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22173 = arguments.length;
var i__8982__auto___22174 = (0);
while(true){
if((i__8982__auto___22174 < len__8981__auto___22173)){
args__8988__auto__.push((arguments[i__8982__auto___22174]));

var G__22175 = (i__8982__auto___22174 + (1));
i__8982__auto___22174 = G__22175;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22172))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22172){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22172) : cljs.core.deref.call(null,g__21986__auto___22172));
});})(g__21986__auto___22172))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21986__auto___22172){
return (function (seq22118){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22118));
});})(g__21986__auto___22172))
;


var g__21986__auto___22176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21986__auto___22176){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22177 = arguments.length;
var i__8982__auto___22178 = (0);
while(true){
if((i__8982__auto___22178 < len__8981__auto___22177)){
args__8988__auto__.push((arguments[i__8982__auto___22178]));

var G__22179 = (i__8982__auto___22178 + (1));
i__8982__auto___22178 = G__22179;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22176))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22176){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22176) : cljs.core.deref.call(null,g__21986__auto___22176));
});})(g__21986__auto___22176))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21986__auto___22176){
return (function (seq22119){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22119));
});})(g__21986__auto___22176))
;


var g__21986__auto___22180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21986__auto___22180){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22181 = arguments.length;
var i__8982__auto___22182 = (0);
while(true){
if((i__8982__auto___22182 < len__8981__auto___22181)){
args__8988__auto__.push((arguments[i__8982__auto___22182]));

var G__22183 = (i__8982__auto___22182 + (1));
i__8982__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22180))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22180){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22180) : cljs.core.deref.call(null,g__21986__auto___22180));
});})(g__21986__auto___22180))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21986__auto___22180){
return (function (seq22120){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22120));
});})(g__21986__auto___22180))
;


var g__21986__auto___22184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21986__auto___22184){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22185 = arguments.length;
var i__8982__auto___22186 = (0);
while(true){
if((i__8982__auto___22186 < len__8981__auto___22185)){
args__8988__auto__.push((arguments[i__8982__auto___22186]));

var G__22187 = (i__8982__auto___22186 + (1));
i__8982__auto___22186 = G__22187;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22184))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22184){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22184) : cljs.core.deref.call(null,g__21986__auto___22184));
});})(g__21986__auto___22184))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21986__auto___22184){
return (function (seq22121){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22121));
});})(g__21986__auto___22184))
;


var g__21986__auto___22188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21986__auto___22188){
return (function cljs$spec$impl$gen$string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22189 = arguments.length;
var i__8982__auto___22190 = (0);
while(true){
if((i__8982__auto___22190 < len__8981__auto___22189)){
args__8988__auto__.push((arguments[i__8982__auto___22190]));

var G__22191 = (i__8982__auto___22190 + (1));
i__8982__auto___22190 = G__22191;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22188))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22188){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22188) : cljs.core.deref.call(null,g__21986__auto___22188));
});})(g__21986__auto___22188))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21986__auto___22188){
return (function (seq22122){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22122));
});})(g__21986__auto___22188))
;


var g__21986__auto___22192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21986__auto___22192){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22193 = arguments.length;
var i__8982__auto___22194 = (0);
while(true){
if((i__8982__auto___22194 < len__8981__auto___22193)){
args__8988__auto__.push((arguments[i__8982__auto___22194]));

var G__22195 = (i__8982__auto___22194 + (1));
i__8982__auto___22194 = G__22195;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22192))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22192){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22192) : cljs.core.deref.call(null,g__21986__auto___22192));
});})(g__21986__auto___22192))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21986__auto___22192){
return (function (seq22123){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22123));
});})(g__21986__auto___22192))
;


var g__21986__auto___22196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21986__auto___22196){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22197 = arguments.length;
var i__8982__auto___22198 = (0);
while(true){
if((i__8982__auto___22198 < len__8981__auto___22197)){
args__8988__auto__.push((arguments[i__8982__auto___22198]));

var G__22199 = (i__8982__auto___22198 + (1));
i__8982__auto___22198 = G__22199;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22196))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22196){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22196) : cljs.core.deref.call(null,g__21986__auto___22196));
});})(g__21986__auto___22196))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21986__auto___22196){
return (function (seq22124){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22124));
});})(g__21986__auto___22196))
;


var g__21986__auto___22200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21986__auto___22200){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22201 = arguments.length;
var i__8982__auto___22202 = (0);
while(true){
if((i__8982__auto___22202 < len__8981__auto___22201)){
args__8988__auto__.push((arguments[i__8982__auto___22202]));

var G__22203 = (i__8982__auto___22202 + (1));
i__8982__auto___22202 = G__22203;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22200))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22200){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22200) : cljs.core.deref.call(null,g__21986__auto___22200));
});})(g__21986__auto___22200))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21986__auto___22200){
return (function (seq22125){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22125));
});})(g__21986__auto___22200))
;


var g__21986__auto___22204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21986__auto___22204){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22205 = arguments.length;
var i__8982__auto___22206 = (0);
while(true){
if((i__8982__auto___22206 < len__8981__auto___22205)){
args__8988__auto__.push((arguments[i__8982__auto___22206]));

var G__22207 = (i__8982__auto___22206 + (1));
i__8982__auto___22206 = G__22207;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22204))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22204){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22204) : cljs.core.deref.call(null,g__21986__auto___22204));
});})(g__21986__auto___22204))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21986__auto___22204){
return (function (seq22126){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22126));
});})(g__21986__auto___22204))
;


var g__21986__auto___22208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21986__auto___22208){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22209 = arguments.length;
var i__8982__auto___22210 = (0);
while(true){
if((i__8982__auto___22210 < len__8981__auto___22209)){
args__8988__auto__.push((arguments[i__8982__auto___22210]));

var G__22211 = (i__8982__auto___22210 + (1));
i__8982__auto___22210 = G__22211;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21986__auto___22208))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21986__auto___22208){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21986__auto___22208) : cljs.core.deref.call(null,g__21986__auto___22208));
});})(g__21986__auto___22208))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21986__auto___22208){
return (function (seq22127){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22127));
});})(g__21986__auto___22208))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22214 = arguments.length;
var i__8982__auto___22215 = (0);
while(true){
if((i__8982__auto___22215 < len__8981__auto___22214)){
args__8988__auto__.push((arguments[i__8982__auto___22215]));

var G__22216 = (i__8982__auto___22215 + (1));
i__8982__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__22212_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__22212_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq22213){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22213));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__22217_SHARP_){
return (new Date(p1__22217_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer()], 0)),cljs.spec.impl.gen.symbol(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.double$(),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.symbol_ns()], null)], 0))], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.impl.gen.uuid(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword(),cljs.spec.impl.gen.symbol()], null)], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns()], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.string_alphanumeric()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});
