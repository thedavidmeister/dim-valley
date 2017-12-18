// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.abn.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.string.core');
goog.require('wheel.abn.config');
goog.require('cljs.test');
wheel.abn.core.normalize = (function wheel$abn$core$normalize(n){
var _PERCENT_ = (function (){var s = wheel.string.core.no_space([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),cljs.core.count(s))){
} else {
throw (new Error("Assert failed: (= 11 (count s))"));
}

var vec__25391 = cljs.core.split_at((2),s);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25391,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25391,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__25391,head,rest,s){
return (function (p1__25390_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__25390_SHARP_);
});})(vec__25391,head,rest,s))
,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [head], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),rest))));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),cljs.core.count(wheel.string.core.no_space(_PERCENT_)))){
} else {
throw (new Error("Assert failed: (= 11 (count (wheel.string.core/no-space %)))"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((14),cljs.core.count(_PERCENT_))){
} else {
throw (new Error("Assert failed: (= 14 (count %))"));
}

return _PERCENT_;
});
wheel.abn.core.abr_search_url = (function wheel$abn$core$abr_search_url(n){
var s = wheel.string.core.no_space([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.abn.config.search_base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
wheel.abn.core._QMARK__QMARK_normalize = (function wheel$abn$core$_QMARK__QMARK_normalize(){
return cljs.test.test_var(wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$var);
});
wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$test = (function (){
try{var values__18527__auto___25398 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.normalize((12345678910));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"12 345 678 910");
var result__18528__auto___25399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25398);
if(cljs.core.truth_(result__18528__auto___25399)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,(12345678910))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25398),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,(12345678910))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25398);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25394){var t__18572__auto___25400 = e25394;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,(12345678910))),cljs.core.cst$kw$actual,t__18572__auto___25400,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___25401 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.normalize("12345678910");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"12 345 678 910");
var result__18528__auto___25402 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25401);
if(cljs.core.truth_(result__18528__auto___25402)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12345678910")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25401),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12345678910")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25401);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25395){var t__18572__auto___25403 = e25395;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12345678910")),cljs.core.cst$kw$actual,t__18572__auto___25403,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___25404 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.normalize("12 345 678 910");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"12 345 678 910");
var result__18528__auto___25405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25404);
if(cljs.core.truth_(result__18528__auto___25405)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12 345 678 910")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25404),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12 345 678 910")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25404);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25396){var t__18572__auto___25406 = e25396;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"12 345 678 910")),cljs.core.cst$kw$actual,t__18572__auto___25406,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.normalize("1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"12 345 678 910");
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e25397){var t__18572__auto__ = e25397;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"12 345 678 910",cljs.core.list(cljs.core.cst$sym$normalize,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$var = new cljs.core.Var(function(){return wheel.abn.core._QMARK__QMARK_normalize;},cljs.core.cst$sym$wheel$abn$core_SLASH__QMARK__QMARK_normalize,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$abn$core,cljs.core.cst$sym$_QMARK__QMARK_normalize,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/abn/core.cljc",21,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.abn.core._QMARK__QMARK_normalize)?wheel.abn.core._QMARK__QMARK_normalize.cljs$lang$test:null)]));
wheel.abn.core._QMARK__QMARK_abr_search_url = (function wheel$abn$core$_QMARK__QMARK_abr_search_url(){
return cljs.test.test_var(wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$var);
});
wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$test = (function (){
try{var values__18527__auto___25411 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.abr_search_url((12345678910));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__18528__auto___25412 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25411);
if(cljs.core.truth_(result__18528__auto___25412)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,(12345678910))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25411),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,(12345678910))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25411);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25407){var t__18572__auto___25413 = e25407;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,(12345678910))),cljs.core.cst$kw$actual,t__18572__auto___25413,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___25414 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.abr_search_url("12345678910");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__18528__auto___25415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25414);
if(cljs.core.truth_(result__18528__auto___25415)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12345678910")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25414),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12345678910")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25414);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25408){var t__18572__auto___25416 = e25408;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12345678910")),cljs.core.cst$kw$actual,t__18572__auto___25416,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___25417 = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.abr_search_url("12 345 678 910");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__18528__auto___25418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___25417);
if(cljs.core.truth_(result__18528__auto___25418)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12 345 678 910")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___25417),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12 345 678 910")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___25417);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e25409){var t__18572__auto___25419 = e25409;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"12 345 678 910")),cljs.core.cst$kw$actual,t__18572__auto___25419,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.abn.core.abr_search_url("1 2 3 4 5 6 7 8 9 1 0");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910");
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e25410){var t__18572__auto__ = e25410;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"https://abr.business.gov.au/SearchByAbn.aspx?SearchText=12345678910",cljs.core.list(cljs.core.cst$sym$abr_DASH_search_DASH_url,"1 2 3 4 5 6 7 8 9 1 0")),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.abn.core._QMARK__QMARK_abr_search_url;},cljs.core.cst$sym$wheel$abn$core_SLASH__QMARK__QMARK_abr_DASH_search_DASH_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$abn$core,cljs.core.cst$sym$_QMARK__QMARK_abr_DASH_search_DASH_url,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/abn/core.cljc",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.abn.core._QMARK__QMARK_abr_search_url)?wheel.abn.core._QMARK__QMARK_abr_search_url.cljs$lang$test:null)]));
