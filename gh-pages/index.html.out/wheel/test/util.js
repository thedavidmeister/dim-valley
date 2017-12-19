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
var args__9526__auto__ = [];
var len__9519__auto___24031 = arguments.length;
var i__9520__auto___24032 = (0);
while(true){
if((i__9520__auto___24032 < len__9519__auto___24031)){
args__9526__auto__.push((arguments[i__9520__auto___24032]));

var G__24033 = (i__9520__auto___24032 + (1));
i__9520__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24027){
var map__24028 = p__24027;
var map__24028__$1 = ((((!((map__24028 == null)))?((((map__24028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24028):map__24028);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$merge);
var unique_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$unique_QMARK_);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24028__$1,cljs.core.cst$kw$size);
var size__$1 = (function (){var or__8242__auto__ = size;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return (50);
}
})();
var v = clojure.test.check.generators.generate.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(clojure.test.check.generators.generator_QMARK_(k))?k:cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(k)),size__$1);
var ret = (cljs.core.truth_(merge)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,merge], 0)):v);
var unique_QMARK___$1 = (((unique_QMARK_ == null))?true:unique_QMARK_);
var seen_QMARK_ = (function (){var fexpr__24030 = cljs.core.deref(wheel.test.util.seen);
return (fexpr__24030.cljs$core$IFn$_invoke$arity$1 ? fexpr__24030.cljs$core$IFn$_invoke$arity$1(ret) : fexpr__24030.call(null,ret));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wheel.test.util.seen,cljs.core.conj,ret);

if(cljs.core.truth_((function (){var and__8230__auto__ = seen_QMARK_;
if(cljs.core.truth_(and__8230__auto__)){
return unique_QMARK___$1;
} else {
return and__8230__auto__;
}
})())){
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$merge,merge,cljs.core.cst$kw$unique_QMARK_,unique_QMARK___$1], 0));
} else {
return ret;
}
});

wheel.test.util.fake.cljs$lang$maxFixedArity = (1);

wheel.test.util.fake.cljs$lang$applyTo = (function (seq24025){
var G__24026 = cljs.core.first(seq24025);
var seq24025__$1 = cljs.core.next(seq24025);
return wheel.test.util.fake.cljs$core$IFn$_invoke$arity$variadic(G__24026,seq24025__$1);
});

