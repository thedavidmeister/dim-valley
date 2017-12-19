// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__9524__auto__ = [];
var len__9517__auto___25511 = arguments.length;
var i__9518__auto___25512 = (0);
while(true){
if((i__9518__auto___25512 < len__9517__auto___25511)){
args__9524__auto__.push((arguments[i__9518__auto___25512]));

var G__25513 = (i__9518__auto___25512 + (1));
i__9518__auto___25512 = G__25513;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__25488){
var map__25489 = p__25488;
var map__25489__$1 = ((((!((map__25489 == null)))?((((map__25489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25489):map__25489);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25489__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25489__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25489__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25489__$1,cljs.core.cst$kw$twitter);
var iter__9122__auto__ = ((function (map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__25491(s__25492){
return (new cljs.core.LazySeq(null,((function (map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (){
var s__25492__$1 = s__25492;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__25492__$1);
if(temp__5290__auto__){
var s__25492__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25492__$2)){
var c__9120__auto__ = cljs.core.chunk_first(s__25492__$2);
var size__9121__auto__ = cljs.core.count(c__9120__auto__);
var b__25494 = cljs.core.chunk_buffer(size__9121__auto__);
if((function (){var i__25493 = (0);
while(true){
if((i__25493 < size__9121__auto__)){
var vec__25495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9120__auto__,i__25493);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25495,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25495,(1),null);
cljs.core.chunk_append(b__25494,(function (){var G__25498 = (function (){var G__25499 = cljs.core.cst$kw$css;
var G__25500 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25501 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (i__25493,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__25493,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (i__25493,con__18530__auto__,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__25493,con__18530__auto__,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
,null));
var tpl__18532__auto__ = ((function (i__25493,con__18530__auto__,alt__18531__auto__,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(i__25493,con__18530__auto__,alt__18531__auto__,G__25499,G__25500,vec__25495,f,h,c__9120__auto__,size__9121__auto__,b__25494,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
;
var fexpr__25502 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25502.cljs$core$IFn$_invoke$arity$1 ? fexpr__25502.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25502.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25499,G__25500,G__25501) : hoplon.core.div.call(null,G__25499,G__25500,G__25501));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25498) : hoplon.core.div.call(null,G__25498));
})());

var G__25514 = (i__25493 + (1));
i__25493 = G__25514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25494),social$hoplon$iter__25491(cljs.core.chunk_rest(s__25492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25494),null);
}
} else {
var vec__25503 = cljs.core.first(s__25492__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25503,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25503,(1),null);
return cljs.core.cons((function (){var G__25506 = (function (){var G__25507 = cljs.core.cst$kw$css;
var G__25508 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25509 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__18530__auto__,G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18530__auto__,alt__18531__auto__,G__25507,G__25508,vec__25503,f,h,s__25492__$2,temp__5290__auto__,map__25489,map__25489__$1,linkedin,github,medium,twitter))
;
var fexpr__25510 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25510.cljs$core$IFn$_invoke$arity$1 ? fexpr__25510.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25510.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25507,G__25508,G__25509) : hoplon.core.div.call(null,G__25507,G__25508,G__25509));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25506) : hoplon.core.div.call(null,G__25506));
})(),social$hoplon$iter__25491(cljs.core.rest(s__25492__$2)));
}
} else {
return null;
}
break;
}
});})(map__25489,map__25489__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__25489,map__25489__$1,linkedin,github,medium,twitter))
;
return iter__9122__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq25487){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25487));
});

