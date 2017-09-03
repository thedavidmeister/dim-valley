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
try{var values__18083__auto___23681 = (function (){var x__8694__auto__ = wheel.math.number.nan;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.number.nan_QMARK_,values__18083__auto___23681);
if(cljs.core.truth_(result__18084__auto___23682)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core.cons(wheel.math.number.nan_QMARK_,values__18083__auto___23681),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$nan_QMARK_,values__18083__auto___23681);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23673){var t__18121__auto___23683 = e23673;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,t__18121__auto___23683,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23684 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23684);
if(cljs.core.truth_(result__18084__auto___23685)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23684),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23684);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23674){var t__18121__auto___23686 = e23674;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,t__18121__auto___23686,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23687 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_(null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23688 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23687);
if(cljs.core.truth_(result__18084__auto___23688)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23687),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23687);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23675){var t__18121__auto___23689 = e23675;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,t__18121__auto___23689,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23690 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23690);
if(cljs.core.truth_(result__18084__auto___23691)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23690),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23690);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23676){var t__18121__auto___23692 = e23676;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,t__18121__auto___23692,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23693 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_("foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23693);
if(cljs.core.truth_(result__18084__auto___23694)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23693),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23693);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23677){var t__18121__auto___23695 = e23677;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,t__18121__auto___23695,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23696 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((100));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23697 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23696);
if(cljs.core.truth_(result__18084__auto___23697)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23696),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23696);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23678){var t__18121__auto___23698 = e23678;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,t__18121__auto___23698,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23699 = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto___23700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto___23699);
if(cljs.core.truth_(result__18084__auto___23700)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto___23699),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto___23699);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23679){var t__18121__auto___23701 = e23679;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,t__18121__auto___23701,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto__ = (function (){var x__8694__auto__ = wheel.math.number.nan_QMARK_((-1));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})();
var result__18084__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18083__auto__);
if(cljs.core.truth_(result__18084__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18083__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18083__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18084__auto__;
}catch (e23680){var t__18121__auto__ = e23680;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,t__18121__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_nan_QMARK_;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_nan_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_nan_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ehq/9txbbm/index.html.out/wheel/math/number.cljc",16,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_nan_QMARK_)?wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test:null)]));
wheel.math.number._QMARK__QMARK_parse_int = (function wheel$math$number$_QMARK__QMARK_parse_int(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test = (function (){
try{var values__18083__auto___23706 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("0");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(0));
var result__18084__auto___23707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18083__auto___23706);
if(cljs.core.truth_(result__18084__auto___23707)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18083__auto___23706),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18083__auto___23706);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23702){var t__18121__auto___23708 = e23702;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,t__18121__auto___23708,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23709 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("1");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1));
var result__18084__auto___23710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18083__auto___23709);
if(cljs.core.truth_(result__18084__auto___23710)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18083__auto___23709),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18083__auto___23709);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23703){var t__18121__auto___23711 = e23703;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,t__18121__auto___23711,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto___23712 = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("01");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1));
var result__18084__auto___23713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18083__auto___23712);
if(cljs.core.truth_(result__18084__auto___23713)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18083__auto___23712),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18083__auto___23712);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23704){var t__18121__auto___23714 = e23704;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,t__18121__auto___23714,cljs.core.cst$kw$message,null], null));
}
try{var values__18083__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.math.number.parse_int("01234");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),(1234));
var result__18084__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18083__auto__);
if(cljs.core.truth_(result__18084__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18083__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18083__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18084__auto__;
}catch (e23705){var t__18121__auto__ = e23705;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,t__18121__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_parse_int;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_parse_DASH_int,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_parse_DASH_int,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ehq/9txbbm/index.html.out/wheel/math/number.cljc",21,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_parse_int)?wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test:null)]));
