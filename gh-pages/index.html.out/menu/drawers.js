// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__9922__auto__ = [];
var len__9915__auto___25982 = arguments.length;
var i__9916__auto___25983 = (0);
while(true){
if((i__9916__auto___25983 < len__9915__auto___25982)){
args__9922__auto__.push((arguments[i__9916__auto___25983]));

var G__25984 = (i__9916__auto___25983 + (1));
i__9916__auto___25983 = G__25984;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25979 = cljs.core.cst$kw$css;
var G__25980 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25981 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25979,G__25980,G__25981) : hoplon.core.div.call(null,G__25979,G__25980,G__25981));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25978){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25978));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9922__auto__ = [];
var len__9915__auto___26007 = arguments.length;
var i__9916__auto___26008 = (0);
while(true){
if((i__9916__auto___26008 < len__9915__auto___26007)){
args__9922__auto__.push((arguments[i__9916__auto___26008]));

var G__26009 = (i__9916__auto___26008 + (1));
i__9916__auto___26008 = G__26009;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((2) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9923__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = (function (){var G__25988 = cljs.core.cst$kw$css;
var G__25989 = (function (){var fexpr__25995 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25988,transition_length){
return (function (G__25994,G__25991,G__25992,G__25993){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25991),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25992))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25993)?G__25991:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25993)?"0px":G__25994)),")"].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__25993)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__25993)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__25988,transition_length))
);
return (fexpr__25995.cljs$core$IFn$_invoke$arity$4 ? fexpr__25995.cljs$core$IFn$_invoke$arity$4(offset,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25995.call(null,offset,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25990 = (function (){var G__25996 = cljs.core.cst$kw$class;
var G__25997 = "clearfix";
var G__25998 = cljs.core.cst$kw$position;
var G__25999 = "relative";
var G__26000 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25996,G__25997,G__25998,G__25999,G__26000) : hoplon.core.div.call(null,G__25996,G__25997,G__25998,G__25999,G__26000));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25988,G__25989,G__25990) : hoplon.core.div.call(null,G__25988,G__25989,G__25990));
})();
var fexpr__26005_26010 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__26003,G__26002,G__26001){
if(cljs.core.truth_(G__26001)){
return jQuery("html, body").animate((function (){var G__26006 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__26002.cljs$core$IFn$_invoke$arity$1 ? G__26002.cljs$core$IFn$_invoke$arity$1(G__26006) : G__26002.call(null,G__26006));
})(),G__26003);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__26005_26010.cljs$core$IFn$_invoke$arity$3 ? fexpr__26005_26010.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__26005_26010.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25985){
var G__25986 = cljs.core.first(seq25985);
var seq25985__$1 = cljs.core.next(seq25985);
var G__25987 = cljs.core.first(seq25985__$1);
var seq25985__$2 = cljs.core.next(seq25985__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25986,G__25987,seq25985__$2);
});

