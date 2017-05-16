// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
var args12329 = [];
var len__8981__auto___12332 = arguments.length;
var i__8982__auto___12333 = (0);
while(true){
if((i__8982__auto___12333 < len__8981__auto___12332)){
args12329.push((arguments[i__8982__auto___12333]));

var G__12334 = (i__8982__auto___12333 + (1));
i__8982__auto___12333 = G__12334;
continue;
} else {
}
break;
}

var G__12331 = args12329.length;
switch (G__12331) {
case 1:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12329.length)].join('')));

}
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1 = (function (href){
return wheel.link.hoplon.external.call(null,href,href);
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2 = (function (href,text){
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

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
try{var values__12007__auto___12344 = (function (){var x__8694__auto__ = l;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"a"),x__8694__auto__);
})();
var result__12008__auto___12345 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12344);
if(cljs.core.truth_(result__12008__auto___12345)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12344),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12007__auto___12344);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12340){var t__12045__auto___12346 = e12340;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"a"),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12346,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12347 = (function (){var x__8694__auto__ = l;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__8694__auto__);
})();
var result__12008__auto___12348 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12347);
if(cljs.core.truth_(result__12008__auto___12348)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12347),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12007__auto___12347);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12341){var t__12045__auto___12349 = e12341;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),"[target=\"_blank\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12349,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto___12350 = (function (){var x__8694__auto__ = l;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto___12351 = cljs.core.apply.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12350);
if(cljs.core.truth_(result__12008__auto___12351)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,wheel.dom.traversal.is_QMARK_,values__12007__auto___12350),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),values__12007__auto___12350);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12342){var t__12045__auto___12352 = e12342;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("dt","is?","dt/is?",252222323,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"[href=\"",new cljs.core.Symbol(null,"a","a",-482876059,null),"\"]")),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12352,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__12007__auto__ = (function (){var x__8694__auto__ = t;
return cljs.core._conj.call(null,(function (){var x__8694__auto____$1 = wheel.dom.traversal.text.call(null,l);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e12343){var t__12045__auto__ = e12343;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.list(new cljs.core.Symbol("dt","text","dt/text",-150041802,null),new cljs.core.Symbol(null,"l","l",-1258542346,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var.call(null,wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var a = "foos";
var t = "bars";
wheel.link.hoplon.external_QMARK_.call(null,wheel.link.hoplon.external.call(null,a),a,a);

return wheel.link.hoplon.external_QMARK_.call(null,wheel.link.hoplon.external.call(null,a,t),a,t);
});

wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},new cljs.core.Symbol("wheel.link.hoplon","??external","wheel.link.hoplon/??external",749860693,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.link.hoplon","wheel.link.hoplon",-946517627,null),new cljs.core.Symbol(null,"??external","??external",-596776854,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/1l0k/9txbbm/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));

//# sourceMappingURL=hoplon.js.map