// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.google.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.spec');
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
var seq__24417 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__24418 = null;
var count__24419 = (0);
var i__24420 = (0);
while(true){
if((i__24420 < count__24419)){
var vec__24421 = chunk__24418.cljs$core$IIndexed$_nth$arity$2(null,i__24420);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(1),null);
try{var values__20410__auto___24429 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___24430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24429);
if(cljs.core.truth_(result__20411__auto___24430)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24429),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24429);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24424){var t__20448__auto___24431 = e24424;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20448__auto___24431,cljs.core.cst$kw$message,null], null));
}
var G__24432 = seq__24417;
var G__24433 = chunk__24418;
var G__24434 = count__24419;
var G__24435 = (i__24420 + (1));
seq__24417 = G__24432;
chunk__24418 = G__24433;
count__24419 = G__24434;
i__24420 = G__24435;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24417);
if(temp__6738__auto__){
var seq__24417__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24417__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__24417__$1);
var G__24436 = cljs.core.chunk_rest(seq__24417__$1);
var G__24437 = c__8671__auto__;
var G__24438 = cljs.core.count(c__8671__auto__);
var G__24439 = (0);
seq__24417 = G__24436;
chunk__24418 = G__24437;
count__24419 = G__24438;
i__24420 = G__24439;
continue;
} else {
var vec__24425 = cljs.core.first(seq__24417__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(1),null);
try{var values__20410__auto___24440 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___24441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24440);
if(cljs.core.truth_(result__20411__auto___24441)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24440),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24440);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24428){var t__20448__auto___24442 = e24428;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20448__auto___24442,cljs.core.cst$kw$message,null], null));
}
var G__24443 = cljs.core.next(seq__24417__$1);
var G__24444 = null;
var G__24445 = (0);
var G__24446 = (0);
seq__24417 = G__24443;
chunk__24418 = G__24444;
count__24419 = G__24445;
i__24420 = G__24446;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_font_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6n/9txbbm/index.html.out/wheel/font/google/core.cljc",25,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__20410__auto___24459 = cljs.core._conj((function (){var x__8694__auto__ = wheel.font.google.core.fonts__GT_uri_str(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"");
var result__20411__auto___24460 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24459);
if(cljs.core.truth_(result__20411__auto___24460)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24459),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24459);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24447){var t__20448__auto___24461 = e24447;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20448__auto___24461,cljs.core.cst$kw$message,null], null));
}
var vec__24448_24462 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448_24462,(0),null);
var o_24464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24448_24462,(1),null);
try{var values__20410__auto___24465 = (function (){var x__8694__auto__ = o_24464;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24463], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___24466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24465);
if(cljs.core.truth_(result__20411__auto___24466)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24465),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24465);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24451){var t__20448__auto___24467 = e24451;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20448__auto___24467,cljs.core.cst$kw$message,null], null));
}
var vec__24452 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24452,(1),null);
var vec__24455 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24455,(1),null);
try{var values__20410__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e24458){var t__20448__auto__ = e24458;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6n/9txbbm/index.html.out/wheel/font/google/core.cljc",26,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__20410__auto___24480 = (function (){var x__8694__auto__ = wheel.font.google.config.base_url;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___24481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24480);
if(cljs.core.truth_(result__20411__auto___24481)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24480),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24480);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24468){var t__20448__auto___24482 = e24468;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20448__auto___24482,cljs.core.cst$kw$message,null], null));
}
var vec__24469_24483 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469_24483,(0),null);
var o_24485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24469_24483,(1),null);
try{var values__20410__auto___24486 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_24485)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24484], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto___24487 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto___24486);
if(cljs.core.truth_(result__20411__auto___24487)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto___24486),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto___24486);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24472){var t__20448__auto___24488 = e24472;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20448__auto___24488,cljs.core.cst$kw$message,null], null));
}
var vec__24473 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24473,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24473,(1),null);
var vec__24476 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(1),null);
try{var values__20410__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20411__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20410__auto__);
if(cljs.core.truth_(result__20411__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20410__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20410__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20411__auto__;
}catch (e24479){var t__20448__auto__ = e24479;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20448__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_url,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e6n/9txbbm/index.html.out/wheel/font/google/core.cljc",22,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
