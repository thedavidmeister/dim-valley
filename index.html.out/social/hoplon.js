// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21310 = arguments.length;
var i__8982__auto___21311 = (0);
while(true){
if((i__8982__auto___21311 < len__8981__auto___21310)){
args__8988__auto__.push((arguments[i__8982__auto___21311]));

var G__21312 = (i__8982__auto___21311 + (1));
i__8982__auto___21311 = G__21312;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__21269){
var map__21270 = p__21269;
var map__21270__$1 = ((((!((map__21270 == null)))?((((map__21270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21270):map__21270);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21270__$1,cljs.core.cst$kw$twitter);
var iter__8622__auto__ = ((function (map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__21272(s__21273){
return (new cljs.core.LazySeq(null,((function (map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (){
var s__21273__$1 = s__21273;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21273__$1);
if(temp__6738__auto__){
var s__21273__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21273__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__21273__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__21275 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__21274 = (0);
while(true){
if((i__21274 < size__8621__auto__)){
var vec__21294 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__21274);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21294,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21294,(1),null);
cljs.core.chunk_append(b__21275,(function (){var G__21297 = (function (){var G__21298 = cljs.core.cst$kw$css;
var G__21299 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__21300 = (function (){var con__17347__auto__ = (new cljs.core.Delay(((function (i__21274,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__21274,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
,null));
var alt__17348__auto__ = (new cljs.core.Delay(((function (i__21274,con__17347__auto__,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__21274,con__17347__auto__,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
,null));
var tpl__17349__auto__ = ((function (i__21274,con__17347__auto__,alt__17348__auto__,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (p__17350__auto__){
var G__21301 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__17350__auto__)?con__17347__auto__:alt__17348__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21301) : cljs.core.deref.call(null,G__21301));
});})(i__21274,con__17347__auto__,alt__17348__auto__,G__21298,G__21299,vec__21294,f,h,c__8620__auto__,size__8621__auto__,b__21275,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__17349__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21298,G__21299,G__21300) : hoplon.core.div.call(null,G__21298,G__21299,G__21300));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__21297) : hoplon.core.div.call(null,G__21297));
})());

var G__21313 = (i__21274 + (1));
i__21274 = G__21313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21275),social$hoplon$iter__21272(cljs.core.chunk_rest(s__21273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21275),null);
}
} else {
var vec__21302 = cljs.core.first(s__21273__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,(1),null);
return cljs.core.cons((function (){var G__21305 = (function (){var G__21306 = cljs.core.cst$kw$css;
var G__21307 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__21308 = (function (){var con__17347__auto__ = (new cljs.core.Delay(((function (G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
,null));
var alt__17348__auto__ = (new cljs.core.Delay(((function (con__17347__auto__,G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__17347__auto__,G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
,null));
var tpl__17349__auto__ = ((function (con__17347__auto__,alt__17348__auto__,G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter){
return (function (p__17350__auto__){
var G__21309 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__17350__auto__)?con__17347__auto__:alt__17348__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21309) : cljs.core.deref.call(null,G__21309));
});})(con__17347__auto__,alt__17348__auto__,G__21306,G__21307,vec__21302,f,h,s__21273__$2,temp__6738__auto__,map__21270,map__21270__$1,linkedin,github,medium,twitter))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__17349__auto__).call(null,h);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21306,G__21307,G__21308) : hoplon.core.div.call(null,G__21306,G__21307,G__21308));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__21305) : hoplon.core.div.call(null,G__21305));
})(),social$hoplon$iter__21272(cljs.core.rest(s__21273__$2)));
}
} else {
return null;
}
break;
}
});})(map__21270,map__21270__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__21270,map__21270__$1,linkedin,github,medium,twitter))
;
return iter__8622__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq21268){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21268));
});

