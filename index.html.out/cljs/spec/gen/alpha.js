// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
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
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__7804__auto__,writer__7805__auto__,opt__7806__auto__){
return cljs.core._write.call(null,writer__7805__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8481 = arguments.length;
var i__8307__auto___8482 = (0);
while(true){
if((i__8307__auto___8482 < len__8306__auto___8481)){
args__8313__auto__.push((arguments[i__8307__auto___8482]));

var G__8483 = (i__8307__auto___8482 + (1));
i__8307__auto___8482 = G__8483;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq8480){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8480));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8485 = arguments.length;
var i__8307__auto___8486 = (0);
while(true){
if((i__8307__auto___8486 < len__8306__auto___8485)){
args__8313__auto__.push((arguments[i__8307__auto___8486]));

var G__8487 = (i__8307__auto___8486 + (1));
i__8307__auto___8486 = G__8487;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq8484){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8484));
});

var g_QMARK__8488 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_8489 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8488){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8488))
,null));
var mkg_8490 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__8488,g_8489){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__8488,g_8489))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__8488,g_8489,mkg_8490){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8488).call(null,x);
});})(g_QMARK__8488,g_8489,mkg_8490))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__8488,g_8489,mkg_8490){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_8490).call(null,gfn);
});})(g_QMARK__8488,g_8489,mkg_8490))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__8488,g_8489,mkg_8490){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_8489).call(null,generator);
});})(g_QMARK__8488,g_8489,mkg_8490))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8452__auto___8510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8452__auto___8510){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8511 = arguments.length;
var i__8307__auto___8512 = (0);
while(true){
if((i__8307__auto___8512 < len__8306__auto___8511)){
args__8313__auto__.push((arguments[i__8307__auto___8512]));

var G__8513 = (i__8307__auto___8512 + (1));
i__8307__auto___8512 = G__8513;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8510))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8510),args);
});})(g__8452__auto___8510))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8452__auto___8510){
return (function (seq8491){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8491));
});})(g__8452__auto___8510))
;


var g__8452__auto___8514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8452__auto___8514){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8515 = arguments.length;
var i__8307__auto___8516 = (0);
while(true){
if((i__8307__auto___8516 < len__8306__auto___8515)){
args__8313__auto__.push((arguments[i__8307__auto___8516]));

var G__8517 = (i__8307__auto___8516 + (1));
i__8307__auto___8516 = G__8517;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8514))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8514),args);
});})(g__8452__auto___8514))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8452__auto___8514){
return (function (seq8492){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8492));
});})(g__8452__auto___8514))
;


var g__8452__auto___8518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8452__auto___8518){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8519 = arguments.length;
var i__8307__auto___8520 = (0);
while(true){
if((i__8307__auto___8520 < len__8306__auto___8519)){
args__8313__auto__.push((arguments[i__8307__auto___8520]));

var G__8521 = (i__8307__auto___8520 + (1));
i__8307__auto___8520 = G__8521;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8518))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8518),args);
});})(g__8452__auto___8518))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8452__auto___8518){
return (function (seq8493){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8493));
});})(g__8452__auto___8518))
;


var g__8452__auto___8522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8452__auto___8522){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8523 = arguments.length;
var i__8307__auto___8524 = (0);
while(true){
if((i__8307__auto___8524 < len__8306__auto___8523)){
args__8313__auto__.push((arguments[i__8307__auto___8524]));

var G__8525 = (i__8307__auto___8524 + (1));
i__8307__auto___8524 = G__8525;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8522))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8522),args);
});})(g__8452__auto___8522))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8452__auto___8522){
return (function (seq8494){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8494));
});})(g__8452__auto___8522))
;


var g__8452__auto___8526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8452__auto___8526){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8527 = arguments.length;
var i__8307__auto___8528 = (0);
while(true){
if((i__8307__auto___8528 < len__8306__auto___8527)){
args__8313__auto__.push((arguments[i__8307__auto___8528]));

var G__8529 = (i__8307__auto___8528 + (1));
i__8307__auto___8528 = G__8529;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8526))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8526),args);
});})(g__8452__auto___8526))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8452__auto___8526){
return (function (seq8495){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8495));
});})(g__8452__auto___8526))
;


