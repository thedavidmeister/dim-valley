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
try{var values__12430__auto___14836 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__12431__auto___14837 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14836);
if(cljs.core.truth_(result__12431__auto___14837)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14836),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14836);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14828){var t__12468__auto___14838 = e14828;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14838,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14839 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14840 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14839);
if(cljs.core.truth_(result__12431__auto___14840)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14839),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14839);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14829){var t__12468__auto___14841 = e14829;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14841,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14842 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," ab");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14843 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14842);
if(cljs.core.truth_(result__12431__auto___14843)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14842),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14842);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14830){var t__12468__auto___14844 = e14830;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14844,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14845 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14846 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14845);
if(cljs.core.truth_(result__12431__auto___14846)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14845),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14845);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14831){var t__12468__auto___14847 = e14831;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14847,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14848 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14849 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14848);
if(cljs.core.truth_(result__12431__auto___14849)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14848),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14848);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14832){var t__12468__auto___14850 = e14832;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14850,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14851 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a  b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14852 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14851);
if(cljs.core.truth_(result__12431__auto___14852)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14851),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14851);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14833){var t__12468__auto___14853 = e14833;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14853,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto___14854 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null," a b ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto___14855 = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto___14854);
if(cljs.core.truth_(result__12431__auto___14855)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto___14854),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto___14854);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14834){var t__12468__auto___14856 = e14834;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto___14856,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12430__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.string.core.no_space.call(null,"a\nb");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__12431__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12430__auto__);
if(cljs.core.truth_(result__12431__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12430__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12430__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12431__auto__;
}catch (e14835){var t__12468__auto__ = e14835;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12468__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},new cljs.core.Symbol("wheel.string.core","??no-space","wheel.string.core/??no-space",1893076840,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.string.core","wheel.string.core",-369280565,null),new cljs.core.Symbol(null,"??no-space","??no-space",638220705,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1ici/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map