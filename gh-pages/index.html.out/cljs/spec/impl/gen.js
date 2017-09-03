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
var len__8981__auto___21886 = arguments.length;
var i__8982__auto___21887 = (0);
while(true){
if((i__8982__auto___21887 < len__8981__auto___21886)){
args__8988__auto__.push((arguments[i__8982__auto___21887]));

var G__21888 = (i__8982__auto___21887 + (1));
i__8982__auto___21887 = G__21888;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq21885){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21885));
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
var len__8981__auto___21890 = arguments.length;
var i__8982__auto___21891 = (0);
while(true){
if((i__8982__auto___21891 < len__8981__auto___21890)){
args__8988__auto__.push((arguments[i__8982__auto___21891]));

var G__21892 = (i__8982__auto___21891 + (1));
i__8982__auto___21891 = G__21892;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq21889){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21889));
});

var g_QMARK__21893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_21894 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21893){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__21893))
,null));
var mkg_21895 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21893,g_21894){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__21893,g_21894))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__21893,g_21894,mkg_21895){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__21893) : cljs.core.deref.call(null,g_QMARK__21893)).call(null,x);
});})(g_QMARK__21893,g_21894,mkg_21895))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__21893,g_21894,mkg_21895){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_21895) : cljs.core.deref.call(null,mkg_21895)).call(null,gfn);
});})(g_QMARK__21893,g_21894,mkg_21895))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__21893,g_21894,mkg_21895){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_21894) : cljs.core.deref.call(null,g_21894)).call(null,generator);
});})(g_QMARK__21893,g_21894,mkg_21895))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__21857__auto___21915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__21857__auto___21915){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21916 = arguments.length;
var i__8982__auto___21917 = (0);
while(true){
if((i__8982__auto___21917 < len__8981__auto___21916)){
args__8988__auto__.push((arguments[i__8982__auto___21917]));

var G__21918 = (i__8982__auto___21917 + (1));
i__8982__auto___21917 = G__21918;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21915))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21915){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21915) : cljs.core.deref.call(null,g__21857__auto___21915)),args);
});})(g__21857__auto___21915))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__21857__auto___21915){
return (function (seq21896){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21896));
});})(g__21857__auto___21915))
;


var g__21857__auto___21919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__21857__auto___21919){
return (function cljs$spec$impl$gen$list(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21920 = arguments.length;
var i__8982__auto___21921 = (0);
while(true){
if((i__8982__auto___21921 < len__8981__auto___21920)){
args__8988__auto__.push((arguments[i__8982__auto___21921]));

var G__21922 = (i__8982__auto___21921 + (1));
i__8982__auto___21921 = G__21922;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21919))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21919){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21919) : cljs.core.deref.call(null,g__21857__auto___21919)),args);
});})(g__21857__auto___21919))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__21857__auto___21919){
return (function (seq21897){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21897));
});})(g__21857__auto___21919))
;


var g__21857__auto___21923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__21857__auto___21923){
return (function cljs$spec$impl$gen$map(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21924 = arguments.length;
var i__8982__auto___21925 = (0);
while(true){
if((i__8982__auto___21925 < len__8981__auto___21924)){
args__8988__auto__.push((arguments[i__8982__auto___21925]));

var G__21926 = (i__8982__auto___21925 + (1));
i__8982__auto___21925 = G__21926;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21923))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21923){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21923) : cljs.core.deref.call(null,g__21857__auto___21923)),args);
});})(g__21857__auto___21923))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__21857__auto___21923){
return (function (seq21898){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21898));
});})(g__21857__auto___21923))
;


var g__21857__auto___21927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__21857__auto___21927){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21928 = arguments.length;
var i__8982__auto___21929 = (0);
while(true){
if((i__8982__auto___21929 < len__8981__auto___21928)){
args__8988__auto__.push((arguments[i__8982__auto___21929]));

var G__21930 = (i__8982__auto___21929 + (1));
i__8982__auto___21929 = G__21930;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21927))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21927){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21927) : cljs.core.deref.call(null,g__21857__auto___21927)),args);
});})(g__21857__auto___21927))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__21857__auto___21927){
return (function (seq21899){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21899));
});})(g__21857__auto___21927))
;


