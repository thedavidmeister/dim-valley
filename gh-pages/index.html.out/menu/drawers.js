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
var len__8981__auto___24875 = arguments.length;
var i__8982__auto___24876 = (0);
while(true){
if((i__8982__auto___24876 < len__8981__auto___24875)){
args__8988__auto__.push((arguments[i__8982__auto___24876]));

var G__24877 = (i__8982__auto___24876 + (1));
i__8982__auto___24876 = G__24877;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24872 = cljs.core.cst$kw$css;
var G__24873 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24874 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24872,G__24873,G__24874) : hoplon.core.div.call(null,G__24872,G__24873,G__24874));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24871){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24871));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24897 = arguments.length;
var i__8982__auto___24898 = (0);
while(true){
if((i__8982__auto___24898 < len__8981__auto___24897)){
args__8988__auto__.push((arguments[i__8982__auto___24898]));

var G__24899 = (i__8982__auto___24898 + (1));
i__8982__auto___24898 = G__24899;
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
var el = (function (){var G__24881 = cljs.core.cst$kw$css;
var G__24882 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24881,transition_length){
return (function (G__24887,G__24884,G__24885,G__24886){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24884),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24885)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24886)?G__24884:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24886)?"0px":G__24887)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24886)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24886)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24881,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24883 = (function (){var G__24888 = cljs.core.cst$kw$class;
var G__24889 = "clearfix";
var G__24890 = cljs.core.cst$kw$position;
var G__24891 = "relative";
var G__24892 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24888,G__24889,G__24890,G__24891,G__24892) : hoplon.core.div.call(null,G__24888,G__24889,G__24890,G__24891,G__24892));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24881,G__24882,G__24883) : hoplon.core.div.call(null,G__24881,G__24882,G__24883));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24895,G__24894,G__24893){
if(cljs.core.truth_(G__24893)){
return jQuery("html, body").animate((function (){var G__24896 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24894.cljs$core$IFn$_invoke$arity$1 ? G__24894.cljs$core$IFn$_invoke$arity$1(G__24896) : G__24894.call(null,G__24896));
})(),G__24895);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24878){
var G__24879 = cljs.core.first(seq24878);
var seq24878__$1 = cljs.core.next(seq24878);
var G__24880 = cljs.core.first(seq24878__$1);
var seq24878__$2 = cljs.core.next(seq24878__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24879,G__24880,seq24878__$2);
});

