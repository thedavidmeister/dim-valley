// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
<<<<<<< HEAD
var G__20777 = arguments.length;
switch (G__20777) {
=======
var G__24484 = arguments.length;
switch (G__24484) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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

<<<<<<< HEAD
var G__20778 = cljs.core.cst$kw$href;
var G__20779 = href;
var G__20780 = cljs.core.cst$kw$target;
var G__20781 = "_blank";
var G__20782 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__20778,G__20779,G__20780,G__20781,G__20782) : hoplon.core.a.call(null,G__20778,G__20779,G__20780,G__20781,G__20782));
=======
var G__24485 = cljs.core.cst$kw$href;
var G__24486 = href;
var G__24487 = cljs.core.cst$kw$target;
var G__24488 = "_blank";
var G__24489 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__24485,G__24486,G__24487,G__24488,G__24489) : hoplon.core.a.call(null,G__24485,G__24486,G__24487,G__24488,G__24489));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
<<<<<<< HEAD
try{var values__17363__auto___20788 = (function (){var x__9194__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__9194__auto__);
})();
var result__17364__auto___20789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20788);
if(cljs.core.truth_(result__17364__auto___20789)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20788),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17363__auto___20788);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20784){var t__17408__auto___20790 = e20784;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__17408__auto___20790,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___20791 = (function (){var x__9194__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__9194__auto__);
})();
var result__17364__auto___20792 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20791);
if(cljs.core.truth_(result__17364__auto___20792)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20791),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17363__auto___20791);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20785){var t__17408__auto___20793 = e20785;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__17408__auto___20793,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto___20794 = (function (){var x__9194__auto__ = l;
return cljs.core._conj((function (){var x__9194__auto____$1 = ["[href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto___20795 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__17363__auto___20794);
if(cljs.core.truth_(result__17364__auto___20795)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__17363__auto___20794),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__17363__auto___20794);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e20786){var t__17408__auto___20796 = e20786;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__17408__auto___20796,cljs.core.cst$kw$message,null], null));
}
try{var values__17363__auto__ = (function (){var x__9194__auto__ = t;
return cljs.core._conj((function (){var x__9194__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})();
var result__17364__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__17363__auto__);
if(cljs.core.truth_(result__17364__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__17363__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9194__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__17363__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__17364__auto__;
}catch (e20787){var t__17408__auto__ = e20787;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__17408__auto__,cljs.core.cst$kw$message,null], null));
=======
try{var values__18527__auto___24495 = (function (){var x__9196__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__9196__auto__);
})();
var result__18528__auto___24496 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24495);
if(cljs.core.truth_(result__18528__auto___24496)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24495),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18527__auto___24495);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24491){var t__18572__auto___24497 = e24491;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__18572__auto___24497,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24498 = (function (){var x__9196__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__9196__auto__);
})();
var result__18528__auto___24499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24498);
if(cljs.core.truth_(result__18528__auto___24499)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24498),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18527__auto___24498);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24492){var t__18572__auto___24500 = e24492;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__18572__auto___24500,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto___24501 = (function (){var x__9196__auto__ = l;
return cljs.core._conj((function (){var x__9196__auto____$1 = ["[href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"\"]"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto___24502 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__18527__auto___24501);
if(cljs.core.truth_(result__18528__auto___24502)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__18527__auto___24501),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__18527__auto___24501);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e24493){var t__18572__auto___24503 = e24493;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__18572__auto___24503,cljs.core.cst$kw$message,null], null));
}
try{var values__18527__auto__ = (function (){var x__9196__auto__ = t;
return cljs.core._conj((function (){var x__9196__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})();
var result__18528__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__18527__auto__);
if(cljs.core.truth_(result__18528__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__18527__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__9196__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__18527__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__18528__auto__;
}catch (e24494){var t__18572__auto__ = e24494;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__18572__auto__,cljs.core.cst$kw$message,null], null));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var(wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var es = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos","bars","bars"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos",(hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("bars") : hoplon.core.div.call(null,"bars")),"bars"], null)], null);
<<<<<<< HEAD
var seq__20797 = cljs.core.seq(es);
var chunk__20798 = null;
var count__20799 = (0);
var i__20800 = (0);
while(true){
if((i__20800 < count__20799)){
var vec__20801 = chunk__20798.cljs$core$IIndexed$_nth$arity$2(null,i__20800);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20801,(2),null);
=======
var seq__24504 = cljs.core.seq(es);
var chunk__24505 = null;
var count__24506 = (0);
var i__24507 = (0);
while(true){
if((i__24507 < count__24506)){
var vec__24508 = chunk__24505.cljs$core$IIndexed$_nth$arity$2(null,i__24507);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24508,(2),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

<<<<<<< HEAD
var G__20807 = seq__20797;
var G__20808 = chunk__20798;
var G__20809 = count__20799;
var G__20810 = (i__20800 + (1));
seq__20797 = G__20807;
chunk__20798 = G__20808;
count__20799 = G__20809;
i__20800 = G__20810;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__20797);
if(temp__5290__auto__){
var seq__20797__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20797__$1)){
var c__9171__auto__ = cljs.core.chunk_first(seq__20797__$1);
var G__20811 = cljs.core.chunk_rest(seq__20797__$1);
var G__20812 = c__9171__auto__;
var G__20813 = cljs.core.count(c__9171__auto__);
var G__20814 = (0);
seq__20797 = G__20811;
chunk__20798 = G__20812;
count__20799 = G__20813;
i__20800 = G__20814;
continue;
} else {
var vec__20804 = cljs.core.first(seq__20797__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20804,(2),null);
=======
var G__24514 = seq__24504;
var G__24515 = chunk__24505;
var G__24516 = count__24506;
var G__24517 = (i__24507 + (1));
seq__24504 = G__24514;
chunk__24505 = G__24515;
count__24506 = G__24516;
i__24507 = G__24517;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__24504);
if(temp__5290__auto__){
var seq__24504__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24504__$1)){
var c__9173__auto__ = cljs.core.chunk_first(seq__24504__$1);
var G__24518 = cljs.core.chunk_rest(seq__24504__$1);
var G__24519 = c__9173__auto__;
var G__24520 = cljs.core.count(c__9173__auto__);
var G__24521 = (0);
seq__24504 = G__24518;
chunk__24505 = G__24519;
count__24506 = G__24520;
i__24507 = G__24521;
continue;
} else {
var vec__24511 = cljs.core.first(seq__24504__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24511,(2),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

<<<<<<< HEAD
var G__20815 = cljs.core.next(seq__20797__$1);
var G__20816 = null;
var G__20817 = (0);
var G__20818 = (0);
seq__20797 = G__20815;
chunk__20798 = G__20816;
count__20799 = G__20817;
i__20800 = G__20818;
=======
var G__24522 = cljs.core.next(seq__24504__$1);
var G__24523 = null;
var G__24524 = (0);
var G__24525 = (0);
seq__24504 = G__24522;
chunk__24505 = G__24523;
count__24506 = G__24524;
i__24507 = G__24525;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
}
} else {
return null;
}
}
break;
}
});

<<<<<<< HEAD
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/dim-valley/h1i/ari3q5/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
=======
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/erv/i688ot/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
