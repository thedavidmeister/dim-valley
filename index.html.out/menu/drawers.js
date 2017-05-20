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
var len__8981__auto___21293 = arguments.length;
var i__8982__auto___21294 = (0);
while(true){
if((i__8982__auto___21294 < len__8981__auto___21293)){
args__8988__auto__.push((arguments[i__8982__auto___21294]));

var G__21295 = (i__8982__auto___21294 + (1));
i__8982__auto___21294 = G__21295;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21290 = cljs.core.cst$kw$css;
var G__21291 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__21292 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21290,G__21291,G__21292) : hoplon.core.div.call(null,G__21290,G__21291,G__21292));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq21289){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21289));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21315 = arguments.length;
var i__8982__auto___21316 = (0);
while(true){
if((i__8982__auto___21316 < len__8981__auto___21315)){
args__8988__auto__.push((arguments[i__8982__auto___21316]));

var G__21317 = (i__8982__auto___21316 + (1));
i__8982__auto___21316 = G__21317;
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
var el = (function (){var G__21299 = cljs.core.cst$kw$css;
var G__21300 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21299,transition_length){
return (function (G__21305,G__21302,G__21303,G__21304){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21302),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__21303)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21304)?G__21302:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21304)?"0px":G__21305)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__21304)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__21304)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__21299,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__21301 = (function (){var G__21306 = cljs.core.cst$kw$class;
var G__21307 = "clearfix";
var G__21308 = cljs.core.cst$kw$position;
var G__21309 = "relative";
var G__21310 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21306,G__21307,G__21308,G__21309,G__21310) : hoplon.core.div.call(null,G__21306,G__21307,G__21308,G__21309,G__21310));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21299,G__21300,G__21301) : hoplon.core.div.call(null,G__21299,G__21300,G__21301));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__21313,G__21312,G__21311){
if(cljs.core.truth_(G__21311)){
return jQuery("html, body").animate((function (){var G__21314 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__21312.cljs$core$IFn$_invoke$arity$1 ? G__21312.cljs$core$IFn$_invoke$arity$1(G__21314) : G__21312.call(null,G__21314));
})(),G__21313);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq21296){
var G__21297 = cljs.core.first(seq21296);
var seq21296__$1 = cljs.core.next(seq21296);
var G__21298 = cljs.core.first(seq21296__$1);
var seq21296__$2 = cljs.core.next(seq21296__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__21297,G__21298,seq21296__$2);
});

