// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24562 = arguments.length;
var i__8982__auto___24563 = (0);
while(true){
if((i__8982__auto___24563 < len__8981__auto___24562)){
args__8988__auto__.push((arguments[i__8982__auto___24563]));

var G__24564 = (i__8982__auto___24563 + (1));
i__8982__auto___24563 = G__24564;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__24521){
var map__24522 = p__24521;
var map__24522__$1 = ((((!((map__24522 == null)))?((((map__24522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24522):map__24522);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24522__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24522__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24522__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24522__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__24524(s__24525){
return (new cljs.core.LazySeq(null,((function (map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (){
var s__24525__$1 = s__24525;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__24525__$1);
if(temp__6738__auto__){
var s__24525__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24525__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__24525__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__24527 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__24526 = (0);
while(true){
if((i__24526 < size__8621__auto__)){
var vec__24546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__24526);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24546,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24546,(1),null);
cljs.core.chunk_append(b__24527,(function (){var G__24549 = (function (){var G__24550 = cljs.core.cst$kw$css;
var G__24551 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24552 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (i__24526,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__24526,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (i__24526,con__14915__auto__,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__24526,con__14915__auto__,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
,null));
var tpl__14917__auto__ = ((function (i__24526,con__14915__auto__,alt__14916__auto__,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (p__14918__auto__){
var G__24553 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24553) : cljs.core.deref.call(null,G__24553));
});})(i__24526,con__14915__auto__,alt__14916__auto__,G__24550,G__24551,vec__24546,f,h,c__8620__auto__,size__8621__auto__,b__24527,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24550,G__24551,G__24552) : hoplon.core.div.call(null,G__24550,G__24551,G__24552));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24549) : hoplon.core.div.call(null,G__24549));
})());

var G__24565 = (i__24526 + (1));
i__24526 = G__24565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24527),social$hoplon$iter__24524(cljs.core.chunk_rest(s__24525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24527),null);
}
} else {
var vec__24554 = cljs.core.first(s__24525__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24554,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24554,(1),null);
return cljs.core.cons((function (){var G__24557 = (function (){var G__24558 = cljs.core.cst$kw$css;
var G__24559 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24560 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14915__auto__,G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter){
return (function (p__14918__auto__){
var G__24561 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24561) : cljs.core.deref.call(null,G__24561));
});})(con__14915__auto__,alt__14916__auto__,G__24558,G__24559,vec__24554,f,h,s__24525__$2,temp__6738__auto__,map__24522,map__24522__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24558,G__24559,G__24560) : hoplon.core.div.call(null,G__24558,G__24559,G__24560));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24557) : hoplon.core.div.call(null,G__24557));
})(),social$hoplon$iter__24524(cljs.core.rest(s__24525__$2)));
}
} else {
return null;
}
break;
}
});})(map__24522,map__24522__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__24522,map__24522__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq24520){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24520));
});

