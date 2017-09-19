// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.drawers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('menu.config');
goog.require('animation.easings');
menu.drawers.drawers = (function menu$drawers$drawers(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25778 = arguments.length;
var i__9520__auto___25779 = (0);
while(true){
if((i__9520__auto___25779 < len__9519__auto___25778)){
args__9526__auto__.push((arguments[i__9520__auto___25779]));

var G__25780 = (i__9520__auto___25779 + (1));
i__9520__auto___25779 = G__25780;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var G__25775 = cljs.core.cst$kw$css;
var G__25776 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$z_DASH_index,(0),cljs.core.cst$kw$position,"relative"], null);
var G__25777 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25775,G__25776,G__25777) : hoplon.core.div.call(null,G__25775,G__25776,G__25777));
});

menu.drawers.drawers.cljs$lang$maxFixedArity = (0);

menu.drawers.drawers.cljs$lang$applyTo = (function (seq25774){
return menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25774));
});

menu.drawers.drawer = (function menu$drawers$drawer(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25803 = arguments.length;
var i__9520__auto___25804 = (0);
while(true){
if((i__9520__auto___25804 < len__9519__auto___25803)){
args__9526__auto__.push((arguments[i__9520__auto___25804]));

var G__25805 = (i__9520__auto___25804 + (1));
i__9520__auto___25804 = G__25805;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((2) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((2)),(0),null)):null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9527__auto__);
});

menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (open_QMARK_,offset,children){
var transition_length = menu.config.transition_length;
var el = (function (){var G__25784 = cljs.core.cst$kw$css;
var G__25785 = (function (){var fexpr__25791 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25784,transition_length){
return (function (G__25790,G__25787,G__25788,G__25789){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25787),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ease_DASH_out_DASH_quart.cljs$core$IFn$_invoke$arity$1(G__25788))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25789)?G__25787:(0))),"s"].join(''),cljs.core.cst$kw$transform,["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25789)?"0px":G__25790)),")"].join(''),cljs.core.cst$kw$z_DASH_index,(cljs.core.truth_(G__25789)?(1):(0)),cljs.core.cst$kw$position,(cljs.core.truth_(G__25789)?"relative":"absolute"),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(G__25784,transition_length))
);
return (fexpr__25791.cljs$core$IFn$_invoke$arity$4 ? fexpr__25791.cljs$core$IFn$_invoke$arity$4(offset,transition_length,animation.easings.easings,open_QMARK_) : fexpr__25791.call(null,offset,transition_length,animation.easings.easings,open_QMARK_));
})();
var G__25786 = (function (){var G__25792 = cljs.core.cst$kw$class;
var G__25793 = "clearfix";
var G__25794 = cljs.core.cst$kw$position;
var G__25795 = "relative";
var G__25796 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25792,G__25793,G__25794,G__25795,G__25796) : hoplon.core.div.call(null,G__25792,G__25793,G__25794,G__25795,G__25796));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25784,G__25785,G__25786) : hoplon.core.div.call(null,G__25784,G__25785,G__25786));
})();
var fexpr__25801_25806 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,transition_length){
return (function (G__25799,G__25798,G__25797){
if(cljs.core.truth_(G__25797)){
return jQuery("html, body").animate((function (){var G__25802 = new cljs.core.PersistentArrayMap(null, 1, ["scrollTop",(0)], null);
return (G__25798.cljs$core$IFn$_invoke$arity$1 ? G__25798.cljs$core$IFn$_invoke$arity$1(G__25802) : G__25798.call(null,G__25802));
})(),G__25799);
} else {
return null;
}
});})(el,transition_length))
);
(fexpr__25801_25806.cljs$core$IFn$_invoke$arity$3 ? fexpr__25801_25806.cljs$core$IFn$_invoke$arity$3(transition_length,cljs.core.clj__GT_js,open_QMARK_) : fexpr__25801_25806.call(null,transition_length,cljs.core.clj__GT_js,open_QMARK_));

return el;
});

menu.drawers.drawer.cljs$lang$maxFixedArity = (2);

menu.drawers.drawer.cljs$lang$applyTo = (function (seq25781){
var G__25782 = cljs.core.first(seq25781);
var seq25781__$1 = cljs.core.next(seq25781);
var G__25783 = cljs.core.first(seq25781__$1);
var seq25781__$2 = cljs.core.next(seq25781__$1);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(G__25782,G__25783,seq25781__$2);
});

