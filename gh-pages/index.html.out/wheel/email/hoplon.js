// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.email.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljs.spec.alpha');
goog.require('wheel.email.spec');
goog.require('wheel.dom.traversal');
goog.require('wheel.test.util');
goog.require('cljs.test');
/**
 * @param {...*} var_args
 */
wheel.email.hoplon.email = (function() { 
var wheel$email$hoplon$email__delegate = function (args__18464__auto__){
var vec__20915 = hoplon.core.parse_args(args__18464__auto__);
var map__20918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20915,(0),null);
var map__20918__$1 = ((((!((map__20918 == null)))?((((map__20918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20918):map__20918);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,cljs.core.cst$kw$address);
var subject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,cljs.core.cst$kw$subject);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,cljs.core.cst$kw$body);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20915,(1),null);
var children__$1 = ((cljs.core.seq(children))?children:address);
var G__20920 = cljs.core.cst$kw$href;
var G__20921 = (function (){var fexpr__20934 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20920,children__$1,vec__20915,map__20918,map__20918__$1,address,subject,body,children){
return (function (G__20933,G__20932,G__20931){
return ["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20931),"?subject=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20932),"&body=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20933)].join('');
});})(G__20920,children__$1,vec__20915,map__20918,map__20918__$1,address,subject,body,children))
);
return (fexpr__20934.cljs$core$IFn$_invoke$arity$3 ? fexpr__20934.cljs$core$IFn$_invoke$arity$3(body,subject,address) : fexpr__20934.call(null,body,subject,address));
})();
var G__20922 = cljs.core.cst$kw$class;
var G__20923 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["email",null], null), null);
var G__20924 = cljs.core.cst$kw$css;
var G__20925 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null);
var G__20926 = cljs.core.cst$kw$target;
var G__20927 = "_blank";
var G__20928 = cljs.core.cst$kw$data_DASH_invalid_DASH_address;
var G__20929 = (function (){var fexpr__20941 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,children__$1,vec__20915,map__20918,map__20918__$1,address,subject,body,children){
return (function (G__20936,G__20937,G__20935){
var G__20942 = (function (){var G__20943 = cljs.core.cst$kw$wheel$email_SLASH_email;
var G__20944 = G__20937;
return (G__20936.cljs$core$IFn$_invoke$arity$2 ? G__20936.cljs$core$IFn$_invoke$arity$2(G__20943,G__20944) : G__20936.call(null,G__20943,G__20944));
})();
return (G__20935.cljs$core$IFn$_invoke$arity$1 ? G__20935.cljs$core$IFn$_invoke$arity$1(G__20942) : G__20935.call(null,G__20942));
});})(G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,children__$1,vec__20915,map__20918,map__20918__$1,address,subject,body,children))
);
return (fexpr__20941.cljs$core$IFn$_invoke$arity$3 ? fexpr__20941.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.valid_QMARK_,address,cljs.core.not) : fexpr__20941.call(null,cljs.spec.alpha.valid_QMARK_,address,cljs.core.not));
})();
var G__20930 = children__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$11(G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,G__20929,G__20930) : hoplon.core.a.call(null,G__20920,G__20921,G__20922,G__20923,G__20924,G__20925,G__20926,G__20927,G__20928,G__20929,G__20930));
};
var wheel$email$hoplon$email = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__20945__i = 0, G__20945__a = new Array(arguments.length -  0);
while (G__20945__i < G__20945__a.length) {G__20945__a[G__20945__i] = arguments[G__20945__i + 0]; ++G__20945__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__20945__a,0,null);
} 
return wheel$email$hoplon$email__delegate.call(this,args__18464__auto__);};
wheel$email$hoplon$email.cljs$lang$maxFixedArity = 0;
wheel$email$hoplon$email.cljs$lang$applyTo = (function (arglist__20946){
var args__18464__auto__ = cljs.core.seq(arglist__20946);
return wheel$email$hoplon$email__delegate(args__18464__auto__);
});
wheel$email$hoplon$email.cljs$core$IFn$_invoke$arity$variadic = wheel$email$hoplon$email__delegate;
return wheel$email$hoplon$email;
})()
;
wheel.email.hoplon._QMARK__QMARK_email = (function wheel$email$hoplon$_QMARK__QMARK_email(){
return cljs.test.test_var(wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$var);
});
wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$test = (function (){
var example_email = "foo@example.com";
var a = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(example_email);
var s = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("Emails have subject lines");
var b = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("This is the body of the email.");
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(example_email);
var el = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,a,cljs.core.cst$kw$subject,s,cljs.core.cst$kw$body,b,c], 0));
try{var values__17363__auto___20952 = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.email"),x__9194__auto__);
})();
var result__17364__auto___20953 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20952);
if(cljs.core.truth_(result__17364__auto___20953)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20952),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___20952);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20947){var t__17408__auto___20954 = e20947;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,t__17408__auto___20954,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___20955 = (function (){var x__9194__auto__ = el;
return cljs.core._conj((function (){var x__9194__auto____$1 = ["a[href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example_email),"?subject=Emails have subject lines&body=This is the body of the email.\"] "].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___20956 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20955);
if(cljs.core.truth_(result__17364__auto___20956)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20955),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___20955);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20948){var t__17408__auto___20957 = e20948;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,t__17408__auto___20957,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___20958 = (function (){var x__9194__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___20959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto___20958);
if(cljs.core.truth_(result__17364__auto___20959)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto___20958),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto___20958);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20949){var t__17408__auto___20960 = e20949;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17408__auto___20960,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,"as;lkfj");

cljs.core.reset_BANG_(s,"as;lkfj");

cljs.core.reset_BANG_(b,"as;lkfj");

cljs.core.reset_BANG_(c,"as;lkfj");

try{var values__17363__auto___20961 = (function (){var x__9194__auto__ = el;
return cljs.core._conj((function (){var x__9194__auto____$1 = ["a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___20962 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20961);
if(cljs.core.truth_(result__17364__auto___20962)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20961),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto___20961);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20950){var t__17408__auto___20963 = e20950;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,t__17408__auto___20963,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20951){var t__17408__auto__ = e20951;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/email/hoplon.cljs",17,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email)?wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$test:null)]));
wheel.email.hoplon._QMARK__QMARK_email__invalid = (function wheel$email$hoplon$_QMARK__QMARK_email__invalid(){
return cljs.test.test_var(wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var);
});
wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test = (function (){
var valid = wheel.test.util.fake(cljs.core.cst$kw$wheel$email_SLASH_email);
var invalid = wheel.test.util.fake(cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,cljs.core.cst$sym$wheel$email$spec_SLASH_regex,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,((function (valid){
return (function (p1__20964_SHARP_){
return cljs.core.not(cljs.core.re_matches(wheel.email.spec.regex,p1__20964_SHARP_));
});})(valid))
], null),null));
var a = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(valid);
var el = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,a], 0));
try{var values__17363__auto___20967 = (function (){var x__9194__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-invalid-address]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})();
var result__17364__auto___20968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17363__auto___20967);
if(cljs.core.truth_(result__17364__auto___20968)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17363__auto___20967),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17363__auto___20967);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20965){var t__17408__auto___20969 = e20965;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,t__17408__auto___20969,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,invalid);

try{var values__17363__auto__ = (function (){var x__9194__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-invalid-address]"),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20966){var t__17408__auto__ = e20966;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email__invalid;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email_DASH__DASH_invalid,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email_DASH__DASH_invalid,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/trb/ari3q5/index.html.out/wheel/email/hoplon.cljs",26,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email__invalid)?wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test:null)]));
