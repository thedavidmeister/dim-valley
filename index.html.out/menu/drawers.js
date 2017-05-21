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
var len__8981__auto___24618 = arguments.length;
var i__8982__auto___24619 = (0);
while(true){
if((i__8982__auto___24619 < len__8981__auto___24618)){
args__8988__auto__.push((arguments[i__8982__auto___24619]));

var G__24620 = (i__8982__auto___24619 + (1));
i__8982__auto___24619 = G__24620;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24615 = cljs.core.cst$kw$css;
var G__24616 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24617 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24615,G__24616,G__24617) : hoplon.core.div.call(null,G__24615,G__24616,G__24617));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24614){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24614));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24640 = arguments.length;
var i__8982__auto___24641 = (0);
while(true){
if((i__8982__auto___24641 < len__8981__auto___24640)){
args__8988__auto__.push((arguments[i__8982__auto___24641]));

var G__24642 = (i__8982__auto___24641 + (1));
i__8982__auto___24641 = G__24642;
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
var el = (function (){var G__24624 = cljs.core.cst$kw$css;
var G__24625 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24624,transition_length){
return (function (G__24630,G__24627,G__24628,G__24629){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24627),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24628)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24629)?G__24627:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24629)?"0px":G__24630)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24629)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24629)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24624,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24626 = (function (){var G__24631 = cljs.core.cst$kw$class;
var G__24632 = "clearfix";
var G__24633 = cljs.core.cst$kw$position;
var G__24634 = "relative";
var G__24635 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24631,G__24632,G__24633,G__24634,G__24635) : hoplon.core.div.call(null,G__24631,G__24632,G__24633,G__24634,G__24635));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24624,G__24625,G__24626) : hoplon.core.div.call(null,G__24624,G__24625,G__24626));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24638,G__24637,G__24636){
if(cljs.core.truth_(G__24636)){
return jQuery("html, body").animate((function (){var G__24639 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24637.cljs$core$IFn$_invoke$arity$1 ? G__24637.cljs$core$IFn$_invoke$arity$1(G__24639) : G__24637.call(null,G__24639));
})(),G__24638);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24621){
var G__24622 = cljs.core.first(seq24621);
var seq24621__$1 = cljs.core.next(seq24621);
var G__24623 = cljs.core.first(seq24621__$1);
var seq24621__$2 = cljs.core.next(seq24621__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24622,G__24623,seq24621__$2);
});

