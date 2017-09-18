// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.math.number');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
wheel.math.number.pi = Math.PI;
wheel.math.number.nan = (function (){var fexpr__25066 = (function (){
return NaN;
});
return fexpr__25066();
})();
wheel.math.number.nan_QMARK_ = (function wheel$math$number$nan_QMARK_(n){
if(typeof n === 'number'){
return !((n === n));
} else {
return false;
}
});
wheel.math.number.safe_bigdec = (function wheel$math$number$safe_bigdec(n){
if(cljs.core.truth_((function (){var and__8626__auto__ = n;
if(cljs.core.truth_(and__8626__auto__)){
return cljs.core.not(wheel.math.number.nan_QMARK_(n));
} else {
return and__8626__auto__;
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
try{var values__17761__auto___25075 = (function (){var x__9592__auto__ = wheel.math.number.nan;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.math.number.nan_QMARK_,values__17761__auto___25075);
if(cljs.core.truth_(result__17762__auto___25076)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core.cons(wheel.math.number.nan_QMARK_,values__17761__auto___25075),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$nan_QMARK_,values__17761__auto___25075);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25067){var t__17806__auto___25077 = e25067;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,cljs.core.cst$sym$nan),cljs.core.cst$kw$actual,t__17806__auto___25077,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25078 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_((1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25078);
if(cljs.core.truth_(result__17762__auto___25079)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25078),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25078);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25068){var t__17806__auto___25080 = e25068;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(1))),cljs.core.cst$kw$actual,t__17806__auto___25080,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25081 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_(null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25082 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25081);
if(cljs.core.truth_(result__17762__auto___25082)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25081),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25081);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25069){var t__17806__auto___25083 = e25069;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,null)),cljs.core.cst$kw$actual,t__17806__auto___25083,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25084 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_("");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25084);
if(cljs.core.truth_(result__17762__auto___25085)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25084),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25084);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25070){var t__17806__auto___25086 = e25070;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"")),cljs.core.cst$kw$actual,t__17806__auto___25086,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25087 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_("foo");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25088 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25087);
if(cljs.core.truth_(result__17762__auto___25088)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25087),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25087);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25071){var t__17806__auto___25089 = e25071;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,"foo")),cljs.core.cst$kw$actual,t__17806__auto___25089,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25090 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_((100));
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25091 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25090);
if(cljs.core.truth_(result__17762__auto___25091)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25090),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25090);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25072){var t__17806__auto___25092 = e25072;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(100))),cljs.core.cst$kw$actual,t__17806__auto___25092,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25093 = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_((0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto___25094 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto___25093);
if(cljs.core.truth_(result__17762__auto___25094)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto___25093),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto___25093);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25073){var t__17806__auto___25095 = e25073;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(0))),cljs.core.cst$kw$actual,t__17806__auto___25095,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = (function (){var x__9592__auto__ = wheel.math.number.nan_QMARK_((-1));
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})();
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25074){var t__17806__auto__ = e25074;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nan_QMARK_,(-1))),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_nan_QMARK_;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_nan_QMARK_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_nan_QMARK_,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/math/number.cljc",16,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_nan_QMARK_)?wheel.math.number._QMARK__QMARK_nan_QMARK_.cljs$lang$test:null)]));
wheel.math.number._QMARK__QMARK_parse_int = (function wheel$math$number$_QMARK__QMARK_parse_int(){
return cljs.test.test_var(wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var);
});
wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test = (function (){
try{var values__17761__auto___25100 = cljs.core._conj((function (){var x__9592__auto__ = wheel.math.number.parse_int("0");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),(0));
var result__17762__auto___25101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25100);
if(cljs.core.truth_(result__17762__auto___25101)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25100),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25100);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25096){var t__17806__auto___25102 = e25096;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(0),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"0")),cljs.core.cst$kw$actual,t__17806__auto___25102,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25103 = cljs.core._conj((function (){var x__9592__auto__ = wheel.math.number.parse_int("1");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),(1));
var result__17762__auto___25104 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25103);
if(cljs.core.truth_(result__17762__auto___25104)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25103),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25103);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25097){var t__17806__auto___25105 = e25097;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"1")),cljs.core.cst$kw$actual,t__17806__auto___25105,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto___25106 = cljs.core._conj((function (){var x__9592__auto__ = wheel.math.number.parse_int("01");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),(1));
var result__17762__auto___25107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto___25106);
if(cljs.core.truth_(result__17762__auto___25107)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto___25106),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto___25106);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25098){var t__17806__auto___25108 = e25098;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01")),cljs.core.cst$kw$actual,t__17806__auto___25108,cljs.core.cst$kw$message,null], null));
}
try{var values__17761__auto__ = cljs.core._conj((function (){var x__9592__auto__ = wheel.math.number.parse_int("01234");
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),(1234));
var result__17762__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17761__auto__);
if(cljs.core.truth_(result__17762__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17761__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9592__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17761__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17762__auto__;
}catch (e25099){var t__17806__auto__ = e25099;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(1234),cljs.core.list(cljs.core.cst$sym$parse_DASH_int,"01234")),cljs.core.cst$kw$actual,t__17806__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$var = new cljs.core.Var(function(){return wheel.math.number._QMARK__QMARK_parse_int;},cljs.core.cst$sym$wheel$math$number_SLASH__QMARK__QMARK_parse_DASH_int,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$math$number,cljs.core.cst$sym$_QMARK__QMARK_parse_DASH_int,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/ebq/-xb7kpv/index.html.out/wheel/math/number.cljc",21,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.math.number._QMARK__QMARK_parse_int)?wheel.math.number._QMARK__QMARK_parse_int.cljs$lang$test:null)]));
