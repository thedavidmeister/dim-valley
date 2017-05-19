// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
var angle_16421 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
var radius_16422 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10));
try{var values__16095__auto___16423 = (function (){var x__8694__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_16422 * wheel.math.geometry.cos(angle_16421)),(radius_16422 * wheel.math.geometry.sin(angle_16421))], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.polar__GT_cartesian(radius_16422,angle_16421);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto___16424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__16095__auto___16423);
if(cljs.core.truth_(result__16096__auto___16424)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__16095__auto___16423),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__16095__auto___16423);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16394){var t__16133__auto___16425 = e16394;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,t__16133__auto___16425,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__16395 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ins));
var chunk__16396 = null;
var count__16397 = (0);
var i__16398 = (0);
while(true){
if((i__16398 < count__16397)){
var vec__16399 = chunk__16396.cljs$core$IIndexed$_nth$arity$2(null,i__16398);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(0),null);
var vec__16402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16402,(1),null);
var vec__16405_16426 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_16427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16405_16426,(0),null);
var y_16428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16405_16426,(1),null);
try{var values__16095__auto___16429 = (function (){var x__8694__auto__ = (xo - x_16427);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__16096__auto___16430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__16095__auto___16429);
if(cljs.core.truth_(result__16096__auto___16430)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__16095__auto___16429),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16427),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__16095__auto___16429);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16427),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e16408){var t__16133__auto___16431 = e16408;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__16133__auto___16431,cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16427),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__16095__auto___16432 = (function (){var x__8694__auto__ = (yo - y_16428);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__16096__auto___16433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__16095__auto___16432);
if(cljs.core.truth_(result__16096__auto___16433)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__16095__auto___16432),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__16095__auto___16432);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16409){var t__16133__auto___16434 = e16409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__16133__auto___16434,cljs.core.cst$kw$message,null], null));
}
var G__16435 = seq__16395;
var G__16436 = chunk__16396;
var G__16437 = count__16397;
var G__16438 = (i__16398 + (1));
seq__16395 = G__16435;
chunk__16396 = G__16436;
count__16397 = G__16437;
i__16398 = G__16438;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__16395);
if(temp__6738__auto__){
var seq__16395__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16395__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__16395__$1);
var G__16439 = cljs.core.chunk_rest(seq__16395__$1);
var G__16440 = c__8671__auto__;
var G__16441 = cljs.core.count(c__8671__auto__);
var G__16442 = (0);
seq__16395 = G__16439;
chunk__16396 = G__16440;
count__16397 = G__16441;
i__16398 = G__16442;
continue;
} else {
var vec__16410 = cljs.core.first(seq__16395__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410,(0),null);
var vec__16413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16410,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(1),null);
var vec__16416_16443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_16444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416_16443,(0),null);
var y_16445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16416_16443,(1),null);
try{var values__16095__auto___16446 = (function (){var x__8694__auto__ = (xo - x_16444);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__16096__auto___16447 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__16095__auto___16446);
if(cljs.core.truth_(result__16096__auto___16447)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__16095__auto___16446),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16444),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__16095__auto___16446);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16444),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e16419){var t__16133__auto___16448 = e16419;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__16133__auto___16448,cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_16444),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__16095__auto___16449 = (function (){var x__8694__auto__ = (yo - y_16445);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__16096__auto___16450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__16095__auto___16449);
if(cljs.core.truth_(result__16096__auto___16450)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__16095__auto___16449),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__16095__auto___16449);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16420){var t__16133__auto___16451 = e16420;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__16133__auto___16451,cljs.core.cst$kw$message,null], null));
}
var G__16452 = cljs.core.next(seq__16395__$1);
var G__16453 = null;
var G__16454 = (0);
var G__16455 = (0);
seq__16395 = G__16452;
chunk__16396 = G__16453;
count__16397 = G__16454;
i__16398 = G__16455;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_polar_DASH__GT_cartesian,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_polar_DASH__GT_cartesian,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/9sk/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_16462 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((360));
try{var values__16095__auto___16463 = (function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians(degrees_16462);
return cljs.core._conj((function (){var x__8694__auto____$1 = ((degrees_16462 * wheel.math.number.pi) / (180));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto___16464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16463);
if(cljs.core.truth_(result__16096__auto___16464)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16463),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16463);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16456){var t__16133__auto___16465 = e16456;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,t__16133__auto___16465,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
try{var values__16095__auto___16466 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__16096__auto___16467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16466);
if(cljs.core.truth_(result__16096__auto___16467)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16466),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16466);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16457){var t__16133__auto___16468 = e16457;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,t__16133__auto___16468,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16469 = (function (){var x__8694__auto__ = (pi / (4));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((45));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto___16470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16469);
if(cljs.core.truth_(result__16096__auto___16470)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16469),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16469);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16458){var t__16133__auto___16471 = e16458;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,t__16133__auto___16471,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16472 = (function (){var x__8694__auto__ = (pi / (2));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((90));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto___16473 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16472);
if(cljs.core.truth_(result__16096__auto___16473)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16472),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16472);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16459){var t__16133__auto___16474 = e16459;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,t__16133__auto___16474,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16475 = (function (){var x__8694__auto__ = pi;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((180));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto___16476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16475);
if(cljs.core.truth_(result__16096__auto___16476)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16475),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16475);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16460){var t__16133__auto___16477 = e16460;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,t__16133__auto___16477,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto__ = (function (){var x__8694__auto__ = (pi * (2));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((360));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto__);
if(cljs.core.truth_(result__16096__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__16096__auto__;
}catch (e16461){var t__16133__auto__ = e16461;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,t__16133__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_degrees_DASH__GT_radians,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_degrees_DASH__GT_radians,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/9sk/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_16484 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
try{var values__16095__auto___16485 = (function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(radians_16484);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__16096__auto___16486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16485);
if(cljs.core.truth_(result__16096__auto___16486)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16485),cljs.core.cst$kw$message,((radians_16484 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16485);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,((radians_16484 * (180)) / wheel.math.number.pi)], null));
}

}catch (e16478){var t__16133__auto___16487 = e16478;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,t__16133__auto___16487,cljs.core.cst$kw$message,((radians_16484 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__16095__auto___16488 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__16096__auto___16489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16488);
if(cljs.core.truth_(result__16096__auto___16489)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16488),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16488);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16479){var t__16133__auto___16490 = e16479;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,t__16133__auto___16490,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16491 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (4)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(45));
var result__16096__auto___16492 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16491);
if(cljs.core.truth_(result__16096__auto___16492)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16491),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16491);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16480){var t__16133__auto___16493 = e16480;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,t__16133__auto___16493,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16494 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (2)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(90));
var result__16096__auto___16495 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16494);
if(cljs.core.truth_(result__16096__auto___16495)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16494),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16494);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16481){var t__16133__auto___16496 = e16481;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,t__16133__auto___16496,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto___16497 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(pi);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(180));
var result__16096__auto___16498 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto___16497);
if(cljs.core.truth_(result__16096__auto___16498)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto___16497),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto___16497);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e16482){var t__16133__auto___16499 = e16482;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,t__16133__auto___16499,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(((2) * pi));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(360));
var result__16096__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__16095__auto__);
if(cljs.core.truth_(result__16096__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__16095__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__16095__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__16096__auto__;
}catch (e16483){var t__16133__auto__ = e16483;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,t__16133__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_radians_DASH__GT_degrees,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_radians_DASH__GT_degrees,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/9sk/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));