var g__21857__auto___21931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__21857__auto___21931){
return (function cljs$spec$impl$gen$set(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21932 = arguments.length;
var i__8982__auto___21933 = (0);
while(true){
if((i__8982__auto___21933 < len__8981__auto___21932)){
args__8988__auto__.push((arguments[i__8982__auto___21933]));

var G__21934 = (i__8982__auto___21933 + (1));
i__8982__auto___21933 = G__21934;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21931))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21931){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21931) : cljs.core.deref.call(null,g__21857__auto___21931)),args);
});})(g__21857__auto___21931))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__21857__auto___21931){
return (function (seq21900){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21900));
});})(g__21857__auto___21931))
;


var g__21857__auto___21935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__21857__auto___21935){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21936 = arguments.length;
var i__8982__auto___21937 = (0);
while(true){
if((i__8982__auto___21937 < len__8981__auto___21936)){
args__8988__auto__.push((arguments[i__8982__auto___21937]));

var G__21938 = (i__8982__auto___21937 + (1));
i__8982__auto___21937 = G__21938;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21935))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21935){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21935) : cljs.core.deref.call(null,g__21857__auto___21935)),args);
});})(g__21857__auto___21935))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__21857__auto___21935){
return (function (seq21901){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21901));
});})(g__21857__auto___21935))
;


var g__21857__auto___21939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__21857__auto___21939){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21940 = arguments.length;
var i__8982__auto___21941 = (0);
while(true){
if((i__8982__auto___21941 < len__8981__auto___21940)){
args__8988__auto__.push((arguments[i__8982__auto___21941]));

var G__21942 = (i__8982__auto___21941 + (1));
i__8982__auto___21941 = G__21942;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21939))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21939){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21939) : cljs.core.deref.call(null,g__21857__auto___21939)),args);
});})(g__21857__auto___21939))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__21857__auto___21939){
return (function (seq21902){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21902));
});})(g__21857__auto___21939))
;


var g__21857__auto___21943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__21857__auto___21943){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21944 = arguments.length;
var i__8982__auto___21945 = (0);
while(true){
if((i__8982__auto___21945 < len__8981__auto___21944)){
args__8988__auto__.push((arguments[i__8982__auto___21945]));

var G__21946 = (i__8982__auto___21945 + (1));
i__8982__auto___21945 = G__21946;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21943))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21943){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21943) : cljs.core.deref.call(null,g__21857__auto___21943)),args);
});})(g__21857__auto___21943))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__21857__auto___21943){
return (function (seq21903){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21903));
});})(g__21857__auto___21943))
;


var g__21857__auto___21947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__21857__auto___21947){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21948 = arguments.length;
var i__8982__auto___21949 = (0);
while(true){
if((i__8982__auto___21949 < len__8981__auto___21948)){
args__8988__auto__.push((arguments[i__8982__auto___21949]));

var G__21950 = (i__8982__auto___21949 + (1));
i__8982__auto___21949 = G__21950;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21947))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21947){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21947) : cljs.core.deref.call(null,g__21857__auto___21947)),args);
});})(g__21857__auto___21947))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__21857__auto___21947){
return (function (seq21904){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21904));
});})(g__21857__auto___21947))
;


var g__21857__auto___21951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__21857__auto___21951){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21952 = arguments.length;
var i__8982__auto___21953 = (0);
while(true){
if((i__8982__auto___21953 < len__8981__auto___21952)){
args__8988__auto__.push((arguments[i__8982__auto___21953]));

var G__21954 = (i__8982__auto___21953 + (1));
i__8982__auto___21953 = G__21954;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21951))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21951){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21951) : cljs.core.deref.call(null,g__21857__auto___21951)),args);
});})(g__21857__auto___21951))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__21857__auto___21951){
return (function (seq21905){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21905));
});})(g__21857__auto___21951))
;


