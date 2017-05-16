// Compiled by ClojureScript 1.9.521 {}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15122 = arguments.length;
var i__8982__auto___15123 = (0);
while(true){
if((i__8982__auto___15123 < len__8981__auto___15122)){
args__8988__auto__.push((arguments[i__8982__auto___15123]));

var G__15124 = (i__8982__auto___15123 + (1));
i__8982__auto___15123 = G__15124;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),children);
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq15121){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15121));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15135 = arguments.length;
var i__8982__auto___15136 = (0);
while(true){
if((i__8982__auto___15136 < len__8981__auto___15135)){
args__8988__auto__.push((arguments[i__8982__auto___15136]));

var G__15137 = (i__8982__auto___15136 + (1));
i__8982__auto___15136 = G__15137;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((2) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8989__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_length){
return (function (G__15131,G__15128,G__15129,G__15130){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15128),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ease-out-quart","ease-out-quart",1583370489).cljs$core$IFn$_invoke$arity$1(G__15129)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__15130)?G__15128:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__15130)?"0px":G__15131)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(G__15130)?(1):(0)),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(G__15130)?"relative":"absolute"),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});})(transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",children));
javelin.core.formula.call(null,((function (el,transition_length){
return (function (G__15134,G__15133,G__15132){
if(cljs.core.truth_(G__15132)){
return jQuery("html, body").animate(G__15133.call(null,new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null)),G__15134);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq15125){
var G__15126 = cljs.core.first.call(null,seq15125);
var seq15125__$1 = cljs.core.next.call(null,seq15125);
var G__15127 = cljs.core.first.call(null,seq15125__$1);
var seq15125__$2 = cljs.core.next.call(null,seq15125__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__15126,G__15127,seq15125__$2);
});


//# sourceMappingURL=drawers.js.map