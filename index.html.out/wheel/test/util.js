// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.test.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
goog.require('cljs.spec.alpha');
wheel.test.util.seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Generates a single value based on passed spec and options.
 *   Allowed options:
 *   :merge will be merged into the generated data, overriding if needed.
 *   :unique? set to true to ensure that the generated return value is unique. Can
 *   result in an infinite or very long loop if finding a unique value becomes too
 *   difficult based on the spec. Set a large size to increase chances of finding
 *   a unique value.
 *   :size works as per clojure.test.check.generators/generate
 */
wheel.test.util.fake = (function wheel$test$util$fake(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___20904 = arguments.length;
var i__9518__auto___20905 = (0);
while(true){
if((i__9518__auto___20905 < len__9517__auto___20904)){
args__9524__auto__.push((arguments[i__9518__auto___20905]));

var G__20906 = (i__9518__auto___20905 + (1));
i__9518__auto___20905 = G__20906;
=======
var args__9526__auto__ = [];
var len__9519__auto___21194 = arguments.length;
var i__9520__auto___21195 = (0);
while(true){
if((i__9520__auto___21195 < len__9519__auto___21194)){
args__9526__auto__.push((arguments[i__9520__auto___21195]));

var G__21196 = (i__9520__auto___21195 + (1));
i__9520__auto___21195 = G__21196;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__20900){
var map__20901 = p__20900;
var map__20901__$1 = ((((!((map__20901 == null)))?((((map__20901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20901):map__20901);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20901__$1,cljs.core.cst$kw$merge);
var unique_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20901__$1,cljs.core.cst$kw$unique_QMARK_);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20901__$1,cljs.core.cst$kw$size);
var size__$1 = (function (){var or__8240__auto__ = size;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21190){
var map__21191 = p__21190;
var map__21191__$1 = ((((!((map__21191 == null)))?((((map__21191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21191):map__21191);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$merge);
var unique_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$unique_QMARK_);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,cljs.core.cst$kw$size);
var size__$1 = (function (){var or__8242__auto__ = size;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return (50);
}
})();
var v = clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(k))?k:cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(k)),size__$1);
var ret = (cljs.core.truth_(merge)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,merge], 0)):v);
var unique_QMARK___$1 = (((unique_QMARK_ == null))?true:unique_QMARK_);
<<<<<<< HEAD
var seen_QMARK_ = (function (){var fexpr__20903 = cljs.core.deref(wheel.test.util.seen);
return (fexpr__20903.cljs$core$IFn$_invoke$arity$1 ? fexpr__20903.cljs$core$IFn$_invoke$arity$1(ret) : fexpr__20903.call(null,ret));
=======
var seen_QMARK_ = (function (){var fexpr__21193 = cljs.core.deref(wheel.test.util.seen);
return (fexpr__21193.cljs$core$IFn$_invoke$arity$1 ? fexpr__21193.cljs$core$IFn$_invoke$arity$1(ret) : fexpr__21193.call(null,ret));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wheel.test.util.seen,cljs.core.conj,ret);

if(cljs.core.truth_((function (){var and__8228__auto__ = seen_QMARK_;
if(cljs.core.truth_(and__8228__auto__)){
return unique_QMARK___$1;
} else {
return and__8228__auto__;
}
})())){
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$merge,merge,cljs.core.cst$kw$unique_QMARK_,unique_QMARK___$1], 0));
} else {
return ret;
}
});

wheel.test.util.fake.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
wheel.test.util.fake.cljs$lang$applyTo = (function (seq20898){
var G__20899 = cljs.core.first(seq20898);
var seq20898__$1 = cljs.core.next(seq20898);
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic(G__20899,seq20898__$1);
=======
wheel.test.util.fake.cljs$lang$applyTo = (function (seq21188){
var G__21189 = cljs.core.first(seq21188);
var seq21188__$1 = cljs.core.next(seq21188);
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic(G__21189,seq21188__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