var g__21857__auto___21955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__21857__auto___21955){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21956 = arguments.length;
var i__8982__auto___21957 = (0);
while(true){
if((i__8982__auto___21957 < len__8981__auto___21956)){
args__8988__auto__.push((arguments[i__8982__auto___21957]));

var G__21958 = (i__8982__auto___21957 + (1));
i__8982__auto___21957 = G__21958;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21955))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21955){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21955) : cljs.core.deref.call(null,g__21857__auto___21955)),args);
});})(g__21857__auto___21955))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__21857__auto___21955){
return (function (seq21906){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21906));
});})(g__21857__auto___21955))
;


var g__21857__auto___21959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__21857__auto___21959){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21960 = arguments.length;
var i__8982__auto___21961 = (0);
while(true){
if((i__8982__auto___21961 < len__8981__auto___21960)){
args__8988__auto__.push((arguments[i__8982__auto___21961]));

var G__21962 = (i__8982__auto___21961 + (1));
i__8982__auto___21961 = G__21962;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21959))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21959){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21959) : cljs.core.deref.call(null,g__21857__auto___21959)),args);
});})(g__21857__auto___21959))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__21857__auto___21959){
return (function (seq21907){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21907));
});})(g__21857__auto___21959))
;


var g__21857__auto___21963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__21857__auto___21963){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21964 = arguments.length;
var i__8982__auto___21965 = (0);
while(true){
if((i__8982__auto___21965 < len__8981__auto___21964)){
args__8988__auto__.push((arguments[i__8982__auto___21965]));

var G__21966 = (i__8982__auto___21965 + (1));
i__8982__auto___21965 = G__21966;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21963))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21963){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21963) : cljs.core.deref.call(null,g__21857__auto___21963)),args);
});})(g__21857__auto___21963))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__21857__auto___21963){
return (function (seq21908){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21908));
});})(g__21857__auto___21963))
;


var g__21857__auto___21967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__21857__auto___21967){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21968 = arguments.length;
var i__8982__auto___21969 = (0);
while(true){
if((i__8982__auto___21969 < len__8981__auto___21968)){
args__8988__auto__.push((arguments[i__8982__auto___21969]));

var G__21970 = (i__8982__auto___21969 + (1));
i__8982__auto___21969 = G__21970;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21967))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21967){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21967) : cljs.core.deref.call(null,g__21857__auto___21967)),args);
});})(g__21857__auto___21967))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__21857__auto___21967){
return (function (seq21909){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21909));
});})(g__21857__auto___21967))
;


var g__21857__auto___21971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__21857__auto___21971){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21972 = arguments.length;
var i__8982__auto___21973 = (0);
while(true){
if((i__8982__auto___21973 < len__8981__auto___21972)){
args__8988__auto__.push((arguments[i__8982__auto___21973]));

var G__21974 = (i__8982__auto___21973 + (1));
i__8982__auto___21973 = G__21974;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21971))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21971){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21971) : cljs.core.deref.call(null,g__21857__auto___21971)),args);
});})(g__21857__auto___21971))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__21857__auto___21971){
return (function (seq21910){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21910));
});})(g__21857__auto___21971))
;


var g__21857__auto___21975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__21857__auto___21975){
return (function cljs$spec$impl$gen$return(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21976 = arguments.length;
var i__8982__auto___21977 = (0);
while(true){
if((i__8982__auto___21977 < len__8981__auto___21976)){
args__8988__auto__.push((arguments[i__8982__auto___21977]));

var G__21978 = (i__8982__auto___21977 + (1));
i__8982__auto___21977 = G__21978;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21975))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21975){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21975) : cljs.core.deref.call(null,g__21857__auto___21975)),args);
});})(g__21857__auto___21975))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__21857__auto___21975){
return (function (seq21911){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21911));
});})(g__21857__auto___21975))
;


