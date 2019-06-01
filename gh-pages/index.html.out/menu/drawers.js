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
var len__9519__auto___25823 = arguments.length;
var i__9520__auto___25824 = (0);
while(true){
if((i__9520__auto___25824 < len__9519__auto___25823)){
args__9526__auto__.push((arguments[i__9520__auto___25824]));

var G__25825 = (i__9520__auto___25824 + (1));
i__9520__auto___25824 = G__25825;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25820 = cljs.core.cst$kw$css;
var G__25821 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25822 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25820,G__25821,G__25822) : hoplon.core.div.call(null,G__25820,G__25821,G__25822));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25819){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25819));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25851 = arguments.length;
var i__9520__auto___25852 = (0);
while(true){
if((i__9520__auto___25852 < len__9519__auto___25851)){
args__9526__auto__.push((arguments[i__9520__auto___25852]));

var G__25853 = (i__9520__auto___25852 + (1));
i__9520__auto___25852 = G__25853;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,children){
var transition_length = (1.5 * menu.config.transition_length);
var el = (function (){var G__25828 = cljs.core.cst$kw$css;
var G__25829 = (function (){var fexpr__25837 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25828,transition_length){
return (function (G__25831,G__25833,G__25832,G__25834){
var G__25838 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transition_DASH_delay,cljs.core.cst$kw$transform,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$opacity,cljs.core.cst$kw$transition_DASH_timing_DASH_function,cljs.core.cst$kw$transition_DASH_property,cljs.core.cst$kw$position,cljs.core.cst$kw$transition_DASH_duration,cljs.core.cst$kw$left],["0s",["translateX(90vw)"].join(''),(0),"100%",(0),(0),cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25832),"all","absolute",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25833),"s "].join(''),(0)]);
var G__25839 = (cljs.core.truth_(G__25834)?new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$transition_DASH_delay,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25833),"s"].join('')], null):null);
return (G__25831.cljs$core$IFn$_invoke$arity$2 ? G__25831.cljs$core$IFn$_invoke$arity$2(G__25838,G__25839) : G__25831.call(null,G__25838,G__25839));
});})(G__25828,transition_length))
);
return (fexpr__25837.cljs$core$IFn$_invoke$arity$4 ? fexpr__25837.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25837.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25830 = (function (){var G__25840 = cljs.core.cst$kw$class;
var G__25841 = "clearfix";
var G__25842 = cljs.core.cst$kw$position;
var G__25843 = "relative";
var G__25844 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25840,G__25841,G__25842,G__25843,G__25844) : hoplon.core.div.call(null,G__25840,G__25841,G__25842,G__25843,G__25844));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25828,G__25829,G__25830) : hoplon.core.div.call(null,G__25828,G__25829,G__25830));
})();
var fexpr__25849_25854 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25847,G__25846,G__25845){
if(cljs.core.truth_(G__25845)){
return jQuery("html, body").animate((function (){var G__25850 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25846.cljs$core$IFn$_invoke$arity$1 ? G__25846.cljs$core$IFn$_invoke$arity$1(G__25850) : G__25846.call(null,G__25850));
})(),G__25847);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25849_25854.cljs$core$IFn$_invoke$arity$3 ? fexpr__25849_25854.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25849_25854.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (1);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25826){
var G__25827 = cljs.core.first(seq25826);
var seq25826__$1 = cljs.core.next(seq25826);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25827,seq25826__$1);
});

