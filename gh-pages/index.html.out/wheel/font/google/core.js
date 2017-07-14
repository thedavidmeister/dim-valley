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
var seq__24191 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__24192 = null;
var count__24193 = (0);
var i__24194 = (0);
while(true){
if((i__24194 < count__24193)){
var vec__24195 = chunk__24192.cljs$core$IIndexed$_nth$arity$2(null,i__24194);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24195,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24195,(1),null);
try{var values__20326__auto___24203 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___24204 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24203);
if(cljs.core.truth_(result__20327__auto___24204)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24203),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24203);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24198){var t__20364__auto___24205 = e24198;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20364__auto___24205,cljs.core.cst$kw$message,null], null));
}
var G__24206 = seq__24191;
var G__24207 = chunk__24192;
var G__24208 = count__24193;
var G__24209 = (i__24194 + (1));
seq__24191 = G__24206;
chunk__24192 = G__24207;
count__24193 = G__24208;
i__24194 = G__24209;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24191);
if(temp__6738__auto__){
var seq__24191__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24191__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__24191__$1);
var G__24210 = cljs.core.chunk_rest(seq__24191__$1);
var G__24211 = c__8671__auto__;
var G__24212 = cljs.core.count(c__8671__auto__);
var G__24213 = (0);
seq__24191 = G__24210;
chunk__24192 = G__24211;
count__24193 = G__24212;
i__24194 = G__24213;
continue;
} else {
var vec__24199 = cljs.core.first(seq__24191__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24199,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24199,(1),null);
try{var values__20326__auto___24214 = (function (){var x__8694__auto__ = o;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.font__GT_uri_str(i);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___24215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24214);
if(cljs.core.truth_(result__20327__auto___24215)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24214),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24214);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24202){var t__20364__auto___24216 = e24202;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$font_DASH__GT_uri_DASH_str,cljs.core.cst$sym$i)),cljs.core.cst$kw$actual,t__20364__auto___24216,cljs.core.cst$kw$message,null], null));
}
var G__24217 = cljs.core.next(seq__24191__$1);
var G__24218 = null;
var G__24219 = (0);
var G__24220 = (0);
seq__24191 = G__24217;
chunk__24192 = G__24218;
count__24193 = G__24219;
i__24194 = G__24220;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_font__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_font_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_font_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/font/google/core.cljc",25,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_font__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_font__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_uri_str(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test = (function (){
try{var values__20326__auto___24233 = cljs.core._conj((function (){var x__8694__auto__ = wheel.font.google.core.fonts__GT_uri_str(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),"");
var result__20327__auto___24234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24233);
if(cljs.core.truth_(result__20327__auto___24234)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24233),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24233);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24221){var t__20364__auto___24235 = e24221;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,"",cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20364__auto___24235,cljs.core.cst$kw$message,null], null));
}
var vec__24222_24236 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222_24236,(0),null);
var o_24238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24222_24236,(1),null);
try{var values__20326__auto___24239 = (function (){var x__8694__auto__ = o_24238;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24237], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___24240 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24239);
if(cljs.core.truth_(result__20327__auto___24240)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24239),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24239);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24225){var t__20364__auto___24241 = e24225;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$o,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20364__auto___24241,cljs.core.cst$kw$message,null], null));
}
var vec__24226 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24226,(1),null);
var vec__24229 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24229,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24229,(1),null);
try{var values__20326__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_uri_str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e24232){var t__20364__auto__ = e24232;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_uri_DASH_str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_uri_DASH_str,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/font/google/core.cljc",26,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str)?wheel.font.google.core._QMARK__QMARK_fonts__GT_uri_str.cljs$lang$test:null)]));
wheel.font.google.core._QMARK__QMARK_fonts__GT_url = (function wheel$font$google$core$_QMARK__QMARK_fonts__GT_url(){
return cljs.test.test_var(wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var);
});
wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test = (function (){
try{var values__20326__auto___24254 = (function (){var x__8694__auto__ = wheel.font.google.config.base_url;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(cljs.core.PersistentVector.EMPTY);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___24255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24254);
if(cljs.core.truth_(result__20327__auto___24255)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24254),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24254);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24242){var t__20364__auto___24256 = e24242;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,cljs.core.PersistentVector.EMPTY)),cljs.core.cst$kw$actual,t__20364__auto___24256,cljs.core.cst$kw$message,null], null));
}
var vec__24243_24257 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_24258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24243_24257,(0),null);
var o_24259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24243_24257,(1),null);
try{var values__20326__auto___24260 = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_24259)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_24258], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto___24261 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto___24260);
if(cljs.core.truth_(result__20327__auto___24261)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto___24260),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto___24260);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24246){var t__20364__auto___24262 = e24246;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i], null))),cljs.core.cst$kw$actual,t__20364__auto___24262,cljs.core.cst$kw$message,null], null));
}
var vec__24247 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24247,(0),null);
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24247,(1),null);
var vec__24250 = cljs.core.rand_nth(wheel.font.config.test_examples);
var i_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24250,(0),null);
var o_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24250,(1),null);
try{var values__20326__auto__ = (function (){var x__8694__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(wheel.font.google.config.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o_SINGLEQUOTE_)].join('');
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.font.google.core.fonts__GT_url(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,i_SINGLEQUOTE_], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20327__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20326__auto__);
if(cljs.core.truth_(result__20327__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20326__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20326__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20327__auto__;
}catch (e24253){var t__20364__auto__ = e24253;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str,cljs.core.cst$sym$wheel$font$google$config_SLASH_base_DASH_url,cljs.core.cst$sym$o,"|",cljs.core.cst$sym$o_SINGLEQUOTE_),cljs.core.list(cljs.core.cst$sym$fonts_DASH__GT_url,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$i,cljs.core.cst$sym$i_SINGLEQUOTE_], null))),cljs.core.cst$kw$actual,t__20364__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.google.core._QMARK__QMARK_fonts__GT_url;},cljs.core.cst$sym$wheel$font$google$core_SLASH__QMARK__QMARK_fonts_DASH__GT_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$google$core,cljs.core.cst$sym$_QMARK__QMARK_fonts_DASH__GT_url,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e9a/9txbbm/index.html.out/wheel/font/google/core.cljc",22,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.google.core._QMARK__QMARK_fonts__GT_url)?wheel.font.google.core._QMARK__QMARK_fonts__GT_url.cljs$lang$test:null)]));
