// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__7957__auto__ = [];
var len__7950__auto___10038 = arguments.length;
var i__7951__auto___10039 = (0);
while(true){
if((i__7951__auto___10039 < len__7950__auto___10038)){
args__7957__auto__.push((arguments[i__7951__auto___10039]));

var G__10040 = (i__7951__auto___10039 + (1));
i__7951__auto___10039 = G__10040;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),children);
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq10037){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10037));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__7957__auto__ = [];
var len__7950__auto___10051 = arguments.length;
var i__7951__auto___10052 = (0);
while(true){
if((i__7951__auto___10052 < len__7950__auto___10051)){
args__7957__auto__.push((arguments[i__7951__auto___10052]));

var G__10053 = (i__7951__auto___10052 + (1));
i__7951__auto___10052 = G__10053;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((2) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7958__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_length){
return (function (G__10047,G__10044,G__10045,G__10046){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__10044),cljs.core.str("s "),cljs.core.str(new cljs.core.Keyword(null,"ease-out-quart","ease-out-quart",1583370489).cljs$core$IFn$_invoke$arity$1(G__10045)),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(G__10046)?G__10044:(0))),cljs.core.str("s")].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translateX("),cljs.core.str((cljs.core.truth_(G__10046)?"0px":G__10047)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(G__10046)?(1):(0)),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(G__10046)?"relative":"absolute"),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});})(transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",children));
javelin.core.formula.call(null,((function (el,transition_length){
return (function (G__10050,G__10049,G__10048){
if(cljs.core.truth_(G__10048)){
return jQuery("html, body").animate(G__10049.call(null,new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null)),G__10050);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq10041){
var G__10042 = cljs.core.first.call(null,seq10041);
var seq10041__$1 = cljs.core.next.call(null,seq10041);
var G__10043 = cljs.core.first.call(null,seq10041__$1);
var seq10041__$2 = cljs.core.next.call(null,seq10041__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__10042,G__10043,seq10041__$2);
});


//# sourceMappingURL=drawers.js.map