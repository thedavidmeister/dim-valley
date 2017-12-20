// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.legalese.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
goog.require('wheel.dom.traversal');
wheel.legalese.hoplon.legislature = (function wheel$legalese$hoplon$legislature(name){
var G__21065 = cljs.core.cst$kw$class;
var G__21066 = "legislature";
var G__21067 = name;
return (hoplon.core.em.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.em.cljs$core$IFn$_invoke$arity$3(G__21065,G__21066,G__21067) : hoplon.core.em.call(null,G__21065,G__21066,G__21067));
});
/**
 * A list of clauses with preamble and optional postamble.
 */
wheel.legalese.hoplon.clause_list = (function wheel$legalese$hoplon$clause_list(var_args){
var G__21069 = arguments.length;
switch (G__21069) {
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

var G__21070 = cljs.core.cst$kw$class;
var G__21071 = "clause-list";
var G__21072 = (function (){var G__21075 = cljs.core.cst$kw$class;
var G__21076 = "preamble";
var G__21077 = pre;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__21075,G__21076,G__21077) : hoplon.core.span.call(null,G__21075,G__21076,G__21077));
})();
var G__21073 = (function (){var G__21078 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(hoplon.core.li,cljs.core.cst$kw$class,"clause"),items);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__21078) : hoplon.core.ul.call(null,G__21078));
})();
var G__21074 = (cljs.core.truth_(post)?(function (){var G__21079 = cljs.core.cst$kw$class;
var G__21080 = "postamble";
var G__21081 = post;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__21079,G__21080,G__21081) : hoplon.core.span.call(null,G__21079,G__21080,G__21081));
})():null);
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$5(G__21070,G__21071,G__21072,G__21073,G__21074) : hoplon.core.section.call(null,G__21070,G__21071,G__21072,G__21073,G__21074));
});

wheel.legalese.hoplon.clause_list.cljs$lang$maxFixedArity = 3;

wheel.legalese.hoplon._QMARK__QMARK_legislature = (function wheel$legalese$hoplon$_QMARK__QMARK_legislature(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test = (function (){
var n = "foooos";
var el = wheel.legalese.hoplon.legislature(n);
try{var values__17365__auto___21085 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"em.legislature"),x__9196__auto__);
})();
var result__17366__auto___21086 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21085);
if(cljs.core.truth_(result__17366__auto___21086)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21085),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21085);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21083){var t__17410__auto___21087 = e21083;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"em.legislature"),cljs.core.cst$kw$actual,t__17410__auto___21087,cljs.core.cst$kw$message,null], null));
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
}catch (e21084){var t__17410__auto__ = e21084;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$n,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_legislature;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_legislature,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_legislature,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,37,37,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_legislature)?wheel.legalese.hoplon._QMARK__QMARK_legislature.cljs$lang$test:null)]));
wheel.legalese.hoplon._QMARK__QMARK_clause_list = (function wheel$legalese$hoplon$_QMARK__QMARK_clause_list(){
return cljs.test.test_var(wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var);
});
wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test = (function (){
var pre = "foo";
var items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
var post = "bar";
var without_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$2(pre,items);
var with_post = wheel.legalese.hoplon.clause_list.cljs$core$IFn$_invoke$arity$3(pre,items,post);
try{var values__17365__auto___21096 = (function (){var x__9196__auto__ = without_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___21097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21096);
if(cljs.core.truth_(result__17366__auto___21097)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21096),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21096);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21088){var t__17410__auto___21098 = e21088;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$without_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___21098,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21099 = (function (){var x__9196__auto__ = with_post;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"section.clause-list"),x__9196__auto__);
})();
var result__17366__auto___21100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___21099);
if(cljs.core.truth_(result__17366__auto___21100)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___21099),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___21099);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21089){var t__17410__auto___21101 = e21089;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$with_DASH_post,"section.clause-list"),cljs.core.cst$kw$actual,t__17410__auto___21101,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21102 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___21103 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21102);
if(cljs.core.truth_(result__17366__auto___21103)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21102),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21102);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21090){var t__17410__auto___21104 = e21090;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___21104,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21105 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"span.preamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___21106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21105);
if(cljs.core.truth_(result__17366__auto___21106)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21105),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21105);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21091){var t__17410__auto___21107 = e21091;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.preamble")),cljs.core.cst$kw$actual,t__17410__auto___21107,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21108 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___21109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21108);
if(cljs.core.truth_(result__17366__auto___21109)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21108),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21108);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21092){var t__17410__auto___21110 = e21092;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___21110,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21111 = (function (){var x__9196__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(with_post,"li.clause");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___21112 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21111);
if(cljs.core.truth_(result__17366__auto___21112)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21111),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21111);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21093){var t__17410__auto___21113 = e21093;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"li.clause")),cljs.core.cst$kw$actual,t__17410__auto___21113,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___21114 = (function (){var x__9196__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.find_text(without_post,"span.postamble");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___21115 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___21114);
if(cljs.core.truth_(result__17366__auto___21115)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___21114),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___21114);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21094){var t__17410__auto___21116 = e21094;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.PersistentVector.EMPTY,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$without_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto___21116,cljs.core.cst$kw$message,null], null));
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
}catch (e21095){var t__17410__auto__ = e21095;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bar"], null),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_find_DASH_text,cljs.core.cst$sym$with_DASH_post,"span.postamble")),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$var = new cljs.core.Var(function(){return wheel.legalese.hoplon._QMARK__QMARK_clause_list;},cljs.core.cst$sym$wheel$legalese$hoplon_SLASH__QMARK__QMARK_clause_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$legalese$hoplon,cljs.core.cst$sym$_QMARK__QMARK_clause_DASH_list,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/er0/i688ot/index.html.out/wheel/legalese/hoplon.cljs",23,1,43,43,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.legalese.hoplon._QMARK__QMARK_clause_list)?wheel.legalese.hoplon._QMARK__QMARK_clause_list.cljs$lang$test:null)]));
