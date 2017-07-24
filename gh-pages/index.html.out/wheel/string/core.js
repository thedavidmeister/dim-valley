// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.string.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.test');
wheel.string.core.no_space = (function wheel$string$core$no_space(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s/));
});
wheel.string.core._QMARK__QMARK_no_space = (function wheel$string$core$_QMARK__QMARK_no_space(){
return cljs.test.test_var(wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var);
});
wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test = (function (){
try{var values__20418__auto___24391 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__20419__auto___24392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24391);
if(cljs.core.truth_(result__20419__auto___24392)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24391),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24391);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24383){var t__20456__auto___24393 = e24383;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,t__20456__auto___24393,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24394 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24394);
if(cljs.core.truth_(result__20419__auto___24395)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24394),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24394);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24384){var t__20456__auto___24396 = e24384;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,t__20456__auto___24396,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24397 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24398 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24397);
if(cljs.core.truth_(result__20419__auto___24398)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24397),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24397);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24385){var t__20456__auto___24399 = e24385;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,t__20456__auto___24399,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24400 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24400);
if(cljs.core.truth_(result__20419__auto___24401)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24400),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24400);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24386){var t__20456__auto___24402 = e24386;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,t__20456__auto___24402,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24403 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24403);
if(cljs.core.truth_(result__20419__auto___24404)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24403),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24403);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24387){var t__20456__auto___24405 = e24387;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,t__20456__auto___24405,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24406 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a  b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24406);
if(cljs.core.truth_(result__20419__auto___24407)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24406),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24406);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24388){var t__20456__auto___24408 = e24388;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,t__20456__auto___24408,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___24409 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" a b ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto___24410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24409);
if(cljs.core.truth_(result__20419__auto___24410)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24409),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24409);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24389){var t__20456__auto___24411 = e24389;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,t__20456__auto___24411,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a\nb");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e24390){var t__20456__auto__ = e24390;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},cljs.core.cst$sym$wheel$string$core_SLASH__QMARK__QMARK_no_DASH_space,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$string$core,cljs.core.cst$sym$_QMARK__QMARK_no_DASH_space,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e70/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));
