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
try{var values__19323__auto___24197 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"a");
var result__19324__auto___24198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24197);
if(cljs.core.truth_(result__19324__auto___24198)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24197),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24197);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24189){var t__19361__auto___24199 = e24189;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,t__19361__auto___24199,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24200 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24200);
if(cljs.core.truth_(result__19324__auto___24201)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24200),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24200);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24190){var t__19361__auto___24202 = e24190;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,t__19361__auto___24202,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24203 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24203);
if(cljs.core.truth_(result__19324__auto___24204)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24203),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24203);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24191){var t__19361__auto___24205 = e24191;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,t__19361__auto___24205,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24206 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24206);
if(cljs.core.truth_(result__19324__auto___24207)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24206),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24206);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24192){var t__19361__auto___24208 = e24192;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,t__19361__auto___24208,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24209 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24209);
if(cljs.core.truth_(result__19324__auto___24210)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24209),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24209);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24193){var t__19361__auto___24211 = e24193;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,t__19361__auto___24211,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24212 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a  b");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24212);
if(cljs.core.truth_(result__19324__auto___24213)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24212),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24212);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24194){var t__19361__auto___24214 = e24194;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,t__19361__auto___24214,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto___24215 = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space(" a b ");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto___24216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto___24215);
if(cljs.core.truth_(result__19324__auto___24216)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto___24215),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto___24215);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24195){var t__19361__auto___24217 = e24195;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,t__19361__auto___24217,cljs.core.cst$kw$message,null], null));
}
try{var values__19323__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.string.core.no_space("a\nb");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"ab");
var result__19324__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19323__auto__);
if(cljs.core.truth_(result__19324__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19323__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19323__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19324__auto__;
}catch (e24196){var t__19361__auto__ = e24196;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,t__19361__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},cljs.core.cst$sym$wheel$string$core_SLASH__QMARK__QMARK_no_DASH_space,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$string$core,cljs.core.cst$sym$_QMARK__QMARK_no_DASH_space,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9y/9txbbm/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));
