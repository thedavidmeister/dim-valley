// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___20585 = arguments.length;
var i__8982__auto___20586 = (0);
while(true){
if((i__8982__auto___20586 < len__8981__auto___20585)){
args__8988__auto__.push((arguments[i__8982__auto___20586]));

var G__20587 = (i__8982__auto___20586 + (1));
i__8982__auto___20586 = G__20587;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__20544){
var map__20545 = p__20544;
var map__20545__$1 = ((((!((map__20545 == null)))?((((map__20545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20545):map__20545);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20545__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20545__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20545__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20545__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__20547(s__20548){
return (new cljs.core.LazySeq(null,((function (map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (){
var s__20548__$1 = s__20548;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20548__$1);
if(temp__6738__auto__){
var s__20548__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20548__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__20548__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__20550 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__20549 = (0);
while(true){
if((i__20549 < size__8621__auto__)){
var vec__20569 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__20549);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20569,(1),null);
cljs.core.chunk_append(b__20550,(function (){var G__20572 = (function (){var G__20573 = cljs.core.cst$kw$css;
var G__20574 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__20575 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (i__20549,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__20549,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (i__20549,con__14913__auto__,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__20549,con__14913__auto__,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (i__20549,con__14913__auto__,alt__14914__auto__,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__20576 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20576) : cljs.core.deref.call(null,G__20576));
});})(i__20549,con__14913__auto__,alt__14914__auto__,G__20573,G__20574,vec__20569,f,h,c__8620__auto__,size__8621__auto__,b__20550,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20573,G__20574,G__20575) : hoplon.core.div.call(null,G__20573,G__20574,G__20575));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20572) : hoplon.core.div.call(null,G__20572));
})());

var G__20588 = (i__20549 + (1));
i__20549 = G__20588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20550),social$hoplon$iter__20547(cljs.core.chunk_rest(s__20548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20550),null);
}
} else {
var vec__20577 = cljs.core.first(s__20548__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20577,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20577,(1),null);
return cljs.core.cons((function (){var G__20580 = (function (){var G__20581 = cljs.core.cst$kw$css;
var G__20582 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__20583 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14913__auto__,G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__20584 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20584) : cljs.core.deref.call(null,G__20584));
});})(con__14913__auto__,alt__14914__auto__,G__20581,G__20582,vec__20577,f,h,s__20548__$2,temp__6738__auto__,map__20545,map__20545__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20581,G__20582,G__20583) : hoplon.core.div.call(null,G__20581,G__20582,G__20583));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__20580) : hoplon.core.div.call(null,G__20580));
})(),social$hoplon$iter__20547(cljs.core.rest(s__20548__$2)));
}
} else {
return null;
}
break;
}
});})(map__20545,map__20545__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__20545,map__20545__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq20543){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20543));
});

