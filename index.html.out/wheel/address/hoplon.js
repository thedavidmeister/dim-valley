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
var G__24081 = cljs.core.cst$kw$class;
var G__24082 = "address";
var G__24083 = a;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__24081,G__24082,G__24083) : hoplon.core.span.call(null,G__24081,G__24082,G__24083));
});
wheel.address.hoplon.simple_QMARK_ = (function wheel$address$hoplon$simple_QMARK_(el,a){
try{var values__20418__auto___24088 = (function (){var x__8694__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"span.address"),x__8694__auto__);
})();
var result__20419__auto___24089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20418__auto___24088);
if(cljs.core.truth_(result__20419__auto___24089)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20418__auto___24088),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__20418__auto___24088);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24086){var t__20456__auto___24090 = e24086;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"span.address"),cljs.core.cst$kw$actual,t__20456__auto___24090,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto__ = (function (){var x__8694__auto__ = a;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e24087){var t__20456__auto__ = e24087;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$a,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.address.hoplon._QMARK__QMARK_simple = (function wheel$address$hoplon$_QMARK__QMARK_simple(){
return cljs.test.test_var(wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var);
});
wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test = (function (){
return wheel.address.hoplon.simple_QMARK_(wheel.address.hoplon.simple("foo"),"foo");
});

wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$var = new cljs.core.Var(function(){return wheel.address.hoplon._QMARK__QMARK_simple;},cljs.core.cst$sym$wheel$address$hoplon_SLASH__QMARK__QMARK_simple,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$address$hoplon,cljs.core.cst$sym$_QMARK__QMARK_simple,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9g/9txbbm/index.html.out/wheel/address/hoplon.cljs",18,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.address.hoplon._QMARK__QMARK_simple)?wheel.address.hoplon._QMARK__QMARK_simple.cljs$lang$test:null)]));
