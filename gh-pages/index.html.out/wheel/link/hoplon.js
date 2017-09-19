// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
var G__24491 = arguments.length;
switch (G__24491) {
case 1:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var G__24492 = cljs.core.cst$kw$href;
var G__24493 = href;
var G__24494 = cljs.core.cst$kw$target;
var G__24495 = "_blank";
var G__24496 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__24492,G__24493,G__24494,G__24495,G__24496) : hoplon.core.a.call(null,G__24492,G__24493,G__24494,G__24495,G__24496));
});

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
try{var values__17365__auto___24502 = (function (){var x__9196__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__9196__auto__);
})();
var result__17366__auto___24503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24502);
if(cljs.core.truth_(result__17366__auto___24503)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24502),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17365__auto___24502);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24498){var t__17410__auto___24504 = e24498;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__17410__auto___24504,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24505 = (function (){var x__9196__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__9196__auto__);
})();
var result__17366__auto___24506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24505);
if(cljs.core.truth_(result__17366__auto___24506)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24505),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17365__auto___24505);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24499){var t__17410__auto___24507 = e24499;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__17410__auto___24507,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto___24508 = (function (){var x__9196__auto__ = l;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["[href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto___24509 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17365__auto___24508);
if(cljs.core.truth_(result__17366__auto___24509)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17365__auto___24508),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17365__auto___24508);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24500){var t__17410__auto___24510 = e24500;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__17410__auto___24510,cljs.core.cst$kw$message,null], null));
}
try{var values__17365__auto__ = (function (){var x__9196__auto__ = t;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__17366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17365__auto__);
if(cljs.core.truth_(result__17366__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17365__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17365__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17366__auto__;
}catch (e24501){var t__17410__auto__ = e24501;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__17410__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var(wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var es = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos","bars","bars"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos",(hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("bars") : hoplon.core.div.call(null,"bars")),"bars"], null)], null);
var seq__24511 = cljs.core.seq(es);
var chunk__24512 = null;
var count__24513 = (0);
var i__24514 = (0);
while(true){
if((i__24514 < count__24513)){
var vec__24515 = chunk__24512.cljs$core$IIndexed$_nth$arity$2(null,i__24514);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24515,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__24521 = seq__24511;
var G__24522 = chunk__24512;
var G__24523 = count__24513;
var G__24524 = (i__24514 + (1));
seq__24511 = G__24521;
chunk__24512 = G__24522;
count__24513 = G__24523;
i__24514 = G__24524;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24511);
if(temp__5290__auto__){
var seq__24511__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24511__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__24511__$1);
var G__24525 = cljs.core.chunk_rest(seq__24511__$1);
var G__24526 = c__9173__auto__;
var G__24527 = cljs.core.count(c__9173__auto__);
var G__24528 = (0);
seq__24511 = G__24525;
chunk__24512 = G__24526;
count__24513 = G__24527;
i__24514 = G__24528;
continue;
} else {
var vec__24518 = cljs.core.first(seq__24511__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24518,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24518,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24518,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__24529 = cljs.core.next(seq__24511__$1);
var G__24530 = null;
var G__24531 = (0);
var G__24532 = (0);
seq__24511 = G__24529;
chunk__24512 = G__24530;
count__24513 = G__24531;
i__24514 = G__24532;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e8f/i688ot/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
