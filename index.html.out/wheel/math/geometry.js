// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.math.geometry');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.math.number');
goog.require('cljs.test');
wheel.math.geometry.cos = (function wheel$math$geometry$cos(radians){
return Math.cos(radians);
});
wheel.math.geometry.sin = (function wheel$math$geometry$sin(radians){
return Math.sin(radians);
});
wheel.math.geometry.abs = (function wheel$math$geometry$abs(n){
return Math.abs(n);
});
/**
 * Given a radius (unitless) and rotation in radians, returns (unitless) [x y] co-ordinates
 */
wheel.math.geometry.polar__GT_cartesian = (function wheel$math$geometry$polar__GT_cartesian(radius,radians){
if(((radius > (0))) || ((radius === (0)))){
} else {
throw (new Error("Assert failed: (or (pos? radius) (zero? radius))"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * wheel.math.geometry.cos(radians)),(radius * wheel.math.geometry.sin(radians))], null);
});
/**
 * Given a rotation in degrees, returns the same rotation in radians
 */
wheel.math.geometry.degrees__GT_radians = (function wheel$math$geometry$degrees__GT_radians(degrees){
return ((degrees * wheel.math.number.pi) / (180));
});
/**
 * Given a rotation in radians, returns the same rotation in degrees
 */
wheel.math.geometry.radians__GT_degrees = (function wheel$math$geometry$radians__GT_degrees(radians){
return ((radians * (180)) / wheel.math.number.pi);
});
wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian = (function wheel$math$geometry$_QMARK__QMARK_polar__GT_cartesian(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test = (function (){
var angle_24987 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
var radius_24988 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10));
try{var values__17365__auto___24989 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_24988 * wheel.math.geometry.cos(angle_24987)),(radius_24988 * wheel.math.geometry.sin(angle_24987))], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.polar__GT_cartesian(radius_24988,angle_24987);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24989);
if(cljs.core.truth_(result__17366__auto___24990)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24989),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24989);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24960){var t__17410__auto___24991 = e24960;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,t__17410__auto___24991,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__24961 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ins));
var chunk__24962 = null;
var count__24963 = (0);
var i__24964 = (0);
while(true){
if((i__24964 < count__24963)){
var vec__24965 = chunk__24962.cljs$core$IIndexed$_nth$arity$2(null,i__24964);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(0),null);
var vec__24968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968,(1),null);
var vec__24971_24992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24971_24992,(0),null);
var y_24994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24971_24992,(1),null);
try{var values__17365__auto___24995 = (function (){var x__9196__auto__ = (xo - x_24993);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24995);
if(cljs.core.truth_(result__17366__auto___24996)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24995),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24993)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24995);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24993)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24974){var t__17410__auto___24997 = e24974;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17410__auto___24997,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24993)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17365__auto___24998 = (function (){var x__9196__auto__ = (yo - y_24994);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24999 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24998);
if(cljs.core.truth_(result__17366__auto___24999)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24998),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24998);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24975){var t__17410__auto___25000 = e24975;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17410__auto___25000,cljs.core.cst$kw$message,null], null));
}
var G__25001 = seq__24961;
var G__25002 = chunk__24962;
var G__25003 = count__24963;
var G__25004 = (i__24964 + (1));
seq__24961 = G__25001;
chunk__24962 = G__25002;
count__24963 = G__25003;
i__24964 = G__25004;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24961);
if(temp__5290__auto__){
var seq__24961__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24961__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__24961__$1);
var G__25005 = cljs.core.chunk_rest(seq__24961__$1);
var G__25006 = c__9173__auto__;
var G__25007 = cljs.core.count(c__9173__auto__);
var G__25008 = (0);
seq__24961 = G__25005;
chunk__24962 = G__25006;
count__24963 = G__25007;
i__24964 = G__25008;
continue;
} else {
var vec__24976 = cljs.core.first(seq__24961__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976,(0),null);
var vec__24979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24979,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24979,(1),null);
var vec__24982_25009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_25010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982_25009,(0),null);
var y_25011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982_25009,(1),null);
try{var values__17365__auto___25012 = (function (){var x__9196__auto__ = (xo - x_25010);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___25013 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___25012);
if(cljs.core.truth_(result__17366__auto___25013)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___25012),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_25010)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___25012);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_25010)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24985){var t__17410__auto___25014 = e24985;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17410__auto___25014,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_25010)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17365__auto___25015 = (function (){var x__9196__auto__ = (yo - y_25011);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___25016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___25015);
if(cljs.core.truth_(result__17366__auto___25016)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___25015),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___25015);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24986){var t__17410__auto___25017 = e24986;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17410__auto___25017,cljs.core.cst$kw$message,null], null));
}
var G__25018 = cljs.core.next(seq__24961__$1);
var G__25019 = null;
var G__25020 = (0);
var G__25021 = (0);
seq__24961 = G__25018;
chunk__24962 = G__25019;
count__24963 = G__25020;
i__24964 = G__25021;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_polar_DASH__GT_cartesian,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_polar_DASH__GT_cartesian,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_25028 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((360));
try{var values__17365__auto___25029 = (function (){var x__9196__auto__ = wheel.math.geometry.degrees__GT_radians(degrees_25028);
return cljs.core._conj((function (){var x__9196__auto____$1 = ((degrees_25028 * wheel.math.number.pi) / (180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___25030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25029);
if(cljs.core.truth_(result__17366__auto___25030)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25029),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25029);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25022){var t__17410__auto___25031 = e25022;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,t__17410__auto___25031,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
try{var values__17365__auto___25032 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.degrees__GT_radians((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(0));
var result__17366__auto___25033 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25032);
if(cljs.core.truth_(result__17366__auto___25033)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25032),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25032);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25023){var t__17410__auto___25034 = e25023;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,t__17410__auto___25034,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25035 = (function (){var x__9196__auto__ = (pi / (4));
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((45));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___25036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25035);
if(cljs.core.truth_(result__17366__auto___25036)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25035),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25035);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25024){var t__17410__auto___25037 = e25024;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,t__17410__auto___25037,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25038 = (function (){var x__9196__auto__ = (pi / (2));
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((90));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___25039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25038);
if(cljs.core.truth_(result__17366__auto___25039)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25038),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25038);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25025){var t__17410__auto___25040 = e25025;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,t__17410__auto___25040,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25041 = (function (){var x__9196__auto__ = pi;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___25042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25041);
if(cljs.core.truth_(result__17366__auto___25042)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25041),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25041);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25026){var t__17410__auto___25043 = e25026;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,t__17410__auto___25043,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = (pi * (2));
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((360));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e25027){var t__17410__auto__ = e25027;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_degrees_DASH__GT_radians,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_degrees_DASH__GT_radians,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_25050 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
try{var values__17365__auto___25051 = (function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees(radians_25050);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___25052 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25051);
if(cljs.core.truth_(result__17366__auto___25052)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25051),cljs.core.cst$kw$message,((radians_25050 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25051);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,((radians_25050 * (180)) / wheel.math.number.pi)], null));
}

}catch (e25044){var t__17410__auto___25053 = e25044;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,t__17410__auto___25053,cljs.core.cst$kw$message,((radians_25050 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__17365__auto___25054 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(0));
var result__17366__auto___25055 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25054);
if(cljs.core.truth_(result__17366__auto___25055)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25054),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25054);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25045){var t__17410__auto___25056 = e25045;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,t__17410__auto___25056,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25057 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (4)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(45));
var result__17366__auto___25058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25057);
if(cljs.core.truth_(result__17366__auto___25058)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25057),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25057);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25046){var t__17410__auto___25059 = e25046;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,t__17410__auto___25059,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25060 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (2)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(90));
var result__17366__auto___25061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25060);
if(cljs.core.truth_(result__17366__auto___25061)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25060),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25060);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25047){var t__17410__auto___25062 = e25047;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,t__17410__auto___25062,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25063 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees(pi);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(180));
var result__17366__auto___25064 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___25063);
if(cljs.core.truth_(result__17366__auto___25064)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___25063),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___25063);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25048){var t__17410__auto___25065 = e25048;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,t__17410__auto___25065,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees(((2) * pi));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(360));
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e25049){var t__17410__auto__ = e25049;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_radians_DASH__GT_degrees,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_radians_DASH__GT_degrees,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));
