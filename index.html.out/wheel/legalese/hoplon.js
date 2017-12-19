// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.legalese.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
goog.require('wheel.dom.traversal');
wheel.legalese.hoplon.legislature = (function wheel$legalese$hoplon$legislature(name){
var G__20972 = cljs.core.cst$kw$class;
var G__20973 = "legislature";
var G__20974 = name;
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__20972,G__20973,G__20974) : hoplon.core.em.call(null,G__20972,G__20973,G__20974));
});
/**
 * A list of clauses with preamble and optional postamble.
 */
wheel.legalese.hoplon.clause_list = (function wheel$legalese$hoplon$clause_list(var_args){
var G__20976 = arguments.length;
switch (G__20976) {
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

var G__20977 = cljs.core.cst$kw$class;
var G__20978 = "clause-list";
var G__20979 = (function (){var G__20982 = cljs.core.cst$kw$class;
var G__20983 = "preamble";
var G__20984 = pre;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20982,G__20983,G__20984) : hoplon.core.span.call(null,G__20982,G__20983,G__20984));
})();
var G__20980 = (function (){var G__20985 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(hoplon.core.li,cljs.core.cst$kw$class,"clause"),items);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__20985) : hoplon.core.ul.call(null,G__20985));
})();
var G__20981 = (cljs.core.truth_(post)?(function (){var G__20986 = cljs.core.cst$kw$class;
var G__20987 = "postamble";
var G__20988 = post;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20986,G__20987,G__20988) : hoplon.core.span.call(null,G__20986,G__20987,G__20988));
})():null);
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$5(G__20977,G__20978,G__20979,G__20980,G__20981) : hoplon.core.section.call(null,G__20977,G__20978,G__20979,G__20980,G__20981));
});

wheel.legalese.hoplon.clause_list.cljs$lang$maxFixedArity = 3;

wheel.legalese.hoplon._QMARK__QMARK_legislature = (function wheel$legalese$hoplon$_QMARK__QMARK_legislature(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test = (function (){
var n = "foooos";
var el = wheel.legalese.hoplon.legislature(n);
try{var values__17363__auto___20992 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"em.legislature"),x__9194__auto__);
})();
var result__17364__auto___20993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20992);
if(cljs.core.truth_(result__17364__auto___20993)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20992),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___20992);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20990){var t__17408__auto___20994 = e20990;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,t__17408__auto___20994,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = n;
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20991){var t__17408__auto__ = e20991;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_legislature;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_legislature,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_legislature,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/legalese/hoplon.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_legislature)?wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test:null)]));
wheel.legalese.hoplon._QMARK__QMARK_clause_list = (function wheel$legalese$hoplon$_QMARK__QMARK_clause_list(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test = (function (){
var pre = "foo";
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
var post = "bar";
var without_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2(pre,items);
var with_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,post);
try{var values__17363__auto___21003 = (function (){var x__9194__auto__ = without_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9194__auto__);
})();
var result__17364__auto___21004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___21003);
if(cljs.core.truth_(result__17364__auto___21004)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___21003),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___21003);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20995){var t__17408__auto___21005 = e20995;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17408__auto___21005,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21006 = (function (){var x__9194__auto__ = with_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9194__auto__);
})();
var result__17364__auto___21007 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___21006);
if(cljs.core.truth_(result__17364__auto___21007)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___21006),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___21006);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20996){var t__17408__auto___21008 = e20996;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17408__auto___21008,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21009 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___21010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___21009);
if(cljs.core.truth_(result__17364__auto___21010)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___21009),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___21009);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20997){var t__17408__auto___21011 = e20997;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17408__auto___21011,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21012 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___21013 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___21012);
if(cljs.core.truth_(result__17364__auto___21013)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___21012),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___21012);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20998){var t__17408__auto___21014 = e20998;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17408__auto___21014,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21015 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(without_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___21016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___21015);
if(cljs.core.truth_(result__17364__auto___21016)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___21015),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___21015);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20999){var t__17408__auto___21017 = e20999;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17408__auto___21017,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21018 = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(with_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___21019 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___21018);
if(cljs.core.truth_(result__17364__auto___21019)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___21018),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___21018);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21000){var t__17408__auto___21020 = e21000;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17408__auto___21020,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___21021 = (function (){var x__9194__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___21022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___21021);
if(cljs.core.truth_(result__17364__auto___21022)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___21021),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___21021);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21001){var t__17408__auto___21023 = e21001;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17408__auto___21023,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e21002){var t__17408__auto__ = e21002;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_clause_list;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_clause_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_clause_DASH_list,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/legalese/hoplon.cljs",23,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_clause_list)?wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test:null)]));
