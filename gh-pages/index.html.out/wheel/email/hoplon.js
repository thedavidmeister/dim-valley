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
var wheel$email$hoplon$email__delegate = function (args__18466__auto__){
var vec__24042 = hoplon.core.parse_args(args__18466__auto__);
var map__24045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24042,(0),null);
var map__24045__$1 = ((((!((map__24045 == null)))?((((map__24045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24045):map__24045);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24045__$1,cljs.core.cst$kw$address);
var subject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24045__$1,cljs.core.cst$kw$subject);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24045__$1,cljs.core.cst$kw$body);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24042,(1),null);
var children__$1 = ((cljs.core.seq(children))?children:address);
var G__24047 = cljs.core.cst$kw$href;
var G__24048 = (function (){var fexpr__24061 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24047,children__$1,vec__24042,map__24045,map__24045__$1,address,subject,body,children){
return (function (G__24060,G__24059,G__24058){
return ["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24058),"?subject=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24059),"&body=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24060)].join('');
});})(G__24047,children__$1,vec__24042,map__24045,map__24045__$1,address,subject,body,children))
);
return (fexpr__24061.cljs$core$IFn$_invoke$arity$3 ? fexpr__24061.cljs$core$IFn$_invoke$arity$3(body,subject,address) : fexpr__24061.call(null,body,subject,address));
})();
var G__24049 = cljs.core.cst$kw$class;
var G__24050 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["email",null], null), null);
var G__24051 = cljs.core.cst$kw$css;
var G__24052 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null);
var G__24053 = cljs.core.cst$kw$target;
var G__24054 = "_blank";
var G__24055 = cljs.core.cst$kw$data_DASH_invalid_DASH_address;
var G__24056 = (function (){var fexpr__24068 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24047,G__24048,G__24049,G__24050,G__24051,G__24052,G__24053,G__24054,G__24055,children__$1,vec__24042,map__24045,map__24045__$1,address,subject,body,children){
return (function (G__24063,G__24064,G__24062){
var G__24069 = (function (){var G__24070 = cljs.core.cst$kw$wheel$email_SLASH_email;
var G__24071 = G__24064;
return (G__24063.cljs$core$IFn$_invoke$arity$2 ? G__24063.cljs$core$IFn$_invoke$arity$2(G__24070,G__24071) : G__24063.call(null,G__24070,G__24071));
})();
return (G__24062.cljs$core$IFn$_invoke$arity$1 ? G__24062.cljs$core$IFn$_invoke$arity$1(G__24069) : G__24062.call(null,G__24069));
});})(G__24047,G__24048,G__24049,G__24050,G__24051,G__24052,G__24053,G__24054,G__24055,children__$1,vec__24042,map__24045,map__24045__$1,address,subject,body,children))
);
return (fexpr__24068.cljs$core$IFn$_invoke$arity$3 ? fexpr__24068.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.valid_QMARK_,address,cljs.core.not) : fexpr__24068.call(null,cljs.spec.alpha.valid_QMARK_,address,cljs.core.not));
})();
var G__24057 = children__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$11(G__24047,G__24048,G__24049,G__24050,G__24051,G__24052,G__24053,G__24054,G__24055,G__24056,G__24057) : hoplon.core.a.call(null,G__24047,G__24048,G__24049,G__24050,G__24051,G__24052,G__24053,G__24054,G__24055,G__24056,G__24057));
};
var wheel$email$hoplon$email = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24072__i = 0, G__24072__a = new Array(arguments.length -  0);
while (G__24072__i < G__24072__a.length) {G__24072__a[G__24072__i] = arguments[G__24072__i + 0]; ++G__24072__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24072__a,0,null);
} 
return wheel$email$hoplon$email__delegate.call(this,args__18466__auto__);};
wheel$email$hoplon$email.cljs$lang$maxFixedArity = 0;
wheel$email$hoplon$email.cljs$lang$applyTo = (function (arglist__24073){
var args__18466__auto__ = cljs.core.seq(arglist__24073);
return wheel$email$hoplon$email__delegate(args__18466__auto__);
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
try{var values__17365__auto___24079 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.email"),x__9196__auto__);
})();
var result__17366__auto___24080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24079);
if(cljs.core.truth_(result__17366__auto___24080)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24079),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24079);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24074){var t__17410__auto___24081 = e24074;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,t__17410__auto___24081,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24082 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["a[href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example_email),"?subject=Emails have subject lines&body=This is the body of the email.\"] "].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24082);
if(cljs.core.truth_(result__17366__auto___24083)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24082),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24082);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24075){var t__17410__auto___24084 = e24075;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,t__17410__auto___24084,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24085 = (function (){var x__9196__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24086 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto___24085);
if(cljs.core.truth_(result__17366__auto___24086)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto___24085),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto___24085);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24076){var t__17410__auto___24087 = e24076;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto___24087,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,"as;lkfj");

cljs.core.reset_BANG_(s,"as;lkfj");

cljs.core.reset_BANG_(b,"as;lkfj");

cljs.core.reset_BANG_(c,"as;lkfj");

try{var values__17365__auto___24088 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24088);
if(cljs.core.truth_(result__17366__auto___24089)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24088),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto___24088);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24077){var t__17410__auto___24090 = e24077;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,t__17410__auto___24090,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24078){var t__17410__auto__ = e24078;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/esm/i688ot/index.html.out/wheel/email/hoplon.cljs",17,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email)?wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$test:null)]));
wheel.email.hoplon._QMARK__QMARK_email__invalid = (function wheel$email$hoplon$_QMARK__QMARK_email__invalid(){
return cljs.test.test_var(wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var);
});
wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test = (function (){
var valid = wheel.test.util.fake(cljs.core.cst$kw$wheel$email_SLASH_email);
var invalid = wheel.test.util.fake(cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,cljs.core.cst$sym$wheel$email$spec_SLASH_regex,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,((function (valid){
return (function (p1__24091_SHARP_){
return cljs.core.not(cljs.core.re_matches(wheel.email.spec.regex,p1__24091_SHARP_));
});})(valid))
], null),null));
var a = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(valid);
var el = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,a], 0));
try{var values__17365__auto___24094 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-invalid-address]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__17366__auto___24095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__17365__auto___24094);
if(cljs.core.truth_(result__17366__auto___24095)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__17365__auto___24094),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__17365__auto___24094);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24092){var t__17410__auto___24096 = e24092;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,t__17410__auto___24096,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,invalid);

try{var values__17365__auto__ = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-invalid-address]"),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24093){var t__17410__auto__ = e24093;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email__invalid;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email_DASH__DASH_invalid,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email_DASH__DASH_invalid,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/esm/i688ot/index.html.out/wheel/email/hoplon.cljs",26,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email__invalid)?wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test:null)]));
