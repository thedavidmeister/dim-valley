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
try{var values__20326__auto___24361 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__20327__auto___24362 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24361);
if(cljs.core.truth_(result__20327__auto___24362)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24361),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24361);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24353){var t__20364__auto___24363 = e24353;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,t__20364__auto___24363,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24364 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24365 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24364);
if(cljs.core.truth_(result__20327__auto___24365)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24364),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24364);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24354){var t__20364__auto___24366 = e24354;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,t__20364__auto___24366,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24367 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24367);
if(cljs.core.truth_(result__20327__auto___24368)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24367),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24367);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24355){var t__20364__auto___24369 = e24355;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,t__20364__auto___24369,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24370 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24370);
if(cljs.core.truth_(result__20327__auto___24371)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24370),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24370);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24356){var t__20364__auto___24372 = e24356;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,t__20364__auto___24372,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24373 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24373);
if(cljs.core.truth_(result__20327__auto___24374)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24373),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24373);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24357){var t__20364__auto___24375 = e24357;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,t__20364__auto___24375,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24376 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a  b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24376);
if(cljs.core.truth_(result__20327__auto___24377)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24376),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24376);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24358){var t__20364__auto___24378 = e24358;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,t__20364__auto___24378,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto___24379 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" a b ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto___24380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24379);
if(cljs.core.truth_(result__20327__auto___24380)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24379),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24379);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24359){var t__20364__auto___24381 = e24359;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,t__20364__auto___24381,cljs.core.cst$kw$message,null], null));
}
try{var values__20326__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a\nb");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e24360){var t__20364__auto__ = e24360;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},cljs.core.cst$sym$wheel$string$core_SLASH__QMARK__QMARK_no_DASH_space,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$string$core,cljs.core.cst$sym$_QMARK__QMARK_no_DASH_space,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));
