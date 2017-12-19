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
var len__9519__auto___25797 = arguments.length;
var i__9520__auto___25798 = (0);
while(true){
if((i__9520__auto___25798 < len__9519__auto___25797)){
args__9526__auto__.push((arguments[i__9520__auto___25798]));

var G__25799 = (i__9520__auto___25798 + (1));
i__9520__auto___25798 = G__25799;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25794 = cljs.core.cst$kw$css;
var G__25795 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25796 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25794,G__25795,G__25796) : hoplon.core.div.call(null,G__25794,G__25795,G__25796));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25793){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25793));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25826 = arguments.length;
var i__9520__auto___25827 = (0);
while(true){
if((i__9520__auto___25827 < len__9519__auto___25826)){
args__9526__auto__.push((arguments[i__9520__auto___25827]));

var G__25828 = (i__9520__auto___25827 + (1));
i__9520__auto___25827 = G__25828;
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
var el = (function (){var G__25803 = cljs.core.cst$kw$css;
var G__25804 = (function (){var fexpr__25812 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25803,transition_length){
return (function (G__25806,G__25807,G__25808,G__25809){
var G__25813 = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$transition,["all ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25807),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25808))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25809)?G__25807:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(90vw)"].join(''),cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$opacity,(0)], null);
var G__25814 = (cljs.core.truth_(G__25809)?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1),cljs.core.cst$kw$transform,"translateX(0px)",cljs.core.cst$kw$opacity,(1)], null):null);
return (G__25806.cljs$core$IFn$_invoke$arity$2 ? G__25806.cljs$core$IFn$_invoke$arity$2(G__25813,G__25814) : G__25806.call(null,G__25813,G__25814));
});})(G__25803,transition_length))
);
return (fexpr__25812.cljs$core$IFn$_invoke$arity$4 ? fexpr__25812.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25812.call(null,cljs.core.merge,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25805 = (function (){var G__25815 = cljs.core.cst$kw$class;
var G__25816 = "clearfix";
var G__25817 = cljs.core.cst$kw$position;
var G__25818 = "relative";
var G__25819 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25815,G__25816,G__25817,G__25818,G__25819) : hoplon.core.div.call(null,G__25815,G__25816,G__25817,G__25818,G__25819));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25803,G__25804,G__25805) : hoplon.core.div.call(null,G__25803,G__25804,G__25805));
})();
var fexpr__25824_25829 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25822,G__25821,G__25820){
if(cljs.core.truth_(G__25820)){
return jQuery("html, body").animate((function (){var G__25825 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25821.cljs$core$IFn$_invoke$arity$1 ? G__25821.cljs$core$IFn$_invoke$arity$1(G__25825) : G__25821.call(null,G__25825));
})(),G__25822);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25824_25829.cljs$core$IFn$_invoke$arity$3 ? fexpr__25824_25829.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25824_25829.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25800){
var G__25801 = cljs.core.first(seq25800);
var seq25800__$1 = cljs.core.next(seq25800);
var G__25802 = cljs.core.first(seq25800__$1);
var seq25800__$2 = cljs.core.next(seq25800__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25801,G__25802,seq25800__$2);
});

