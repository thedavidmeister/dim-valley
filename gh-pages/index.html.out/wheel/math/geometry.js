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
var angle_24111 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
var radius_24112 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10));
try{var values__17649__auto___24113 = (function (){var x__8694__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_24112 * wheel.math.geometry.cos(angle_24111)),(radius_24112 * wheel.math.geometry.sin(angle_24111))], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.polar__GT_cartesian(radius_24112,angle_24111);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___24114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___24113);
if(cljs.core.truth_(result__17650__auto___24114)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___24113),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___24113);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24084){var t__17687__auto___24115 = e24084;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,t__17687__auto___24115,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__24085 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ins));
var chunk__24086 = null;
var count__24087 = (0);
var i__24088 = (0);
while(true){
if((i__24088 < count__24087)){
var vec__24089 = chunk__24086.cljs$core$IIndexed$_nth$arity$2(null,i__24088);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,(0),null);
var vec__24092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24089,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24092,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24092,(1),null);
var vec__24095_24116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095_24116,(0),null);
var y_24118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095_24116,(1),null);
try{var values__17649__auto___24119 = (function (){var x__8694__auto__ = (xo - x_24117);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___24120 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17649__auto___24119);
if(cljs.core.truth_(result__17650__auto___24120)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17649__auto___24119),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24117),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17649__auto___24119);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24117),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24098){var t__17687__auto___24121 = e24098;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17687__auto___24121,cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24117),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17649__auto___24122 = (function (){var x__8694__auto__ = (yo - y_24118);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___24123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17649__auto___24122);
if(cljs.core.truth_(result__17650__auto___24123)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17649__auto___24122),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17649__auto___24122);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24099){var t__17687__auto___24124 = e24099;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17687__auto___24124,cljs.core.cst$kw$message,null], null));
}
var G__24125 = seq__24085;
var G__24126 = chunk__24086;
var G__24127 = count__24087;
var G__24128 = (i__24088 + (1));
seq__24085 = G__24125;
chunk__24086 = G__24126;
count__24087 = G__24127;
i__24088 = G__24128;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24085);
if(temp__6738__auto__){
var seq__24085__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24085__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__24085__$1);
var G__24129 = cljs.core.chunk_rest(seq__24085__$1);
var G__24130 = c__8671__auto__;
var G__24131 = cljs.core.count(c__8671__auto__);
var G__24132 = (0);
seq__24085 = G__24129;
chunk__24086 = G__24130;
count__24087 = G__24131;
i__24088 = G__24132;
continue;
} else {
var vec__24100 = cljs.core.first(seq__24085__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24100,(0),null);
var vec__24103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24100,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24103,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24103,(1),null);
var vec__24106_24133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106_24133,(0),null);
var y_24135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106_24133,(1),null);
try{var values__17649__auto___24136 = (function (){var x__8694__auto__ = (xo - x_24134);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___24137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17649__auto___24136);
if(cljs.core.truth_(result__17650__auto___24137)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17649__auto___24136),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24134),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17649__auto___24136);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24134),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24109){var t__17687__auto___24138 = e24109;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17687__auto___24138,cljs.core.cst$kw$message,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24134),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17649__auto___24139 = (function (){var x__8694__auto__ = (yo - y_24135);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___24140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17649__auto___24139);
if(cljs.core.truth_(result__17650__auto___24140)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17649__auto___24139),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17649__auto___24139);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24110){var t__17687__auto___24141 = e24110;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17687__auto___24141,cljs.core.cst$kw$message,null], null));
}
var G__24142 = cljs.core.next(seq__24085__$1);
var G__24143 = null;
var G__24144 = (0);
var G__24145 = (0);
seq__24085 = G__24142;
chunk__24086 = G__24143;
count__24087 = G__24144;
i__24088 = G__24145;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_polar_DASH__GT_cartesian,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_polar_DASH__GT_cartesian,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6o/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_24152 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((360));
try{var values__17649__auto___24153 = (function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians(degrees_24152);
return cljs.core._conj((function (){var x__8694__auto____$1 = ((degrees_24152 * wheel.math.number.pi) / (180));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___24154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24153);
if(cljs.core.truth_(result__17650__auto___24154)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24153),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24153);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24146){var t__17687__auto___24155 = e24146;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,t__17687__auto___24155,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
try{var values__17649__auto___24156 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__17650__auto___24157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24156);
if(cljs.core.truth_(result__17650__auto___24157)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24156),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24156);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24147){var t__17687__auto___24158 = e24147;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,t__17687__auto___24158,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24159 = (function (){var x__8694__auto__ = (pi / (4));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((45));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___24160 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24159);
if(cljs.core.truth_(result__17650__auto___24160)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24159),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24159);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24148){var t__17687__auto___24161 = e24148;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,t__17687__auto___24161,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24162 = (function (){var x__8694__auto__ = (pi / (2));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((90));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___24163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24162);
if(cljs.core.truth_(result__17650__auto___24163)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24162),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24162);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24149){var t__17687__auto___24164 = e24149;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,t__17687__auto___24164,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24165 = (function (){var x__8694__auto__ = pi;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((180));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___24166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24165);
if(cljs.core.truth_(result__17650__auto___24166)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24165),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24165);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24150){var t__17687__auto___24167 = e24150;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,t__17687__auto___24167,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = (function (){var x__8694__auto__ = (pi * (2));
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians((360));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e24151){var t__17687__auto__ = e24151;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_degrees_DASH__GT_radians,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_degrees_DASH__GT_radians,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6o/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_24174 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
try{var values__17649__auto___24175 = (function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(radians_24174);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___24176 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24175);
if(cljs.core.truth_(result__17650__auto___24176)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24175),cljs.core.cst$kw$message,((radians_24174 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24175);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,((radians_24174 * (180)) / wheel.math.number.pi)], null));
}

}catch (e24168){var t__17687__auto___24177 = e24168;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,t__17687__auto___24177,cljs.core.cst$kw$message,((radians_24174 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__17649__auto___24178 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__17650__auto___24179 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24178);
if(cljs.core.truth_(result__17650__auto___24179)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24178),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24178);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24169){var t__17687__auto___24180 = e24169;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,t__17687__auto___24180,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24181 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (4)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(45));
var result__17650__auto___24182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24181);
if(cljs.core.truth_(result__17650__auto___24182)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24181),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24181);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24170){var t__17687__auto___24183 = e24170;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,t__17687__auto___24183,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24184 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (2)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(90));
var result__17650__auto___24185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24184);
if(cljs.core.truth_(result__17650__auto___24185)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24184),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24184);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24171){var t__17687__auto___24186 = e24171;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,t__17687__auto___24186,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___24187 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(pi);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(180));
var result__17650__auto___24188 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto___24187);
if(cljs.core.truth_(result__17650__auto___24188)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto___24187),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto___24187);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24172){var t__17687__auto___24189 = e24172;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,t__17687__auto___24189,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees(((2) * pi));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(360));
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e24173){var t__17687__auto__ = e24173;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_radians_DASH__GT_degrees,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_radians_DASH__GT_degrees,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6o/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));
