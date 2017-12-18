// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___25483 = arguments.length;
var i__9518__auto___25484 = (0);
while(true){
if((i__9518__auto___25484 < len__9517__auto___25483)){
args__9524__auto__.push((arguments[i__9518__auto___25484]));

var G__25485 = (i__9518__auto___25484 + (1));
i__9518__auto___25484 = G__25485;
=======
var args__9526__auto__ = [];
var len__9519__auto___25483 = arguments.length;
var i__9520__auto___25484 = (0);
while(true){
if((i__9520__auto___25484 < len__9519__auto___25483)){
args__9526__auto__.push((arguments[i__9520__auto___25484]));

var G__25485 = (i__9520__auto___25484 + (1));
i__9520__auto___25484 = G__25485;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__25460){
var map__25461 = p__25460;
var map__25461__$1 = ((((!((map__25461 == null)))?((((map__25461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25461):map__25461);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25461__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25461__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25461__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25461__$1,cljs.core.cst$kw$twitter);
<<<<<<< HEAD
var iter__9122__auto__ = ((function (map__25461,map__25461__$1,linkedin,github,medium,twitter){
=======
var iter__9124__auto__ = ((function (map__25461,map__25461__$1,linkedin,github,medium,twitter){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function social$hoplon$iter__25463(s__25464){
return (new cljs.core.LazySeq(null,((function (map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
var s__25464__$1 = s__25464;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__25464__$1);
if(temp__5290__auto__){
var s__25464__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25464__$2)){
<<<<<<< HEAD
var c__9120__auto__ = cljs.core.chunk_first(s__25464__$2);
var size__9121__auto__ = cljs.core.count(c__9120__auto__);
var b__25466 = cljs.core.chunk_buffer(size__9121__auto__);
if((function (){var i__25465 = (0);
while(true){
if((i__25465 < size__9121__auto__)){
var vec__25467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9120__auto__,i__25465);
=======
var c__9122__auto__ = cljs.core.chunk_first(s__25464__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__25466 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__25465 = (0);
while(true){
if((i__25465 < size__9123__auto__)){
var vec__25467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__25465);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25467,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25467,(1),null);
cljs.core.chunk_append(b__25466,(function (){var G__25470 = (function (){var G__25471 = cljs.core.cst$kw$css;
var G__25472 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
<<<<<<< HEAD
var G__25473 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (i__25465,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__25465,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (i__25465,con__18530__auto__,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__25465,con__18530__auto__,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var tpl__18532__auto__ = ((function (i__25465,con__18530__auto__,alt__18531__auto__,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var G__25473 = (function (){var con__19694__auto__ = (new cljs.core.Delay(((function (i__25465,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__25465,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var alt__19695__auto__ = (new cljs.core.Delay(((function (i__25465,con__19694__auto__,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__25465,con__19694__auto__,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var tpl__19696__auto__ = ((function (i__25465,con__19694__auto__,alt__19695__auto__,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (p__19697__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__19697__auto__)?con__19694__auto__:alt__19695__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
});})(i__25465,con__18530__auto__,alt__18531__auto__,G__25471,G__25472,vec__25467,f,h,c__9120__auto__,size__9121__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
;
var fexpr__25474 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
=======
});})(i__25465,con__19694__auto__,alt__19695__auto__,G__25471,G__25472,vec__25467,f,h,c__9122__auto__,size__9123__auto__,b__25466,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
;
var fexpr__25474 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__19696__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (fexpr__25474.cljs$core$IFn$_invoke$arity$1 ? fexpr__25474.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25474.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25471,G__25472,G__25473) : hoplon.core.div.call(null,G__25471,G__25472,G__25473));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25470) : hoplon.core.div.call(null,G__25470));
})());

var G__25486 = (i__25465 + (1));
i__25465 = G__25486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25466),social$hoplon$iter__25463(cljs.core.chunk_rest(s__25464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25466),null);
}
} else {
var vec__25475 = cljs.core.first(s__25464__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(1),null);
return cljs.core.cons((function (){var G__25478 = (function (){var G__25479 = cljs.core.cst$kw$css;
var G__25480 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
<<<<<<< HEAD
var G__25481 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
=======
var G__25481 = (function (){var con__19694__auto__ = (new cljs.core.Delay(((function (G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
<<<<<<< HEAD
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__18530__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
var alt__19695__auto__ = (new cljs.core.Delay(((function (con__19694__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__19694__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null));
var tpl__19696__auto__ = ((function (con__19694__auto__,alt__19695__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter){
return (function (p__19697__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__19697__auto__)?con__19694__auto__:alt__19695__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
});})(con__18530__auto__,alt__18531__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
;
var fexpr__25482 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
=======
});})(con__19694__auto__,alt__19695__auto__,G__25479,G__25480,vec__25475,f,h,s__25464__$2,temp__5290__auto__,map__25461,map__25461__$1,linkedin,github,medium,twitter))
;
var fexpr__25482 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__19696__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (fexpr__25482.cljs$core$IFn$_invoke$arity$1 ? fexpr__25482.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25482.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25479,G__25480,G__25481) : hoplon.core.div.call(null,G__25479,G__25480,G__25481));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25478) : hoplon.core.div.call(null,G__25478));
})(),social$hoplon$iter__25463(cljs.core.rest(s__25464__$2)));
}
} else {
return null;
}
break;
}
});})(map__25461,map__25461__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__25461,map__25461__$1,linkedin,github,medium,twitter))
;
return iter__9122__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq25459){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25459));
});

