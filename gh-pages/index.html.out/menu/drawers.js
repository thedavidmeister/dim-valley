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
var len__8981__auto___24879 = arguments.length;
var i__8982__auto___24880 = (0);
while(true){
if((i__8982__auto___24880 < len__8981__auto___24879)){
args__8988__auto__.push((arguments[i__8982__auto___24880]));

var G__24881 = (i__8982__auto___24880 + (1));
i__8982__auto___24880 = G__24881;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24876 = cljs.core.cst$kw$css;
var G__24877 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24878 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24876,G__24877,G__24878) : hoplon.core.div.call(null,G__24876,G__24877,G__24878));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24875){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24875));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24901 = arguments.length;
var i__8982__auto___24902 = (0);
while(true){
if((i__8982__auto___24902 < len__8981__auto___24901)){
args__8988__auto__.push((arguments[i__8982__auto___24902]));

var G__24903 = (i__8982__auto___24902 + (1));
i__8982__auto___24902 = G__24903;
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
var el = (function (){var G__24885 = cljs.core.cst$kw$css;
var G__24886 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24885,transition_length){
return (function (G__24891,G__24888,G__24889,G__24890){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24888),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24889)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24890)?G__24888:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24890)?"0px":G__24891)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24890)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24890)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24885,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24887 = (function (){var G__24892 = cljs.core.cst$kw$class;
var G__24893 = "clearfix";
var G__24894 = cljs.core.cst$kw$position;
var G__24895 = "relative";
var G__24896 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24892,G__24893,G__24894,G__24895,G__24896) : hoplon.core.div.call(null,G__24892,G__24893,G__24894,G__24895,G__24896));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24885,G__24886,G__24887) : hoplon.core.div.call(null,G__24885,G__24886,G__24887));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24899,G__24898,G__24897){
if(cljs.core.truth_(G__24897)){
return jQuery("html, body").animate((function (){var G__24900 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24898.cljs$core$IFn$_invoke$arity$1 ? G__24898.cljs$core$IFn$_invoke$arity$1(G__24900) : G__24898.call(null,G__24900));
})(),G__24899);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24882){
var G__24883 = cljs.core.first(seq24882);
var seq24882__$1 = cljs.core.next(seq24882);
var G__24884 = cljs.core.first(seq24882__$1);
var seq24882__$2 = cljs.core.next(seq24882__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24883,G__24884,seq24882__$2);
});

