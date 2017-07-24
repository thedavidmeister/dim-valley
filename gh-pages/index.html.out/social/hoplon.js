// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___20528 = arguments.length;
var i__8982__auto___20529 = (0);
while(true){
if((i__8982__auto___20529 < len__8981__auto___20528)){
args__8988__auto__.push((arguments[i__8982__auto___20529]));

var G__20530 = (i__8982__auto___20529 + (1));
i__8982__auto___20529 = G__20530;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__20487){
var map__20488 = p__20487;
var map__20488__$1 = ((((!((map__20488 == null)))?((((map__20488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20488):map__20488);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__20490(s__20491){
return (new cljs.core.LazySeq(null,((function (map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (){
var s__20491__$1 = s__20491;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20491__$1);
if(temp__6738__auto__){
var s__20491__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20491__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__20491__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__20493 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__20492 = (0);
while(true){
if((i__20492 < size__8621__auto__)){
var vec__20512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__20492);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(1),null);
cljs.core.chunk_append(b__20493,(function (){var G__20515 = (function (){var G__20516 = cljs.core.cst$kw$css;
var G__20517 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__20518 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (i__20492,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__20492,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (i__20492,con__14913__auto__,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__20492,con__14913__auto__,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (i__20492,con__14913__auto__,alt__14914__auto__,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__20519 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20519) : cljs.core.deref.call(null,G__20519));
});})(i__20492,con__14913__auto__,alt__14914__auto__,G__20516,G__20517,vec__20512,f,h,c__8620__auto__,size__8621__auto__,b__20493,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20516,G__20517,G__20518) : hoplon.core.div.call(null,G__20516,G__20517,G__20518));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20515) : hoplon.core.div.call(null,G__20515));
})());

var G__20531 = (i__20492 + (1));
i__20492 = G__20531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20493),social$hoplon$iter__20490(cljs.core.chunk_rest(s__20491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20493),null);
}
} else {
var vec__20520 = cljs.core.first(s__20491__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20520,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20520,(1),null);
return cljs.core.cons((function (){var G__20523 = (function (){var G__20524 = cljs.core.cst$kw$css;
var G__20525 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__20526 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14913__auto__,G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__20527 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20527) : cljs.core.deref.call(null,G__20527));
});})(con__14913__auto__,alt__14914__auto__,G__20524,G__20525,vec__20520,f,h,s__20491__$2,temp__6738__auto__,map__20488,map__20488__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20524,G__20525,G__20526) : hoplon.core.div.call(null,G__20524,G__20525,G__20526));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20523) : hoplon.core.div.call(null,G__20523));
})(),social$hoplon$iter__20490(cljs.core.rest(s__20491__$2)));
}
} else {
return null;
}
break;
}
});})(map__20488,map__20488__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__20488,map__20488__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq20486){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20486));
});

