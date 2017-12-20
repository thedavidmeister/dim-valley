// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.math.number');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
wheel.math.number.pi = Math.PI;
wheel.math.number.tau = (wheel.math.number.pi * (2));
wheel.math.number.lambda = (wheel.math.number.pi * 0.5);
wheel.math.number.nan = (function (){var fexpr__24888 = (function (){
return NaN;
});
return fexpr__24888();
})();
wheel.math.number.nan_QMARK_ = (function wheel$math$number$nan_QMARK_(n){
if(typeof n === 'number'){
return !((n === n));
} else {
return false;
}
});
wheel.math.number.safe_bigdec = (function wheel$math$number$safe_bigdec(n){
if(cljs.core.truth_((function (){var and__8228__auto__ = n;
if(cljs.core.truth_(and__8228__auto__)){
return cljs.core.not(wheel.math.number.nan_QMARK_(n));
} else {
return and__8228__auto__;
}
})())){
return n;
} else {
return n;
}
});
/**
 * Parse a string to an int using native language parsing logic (which may include throwing errors for any string that is not obviously an integer). Forces radix 10 for JS.
 */
wheel.math.number.parse_int = (function wheel$math$number$parse_int(s){
return parseInt(s,(10));
});
wheel.math.number._QMARK__QMARK_nan_QMARK_ = (function wheel$math$number$_QMARK__QMARK_nan_QMARK_(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test = (function (){
try{var values__17363__auto___24897 = (function (){var x__9194__auto__ = wheel.math.number.nan;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24898 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.number.nan_QMARK_,values__17363__auto___24897);
if(cljs.core.truth_(result__17364__auto___24898)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core.cons(wheel.math.number.nan_QMARK_,values__17363__auto___24897),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$nan_QMARK_,values__17363__auto___24897);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24889){var t__17408__auto___24899 = e24889;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,t__17408__auto___24899,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24900 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_((1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24901 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24900);
if(cljs.core.truth_(result__17364__auto___24901)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24900),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24900);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24890){var t__17408__auto___24902 = e24890;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,t__17408__auto___24902,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24903 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_(null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24903);
if(cljs.core.truth_(result__17364__auto___24904)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24903),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24903);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24891){var t__17408__auto___24905 = e24891;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,t__17408__auto___24905,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24906 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24906);
if(cljs.core.truth_(result__17364__auto___24907)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24906),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24906);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24892){var t__17408__auto___24908 = e24892;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,t__17408__auto___24908,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24909 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_("foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24909);
if(cljs.core.truth_(result__17364__auto___24910)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24909),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24909);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24893){var t__17408__auto___24911 = e24893;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,t__17408__auto___24911,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24912 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_((100));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24912);
if(cljs.core.truth_(result__17364__auto___24913)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24912),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24912);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24894){var t__17408__auto___24914 = e24894;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,t__17408__auto___24914,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24915 = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___24916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___24915);
if(cljs.core.truth_(result__17364__auto___24916)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___24915),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___24915);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24895){var t__17408__auto___24917 = e24895;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,t__17408__auto___24917,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = wheel.math.number.nan_QMARK_((-1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e24896){var t__17408__auto__ = e24896;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_nan_QMARK_;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_nan_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_nan_QMARK_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/16ft/ari3q5/index.html.out/wheel/math/number.cljc",16,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_nan_QMARK_)?wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test:null)]));
wheel.math.number._QMARK__QMARK_parse_int = (function wheel$math$number$_QMARK__QMARK_parse_int(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test = (function (){
try{var values__17363__auto___24922 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.number.parse_int("0");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(0));
var result__17364__auto___24923 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24922);
if(cljs.core.truth_(result__17364__auto___24923)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24922),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24922);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24918){var t__17408__auto___24924 = e24918;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,t__17408__auto___24924,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24925 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.number.parse_int("1");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(1));
var result__17364__auto___24926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24925);
if(cljs.core.truth_(result__17364__auto___24926)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24925),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24925);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24919){var t__17408__auto___24927 = e24919;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,t__17408__auto___24927,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___24928 = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.number.parse_int("01");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(1));
var result__17364__auto___24929 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___24928);
if(cljs.core.truth_(result__17364__auto___24929)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___24928),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___24928);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24920){var t__17408__auto___24930 = e24920;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,t__17408__auto___24930,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = cljs.core._conj((function (){var x__9194__auto__ = wheel.math.number.parse_int("01234");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),(1234));
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e24921){var t__17408__auto__ = e24921;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_parse_int;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_parse_DASH_int,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_parse_DASH_int,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/16ft/ari3q5/index.html.out/wheel/math/number.cljc",21,1,42,42,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_parse_int)?wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test:null)]));
