// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24598 = arguments.length;
var i__8982__auto___24599 = (0);
while(true){
if((i__8982__auto___24599 < len__8981__auto___24598)){
args__8988__auto__.push((arguments[i__8982__auto___24599]));

var G__24600 = (i__8982__auto___24599 + (1));
i__8982__auto___24599 = G__24600;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__24557){
var map__24558 = p__24557;
var map__24558__$1 = ((((!((map__24558 == null)))?((((map__24558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24558):map__24558);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24558__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__24560(s__24561){
return (new cljs.core.LazySeq(null,((function (map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (){
var s__24561__$1 = s__24561;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__24561__$1);
if(temp__6738__auto__){
var s__24561__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24561__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__24561__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__24563 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__24562 = (0);
while(true){
if((i__24562 < size__8621__auto__)){
var vec__24582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__24562);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24582,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24582,(1),null);
cljs.core.chunk_append(b__24563,(function (){var G__24585 = (function (){var G__24586 = cljs.core.cst$kw$css;
var G__24587 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24588 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (i__24562,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__24562,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (i__24562,con__14913__auto__,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__24562,con__14913__auto__,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (i__24562,con__14913__auto__,alt__14914__auto__,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__24589 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24589) : cljs.core.deref.call(null,G__24589));
});})(i__24562,con__14913__auto__,alt__14914__auto__,G__24586,G__24587,vec__24582,f,h,c__8620__auto__,size__8621__auto__,b__24563,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24586,G__24587,G__24588) : hoplon.core.div.call(null,G__24586,G__24587,G__24588));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24585) : hoplon.core.div.call(null,G__24585));
})());

var G__24601 = (i__24562 + (1));
i__24562 = G__24601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24563),social$hoplon$iter__24560(cljs.core.chunk_rest(s__24561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24563),null);
}
} else {
var vec__24590 = cljs.core.first(s__24561__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590,(1),null);
return cljs.core.cons((function (){var G__24593 = (function (){var G__24594 = cljs.core.cst$kw$css;
var G__24595 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__24596 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__14913__auto__,G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter){
return (function (p__14916__auto__){
var G__24597 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24597) : cljs.core.deref.call(null,G__24597));
});})(con__14913__auto__,alt__14914__auto__,G__24594,G__24595,vec__24590,f,h,s__24561__$2,temp__6738__auto__,map__24558,map__24558__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24594,G__24595,G__24596) : hoplon.core.div.call(null,G__24594,G__24595,G__24596));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24593) : hoplon.core.div.call(null,G__24593));
})(),social$hoplon$iter__24560(cljs.core.rest(s__24561__$2)));
}
} else {
return null;
}
break;
}
});})(map__24558,map__24558__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__24558,map__24558__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq24556){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24556));
});

