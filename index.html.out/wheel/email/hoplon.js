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
var wheel$email$hoplon$email__delegate = function (args__19628__auto__){
var vec__21205 = hoplon.core.parse_args(args__19628__auto__);
var map__21208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205,(0),null);
var map__21208__$1 = ((((!((map__21208 == null)))?((((map__21208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21208):map__21208);
var address = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,cljs.core.cst$kw$address);
var subject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,cljs.core.cst$kw$subject);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208__$1,cljs.core.cst$kw$body);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205,(1),null);
var children__$1 = ((cljs.core.seq(children))?children:address);
var G__21210 = cljs.core.cst$kw$href;
var G__21211 = (function (){var fexpr__21224 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21210,children__$1,vec__21205,map__21208,map__21208__$1,address,subject,body,children){
return (function (G__21223,G__21222,G__21221){
return ["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21221),"?subject=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21222),"&body=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21223)].join('');
});})(G__21210,children__$1,vec__21205,map__21208,map__21208__$1,address,subject,body,children))
);
return (fexpr__21224.cljs$core$IFn$_invoke$arity$3 ? fexpr__21224.cljs$core$IFn$_invoke$arity$3(body,subject,address) : fexpr__21224.call(null,body,subject,address));
})();
var G__21212 = cljs.core.cst$kw$class;
var G__21213 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["email",null], null), null);
var G__21214 = cljs.core.cst$kw$css;
var G__21215 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline-block"], null);
var G__21216 = cljs.core.cst$kw$target;
var G__21217 = "_blank";
var G__21218 = cljs.core.cst$kw$data_DASH_invalid_DASH_address;
var G__21219 = (function (){var fexpr__21231 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,children__$1,vec__21205,map__21208,map__21208__$1,address,subject,body,children){
return (function (G__21226,G__21227,G__21225){
var G__21232 = (function (){var G__21233 = cljs.core.cst$kw$wheel$email_SLASH_email;
var G__21234 = G__21227;
return (G__21226.cljs$core$IFn$_invoke$arity$2 ? G__21226.cljs$core$IFn$_invoke$arity$2(G__21233,G__21234) : G__21226.call(null,G__21233,G__21234));
})();
return (G__21225.cljs$core$IFn$_invoke$arity$1 ? G__21225.cljs$core$IFn$_invoke$arity$1(G__21232) : G__21225.call(null,G__21232));
});})(G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,children__$1,vec__21205,map__21208,map__21208__$1,address,subject,body,children))
);
return (fexpr__21231.cljs$core$IFn$_invoke$arity$3 ? fexpr__21231.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.valid_QMARK_,address,cljs.core.not) : fexpr__21231.call(null,cljs.spec.alpha.valid_QMARK_,address,cljs.core.not));
})();
var G__21220 = children__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$11 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$11(G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,G__21219,G__21220) : hoplon.core.a.call(null,G__21210,G__21211,G__21212,G__21213,G__21214,G__21215,G__21216,G__21217,G__21218,G__21219,G__21220));
};
var wheel$email$hoplon$email = function (var_args){
var args__19628__auto__ = null;
if (arguments.length > 0) {
var G__21235__i = 0, G__21235__a = new Array(arguments.length -  0);
while (G__21235__i < G__21235__a.length) {G__21235__a[G__21235__i] = arguments[G__21235__i + 0]; ++G__21235__i;}
  args__19628__auto__ = new cljs.core.IndexedSeq(G__21235__a,0,null);
} 
return wheel$email$hoplon$email__delegate.call(this,args__19628__auto__);};
wheel$email$hoplon$email.cljs$lang$maxFixedArity = 0;
wheel$email$hoplon$email.cljs$lang$applyTo = (function (arglist__21236){
var args__19628__auto__ = cljs.core.seq(arglist__21236);
return wheel$email$hoplon$email__delegate(args__19628__auto__);
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
try{var values__18527__auto___21242 = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a.email"),x__9196__auto__);
})();
var result__18528__auto___21243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21242);
if(cljs.core.truth_(result__18528__auto___21243)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21242),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21242);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21237){var t__18572__auto___21244 = e21237;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"a.email"),cljs.core.cst$kw$actual,t__18572__auto___21244,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21245 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["a[href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(example_email),"?subject=Emails have subject lines&body=This is the body of the email.\"] "].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21246 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21245);
if(cljs.core.truth_(result__18528__auto___21246)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21245),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21245);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21238){var t__18572__auto___21247 = e21238;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:",cljs.core.cst$sym$example_DASH_email,"?subject=Emails have subject lines&body=This is the body of the email.\"] ")),cljs.core.cst$kw$actual,t__18572__auto___21247,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___21248 = (function (){var x__9196__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21249 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto___21248);
if(cljs.core.truth_(result__18528__auto___21249)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto___21248),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto___21248);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21239){var t__18572__auto___21250 = e21239;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__18572__auto___21250,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,"as;lkfj");

