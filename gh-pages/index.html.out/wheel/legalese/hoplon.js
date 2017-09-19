// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.legalese.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
goog.require('wheel.dom.traversal');
wheel.legalese.hoplon.legislature = (function wheel$legalese$hoplon$legislature(name){
var G__20874 = cljs.core.cst$kw$class;
var G__20875 = "legislature";
var G__20876 = name;
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__20874,G__20875,G__20876) : hoplon.core.em.call(null,G__20874,G__20875,G__20876));
});
/**
 * A list of clauses with preamble and optional postamble.
 */
wheel.legalese.hoplon.clause_list = (function wheel$legalese$hoplon$clause_list(var_args){
var G__20878 = arguments.length;
switch (G__20878) {
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

var G__20879 = cljs.core.cst$kw$class;
var G__20880 = "clause-list";
var G__20881 = (function (){var G__20884 = cljs.core.cst$kw$class;
var G__20885 = "preamble";
var G__20886 = pre;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20884,G__20885,G__20886) : hoplon.core.span.call(null,G__20884,G__20885,G__20886));
})();
var G__20882 = (function (){var G__20887 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(hoplon.core.li,cljs.core.cst$kw$class,"clause"),items);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__20887) : hoplon.core.ul.call(null,G__20887));
})();
var G__20883 = (cljs.core.truth_(post)?(function (){var G__20888 = cljs.core.cst$kw$class;
var G__20889 = "postamble";
var G__20890 = post;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20888,G__20889,G__20890) : hoplon.core.span.call(null,G__20888,G__20889,G__20890));
})():null);
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$5(G__20879,G__20880,G__20881,G__20882,G__20883) : hoplon.core.section.call(null,G__20879,G__20880,G__20881,G__20882,G__20883));
});

wheel.legalese.hoplon.clause_list.cljs$lang$maxFixedArity = 3;

wheel.legalese.hoplon._QMARK__QMARK_legislature = (function wheel$legalese$hoplon$_QMARK__QMARK_legislature(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test = (function (){
var n = "foooos";
var el = wheel.legalese.hoplon.legislature(n);
try{var values__17365__auto___20894 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"em.legislature"),x__9196__auto__);
})();
var result__17366__auto___20895 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20894);
if(cljs.core.truth_(result__17366__auto___20895)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20894),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20894);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20892){var t__17410__auto___20896 = e20892;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,t__17410__auto___20896,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = n;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e20893){var t__17410__auto__ = e20893;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_legislature;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_legislature,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_legislature,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_legislature)?wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test:null)]));
wheel.legalese.hoplon._QMARK__QMARK_clause_list = (function wheel$legalese$hoplon$_QMARK__QMARK_clause_list(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test = (function (){
var pre = "foo";
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
var post = "bar";
var without_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2(pre,items);
var with_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,post);
try{var values__17365__auto___20905 = (function (){var x__9196__auto__ = without_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___20906 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20905);
if(cljs.core.truth_(result__17366__auto___20906)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20905),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20905);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20897){var t__17410__auto___20907 = e20897;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___20907,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20908 = (function (){var x__9196__auto__ = with_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___20909 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20908);
if(cljs.core.truth_(result__17366__auto___20909)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20908),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20908);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20898){var t__17410__auto___20910 = e20898;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___20910,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20911 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20912 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20911);
if(cljs.core.truth_(result__17366__auto___20912)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20911),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20911);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20899){var t__17410__auto___20913 = e20899;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___20913,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20914 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20914);
if(cljs.core.truth_(result__17366__auto___20915)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20914),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20914);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20900){var t__17410__auto___20916 = e20900;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___20916,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20917 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20917);
if(cljs.core.truth_(result__17366__auto___20918)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20917),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20917);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20901){var t__17410__auto___20919 = e20901;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___20919,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20920 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20921 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20920);
if(cljs.core.truth_(result__17366__auto___20921)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20920),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20920);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20902){var t__17410__auto___20922 = e20902;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___20922,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20923 = (function (){var x__9196__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20924 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20923);
if(cljs.core.truth_(result__17366__auto___20924)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20923),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20923);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20903){var t__17410__auto___20925 = e20903;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto___20925,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e20904){var t__17410__auto__ = e20904;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_clause_list;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_clause_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_clause_DASH_list,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_clause_list)?wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test:null)]));
