// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.config');
goog.require('wheel.font.spec');
goog.require('medley.core');
goog.require('cljs.spec');
goog.require('cljs.test');
/**
 * Looks up a fallback string from the config
 */
wheel.font.core.get_fallback = (function wheel$font$core$get_fallback(var_args){
var args23365 = [];
var len__8981__auto___23368 = arguments.length;
var i__8982__auto___23369 = (0);
while(true){
if((i__8982__auto___23369 < len__8981__auto___23368)){
args23365.push((arguments[i__8982__auto___23369]));

var G__23370 = (i__8982__auto___23369 + (1));
i__8982__auto___23369 = G__23370;
continue;
} else {
}
break;
}

var G__23367 = args23365.length;
switch (G__23367) {
case 0:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23365.length)].join('')));

}
});

wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0 = (function (){
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1(wheel.font.config.default_fallback);
});

wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(wheel.font.config.well_known_fallbacks,k,k);
});

wheel.font.core.get_fallback.cljs$lang$maxFixedArity = 1;

/**
 * Given a font map, returns a CSS font family string, including the fallback
 */
wheel.font.core.font__GT_family_str = (function wheel$font$core$font__GT_family_str(font){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(font);
var fallback = (function (){var or__7760__auto__ = cljs.core.cst$kw$wheel$font_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fallback)].join('');
});
/**
 * Given a font map, returns a CSS string, including the fallback
 */
wheel.font.core.font__GT_css_str = (function wheel$font$core$font__GT_css_str(font){
var _PERCENT_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(font)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Given a font map, returns a Hoplon CSS map, including the fallback
 */
wheel.font.core.font__GT_css_map = (function wheel$font$core$font__GT_css_map(font){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(font)], null);
if(cljs.core.map_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

return _PERCENT_;
});
wheel.font.core._QMARK__QMARK_get_fallback = (function wheel$font$core$_QMARK__QMARK_get_fallback(){
return cljs.test.test_var(wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test = (function (){
try{var values__20418__auto___23375 = (function (){var x__8694__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,wheel.font.config.default_fallback);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1(wheel.font.config.default_fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23375);
if(cljs.core.truth_(result__20419__auto___23376)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23375),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23375);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23372){var t__20456__auto___23377 = e23372;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,t__20456__auto___23377,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___23378 = (function (){var x__8694__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,"medium");
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1("medium");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23378);
if(cljs.core.truth_(result__20419__auto___23379)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23378),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23378);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23373){var t__20456__auto___23380 = e23373;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,t__20456__auto___23380,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto__ = cljs.core._conj((function (){var x__8694__auto__ = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1("sans-serif");
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"sans-serif");
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e23374){var t__20456__auto__ = e23374;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_get_fallback;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_get_DASH_fallback,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_get_DASH_fallback,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e78/9txbbm/index.html.out/wheel/font/core.cljc",24,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_get_fallback)?wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test:null)]));
wheel.font.core._QMARK__QMARK_font__GT_family_str = (function wheel$font$core$_QMARK__QMARK_font__GT_family_str(){
return cljs.test.test_var(wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test = (function (){
var vec__23381_23393 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_23394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23381_23393,(0),null);
var __23395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23381_23393,(1),null);
var n_23396 = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i_23394);
try{var values__20418__auto___23397 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_23396),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0())].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_family_str(i_23394);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23398 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23397);
if(cljs.core.truth_(result__20419__auto___23398)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23397),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23397);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23384){var t__20456__auto___23399 = e23384;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___23399,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___23400 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i_23394)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_str(i_23394);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23400);
if(cljs.core.truth_(result__20419__auto___23401)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23400),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23400);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23385){var t__20456__auto___23402 = e23385;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___23402,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___23403 = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(i_23394)], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_map(i_23394);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23403);
if(cljs.core.truth_(result__20419__auto___23404)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23403),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23403);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23386){var t__20456__auto___23405 = e23386;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___23405,cljs.core.cst$kw$message,null], null));
}
var vec__23387 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23387,(1),null);
var f = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid())].join('');
var i__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,f], null)], 0));
var n = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i__$1);
try{var values__20418__auto___23406 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_family_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23407 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23406);
if(cljs.core.truth_(result__20419__auto___23407)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23406),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23406);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23390){var t__20456__auto___23408 = e23390;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___23408,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___23409 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___23410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___23409);
if(cljs.core.truth_(result__20419__auto___23410)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___23409),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___23409);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e23391){var t__20456__auto___23411 = e23391;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___23411,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto__ = (function (){var x__8694__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(i__$1)], null);
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.core.font__GT_css_map(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e23392){var t__20456__auto__ = e23392;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_font__GT_family_str;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_font_DASH__GT_family_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_family_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e78/9txbbm/index.html.out/wheel/font/core.cljc",28,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_font__GT_family_str)?wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test:null)]));
