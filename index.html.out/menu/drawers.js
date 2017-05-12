// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__7957__auto__ = [];
var len__7950__auto___10035 = arguments.length;
var i__7951__auto___10036 = (0);
while(true){
if((i__7951__auto___10036 < len__7950__auto___10035)){
args__7957__auto__.push((arguments[i__7951__auto___10036]));

var G__10037 = (i__7951__auto___10036 + (1));
i__7951__auto___10036 = G__10037;
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

menu.drawers.drawers.cljs$lang$applyTo = (function (seq10034){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10034));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__7957__auto__ = [];
var len__7950__auto___10047 = arguments.length;
var i__7951__auto___10048 = (0);
while(true){
if((i__7951__auto___10048 < len__7950__auto___10047)){
args__7957__auto__.push((arguments[i__7951__auto___10048]));

var G__10049 = (i__7951__auto___10048 + (1));
i__7951__auto___10048 = G__10049;
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
return (function (G__10043,G__10041,G__10042){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__10041),cljs.core.str("s ease "),cljs.core.str((cljs.core.truth_(G__10042)?G__10041:(0))),cljs.core.str("s")].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translateX("),cljs.core.str((cljs.core.truth_(G__10042)?"0px":G__10043)),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(G__10042)?(1):(0)),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(G__10042)?"relative":"absolute"),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});})(transition_length))
).call(null,offset,transition_length,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",children));
javelin.core.formula.call(null,((function (el,transition_length){
return (function (G__10046,G__10045,G__10044){
if(cljs.core.truth_(G__10044)){
return jQuery("html, body").animate(G__10045.call(null,new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null)),G__10046);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq10038){
var G__10039 = cljs.core.first.call(null,seq10038);
var seq10038__$1 = cljs.core.next.call(null,seq10038);
var G__10040 = cljs.core.first.call(null,seq10038__$1);
var seq10038__$2 = cljs.core.next.call(null,seq10038__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__10039,G__10040,seq10038__$2);
});


//# sourceMappingURL=drawers.js.map