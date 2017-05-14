// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');
wheel.string.no_space = (function wheel$string$no_space(s){
return clojure.string.join.call(null,clojure.string.split.call(null,s,/\s/));
});
wheel.string._QMARK__QMARK_no_space = (function wheel$string$_QMARK__QMARK_no_space(){
return cljs.test.test_var.call(null,wheel.string._QMARK__QMARK_no_space.cljs$lang$var);
});
wheel.string._QMARK__QMARK_no_space.cljs$lang$test = (function (){
try{var values__12662__auto___13945 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null,"a");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"a");
var result__12663__auto___13946 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13945);
if(cljs.core.truth_(result__12663__auto___13946)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13945),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13945);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13937){var t__12700__auto___13947 = e13937;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13947,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13948 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null,"a b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13949 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13948);
if(cljs.core.truth_(result__12663__auto___13949)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13948),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13948);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13938){var t__12700__auto___13950 = e13938;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13950,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13951 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null," ab");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13952 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13951);
if(cljs.core.truth_(result__12663__auto___13952)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13951),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13951);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13939){var t__12700__auto___13953 = e13939;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13953,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13954 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null,"ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13955 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13954);
if(cljs.core.truth_(result__12663__auto___13955)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13954),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13954);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13940){var t__12700__auto___13956 = e13940;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13956,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13957 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null," ab ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13958 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13957);
if(cljs.core.truth_(result__12663__auto___13958)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13957),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13957);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13941){var t__12700__auto___13959 = e13941;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," ab ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13959,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13960 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null,"a  b");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13961 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13960);
if(cljs.core.truth_(result__12663__auto___13961)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13960),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13960);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13942){var t__12700__auto___13962 = e13942;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a  b")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13962,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13963 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null," a b ");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto___13964 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13963);
if(cljs.core.truth_(result__12663__auto___13964)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13963),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13963);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13943){var t__12700__auto___13965 = e13943;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null)," a b ")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13965,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.string.no_space.call(null,"a\nb");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"ab");
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13944){var t__12700__auto__ = e13944;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"ab",cljs.core.list(new cljs.core.Symbol(null,"no-space","no-space",-1614104542,null),"a\nb")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.string._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string._QMARK__QMARK_no_space;},new cljs.core.Symbol("wheel.string","??no-space","wheel.string/??no-space",967139245,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.string","wheel.string",-1636097273,null),new cljs.core.Symbol(null,"??no-space","??no-space",638220705,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/string.cljs",20,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string._QMARK__QMARK_no_space)?wheel.string._QMARK__QMARK_no_space.cljs$lang$test:null)]));

//# sourceMappingURL=string.js.map