// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.phone.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cuerdas.core');
goog.require('wheel.dom.traversal');
goog.require('wheel.string.core');
goog.require('cljs.test');
wheel.phone.hoplon.phone = (function wheel$phone$hoplon$phone(p){
var p__$1 = (function (){var fexpr__20998 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20997,G__20996){
return (G__20996.cljs$core$IFn$_invoke$arity$1 ? G__20996.cljs$core$IFn$_invoke$arity$1(G__20997) : G__20996.call(null,G__20997));
}));
return (fexpr__20998.cljs$core$IFn$_invoke$arity$2 ? fexpr__20998.cljs$core$IFn$_invoke$arity$2(p,cuerdas.core.collapse_whitespace) : fexpr__20998.call(null,p,cuerdas.core.collapse_whitespace));
})();
var G__20999 = cljs.core.cst$kw$class;
var G__21000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["phone",null], null), null);
var G__21001 = cljs.core.cst$kw$href;
var G__21002 = (function (){var fexpr__21006 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20999,G__21000,G__21001,p__$1){
return (function (G__21005,G__21004){
return ["tel:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__21004.cljs$core$IFn$_invoke$arity$1 ? G__21004.cljs$core$IFn$_invoke$arity$1(G__21005) : G__21004.call(null,G__21005)))].join('');
});})(G__20999,G__21000,G__21001,p__$1))
);
return (fexpr__21006.cljs$core$IFn$_invoke$arity$2 ? fexpr__21006.cljs$core$IFn$_invoke$arity$2(p__$1,wheel.string.core.no_space) : fexpr__21006.call(null,p__$1,wheel.string.core.no_space));
})();
var G__21003 = p__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__20999,G__21000,G__21001,G__21002,G__21003) : hoplon.core.a.call(null,G__20999,G__21000,G__21001,G__21002,G__21003));
});
wheel.phone.hoplon._QMARK__QMARK_phone = (function wheel$phone$hoplon$_QMARK__QMARK_phone(){
return cljs.test.test_var(wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var);
});
wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test = (function (){
var el_21013 = wheel.phone.hoplon.phone("+61444 123 456");
try{var values__17365__auto___21014 = (function (){var x__9196__auto__ = el_21013;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:+61444123456\"]"),x__9196__auto__);
})();
var result__17366__auto___21015 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21014);
if(cljs.core.truth_(result__17366__auto___21015)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21014),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21014);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21007){var t__17410__auto___21016 = e21007;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,t__17410__auto___21016,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21017 = (function (){var x__9196__auto__ = el_21013;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9196__auto__);
})();
var result__17366__auto___21018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21017);
if(cljs.core.truth_(result__17366__auto___21018)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21017),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21017);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21008){var t__17410__auto___21019 = e21008;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17410__auto___21019,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21020 = cljs.core._conj((function (){var x__9196__auto__ = wheel.dom.traversal.text(el_21013);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"+61444 123 456");
var result__17366__auto___21021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21020);
if(cljs.core.truth_(result__17366__auto___21021)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21020),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21020);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21009){var t__17410__auto___21022 = e21009;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto___21022,cljs.core.cst$kw$message,null], null));
}
var el = wheel.phone.hoplon.phone("1\n 2   3");
try{var values__17365__auto___21023 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:123\"]"),x__9196__auto__);
})();
var result__17366__auto___21024 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21023);
if(cljs.core.truth_(result__17366__auto___21024)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21023),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21023);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21010){var t__17410__auto___21025 = e21010;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,t__17410__auto___21025,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21026 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9196__auto__);
})();
var result__17366__auto___21027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21026);
if(cljs.core.truth_(result__17366__auto___21027)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21026),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21026);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21011){var t__17410__auto___21028 = e21011;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17410__auto___21028,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"1 2 3");
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e21012){var t__17410__auto__ = e21012;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var = new cljs.core.Var(function(){return wheel.phone.hoplon._QMARK__QMARK_phone;},cljs.core.cst$sym$wheel$phone$hoplon_SLASH__QMARK__QMARK_phone,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$phone$hoplon,cljs.core.cst$sym$_QMARK__QMARK_phone,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/phone/hoplon.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.phone.hoplon._QMARK__QMARK_phone)?wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test:null)]));
