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
var len__9517__auto___25812 = arguments.length;
var i__9518__auto___25813 = (0);
while(true){
if((i__9518__auto___25813 < len__9517__auto___25812)){
args__9524__auto__.push((arguments[i__9518__auto___25813]));

var G__25814 = (i__9518__auto___25813 + (1));
i__9518__auto___25813 = G__25814;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25809 = cljs.core.cst$kw$css;
var G__25810 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25811 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25809,G__25810,G__25811) : hoplon.core.div.call(null,G__25809,G__25810,G__25811));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25808){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25808));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9524__auto__ = [];
var len__9517__auto___25840 = arguments.length;
var i__9518__auto___25841 = (0);
while(true){
if((i__9518__auto___25841 < len__9517__auto___25840)){
args__9524__auto__.push((arguments[i__9518__auto___25841]));

var G__25842 = (i__9518__auto___25841 + (1));
i__9518__auto___25841 = G__25842;
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
var el = (function (){var G__25817 = cljs.core.cst$kw$css;
var G__25818 = (function (){var fexpr__25826 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25817,transition_length){
return (function (G__25820,G__25822,G__25821,G__25823){
var G__25827 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transition_DASH_delay,cljs.core.cst$kw$transform,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$opacity,cljs.core.cst$kw$transition_DASH_timing_DASH_function,cljs.core.cst$kw$transition_DASH_property,cljs.core.cst$kw$position,cljs.core.cst$kw$transition_DASH_duration,cljs.core.cst$kw$left],["0s",["translateX(90vw)"].join(''),(0),"100%",(0),(0),cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25821),"all","absolute",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25822),"s "].join(''),(0)]);
var G__25828 = (cljs.core.truth_(G__25823)?new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1),cljs.core.cst$kw$transition_DASH_delay,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25822),"s"].join('')], null):null);
return (G__25820.cljs$core$IFn$_invoke$arity$2 ? G__25820.cljs$core$IFn$_invoke$arity$2(G__25827,G__25828) : G__25820.call(null,G__25827,G__25828));
});})(G__25817,transition_length))
);
return (fexpr__25826.cljs$core$IFn$_invoke$arity$4 ? fexpr__25826.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25826.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25819 = (function (){var G__25829 = cljs.core.cst$kw$class;
var G__25830 = "clearfix";
var G__25831 = cljs.core.cst$kw$position;
var G__25832 = "relative";
var G__25833 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25829,G__25830,G__25831,G__25832,G__25833) : hoplon.core.div.call(null,G__25829,G__25830,G__25831,G__25832,G__25833));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25817,G__25818,G__25819) : hoplon.core.div.call(null,G__25817,G__25818,G__25819));
})();
var fexpr__25838_25843 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25836,G__25835,G__25834){
if(cljs.core.truth_(G__25834)){
return jQuery("html, body").animate((function (){var G__25839 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25835.cljs$core$IFn$_invoke$arity$1 ? G__25835.cljs$core$IFn$_invoke$arity$1(G__25839) : G__25835.call(null,G__25839));
})(),G__25836);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25838_25843.cljs$core$IFn$_invoke$arity$3 ? fexpr__25838_25843.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25838_25843.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (1);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25815){
var G__25816 = cljs.core.first(seq25815);
var seq25815__$1 = cljs.core.next(seq25815);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25816,seq25815__$1);
});

