// Compiled by ClojureScript 1.9.521 {}
goog.provide('wheel.dom.events');
goog.require('cljs.core');
goog.require('wheel.dom.manipulation');
goog.require('wheel.hoplon.on');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljs.test');
wheel.dom.events.ensure_original_object_BANG_ = (function wheel$dom$events$ensure_original_object_BANG_(e){
if(cljs.core.not.call(null,(e["originalEvent"]))){
return (e["originalEvent"] = {});
} else {
return e;
}
});
wheel.dom.events.set_data_BANG_ = (function wheel$dom$events$set_data_BANG_(e,k,v){
wheel.dom.events.ensure_original_object_BANG_.call(null,e);

((e["originalEvent"])[k] = v);

return e;
});
wheel.dom.events.get_data = (function wheel$dom$events$get_data(e,k){
var temp__6736__auto__ = (e["originalEvent"]);
if(cljs.core.truth_(temp__6736__auto__)){
var original_event = temp__6736__auto__;
return (original_event[k]);
} else {
return null;
}
});
wheel.dom.events.make_bubblable_BANG_ = (function wheel$dom$events$make_bubblable_BANG_(el){
return wheel.dom.manipulation.document_append_BANG_.call(null,el);
});
wheel.dom.events.trigger_native_BANG_ = (function wheel$dom$events$trigger_native_BANG_(el,name){
if((el instanceof Element)){
} else {
throw (new Error("Assert failed: (instance? js/Element el)"));
}

var e = document.createEvent("UIEvents");
e.initEvent(name,true,true);

return el.dispatchEvent(e);
});
wheel.dom.events.trigger_jq_BANG_ = (function wheel$dom$events$trigger_jq_BANG_(var_args){
var args12282 = [];
var len__8981__auto___12285 = arguments.length;
var i__8982__auto___12286 = (0);
while(true){
if((i__8982__auto___12286 < len__8981__auto___12285)){
args12282.push((arguments[i__8982__auto___12286]));

var G__12287 = (i__8982__auto___12286 + (1));
i__8982__auto___12286 = G__12287;
continue;
} else {
}
break;
}

var G__12284 = args12282.length;
switch (G__12284) {
case 2:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12282.length)].join('')));

}
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,name){
return wheel.dom.events.trigger_jq_BANG_.call(null,el,name,null);
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,name,properties){
var e = (new jQuery.Event(name,cljs.core.clj__GT_js.call(null,properties)));
return jQuery(el).trigger(e);
});

wheel.dom.events.trigger_jq_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.events._QMARK__QMARK_events_set_get_data = (function wheel$dom$events$_QMARK__QMARK_events_set_get_data(){
return cljs.test.test_var.call(null,wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var);
});
wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test = (function (){
var result = javelin.core.cell.call(null,null);
var inner = hoplon.core.div.call(null,new cljs.core.Keyword(null,"input","input",556931961),((function (result){
return (function (p1__12289_SHARP_){
return wheel.dom.events.set_data_BANG_.call(null,p1__12289_SHARP_,new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584));
});})(result))
);
var dom = hoplon.core.div.call(null,new cljs.core.Keyword(null,"input","input",556931961),((function (result,inner){
return (function (p1__12290_SHARP_){
return cljs.core.reset_BANG_.call(null,result,wheel.dom.events.get_data.call(null,p1__12290_SHARP_,new cljs.core.Keyword(null,"foo","foo",1268894036)));
});})(result,inner))
,inner);
try{var values__12007__auto___12293 = (function (){var x__8694__auto__ = cljs.core.deref.call(null,result);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__12008__auto___12294 = cljs.core.apply.call(null,cljs.core.nil_QMARK_,values__12007__auto___12293);
if(cljs.core.truth_(result__12008__auto___12294)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.nil_QMARK_,values__12007__auto___12293),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__12007__auto___12293);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e12291){var t__12045__auto___12295 = e12291;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto___12295,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
wheel.dom.events.trigger_jq_BANG_.call(null,inner,"input");

try{var values__12007__auto__ = cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.deref.call(null,result);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Keyword(null,"bar","bar",-1386246584));
var result__12008__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__12007__auto__);
if(cljs.core.truth_(result__12008__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"bar","bar",-1386246584),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__12007__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"bar","bar",-1386246584),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__8694__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__12007__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8694__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__12008__auto__;
}catch (e12292){var t__12045__auto__ = e12292;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"bar","bar",-1386246584),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"result","result",-1239343558,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__12045__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.events._QMARK__QMARK_events_set_get_data;},new cljs.core.Symbol("wheel.dom.events","??events-set-get-data","wheel.dom.events/??events-set-get-data",-616298376,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"wheel.dom.events","wheel.dom.events",1700961266,null),new cljs.core.Symbol(null,"??events-set-get-data","??events-set-get-data",-2093627360,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/168p/9txbbm/index.html.out/wheel/dom/events.cljs",31,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.events._QMARK__QMARK_events_set_get_data)?wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test:null)]));

//# sourceMappingURL=events.js.map