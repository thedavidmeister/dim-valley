// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.math.number');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
wheel.math.number.pi = Math.PI;
wheel.math.number.nan = (function (){var fexpr__24724 = (function (){
return NaN;
});
return fexpr__24724();
})();
wheel.math.number.nan_QMARK_ = (function wheel$math$number$nan_QMARK_(n){
if(typeof n === 'number'){
return !((n === n));
} else {
return false;
}
});
wheel.math.number.safe_bigdec = (function wheel$math$number$safe_bigdec(n){
if(cljs.core.truth_((function (){var and__8230__auto__ = n;
if(cljs.core.truth_(and__8230__auto__)){
return cljs.core.not(wheel.math.number.nan_QMARK_(n));
} else {
return and__8230__auto__;
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
try{var values__17365__auto___24733 = (function (){var x__9196__auto__ = wheel.math.number.nan;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.number.nan_QMARK_,values__17365__auto___24733);
if(cljs.core.truth_(result__17366__auto___24734)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core.cons(wheel.math.number.nan_QMARK_,values__17365__auto___24733),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$nan_QMARK_,values__17365__auto___24733);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24725){var t__17410__auto___24735 = e24725;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,t__17410__auto___24735,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24736 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_((1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24736);
if(cljs.core.truth_(result__17366__auto___24737)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24736),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24736);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24726){var t__17410__auto___24738 = e24726;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,t__17410__auto___24738,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24739 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_(null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24739);
if(cljs.core.truth_(result__17366__auto___24740)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24739),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24739);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24727){var t__17410__auto___24741 = e24727;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,t__17410__auto___24741,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24742 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24743 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24742);
if(cljs.core.truth_(result__17366__auto___24743)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24742),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24742);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24728){var t__17410__auto___24744 = e24728;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,t__17410__auto___24744,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24745 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_("foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24746 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24745);
if(cljs.core.truth_(result__17366__auto___24746)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24745),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24745);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24729){var t__17410__auto___24747 = e24729;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,t__17410__auto___24747,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24748 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_((100));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24749 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24748);
if(cljs.core.truth_(result__17366__auto___24749)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24748),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24748);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24730){var t__17410__auto___24750 = e24730;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,t__17410__auto___24750,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24751 = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24752 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24751);
if(cljs.core.truth_(result__17366__auto___24752)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24751),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24751);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24731){var t__17410__auto___24753 = e24731;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,t__17410__auto___24753,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = wheel.math.number.nan_QMARK_((-1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24732){var t__17410__auto__ = e24732;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_nan_QMARK_;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_nan_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_nan_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e72/i688ot/index.html.out/wheel/math/number.cljc",16,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_nan_QMARK_)?wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test:null)]));
wheel.math.number._QMARK__QMARK_parse_int = (function wheel$math$number$_QMARK__QMARK_parse_int(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test = (function (){
try{var values__17365__auto___24758 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.number.parse_int("0");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(0));
var result__17366__auto___24759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24758);
if(cljs.core.truth_(result__17366__auto___24759)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24758),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24758);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24754){var t__17410__auto___24760 = e24754;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,t__17410__auto___24760,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24761 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.number.parse_int("1");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(1));
var result__17366__auto___24762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24761);
if(cljs.core.truth_(result__17366__auto___24762)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24761),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24761);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24755){var t__17410__auto___24763 = e24755;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,t__17410__auto___24763,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24764 = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.number.parse_int("01");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(1));
var result__17366__auto___24765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24764);
if(cljs.core.truth_(result__17366__auto___24765)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24764),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24764);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24756){var t__17410__auto___24766 = e24756;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,t__17410__auto___24766,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.math.number.parse_int("01234");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),(1234));
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24757){var t__17410__auto__ = e24757;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_parse_int;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_parse_DASH_int,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_parse_DASH_int,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e72/i688ot/index.html.out/wheel/math/number.cljc",21,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_parse_int)?wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test:null)]));
