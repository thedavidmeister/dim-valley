// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.string.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');
wheel.string.core.no_space = (function wheel$string$core$no_space(s){
return clojure.string.join.call(null,clojure.string.split.call(null,s,/\s/));
});
wheel.string.core._QMARK__QMARK_no_space = (function wheel$string$core$_QMARK__QMARK_no_space(){
return cljs.test.test_var.call(null,wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var);
});
wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test = (function (){
try{var values__12007__auto___12365 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__12008__auto___12366 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12365);
if(cljs.core.truth_(result__12008__auto___12366)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12365),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12365);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12357){var t__12045__auto___12367 = e12357;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12367,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12368 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12369 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12368);
if(cljs.core.truth_(result__12008__auto___12369)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12368),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12368);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12358){var t__12045__auto___12370 = e12358;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12370,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12371 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," ab");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12372 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12371);
if(cljs.core.truth_(result__12008__auto___12372)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12371),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12371);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12359){var t__12045__auto___12373 = e12359;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12373,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12374 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12375 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12374);
if(cljs.core.truth_(result__12008__auto___12375)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12374),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12374);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12360){var t__12045__auto___12376 = e12360;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12376,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12377 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12378 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12377);
if(cljs.core.truth_(result__12008__auto___12378)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12377),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12377);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12361){var t__12045__auto___12379 = e12361;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12379,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12380 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a  b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12381 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12380);
if(cljs.core.truth_(result__12008__auto___12381)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12380),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12380);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12362){var t__12045__auto___12382 = e12362;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12382,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12383 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," a b ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto___12384 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12383);
if(cljs.core.truth_(result__12008__auto___12384)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12383),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12383);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12363){var t__12045__auto___12385 = e12363;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12385,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a\nb");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e12364){var t__12045__auto__ = e12364;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},new cljs.core.Symbol("wheel.string.core","??no-space","wheel.string.core/??no-space",1893076840,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.string.core","wheel.string.core",-369280565,null),new cljs.core.Symbol(null,"??no-space","??no-space",638220705,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1j9l/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map