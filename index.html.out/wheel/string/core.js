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
try{var values__17649__auto___20418 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__17650__auto___20419 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20418);
if(cljs.core.truth_(result__17650__auto___20419)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20418),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20418);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20410){var t__17687__auto___20420 = e20410;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,t__17687__auto___20420,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20421 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20422 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20421);
if(cljs.core.truth_(result__17650__auto___20422)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20421),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20421);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20411){var t__17687__auto___20423 = e20411;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,t__17687__auto___20423,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20424 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20425 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20424);
if(cljs.core.truth_(result__17650__auto___20425)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20424),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20424);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20412){var t__17687__auto___20426 = e20412;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,t__17687__auto___20426,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20427 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20428 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20427);
if(cljs.core.truth_(result__17650__auto___20428)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20427),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20427);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20413){var t__17687__auto___20429 = e20413;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,t__17687__auto___20429,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20430 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20430);
if(cljs.core.truth_(result__17650__auto___20431)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20430),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20430);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20414){var t__17687__auto___20432 = e20414;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,t__17687__auto___20432,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20433 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a  b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20433);
if(cljs.core.truth_(result__17650__auto___20434)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20433),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20433);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20415){var t__17687__auto___20435 = e20415;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,t__17687__auto___20435,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___20436 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" a b ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto___20437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___20436);
if(cljs.core.truth_(result__17650__auto___20437)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___20436),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___20436);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20416){var t__17687__auto___20438 = e20416;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,t__17687__auto___20438,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a\nb");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e20417){var t__17687__auto__ = e20417;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},cljs.core.cst$sym$wheel$string$core_SLASH__QMARK__QMARK_no_DASH_space,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$string$core,cljs.core.cst$sym$_QMARK__QMARK_no_DASH_space,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6o/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));