var g__21857__auto___21979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__21857__auto___21979){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21980 = arguments.length;
var i__8982__auto___21981 = (0);
while(true){
if((i__8982__auto___21981 < len__8981__auto___21980)){
args__8988__auto__.push((arguments[i__8982__auto___21981]));

var G__21982 = (i__8982__auto___21981 + (1));
i__8982__auto___21981 = G__21982;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21979))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21979){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21979) : cljs.core.deref.call(null,g__21857__auto___21979)),args);
});})(g__21857__auto___21979))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__21857__auto___21979){
return (function (seq21912){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21912));
});})(g__21857__auto___21979))
;


var g__21857__auto___21983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__21857__auto___21983){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21984 = arguments.length;
var i__8982__auto___21985 = (0);
while(true){
if((i__8982__auto___21985 < len__8981__auto___21984)){
args__8988__auto__.push((arguments[i__8982__auto___21985]));

var G__21986 = (i__8982__auto___21985 + (1));
i__8982__auto___21985 = G__21986;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21983))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21983){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21983) : cljs.core.deref.call(null,g__21857__auto___21983)),args);
});})(g__21857__auto___21983))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__21857__auto___21983){
return (function (seq21913){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21913));
});})(g__21857__auto___21983))
;


var g__21857__auto___21987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__21857__auto___21987){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21988 = arguments.length;
var i__8982__auto___21989 = (0);
while(true){
if((i__8982__auto___21989 < len__8981__auto___21988)){
args__8988__auto__.push((arguments[i__8982__auto___21989]));

var G__21990 = (i__8982__auto___21989 + (1));
i__8982__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21857__auto___21987))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21857__auto___21987){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21857__auto___21987) : cljs.core.deref.call(null,g__21857__auto___21987)),args);
});})(g__21857__auto___21987))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__21857__auto___21987){
return (function (seq21914){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21914));
});})(g__21857__auto___21987))
;

var g__21870__auto___22012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__21870__auto___22012){
return (function cljs$spec$impl$gen$any(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22013 = arguments.length;
var i__8982__auto___22014 = (0);
while(true){
if((i__8982__auto___22014 < len__8981__auto___22013)){
args__8988__auto__.push((arguments[i__8982__auto___22014]));

var G__22015 = (i__8982__auto___22014 + (1));
i__8982__auto___22014 = G__22015;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22012))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22012){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22012) : cljs.core.deref.call(null,g__21870__auto___22012));
});})(g__21870__auto___22012))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__21870__auto___22012){
return (function (seq21991){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21991));
});})(g__21870__auto___22012))
;


var g__21870__auto___22016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__21870__auto___22016){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22017 = arguments.length;
var i__8982__auto___22018 = (0);
while(true){
if((i__8982__auto___22018 < len__8981__auto___22017)){
args__8988__auto__.push((arguments[i__8982__auto___22018]));

var G__22019 = (i__8982__auto___22018 + (1));
i__8982__auto___22018 = G__22019;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22016))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22016){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22016) : cljs.core.deref.call(null,g__21870__auto___22016));
});})(g__21870__auto___22016))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__21870__auto___22016){
return (function (seq21992){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21992));
});})(g__21870__auto___22016))
;


var g__21870__auto___22020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__21870__auto___22020){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22021 = arguments.length;
var i__8982__auto___22022 = (0);
while(true){
if((i__8982__auto___22022 < len__8981__auto___22021)){
args__8988__auto__.push((arguments[i__8982__auto___22022]));

var G__22023 = (i__8982__auto___22022 + (1));
i__8982__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22020))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22020){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22020) : cljs.core.deref.call(null,g__21870__auto___22020));
});})(g__21870__auto___22020))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__21870__auto___22020){
return (function (seq21993){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21993));
});})(g__21870__auto___22020))
;


