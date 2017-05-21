// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('fonts.config');
goog.require('colours.ui_gradients');
goog.require('menu.config');
goog.require('unit.conversion');
goog.require('wheel.math.geometry');
goog.require('wheel.font.core');
goog.require('route.hoplon');
menu.flower.big_scale = 1.3;
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__8988__auto__ = [];
var len__8981__auto___23648 = arguments.length;
var i__8982__auto___23649 = (0);
while(true){
if((i__8982__auto___23649 < len__8981__auto___23648)){
args__8988__auto__.push((arguments[i__8982__auto___23649]));

var G__23650 = (i__8982__auto___23649 + (1));
i__8982__auto___23649 = G__23650;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
var G__23637 = cljs.core.cst$kw$css;
var G__23638 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23637,transition_length__$1){
return (function (G__23643,G__23644,G__23640,G__23647,G__23641,G__23645,G__23642,G__23646){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23640.cljs$core$IFn$_invoke$arity$1 ? G__23640.cljs$core$IFn$_invoke$arity$1(G__23641) : G__23640.call(null,G__23641)),cljs.core.cst$kw$bottom,(G__23640.cljs$core$IFn$_invoke$arity$1 ? G__23640.cljs$core$IFn$_invoke$arity$1(G__23641) : G__23640.call(null,G__23641)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23642),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23643)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23644;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23645.cljs$core$IFn$_invoke$arity$1 ? G__23645.cljs$core$IFn$_invoke$arity$1(G__23646) : G__23645.call(null,G__23646));
} else {
return and__7748__auto__;
}
})())?G__23647:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23637,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23639 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23637,G__23638,G__23639) : hoplon.core.div.call(null,G__23637,G__23638,G__23639));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23632){
var G__23633 = cljs.core.first(seq23632);
var seq23632__$1 = cljs.core.next(seq23632);
var G__23634 = cljs.core.first(seq23632__$1);
var seq23632__$2 = cljs.core.next(seq23632__$1);
var G__23635 = cljs.core.first(seq23632__$2);
var seq23632__$3 = cljs.core.next(seq23632__$2);
var G__23636 = cljs.core.first(seq23632__$3);
var seq23632__$4 = cljs.core.next(seq23632__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23633,G__23634,G__23635,G__23636,seq23632__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__7760__auto__ = open_QMARK_;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__7760__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
var G__23721 = cljs.core.cst$kw$click;
var G__23722 = ((function (G__23721,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23721,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23723 = cljs.core.cst$kw$mouseenter;
var G__23724 = ((function (G__23721,G__23722,G__23723,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23721,G__23722,G__23723,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23725 = cljs.core.cst$kw$mouseleave;
var G__23726 = ((function (G__23721,G__23722,G__23723,G__23724,G__23725,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23721,G__23722,G__23723,G__23724,G__23725,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23727 = cljs.core.cst$kw$css;
var G__23728 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23731,G__23736,G__23733,G__23732,G__23734,G__23735,G__23730){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23730;
if(cljs.core.truth_(and__7748__auto__)){
return G__23731;
} else {
return and__7748__auto__;
}
})())?G__23732:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23737 = (- G__23734);
return (G__23733.cljs$core$IFn$_invoke$arity$1 ? G__23733.cljs$core$IFn$_invoke$arity$1(G__23737) : G__23733.call(null,G__23737));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23735),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23736)].join(''),(G__23734 * (2)),"pointer",(1),"absolute",(G__23733.cljs$core$IFn$_invoke$arity$1 ? G__23733.cljs$core$IFn$_invoke$arity$1(G__23734) : G__23733.call(null,G__23734)),(G__23734 * (2)),(function (){var G__23738 = (- G__23734);
return (G__23733.cljs$core$IFn$_invoke$arity$1 ? G__23733.cljs$core$IFn$_invoke$arity$1(G__23738) : G__23733.call(null,G__23738));
})()]);
});})(G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23729 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23739){
return (G__23739 / (2));
});})(G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23741,G__23740){
return ((G__23740 * Math.sin((G__23741.cljs$core$IFn$_invoke$arity$1 ? G__23741.cljs$core$IFn$_invoke$arity$1((45)) : G__23741.call(null,(45))))) / (2));
});})(width,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23742){
return (G__23742 / (12));
});})(width,rotated_offset,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23744,G__23743){
return (G__23743 + (- (G__23744 / (2))));
});})(width,rotated_offset,height,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23746,G__23745){
return (G__23745 + (- (G__23746 / (2))));
});})(width,rotated_offset,height,left,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23747,G__23748){
var G__23749 = (G__23748.cljs$core$IFn$_invoke$arity$0 ? G__23748.cljs$core$IFn$_invoke$arity$0() : G__23748.call(null));
return (G__23747.cljs$core$IFn$_invoke$arity$1 ? G__23747.cljs$core$IFn$_invoke$arity$1(G__23749) : G__23747.call(null,G__23749));
});})(width,rotated_offset,height,left,top,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23752,G__23753,G__23750,G__23754,G__23751,G__23755){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23750.cljs$core$IFn$_invoke$arity$1 ? G__23750.cljs$core$IFn$_invoke$arity$1(G__23751) : G__23750.call(null,G__23751)),cljs.core.cst$kw$height,(G__23750.cljs$core$IFn$_invoke$arity$1 ? G__23750.cljs$core$IFn$_invoke$arity$1(G__23752) : G__23750.call(null,G__23752)),cljs.core.cst$kw$left,(G__23750.cljs$core$IFn$_invoke$arity$1 ? G__23750.cljs$core$IFn$_invoke$arity$1(G__23753) : G__23750.call(null,G__23753)),cljs.core.cst$kw$background_DASH_color,G__23754,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23755),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23755),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23756 = cljs.core.cst$kw$css;
var G__23757 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23756,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23764,G__23762,G__23759,G__23760,G__23761,G__23758,G__23763){
var G__23765 = G__23759;
var G__23766 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23768 = (G__23761 - ((2) * G__23762));
return (G__23760.cljs$core$IFn$_invoke$arity$1 ? G__23760.cljs$core$IFn$_invoke$arity$1(G__23768) : G__23760.call(null,G__23768));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23763)?G__23764:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23763)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23767 = (cljs.core.truth_(G__23763)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23758.cljs$core$IFn$_invoke$arity$3 ? G__23758.cljs$core$IFn$_invoke$arity$3(G__23765,G__23766,G__23767) : G__23758.call(null,G__23765,G__23766,G__23767));
});})(G__23756,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23756,G__23757) : hoplon.core.div.call(null,G__23756,G__23757));
})(),(function (){var G__23769 = cljs.core.cst$kw$css;
var G__23770 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23769,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23772,G__23773,G__23774,G__23771,G__23775){
var G__23776 = G__23772;
var G__23777 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23773.cljs$core$IFn$_invoke$arity$1 ? G__23773.cljs$core$IFn$_invoke$arity$1(G__23774) : G__23773.call(null,G__23774)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23775)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23771.cljs$core$IFn$_invoke$arity$2 ? G__23771.cljs$core$IFn$_invoke$arity$2(G__23776,G__23777) : G__23771.call(null,G__23776,G__23777));
});})(G__23769,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23769,G__23770) : hoplon.core.div.call(null,G__23769,G__23770));
})(),(function (){var G__23778 = cljs.core.cst$kw$css;
var G__23779 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23778,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23786,G__23784,G__23781,G__23782,G__23783,G__23780,G__23785){
var G__23787 = G__23781;
var G__23788 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23790 = (G__23783 + ((2) * G__23784));
return (G__23782.cljs$core$IFn$_invoke$arity$1 ? G__23782.cljs$core$IFn$_invoke$arity$1(G__23790) : G__23782.call(null,G__23790));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23785)?G__23786:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23785)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23789 = (cljs.core.truth_(G__23785)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23780.cljs$core$IFn$_invoke$arity$3 ? G__23780.cljs$core$IFn$_invoke$arity$3(G__23787,G__23788,G__23789) : G__23780.call(null,G__23787,G__23788,G__23789));
});})(G__23778,width,rotated_offset,height,left,top,color,default_css,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23778,G__23779) : hoplon.core.div.call(null,G__23778,G__23779));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,G__23729) : hoplon.core.div.call(null,G__23721,G__23722,G__23723,G__23724,G__23725,G__23726,G__23727,G__23728,G__23729));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__23894,G__23895){
return (G__23894 / ((1) + G__23895));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__23897,G__23896){
return (G__23896 * G__23897);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__23899,G__23898){
return (((2) * Math.PI) / (G__23898.cljs$core$IFn$_invoke$arity$1 ? G__23898.cljs$core$IFn$_invoke$arity$1(G__23899) : G__23898.call(null,G__23899)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__23904,G__23900,G__23902,G__23901,G__23903){
var G__23905 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__23907 = G__23902;
var G__23908 = (i * G__23903);
return (G__23901.cljs$core$IFn$_invoke$arity$2 ? G__23901.cljs$core$IFn$_invoke$arity$2(G__23907,G__23908) : G__23901.call(null,G__23907,G__23908));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__23906 = G__23904;
return (G__23900.cljs$core$IFn$_invoke$arity$2 ? G__23900.cljs$core$IFn$_invoke$arity$2(G__23905,G__23906) : G__23900.call(null,G__23905,G__23906));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__23911,G__23909,G__23910){
return (G__23909 / (G__23910.cljs$core$IFn$_invoke$arity$1 ? G__23910.cljs$core$IFn$_invoke$arity$1(G__23911) : G__23910.call(null,G__23911)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__23912 = cljs.core.cst$kw$css;
var G__23913 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__23914 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23912,G__23913,G__23914) : hoplon.core.div.call(null,G__23912,G__23913,G__23914));
})(),(function (){var G__23915 = cljs.core.cst$kw$css;
var G__23916 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__23917 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__23930 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__23933){
var vec__23934 = p__23933;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23934,(0),null);
var vec__23937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23934,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23937,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23934,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23930,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23930,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23930,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23930,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23942,G__23941,G__23940){
if(cljs.core.truth_(G__23940)){
return (G__23941 * G__23942);
} else {
return (0);
}
});})(vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23943){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__23943);
});})(transition_delay,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23944){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__23944);
});})(transition_delay,url,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23945){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__23945);
});})(transition_delay,url,text,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23946,G__23947){
var and__7748__auto__ = G__23946;
if(cljs.core.truth_(and__7748__auto__)){
return G__23947;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__23948 = cljs.core.cst$kw$css;
var G__23949 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23948,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23956,G__23953,G__23957,G__23954,G__23951,G__23952,G__23955){
var G__23958 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23952),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23953),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23954),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__23959 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__23955)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23956),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23957),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__23951.cljs$core$IFn$_invoke$arity$2 ? G__23951.cljs$core$IFn$_invoke$arity$2(G__23958,G__23959) : G__23951.call(null,G__23958,G__23959));
});})(G__23948,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__23950 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23960,G__23961){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__23960)?"black":G__23961)], null);
});})(G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__23962 = cljs.core.cst$kw$mouseenter;
var G__23963 = ((function (G__23962,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__23962,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__23964 = cljs.core.cst$kw$mouseleave;
var G__23965 = ((function (G__23962,G__23963,G__23964,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__23962,G__23963,G__23964,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__23966 = cljs.core.cst$kw$click;
var G__23967 = ((function (G__23962,G__23963,G__23964,G__23965,G__23966,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__23962,G__23963,G__23964,G__23965,G__23966,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__23962,G__23963,G__23964,G__23965,G__23966,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__23962,G__23963,G__23964,G__23965,G__23966,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__23968 = cljs.core.cst$kw$css;
var G__23969 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23977,G__23975,G__23974,G__23973,G__23972,G__23976,G__23978){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23972)?G__23973:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23979 = (- G__23975);
return (G__23974.cljs$core$IFn$_invoke$arity$1 ? G__23974.cljs$core$IFn$_invoke$arity$1(G__23979) : G__23974.call(null,G__23979));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__23976 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23977)].join(''),"hidden","white",((2) * G__23975),"pointer",(cljs.core.truth_(G__23978)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23978),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__23974.cljs$core$IFn$_invoke$arity$1 ? G__23974.cljs$core$IFn$_invoke$arity$1(G__23975) : G__23974.call(null,G__23975)),"contain",((2) * G__23975),(function (){var G__23980 = (- G__23975);
return (G__23974.cljs$core$IFn$_invoke$arity$1 ? G__23974.cljs$core$IFn$_invoke$arity$1(G__23980) : G__23974.call(null,G__23980));
})()]);
});})(G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__23970 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__23981 = cljs.core.cst$kw$css;
var G__23982 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__23983 = (function (){var G__23984 = (function (){var G__23985 = cljs.core.cst$kw$valign;
var G__23986 = "center";
var G__23987 = cljs.core.cst$kw$css;
var G__23988 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__23989 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__23985,G__23986,G__23987,G__23988,G__23989) : hoplon.core.td.call(null,G__23985,G__23986,G__23987,G__23988,G__23989));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__23984) : hoplon.core.tr.call(null,G__23984));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__23981,G__23982,G__23983) : hoplon.core.table.call(null,G__23981,G__23982,G__23983));
});})(G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__23990 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23990) : cljs.core.deref.call(null,G__23990));
});})(con__14913__auto__,alt__14914__auto__,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__23971 = (function (){var G__23991 = cljs.core.cst$kw$css;
var G__23992 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23991,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23970,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23994,G__23995,G__23993,G__23996){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23993),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23994),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23995),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__23996)?(0):(1))], null);
});})(G__23991,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23970,G__23948,G__23949,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23930,x,i,y,item,G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23991,G__23992) : hoplon.core.div.call(null,G__23991,G__23992));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23970,G__23971) : hoplon.core.div.call(null,G__23962,G__23963,G__23964,G__23965,G__23966,G__23967,G__23968,G__23969,G__23970,G__23971));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23948,G__23949,G__23950) : hoplon.core.div.call(null,G__23948,G__23949,G__23950));
});})(G__23915,G__23916,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23915,G__23916,G__23917) : hoplon.core.div.call(null,G__23915,G__23916,G__23917));
})()], 0));
});
