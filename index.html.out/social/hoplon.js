// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25571 = arguments.length;
var i__9520__auto___25572 = (0);
while(true){
if((i__9520__auto___25572 < len__9519__auto___25571)){
args__9526__auto__.push((arguments[i__9520__auto___25572]));

var G__25573 = (i__9520__auto___25572 + (1));
i__9520__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__25548){
var map__25549 = p__25548;
var map__25549__$1 = ((((!((map__25549 == null)))?((((map__25549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25549):map__25549);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25549__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25549__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25549__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25549__$1,cljs.core.cst$kw$twitter);
var iter__9124__auto__ = ((function (map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__25551(s__25552){
return (new cljs.core.LazySeq(null,((function (map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (){
var s__25552__$1 = s__25552;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__25552__$1);
if(temp__5290__auto__){
var s__25552__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25552__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__25552__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__25554 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__25553 = (0);
while(true){
if((i__25553 < size__9123__auto__)){
var vec__25555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__25553);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25555,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25555,(1),null);
cljs.core.chunk_append(b__25554,(function (){var G__25558 = (function (){var G__25559 = cljs.core.cst$kw$css;
var G__25560 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25561 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (i__25553,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__25553,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (i__25553,con__18532__auto__,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__25553,con__18532__auto__,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
,null));
var tpl__18534__auto__ = ((function (i__25553,con__18532__auto__,alt__18533__auto__,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(i__25553,con__18532__auto__,alt__18533__auto__,G__25559,G__25560,vec__25555,f,h,c__9122__auto__,size__9123__auto__,b__25554,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
;
var fexpr__25562 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25562.cljs$core$IFn$_invoke$arity$1 ? fexpr__25562.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25562.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25559,G__25560,G__25561) : hoplon.core.div.call(null,G__25559,G__25560,G__25561));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25558) : hoplon.core.div.call(null,G__25558));
})());

var G__25574 = (i__25553 + (1));
i__25553 = G__25574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25554),social$hoplon$iter__25551(cljs.core.chunk_rest(s__25552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25554),null);
}
} else {
var vec__25563 = cljs.core.first(s__25552__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25563,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25563,(1),null);
return cljs.core.cons((function (){var G__25566 = (function (){var G__25567 = cljs.core.cst$kw$css;
var G__25568 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25569 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (con__18532__auto__,G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__18532__auto__,G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
,null));
var tpl__18534__auto__ = ((function (con__18532__auto__,alt__18533__auto__,G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18532__auto__,alt__18533__auto__,G__25567,G__25568,vec__25563,f,h,s__25552__$2,temp__5290__auto__,map__25549,map__25549__$1,linkedin,github,medium,twitter))
;
var fexpr__25570 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25570.cljs$core$IFn$_invoke$arity$1 ? fexpr__25570.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25570.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25567,G__25568,G__25569) : hoplon.core.div.call(null,G__25567,G__25568,G__25569));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25566) : hoplon.core.div.call(null,G__25566));
})(),social$hoplon$iter__25551(cljs.core.rest(s__25552__$2)));
}
} else {
return null;
}
break;
}
});})(map__25549,map__25549__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__25549,map__25549__$1,linkedin,github,medium,twitter))
;
return iter__9124__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq25547){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25547));
});

