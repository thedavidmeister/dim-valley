// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24539 = arguments.length;
var i__8982__auto___24540 = (0);
while(true){
if((i__8982__auto___24540 < len__8981__auto___24539)){
args__8988__auto__.push((arguments[i__8982__auto___24540]));

var G__24541 = (i__8982__auto___24540 + (1));
i__8982__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__24498){
var map__24499 = p__24498;
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24499):map__24499);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24499__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24499__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24499__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24499__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__24501(s__24502){
return (new cljs.core.LazySeq(null,((function (map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (){
var s__24502__$1 = s__24502;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__24502__$1);
if(temp__6738__auto__){
var s__24502__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24502__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__24502__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__24504 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__24503 = (0);
while(true){
if((i__24503 < size__8621__auto__)){
var vec__24523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__24503);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24523,(1),null);
cljs.core.chunk_append(b__24504,(function (){var G__24526 = (function (){var G__24527 = cljs.core.cst$kw$css;
var G__24528 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24529 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (i__24503,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__24503,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (i__24503,con__14915__auto__,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__24503,con__14915__auto__,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
,null));
var tpl__14917__auto__ = ((function (i__24503,con__14915__auto__,alt__14916__auto__,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (p__14918__auto__){
var G__24530 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24530) : cljs.core.deref.call(null,G__24530));
});})(i__24503,con__14915__auto__,alt__14916__auto__,G__24527,G__24528,vec__24523,f,h,c__8620__auto__,size__8621__auto__,b__24504,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24527,G__24528,G__24529) : hoplon.core.div.call(null,G__24527,G__24528,G__24529));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24526) : hoplon.core.div.call(null,G__24526));
})());

var G__24542 = (i__24503 + (1));
i__24503 = G__24542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24504),social$hoplon$iter__24501(cljs.core.chunk_rest(s__24502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24504),null);
}
} else {
var vec__24531 = cljs.core.first(s__24502__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24531,(1),null);
return cljs.core.cons((function (){var G__24534 = (function (){var G__24535 = cljs.core.cst$kw$css;
var G__24536 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24537 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14915__auto__,G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter){
return (function (p__14918__auto__){
var G__24538 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24538) : cljs.core.deref.call(null,G__24538));
});})(con__14915__auto__,alt__14916__auto__,G__24535,G__24536,vec__24531,f,h,s__24502__$2,temp__6738__auto__,map__24499,map__24499__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24535,G__24536,G__24537) : hoplon.core.div.call(null,G__24535,G__24536,G__24537));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24534) : hoplon.core.div.call(null,G__24534));
})(),social$hoplon$iter__24501(cljs.core.rest(s__24502__$2)));
}
} else {
return null;
}
break;
}
});})(map__24499,map__24499__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__24499,map__24499__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq24497){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24497));
});

