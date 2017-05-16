// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.math.geometry');
goog.require('cljs.core');
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

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * wheel.math.geometry.cos.call(null,radians)),(radius * wheel.math.geometry.sin.call(null,radians))], null);
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
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test = (function (){
var angle_14390 = cljs.core.rand.call(null,((2) * wheel.math.number.pi));
var radius_14391 = cljs.core.rand.call(null,(10));
try{var values__12430__auto___14392 = (function (){var x__8694__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_14391 * wheel.math.geometry.cos.call(null,angle_14390)),(radius_14391 * wheel.math.geometry.sin.call(null,angle_14390))], null);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.polar__GT_cartesian.call(null,radius_14391,angle_14390);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto___14393 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14392);
if(cljs.core.truth_(result__12431__auto___14393)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14392),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14392);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14363){var t__12468__auto___14394 = e14363;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14394,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs.call(null,n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.call(null,((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__14364 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),ins));
var chunk__14365 = null;
var count__14366 = (0);
var i__14367 = (0);
while(true){
if((i__14367 < count__14366)){
var vec__14368 = cljs.core._nth.call(null,chunk__14365,i__14367);
var i = cljs.core.nth.call(null,vec__14368,(0),null);
var vec__14371 = cljs.core.nth.call(null,vec__14368,(1),null);
var xo = cljs.core.nth.call(null,vec__14371,(0),null);
var yo = cljs.core.nth.call(null,vec__14371,(1),null);
var vec__14374_14395 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_14396 = cljs.core.nth.call(null,vec__14374_14395,(0),null);
var y_14397 = cljs.core.nth.call(null,vec__14374_14395,(1),null);
try{var values__12430__auto___14398 = (function (){var x__8694__auto__ = (xo - x_14396);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14399 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12430__auto___14398);
if(cljs.core.truth_(result__12431__auto___14399)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12430__auto___14398),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14396),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12430__auto___14398);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14396),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e14377){var t__12468__auto___14400 = e14377;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14400,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14396),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12430__auto___14401 = (function (){var x__8694__auto__ = (yo - y_14397);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14402 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12430__auto___14401);
if(cljs.core.truth_(result__12431__auto___14402)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12430__auto___14401),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12430__auto___14401);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14378){var t__12468__auto___14403 = e14378;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14403,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14404 = seq__14364;
var G__14405 = chunk__14365;
var G__14406 = count__14366;
var G__14407 = (i__14367 + (1));
seq__14364 = G__14404;
chunk__14365 = G__14405;
count__14366 = G__14406;
i__14367 = G__14407;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14364);
if(temp__6738__auto__){
var seq__14364__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14364__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14364__$1);
var G__14408 = cljs.core.chunk_rest.call(null,seq__14364__$1);
var G__14409 = c__8671__auto__;
var G__14410 = cljs.core.count.call(null,c__8671__auto__);
var G__14411 = (0);
seq__14364 = G__14408;
chunk__14365 = G__14409;
count__14366 = G__14410;
i__14367 = G__14411;
continue;
} else {
var vec__14379 = cljs.core.first.call(null,seq__14364__$1);
var i = cljs.core.nth.call(null,vec__14379,(0),null);
var vec__14382 = cljs.core.nth.call(null,vec__14379,(1),null);
var xo = cljs.core.nth.call(null,vec__14382,(0),null);
var yo = cljs.core.nth.call(null,vec__14382,(1),null);
var vec__14385_14412 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_14413 = cljs.core.nth.call(null,vec__14385_14412,(0),null);
var y_14414 = cljs.core.nth.call(null,vec__14385_14412,(1),null);
try{var values__12430__auto___14415 = (function (){var x__8694__auto__ = (xo - x_14413);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14416 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12430__auto___14415);
if(cljs.core.truth_(result__12431__auto___14416)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12430__auto___14415),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12430__auto___14415);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e14388){var t__12468__auto___14417 = e14388;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14417,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14413),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12430__auto___14418 = (function (){var x__8694__auto__ = (yo - y_14414);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14419 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12430__auto___14418);
if(cljs.core.truth_(result__12431__auto___14419)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12430__auto___14418),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12430__auto___14418);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14389){var t__12468__auto___14420 = e14389;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14420,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14421 = cljs.core.next.call(null,seq__14364__$1);
var G__14422 = null;
var G__14423 = (0);
var G__14424 = (0);
seq__14364 = G__14421;
chunk__14365 = G__14422;
count__14366 = G__14423;
i__14367 = G__14424;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},new cljs.core.Symbol("wheel.math.geometry","??polar->cartesian","wheel.math.geometry/??polar->cartesian",-751447140,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??polar->cartesian","??polar->cartesian",-924976959,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1ici/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_14431 = cljs.core.rand.call(null,(360));
try{var values__12430__auto___14432 = (function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,degrees_14431);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = ((degrees_14431 * wheel.math.number.pi) / (180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto___14433 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14432);
if(cljs.core.truth_(result__12431__auto___14433)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14432),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14432);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14425){var t__12468__auto___14434 = e14425;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14434,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = wheel.math.number.pi;
try{var values__12430__auto___14435 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__12431__auto___14436 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14435);
if(cljs.core.truth_(result__12431__auto___14436)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14435),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14435);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14426){var t__12468__auto___14437 = e14426;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14437,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14438 = (function (){var x__8694__auto__ = (pi / (4));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(45));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto___14439 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14438);
if(cljs.core.truth_(result__12431__auto___14439)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14438),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14438);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14427){var t__12468__auto___14440 = e14427;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14440,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14441 = (function (){var x__8694__auto__ = (pi / (2));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(90));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto___14442 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14441);
if(cljs.core.truth_(result__12431__auto___14442)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14441),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14441);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14428){var t__12468__auto___14443 = e14428;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14443,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14444 = (function (){var x__8694__auto__ = pi;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto___14445 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14444);
if(cljs.core.truth_(result__12431__auto___14445)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14444),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14444);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14429){var t__12468__auto___14446 = e14429;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14446,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto__ = (function (){var x__8694__auto__ = (pi * (2));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(360));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12431__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto__);
if(cljs.core.truth_(result__12431__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12431__auto__;
}catch (e14430){var t__12468__auto__ = e14430;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},new cljs.core.Symbol("wheel.math.geometry","??degrees->radians","wheel.math.geometry/??degrees->radians",360848095,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??degrees->radians","??degrees->radians",526250754,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1ici/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_14453 = cljs.core.rand.call(null,((2) * wheel.math.number.pi));
try{var values__12430__auto___14454 = (function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,radians_14453);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12431__auto___14455 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14454);
if(cljs.core.truth_(result__12431__auto___14455)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14454),new cljs.core.Keyword(null,"message","message",-406056002),((radians_14453 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14454);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),((radians_14453 * (180)) / wheel.math.number.pi)], null));
}

}catch (e14447){var t__12468__auto___14456 = e14447;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14456,new cljs.core.Keyword(null,"message","message",-406056002),((radians_14453 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__12430__auto___14457 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__12431__auto___14458 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14457);
if(cljs.core.truth_(result__12431__auto___14458)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14457),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14457);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14448){var t__12468__auto___14459 = e14448;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14459,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14460 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (4)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(45));
var result__12431__auto___14461 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14460);
if(cljs.core.truth_(result__12431__auto___14461)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14460),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14460);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14449){var t__12468__auto___14462 = e14449;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14462,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14463 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(90));
var result__12431__auto___14464 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14463);
if(cljs.core.truth_(result__12431__auto___14464)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14463),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14463);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14450){var t__12468__auto___14465 = e14450;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14465,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14466 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,pi);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(180));
var result__12431__auto___14467 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto___14466);
if(cljs.core.truth_(result__12431__auto___14467)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto___14466),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto___14466);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14451){var t__12468__auto___14468 = e14451;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14468,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,((2) * pi));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(360));
var result__12431__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12430__auto__);
if(cljs.core.truth_(result__12431__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12430__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12430__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12431__auto__;
}catch (e14452){var t__12468__auto__ = e14452;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},new cljs.core.Symbol("wheel.math.geometry","??radians->degrees","wheel.math.geometry/??radians->degrees",-947727807,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??radians->degrees","??radians->degrees",-646251874,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1ici/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));

//# sourceMappingURL=geometry.js.map