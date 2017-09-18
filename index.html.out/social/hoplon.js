// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('social.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('icon.hoplon');
goog.require('hoplon.core');
social.hoplon.icon_links = (function social$hoplon$icon_links(var_args){
var args__9922__auto__ = [];
var len__9915__auto___25736 = arguments.length;
var i__9916__auto___25737 = (0);
while(true){
if((i__9916__auto___25737 < len__9915__auto___25736)){
args__9922__auto__.push((arguments[i__9916__auto___25737]));

var G__25738 = (i__9916__auto___25737 + (1));
i__9916__auto___25737 = G__25738;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic = (function (p__25713){
var map__25714 = p__25713;
var map__25714__$1 = ((((!((map__25714 == null)))?((((map__25714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25714):map__25714);
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25714__$1,cljs.core.cst$kw$linkedin);
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25714__$1,cljs.core.cst$kw$github);
var medium = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25714__$1,cljs.core.cst$kw$medium);
var twitter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25714__$1,cljs.core.cst$kw$twitter);
var iter__9520__auto__ = ((function (map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function social$hoplon$iter__25716(s__25717){
return (new cljs.core.LazySeq(null,((function (map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (){
var s__25717__$1 = s__25717;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__25717__$1);
if(temp__5290__auto__){
var s__25717__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25717__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__25717__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__25719 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__25718 = (0);
while(true){
if((i__25718 < size__9519__auto__)){
var vec__25720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__25718);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25720,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25720,(1),null);
cljs.core.chunk_append(b__25719,(function (){var G__25723 = (function (){var G__25724 = cljs.core.cst$kw$css;
var G__25725 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25726 = (function (){var con__18923__auto__ = (new cljs.core.Delay(((function (i__25718,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(i__25718,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
,null));
var alt__18924__auto__ = (new cljs.core.Delay(((function (i__25718,con__18923__auto__,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(i__25718,con__18923__auto__,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
,null));
var tpl__18925__auto__ = ((function (i__25718,con__18923__auto__,alt__18924__auto__,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (p__18926__auto__){
return cljs.core.deref((function (){var or__8638__auto__ = (cljs.core.truth_(p__18926__auto__)?con__18923__auto__:alt__18924__auto__);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(i__25718,con__18923__auto__,alt__18924__auto__,G__25724,G__25725,vec__25720,f,h,c__9518__auto__,size__9519__auto__,b__25719,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
;
var fexpr__25727 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18925__auto__);
return (fexpr__25727.cljs$core$IFn$_invoke$arity$1 ? fexpr__25727.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25727.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25724,G__25725,G__25726) : hoplon.core.div.call(null,G__25724,G__25725,G__25726));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25723) : hoplon.core.div.call(null,G__25723));
})());

var G__25739 = (i__25718 + (1));
i__25718 = G__25739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25719),social$hoplon$iter__25716(cljs.core.chunk_rest(s__25717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25719),null);
}
} else {
var vec__25728 = cljs.core.first(s__25717__$2);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25728,(1),null);
return cljs.core.cons((function (){var G__25731 = (function (){var G__25732 = cljs.core.cst$kw$css;
var G__25733 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_right,"12px",cljs.core.cst$kw$float,"left"], null);
var G__25734 = (function (){var con__18923__auto__ = (new cljs.core.Delay(((function (G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (){
return wheel.link.hoplon.external.cljs$core$IFn$_invoke$arity$2(h,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});})(G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
,null));
var alt__18924__auto__ = (new cljs.core.Delay(((function (con__18923__auto__,G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (){
return null;
});})(con__18923__auto__,G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
,null));
var tpl__18925__auto__ = ((function (con__18923__auto__,alt__18924__auto__,G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter){
return (function (p__18926__auto__){
return cljs.core.deref((function (){var or__8638__auto__ = (cljs.core.truth_(p__18926__auto__)?con__18923__auto__:alt__18924__auto__);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18923__auto__,alt__18924__auto__,G__25732,G__25733,vec__25728,f,h,s__25717__$2,temp__5290__auto__,map__25714,map__25714__$1,linkedin,github,medium,twitter))
;
var fexpr__25735 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18925__auto__);
return (fexpr__25735.cljs$core$IFn$_invoke$arity$1 ? fexpr__25735.cljs$core$IFn$_invoke$arity$1(h) : fexpr__25735.call(null,h));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25732,G__25733,G__25734) : hoplon.core.div.call(null,G__25732,G__25733,G__25734));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25731) : hoplon.core.div.call(null,G__25731));
})(),social$hoplon$iter__25716(cljs.core.rest(s__25717__$2)));
}
} else {
return null;
}
break;
}
});})(map__25714,map__25714__$1,linkedin,github,medium,twitter))
,null,null));
});})(map__25714,map__25714__$1,linkedin,github,medium,twitter))
;
return iter__9520__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.linkedin,linkedin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.github,github], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.medium,medium], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon.hoplon.twitter,twitter], null)], null));
});

social.hoplon.icon_links.cljs$lang$maxFixedArity = (0);

social.hoplon.icon_links.cljs$lang$applyTo = (function (seq25712){
return social.hoplon.icon_links.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25712));
});

