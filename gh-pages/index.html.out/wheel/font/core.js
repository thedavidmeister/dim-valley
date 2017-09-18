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
var G__24554 = arguments.length;
switch (G__24554) {
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
wheel.font.core.font__GT_family_str = (function wheel$font$core$font__GT_family_str(font){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(font);
var fallback = (function (){var or__8242__auto__ = cljs.core.cst$kw$wheel$font_SLASH_fallback.cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0();
}
})();
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fallback)].join('');
});
/**
 * Given a font map, returns a CSS string, including the fallback
 */
wheel.font.core.font__GT_css_str = (function wheel$font$core$font__GT_css_str(font){
var _PERCENT_ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(font)),";"].join('');
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
try{var values__17365__auto___24559 = (function (){var x__9196__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,wheel.font.config.default_fallback);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1(wheel.font.config.default_fallback);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24559);
if(cljs.core.truth_(result__17366__auto___24560)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24559),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24559);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24556){var t__17410__auto___24561 = e24556;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,cljs.core.cst$sym$wheel$font$config_SLASH_default_DASH_fallback)),cljs.core.cst$kw$actual,t__17410__auto___24561,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24562 = (function (){var x__9196__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wheel.font.config.well_known_fallbacks,"medium");
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$1("medium");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24562);
if(cljs.core.truth_(result__17366__auto___24563)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24562),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24562);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24557){var t__17410__auto___24564 = e24557;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$get,cljs.core.cst$sym$wheel$font$config_SLASH_well_DASH_known_DASH_fallbacks,"medium"),cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"medium")),cljs.core.cst$kw$actual,t__17410__auto___24564,cljs.core.cst$kw$message,null], null));
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
}catch (e24558){var t__17410__auto__ = e24558;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"sans-serif",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback,"sans-serif")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_get_fallback;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_get_DASH_fallback,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_get_DASH_fallback,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e90/i688ot/index.html.out/wheel/font/core.cljc",24,1,36,36,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_get_fallback)?wheel.font.core._QMARK__QMARK_get_fallback.cljs$lang$test:null)]));
wheel.font.core._QMARK__QMARK_font__GT_family_str = (function wheel$font$core$_QMARK__QMARK_font__GT_family_str(){
return cljs.test.test_var(wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var);
});
wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test = (function (){
var vec__24565_24577 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565_24577,(0),null);
var __24579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24565_24577,(1),null);
var n_24580 = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i_24578);
try{var values__17365__auto___24581 = (function (){var x__9196__auto__ = ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_24580),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.get_fallback.cljs$core$IFn$_invoke$arity$0())].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_family_str(i_24578);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24581);
if(cljs.core.truth_(result__17366__auto___24582)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24581),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24581);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24568){var t__17410__auto___24583 = e24568;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.list(cljs.core.cst$sym$get_DASH_fallback)),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24583,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24584 = (function (){var x__9196__auto__ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i_24578)),";"].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_str(i_24578);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24584);
if(cljs.core.truth_(result__17366__auto___24585)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24584),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24584);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24569){var t__17410__auto___24586 = e24569;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24586,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24587 = (function (){var x__9196__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,wheel.font.core.font__GT_family_str(i_24578)], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_map(i_24578);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24587);
if(cljs.core.truth_(result__17366__auto___24588)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24587),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24587);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24570){var t__17410__auto___24589 = e24570;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24589,cljs.core.cst$kw$message,null], null));
}
var vec__24571 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24571,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24571,(1),null);
var f = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(medley.core.random_uuid())].join('');
var i__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,f], null)], 0));
var n = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(i__$1);
try{var values__17365__auto___24590 = (function (){var x__9196__auto__ = ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"\", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_family_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24590);
if(cljs.core.truth_(result__17366__auto___24591)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24590),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24590);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24574){var t__17410__auto___24592 = e24574;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"\"",cljs.core.cst$sym$n,"\", ",cljs.core.cst$sym$f),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24592,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24593 = (function (){var x__9196__auto__ = ["font-family: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.core.font__GT_family_str(i__$1)),";"].join('');
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.font.core.font__GT_css_str(i__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24593);
if(cljs.core.truth_(result__17366__auto___24594)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24593),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24593);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24575){var t__17410__auto___24595 = e24575;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,"font-family: ",cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i),";"),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto___24595,cljs.core.cst$kw$message,null], null));
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
}catch (e24576){var t__17410__auto__ = e24576;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_family_DASH_str,cljs.core.cst$sym$i)], null),cljs.core.list(cljs.core.cst$sym$font_DASH__GT_css_DASH_map,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.core._QMARK__QMARK_font__GT_family_str;},cljs.core.cst$sym$wheel$font$core_SLASH__QMARK__QMARK_font_DASH__GT_family_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_family_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e90/i688ot/index.html.out/wheel/font/core.cljc",28,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.core._QMARK__QMARK_font__GT_family_str)?wheel.font.core._QMARK__QMARK_font__GT_family_str.cljs$lang$test:null)]));
