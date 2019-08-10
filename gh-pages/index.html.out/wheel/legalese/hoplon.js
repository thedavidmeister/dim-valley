// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.legalese.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
goog.require('wheel.dom.traversal');
wheel.legalese.hoplon.legislature = (function wheel$legalese$hoplon$legislature(name){
var G__20907 = cljs.core.cst$kw$class;
var G__20908 = "legislature";
var G__20909 = name;
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__20907,G__20908,G__20909) : hoplon.core.em.call(null,G__20907,G__20908,G__20909));
});
/**
 * A list of clauses with preamble and optional postamble.
 */
wheel.legalese.hoplon.clause_list = (function wheel$legalese$hoplon$clause_list(var_args){
var G__20911 = arguments.length;
switch (G__20911) {
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

var G__20912 = cljs.core.cst$kw$class;
var G__20913 = "clause-list";
var G__20914 = (function (){var G__20917 = cljs.core.cst$kw$class;
var G__20918 = "preamble";
var G__20919 = pre;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20917,G__20918,G__20919) : hoplon.core.span.call(null,G__20917,G__20918,G__20919));
})();
var G__20915 = (function (){var G__20920 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(hoplon.core.li,cljs.core.cst$kw$class,"clause"),items);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__20920) : hoplon.core.ul.call(null,G__20920));
})();
var G__20916 = (cljs.core.truth_(post)?(function (){var G__20921 = cljs.core.cst$kw$class;
var G__20922 = "postamble";
var G__20923 = post;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__20921,G__20922,G__20923) : hoplon.core.span.call(null,G__20921,G__20922,G__20923));
})():null);
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$5(G__20912,G__20913,G__20914,G__20915,G__20916) : hoplon.core.section.call(null,G__20912,G__20913,G__20914,G__20915,G__20916));
});

wheel.legalese.hoplon.clause_list.cljs$lang$maxFixedArity = 3;

wheel.legalese.hoplon._QMARK__QMARK_legislature = (function wheel$legalese$hoplon$_QMARK__QMARK_legislature(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test = (function (){
var n = "foooos";
var el = wheel.legalese.hoplon.legislature(n);
try{var values__17365__auto___20927 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"em.legislature"),x__9196__auto__);
})();
var result__17366__auto___20928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20927);
if(cljs.core.truth_(result__17366__auto___20928)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20927),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20927);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20925){var t__17410__auto___20929 = e20925;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,t__17410__auto___20929,cljs.core.cst$kw$message,null], null));
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
}catch (e20926){var t__17410__auto__ = e20926;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_legislature;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_legislature,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_legislature,"/root/.boot/cache/tmp/root/project/je/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_legislature)?wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test:null)]));
wheel.legalese.hoplon._QMARK__QMARK_clause_list = (function wheel$legalese$hoplon$_QMARK__QMARK_clause_list(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test = (function (){
var pre = "foo";
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
var post = "bar";
var without_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2(pre,items);
var with_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,post);
try{var values__17365__auto___20938 = (function (){var x__9196__auto__ = without_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___20939 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20938);
if(cljs.core.truth_(result__17366__auto___20939)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20938),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20938);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20930){var t__17410__auto___20940 = e20930;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___20940,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20941 = (function (){var x__9196__auto__ = with_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___20942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___20941);
if(cljs.core.truth_(result__17366__auto___20942)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___20941),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___20941);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20931){var t__17410__auto___20943 = e20931;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___20943,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20944 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20944);
if(cljs.core.truth_(result__17366__auto___20945)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20944),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20944);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20932){var t__17410__auto___20946 = e20932;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___20946,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20947 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20948 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20947);
if(cljs.core.truth_(result__17366__auto___20948)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20947),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20947);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20933){var t__17410__auto___20949 = e20933;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___20949,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20950 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20951 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20950);
if(cljs.core.truth_(result__17366__auto___20951)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20950),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20950);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20934){var t__17410__auto___20952 = e20934;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___20952,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20953 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20953);
if(cljs.core.truth_(result__17366__auto___20954)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20953),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20953);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20935){var t__17410__auto___20955 = e20935;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___20955,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___20956 = (function (){var x__9196__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___20957 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___20956);
if(cljs.core.truth_(result__17366__auto___20957)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___20956),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___20956);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20936){var t__17410__auto___20958 = e20936;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto___20958,cljs.core.cst$kw$message,null], null));
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
}catch (e20937){var t__17410__auto__ = e20937;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_clause_list;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_clause_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_clause_DASH_list,"/root/.boot/cache/tmp/root/project/je/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_clause_list)?wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test:null)]));
