// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.font.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('wheel.font.config');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_name,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,cljs.core.sequential_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_fallback,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__24530){
return cljs.core.map_QMARK_(G__24530);
}),(function (G__24530){
return cljs.core.contains_QMARK_(G__24530,cljs.core.cst$kw$wheel$font_SLASH_name);
})], null),(function (G__24530){
return (cljs.core.map_QMARK_(G__24530)) && (cljs.core.contains_QMARK_(G__24530,cljs.core.cst$kw$wheel$font_SLASH_name));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$wheel$font_SLASH_name))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wheel$font_SLASH_variants,cljs.core.cst$kw$wheel$font_SLASH_fallback], null)])));
wheel.font.spec._QMARK__QMARK_spec = (function wheel$font$spec$_QMARK__QMARK_spec(){
return cljs.test.test_var(wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var);
});
wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test = (function (){
var seq__24531 = cljs.core.seq(wheel.font.config.test_examples);
var chunk__24532 = null;
var count__24533 = (0);
var i__24534 = (0);
while(true){
if((i__24534 < count__24533)){
var vec__24535 = chunk__24532.cljs$core$IIndexed$_nth$arity$2(null,i__24534);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24535,(1),null);
try{var values__18527__auto___24547 = cljs.core._conj((function (){var x__9196__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$kw$wheel$font_SLASH_font);
var result__18528__auto___24548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24547);
if(cljs.core.truth_(result__18528__auto___24548)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24547),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__18527__auto___24547);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24538){var t__18572__auto___24549 = e24538;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,t__18572__auto___24549,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24550 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null)], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$kw$wheel$font_SLASH_font);
var result__18528__auto___24551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24550);
if(cljs.core.truth_(result__18528__auto___24551)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24550),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__18527__auto___24550);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24539){var t__18572__auto___24552 = e24539;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,t__18572__auto___24552,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24553 = (function (){var x__9196__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$kw$wheel$font_SLASH_name));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24554 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24553);
if(cljs.core.truth_(result__18528__auto___24554)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24553),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24553);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24540){var t__18572__auto___24555 = e24540;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,t__18572__auto___24555,cljs.core.cst$kw$message,null], null));
}
var G__24556 = seq__24531;
var G__24557 = chunk__24532;
var G__24558 = count__24533;
var G__24559 = (i__24534 + (1));
seq__24531 = G__24556;
chunk__24532 = G__24557;
count__24533 = G__24558;
i__24534 = G__24559;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24531);
if(temp__5290__auto__){
var seq__24531__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24531__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__24531__$1);
var G__24560 = cljs.core.chunk_rest(seq__24531__$1);
var G__24561 = c__9173__auto__;
var G__24562 = cljs.core.count(c__9173__auto__);
var G__24563 = (0);
seq__24531 = G__24560;
chunk__24532 = G__24561;
count__24533 = G__24562;
i__24534 = G__24563;
continue;
} else {
var vec__24541 = cljs.core.first(seq__24531__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24541,(1),null);
try{var values__18527__auto___24564 = cljs.core._conj((function (){var x__9196__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$kw$wheel$font_SLASH_font);
var result__18528__auto___24565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24564);
if(cljs.core.truth_(result__18528__auto___24565)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24564),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__18527__auto___24564);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24544){var t__18572__auto___24566 = e24544;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.cst$sym$i),cljs.core.cst$kw$actual,t__18572__auto___24566,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24567 = cljs.core._conj((function (){var x__9196__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null)], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$kw$wheel$font_SLASH_font);
var result__18528__auto___24568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24567);
if(cljs.core.truth_(result__18528__auto___24568)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.spec.alpha.valid_QMARK_,values__18527__auto___24567),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,values__18527__auto___24567);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24545){var t__18572__auto___24569 = e24545;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$merge,cljs.core.cst$sym$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wheel$font_SLASH_fallback,"baz"], null))),cljs.core.cst$kw$actual,t__18572__auto___24569,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24570 = (function (){var x__9196__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$kw$wheel$font_SLASH_name));
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___24571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___24570);
if(cljs.core.truth_(result__18528__auto___24571)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___24570),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___24570);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24546){var t__18572__auto___24572 = e24546;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$spec_SLASH_valid_QMARK_,cljs.core.cst$kw$wheel$font_SLASH_font,cljs.core.list(cljs.core.cst$sym$dissoc,cljs.core.cst$sym$i,cljs.core.cst$kw$wheel$font_SLASH_name))),cljs.core.cst$kw$actual,t__18572__auto___24572,cljs.core.cst$kw$message,null], null));
}
var G__24573 = cljs.core.next(seq__24531__$1);
var G__24574 = null;
var G__24575 = (0);
var G__24576 = (0);
seq__24531 = G__24573;
chunk__24532 = G__24574;
count__24533 = G__24575;
i__24534 = G__24576;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.font.spec._QMARK__QMARK_spec.cljs$lang$var = new cljs.core.Var(function(){return wheel.font.spec._QMARK__QMARK_spec;},cljs.core.cst$sym$wheel$font$spec_SLASH__QMARK__QMARK_spec,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$font$spec,cljs.core.cst$sym$_QMARK__QMARK_spec,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/font/spec.cljc",16,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.font.spec._QMARK__QMARK_spec)?wheel.font.spec._QMARK__QMARK_spec.cljs$lang$test:null)]));
