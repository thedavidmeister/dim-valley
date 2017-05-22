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
var len__8981__auto___24678 = arguments.length;
var i__8982__auto___24679 = (0);
while(true){
if((i__8982__auto___24679 < len__8981__auto___24678)){
args__8988__auto__.push((arguments[i__8982__auto___24679]));

var G__24680 = (i__8982__auto___24679 + (1));
i__8982__auto___24679 = G__24680;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24675 = cljs.core.cst$kw$css;
var G__24676 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24677 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24675,G__24676,G__24677) : hoplon.core.div.call(null,G__24675,G__24676,G__24677));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24674){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24674));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24700 = arguments.length;
var i__8982__auto___24701 = (0);
while(true){
if((i__8982__auto___24701 < len__8981__auto___24700)){
args__8988__auto__.push((arguments[i__8982__auto___24701]));

var G__24702 = (i__8982__auto___24701 + (1));
i__8982__auto___24701 = G__24702;
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
var el = (function (){var G__24684 = cljs.core.cst$kw$css;
var G__24685 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24684,transition_length){
return (function (G__24690,G__24687,G__24688,G__24689){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24687),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24688)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24689)?G__24687:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24689)?"0px":G__24690)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24689)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24689)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24684,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24686 = (function (){var G__24691 = cljs.core.cst$kw$class;
var G__24692 = "clearfix";
var G__24693 = cljs.core.cst$kw$position;
var G__24694 = "relative";
var G__24695 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24691,G__24692,G__24693,G__24694,G__24695) : hoplon.core.div.call(null,G__24691,G__24692,G__24693,G__24694,G__24695));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24684,G__24685,G__24686) : hoplon.core.div.call(null,G__24684,G__24685,G__24686));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24698,G__24697,G__24696){
if(cljs.core.truth_(G__24696)){
return jQuery("html, body").animate((function (){var G__24699 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24697.cljs$core$IFn$_invoke$arity$1 ? G__24697.cljs$core$IFn$_invoke$arity$1(G__24699) : G__24697.call(null,G__24699));
})(),G__24698);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24681){
var G__24682 = cljs.core.first(seq24681);
var seq24681__$1 = cljs.core.next(seq24681);
var G__24683 = cljs.core.first(seq24681__$1);
var seq24681__$2 = cljs.core.next(seq24681__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24682,G__24683,seq24681__$2);
});

