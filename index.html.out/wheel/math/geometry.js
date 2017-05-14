// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.math.geometry');
goog.require('cljs.core');
goog.require('cljs.test');
/**
 * Given a radius (unitless) and rotation in radians, returns (unitless) [x y] co-ordinates
 */
wheel.math.geometry.polar__GT_cartesian = (function wheel$math$geometry$polar__GT_cartesian(radius,radians){
if(((radius > (0))) || ((radius === (0)))){
} else {
throw (new Error("Assert failed: (or (pos? radius) (zero? radius))"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(radians)),(radius * Math.sin(radians))], null);
});
/**
 * Given a rotation in degrees, returns the same rotation in radians
 */
wheel.math.geometry.degrees__GT_radians = (function wheel$math$geometry$degrees__GT_radians(degrees){
return ((degrees * Math.PI) / (180));
});
/**
 * Given a rotation in radians, returns the same rotation in degrees
 */
wheel.math.geometry.radians__GT_degrees = (function wheel$math$geometry$radians__GT_degrees(radians){
return ((radians * (180)) / Math.PI);
});
wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian = (function wheel$math$geometry$_QMARK__QMARK_polar__GT_cartesian(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test = (function (){
var angle_13600 = cljs.core.rand.call(null,((2) * Math.PI));
var radius_13601 = cljs.core.rand.call(null,(10));
try{var values__12662__auto___13602 = (function (){var x__8035__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius_13601 * Math.cos(angle_13600)),(radius_13601 * Math.sin(angle_13600))], null);
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.math.geometry.polar__GT_cartesian.call(null,radius_13601,angle_13600);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13603 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13602);
if(cljs.core.truth_(result__12663__auto___13603)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".cos",".cos",-2042278134,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".sin",".sin",-1630997742,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13602),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".cos",".cos",-2042278134,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".sin",".sin",-1630997742,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13602);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13573){var t__12700__auto___13604 = e13573;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".cos",".cos",-2042278134,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),cljs.core.list(new cljs.core.Symbol(null,".sin",".sin",-1630997742,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"polar->cartesian","polar->cartesian",934709938,null),new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"angle","angle",-1032341515,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13604,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = Math.PI;
var within_tolerance_QMARK_ = ((function (pi){
return (function (n){
return (Math.abs(n) < 1.0E-15);
});})(pi))
;
var ins = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.rand.call(null,((2) * pi))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7071067811865476,0.7071067811865476], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.25 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.4142135623730951,1.4142135623730951], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),pi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1.5 * pi)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null);
var seq__13574 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),ins));
var chunk__13575 = null;
var count__13576 = (0);
var i__13577 = (0);
while(true){
if((i__13577 < count__13576)){
var vec__13578 = cljs.core._nth.call(null,chunk__13575,i__13577);
var i = cljs.core.nth.call(null,vec__13578,(0),null);
var vec__13581 = cljs.core.nth.call(null,vec__13578,(1),null);
var xo = cljs.core.nth.call(null,vec__13581,(0),null);
var yo = cljs.core.nth.call(null,vec__13581,(1),null);
var vec__13584_13605 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_13606 = cljs.core.nth.call(null,vec__13584_13605,(0),null);
var y_13607 = cljs.core.nth.call(null,vec__13584_13605,(1),null);
try{var values__12662__auto___13608 = (function (){var x__8035__auto__ = (xo - x_13606);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13609 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12662__auto___13608);
if(cljs.core.truth_(result__12663__auto___13609)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12662__auto___13608),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13606),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12662__auto___13608);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13606),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e13587){var t__12700__auto___13610 = e13587;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13610,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13606),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12662__auto___13611 = (function (){var x__8035__auto__ = (yo - y_13607);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13612 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12662__auto___13611);
if(cljs.core.truth_(result__12663__auto___13612)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12662__auto___13611),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12662__auto___13611);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13588){var t__12700__auto___13613 = e13588;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13613,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13614 = seq__13574;
var G__13615 = chunk__13575;
var G__13616 = count__13576;
var G__13617 = (i__13577 + (1));
seq__13574 = G__13614;
chunk__13575 = G__13615;
count__13576 = G__13616;
i__13577 = G__13617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13574);
if(temp__4657__auto__){
var seq__13574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13574__$1)){
var c__8012__auto__ = cljs.core.chunk_first.call(null,seq__13574__$1);
var G__13618 = cljs.core.chunk_rest.call(null,seq__13574__$1);
var G__13619 = c__8012__auto__;
var G__13620 = cljs.core.count.call(null,c__8012__auto__);
var G__13621 = (0);
seq__13574 = G__13618;
chunk__13575 = G__13619;
count__13576 = G__13620;
i__13577 = G__13621;
continue;
} else {
var vec__13589 = cljs.core.first.call(null,seq__13574__$1);
var i = cljs.core.nth.call(null,vec__13589,(0),null);
var vec__13592 = cljs.core.nth.call(null,vec__13589,(1),null);
var xo = cljs.core.nth.call(null,vec__13592,(0),null);
var yo = cljs.core.nth.call(null,vec__13592,(1),null);
var vec__13595_13622 = cljs.core.apply.call(null,wheel.math.geometry.polar__GT_cartesian,i);
var x_13623 = cljs.core.nth.call(null,vec__13595_13622,(0),null);
var y_13624 = cljs.core.nth.call(null,vec__13595_13622,(1),null);
try{var values__12662__auto___13625 = (function (){var x__8035__auto__ = (xo - x_13623);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13626 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12662__auto___13625);
if(cljs.core.truth_(result__12663__auto___13626)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12662__auto___13625),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13623),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12662__auto___13625);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13623),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}

}catch (e13598){var t__12700__auto___13627 = e13598;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"xo","xo",-2046843089,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13627,new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("xo and x not within tolerance. xo:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xo),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" x:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_13623),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" i:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null));
}
try{var values__12662__auto___13628 = (function (){var x__8035__auto__ = (yo - y_13624);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13629 = cljs.core.apply.call(null,within_tolerance_QMARK_,values__12662__auto___13628);
if(cljs.core.truth_(result__12663__auto___13629)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,within_tolerance_QMARK_,values__12662__auto___13628),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),values__12662__auto___13628);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13599){var t__12700__auto___13630 = e13599;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"within-tolerance?","within-tolerance?",1527261012,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"yo","yo",-1447352643,null),new cljs.core.Symbol(null,"y","y",-117328249,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13630,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__13631 = cljs.core.next.call(null,seq__13574__$1);
var G__13632 = null;
var G__13633 = (0);
var G__13634 = (0);
seq__13574 = G__13631;
chunk__13575 = G__13632;
count__13576 = G__13633;
i__13577 = G__13634;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian;},new cljs.core.Symbol("wheel.math.geometry","??polar->cartesian","wheel.math.geometry/??polar->cartesian",-751447140,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??polar->cartesian","??polar->cartesian",-924976959,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/math/geometry.cljs",28,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian)?wheel.math.geometry._QMARK__QMARK_polar__GT_cartesian.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians = (function wheel$math$geometry$_QMARK__QMARK_degrees__GT_radians(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test = (function (){
var degrees_13641 = cljs.core.rand.call(null,(360));
try{var values__12662__auto___13642 = (function (){var x__8035__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,degrees_13641);
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = ((degrees_13641 * Math.PI) / (180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13643 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13642);
if(cljs.core.truth_(result__12663__auto___13643)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),cljs.core.list(new cljs.core.Symbol(null,".-PI",".-PI",1493103749,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null))),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13642),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),cljs.core.list(new cljs.core.Symbol(null,".-PI",".-PI",1493103749,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null))),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13642);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13635){var t__12700__auto___13644 = e13635;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),cljs.core.list(new cljs.core.Symbol(null,".-PI",".-PI",1493103749,null),new cljs.core.Symbol("js","Math","js/Math",2033291075,null))),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13644,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var pi = Math.PI;
try{var values__12662__auto___13645 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.degrees__GT_radians.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(0));
var result__12663__auto___13646 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13645);
if(cljs.core.truth_(result__12663__auto___13646)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13645),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13645);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13636){var t__12700__auto___13647 = e13636;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13647,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13648 = (function (){var x__8035__auto__ = (pi / (4));
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(45));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13649 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13648);
if(cljs.core.truth_(result__12663__auto___13649)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13648),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13648);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13637){var t__12700__auto___13650 = e13637;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(45))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13650,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13651 = (function (){var x__8035__auto__ = (pi / (2));
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(90));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13652 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13651);
if(cljs.core.truth_(result__12663__auto___13652)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13651),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13651);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13638){var t__12700__auto___13653 = e13638;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(90))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13653,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13654 = (function (){var x__8035__auto__ = pi;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(180));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___13655 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13654);
if(cljs.core.truth_(result__12663__auto___13655)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13654),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13654);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13639){var t__12700__auto___13656 = e13639;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(180))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13656,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = (function (){var x__8035__auto__ = (pi * (2));
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.math.geometry.degrees__GT_radians.call(null,(360));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13640){var t__12700__auto__ = e13640;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)),cljs.core.list(new cljs.core.Symbol(null,"degrees->radians","degrees->radians",1775372668,null),(360))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_degrees__GT_radians;},new cljs.core.Symbol("wheel.math.geometry","??degrees->radians","wheel.math.geometry/??degrees->radians",360848095,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??degrees->radians","??degrees->radians",526250754,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/math/geometry.cljs",28,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_degrees__GT_radians)?wheel.math.geometry._QMARK__QMARK_degrees__GT_radians.cljs$lang$test:null)]));
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees = (function wheel$math$geometry$_QMARK__QMARK_radians__GT_degrees(){
return cljs.test.test_var.call(null,wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var);
});
wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test = (function (){
var radians_13663 = cljs.core.rand.call(null,((2) * Math.PI));
try{var values__12662__auto___13664 = (function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,radians_13663);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})();
var result__12663__auto___13665 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13664);
if(cljs.core.truth_(result__12663__auto___13665)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13664),new cljs.core.Keyword(null,"message","message",-406056002),((radians_13663 * (180)) / Math.PI)], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13664);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),((radians_13663 * (180)) / Math.PI)], null));
}

}catch (e13657){var t__12700__auto___13666 = e13657;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"radians","radians",-818710685,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13666,new cljs.core.Keyword(null,"message","message",-406056002),((radians_13663 * (180)) / Math.PI)], null));
}
var pi = Math.PI;
try{var values__12662__auto___13667 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(0));
var result__12663__auto___13668 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13667);
if(cljs.core.truth_(result__12663__auto___13668)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13667),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13667);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13658){var t__12700__auto___13669 = e13658;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(0),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),(0))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13669,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13670 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (4)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(45));
var result__12663__auto___13671 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13670);
if(cljs.core.truth_(result__12663__auto___13671)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13670),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13670);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13659){var t__12700__auto___13672 = e13659;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(45),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(4)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13672,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13673 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,(pi / (2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(90));
var result__12663__auto___13674 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13673);
if(cljs.core.truth_(result__12663__auto___13674)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13673),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13673);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13660){var t__12700__auto___13675 = e13660;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(90),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"pi","pi",176774184,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13675,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13676 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,pi);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(180));
var result__12663__auto___13677 = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto___13676);
if(cljs.core.truth_(result__12663__auto___13677)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto___13676),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto___13676);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13661){var t__12700__auto___13678 = e13661;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(180),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),new cljs.core.Symbol(null,"pi","pi",176774184,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13678,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.math.geometry.radians__GT_degrees.call(null,((2) * pi));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),(360));
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ__EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ__EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"==","==",-234118149,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13662){var t__12700__auto__ = e13662;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"==","==",-234118149,null),(360),cljs.core.list(new cljs.core.Symbol(null,"radians->degrees","radians->degrees",2055196602,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),new cljs.core.Symbol(null,"pi","pi",176774184,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.geometry._QMARK__QMARK_radians__GT_degrees;},new cljs.core.Symbol("wheel.math.geometry","??radians->degrees","wheel.math.geometry/??radians->degrees",-947727807,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.math.geometry","wheel.math.geometry",-1179987425,null),new cljs.core.Symbol(null,"??radians->degrees","??radians->degrees",-646251874,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/math/geometry.cljs",28,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.geometry._QMARK__QMARK_radians__GT_degrees)?wheel.math.geometry._QMARK__QMARK_radians__GT_degrees.cljs$lang$test:null)]));

//# sourceMappingURL=geometry.js.map