// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.abn.core');
goog.require('cljs.core');
goog.require('wheel.string.core');
goog.require('wheel.abn.config');
goog.require('cljs.test');
wheel.abn.core.normalize = (function wheel$abn$core$normalize(n){
var _PERCENT_ = (function (){var s = wheel.string.core.no_space.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.call(null,(11),cljs.core.count.call(null,s))){
} else {
throw (new Error("Assert failed: (= 11 (count s))"));
}

var vec__12392 = cljs.core.split_at.call(null,(2),s);
var head = cljs.core.nth.call(null,vec__12392,(0),null);
var rest = cljs.core.nth.call(null,vec__12392,(1),null);
return clojure.string.join.call(null," ",cljs.core.map.call(null,((function (vec__12392,head,rest,s){
return (function (p1__12388_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__12388_SHARP_);
});})(vec__12392,head,rest,s))
,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null),cljs.core.partition.call(null,(3),rest))));
})();
if(cljs.core._EQ_.call(null,(11),cljs.core.count.call(null,wheel.string.core.no_space.call(null,_PERCENT_)))){
} else {
throw (new Error("Assert failed: (= 11 (count (wheel.string.core/no-space %)))"));
}

if(cljs.core._EQ_.call(null,(14),cljs.core.count.call(null,_PERCENT_))){
} else {
throw (new Error("Assert failed: (= 14 (count %))"));
}

return _PERCENT_;
});
wheel.abn.core.abr_search_url = (function wheel$abn$core$abr_search_url(n){
var s = wheel.string.core.no_space.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.abn.config.search_base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
wheel.abn.core._QMARK__QMARK_normalize = (function wheel$abn$core$_QMARK__QMARK_normalize(){
return cljs.test.test_var.call(null,wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$var);
});
wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$test = (function (){
try{var values__12007__auto___12399 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.normalize.call(null,(12345678910));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"12 345 678 910");
var result__12008__auto___12400 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12399);
if(cljs.core.truth_(result__12008__auto___12400)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12399),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12399);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12395){var t__12045__auto___12401 = e12395;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12401,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12402 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.normalize.call(null,"12345678910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"12 345 678 910");
var result__12008__auto___12403 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12402);
if(cljs.core.truth_(result__12008__auto___12403)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12402),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12402);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12396){var t__12045__auto___12404 = e12396;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12404,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12405 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.normalize.call(null,"12 345 678 910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"12 345 678 910");
var result__12008__auto___12406 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12405);
if(cljs.core.truth_(result__12008__auto___12406)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12405),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12405);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12397){var t__12045__auto___12407 = e12397;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12407,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.normalize.call(null,"1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"12 345 678 910");
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e12398){var t__12045__auto__ = e12398;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"12 345 678 910",cljs.core.list(new cljs.core.Symbol(null,"normalize","normalize",-263858524,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$var = new cljs.core.Var(function(){return wheel.abn.core._QMARK__QMARK_normalize;},new cljs.core.Symbol("wheel.abn.core","??normalize","wheel.abn.core/??normalize",953694204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.abn.core","wheel.abn.core",1876618231,null),new cljs.core.Symbol(null,"??normalize","??normalize",1676652963,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/2cx/9txbbm/index.html.out/wheel/abn/core.cljc",21,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.abn.core._QMARK__QMARK_normalize)?wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$test:null)]));
wheel.abn.core._QMARK__QMARK_abr_search_url = (function wheel$abn$core$_QMARK__QMARK_abr_search_url(){
return cljs.test.test_var.call(null,wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$var);
});
wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$test = (function (){
try{var values__12007__auto___12412 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.abr_search_url.call(null,(12345678910));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12008__auto___12413 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12412);
if(cljs.core.truth_(result__12008__auto___12413)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12412),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12412);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12408){var t__12045__auto___12414 = e12408;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),(12345678910))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12414,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12415 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.abr_search_url.call(null,"12345678910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12008__auto___12416 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12415);
if(cljs.core.truth_(result__12008__auto___12416)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12415),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12415);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12409){var t__12045__auto___12417 = e12409;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12345678910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12417,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12418 = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.abr_search_url.call(null,"12 345 678 910");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12008__auto___12419 = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto___12418);
if(cljs.core.truth_(result__12008__auto___12419)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto___12418),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto___12418);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12410){var t__12045__auto___12420 = e12410;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"12 345 678 910")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12420,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = wheel.abn.core.abr_search_url.call(null,"1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e12411){var t__12045__auto__ = e12411;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(new cljs.core.Symbol(null,"abr-search-url","abr-search-url",-583801770,null),"1 2 3 4 5 6 7 8 9 1 0")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.abn.core._QMARK__QMARK_abr_search_url;},new cljs.core.Symbol("wheel.abn.core","??abr-search-url","wheel.abn.core/??abr-search-url",1878607298,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.abn.core","wheel.abn.core",1876618231,null),new cljs.core.Symbol(null,"??abr-search-url","??abr-search-url",-734606577,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/2cx/9txbbm/index.html.out/wheel/abn/core.cljc",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.abn.core._QMARK__QMARK_abr_search_url)?wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map