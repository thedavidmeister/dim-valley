// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('wheel.link.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('wheel.dom.traversal');
goog.require('cljs.test');
wheel.link.hoplon.external = (function wheel$link$hoplon$external(var_args){
var args21767 = [];
var len__8981__auto___21775 = arguments.length;
var i__8982__auto___21776 = (0);
while(true){
if((i__8982__auto___21776 < len__8981__auto___21775)){
args21767.push((arguments[i__8982__auto___21776]));

var G__21777 = (i__8982__auto___21776 + (1));
i__8982__auto___21776 = G__21777;
continue;
} else {
}
break;
}

var G__21769 = args21767.length;
switch (G__21769) {
case 1:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21767.length)].join('')));

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

var G__21770 = cljs.core.cst$kw$href;
var G__21771 = href;
var G__21772 = cljs.core.cst$kw$target;
var G__21773 = "_blank";
var G__21774 = text;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__21770,G__21771,G__21772,G__21773,G__21774) : hoplon.core.a.call(null,G__21770,G__21771,G__21772,G__21773,G__21774));
});

wheel.link.hoplon.external.cljs$lang$maxFixedArity = 2;

wheel.link.hoplon.external_QMARK_ = (function wheel$link$hoplon$external_QMARK_(l,a,t){
try{var values__20418__auto___21787 = (function (){var x__8694__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"a"),x__8694__auto__);
})();
var result__20419__auto___21788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20418__auto___21787);
if(cljs.core.truth_(result__20419__auto___21788)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20418__auto___21787),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__20418__auto___21787);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21783){var t__20456__auto___21789 = e21783;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"a"),cljs.core.cst$kw$actual,t__20456__auto___21789,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___21790 = (function (){var x__8694__auto__ = l;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"[target=\"_blank\"]"),x__8694__auto__);
})();
var result__20419__auto___21791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20418__auto___21790);
if(cljs.core.truth_(result__20419__auto___21791)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20418__auto___21790),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__20418__auto___21790);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21784){var t__20456__auto___21792 = e21784;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,"[target=\"_blank\"]"),cljs.core.cst$kw$actual,t__20456__auto___21792,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto___21793 = (function (){var x__8694__auto__ = l;
return cljs.core._conj((function (){var x__8694__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[href=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"]")].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto___21794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(wheel.dom.traversal.is_QMARK_,values__20418__auto___21793);
if(cljs.core.truth_(result__20419__auto___21794)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core.cons(wheel.dom.traversal.is_QMARK_,values__20418__auto___21793),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$dt_SLASH_is_QMARK_,values__20418__auto___21793);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e21785){var t__20456__auto___21795 = e21785;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$dt_SLASH_is_QMARK_,cljs.core.cst$sym$l,cljs.core.list(cljs.core.cst$sym$str,"[href=\"",cljs.core.cst$sym$a,"\"]")),cljs.core.cst$kw$actual,t__20456__auto___21795,cljs.core.cst$kw$message,null], null));
}
try{var values__20418__auto__ = (function (){var x__8694__auto__ = t;
return cljs.core._conj((function (){var x__8694__auto____$1 = wheel.dom.traversal.text(l);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
})();
var result__20419__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__20418__auto__);
if(cljs.core.truth_(result__20419__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__20418__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__8694__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__20418__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__20419__auto__;
}catch (e21786){var t__20456__auto__ = e21786;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$t,cljs.core.list(cljs.core.cst$sym$dt_SLASH_text,cljs.core.cst$sym$l)),cljs.core.cst$kw$actual,t__20456__auto__,cljs.core.cst$kw$message,null], null));
}});
wheel.link.hoplon._QMARK__QMARK_external = (function wheel$link$hoplon$_QMARK__QMARK_external(){
return cljs.test.test_var(wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var);
});
wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test = (function (){
var es = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos","bars","bars"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foos",(hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("bars") : hoplon.core.div.call(null,"bars")),"bars"], null)], null);
var seq__21796 = cljs.core.seq(es);
var chunk__21797 = null;
var count__21798 = (0);
var i__21799 = (0);
while(true){
if((i__21799 < count__21798)){
var vec__21800 = chunk__21797.cljs$core$IIndexed$_nth$arity$2(null,i__21799);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21800,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__21806 = seq__21796;
var G__21807 = chunk__21797;
var G__21808 = count__21798;
var G__21809 = (i__21799 + (1));
seq__21796 = G__21806;
chunk__21797 = G__21807;
count__21798 = G__21808;
i__21799 = G__21809;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21796);
if(temp__6738__auto__){
var seq__21796__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21796__$1)){
var c__8671__auto__ = cljs.core.chunk_first(seq__21796__$1);
var G__21810 = cljs.core.chunk_rest(seq__21796__$1);
var G__21811 = c__8671__auto__;
var G__21812 = cljs.core.count(c__8671__auto__);
var G__21813 = (0);
seq__21796 = G__21810;
chunk__21797 = G__21811;
count__21798 = G__21812;
i__21799 = G__21813;
continue;
} else {
var vec__21803 = cljs.core.first(seq__21796__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,(2),null);
wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$1(a),a,a);

wheel.link.hoplon.external_QMARK_(wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(a,t),a,e);

var G__21814 = cljs.core.next(seq__21796__$1);
var G__21815 = null;
var G__21816 = (0);
var G__21817 = (0);
seq__21796 = G__21814;
chunk__21797 = G__21815;
count__21798 = G__21816;
i__21799 = G__21817;
continue;
}
} else {
return null;
}
}
break;
}
});

wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$var = new cljs.core.Var(function(){return wheel.link.hoplon._QMARK__QMARK_external;},cljs.core.cst$sym$wheel$link$hoplon_SLASH__QMARK__QMARK_external,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$wheel$link$hoplon,cljs.core.cst$sym$_QMARK__QMARK_external,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/dim-valley/e7h/9txbbm/index.html.out/wheel/link/hoplon.cljs",20,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(wheel.link.hoplon._QMARK__QMARK_external)?wheel.link.hoplon._QMARK__QMARK_external.cljs$lang$test:null)]));
