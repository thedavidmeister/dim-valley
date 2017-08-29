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
var args18381 = [];
var len__8981__auto___18384 = arguments.length;
var i__8982__auto___18385 = (0);
while(true){
if((i__8982__auto___18385 < len__8981__auto___18384)){
args18381.push((arguments[i__8982__auto___18385]));

var G__18386 = (i__8982__auto___18385 + (1));
i__8982__auto___18385 = G__18386;
continue;
} else {
}
break;
}

var G__18383 = args18381.length;
switch (G__18383) {
case 2:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18381.length)].join('')));

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
var inner = (function (){var G__18390 = cljs.core.cst$kw$input;
var G__18391 = ((function (G__18390,result){
return (function (p1__18388_SHARP_){
return wheel.dom.events.set_data_BANG_(p1__18388_SHARP_,cljs.core.cst$kw$foo,cljs.core.cst$kw$bar);
});})(G__18390,result))
;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__18390,G__18391) : hoplon.core.div.call(null,G__18390,G__18391));
})();
var dom = (function (){var G__18392 = cljs.core.cst$kw$input;
var G__18393 = ((function (G__18392,result,inner){
return (function (p1__18389_SHARP_){
var G__18395 = result;
var G__18396 = wheel.dom.events.get_data(p1__18389_SHARP_,cljs.core.cst$kw$foo);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18395,G__18396) : cljs.core.reset_BANG_.call(null,G__18395,G__18396));
});})(G__18392,result,inner))
;
var G__18394 = inner;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__18392,G__18393,G__18394) : hoplon.core.div.call(null,G__18392,G__18393,G__18394));
})();
try{var values__18074__auto___18399 = (function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18075__auto___18400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__18074__auto___18399);
if(cljs.core.truth_(result__18075__auto___18400)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.nil_QMARK_,values__18074__auto___18399),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$nil_QMARK_,values__18074__auto___18399);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18397){var t__18112__auto___18401 = e18397;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__18112__auto___18401,cljs.core.cst$kw$message,null], null));
}
wheel.dom.events.trigger_jq_BANG_.cljs$core$IFn$_invoke$arity$2(inner,"input");

try{var values__18074__auto__ = cljs.core._conj((function (){var x__8694__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result) : cljs.core.deref.call(null,result));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$kw$bar);
var result__18075__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18074__auto__);
if(cljs.core.truth_(result__18075__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18074__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18074__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18075__auto__;
}catch (e18398){var t__18112__auto__ = e18398;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$kw$bar,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$result)),cljs.core.cst$kw$actual,t__18112__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$var = new cljs.core.Var(function(){return wheel.dom.events._QMARK__QMARK_events_set_get_data;},cljs.core.cst$sym$wheel$dom$events_SLASH__QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$dom$events,cljs.core.cst$sym$_QMARK__QMARK_events_DASH_set_DASH_get_DASH_data,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ej3/9txbbm/index.html.out/wheel/dom/events.cljs",31,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.dom.events._QMARK__QMARK_events_set_get_data)?wheel.dom.events._QMARK__QMARK_events_set_get_data.cljs$lang$test:null)]));