cljs.core.reset_BANG_(s,"as;lkfj");

cljs.core.reset_BANG_(b,"as;lkfj");

cljs.core.reset_BANG_(c,"as;lkfj");

try{var values__18527__auto___21251 = (function (){var x__9196__auto__ = el;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___21252 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___21251);
if(cljs.core.truth_(result__18528__auto___21252)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___21251),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto___21251);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21240){var t__18572__auto___21253 = e21240;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,cljs.core.list(cljs.core.cst$sym$str,"a[href=\"mailto:as;lkfj?subject=as;lkfj&body=as;lkfj\"]")),cljs.core.cst$kw$actual,t__18572__auto___21253,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = (function (){var x__9196__auto__ = cljs.core.deref(c);
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(el);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e21241){var t__18572__auto__ = e21241;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$clojure$core_SLASH_deref,cljs.core.cst$sym$c),cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_text,cljs.core.cst$sym$el)),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/email/hoplon.cljs",17,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email)?wheel.email.hoplon._QMARK__QMARK_email.cljs$lang$test:null)]));
wheel.email.hoplon._QMARK__QMARK_email__invalid = (function wheel$email$hoplon$_QMARK__QMARK_email__invalid(){
return cljs.test.test_var(wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var);
});
wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test = (function (){
var valid = wheel.test.util.fake(cljs.core.cst$kw$wheel$email_SLASH_email);
var invalid = wheel.test.util.fake(cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_re_DASH_matches,cljs.core.cst$sym$wheel$email$spec_SLASH_regex,cljs.core.cst$sym$_PERCENT_)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,((function (valid){
return (function (p1__21254_SHARP_){
return cljs.core.not(cljs.core.re_matches(wheel.email.spec.regex,p1__21254_SHARP_));
});})(valid))
], null),null));
var a = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(valid);
var el = wheel.email.hoplon.email.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$address,a], 0));
try{var values__18527__auto___21257 = (function (){var x__9196__auto__ = wheel.dom.traversal.is_QMARK_(el,"[data-invalid-address]");
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})();
var result__18528__auto___21258 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.not,values__18527__auto___21257);
if(cljs.core.truth_(result__18528__auto___21258)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core.not,values__18527__auto___21257),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$not,values__18527__auto___21257);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21255){var t__18572__auto___21259 = e21255;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]")),cljs.core.cst$kw$actual,t__18572__auto___21259,cljs.core.cst$kw$message,null], null));
}
cljs.core.reset_BANG_(a,invalid);

try{var values__18527__auto__ = (function (){var x__9196__auto__ = el;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[data-invalid-address]"),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e21256){var t__18572__auto__ = e21256;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$wheel$dom$traversal_SLASH_is_QMARK_,cljs.core.cst$sym$el,"[data-invalid-address]"),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
}});

wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$var = new cljs.core.Var(function(){return wheel.email.hoplon._QMARK__QMARK_email__invalid;},cljs.core.cst$sym$wheel$email$hoplon_SLASH__QMARK__QMARK_email_DASH__DASH_invalid,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$email$hoplon,cljs.core.cst$sym$_QMARK__QMARK_email_DASH__DASH_invalid,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/email/hoplon.cljs",26,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.email.hoplon._QMARK__QMARK_email__invalid)?wheel.email.hoplon._QMARK__QMARK_email__invalid.cljs$lang$test:null)]));
