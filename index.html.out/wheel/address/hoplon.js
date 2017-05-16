// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.address.hoplon');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
/**
 * The simplest address element that could possibly work
 */
wheel.address.hoplon.simple = (function wheel$address$hoplon$simple(a){
return hoplon.core.span.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"address",a);
});
wheel.address.hoplon.simple_QMARK_ = (function wheel$address$hoplon$simple_QMARK_(el,a){
try{var values__12007__auto___14891 = (function (){var x__8694__auto__ = el;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"span.address"),x__8694__auto__);
})();
var result__12008__auto___14892 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___14891);
if(cljs.core.truth_(result__12008__auto___14892)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","is?","wheel.dom.traversal/is?",-769125340,null),new cljs.core.Symbol(null,"el","el",22330409,null),"span.address"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___14891),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","is?","wheel.dom.traversal/is?",-769125340,null),new cljs.core.Symbol(null,"el","el",22330409,null),"span.address"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("wheel.dom.traversal","is?","wheel.dom.traversal/is?",-769125340,null),values__12007__auto___14891);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14889){var t__12045__auto___14893 = e14889;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","is?","wheel.dom.traversal/is?",-769125340,null),new cljs.core.Symbol(null,"el","el",22330409,null),"span.address"),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___14893,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = (function (){var x__8694__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.dom.traversal.text.call(null,el);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","text","wheel.dom.traversal/text",707726949,null),new cljs.core.Symbol(null,"el","el",22330409,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","text","wheel.dom.traversal/text",707726949,null),new cljs.core.Symbol(null,"el","el",22330409,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e14890){var t__12045__auto__ = e14890;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"a","a",-482876059,null),cljs.core.list(new cljs.core.Symbol("wheel.dom.traversal","text","wheel.dom.traversal/text",707726949,null),new cljs.core.Symbol(null,"el","el",22330409,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
wheel.address.hoplon._QMARK__QMARK_simple = (function wheel$address$hoplon$_QMARK__QMARK_simple(){
return cljs.test.test_var.call(null,wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var);
});
wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test = (function (){
return wheel.address.hoplon.simple_QMARK_.call(null,wheel.address.hoplon.simple.call(null,"foo"),"foo");
});

wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var = new cljs.core.Var(function(){return wheel.address.hoplon._QMARK__QMARK_simple;},new cljs.core.Symbol("wheel.address.hoplon","??simple","wheel.address.hoplon/??simple",-413960440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.address.hoplon","wheel.address.hoplon",-372776517,null),new cljs.core.Symbol(null,"??simple","??simple",249392825,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/address/hoplon.cljs",18,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.address.hoplon._QMARK__QMARK_simple)?wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test:null)]));

//# sourceMappingURL=hoplon.js.map