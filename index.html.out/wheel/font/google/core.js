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
var seq__24351 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__24352 = null;
var count__24353 = (0);
var i__24354 = (0);
while(true){
if((i__24354 < count__24353)){
var vec__24355 = chunk__24352.cljs$core$IIndexed$_nth$arity$2(null,i__24354);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24355,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24355,(1),null);
try{var values__20418__auto___24363 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24364 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24363);
if(cljs.core.truth_(result__20419__auto___24364)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24363),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24363);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24358){var t__20456__auto___24365 = e24358;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___24365,cljs.core.cst$kw$message,null], null));
}
var G__24366 = seq__24351;
var G__24367 = chunk__24352;
var G__24368 = count__24353;
var G__24369 = (i__24354 + (1));
seq__24351 = G__24366;
chunk__24352 = G__24367;
count__24353 = G__24368;
i__24354 = G__24369;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24351);
if(temp__6738__auto__){
var seq__24351__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24351__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__24351__$1);
var G__24370 = cljs.core.chunk_rest(seq__24351__$1);
var G__24371 = c__8671__auto__;
var G__24372 = cljs.core.count(c__8671__auto__);
var G__24373 = (0);
seq__24351 = G__24370;
chunk__24352 = G__24371;
count__24353 = G__24372;
i__24354 = G__24373;
continue;
} else {
var vec__24359 = cljs.core.first(seq__24351__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(1),null);
try{var values__20418__auto___24374 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24374);
if(cljs.core.truth_(result__20419__auto___24375)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24374),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24374);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24362){var t__20456__auto___24376 = e24362;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20456__auto___24376,cljs.core.cst$kw$message,null], null));
}
var G__24377 = cljs.core.next(seq__24351__$1);
var G__24378 = null;
var G__24379 = (0);
var G__24380 = (0);
seq__24351 = G__24377;
chunk__24352 = G__24378;
count__24353 = G__24379;
i__24354 = G__24380;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_font_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/emd/9txbbm/index.html.out/wheel/font/google/core.cljc",25,1,34,34,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__20418__auto___24393 = cljs.core._conj((function (){var x__8694__auto__ = wheel.font.google.core.fonts__GT_uri_str(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"");
var result__20419__auto___24394 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24393);
if(cljs.core.truth_(result__20419__auto___24394)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24393),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24393);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24381){var t__20456__auto___24395 = e24381;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20456__auto___24395,cljs.core.cst$kw$message,null], null));
}
var vec__24382_24396 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382_24396,(0),null);
var o_24398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382_24396,(1),null);
try{var values__20418__auto___24399 = (function (){var x__8694__auto__ = o_24398;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24397], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24400 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24399);
if(cljs.core.truth_(result__20419__auto___24400)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24399),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24399);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24385){var t__20456__auto___24401 = e24385;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20456__auto___24401,cljs.core.cst$kw$message,null], null));
}
var vec__24386 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24386,(1),null);
var vec__24389 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24389,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24389,(1),null);
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
}catch (e24392){var t__20456__auto__ = e24392;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/emd/9txbbm/index.html.out/wheel/font/google/core.cljc",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__20418__auto___24414 = (function (){var x__8694__auto__ = wheel.font.google.config.base_url;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24414);
if(cljs.core.truth_(result__20419__auto___24415)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24414),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24414);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24402){var t__20456__auto___24416 = e24402;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20456__auto___24416,cljs.core.cst$kw$message,null], null));
}
var vec__24403_24417 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403_24417,(0),null);
var o_24419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403_24417,(1),null);
try{var values__20418__auto___24420 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_24419)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24418], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___24421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto___24420);
if(cljs.core.truth_(result__20419__auto___24421)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto___24420),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto___24420);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24406){var t__20456__auto___24422 = e24406;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20456__auto___24422,cljs.core.cst$kw$message,null], null));
}
var vec__24407 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24407,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24407,(1),null);
var vec__24410 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,(1),null);
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
}catch (e24413){var t__20456__auto__ = e24413;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_url,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/emd/9txbbm/index.html.out/wheel/font/google/core.cljc",22,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