var g__8452__auto___8530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8452__auto___8530){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8531 = arguments.length;
var i__8307__auto___8532 = (0);
while(true){
if((i__8307__auto___8532 < len__8306__auto___8531)){
args__8313__auto__.push((arguments[i__8307__auto___8532]));

var G__8533 = (i__8307__auto___8532 + (1));
i__8307__auto___8532 = G__8533;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8530))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8530),args);
});})(g__8452__auto___8530))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8452__auto___8530){
return (function (seq8496){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8496));
});})(g__8452__auto___8530))
;


var g__8452__auto___8534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8452__auto___8534){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8535 = arguments.length;
var i__8307__auto___8536 = (0);
while(true){
if((i__8307__auto___8536 < len__8306__auto___8535)){
args__8313__auto__.push((arguments[i__8307__auto___8536]));

var G__8537 = (i__8307__auto___8536 + (1));
i__8307__auto___8536 = G__8537;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8534))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8534),args);
});})(g__8452__auto___8534))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8452__auto___8534){
return (function (seq8497){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8497));
});})(g__8452__auto___8534))
;


var g__8452__auto___8538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8452__auto___8538){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8539 = arguments.length;
var i__8307__auto___8540 = (0);
while(true){
if((i__8307__auto___8540 < len__8306__auto___8539)){
args__8313__auto__.push((arguments[i__8307__auto___8540]));

var G__8541 = (i__8307__auto___8540 + (1));
i__8307__auto___8540 = G__8541;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8538))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8538),args);
});})(g__8452__auto___8538))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8452__auto___8538){
return (function (seq8498){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8498));
});})(g__8452__auto___8538))
;


var g__8452__auto___8542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8452__auto___8542){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8543 = arguments.length;
var i__8307__auto___8544 = (0);
while(true){
if((i__8307__auto___8544 < len__8306__auto___8543)){
args__8313__auto__.push((arguments[i__8307__auto___8544]));

var G__8545 = (i__8307__auto___8544 + (1));
i__8307__auto___8544 = G__8545;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8542))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8542),args);
});})(g__8452__auto___8542))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8452__auto___8542){
return (function (seq8499){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8499));
});})(g__8452__auto___8542))
;


var g__8452__auto___8546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8452__auto___8546){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8547 = arguments.length;
var i__8307__auto___8548 = (0);
while(true){
if((i__8307__auto___8548 < len__8306__auto___8547)){
args__8313__auto__.push((arguments[i__8307__auto___8548]));

var G__8549 = (i__8307__auto___8548 + (1));
i__8307__auto___8548 = G__8549;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8546))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8546){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8546),args);
});})(g__8452__auto___8546))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8452__auto___8546){
return (function (seq8500){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8500));
});})(g__8452__auto___8546))
;


var g__8452__auto___8550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8452__auto___8550){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8551 = arguments.length;
var i__8307__auto___8552 = (0);
while(true){
if((i__8307__auto___8552 < len__8306__auto___8551)){
args__8313__auto__.push((arguments[i__8307__auto___8552]));

var G__8553 = (i__8307__auto___8552 + (1));
i__8307__auto___8552 = G__8553;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8550))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8550){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8550),args);
});})(g__8452__auto___8550))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8452__auto___8550){
return (function (seq8501){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8501));
});})(g__8452__auto___8550))
;


var g__8452__auto___8554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8452__auto___8554){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8555 = arguments.length;
var i__8307__auto___8556 = (0);
while(true){
if((i__8307__auto___8556 < len__8306__auto___8555)){
args__8313__auto__.push((arguments[i__8307__auto___8556]));

var G__8557 = (i__8307__auto___8556 + (1));
i__8307__auto___8556 = G__8557;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8554))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8554){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8554),args);
});})(g__8452__auto___8554))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8452__auto___8554){
return (function (seq8502){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8502));
});})(g__8452__auto___8554))
;


