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
var angle_24796 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
var radius_24797 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10));
try{var values__17365__auto___24798 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_24797 * wheel.math.geometry.cos(angle_24796)),(radius_24797 * wheel.math.geometry.sin(angle_24796))], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.polar__GT_cartesian(radius_24797,angle_24796);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24798);
if(cljs.core.truth_(result__17366__auto___24799)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24798),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24798);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24769){var t__17410__auto___24800 = e24769;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,t__17410__auto___24800,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__24770 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ins));
var chunk__24771 = null;
var count__24772 = (0);
var i__24773 = (0);
while(true){
if((i__24773 < count__24772)){
var vec__24774 = chunk__24771.cljs$core$IIndexed$_nth$arity$2(null,i__24773);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24774,(0),null);
var vec__24777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24774,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24777,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24777,(1),null);
var vec__24780_24801 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24780_24801,(0),null);
var y_24803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24780_24801,(1),null);
try{var values__17365__auto___24804 = (function (){var x__9196__auto__ = (xo - x_24802);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24805 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24804);
if(cljs.core.truth_(result__17366__auto___24805)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24804),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24802)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24804);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24802)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24783){var t__17410__auto___24806 = e24783;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17410__auto___24806,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24802)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17365__auto___24807 = (function (){var x__9196__auto__ = (yo - y_24803);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24808 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24807);
if(cljs.core.truth_(result__17366__auto___24808)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24807),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24807);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24784){var t__17410__auto___24809 = e24784;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17410__auto___24809,cljs.core.cst$kw$message,null], null));
}
var G__24810 = seq__24770;
var G__24811 = chunk__24771;
var G__24812 = count__24772;
var G__24813 = (i__24773 + (1));
seq__24770 = G__24810;
chunk__24771 = G__24811;
count__24772 = G__24812;
i__24773 = G__24813;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24770);
if(temp__5290__auto__){
var seq__24770__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24770__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__24770__$1);
var G__24814 = cljs.core.chunk_rest(seq__24770__$1);
var G__24815 = c__9173__auto__;
var G__24816 = cljs.core.count(c__9173__auto__);
var G__24817 = (0);
seq__24770 = G__24814;
chunk__24771 = G__24815;
count__24772 = G__24816;
i__24773 = G__24817;
continue;
} else {
var vec__24785 = cljs.core.first(seq__24770__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(0),null);
var vec__24788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24785,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24788,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24788,(1),null);
var vec__24791_24818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24791_24818,(0),null);
var y_24820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24791_24818,(1),null);
try{var values__17365__auto___24821 = (function (){var x__9196__auto__ = (xo - x_24819);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24821);
if(cljs.core.truth_(result__17366__auto___24822)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24821),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24819)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24821);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24819)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24794){var t__17410__auto___24823 = e24794;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17410__auto___24823,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24819)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17365__auto___24824 = (function (){var x__9196__auto__ = (yo - y_24820);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17365__auto___24824);
if(cljs.core.truth_(result__17366__auto___24825)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17365__auto___24824),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17365__auto___24824);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24795){var t__17410__auto___24826 = e24795;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17410__auto___24826,cljs.core.cst$kw$message,null], null));
}
var G__24827 = cljs.core.next(seq__24770__$1);
var G__24828 = null;
var G__24829 = (0);
var G__24830 = (0);
seq__24770 = G__24827;
chunk__24771 = G__24828;
count__24772 = G__24829;
i__24773 = G__24830;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_polar_DASH__GT_cartesian,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_polar_DASH__GT_cartesian,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e72/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_24837 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((360));
try{var values__17365__auto___24838 = (function (){var x__9196__auto__ = wheel.math.geometry.degrees__GT_radians(degrees_24837);
return cljs.core._conj((function (){var x__9196__auto____$1 = ((degrees_24837 * wheel.math.number.pi) / (180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24839 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24838);
if(cljs.core.truth_(result__17366__auto___24839)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24838),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24838);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24831){var t__17410__auto___24840 = e24831;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,t__17410__auto___24840,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
try{var values__17365__auto___24841 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.degrees__GT_radians((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(0));
var result__17366__auto___24842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24841);
if(cljs.core.truth_(result__17366__auto___24842)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24841),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24841);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24832){var t__17410__auto___24843 = e24832;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,t__17410__auto___24843,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24844 = (function (){var x__9196__auto__ = (pi / (4));
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((45));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24845 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24844);
if(cljs.core.truth_(result__17366__auto___24845)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24844),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24844);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24833){var t__17410__auto___24846 = e24833;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,t__17410__auto___24846,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24847 = (function (){var x__9196__auto__ = (pi / (2));
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((90));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24848 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24847);
if(cljs.core.truth_(result__17366__auto___24848)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24847),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24847);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24834){var t__17410__auto___24849 = e24834;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,t__17410__auto___24849,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24850 = (function (){var x__9196__auto__ = pi;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.math.geometry.degrees__GT_radians((180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24851 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24850);
if(cljs.core.truth_(result__17366__auto___24851)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24850),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24850);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24835){var t__17410__auto___24852 = e24835;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,t__17410__auto___24852,cljs.core.cst$kw$message,null], null));
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
}catch (e24836){var t__17410__auto__ = e24836;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_degrees_DASH__GT_radians,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_degrees_DASH__GT_radians,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e72/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_24859 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
try{var values__17365__auto___24860 = (function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees(radians_24859);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24860);
if(cljs.core.truth_(result__17366__auto___24861)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24860),cljs.core.cst$kw$message,((radians_24859 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24860);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,((radians_24859 * (180)) / wheel.math.number.pi)], null));
}

}catch (e24853){var t__17410__auto___24862 = e24853;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,t__17410__auto___24862,cljs.core.cst$kw$message,((radians_24859 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__17365__auto___24863 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(0));
var result__17366__auto___24864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24863);
if(cljs.core.truth_(result__17366__auto___24864)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24863),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24863);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24854){var t__17410__auto___24865 = e24854;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,t__17410__auto___24865,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24866 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (4)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(45));
var result__17366__auto___24867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24866);
if(cljs.core.truth_(result__17366__auto___24867)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24866),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24866);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24855){var t__17410__auto___24868 = e24855;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,t__17410__auto___24868,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24869 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (2)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(90));
var result__17366__auto___24870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24869);
if(cljs.core.truth_(result__17366__auto___24870)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24869),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24869);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24856){var t__17410__auto___24871 = e24856;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,t__17410__auto___24871,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24872 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.geometry.radians__GT_degrees(pi);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(180));
var result__17366__auto___24873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17365__auto___24872);
if(cljs.core.truth_(result__17366__auto___24873)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17365__auto___24872),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17365__auto___24872);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24857){var t__17410__auto___24874 = e24857;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,t__17410__auto___24874,cljs.core.cst$kw$message,null], null));
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
}catch (e24858){var t__17410__auto__ = e24858;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_radians_DASH__GT_degrees,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_radians_DASH__GT_degrees,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e72/i688ot/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));
