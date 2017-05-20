// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.address.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
/**
 * The simplest address element that could possibly work
 */
wheel.address.hoplon.simple = (function wheel$address$hoplon$simple(a){
var G__20697 = cljs.core.cst$kw$class;
var G__20698 = "address";
var G__20699 = a;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20697,G__20698,G__20699) : hoplon.core.span.call(null,G__20697,G__20698,G__20699));
});
wheel.address.hoplon.simple_QMARK_ = (function wheel$address$hoplon$simple_QMARK_(el,a){
try{var values__16095__auto___20704 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"span.address"),x__8694__auto__);
})();
var result__16096__auto___20705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__16095__auto___20704);
if(cljs.core.truth_(result__16096__auto___20705)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__16095__auto___20704),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__16095__auto___20704);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20702){var t__16133__auto___20706 = e20702;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,t__16133__auto___20706,cljs.core.cst$kw$message,null], null));
}
try{var values__16095__auto__ = (function (){var x__8694__auto__ = a;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__16096__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__16095__auto__);
if(cljs.core.truth_(result__16096__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__16095__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__16095__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__16096__auto__;
}catch (e20703){var t__16133__auto__ = e20703;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__16133__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.address.hoplon._QMARK__QMARK_simple = (function wheel$address$hoplon$_QMARK__QMARK_simple(){
return cljs.test.test_var(wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var);
});
wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test = (function (){
return wheel.address.hoplon.simple_QMARK_(wheel.address.hoplon.simple("foo"),"foo");
});

wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var = new cljs.core.Var(function(){return wheel.address.hoplon._QMARK__QMARK_simple;},cljs.core.cst$sym$wheel$address$hoplon_SLASH__QMARK__QMARK_simple,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$address$hoplon,cljs.core.cst$sym$_QMARK__QMARK_simple,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/lxd/9txbbm/index.html.out/wheel/address/hoplon.cljs",18,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.address.hoplon._QMARK__QMARK_simple)?wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test:null)]));
