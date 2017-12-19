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
var len__9519__auto___25810 = arguments.length;
var i__9520__auto___25811 = (0);
while(true){
if((i__9520__auto___25811 < len__9519__auto___25810)){
args__9526__auto__.push((arguments[i__9520__auto___25811]));

var G__25812 = (i__9520__auto___25811 + (1));
i__9520__auto___25811 = G__25812;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25807 = cljs.core.cst$kw$css;
var G__25808 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25809 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25807,G__25808,G__25809) : hoplon.core.div.call(null,G__25807,G__25808,G__25809));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25806){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25806));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25839 = arguments.length;
var i__9520__auto___25840 = (0);
while(true){
if((i__9520__auto___25840 < len__9519__auto___25839)){
args__9526__auto__.push((arguments[i__9520__auto___25840]));

var G__25841 = (i__9520__auto___25840 + (1));
i__9520__auto___25840 = G__25841;
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
var el = (function (){var G__25816 = cljs.core.cst$kw$css;
var G__25817 = (function (){var fexpr__25825 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25816,transition_length){
return (function (G__25819,G__25820,G__25821,G__25822){
var G__25826 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transition,["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25820),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25821))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25822)?G__25820:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(90vw)"].join(''),cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$opacity,(0)], null);
var G__25827 = (cljs.core.truth_(G__25822)?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1)], null):null);
return (G__25819.cljs$core$IFn$_invoke$arity$2 ? G__25819.cljs$core$IFn$_invoke$arity$2(G__25826,G__25827) : G__25819.call(null,G__25826,G__25827));
});})(G__25816,transition_length))
);
return (fexpr__25825.cljs$core$IFn$_invoke$arity$4 ? fexpr__25825.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25825.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25818 = (function (){var G__25828 = cljs.core.cst$kw$class;
var G__25829 = "clearfix";
var G__25830 = cljs.core.cst$kw$position;
var G__25831 = "relative";
var G__25832 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25828,G__25829,G__25830,G__25831,G__25832) : hoplon.core.div.call(null,G__25828,G__25829,G__25830,G__25831,G__25832));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25816,G__25817,G__25818) : hoplon.core.div.call(null,G__25816,G__25817,G__25818));
})();
var fexpr__25837_25842 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25835,G__25834,G__25833){
if(cljs.core.truth_(G__25833)){
return jQuery("html, body").animate((function (){var G__25838 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25834.cljs$core$IFn$_invoke$arity$1 ? G__25834.cljs$core$IFn$_invoke$arity$1(G__25838) : G__25834.call(null,G__25838));
})(),G__25835);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25837_25842.cljs$core$IFn$_invoke$arity$3 ? fexpr__25837_25842.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25837_25842.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25813){
var G__25814 = cljs.core.first(seq25813);
var seq25813__$1 = cljs.core.next(seq25813);
var G__25815 = cljs.core.first(seq25813__$1);
var seq25813__$2 = cljs.core.next(seq25813__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25814,G__25815,seq25813__$2);
});