var g__21870__auto___22024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__21870__auto___22024){
return (function cljs$spec$impl$gen$char(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22025 = arguments.length;
var i__8982__auto___22026 = (0);
while(true){
if((i__8982__auto___22026 < len__8981__auto___22025)){
args__8988__auto__.push((arguments[i__8982__auto___22026]));

var G__22027 = (i__8982__auto___22026 + (1));
i__8982__auto___22026 = G__22027;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22024))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22024){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22024) : cljs.core.deref.call(null,g__21870__auto___22024));
});})(g__21870__auto___22024))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__21870__auto___22024){
return (function (seq21994){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21994));
});})(g__21870__auto___22024))
;


var g__21870__auto___22028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__21870__auto___22028){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22029 = arguments.length;
var i__8982__auto___22030 = (0);
while(true){
if((i__8982__auto___22030 < len__8981__auto___22029)){
args__8988__auto__.push((arguments[i__8982__auto___22030]));

var G__22031 = (i__8982__auto___22030 + (1));
i__8982__auto___22030 = G__22031;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22028))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22028){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22028) : cljs.core.deref.call(null,g__21870__auto___22028));
});})(g__21870__auto___22028))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__21870__auto___22028){
return (function (seq21995){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21995));
});})(g__21870__auto___22028))
;


var g__21870__auto___22032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__21870__auto___22032){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22033 = arguments.length;
var i__8982__auto___22034 = (0);
while(true){
if((i__8982__auto___22034 < len__8981__auto___22033)){
args__8988__auto__.push((arguments[i__8982__auto___22034]));

var G__22035 = (i__8982__auto___22034 + (1));
i__8982__auto___22034 = G__22035;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22032))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22032){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22032) : cljs.core.deref.call(null,g__21870__auto___22032));
});})(g__21870__auto___22032))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__21870__auto___22032){
return (function (seq21996){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21996));
});})(g__21870__auto___22032))
;


var g__21870__auto___22036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__21870__auto___22036){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22037 = arguments.length;
var i__8982__auto___22038 = (0);
while(true){
if((i__8982__auto___22038 < len__8981__auto___22037)){
args__8988__auto__.push((arguments[i__8982__auto___22038]));

var G__22039 = (i__8982__auto___22038 + (1));
i__8982__auto___22038 = G__22039;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22036))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22036){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22036) : cljs.core.deref.call(null,g__21870__auto___22036));
});})(g__21870__auto___22036))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__21870__auto___22036){
return (function (seq21997){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21997));
});})(g__21870__auto___22036))
;


var g__21870__auto___22040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__21870__auto___22040){
return (function cljs$spec$impl$gen$double(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22041 = arguments.length;
var i__8982__auto___22042 = (0);
while(true){
if((i__8982__auto___22042 < len__8981__auto___22041)){
args__8988__auto__.push((arguments[i__8982__auto___22042]));

var G__22043 = (i__8982__auto___22042 + (1));
i__8982__auto___22042 = G__22043;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22040))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22040){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22040) : cljs.core.deref.call(null,g__21870__auto___22040));
});})(g__21870__auto___22040))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__21870__auto___22040){
return (function (seq21998){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21998));
});})(g__21870__auto___22040))
;


var g__21870__auto___22044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__21870__auto___22044){
return (function cljs$spec$impl$gen$int(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22045 = arguments.length;
var i__8982__auto___22046 = (0);
while(true){
if((i__8982__auto___22046 < len__8981__auto___22045)){
args__8988__auto__.push((arguments[i__8982__auto___22046]));

var G__22047 = (i__8982__auto___22046 + (1));
i__8982__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22044))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22044){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22044) : cljs.core.deref.call(null,g__21870__auto___22044));
});})(g__21870__auto___22044))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__21870__auto___22044){
return (function (seq21999){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21999));
});})(g__21870__auto___22044))
;