var g__8452__auto___8558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8452__auto___8558){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8559 = arguments.length;
var i__8307__auto___8560 = (0);
while(true){
if((i__8307__auto___8560 < len__8306__auto___8559)){
args__8313__auto__.push((arguments[i__8307__auto___8560]));

var G__8561 = (i__8307__auto___8560 + (1));
i__8307__auto___8560 = G__8561;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8558))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8558){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8558),args);
});})(g__8452__auto___8558))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8452__auto___8558){
return (function (seq8503){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8503));
});})(g__8452__auto___8558))
;


var g__8452__auto___8562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8452__auto___8562){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8563 = arguments.length;
var i__8307__auto___8564 = (0);
while(true){
if((i__8307__auto___8564 < len__8306__auto___8563)){
args__8313__auto__.push((arguments[i__8307__auto___8564]));

var G__8565 = (i__8307__auto___8564 + (1));
i__8307__auto___8564 = G__8565;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8562))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8562){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8562),args);
});})(g__8452__auto___8562))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8452__auto___8562){
return (function (seq8504){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8504));
});})(g__8452__auto___8562))
;


var g__8452__auto___8566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8452__auto___8566){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8567 = arguments.length;
var i__8307__auto___8568 = (0);
while(true){
if((i__8307__auto___8568 < len__8306__auto___8567)){
args__8313__auto__.push((arguments[i__8307__auto___8568]));

var G__8569 = (i__8307__auto___8568 + (1));
i__8307__auto___8568 = G__8569;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8566))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8566){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8566),args);
});})(g__8452__auto___8566))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8452__auto___8566){
return (function (seq8505){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8505));
});})(g__8452__auto___8566))
;


var g__8452__auto___8570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8452__auto___8570){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8571 = arguments.length;
var i__8307__auto___8572 = (0);
while(true){
if((i__8307__auto___8572 < len__8306__auto___8571)){
args__8313__auto__.push((arguments[i__8307__auto___8572]));

var G__8573 = (i__8307__auto___8572 + (1));
i__8307__auto___8572 = G__8573;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8570))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8570){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8570),args);
});})(g__8452__auto___8570))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8452__auto___8570){
return (function (seq8506){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8506));
});})(g__8452__auto___8570))
;


var g__8452__auto___8574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8452__auto___8574){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8575 = arguments.length;
var i__8307__auto___8576 = (0);
while(true){
if((i__8307__auto___8576 < len__8306__auto___8575)){
args__8313__auto__.push((arguments[i__8307__auto___8576]));

var G__8577 = (i__8307__auto___8576 + (1));
i__8307__auto___8576 = G__8577;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8574))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8574){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8574),args);
});})(g__8452__auto___8574))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8452__auto___8574){
return (function (seq8507){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8507));
});})(g__8452__auto___8574))
;


var g__8452__auto___8578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8452__auto___8578){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8579 = arguments.length;
var i__8307__auto___8580 = (0);
while(true){
if((i__8307__auto___8580 < len__8306__auto___8579)){
args__8313__auto__.push((arguments[i__8307__auto___8580]));

var G__8581 = (i__8307__auto___8580 + (1));
i__8307__auto___8580 = G__8581;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8578))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8578){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8578),args);
});})(g__8452__auto___8578))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8452__auto___8578){
return (function (seq8508){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8508));
});})(g__8452__auto___8578))
;


var g__8452__auto___8582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8452__auto___8582){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8583 = arguments.length;
var i__8307__auto___8584 = (0);
while(true){
if((i__8307__auto___8584 < len__8306__auto___8583)){
args__8313__auto__.push((arguments[i__8307__auto___8584]));

var G__8585 = (i__8307__auto___8584 + (1));
i__8307__auto___8584 = G__8585;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8452__auto___8582))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8452__auto___8582){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8452__auto___8582),args);
});})(g__8452__auto___8582))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8452__auto___8582){
return (function (seq8509){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8509));
});})(g__8452__auto___8582))
;

