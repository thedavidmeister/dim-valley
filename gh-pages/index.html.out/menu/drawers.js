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
var len__8981__auto___24732 = arguments.length;
var i__8982__auto___24733 = (0);
while(true){
if((i__8982__auto___24733 < len__8981__auto___24732)){
args__8988__auto__.push((arguments[i__8982__auto___24733]));

var G__24734 = (i__8982__auto___24733 + (1));
i__8982__auto___24733 = G__24734;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24729 = cljs.core.cst$kw$css;
var G__24730 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24731 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24729,G__24730,G__24731) : hoplon.core.div.call(null,G__24729,G__24730,G__24731));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24728){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24728));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24754 = arguments.length;
var i__8982__auto___24755 = (0);
while(true){
if((i__8982__auto___24755 < len__8981__auto___24754)){
args__8988__auto__.push((arguments[i__8982__auto___24755]));

var G__24756 = (i__8982__auto___24755 + (1));
i__8982__auto___24755 = G__24756;
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
var el = (function (){var G__24738 = cljs.core.cst$kw$css;
var G__24739 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24738,transition_length){
return (function (G__24744,G__24741,G__24742,G__24743){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24741),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24742)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24743)?G__24741:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24743)?"0px":G__24744)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24743)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24743)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24738,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24740 = (function (){var G__24745 = cljs.core.cst$kw$class;
var G__24746 = "clearfix";
var G__24747 = cljs.core.cst$kw$position;
var G__24748 = "relative";
var G__24749 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24745,G__24746,G__24747,G__24748,G__24749) : hoplon.core.div.call(null,G__24745,G__24746,G__24747,G__24748,G__24749));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24738,G__24739,G__24740) : hoplon.core.div.call(null,G__24738,G__24739,G__24740));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24752,G__24751,G__24750){
if(cljs.core.truth_(G__24750)){
return jQuery("html, body").animate((function (){var G__24753 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24751.cljs$core$IFn$_invoke$arity$1 ? G__24751.cljs$core$IFn$_invoke$arity$1(G__24753) : G__24751.call(null,G__24753));
})(),G__24752);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24735){
var G__24736 = cljs.core.first(seq24735);
var seq24735__$1 = cljs.core.next(seq24735);
var G__24737 = cljs.core.first(seq24735__$1);
var seq24735__$2 = cljs.core.next(seq24735__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24736,G__24737,seq24735__$2);
});