var g__21870__auto___22048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__21870__auto___22048){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22049 = arguments.length;
var i__8982__auto___22050 = (0);
while(true){
if((i__8982__auto___22050 < len__8981__auto___22049)){
args__8988__auto__.push((arguments[i__8982__auto___22050]));

var G__22051 = (i__8982__auto___22050 + (1));
i__8982__auto___22050 = G__22051;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22048))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22048){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22048) : cljs.core.deref.call(null,g__21870__auto___22048));
});})(g__21870__auto___22048))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__21870__auto___22048){
return (function (seq22000){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22000));
});})(g__21870__auto___22048))
;


var g__21870__auto___22052 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__21870__auto___22052){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22053 = arguments.length;
var i__8982__auto___22054 = (0);
while(true){
if((i__8982__auto___22054 < len__8981__auto___22053)){
args__8988__auto__.push((arguments[i__8982__auto___22054]));

var G__22055 = (i__8982__auto___22054 + (1));
i__8982__auto___22054 = G__22055;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22052))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22052){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22052) : cljs.core.deref.call(null,g__21870__auto___22052));
});})(g__21870__auto___22052))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__21870__auto___22052){
return (function (seq22001){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22001));
});})(g__21870__auto___22052))
;


var g__21870__auto___22056 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__21870__auto___22056){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22057 = arguments.length;
var i__8982__auto___22058 = (0);
while(true){
if((i__8982__auto___22058 < len__8981__auto___22057)){
args__8988__auto__.push((arguments[i__8982__auto___22058]));

var G__22059 = (i__8982__auto___22058 + (1));
i__8982__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22056))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22056){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22056) : cljs.core.deref.call(null,g__21870__auto___22056));
});})(g__21870__auto___22056))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__21870__auto___22056){
return (function (seq22002){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22002));
});})(g__21870__auto___22056))
;


var g__21870__auto___22060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__21870__auto___22060){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22061 = arguments.length;
var i__8982__auto___22062 = (0);
while(true){
if((i__8982__auto___22062 < len__8981__auto___22061)){
args__8988__auto__.push((arguments[i__8982__auto___22062]));

var G__22063 = (i__8982__auto___22062 + (1));
i__8982__auto___22062 = G__22063;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22060))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22060){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22060) : cljs.core.deref.call(null,g__21870__auto___22060));
});})(g__21870__auto___22060))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__21870__auto___22060){
return (function (seq22003){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22003));
});})(g__21870__auto___22060))
;


var g__21870__auto___22064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__21870__auto___22064){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22065 = arguments.length;
var i__8982__auto___22066 = (0);
while(true){
if((i__8982__auto___22066 < len__8981__auto___22065)){
args__8988__auto__.push((arguments[i__8982__auto___22066]));

var G__22067 = (i__8982__auto___22066 + (1));
i__8982__auto___22066 = G__22067;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22064))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22064){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22064) : cljs.core.deref.call(null,g__21870__auto___22064));
});})(g__21870__auto___22064))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__21870__auto___22064){
return (function (seq22004){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22004));
});})(g__21870__auto___22064))
;


var g__21870__auto___22068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__21870__auto___22068){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22069 = arguments.length;
var i__8982__auto___22070 = (0);
while(true){
if((i__8982__auto___22070 < len__8981__auto___22069)){
args__8988__auto__.push((arguments[i__8982__auto___22070]));

var G__22071 = (i__8982__auto___22070 + (1));
i__8982__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22068))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22068){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22068) : cljs.core.deref.call(null,g__21870__auto___22068));
});})(g__21870__auto___22068))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__21870__auto___22068){
return (function (seq22005){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22005));
});})(g__21870__auto___22068))
;


var g__21870__auto___22072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__21870__auto___22072){
return (function cljs$spec$impl$gen$string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22073 = arguments.length;
var i__8982__auto___22074 = (0);
while(true){
if((i__8982__auto___22074 < len__8981__auto___22073)){
args__8988__auto__.push((arguments[i__8982__auto___22074]));

var G__22075 = (i__8982__auto___22074 + (1));
i__8982__auto___22074 = G__22075;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22072))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22072){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22072) : cljs.core.deref.call(null,g__21870__auto___22072));
});})(g__21870__auto___22072))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__21870__auto___22072){
return (function (seq22006){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22006));
});})(g__21870__auto___22072))
;


