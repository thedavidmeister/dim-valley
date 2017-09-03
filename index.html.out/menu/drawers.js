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
var len__8981__auto___24938 = arguments.length;
var i__8982__auto___24939 = (0);
while(true){
if((i__8982__auto___24939 < len__8981__auto___24938)){
args__8988__auto__.push((arguments[i__8982__auto___24939]));

var G__24940 = (i__8982__auto___24939 + (1));
i__8982__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__24935 = cljs.core.cst$kw$css;
var G__24936 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__24937 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24935,G__24936,G__24937) : hoplon.core.div.call(null,G__24935,G__24936,G__24937));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq24934){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24934));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___24960 = arguments.length;
var i__8982__auto___24961 = (0);
while(true){
if((i__8982__auto___24961 < len__8981__auto___24960)){
args__8988__auto__.push((arguments[i__8982__auto___24961]));

var G__24962 = (i__8982__auto___24961 + (1));
i__8982__auto___24961 = G__24962;
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
var el = (function (){var G__24944 = cljs.core.cst$kw$css;
var G__24945 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24944,transition_length){
return (function (G__24950,G__24947,G__24948,G__24949){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24947),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__24948)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24949)?G__24947:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24949)?"0px":G__24950)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__24949)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__24949)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__24944,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__24946 = (function (){var G__24951 = cljs.core.cst$kw$class;
var G__24952 = "clearfix";
var G__24953 = cljs.core.cst$kw$position;
var G__24954 = "relative";
var G__24955 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__24951,G__24952,G__24953,G__24954,G__24955) : hoplon.core.div.call(null,G__24951,G__24952,G__24953,G__24954,G__24955));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24944,G__24945,G__24946) : hoplon.core.div.call(null,G__24944,G__24945,G__24946));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__24958,G__24957,G__24956){
if(cljs.core.truth_(G__24956)){
return jQuery("html, body").animate((function (){var G__24959 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__24957.cljs$core$IFn$_invoke$arity$1 ? G__24957.cljs$core$IFn$_invoke$arity$1(G__24959) : G__24957.call(null,G__24959));
})(),G__24958);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq24941){
var G__24942 = cljs.core.first(seq24941);
var seq24941__$1 = cljs.core.next(seq24941);
var G__24943 = cljs.core.first(seq24941__$1);
var seq24941__$2 = cljs.core.next(seq24941__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__24942,G__24943,seq24941__$2);
});

