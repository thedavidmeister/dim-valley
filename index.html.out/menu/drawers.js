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
var len__8981__auto___21279 = arguments.length;
var i__8982__auto___21280 = (0);
while(true){
if((i__8982__auto___21280 < len__8981__auto___21279)){
args__8988__auto__.push((arguments[i__8982__auto___21280]));

var G__21281 = (i__8982__auto___21280 + (1));
i__8982__auto___21280 = G__21281;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((0) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__8989__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__21276 = cljs.core.cst$kw$css;
var G__21277 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__21278 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21276,G__21277,G__21278) : hoplon.core.div.call(null,G__21276,G__21277,G__21278));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq21275){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21275));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21301 = arguments.length;
var i__8982__auto___21302 = (0);
while(true){
if((i__8982__auto___21302 < len__8981__auto___21301)){
args__8988__auto__.push((arguments[i__8982__auto___21302]));

var G__21303 = (i__8982__auto___21302 + (1));
i__8982__auto___21302 = G__21303;
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
var el = (function (){var G__21285 = cljs.core.cst$kw$css;
var G__21286 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21285,transition_length){
return (function (G__21291,G__21288,G__21289,G__21290){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21288),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__21289)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21290)?G__21288:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translateX("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__21290)?"0px":G__21291)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__21290)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__21290)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__21285,transition_length))
).call(null,offset,transition_length,animation.easings.easings,open_QMARK_);
var G__21287 = (function (){var G__21292 = cljs.core.cst$kw$class;
var G__21293 = "clearfix";
var G__21294 = cljs.core.cst$kw$position;
var G__21295 = "relative";
var G__21296 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__21292,G__21293,G__21294,G__21295,G__21296) : hoplon.core.div.call(null,G__21292,G__21293,G__21294,G__21295,G__21296));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21285,G__21286,G__21287) : hoplon.core.div.call(null,G__21285,G__21286,G__21287));
})();
javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__21299,G__21298,G__21297){
if(cljs.core.truth_(G__21297)){
return jQuery("html, body").animate((function (){var G__21300 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__21298.cljs$core$IFn$_invoke$arity$1 ? G__21298.cljs$core$IFn$_invoke$arity$1(G__21300) : G__21298.call(null,G__21300));
})(),G__21299);
} else {
return null;
}
});})(el,transition_length))
).call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_);

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq21282){
var G__21283 = cljs.core.first(seq21282);
var seq21282__$1 = cljs.core.next(seq21282);
var G__21284 = cljs.core.first(seq21282__$1);
var seq21282__$2 = cljs.core.next(seq21282__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__21283,G__21284,seq21282__$2);
});

