// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
try{var values__17761__auto___25620 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space("a");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"a");
var result__17762__auto___25621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25620);
if(cljs.core.truth_(result__17762__auto___25621)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25620),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25620);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25612){var t__17806__auto___25622 = e25612;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"a",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a")),cljs.core.cst$kw$actual,t__17806__auto___25622,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25623 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space("a b");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25623);
if(cljs.core.truth_(result__17762__auto___25624)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25623),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25623);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25613){var t__17806__auto___25625 = e25613;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a b")),cljs.core.cst$kw$actual,t__17806__auto___25625,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25626 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space(" ab");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25626);
if(cljs.core.truth_(result__17762__auto___25627)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25626),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25626);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25614){var t__17806__auto___25628 = e25614;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab")),cljs.core.cst$kw$actual,t__17806__auto___25628,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25629 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space("ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25629);
if(cljs.core.truth_(result__17762__auto___25630)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25629),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25629);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25615){var t__17806__auto___25631 = e25615;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"ab ")),cljs.core.cst$kw$actual,t__17806__auto___25631,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25632 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space(" ab ");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25633 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25632);
if(cljs.core.truth_(result__17762__auto___25633)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25632),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25632);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25616){var t__17806__auto___25634 = e25616;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," ab ")),cljs.core.cst$kw$actual,t__17806__auto___25634,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25635 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space("a  b");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25635);
if(cljs.core.truth_(result__17762__auto___25636)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25635),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25635);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25617){var t__17806__auto___25637 = e25617;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a  b")),cljs.core.cst$kw$actual,t__17806__auto___25637,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25638 = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space(" a b ");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto___25639 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25638);
if(cljs.core.truth_(result__17762__auto___25639)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25638),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25638);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25618){var t__17806__auto___25640 = e25618;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space," a b ")),cljs.core.cst$kw$actual,t__17806__auto___25640,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = wheel.string.core.no_space("a\nb");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),"ab");
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25619){var t__17806__auto__ = e25619;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"ab",cljs.core.list(cljs.core.cst$sym$no_DASH_space,"a\nb")),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.string.core._QMARK__QMARK_no_space.cljs$lang$var = new cljs.core.Var(function(){return wheel.string.core._QMARK__QMARK_no_space;},cljs.core.cst$sym$wheel$string$core_SLASH__QMARK__QMARK_no_DASH_space,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$string$core,cljs.core.cst$sym$_QMARK__QMARK_no_DASH_space,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/string/core.cljc",20,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.string.core._QMARK__QMARK_no_space)?wheel.string.core._QMARK__QMARK_no_space.cljs$lang$test:null)]));
