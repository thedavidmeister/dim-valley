// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__9524__auto__ = [];
var len__9517__auto___25810 = arguments.length;
var i__9518__auto___25811 = (0);
while(true){
if((i__9518__auto___25811 < len__9517__auto___25810)){
args__9524__auto__.push((arguments[i__9518__auto___25811]));

var G__25812 = (i__9518__auto___25811 + (1));
i__9518__auto___25811 = G__25812;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
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
var args__9524__auto__ = [];
var len__9517__auto___25838 = arguments.length;
var i__9518__auto___25839 = (0);
while(true){
if((i__9518__auto___25839 < len__9517__auto___25838)){
args__9524__auto__.push((arguments[i__9518__auto___25839]));

var G__25840 = (i__9518__auto___25839 + (1));
i__9518__auto___25839 = G__25840;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,children){
var transition_length = (1.5 * menu.config.transition_length);
var el = (function (){var G__25815 = cljs.core.cst$kw$css;
var G__25816 = (function (){var fexpr__25824 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25815,transition_length){
return (function (G__25818,G__25820,G__25819,G__25821){
var G__25825 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transition_DASH_delay,cljs.core.cst$kw$transform,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$opacity,cljs.core.cst$kw$transition_DASH_timing_DASH_function,cljs.core.cst$kw$transition_DASH_property,cljs.core.cst$kw$position,cljs.core.cst$kw$transition_DASH_duration,cljs.core.cst$kw$left],["0s",["translateX(90vw)"].join(''),(0),"100%",(0),(0),cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25819),"all","absolute",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25820),"s "].join(''),(0)]);
var G__25826 = (cljs.core.truth_(G__25821)?new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$transition_DASH_delay,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25820),"s"].join('')], null):null);
return (G__25818.cljs$core$IFn$_invoke$arity$2 ? G__25818.cljs$core$IFn$_invoke$arity$2(G__25825,G__25826) : G__25818.call(null,G__25825,G__25826));
});})(G__25815,transition_length))
);
return (fexpr__25824.cljs$core$IFn$_invoke$arity$4 ? fexpr__25824.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25824.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25817 = (function (){var G__25827 = cljs.core.cst$kw$class;
var G__25828 = "clearfix";
var G__25829 = cljs.core.cst$kw$position;
var G__25830 = "relative";
var G__25831 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25827,G__25828,G__25829,G__25830,G__25831) : hoplon.core.div.call(null,G__25827,G__25828,G__25829,G__25830,G__25831));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25815,G__25816,G__25817) : hoplon.core.div.call(null,G__25815,G__25816,G__25817));
})();
var fexpr__25836_25841 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25834,G__25833,G__25832){
if(cljs.core.truth_(G__25832)){
return jQuery("html, body").animate((function (){var G__25837 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25833.cljs$core$IFn$_invoke$arity$1 ? G__25833.cljs$core$IFn$_invoke$arity$1(G__25837) : G__25833.call(null,G__25837));
})(),G__25834);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25836_25841.cljs$core$IFn$_invoke$arity$3 ? fexpr__25836_25841.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25836_25841.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (1);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25813){
var G__25814 = cljs.core.first(seq25813);
var seq25813__$1 = cljs.core.next(seq25813);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25814,seq25813__$1);
});

