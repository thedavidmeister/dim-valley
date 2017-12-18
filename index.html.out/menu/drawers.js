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
var len__9517__auto___25791 = arguments.length;
var i__9518__auto___25792 = (0);
while(true){
if((i__9518__auto___25792 < len__9517__auto___25791)){
args__9524__auto__.push((arguments[i__9518__auto___25792]));

var G__25793 = (i__9518__auto___25792 + (1));
i__9518__auto___25792 = G__25793;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((0) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9525__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25788 = cljs.core.cst$kw$css;
var G__25789 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25790 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25788,G__25789,G__25790) : hoplon.core.div.call(null,G__25788,G__25789,G__25790));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25787){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25787));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9524__auto__ = [];
var len__9517__auto___25820 = arguments.length;
var i__9518__auto___25821 = (0);
while(true){
if((i__9518__auto___25821 < len__9517__auto___25820)){
args__9524__auto__.push((arguments[i__9518__auto___25821]));

var G__25822 = (i__9518__auto___25821 + (1));
i__9518__auto___25821 = G__25822;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((2) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9525__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = (function (){var G__25797 = cljs.core.cst$kw$css;
var G__25798 = (function (){var fexpr__25806 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25797,transition_length){
return (function (G__25800,G__25801,G__25802,G__25803){
var G__25807 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transition,["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25801),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25802))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25803)?G__25801:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(90vw)"].join(''),cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$opacity,(0)], null);
var G__25808 = (cljs.core.truth_(G__25803)?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1)], null):null);
return (G__25800.cljs$core$IFn$_invoke$arity$2 ? G__25800.cljs$core$IFn$_invoke$arity$2(G__25807,G__25808) : G__25800.call(null,G__25807,G__25808));
});})(G__25797,transition_length))
);
return (fexpr__25806.cljs$core$IFn$_invoke$arity$4 ? fexpr__25806.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25806.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25799 = (function (){var G__25809 = cljs.core.cst$kw$class;
var G__25810 = "clearfix";
var G__25811 = cljs.core.cst$kw$position;
var G__25812 = "relative";
var G__25813 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25809,G__25810,G__25811,G__25812,G__25813) : hoplon.core.div.call(null,G__25809,G__25810,G__25811,G__25812,G__25813));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25797,G__25798,G__25799) : hoplon.core.div.call(null,G__25797,G__25798,G__25799));
})();
var fexpr__25818_25823 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25816,G__25815,G__25814){
if(cljs.core.truth_(G__25814)){
return jQuery("html, body").animate((function (){var G__25819 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25815.cljs$core$IFn$_invoke$arity$1 ? G__25815.cljs$core$IFn$_invoke$arity$1(G__25819) : G__25815.call(null,G__25819));
})(),G__25816);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25818_25823.cljs$core$IFn$_invoke$arity$3 ? fexpr__25818_25823.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25818_25823.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25794){
var G__25795 = cljs.core.first(seq25794);
var seq25794__$1 = cljs.core.next(seq25794);
var G__25796 = cljs.core.first(seq25794__$1);
var seq25794__$2 = cljs.core.next(seq25794__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25795,G__25796,seq25794__$2);
});

