// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24847 = arguments.length;
var i__8982__auto___24848 = (0);
while(true){
if((i__8982__auto___24848 < len__8981__auto___24847)){
args__8988__auto__.push((arguments[i__8982__auto___24848]));

var G__24849 = (i__8982__auto___24848 + (1));
i__8982__auto___24848 = G__24849;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24844 = cljs.core.cst$kw$css;
var G__24845 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24846 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24844,G__24845,G__24846) : hoplon.core.div.call(null,G__24844,G__24845,G__24846));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24843){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24843));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24869 = arguments.length;
var i__8982__auto___24870 = (0);
while(true){
if((i__8982__auto___24870 < len__8981__auto___24869)){
args__8988__auto__.push((arguments[i__8982__auto___24870]));

var G__24871 = (i__8982__auto___24870 + (1));
i__8982__auto___24870 = G__24871;
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
var el = (function (){var G__24853 = cljs.core.cst$kw$css;
var G__24854 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24853,transition_length){
return (function (G__24859,G__24856,G__24857,G__24858){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24856),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24857)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24858)?G__24856:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24858)?"0px":G__24859)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24858)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24858)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24853,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24855 = (function (){var G__24860 = cljs.core.cst$kw$class;
var G__24861 = "clearfix";
var G__24862 = cljs.core.cst$kw$position;
var G__24863 = "relative";
var G__24864 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24860,G__24861,G__24862,G__24863,G__24864) : hoplon.core.div.call(null,G__24860,G__24861,G__24862,G__24863,G__24864));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24853,G__24854,G__24855) : hoplon.core.div.call(null,G__24853,G__24854,G__24855));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24867,G__24866,G__24865){
if(cljs.core.truth_(G__24865)){
return jQuery("html, body").animate((function (){var G__24868 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24866.cljs$core$IFn$_invoke$arity$1 ? G__24866.cljs$core$IFn$_invoke$arity$1(G__24868) : G__24866.call(null,G__24868));
})(),G__24867);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24850){
var G__24851 = cljs.core.first(seq24850);
var seq24850__$1 = cljs.core.next(seq24850);
var G__24852 = cljs.core.first(seq24850__$1);
var seq24850__$2 = cljs.core.next(seq24850__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24851,G__24852,seq24850__$2);
});

