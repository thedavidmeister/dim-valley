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
var len__9519__auto___25704 = arguments.length;
var i__9520__auto___25705 = (0);
while(true){
if((i__9520__auto___25705 < len__9519__auto___25704)){
args__9526__auto__.push((arguments[i__9520__auto___25705]));

var G__25706 = (i__9520__auto___25705 + (1));
i__9520__auto___25705 = G__25706;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25701 = cljs.core.cst$kw$css;
var G__25702 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25703 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25701,G__25702,G__25703) : hoplon.core.div.call(null,G__25701,G__25702,G__25703));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25700){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25700));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25729 = arguments.length;
var i__9520__auto___25730 = (0);
while(true){
if((i__9520__auto___25730 < len__9519__auto___25729)){
args__9526__auto__.push((arguments[i__9520__auto___25730]));

var G__25731 = (i__9520__auto___25730 + (1));
i__9520__auto___25730 = G__25731;
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
var el = (function (){var G__25710 = cljs.core.cst$kw$css;
var G__25711 = (function (){var fexpr__25717 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25710,transition_length){
return (function (G__25716,G__25713,G__25714,G__25715){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25713),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25714))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25715)?G__25713:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25715)?"0px":G__25716)),")"].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__25715)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__25715)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__25710,transition_length))
);
return (fexpr__25717.cljs$core$IFn$_invoke$arity$4 ? fexpr__25717.cljs$core$IFn$_invoke$arity$4(offset,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25717.call(null,offset,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25712 = (function (){var G__25718 = cljs.core.cst$kw$class;
var G__25719 = "clearfix";
var G__25720 = cljs.core.cst$kw$position;
var G__25721 = "relative";
var G__25722 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25718,G__25719,G__25720,G__25721,G__25722) : hoplon.core.div.call(null,G__25718,G__25719,G__25720,G__25721,G__25722));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25710,G__25711,G__25712) : hoplon.core.div.call(null,G__25710,G__25711,G__25712));
})();
var fexpr__25727_25732 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25725,G__25724,G__25723){
if(cljs.core.truth_(G__25723)){
return jQuery("html, body").animate((function (){var G__25728 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25724.cljs$core$IFn$_invoke$arity$1 ? G__25724.cljs$core$IFn$_invoke$arity$1(G__25728) : G__25724.call(null,G__25728));
})(),G__25725);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25727_25732.cljs$core$IFn$_invoke$arity$3 ? fexpr__25727_25732.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25727_25732.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25707){
var G__25708 = cljs.core.first(seq25707);
var seq25707__$1 = cljs.core.next(seq25707);
var G__25709 = cljs.core.first(seq25707__$1);
var seq25707__$2 = cljs.core.next(seq25707__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25708,G__25709,seq25707__$2);
});

