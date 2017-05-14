// Compiled by ClojureScript 1.9.542 {}
goog.provide('layout.content_block');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('layout.config');
goog.require('colours.ui_gradients');
layout.content_block.content_outer = (function layout$content_block$content_outer(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13387 = arguments.length;
var i__8307__auto___13388 = (0);
while(true){
if((i__8307__auto___13388 < len__8306__auto___13387)){
args__8313__auto__.push((arguments[i__8307__auto___13388]));

var G__13389 = (i__8307__auto___13388 + (1));
i__8307__auto___13388 = G__13389;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"4px",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dotted",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cljs.core.last.call(null,colours.ui_gradients.stops.call(null)),new cljs.core.Keyword(null,"border-image-source","border-image-source",1924962862),"url('border-dots.svg')",new cljs.core.Keyword(null,"border-image-slice","border-image-slice",-4957056),"33% 33%",new cljs.core.Keyword(null,"border-image-repeat","border-image-repeat",-1007131119),"round",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"none"], null),children);
});

layout.content_block.content_outer.cljs$lang$maxFixedArity = (0);

layout.content_block.content_outer.cljs$lang$applyTo = (function (seq13386){
return layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13386));
});

layout.content_block.content_inner = (function layout$content_block$content_inner(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13391 = arguments.length;
var i__8307__auto___13392 = (0);
while(true){
if((i__8307__auto___13392 < len__8306__auto___13391)){
args__8313__auto__.push((arguments[i__8307__auto___13392]));

var G__13393 = (i__8307__auto___13392 + (1));
i__8307__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),layout.config.spacer_width,new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null),new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",children);
});

layout.content_block.content_inner.cljs$lang$maxFixedArity = (0);

layout.content_block.content_inner.cljs$lang$applyTo = (function (seq13390){
return layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13390));
});


//# sourceMappingURL=content_block.js.map