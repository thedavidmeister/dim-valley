// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.hoplon.abn.api');
goog.require('cljs.core');
goog.require('wheel.string');
goog.require('cljs.test');
wheel.hoplon.abn.api.normalize = (function wheel$hoplon$abn$api$normalize(n){
var _PERCENT_ = (function (){var s = wheel.string.no_space.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,(11),cljs.core.count.call(null,s))){
} else {
throw (new Error("Assert failed: (= 11 (count s))"));
}

var vec__13972 = cljs.core.split_at.call(null,(2),s);
var head = cljs.core.nth.call(null,vec__13972,(0),null);
var rest = cljs.core.nth.call(null,vec__13972,(1),null);
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (vec__13972,head,rest,s){
return (function (p1__13968_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__13968_SHARP_);
});})(vec__13972,head,rest,s))
,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null),cljs.core.partition.call(null,(3),rest))));
})();
if(cljs.core._EQ_.call(null,(11),cljs.core.count.call(null,wheel.string.no_space.call(null,_PERCENT_)))){
} else {
throw (new Error("Assert failed: (= 11 (count (wheel.string/no-space %)))"));
}

if(cljs.core._EQ_.call(null,(14),cljs.core.count.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (= 14 (count %))"));
}

return _PERCENT_;
});
wheel.hoplon.abn.api.abr_search_url = (function wheel$hoplon$abn$api$abr_search_url(n){
var s = wheel.string.no_space.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://abr.business.gov.au/SearchByAbn.aspx?SearchText="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
wheel.hoplon.abn.api._QMARK__QMARK_normalize = (function wheel$hoplon$abn$api$_QMARK__QMARK_normalize(){
return cljs.test.test_var.call(null,wheel.hoplon.abn.api._QMARK__QMARK_normalize.cljs$lang$var);
});
wheel.hoplon.abn.api._QMARK__QMARK_normalize.cljs$lang$test = (function (){
try{var values__12662__auto___13979 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.normalize.call(null,(12345678910));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"12 345 678 910");
var result__12663__auto___13980 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13979);
if(cljs.core.truth_(result__12663__auto___13980)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13979),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13979);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13975){var t__12700__auto___13981 = e13975;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13981,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13982 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.normalize.call(null,"12345678910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"12 345 678 910");
var result__12663__auto___13983 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13982);
if(cljs.core.truth_(result__12663__auto___13983)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13982),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13982);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13976){var t__12700__auto___13984 = e13976;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13984,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13985 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.normalize.call(null,"12 345 678 910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"12 345 678 910");
var result__12663__auto___13986 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13985);
if(cljs.core.truth_(result__12663__auto___13986)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13985),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13985);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13977){var t__12700__auto___13987 = e13977;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13987,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.normalize.call(null,"1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"12 345 678 910");
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13978){var t__12700__auto__ = e13978;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.abn.api._QMARK__QMARK_normalize.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.abn.api._QMARK__QMARK_normalize;},new cljs.core.Symbol("wheel.hoplon.abn.api","??normalize","wheel.hoplon.abn.api/??normalize",-1418023901,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.abn.api","wheel.hoplon.abn.api",1059903647,null),new cljs.core.Symbol(null,"??normalize","??normalize",1676652963,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/abn/api.cljs",21,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.abn.api._QMARK__QMARK_normalize)?wheel.hoplon.abn.api._QMARK__QMARK_normalize.cljs$lang$test:null)]));
wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url = (function wheel$hoplon$abn$api$_QMARK__QMARK_abr_search_url(){
return cljs.test.test_var.call(null,wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url.cljs$lang$var);
});
wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url.cljs$lang$test = (function (){
try{var values__12662__auto___13992 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.abr_search_url.call(null,(12345678910));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12663__auto___13993 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13992);
if(cljs.core.truth_(result__12663__auto___13993)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13992),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13992);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13988){var t__12700__auto___13994 = e13988;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13994,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13995 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.abr_search_url.call(null,"12345678910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12663__auto___13996 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13995);
if(cljs.core.truth_(result__12663__auto___13996)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13995),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13995);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13989){var t__12700__auto___13997 = e13989;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___13997,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___13998 = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.abr_search_url.call(null,"12 345 678 910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12663__auto___13999 = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto___13998);
if(cljs.core.truth_(result__12663__auto___13999)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto___13998),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto___13998);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e13990){var t__12700__auto___14000 = e13990;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___14000,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = cljs.core._conj.call(null,(function (){var x__8035__auto__ = wheel.hoplon.abn.api.abr_search_url.call(null,"1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e13991){var t__12700__auto__ = e13991;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url;},new cljs.core.Symbol("wheel.hoplon.abn.api","??abr-search-url","wheel.hoplon.abn.api/??abr-search-url",-1671704945,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.abn.api","wheel.hoplon.abn.api",1059903647,null),new cljs.core.Symbol(null,"??abr-search-url","??abr-search-url",-734606577,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/abn/api.cljs",26,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url)?wheel.hoplon.abn.api._QMARK__QMARK_abr_search_url.cljs$lang$test:null)]));

//# sourceMappingURL=api.js.map