// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.math.number');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
wheel.math.number.pi = Math.PI;
wheel.math.number.nan = (function (){
return NaN;
}).call(null);
wheel.math.number.nan_QMARK_ = (function wheel$math$number$nan_QMARK_(n){
if(typeof n === 'number'){
return !((n === n));
} else {
return false;
}
});
wheel.math.number.safe_bigdec = (function wheel$math$number$safe_bigdec(n){
if(cljs.core.truth_((function (){var and__7748__auto__ = n;
if(cljs.core.truth_(and__7748__auto__)){
return cljs.core.not(wheel.math.number.nan_QMARK_(n));
} else {
return and__7748__auto__;
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
try{var values__17649__auto___23827 = (function (){var x__8694__auto__ = wheel.math.number.nan;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.number.nan_QMARK_,values__17649__auto___23827);
if(cljs.core.truth_(result__17650__auto___23828)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core.cons(wheel.math.number.nan_QMARK_,values__17649__auto___23827),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$nan_QMARK_,values__17649__auto___23827);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23819){var t__17687__auto___23829 = e23819;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,t__17687__auto___23829,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23830 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23830);
if(cljs.core.truth_(result__17650__auto___23831)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23830),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23830);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23820){var t__17687__auto___23832 = e23820;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,t__17687__auto___23832,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23833 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_(null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23834 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23833);
if(cljs.core.truth_(result__17650__auto___23834)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23833),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23833);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23821){var t__17687__auto___23835 = e23821;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,t__17687__auto___23835,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23836 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23836);
if(cljs.core.truth_(result__17650__auto___23837)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23836),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23836);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23822){var t__17687__auto___23838 = e23822;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,t__17687__auto___23838,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23839 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_("foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23839);
if(cljs.core.truth_(result__17650__auto___23840)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23839),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23839);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23823){var t__17687__auto___23841 = e23823;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,t__17687__auto___23841,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23842 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((100));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23842);
if(cljs.core.truth_(result__17650__auto___23843)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23842),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23842);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23824){var t__17687__auto___23844 = e23824;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,t__17687__auto___23844,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23845 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto___23846 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto___23845);
if(cljs.core.truth_(result__17650__auto___23846)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto___23845),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto___23845);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23825){var t__17687__auto___23847 = e23825;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,t__17687__auto___23847,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((-1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e23826){var t__17687__auto__ = e23826;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_nan_QMARK_;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_nan_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_nan_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/eik/9txbbm/index.html.out/wheel/math/number.cljc",16,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_nan_QMARK_)?wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test:null)]));
wheel.math.number._QMARK__QMARK_parse_int = (function wheel$math$number$_QMARK__QMARK_parse_int(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test = (function (){
try{var values__17649__auto___23852 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("0");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__17650__auto___23853 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___23852);
if(cljs.core.truth_(result__17650__auto___23853)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___23852),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___23852);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23848){var t__17687__auto___23854 = e23848;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,t__17687__auto___23854,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23855 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("1");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1));
var result__17650__auto___23856 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___23855);
if(cljs.core.truth_(result__17650__auto___23856)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___23855),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___23855);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23849){var t__17687__auto___23857 = e23849;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,t__17687__auto___23857,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___23858 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("01");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1));
var result__17650__auto___23859 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto___23858);
if(cljs.core.truth_(result__17650__auto___23859)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto___23858),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto___23858);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23850){var t__17687__auto___23860 = e23850;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,t__17687__auto___23860,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("01234");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1234));
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e23851){var t__17687__auto__ = e23851;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_parse_int;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_parse_DASH_int,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_parse_DASH_int,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/eik/9txbbm/index.html.out/wheel/math/number.cljc",21,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_parse_int)?wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test:null)]));
