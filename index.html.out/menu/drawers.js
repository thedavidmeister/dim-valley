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
var len__8981__auto___21376 = arguments.length;
var i__8982__auto___21377 = (0);
while(true){
if((i__8982__auto___21377 < len__8981__auto___21376)){
args__8988__auto__.push((arguments[i__8982__auto___21377]));

var G__21378 = (i__8982__auto___21377 + (1));
i__8982__auto___21377 = G__21378;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21373 = cljs.core.cst$kw$css;
var G__21374 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__21375 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21373,G__21374,G__21375) : hoplon.core.div.call(null,G__21373,G__21374,G__21375));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq21372){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21372));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21398 = arguments.length;
var i__8982__auto___21399 = (0);
while(true){
if((i__8982__auto___21399 < len__8981__auto___21398)){
args__8988__auto__.push((arguments[i__8982__auto___21399]));

var G__21400 = (i__8982__auto___21399 + (1));
i__8982__auto___21399 = G__21400;
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
var el = (function (){var G__21382 = cljs.core.cst$kw$css;
var G__21383 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21382,transition_length){
return (function (G__21388,G__21385,G__21386,G__21387){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21385),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__21386)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21387)?G__21385:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21387)?"0px":G__21388)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__21387)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__21387)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__21382,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__21384 = (function (){var G__21389 = cljs.core.cst$kw$class;
var G__21390 = "clearfix";
var G__21391 = cljs.core.cst$kw$position;
var G__21392 = "relative";
var G__21393 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21389,G__21390,G__21391,G__21392,G__21393) : hoplon.core.div.call(null,G__21389,G__21390,G__21391,G__21392,G__21393));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21382,G__21383,G__21384) : hoplon.core.div.call(null,G__21382,G__21383,G__21384));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__21396,G__21395,G__21394){
if(cljs.core.truth_(G__21394)){
return jQuery("html, body").animate((function (){var G__21397 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__21395.cljs$core$IFn$_invoke$arity$1 ? G__21395.cljs$core$IFn$_invoke$arity$1(G__21397) : G__21395.call(null,G__21397));
})(),G__21396);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq21379){
var G__21380 = cljs.core.first(seq21379);
var seq21379__$1 = cljs.core.next(seq21379);
var G__21381 = cljs.core.first(seq21379__$1);
var seq21379__$2 = cljs.core.next(seq21379__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__21380,G__21381,seq21379__$2);
});

