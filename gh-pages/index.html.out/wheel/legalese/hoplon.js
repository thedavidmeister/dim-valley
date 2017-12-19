// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.legalese.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
goog.require('wheel.dom.traversal');
wheel.legalese.hoplon.legislature = (function wheel$legalese$hoplon$legislature(name){
var G__21262 = cljs.core.cst$kw$class;
var G__21263 = "legislature";
var G__21264 = name;
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__21262,G__21263,G__21264) : hoplon.core.em.call(null,G__21262,G__21263,G__21264));
});
/**
 * A list of clauses with preamble and optional postamble.
 */
wheel.legalese.hoplon.clause_list = (function wheel$legalese$hoplon$clause_list(var_args){
var G__21266 = arguments.length;
switch (G__21266) {
case 2:
return wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2 = (function (pre,items){
return wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,null);
});

wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3 = (function (pre,items,post){
if(typeof pre === 'string'){
} else {
throw (new Error("Assert failed: (string? pre)"));
}

if(cljs.core.sequential_QMARK_(items)){
} else {
throw (new Error("Assert failed: (sequential? items)"));
}

if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.nilable_impl(cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_,null),post))){
} else {
throw (new Error("Assert failed: (spec/valid? (spec/nilable string?) post)"));
}

var G__21267 = cljs.core.cst$kw$class;
var G__21268 = "clause-list";
var G__21269 = (function (){var G__21272 = cljs.core.cst$kw$class;
var G__21273 = "preamble";
var G__21274 = pre;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__21272,G__21273,G__21274) : hoplon.core.span.call(null,G__21272,G__21273,G__21274));
})();
var G__21270 = (function (){var G__21275 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(hoplon.core.li,cljs.core.cst$kw$class,"clause"),items);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__21275) : hoplon.core.ul.call(null,G__21275));
})();
var G__21271 = (cljs.core.truth_(post)?(function (){var G__21276 = cljs.core.cst$kw$class;
var G__21277 = "postamble";
var G__21278 = post;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__21276,G__21277,G__21278) : hoplon.core.span.call(null,G__21276,G__21277,G__21278));
})():null);
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$5(G__21267,G__21268,G__21269,G__21270,G__21271) : hoplon.core.section.call(null,G__21267,G__21268,G__21269,G__21270,G__21271));
});

wheel.legalese.hoplon.clause_list.cljs$lang$maxFixedArity = 3;

wheel.legalese.hoplon._QMARK__QMARK_legislature = (function wheel$legalese$hoplon$_QMARK__QMARK_legislature(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test = (function (){
var n = "foooos";
var el = wheel.legalese.hoplon.legislature(n);
try{var values__18527__auto___21282 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"em.legislature"),x__9196__auto__);
})();
var result__18528__auto___21283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21282);
if(cljs.core.truth_(result__18528__auto___21283)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21282),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21282);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21280){var t__18572__auto___21284 = e21280;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,t__18572__auto___21284,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = (function (){var x__9196__auto__ = n;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e21281){var t__18572__auto__ = e21281;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_legislature;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_legislature,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_legislature,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_legislature)?wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test:null)]));
wheel.legalese.hoplon._QMARK__QMARK_clause_list = (function wheel$legalese$hoplon$_QMARK__QMARK_clause_list(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test = (function (){
var pre = "foo";
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
var post = "bar";
var without_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2(pre,items);
var with_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,post);
try{var values__18527__auto___21293 = (function (){var x__9196__auto__ = without_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__18528__auto___21294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21293);
if(cljs.core.truth_(result__18528__auto___21294)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21293),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21293);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21285){var t__18572__auto___21295 = e21285;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__18572__auto___21295,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21296 = (function (){var x__9196__auto__ = with_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__18528__auto___21297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21296);
if(cljs.core.truth_(result__18528__auto___21297)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21296),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21296);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21286){var t__18572__auto___21298 = e21286;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__18572__auto___21298,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21299 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21299);
if(cljs.core.truth_(result__18528__auto___21300)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21299),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21299);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21287){var t__18572__auto___21301 = e21287;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__18572__auto___21301,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21302 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21302);
if(cljs.core.truth_(result__18528__auto___21303)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21302),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21302);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21288){var t__18572__auto___21304 = e21288;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__18572__auto___21304,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21305 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21305);
if(cljs.core.truth_(result__18528__auto___21306)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21305),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21305);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21289){var t__18572__auto___21307 = e21289;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__18572__auto___21307,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21308 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21308);
if(cljs.core.truth_(result__18528__auto___21309)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21308),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21308);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21290){var t__18572__auto___21310 = e21290;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__18572__auto___21310,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21311 = (function (){var x__9196__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21311);
if(cljs.core.truth_(result__18528__auto___21312)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21311),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21311);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21291){var t__18572__auto___21313 = e21291;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__18572__auto___21313,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e21292){var t__18572__auto__ = e21292;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_clause_list;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_clause_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_clause_DASH_list,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_clause_list)?wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test:null)]));