var g__8465__auto___8607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8465__auto___8607){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8608 = arguments.length;
var i__8307__auto___8609 = (0);
while(true){
if((i__8307__auto___8609 < len__8306__auto___8608)){
args__8313__auto__.push((arguments[i__8307__auto___8609]));

var G__8610 = (i__8307__auto___8609 + (1));
i__8307__auto___8609 = G__8610;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8607))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8607){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8607);
});})(g__8465__auto___8607))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8465__auto___8607){
return (function (seq8586){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8586));
});})(g__8465__auto___8607))
;


var g__8465__auto___8611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8465__auto___8611){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8612 = arguments.length;
var i__8307__auto___8613 = (0);
while(true){
if((i__8307__auto___8613 < len__8306__auto___8612)){
args__8313__auto__.push((arguments[i__8307__auto___8613]));

var G__8614 = (i__8307__auto___8613 + (1));
i__8307__auto___8613 = G__8614;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8611))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8611){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8611);
});})(g__8465__auto___8611))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8465__auto___8611){
return (function (seq8587){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8587));
});})(g__8465__auto___8611))
;


var g__8465__auto___8615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8465__auto___8615){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8616 = arguments.length;
var i__8307__auto___8617 = (0);
while(true){
if((i__8307__auto___8617 < len__8306__auto___8616)){
args__8313__auto__.push((arguments[i__8307__auto___8617]));

var G__8618 = (i__8307__auto___8617 + (1));
i__8307__auto___8617 = G__8618;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8615))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8615){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8615);
});})(g__8465__auto___8615))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8465__auto___8615){
return (function (seq8588){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8588));
});})(g__8465__auto___8615))
;


var g__8465__auto___8619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8465__auto___8619){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8620 = arguments.length;
var i__8307__auto___8621 = (0);
while(true){
if((i__8307__auto___8621 < len__8306__auto___8620)){
args__8313__auto__.push((arguments[i__8307__auto___8621]));

var G__8622 = (i__8307__auto___8621 + (1));
i__8307__auto___8621 = G__8622;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8619))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8619){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8619);
});})(g__8465__auto___8619))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8465__auto___8619){
return (function (seq8589){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8589));
});})(g__8465__auto___8619))
;


var g__8465__auto___8623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8465__auto___8623){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8624 = arguments.length;
var i__8307__auto___8625 = (0);
while(true){
if((i__8307__auto___8625 < len__8306__auto___8624)){
args__8313__auto__.push((arguments[i__8307__auto___8625]));

var G__8626 = (i__8307__auto___8625 + (1));
i__8307__auto___8625 = G__8626;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8623))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8623){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8623);
});})(g__8465__auto___8623))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8465__auto___8623){
return (function (seq8590){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8590));
});})(g__8465__auto___8623))
;


var g__8465__auto___8627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8465__auto___8627){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8628 = arguments.length;
var i__8307__auto___8629 = (0);
while(true){
if((i__8307__auto___8629 < len__8306__auto___8628)){
args__8313__auto__.push((arguments[i__8307__auto___8629]));

var G__8630 = (i__8307__auto___8629 + (1));
i__8307__auto___8629 = G__8630;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8627))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8627){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8627);
});})(g__8465__auto___8627))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8465__auto___8627){
return (function (seq8591){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8591));
});})(g__8465__auto___8627))
;


var g__8465__auto___8631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8465__auto___8631){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8632 = arguments.length;
var i__8307__auto___8633 = (0);
while(true){
if((i__8307__auto___8633 < len__8306__auto___8632)){
args__8313__auto__.push((arguments[i__8307__auto___8633]));

var G__8634 = (i__8307__auto___8633 + (1));
i__8307__auto___8633 = G__8634;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8631))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8631){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8631);
});})(g__8465__auto___8631))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8465__auto___8631){
return (function (seq8592){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8592));
});})(g__8465__auto___8631))
;


