// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25586 = arguments.length;
var i__9520__auto___25587 = (0);
while(true){
if((i__9520__auto___25587 < len__9519__auto___25586)){
args__9526__auto__.push((arguments[i__9520__auto___25587]));

var G__25588 = (i__9520__auto___25587 + (1));
i__9520__auto___25587 = G__25588;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25583 = cljs.core.cst$kw$css;
var G__25584 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25585 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25583,G__25584,G__25585) : hoplon.core.div.call(null,G__25583,G__25584,G__25585));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25582){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25582));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25611 = arguments.length;
var i__9520__auto___25612 = (0);
while(true){
if((i__9520__auto___25612 < len__9519__auto___25611)){
args__9526__auto__.push((arguments[i__9520__auto___25612]));

var G__25613 = (i__9520__auto___25612 + (1));
i__9520__auto___25612 = G__25613;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((2) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9527__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = (function (){var G__25592 = cljs.core.cst$kw$css;
var G__25593 = (function (){var fexpr__25599 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25592,transition_length){
return (function (G__25598,G__25595,G__25596,G__25597){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25595),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25596))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25597)?G__25595:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25597)?"0px":G__25598)),")"].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__25597)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__25597)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__25592,transition_length))
);
return (fexpr__25599.cljs$core$IFn$_invoke$arity$4 ? fexpr__25599.cljs$core$IFn$_invoke$arity$4(offset,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25599.call(null,offset,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25594 = (function (){var G__25600 = cljs.core.cst$kw$class;
var G__25601 = "clearfix";
var G__25602 = cljs.core.cst$kw$position;
var G__25603 = "relative";
var G__25604 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25600,G__25601,G__25602,G__25603,G__25604) : hoplon.core.div.call(null,G__25600,G__25601,G__25602,G__25603,G__25604));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25592,G__25593,G__25594) : hoplon.core.div.call(null,G__25592,G__25593,G__25594));
})();
var fexpr__25609_25614 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25607,G__25606,G__25605){
if(cljs.core.truth_(G__25605)){
return jQuery("html, body").animate((function (){var G__25610 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25606.cljs$core$IFn$_invoke$arity$1 ? G__25606.cljs$core$IFn$_invoke$arity$1(G__25610) : G__25606.call(null,G__25610));
})(),G__25607);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25609_25614.cljs$core$IFn$_invoke$arity$3 ? fexpr__25609_25614.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25609_25614.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25589){
var G__25590 = cljs.core.first(seq25589);
var seq25589__$1 = cljs.core.next(seq25589);
var G__25591 = cljs.core.first(seq25589__$1);
var seq25589__$2 = cljs.core.next(seq25589__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25590,G__25591,seq25589__$2);
});

