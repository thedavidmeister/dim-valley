// Compiled by ClojureScript 1.9.542 {}
goog.provide('wheel.hoplon.link.dom');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.hoplon.link.dom.external = (function wheel$hoplon$link$dom$external(var_args){
var args12968 = [];
var len__8306__auto___12971 = arguments.length;
var i__8307__auto___12972 = (0);
while(true){
if((i__8307__auto___12972 < len__8306__auto___12971)){
args12968.push((arguments[i__8307__auto___12972]));

var G__12973 = (i__8307__auto___12972 + (1));
i__8307__auto___12972 = G__12973;
continue;
} else {
}
break;
}

var G__12970 = args12968.length;
switch (G__12970) {
case 1:
return wheel.hoplon.link.dom.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.hoplon.link.dom.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12968.length)].join('')));

}
});

wheel.hoplon.link.dom.external.cljs$core$IFn$_invoke$arity$1 = (function (href){
return wheel.hoplon.link.dom.external.call(null,href,href);
});

wheel.hoplon.link.dom.external.cljs$core$IFn$_invoke$arity$2 = (function (href,text){
if(typeof href === 'string'){
} else {
throw (new Error("Assert failed: (string? href)"));
}

if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",text);
});

wheel.hoplon.link.dom.external.cljs$lang$maxFixedArity = 2;

wheel.hoplon.link.dom.external_QMARK_ = (function wheel$hoplon$link$dom$external_QMARK_(l,a,t){
try{var values__12662__auto___12983 = (function (){var x__8035__auto__ = l;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"a"),x__8035__auto__);
})();
var result__12663__auto___12984 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12983);
if(cljs.core.truth_(result__12663__auto___12984)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12983),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12662__auto___12983);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12979){var t__12700__auto___12985 = e12979;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___12985,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___12986 = (function (){var x__8035__auto__ = l;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__8035__auto__);
})();
var result__12663__auto___12987 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12986);
if(cljs.core.truth_(result__12663__auto___12987)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12986),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12662__auto___12986);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12980){var t__12700__auto___12988 = e12980;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___12988,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto___12989 = (function (){var x__8035__auto__ = l;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto___12990 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12989);
if(cljs.core.truth_(result__12663__auto___12990)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12662__auto___12989),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12662__auto___12989);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12981){var t__12700__auto___12991 = e12981;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto___12991,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12662__auto__ = (function (){var x__8035__auto__ = t;
return cljs.core._conj.call(null,(function (){var x__8035__auto____$1 = wheel.dom.traversal.text.call(null,l);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto____$1);
})(),x__8035__auto__);
})();
var result__12663__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12662__auto__);
if(cljs.core.truth_(result__12663__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12662__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8035__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12662__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8035__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12663__auto__;
}catch (e12982){var t__12700__auto__ = e12982;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12700__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
wheel.hoplon.link.dom._QMARK__QMARK_external = (function wheel$hoplon$link$dom$_QMARK__QMARK_external(){
return cljs.test.test_var.call(null,wheel.hoplon.link.dom._QMARK__QMARK_external.cljs$lang$var);
});
wheel.hoplon.link.dom._QMARK__QMARK_external.cljs$lang$test = (function (){
var a = "foos";
var t = "bars";
wheel.hoplon.link.dom.external_QMARK_.call(null,wheel.hoplon.link.dom.external.call(null,a),a,a);

return wheel.hoplon.link.dom.external_QMARK_.call(null,wheel.hoplon.link.dom.external.call(null,a,t),a,t);
});

wheel.hoplon.link.dom._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.hoplon.link.dom._QMARK__QMARK_external;},new cljs.core.Symbol("wheel.hoplon.link.dom","??external","wheel.hoplon.link.dom/??external",-1822457519,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.hoplon.link.dom","wheel.hoplon.link.dom",616532866,null),new cljs.core.Symbol(null,"??external","??external",-596776854,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/nxb/-vrjyef/index.html.out/wheel/hoplon/link/dom.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.hoplon.link.dom._QMARK__QMARK_external)?wheel.hoplon.link.dom._QMARK__QMARK_external.cljs$lang$test:null)]));

//# sourceMappingURL=dom.js.map