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
var angle_24941 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
var radius_24942 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((10));
try{var values__17363__auto___24943 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_24942 * wheel.math.geometry.cos(angle_24941)),(radius_24942 * wheel.math.geometry.sin(angle_24941))], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.math.geometry.polar__GT_cartesian(radius_24942,angle_24941);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24944 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24943);
if(cljs.core.truth_(result__17364__auto___24944)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24943),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24943);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24914){var t__17408__auto___24945 = e24914;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$angle)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$radius,cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$angle))], null),cljs.core.list(cljs.core.cst$sym$polar_DASH__GT_cartesian,cljs.core.cst$sym$radius,cljs.core.cst$sym$angle)),cljs.core.cst$kw$actual,t__17408__auto___24945,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__24915 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ins));
var chunk__24916 = null;
var count__24917 = (0);
var i__24918 = (0);
while(true){
if((i__24918 < count__24917)){
var vec__24919 = chunk__24916.cljs$core$IIndexed$_nth$arity$2(null,i__24918);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24919,(0),null);
var vec__24922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24919,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24922,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24922,(1),null);
var vec__24925_24946 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24925_24946,(0),null);
var y_24948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24925_24946,(1),null);
try{var values__17363__auto___24949 = (function (){var x__9194__auto__ = (xo - x_24947);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17363__auto___24949);
if(cljs.core.truth_(result__17364__auto___24950)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17363__auto___24949),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24947)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17363__auto___24949);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24947)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24928){var t__17408__auto___24951 = e24928;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17408__auto___24951,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24947)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17363__auto___24952 = (function (){var x__9194__auto__ = (yo - y_24948);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17363__auto___24952);
if(cljs.core.truth_(result__17364__auto___24953)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17363__auto___24952),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17363__auto___24952);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24929){var t__17408__auto___24954 = e24929;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17408__auto___24954,cljs.core.cst$kw$message,null], null));
}
var G__24955 = seq__24915;
var G__24956 = chunk__24916;
var G__24957 = count__24917;
var G__24958 = (i__24918 + (1));
seq__24915 = G__24955;
chunk__24916 = G__24956;
count__24917 = G__24957;
i__24918 = G__24958;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24915);
if(temp__5290__auto__){
var seq__24915__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24915__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__24915__$1);
var G__24959 = cljs.core.chunk_rest(seq__24915__$1);
var G__24960 = c__9171__auto__;
var G__24961 = cljs.core.count(c__9171__auto__);
var G__24962 = (0);
seq__24915 = G__24959;
chunk__24916 = G__24960;
count__24917 = G__24961;
i__24918 = G__24962;
continue;
} else {
var vec__24930 = cljs.core.first(seq__24915__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24930,(0),null);
var vec__24933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24930,(1),null);
var xo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24933,(0),null);
var yo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24933,(1),null);
var vec__24936_24963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.polar__GT_cartesian,i);
var x_24964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24936_24963,(0),null);
var y_24965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24936_24963,(1),null);
try{var values__17363__auto___24966 = (function (){var x__9194__auto__ = (xo - x_24964);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17363__auto___24966);
if(cljs.core.truth_(result__17364__auto___24967)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17363__auto___24966),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24964)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17363__auto___24966);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24964)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e24939){var t__17408__auto___24968 = e24939;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$xo,cljs.core.cst$sym$x)),cljs.core.cst$kw$actual,t__17408__auto___24968,cljs.core.cst$kw$message,["xo and x not within tolerance. xo:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo)," x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_24964)," i:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__17363__auto___24969 = (function (){var x__9194__auto__ = (yo - y_24965);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(within_tolerance_QMARK_,values__17363__auto___24969);
if(cljs.core.truth_(result__17364__auto___24970)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core.cons(within_tolerance_QMARK_,values__17363__auto___24969),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,values__17363__auto___24969);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24940){var t__17408__auto___24971 = e24940;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$within_DASH_tolerance_QMARK_,cljs.core.list(cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$yo,cljs.core.cst$sym$y)),cljs.core.cst$kw$actual,t__17408__auto___24971,cljs.core.cst$kw$message,null], null));
}
var G__24972 = cljs.core.next(seq__24915__$1);
var G__24973 = null;
var G__24974 = (0);
var G__24975 = (0);
seq__24915 = G__24972;
chunk__24916 = G__24973;
count__24917 = G__24974;
i__24918 = G__24975;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_polar_DASH__GT_cartesian,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_polar_DASH__GT_cartesian,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_24982 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1((360));
try{var values__17363__auto___24983 = (function (){var x__9194__auto__ = wheel.math.geometry.degrees__GT_radians(degrees_24982);
return cljs.core._conj((function (){var x__9194__auto____$1 = ((degrees_24982 * wheel.math.number.pi) / (180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___24983);
if(cljs.core.truth_(result__17364__auto___24984)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___24983),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___24983);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24976){var t__17408__auto___24985 = e24976;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,cljs.core.cst$sym$degrees),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$degrees,cljs.core.cst$sym$wheel$math$number_SLASH_pi),(180))),cljs.core.cst$kw$actual,t__17408__auto___24985,cljs.core.cst$kw$message,null], null));
}
var pi = wheel.math.number.pi;
try{var values__17363__auto___24986 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.degrees__GT_radians((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(0));
var result__17364__auto___24987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___24986);
if(cljs.core.truth_(result__17364__auto___24987)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___24986),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___24986);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24977){var t__17408__auto___24988 = e24977;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(0))),cljs.core.cst$kw$actual,t__17408__auto___24988,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24989 = (function (){var x__9194__auto__ = (pi / (4));
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.math.geometry.degrees__GT_radians((45));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24990 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___24989);
if(cljs.core.truth_(result__17364__auto___24990)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___24989),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___24989);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24978){var t__17408__auto___24991 = e24978;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(45))),cljs.core.cst$kw$actual,t__17408__auto___24991,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24992 = (function (){var x__9194__auto__ = (pi / (2));
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.math.geometry.degrees__GT_radians((90));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___24992);
if(cljs.core.truth_(result__17364__auto___24993)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___24992),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___24992);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24979){var t__17408__auto___24994 = e24979;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(90))),cljs.core.cst$kw$actual,t__17408__auto___24994,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24995 = (function (){var x__9194__auto__ = pi;
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.math.geometry.degrees__GT_radians((180));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___24996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___24995);
if(cljs.core.truth_(result__17364__auto___24996)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___24995),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___24995);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24980){var t__17408__auto___24997 = e24980;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$pi,cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(180))),cljs.core.cst$kw$actual,t__17408__auto___24997,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = (pi * (2));
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.math.geometry.degrees__GT_radians((360));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e24981){var t__17408__auto__ = e24981;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pi,(2)),cljs.core.list(cljs.core.cst$sym$degrees_DASH__GT_radians,(360))),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_degrees_DASH__GT_radians,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_degrees_DASH__GT_radians,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_25004 = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(((2) * wheel.math.number.pi));
try{var values__17363__auto___25005 = (function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees(radians_25004);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___25006 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___25005);
if(cljs.core.truth_(result__17364__auto___25006)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___25005),cljs.core.cst$kw$message,((radians_25004 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___25005);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,((radians_25004 * (180)) / wheel.math.number.pi)], null));
}

}catch (e24998){var t__17408__auto___25007 = e24998;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$radians)),cljs.core.cst$kw$actual,t__17408__auto___25007,cljs.core.cst$kw$message,((radians_25004 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__17363__auto___25008 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(0));
var result__17364__auto___25009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___25008);
if(cljs.core.truth_(result__17364__auto___25009)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___25008),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___25008);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24999){var t__17408__auto___25010 = e24999;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(0),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,(0))),cljs.core.cst$kw$actual,t__17408__auto___25010,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___25011 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (4)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(45));
var result__17364__auto___25012 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___25011);
if(cljs.core.truth_(result__17364__auto___25012)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___25011),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___25011);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25000){var t__17408__auto___25013 = e25000;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(45),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(4)))),cljs.core.cst$kw$actual,t__17408__auto___25013,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___25014 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees((pi / (2)));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(90));
var result__17364__auto___25015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___25014);
if(cljs.core.truth_(result__17364__auto___25015)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___25014),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___25014);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25001){var t__17408__auto___25016 = e25001;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(90),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$pi,(2)))),cljs.core.cst$kw$actual,t__17408__auto___25016,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___25017 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees(pi);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(180));
var result__17364__auto___25018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto___25017);
if(cljs.core.truth_(result__17364__auto___25018)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto___25017),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto___25017);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25002){var t__17408__auto___25019 = e25002;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(180),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.cst$sym$pi)),cljs.core.cst$kw$actual,t__17408__auto___25019,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.geometry.radians__GT_degrees(((2) * pi));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(360));
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ__EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ__EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ__EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e25003){var t__17408__auto__ = e25003;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ__EQ_,(360),cljs.core.list(cljs.core.cst$sym$radians_DASH__GT_degrees,cljs.core.list(cljs.core.cst$sym$_STAR_,(2),cljs.core.cst$sym$pi))),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},cljs.core.cst$sym$wheel$math$geometry_SLASH__QMARK__QMARK_radians_DASH__GT_degrees,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$geometry,cljs.core.cst$sym$_QMARK__QMARK_radians_DASH__GT_degrees,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));
