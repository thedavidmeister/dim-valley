// Compiled by ClojureScript 1.9.542 {}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__8313__auto__ = [];
var len__8306__auto___14164 = arguments.length;
var i__8307__auto___14165 = (0);
while(true){
if((i__8307__auto___14165 < len__8306__auto___14164)){
args__8313__auto__.push((arguments[i__8307__auto___14165]));

var G__14166 = (i__8307__auto___14165 + (1));
i__8307__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((0) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8314__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),children);
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq14163){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14163));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8313__auto__ = [];
var len__8306__auto___14177 = arguments.length;
var i__8307__auto___14178 = (0);
while(true){
if((i__8307__auto___14178 < len__8306__auto___14177)){
args__8313__auto__.push((arguments[i__8307__auto___14178]));

var G__14179 = (i__8307__auto___14178 + (1));
i__8307__auto___14178 = G__14179;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((2) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8314__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_length){
return (function (G__14173,G__14170,G__14171,G__14172){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14170),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ease-out-quart","ease-out-quart",1583370489).cljs$core$IFn$_invoke$arity$1(G__14171)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14172)?G__14170:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14172)?"0px":G__14173)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.truth_(G__14172)?(1):(0)),new cljs.core.Keyword(null,"position","position",-2011731912),(cljs.core.truth_(G__14172)?"relative":"absolute"),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});})(transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",children));
javelin.core.formula.call(null,((function (el,transition_length){
return (function (G__14176,G__14175,G__14174){
if(cljs.core.truth_(G__14174)){
return jQuery("html, body").animate(G__14175.call(null,new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null)),G__14176);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq14167){
var G__14168 = cljs.core.first.call(null,seq14167);
var seq14167__$1 = cljs.core.next.call(null,seq14167);
var G__14169 = cljs.core.first.call(null,seq14167__$1);
var seq14167__$2 = cljs.core.next.call(null,seq14167__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__14168,G__14169,seq14167__$2);
});


//# sourceMappingURL=drawers.js.map