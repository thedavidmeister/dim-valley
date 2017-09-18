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
var p__$1 = (function (){var fexpr__25498 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25497,G__25496){
return (G__25496.cljs$core$IFn$_invoke$arity$1 ? G__25496.cljs$core$IFn$_invoke$arity$1(G__25497) : G__25496.call(null,G__25497));
}));
return (fexpr__25498.cljs$core$IFn$_invoke$arity$2 ? fexpr__25498.cljs$core$IFn$_invoke$arity$2(p,cuerdas.core.collapse_whitespace) : fexpr__25498.call(null,p,cuerdas.core.collapse_whitespace));
})();
var G__25499 = cljs.core.cst$kw$class;
var G__25500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["phone",null], null), null);
var G__25501 = cljs.core.cst$kw$href;
var G__25502 = (function (){var fexpr__25506 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25499,G__25500,G__25501,p__$1){
return (function (G__25505,G__25504){
return ["tel:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25504.cljs$core$IFn$_invoke$arity$1 ? G__25504.cljs$core$IFn$_invoke$arity$1(G__25505) : G__25504.call(null,G__25505)))].join('');
});})(G__25499,G__25500,G__25501,p__$1))
);
return (fexpr__25506.cljs$core$IFn$_invoke$arity$2 ? fexpr__25506.cljs$core$IFn$_invoke$arity$2(p__$1,wheel.string.core.no_space) : fexpr__25506.call(null,p__$1,wheel.string.core.no_space));
})();
var G__25503 = p__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__25499,G__25500,G__25501,G__25502,G__25503) : hoplon.core.a.call(null,G__25499,G__25500,G__25501,G__25502,G__25503));
});
wheel.phone.hoplon._QMARK__QMARK_phone = (function wheel$phone$hoplon$_QMARK__QMARK_phone(){
return cljs.test.test_var(wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var);
});
wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test = (function (){
var el_25513 = wheel.phone.hoplon.phone("+61444 123 456");
try{var values__17365__auto___25514 = (function (){var x__9196__auto__ = el_25513;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:+61444123456\"]"),x__9196__auto__);
})();
var result__17366__auto___25515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___25514);
if(cljs.core.truth_(result__17366__auto___25515)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___25514),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___25514);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25507){var t__17410__auto___25516 = e25507;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,t__17410__auto___25516,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25517 = (function (){var x__9196__auto__ = el_25513;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9196__auto__);
})();
var result__17366__auto___25518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___25517);
if(cljs.core.truth_(result__17366__auto___25518)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___25517),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___25517);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25508){var t__17410__auto___25519 = e25508;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17410__auto___25519,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25520 = cljs.core._conj((function (){var x__9196__auto__ = wheel.dom.traversal.text(el_25513);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"+61444 123 456");
var result__17366__auto___25521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___25520);
if(cljs.core.truth_(result__17366__auto___25521)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___25520),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___25520);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25509){var t__17410__auto___25522 = e25509;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto___25522,cljs.core.cst$kw$message,null], null));
}
var el = wheel.phone.hoplon.phone("1\n 2   3");
try{var values__17365__auto___25523 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:123\"]"),x__9196__auto__);
})();
var result__17366__auto___25524 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___25523);
if(cljs.core.truth_(result__17366__auto___25524)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___25523),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___25523);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25510){var t__17410__auto___25525 = e25510;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,t__17410__auto___25525,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___25526 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9196__auto__);
})();
var result__17366__auto___25527 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___25526);
if(cljs.core.truth_(result__17366__auto___25527)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___25526),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___25526);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25511){var t__17410__auto___25528 = e25511;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17410__auto___25528,cljs.core.cst$kw$message,null], null));
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
}catch (e25512){var t__17410__auto__ = e25512;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var = new cljs.core.Var(function(){return wheel.phone.hoplon._QMARK__QMARK_phone;},cljs.core.cst$sym$wheel$phone$hoplon_SLASH__QMARK__QMARK_phone,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$phone$hoplon,cljs.core.cst$sym$_QMARK__QMARK_phone,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7d/i688ot/index.html.out/wheel/phone/hoplon.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.phone.hoplon._QMARK__QMARK_phone)?wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test:null)]));