var g__8465__auto___8635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8465__auto___8635){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8636 = arguments.length;
var i__8307__auto___8637 = (0);
while(true){
if((i__8307__auto___8637 < len__8306__auto___8636)){
args__8313__auto__.push((arguments[i__8307__auto___8637]));

var G__8638 = (i__8307__auto___8637 + (1));
i__8307__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8635))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8635){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8635);
});})(g__8465__auto___8635))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8465__auto___8635){
return (function (seq8593){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8593));
});})(g__8465__auto___8635))
;


var g__8465__auto___8639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8465__auto___8639){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8640 = arguments.length;
var i__8307__auto___8641 = (0);
while(true){
if((i__8307__auto___8641 < len__8306__auto___8640)){
args__8313__auto__.push((arguments[i__8307__auto___8641]));

var G__8642 = (i__8307__auto___8641 + (1));
i__8307__auto___8641 = G__8642;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8639))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8639){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8639);
});})(g__8465__auto___8639))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8465__auto___8639){
return (function (seq8594){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8594));
});})(g__8465__auto___8639))
;


var g__8465__auto___8643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8465__auto___8643){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8644 = arguments.length;
var i__8307__auto___8645 = (0);
while(true){
if((i__8307__auto___8645 < len__8306__auto___8644)){
args__8313__auto__.push((arguments[i__8307__auto___8645]));

var G__8646 = (i__8307__auto___8645 + (1));
i__8307__auto___8645 = G__8646;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8643))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8643){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8643);
});})(g__8465__auto___8643))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8465__auto___8643){
return (function (seq8595){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8595));
});})(g__8465__auto___8643))
;


var g__8465__auto___8647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8465__auto___8647){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8648 = arguments.length;
var i__8307__auto___8649 = (0);
while(true){
if((i__8307__auto___8649 < len__8306__auto___8648)){
args__8313__auto__.push((arguments[i__8307__auto___8649]));

var G__8650 = (i__8307__auto___8649 + (1));
i__8307__auto___8649 = G__8650;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8647))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8647){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8647);
});})(g__8465__auto___8647))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8465__auto___8647){
return (function (seq8596){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8596));
});})(g__8465__auto___8647))
;


var g__8465__auto___8651 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8465__auto___8651){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8652 = arguments.length;
var i__8307__auto___8653 = (0);
while(true){
if((i__8307__auto___8653 < len__8306__auto___8652)){
args__8313__auto__.push((arguments[i__8307__auto___8653]));

var G__8654 = (i__8307__auto___8653 + (1));
i__8307__auto___8653 = G__8654;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8651))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8651){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8651);
});})(g__8465__auto___8651))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8465__auto___8651){
return (function (seq8597){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8597));
});})(g__8465__auto___8651))
;


var g__8465__auto___8655 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8465__auto___8655){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8656 = arguments.length;
var i__8307__auto___8657 = (0);
while(true){
if((i__8307__auto___8657 < len__8306__auto___8656)){
args__8313__auto__.push((arguments[i__8307__auto___8657]));

var G__8658 = (i__8307__auto___8657 + (1));
i__8307__auto___8657 = G__8658;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8655))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8655){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8655);
});})(g__8465__auto___8655))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8465__auto___8655){
return (function (seq8598){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8598));
});})(g__8465__auto___8655))
;


var g__8465__auto___8659 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8465__auto___8659){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8660 = arguments.length;
var i__8307__auto___8661 = (0);
while(true){
if((i__8307__auto___8661 < len__8306__auto___8660)){
args__8313__auto__.push((arguments[i__8307__auto___8661]));

var G__8662 = (i__8307__auto___8661 + (1));
i__8307__auto___8661 = G__8662;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8659))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8659){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8659);
});})(g__8465__auto___8659))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8465__auto___8659){
return (function (seq8599){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8599));
});})(g__8465__auto___8659))
;


var g__8465__auto___8663 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8465__auto___8663){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8664 = arguments.length;
var i__8307__auto___8665 = (0);
while(true){
if((i__8307__auto___8665 < len__8306__auto___8664)){
args__8313__auto__.push((arguments[i__8307__auto___8665]));

var G__8666 = (i__8307__auto___8665 + (1));
i__8307__auto___8665 = G__8666;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8663))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8663){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8663);
});})(g__8465__auto___8663))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8465__auto___8663){
return (function (seq8600){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8600));
});})(g__8465__auto___8663))
;


