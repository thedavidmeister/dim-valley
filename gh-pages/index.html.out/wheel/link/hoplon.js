// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
var args18069 = [];
var len__8981__auto___18077 = arguments.length;
var i__8982__auto___18078 = (0);
while(true){
if((i__8982__auto___18078 < len__8981__auto___18077)){
args18069.push((arguments[i__8982__auto___18078]));

var G__18079 = (i__8982__auto___18078 + (1));
i__8982__auto___18078 = G__18079;
continue;
} else {
}
break;
}

var G__18071 = args18069.length;
switch (G__18071) {
case 1:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18069.length)].join('')));

}
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1 = (function (href){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(href,href);
});

wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2 = (function (href,text){
if(typeof href === 'string'){
} else {
throw (new Error("Assert failed: (string? href)"));
}

var G__18072 = cljs.core.cst$kw$href;
var G__18073 = href;
var G__18074 = cljs.core.cst$kw$target;
var G__18075 = "_blank";
var G__18076 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__18072,G__18073,G__18074,G__18075,G__18076) : hoplon.core.a.call(null,G__18072,G__18073,G__18074,G__18075,G__18076));
});

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
try{var values__17649__auto___18089 = (function (){var x__8694__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__8694__auto__);
})();
var result__17650__auto___18090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17649__auto___18089);
if(cljs.core.truth_(result__17650__auto___18090)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17649__auto___18089),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17649__auto___18089);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18085){var t__17687__auto___18091 = e18085;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__17687__auto___18091,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___18092 = (function (){var x__8694__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__8694__auto__);
})();
var result__17650__auto___18093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17649__auto___18092);
if(cljs.core.truth_(result__17650__auto___18093)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17649__auto___18092),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17649__auto___18092);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18086){var t__17687__auto___18094 = e18086;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__17687__auto___18094,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto___18095 = (function (){var x__8694__auto__ = l;
return cljs.core._conj((function (){var x__8694__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto___18096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17649__auto___18095);
if(cljs.core.truth_(result__17650__auto___18096)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17649__auto___18095),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17649__auto___18095);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e18087){var t__17687__auto___18097 = e18087;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__17687__auto___18097,cljs.core.cst$kw$message,null], null));
}
try{var values__17649__auto__ = (function (){var x__8694__auto__ = t;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__17650__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17649__auto__);
if(cljs.core.truth_(result__17650__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17649__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17649__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17650__auto__;
}catch (e18088){var t__17687__auto__ = e18088;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__17687__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var(wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var es = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos","bars","bars"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos",(hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("bars") : hoplon.core.div.call(null,"bars")),"bars"], null)], null);
var seq__18098 = cljs.core.seq(es);
var chunk__18099 = null;
var count__18100 = (0);
var i__18101 = (0);
while(true){
if((i__18101 < count__18100)){
var vec__18102 = chunk__18099.cljs$core$IIndexed$_nth$arity$2(null,i__18101);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__18108 = seq__18098;
var G__18109 = chunk__18099;
var G__18110 = count__18100;
var G__18111 = (i__18101 + (1));
seq__18098 = G__18108;
chunk__18099 = G__18109;
count__18100 = G__18110;
i__18101 = G__18111;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__18098);
if(temp__6738__auto__){
var seq__18098__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18098__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__18098__$1);
var G__18112 = cljs.core.chunk_rest(seq__18098__$1);
var G__18113 = c__8671__auto__;
var G__18114 = cljs.core.count(c__8671__auto__);
var G__18115 = (0);
seq__18098 = G__18112;
chunk__18099 = G__18113;
count__18100 = G__18114;
i__18101 = G__18115;
continue;
} else {
var vec__18105 = cljs.core.first(seq__18098__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__18116 = cljs.core.next(seq__18098__$1);
var G__18117 = null;
var G__18118 = (0);
var G__18119 = (0);
seq__18098 = G__18116;
chunk__18099 = G__18117;
count__18100 = G__18118;
i__18101 = G__18119;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/eik/9txbbm/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
