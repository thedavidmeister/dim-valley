// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.config');
goog.require('wheel.font.spec');
goog.require('medley.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
/**
 * Looks up a fallback string from the config
 */
wheel.font.core.get_fallback = (function wheel$font$core$get_fallback(var_args){
var G__24676 = arguments.length;
switch (G__24676) {
case 0:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
wheel.font.core.font__GT_family_str = (function wheel$font$core$font__GT_family_str(f){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,f))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font f)"));
}

var n = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(f);
var fallback = (function (){var or__8242__auto__ = cljs.core.cst$kw$wheel$font_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();
}
})();
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fallback)].join('');
});
/**
 * Given a font map, returns a CSS string, including the fallback
 */
wheel.font.core.font__GT_css_str = (function wheel$font$core$font__GT_css_str(f){
var _PERCENT_ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(f)),";"].join('');
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Given a font map, returns a Hoplon CSS map, including the fallback
 */
wheel.font.core.font__GT_css_map = (function wheel$font$core$font__GT_css_map(f){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(f)], null);
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
try{var values__17365__auto___24681 = (function (){var x__9196__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,wheel.font.config.default_fallback);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1(wheel.font.config.default_fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24681);
if(cljs.core.truth_(result__17366__auto___24682)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24681),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24681);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24678){var t__17410__auto___24683 = e24678;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,t__17410__auto___24683,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24684 = (function (){var x__9196__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,"medium");
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1("medium");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24685 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24684);
if(cljs.core.truth_(result__17366__auto___24685)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24684),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24684);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24679){var t__17410__auto___24686 = e24679;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,t__17410__auto___24686,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = cljs.core._conj((function (){var x__9196__auto__ = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1("sans-serif");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),"sans-serif");
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24680){var t__17410__auto__ = e24680;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_get_fallback;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_get_DASH_fallback,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_get_DASH_fallback,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/font/core.cljc",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_get_fallback)?wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test:null)]));
wheel.font.core._QMARK__QMARK_font__GT_family_str = (function wheel$font$core$_QMARK__QMARK_font__GT_family_str(){
return cljs.test.test_var(wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test = (function (){
var vec__24687_24699 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24687_24699,(0),null);
var __24701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24687_24699,(1),null);
var n_24702 = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i_24700);
try{var values__17365__auto___24703 = (function (){var x__9196__auto__ = ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24702),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0())].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_family_str(i_24700);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24703);
if(cljs.core.truth_(result__17366__auto___24704)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24703),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24703);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24690){var t__17410__auto___24705 = e24690;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24705,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24706 = (function (){var x__9196__auto__ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i_24700)),";"].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_str(i_24700);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24706);
if(cljs.core.truth_(result__17366__auto___24707)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24706),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24706);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24691){var t__17410__auto___24708 = e24691;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24708,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24709 = (function (){var x__9196__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(i_24700)], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_map(i_24700);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24709);
if(cljs.core.truth_(result__17366__auto___24710)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24709),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24709);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24692){var t__17410__auto___24711 = e24692;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24711,cljs.core.cst$kw$message,null], null));
}
var vec__24693 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24693,(1),null);
var f = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid())].join('');
var i__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,f], null)], 0));
var n = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i__$1);
try{var values__17365__auto___24712 = (function (){var x__9196__auto__ = ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_family_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24712);
if(cljs.core.truth_(result__17366__auto___24713)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24712),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24712);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24696){var t__17410__auto___24714 = e24696;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24714,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24715 = (function (){var x__9196__auto__ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i__$1)),";"].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24715);
if(cljs.core.truth_(result__17366__auto___24716)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24715),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24715);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24697){var t__17410__auto___24717 = e24697;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24717,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(i__$1)], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_map(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24698){var t__17410__auto__ = e24698;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_font__GT_family_str;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_font_DASH__GT_family_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_family_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/font/core.cljc",28,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_font__GT_family_str)?wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test:null)]));
