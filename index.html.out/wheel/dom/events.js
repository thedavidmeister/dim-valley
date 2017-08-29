// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.dom.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.dom.manipulation');
goog.require('wheel.hoplon.on');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljs.test');
wheel.dom.events.ensure_original_object_BANG_ = (function wheel$dom$events$ensure_original_object_BANG_(e){
if(cljs.core.not((e["originalEvent"]))){
return (e["originalEvent"] = {});
} else {
return e;
}
});
wheel.dom.events.set_data_BANG_ = (function wheel$dom$events$set_data_BANG_(e,k,v){
wheel.dom.events.ensure_original_object_BANG_(e);

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
return wheel.dom.manipulation.document_append_BANG_(el);
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
var args21654 = [];
var len__8981__auto___21657 = arguments.length;
var i__8982__auto___21658 = (0);
while(true){
if((i__8982__auto___21658 < len__8981__auto___21657)){
args21654.push((arguments[i__8982__auto___21658]));

var G__21659 = (i__8982__auto___21658 + (1));
i__8982__auto___21658 = G__21659;
continue;
} else {
}
break;
}

var G__21656 = args21654.length;
switch (G__21656) {
case 2:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21654.length)].join('')));

}
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,name){
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3(el,name,null);
});

wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,name,properties){
var e = (new jQuery.Event(name,cljs.core.clj__GT_js(properties)));
return jQuery(el).trigger(e);
});

wheel.dom.events.trigger_jq_BANG_.cljs$lang$maxFixedArity = 3;

wheel.dom.events._QMARK__QMARK_events_set_get_data = (function wheel$dom$events$_QMARK__QMARK_events_set_get_data(){
return cljs.test.test_var(wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var);
});
wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test = (function (){
var result = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var inner = (function (){var G__21663 = cljs.core.cst$kw$input;
var G__21664 = ((function (G__21663,result){
return (function (p1__21661_SHARP_){
return wheel.dom.events.set_data_BANG_(p1__21661_SHARP_,cljs.core.cst$kw$foo,cljs.core.cst$kw$bar);
});})(G__21663,result))
;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__21663,G__21664) : hoplon.core.div.call(null,G__21663,G__21664));
})();
var dom = (function (){var G__21665 = cljs.core.cst$kw$input;
var G__21666 = ((function (G__21665,result,inner){
return (function (p1__21662_SHARP_){
var G__21668 = result;
var G__21669 = wheel.dom.events.get_data(p1__21662_SHARP_,cljs.core.cst$kw$foo);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21668,G__21669) : cljs.core.reset_BANG_.call(null,G__21668,G__21669));
});})(G__21665,result,inner))
;
var G__21667 = inner;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21665,G__21666,G__21667) : hoplon.core.div.call(null,G__21665,G__21666,G__21667));
})();
try{var values__20418__auto___21672 = (function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__20419__auto___21673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__20418__auto___21672);
if(cljs.core.truth_(result__20419__auto___21673)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__20418__auto___21672),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__20418__auto___21672);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21670){var t__20456__auto___21674 = e21670;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__20456__auto___21674,cljs.core.cst$kw$message,null], null));
}
wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(inner,"input");

try{var values__20418__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$kw$bar);
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e21671){var t__20456__auto__ = e21671;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.events._QMARK__QMARK_events_set_get_data;},cljs.core.cst$sym$wheel$dom$events_SLASH__QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$events,cljs.core.cst$sym$_QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e65/9txbbm/index.html.out/wheel/dom/events.cljs",31,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.events._QMARK__QMARK_events_set_get_data)?wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test:null)]));
