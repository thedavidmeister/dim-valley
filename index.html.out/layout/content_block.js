// Compiled by ClojureScript 1.9.293 {}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('layout.config');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9271 = arguments.length;
var i__7951__auto___9272 = (0);
while(true){
if((i__7951__auto___9272 < len__7950__auto___9271)){
args__7957__auto__.push((arguments[i__7951__auto___9272]));

var G__9273 = (i__7951__auto___9272 + (1));
i__7951__auto___9272 = G__9273;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"4px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dotted",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cljs.core.last.call(null,colours.ui_gradients.stops.call(null)),new cljs.core.Keyword(null,"border-image-source","border-image-source",1924962862),"url('border-dots.svg')",new cljs.core.Keyword(null,"border-image-slice","border-image-slice",-4957056),"33% 33%",new cljs.core.Keyword(null,"border-image-repeat","border-image-repeat",-1007131119),"round",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"none"], null),children);
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq9270){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9270));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9275 = arguments.length;
var i__7951__auto___9276 = (0);
while(true){
if((i__7951__auto___9276 < len__7950__auto___9275)){
args__7957__auto__.push((arguments[i__7951__auto___9276]));

var G__9277 = (i__7951__auto___9276 + (1));
i__7951__auto___9276 = G__9277;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),layout.config.spacer_width,new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",children);
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq9274){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9274));
});


//# sourceMappingURL=content_block.js.map