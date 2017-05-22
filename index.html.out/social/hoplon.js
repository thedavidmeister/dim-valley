// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24544 = arguments.length;
var i__8982__auto___24545 = (0);
while(true){
if((i__8982__auto___24545 < len__8981__auto___24544)){
args__8988__auto__.push((arguments[i__8982__auto___24545]));

var G__24546 = (i__8982__auto___24545 + (1));
i__8982__auto___24545 = G__24546;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__24503){
var map__24504 = p__24503;
var map__24504__$1 = ((((!((map__24504 == null)))?((((map__24504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24504):map__24504);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24504__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__24506(s__24507){
return (new cljs.core.LazySeq(null,((function (map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (){
var s__24507__$1 = s__24507;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__24507__$1);
if(temp__6738__auto__){
var s__24507__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24507__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__24507__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__24509 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__24508 = (0);
while(true){
if((i__24508 < size__8621__auto__)){
var vec__24528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__24508);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24528,(1),null);
cljs.core.chunk_append(b__24509,(function (){var G__24531 = (function (){var G__24532 = cljs.core.cst$kw$css;
var G__24533 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24534 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (i__24508,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__24508,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (i__24508,con__14913__auto__,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__24508,con__14913__auto__,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (i__24508,con__14913__auto__,alt__14914__auto__,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__24535 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24535) : cljs.core.deref.call(null,G__24535));
});})(i__24508,con__14913__auto__,alt__14914__auto__,G__24532,G__24533,vec__24528,f,h,c__8620__auto__,size__8621__auto__,b__24509,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24532,G__24533,G__24534) : hoplon.core.div.call(null,G__24532,G__24533,G__24534));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24531) : hoplon.core.div.call(null,G__24531));
})());

var G__24547 = (i__24508 + (1));
i__24508 = G__24547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24509),social$hoplon$iter__24506(cljs.core.chunk_rest(s__24507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24509),null);
}
} else {
var vec__24536 = cljs.core.first(s__24507__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24536,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24536,(1),null);
return cljs.core.cons((function (){var G__24539 = (function (){var G__24540 = cljs.core.cst$kw$css;
var G__24541 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24542 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14913__auto__,G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__24543 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24543) : cljs.core.deref.call(null,G__24543));
});})(con__14913__auto__,alt__14914__auto__,G__24540,G__24541,vec__24536,f,h,s__24507__$2,temp__6738__auto__,map__24504,map__24504__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24540,G__24541,G__24542) : hoplon.core.div.call(null,G__24540,G__24541,G__24542));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24539) : hoplon.core.div.call(null,G__24539));
})(),social$hoplon$iter__24506(cljs.core.rest(s__24507__$2)));
}
} else {
return null;
}
break;
}
});})(map__24504,map__24504__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__24504,map__24504__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq24502){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24502));
});

