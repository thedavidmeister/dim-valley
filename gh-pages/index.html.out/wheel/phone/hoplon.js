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
var p__$1 = (function (){var fexpr__25842 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25841,G__25840){
return (G__25840.cljs$core$IFn$_invoke$arity$1 ? G__25840.cljs$core$IFn$_invoke$arity$1(G__25841) : G__25840.call(null,G__25841));
}));
return (fexpr__25842.cljs$core$IFn$_invoke$arity$2 ? fexpr__25842.cljs$core$IFn$_invoke$arity$2(p,cuerdas.core.collapse_whitespace) : fexpr__25842.call(null,p,cuerdas.core.collapse_whitespace));
})();
var G__25843 = cljs.core.cst$kw$class;
var G__25844 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["phone",null], null), null);
var G__25845 = cljs.core.cst$kw$href;
var G__25846 = (function (){var fexpr__25850 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25843,G__25844,G__25845,p__$1){
return (function (G__25849,G__25848){
return ["tel:",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25848.cljs$core$IFn$_invoke$arity$1 ? G__25848.cljs$core$IFn$_invoke$arity$1(G__25849) : G__25848.call(null,G__25849)))].join('');
});})(G__25843,G__25844,G__25845,p__$1))
);
return (fexpr__25850.cljs$core$IFn$_invoke$arity$2 ? fexpr__25850.cljs$core$IFn$_invoke$arity$2(p__$1,wheel.string.core.no_space) : fexpr__25850.call(null,p__$1,wheel.string.core.no_space));
})();
var G__25847 = p__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__25843,G__25844,G__25845,G__25846,G__25847) : hoplon.core.a.call(null,G__25843,G__25844,G__25845,G__25846,G__25847));
});
wheel.phone.hoplon._QMARK__QMARK_phone = (function wheel$phone$hoplon$_QMARK__QMARK_phone(){
return cljs.test.test_var(wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var);
});
wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test = (function (){
var el_25857 = wheel.phone.hoplon.phone("+61444 123 456");
try{var values__17761__auto___25858 = (function (){var x__9592__auto__ = el_25857;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:+61444123456\"]"),x__9592__auto__);
})();
var result__17762__auto___25859 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25858);
if(cljs.core.truth_(result__17762__auto___25859)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25858),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25858);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25851){var t__17806__auto___25860 = e25851;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:+61444123456\"]"),cljs.core.cst$kw$actual,t__17806__auto___25860,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25861 = (function (){var x__9592__auto__ = el_25857;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9592__auto__);
})();
var result__17762__auto___25862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25861);
if(cljs.core.truth_(result__17762__auto___25862)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25861),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25861);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25852){var t__17806__auto___25863 = e25852;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17806__auto___25863,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25864 = cljs.core._conj((function (){var x__9592__auto__ = wheel.dom.traversal.text(el_25857);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"+61444 123 456");
var result__17762__auto___25865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25864);
if(cljs.core.truth_(result__17762__auto___25865)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25864),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25864);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25853){var t__17806__auto___25866 = e25853;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"+61444 123 456",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17806__auto___25866,cljs.core.cst$kw$message,null], null));
}
var el = wheel.phone.hoplon.phone("1\n 2   3");
try{var values__17761__auto___25867 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a[href=\"tel:123\"]"),x__9592__auto__);
})();
var result__17762__auto___25868 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25867);
if(cljs.core.truth_(result__17762__auto___25868)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25867),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25867);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25854){var t__17806__auto___25869 = e25854;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a[href=\"tel:123\"]"),cljs.core.cst$kw$actual,t__17806__auto___25869,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25870 = (function (){var x__9592__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.phone"),x__9592__auto__);
})();
var result__17762__auto___25871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17761__auto___25870);
if(cljs.core.truth_(result__17762__auto___25871)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17761__auto___25870),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17761__auto___25870);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25855){var t__17806__auto___25872 = e25855;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.phone"),cljs.core.cst$kw$actual,t__17806__auto___25872,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"1 2 3");
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25856){var t__17806__auto__ = e25856;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"1 2 3",cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$var = new cljs.core.Var(function(){return wheel.phone.hoplon._QMARK__QMARK_phone;},cljs.core.cst$sym$wheel$phone$hoplon_SLASH__QMARK__QMARK_phone,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$phone$hoplon,cljs.core.cst$sym$_QMARK__QMARK_phone,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/phone/hoplon.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.phone.hoplon._QMARK__QMARK_phone)?wheel.phone.hoplon._QMARK__QMARK_phone.cljs$lang$test:null)]));
