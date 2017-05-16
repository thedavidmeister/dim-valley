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
var angle_14539 = cljs.core.rand.call(null,((2) * wheel.math.number.pi));
var radius_14540 = cljs.core.rand.call(null,(10));
try{var values__12007__auto___14541 = (function (){var x__8694__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_14540 * wheel.math.geometry.cos.call(null,angle_14539)),(radius_14540 * wheel.math.geometry.sin.call(null,angle_14539))], null);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.polar__GT_cartesian.call(null,radius_14540,angle_14539);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14542 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___14541);
if(cljs.core.truth_(result__12008__auto___14542)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___14541),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___14541);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14512){var t__12045__auto___14543 = e14512;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"cos","cos",-1452677493,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,"sin","sin",1721439389,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14543,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = wheel.math.number.pi;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (wheel.math.geometry.abs.call(null,n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.call(null,((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__14513 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),ins));
var chunk__14514 = null;
var count__14515 = (0);
var i__14516 = (0);
while(true){
if((i__14516 < count__14515)){
var vec__14517 = cljs.core._nth.call(null,chunk__14514,i__14516);
var i = cljs.core.nth.call(null,vec__14517,(0),null);
var vec__14520 = cljs.core.nth.call(null,vec__14517,(1),null);
var xo = cljs.core.nth.call(null,vec__14520,(0),null);
var yo = cljs.core.nth.call(null,vec__14520,(1),null);
var vec__14523_14544 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_14545 = cljs.core.nth.call(null,vec__14523_14544,(0),null);
var y_14546 = cljs.core.nth.call(null,vec__14523_14544,(1),null);
try{var values__12007__auto___14547 = (function (){var x__8694__auto__ = (xo - x_14545);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14548 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12007__auto___14547);
if(cljs.core.truth_(result__12008__auto___14548)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12007__auto___14547),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12007__auto___14547);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e14526){var t__12045__auto___14549 = e14526;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14549,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14545),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12007__auto___14550 = (function (){var x__8694__auto__ = (yo - y_14546);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14551 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12007__auto___14550);
if(cljs.core.truth_(result__12008__auto___14551)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12007__auto___14550),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12007__auto___14550);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14527){var t__12045__auto___14552 = e14527;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14552,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14553 = seq__14513;
var G__14554 = chunk__14514;
var G__14555 = count__14515;
var G__14556 = (i__14516 + (1));
seq__14513 = G__14553;
chunk__14514 = G__14554;
count__14515 = G__14555;
i__14516 = G__14556;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__14513);
if(temp__6738__auto__){
var seq__14513__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14513__$1)){
var c__8671__auto__ = cljs.core.chunk_first.call(null,seq__14513__$1);
var G__14557 = cljs.core.chunk_rest.call(null,seq__14513__$1);
var G__14558 = c__8671__auto__;
var G__14559 = cljs.core.count.call(null,c__8671__auto__);
var G__14560 = (0);
seq__14513 = G__14557;
chunk__14514 = G__14558;
count__14515 = G__14559;
i__14516 = G__14560;
continue;
} else {
var vec__14528 = cljs.core.first.call(null,seq__14513__$1);
var i = cljs.core.nth.call(null,vec__14528,(0),null);
var vec__14531 = cljs.core.nth.call(null,vec__14528,(1),null);
var xo = cljs.core.nth.call(null,vec__14531,(0),null);
var yo = cljs.core.nth.call(null,vec__14531,(1),null);
var vec__14534_14561 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_14562 = cljs.core.nth.call(null,vec__14534_14561,(0),null);
var y_14563 = cljs.core.nth.call(null,vec__14534_14561,(1),null);
try{var values__12007__auto___14564 = (function (){var x__8694__auto__ = (xo - x_14562);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14565 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12007__auto___14564);
if(cljs.core.truth_(result__12008__auto___14565)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12007__auto___14564),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14562),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12007__auto___14564);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14562),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e14537){var t__12045__auto___14566 = e14537;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14566,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_14562),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12007__auto___14567 = (function (){var x__8694__auto__ = (yo - y_14563);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14568 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12007__auto___14567);
if(cljs.core.truth_(result__12008__auto___14568)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12007__auto___14567),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12007__auto___14567);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14538){var t__12045__auto___14569 = e14538;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14569,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__14570 = cljs.core.next.call(null,seq__14513__$1);
var G__14571 = null;
var G__14572 = (0);
var G__14573 = (0);
seq__14513 = G__14570;
chunk__14514 = G__14571;
count__14515 = G__14572;
i__14516 = G__14573;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},new cljs.core.Symbol("wheel.math.geometry","??polar->cartesian","wheel.math.geometry/??polar->cartesian",-751447140,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??polar->cartesian","??polar->cartesian",-924976959,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_14580 = cljs.core.rand.call(null,(360));
try{var values__12007__auto___14581 = (function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,degrees_14580);
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = ((degrees_14580 * wheel.math.number.pi) / (180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14582 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14581);
if(cljs.core.truth_(result__12008__auto___14582)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14581),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14581);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14574){var t__12045__auto___14583 = e14574;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol("wheel.math.number","pi","wheel.math.number/pi",-571662644,null)),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14583,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = wheel.math.number.pi;
try{var values__12007__auto___14584 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__12008__auto___14585 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14584);
if(cljs.core.truth_(result__12008__auto___14585)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14584),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14584);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14575){var t__12045__auto___14586 = e14575;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14586,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14587 = (function (){var x__8694__auto__ = (pi / (4));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(45));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14588 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14587);
if(cljs.core.truth_(result__12008__auto___14588)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14587),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14587);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14576){var t__12045__auto___14589 = e14576;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14589,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14590 = (function (){var x__8694__auto__ = (pi / (2));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(90));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14591 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14590);
if(cljs.core.truth_(result__12008__auto___14591)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14590),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14590);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14577){var t__12045__auto___14592 = e14577;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14592,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14593 = (function (){var x__8694__auto__ = pi;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___14594 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14593);
if(cljs.core.truth_(result__12008__auto___14594)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14593),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14593);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14578){var t__12045__auto___14595 = e14578;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14595,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = (function (){var x__8694__auto__ = (pi * (2));
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(360));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e14579){var t__12045__auto__ = e14579;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},new cljs.core.Symbol("wheel.math.geometry","??degrees->radians","wheel.math.geometry/??degrees->radians",360848095,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??degrees->radians","??degrees->radians",526250754,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,72,72,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_14602 = cljs.core.rand.call(null,((2) * wheel.math.number.pi));
try{var values__12007__auto___14603 = (function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,radians_14602);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___14604 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14603);
if(cljs.core.truth_(result__12008__auto___14604)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14603),new cljs.core.Keyword(null,"message","message",-406056002),((radians_14602 * (180)) / wheel.math.number.pi)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14603);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),((radians_14602 * (180)) / wheel.math.number.pi)], null));
}

}catch (e14596){var t__12045__auto___14605 = e14596;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14605,new cljs.core.Keyword(null,"message","message",-406056002),((radians_14602 * (180)) / wheel.math.number.pi)], null));
}
var pi = wheel.math.number.pi;
try{var values__12007__auto___14606 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__12008__auto___14607 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14606);
if(cljs.core.truth_(result__12008__auto___14607)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14606),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14606);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14597){var t__12045__auto___14608 = e14597;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14608,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14609 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (4)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(45));
var result__12008__auto___14610 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14609);
if(cljs.core.truth_(result__12008__auto___14610)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14609),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14609);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14598){var t__12045__auto___14611 = e14598;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14611,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14612 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(90));
var result__12008__auto___14613 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14612);
if(cljs.core.truth_(result__12008__auto___14613)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14612),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14612);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14599){var t__12045__auto___14614 = e14599;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14614,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___14615 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,pi);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(180));
var result__12008__auto___14616 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto___14615);
if(cljs.core.truth_(result__12008__auto___14616)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto___14615),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto___14615);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14600){var t__12045__auto___14617 = e14600;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14617,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,((2) * pi));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),(360));
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e14601){var t__12045__auto__ = e14601;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},new cljs.core.Symbol("wheel.math.geometry","??radians->degrees","wheel.math.geometry/??radians->degrees",-947727807,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??radians->degrees","??radians->degrees",-646251874,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/math/geometry.cljc",28,1,88,88,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));

//# sourceMappingURL=geometry.js.map