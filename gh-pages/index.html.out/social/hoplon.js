// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15615 = arguments.length;
var i__8982__auto___15616 = (0);
while(true){
if((i__8982__auto___15616 < len__8981__auto___15615)){
args__8988__auto__.push((arguments[i__8982__auto___15616]));

var G__15617 = (i__8982__auto___15616 + (1));
i__8982__auto___15616 = G__15617;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__15566){
var map__15567 = p__15566;
var map__15567__$1 = ((((!((map__15567 == null)))?((((map__15567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15567):map__15567);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15567__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15567__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15567__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15567__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__15569(s__15570){
return (new cljs.core.LazySeq(null,((function (map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (){
var s__15570__$1 = s__15570;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__15570__$1);
if(temp__6738__auto__){
var s__15570__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15570__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__15570__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__15572 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__15571 = (0);
while(true){
if((i__15571 < size__8621__auto__)){
var vec__15595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__15571);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15595,(1),null);
cljs.core.chunk_append(b__15572,(function (){var G__15598 = (function (){var G__15599 = cljs.core.cst$kw$css;
var G__15600 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__15601 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (i__15571,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (){
var G__15602 = h;
var G__15603 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2 ? wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(G__15602,G__15603) : wheel.link.hoplon.external.call(null,G__15602,G__15603));
});})(i__15571,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (i__15571,con__14913__auto__,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__15571,con__14913__auto__,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (i__15571,con__14913__auto__,alt__14914__auto__,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__15604 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15604) : cljs.core.deref.call(null,G__15604));
});})(i__15571,con__14913__auto__,alt__14914__auto__,G__15599,G__15600,vec__15595,f,h,c__8620__auto__,size__8621__auto__,b__15572,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15599,G__15600,G__15601) : hoplon.core.div.call(null,G__15599,G__15600,G__15601));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__15598) : hoplon.core.div.call(null,G__15598));
})());

var G__15618 = (i__15571 + (1));
i__15571 = G__15618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15572),social$hoplon$iter__15569(cljs.core.chunk_rest(s__15570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15572),null);
}
} else {
var vec__15605 = cljs.core.first(s__15570__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15605,(1),null);
return cljs.core.cons((function (){var G__15608 = (function (){var G__15609 = cljs.core.cst$kw$css;
var G__15610 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__15611 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (){
var G__15612 = h;
var G__15613 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2 ? wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(G__15612,G__15613) : wheel.link.hoplon.external.call(null,G__15612,G__15613));
});})(G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14913__auto__,G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__15614 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15614) : cljs.core.deref.call(null,G__15614));
});})(con__14913__auto__,alt__14914__auto__,G__15609,G__15610,vec__15605,f,h,s__15570__$2,temp__6738__auto__,map__15567,map__15567__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15609,G__15610,G__15611) : hoplon.core.div.call(null,G__15609,G__15610,G__15611));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__15608) : hoplon.core.div.call(null,G__15608));
})(),social$hoplon$iter__15569(cljs.core.rest(s__15570__$2)));
}
} else {
return null;
}
break;
}
});})(map__15567,map__15567__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__15567,map__15567__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq15565){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15565));
});

