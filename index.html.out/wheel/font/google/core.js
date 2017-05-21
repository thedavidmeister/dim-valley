// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.google.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.config');
goog.require('wheel.font.google.config');
goog.require('cljs.spec');
goog.require('cljs.test');
/**
 * Given a font hash map, returns a string suitable in a Google Fonts URI
 */
wheel.font.google.core.font__GT_uri_str = (function wheel$font$google$core$font__GT_uri_str(font){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,font))){
} else {
throw (new Error("Assert failed: (spec/valid? :wheel.font/font font)"));
}

var name = cljs.core.cst$kw$wheel$font_SLASH_name.cljs$core$IFn$_invoke$arity$1(font);
var variants = cljs.core.cst$kw$wheel$font_SLASH_variants.cljs$core$IFn$_invoke$arity$1(font);
var name_uri = clojure.string.replace(name," ","+");
var variants_uri = ((cljs.core.seq(variants))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",variants))].join(''):null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(variants_uri)].join('');
});
/**
 * Given a sequence of fonts, returns a string suitable in a Google Fonts URI
 */
wheel.font.google.core.fonts__GT_uri_str = (function wheel$font$google$core$fonts__GT_uri_str(fonts__$1){
if(cljs.core.sequential_QMARK_(fonts__$1)){
} else {
throw (new Error("Assert failed: (sequential? fonts)"));
}

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(wheel.font.google.core.font__GT_uri_str,fonts__$1));
});
/**
 * Given a sequence of fonts, returns the entire Google Fonts URL
 */
wheel.font.google.core.fonts__GT_url = (function wheel$font$google$core$fonts__GT_url(fonts__$1){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.core.fonts__GT_uri_str(fonts__$1))].join('');
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_font__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test = (function (){
var seq__24297 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__24298 = null;
var count__24299 = (0);
var i__24300 = (0);
while(true){
if((i__24300 < count__24299)){
var vec__24301 = chunk__24298.cljs$core$IIndexed$_nth$arity$2(null,i__24300);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301,(1),null);
try{var values__20418__auto___24309 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24309);
if(cljs.core.truth_(result__20419__auto___24310)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24309),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24309);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24304){var t__20456__auto___24311 = e24304;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___24311,cljs.core.cst$kw$message,null], null));
}
var G__24312 = seq__24297;
var G__24313 = chunk__24298;
var G__24314 = count__24299;
var G__24315 = (i__24300 + (1));
seq__24297 = G__24312;
chunk__24298 = G__24313;
count__24299 = G__24314;
i__24300 = G__24315;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24297);
if(temp__6738__auto__){
var seq__24297__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24297__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__24297__$1);
var G__24316 = cljs.core.chunk_rest(seq__24297__$1);
var G__24317 = c__8671__auto__;
var G__24318 = cljs.core.count(c__8671__auto__);
var G__24319 = (0);
seq__24297 = G__24316;
chunk__24298 = G__24317;
count__24299 = G__24318;
i__24300 = G__24319;
continue;
} else {
var vec__24305 = cljs.core.first(seq__24297__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24305,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24305,(1),null);
try{var values__20418__auto___24320 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24320);
if(cljs.core.truth_(result__20419__auto___24321)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24320),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24320);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24308){var t__20456__auto___24322 = e24308;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___24322,cljs.core.cst$kw$message,null], null));
}
var G__24323 = cljs.core.next(seq__24297__$1);
var G__24324 = null;
var G__24325 = (0);
var G__24326 = (0);
seq__24297 = G__24323;
chunk__24298 = G__24324;
count__24299 = G__24325;
i__24300 = G__24326;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_font_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/9txbbm/index.html.out/wheel/font/google/core.cljc",25,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__20418__auto___24339 = cljs.core._conj((function (){var x__8694__auto__ = wheel.font.google.core.fonts__GT_uri_str(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"");
var result__20419__auto___24340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24339);
if(cljs.core.truth_(result__20419__auto___24340)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24339),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24339);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24327){var t__20456__auto___24341 = e24327;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20456__auto___24341,cljs.core.cst$kw$message,null], null));
}
var vec__24328_24342 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24328_24342,(0),null);
var o_24344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24328_24342,(1),null);
try{var values__20418__auto___24345 = (function (){var x__8694__auto__ = o_24344;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24343], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24346 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24345);
if(cljs.core.truth_(result__20419__auto___24346)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24345),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24345);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24331){var t__20456__auto___24347 = e24331;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20456__auto___24347,cljs.core.cst$kw$message,null], null));
}
var vec__24332 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24332,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24332,(1),null);
var vec__24335 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24335,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24335,(1),null);
try{var values__20418__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e24338){var t__20456__auto__ = e24338;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/9txbbm/index.html.out/wheel/font/google/core.cljc",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__20418__auto___24360 = (function (){var x__8694__auto__ = wheel.font.google.config.base_url;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24360);
if(cljs.core.truth_(result__20419__auto___24361)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24360),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24360);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24348){var t__20456__auto___24362 = e24348;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20456__auto___24362,cljs.core.cst$kw$message,null], null));
}
var vec__24349_24363 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24349_24363,(0),null);
var o_24365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24349_24363,(1),null);
try{var values__20418__auto___24366 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_24365)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24364], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24367 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24366);
if(cljs.core.truth_(result__20419__auto___24367)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24366),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24366);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24352){var t__20456__auto___24368 = e24352;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20456__auto___24368,cljs.core.cst$kw$message,null], null));
}
var vec__24353 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(1),null);
var vec__24356 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(1),null);
try{var values__20418__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e24359){var t__20456__auto__ = e24359;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_url,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/9txbbm/index.html.out/wheel/font/google/core.cljc",22,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