var g__21870__auto___22076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__21870__auto___22076){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22077 = arguments.length;
var i__8982__auto___22078 = (0);
while(true){
if((i__8982__auto___22078 < len__8981__auto___22077)){
args__8988__auto__.push((arguments[i__8982__auto___22078]));

var G__22079 = (i__8982__auto___22078 + (1));
i__8982__auto___22078 = G__22079;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22076))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22076){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22076) : cljs.core.deref.call(null,g__21870__auto___22076));
});})(g__21870__auto___22076))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__21870__auto___22076){
return (function (seq22007){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22007));
});})(g__21870__auto___22076))
;


var g__21870__auto___22080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__21870__auto___22080){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22081 = arguments.length;
var i__8982__auto___22082 = (0);
while(true){
if((i__8982__auto___22082 < len__8981__auto___22081)){
args__8988__auto__.push((arguments[i__8982__auto___22082]));

var G__22083 = (i__8982__auto___22082 + (1));
i__8982__auto___22082 = G__22083;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22080))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22080){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22080) : cljs.core.deref.call(null,g__21870__auto___22080));
});})(g__21870__auto___22080))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__21870__auto___22080){
return (function (seq22008){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22008));
});})(g__21870__auto___22080))
;


var g__21870__auto___22084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__21870__auto___22084){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22085 = arguments.length;
var i__8982__auto___22086 = (0);
while(true){
if((i__8982__auto___22086 < len__8981__auto___22085)){
args__8988__auto__.push((arguments[i__8982__auto___22086]));

var G__22087 = (i__8982__auto___22086 + (1));
i__8982__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22084))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22084){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22084) : cljs.core.deref.call(null,g__21870__auto___22084));
});})(g__21870__auto___22084))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__21870__auto___22084){
return (function (seq22009){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22009));
});})(g__21870__auto___22084))
;


var g__21870__auto___22088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__21870__auto___22088){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22089 = arguments.length;
var i__8982__auto___22090 = (0);
while(true){
if((i__8982__auto___22090 < len__8981__auto___22089)){
args__8988__auto__.push((arguments[i__8982__auto___22090]));

var G__22091 = (i__8982__auto___22090 + (1));
i__8982__auto___22090 = G__22091;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22088))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22088){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22088) : cljs.core.deref.call(null,g__21870__auto___22088));
});})(g__21870__auto___22088))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__21870__auto___22088){
return (function (seq22010){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22010));
});})(g__21870__auto___22088))
;


var g__21870__auto___22092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__21870__auto___22092){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22093 = arguments.length;
var i__8982__auto___22094 = (0);
while(true){
if((i__8982__auto___22094 < len__8981__auto___22093)){
args__8988__auto__.push((arguments[i__8982__auto___22094]));

var G__22095 = (i__8982__auto___22094 + (1));
i__8982__auto___22094 = G__22095;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});})(g__21870__auto___22092))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__21870__auto___22092){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__21870__auto___22092) : cljs.core.deref.call(null,g__21870__auto___22092));
});})(g__21870__auto___22092))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__21870__auto___22092){
return (function (seq22011){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22011));
});})(g__21870__auto___22092))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8988__auto__ = [];
var len__8981__auto___22098 = arguments.length;
var i__8982__auto___22099 = (0);
while(true){
if((i__8982__auto___22099 < len__8981__auto___22098)){
args__8988__auto__.push((arguments[i__8982__auto___22099]));

var G__22100 = (i__8982__auto___22099 + (1));
i__8982__auto___22099 = G__22100;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__22096_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__22096_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq22097){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22097));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns()], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.any_printable()], null)], 0)),cljs.spec.impl.gen.boolean$(),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (simple){
return (function (p1__22101_SHARP_){
return (new Date(p1__22101_SHARP_));
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