var g__8465__auto___8667 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8465__auto___8667){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8668 = arguments.length;
var i__8307__auto___8669 = (0);
while(true){
if((i__8307__auto___8669 < len__8306__auto___8668)){
args__8313__auto__.push((arguments[i__8307__auto___8669]));

var G__8670 = (i__8307__auto___8669 + (1));
i__8307__auto___8669 = G__8670;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8667))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8667){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8667);
});})(g__8465__auto___8667))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8465__auto___8667){
return (function (seq8601){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8601));
});})(g__8465__auto___8667))
;


var g__8465__auto___8671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8465__auto___8671){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8672 = arguments.length;
var i__8307__auto___8673 = (0);
while(true){
if((i__8307__auto___8673 < len__8306__auto___8672)){
args__8313__auto__.push((arguments[i__8307__auto___8673]));

var G__8674 = (i__8307__auto___8673 + (1));
i__8307__auto___8673 = G__8674;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8671))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8671){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8671);
});})(g__8465__auto___8671))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8465__auto___8671){
return (function (seq8602){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8602));
});})(g__8465__auto___8671))
;


var g__8465__auto___8675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8465__auto___8675){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8676 = arguments.length;
var i__8307__auto___8677 = (0);
while(true){
if((i__8307__auto___8677 < len__8306__auto___8676)){
args__8313__auto__.push((arguments[i__8307__auto___8677]));

var G__8678 = (i__8307__auto___8677 + (1));
i__8307__auto___8677 = G__8678;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8675))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8675){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8675);
});})(g__8465__auto___8675))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8465__auto___8675){
return (function (seq8603){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8603));
});})(g__8465__auto___8675))
;


var g__8465__auto___8679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8465__auto___8679){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8680 = arguments.length;
var i__8307__auto___8681 = (0);
while(true){
if((i__8307__auto___8681 < len__8306__auto___8680)){
args__8313__auto__.push((arguments[i__8307__auto___8681]));

var G__8682 = (i__8307__auto___8681 + (1));
i__8307__auto___8681 = G__8682;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8679))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8679){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8679);
});})(g__8465__auto___8679))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8465__auto___8679){
return (function (seq8604){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8604));
});})(g__8465__auto___8679))
;


var g__8465__auto___8683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8465__auto___8683){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8684 = arguments.length;
var i__8307__auto___8685 = (0);
while(true){
if((i__8307__auto___8685 < len__8306__auto___8684)){
args__8313__auto__.push((arguments[i__8307__auto___8685]));

var G__8686 = (i__8307__auto___8685 + (1));
i__8307__auto___8685 = G__8686;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8683))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8683){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8683);
});})(g__8465__auto___8683))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8465__auto___8683){
return (function (seq8605){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8605));
});})(g__8465__auto___8683))
;


var g__8465__auto___8687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8465__auto___8687){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8688 = arguments.length;
var i__8307__auto___8689 = (0);
while(true){
if((i__8307__auto___8689 < len__8306__auto___8688)){
args__8313__auto__.push((arguments[i__8307__auto___8689]));

var G__8690 = (i__8307__auto___8689 + (1));
i__8307__auto___8689 = G__8690;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});})(g__8465__auto___8687))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8465__auto___8687){
return (function (args){
return cljs.core.deref.call(null,g__8465__auto___8687);
});})(g__8465__auto___8687))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8465__auto___8687){
return (function (seq8606){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8606));
});})(g__8465__auto___8687))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8313__auto__ = [];
var len__8306__auto___8693 = arguments.length;
var i__8307__auto___8694 = (0);
while(true){
if((i__8307__auto___8694 < len__8306__auto___8693)){
args__8313__auto__.push((arguments[i__8307__auto___8694]));

var G__8695 = (i__8307__auto___8694 + (1));
i__8307__auto___8694 = G__8695;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__8691_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8691_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq8692){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8692));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__8696_SHARP_){
return (new Date(p1__8696_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map