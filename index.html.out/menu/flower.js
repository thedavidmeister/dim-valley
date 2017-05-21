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
var len__8981__auto___23682 = arguments.length;
var i__8982__auto___23683 = (0);
while(true){
if((i__8982__auto___23683 < len__8981__auto___23682)){
args__8988__auto__.push((arguments[i__8982__auto___23683]));

var G__23684 = (i__8982__auto___23683 + (1));
i__8982__auto___23683 = G__23684;
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
var G__23671 = cljs.core.cst$kw$css;
var G__23672 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23671,transition_length__$1){
return (function (G__23677,G__23678,G__23674,G__23681,G__23675,G__23679,G__23676,G__23680){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23674.cljs$core$IFn$_invoke$arity$1 ? G__23674.cljs$core$IFn$_invoke$arity$1(G__23675) : G__23674.call(null,G__23675)),cljs.core.cst$kw$bottom,(G__23674.cljs$core$IFn$_invoke$arity$1 ? G__23674.cljs$core$IFn$_invoke$arity$1(G__23675) : G__23674.call(null,G__23675)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23676),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23677)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23678;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23679.cljs$core$IFn$_invoke$arity$1 ? G__23679.cljs$core$IFn$_invoke$arity$1(G__23680) : G__23679.call(null,G__23680));
} else {
return and__7748__auto__;
}
})())?G__23681:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23671,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23673 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23671,G__23672,G__23673) : hoplon.core.div.call(null,G__23671,G__23672,G__23673));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23666){
var G__23667 = cljs.core.first(seq23666);
var seq23666__$1 = cljs.core.next(seq23666);
var G__23668 = cljs.core.first(seq23666__$1);
var seq23666__$2 = cljs.core.next(seq23666__$1);
var G__23669 = cljs.core.first(seq23666__$2);
var seq23666__$3 = cljs.core.next(seq23666__$2);
var G__23670 = cljs.core.first(seq23666__$3);
var seq23666__$4 = cljs.core.next(seq23666__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23667,G__23668,G__23669,G__23670,seq23666__$4);
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
var G__23755 = cljs.core.cst$kw$click;
var G__23756 = ((function (G__23755,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23755,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23757 = cljs.core.cst$kw$mouseenter;
var G__23758 = ((function (G__23755,G__23756,G__23757,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23755,G__23756,G__23757,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23759 = cljs.core.cst$kw$mouseleave;
var G__23760 = ((function (G__23755,G__23756,G__23757,G__23758,G__23759,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23755,G__23756,G__23757,G__23758,G__23759,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23761 = cljs.core.cst$kw$css;
var G__23762 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23765,G__23770,G__23767,G__23766,G__23768,G__23769,G__23764){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23764;
if(cljs.core.truth_(and__7748__auto__)){
return G__23765;
} else {
return and__7748__auto__;
}
})())?G__23766:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23771 = (- G__23768);
return (G__23767.cljs$core$IFn$_invoke$arity$1 ? G__23767.cljs$core$IFn$_invoke$arity$1(G__23771) : G__23767.call(null,G__23771));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23769),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23770)].join(''),(G__23768 * (2)),"pointer",(1),"absolute",(G__23767.cljs$core$IFn$_invoke$arity$1 ? G__23767.cljs$core$IFn$_invoke$arity$1(G__23768) : G__23767.call(null,G__23768)),(G__23768 * (2)),(function (){var G__23772 = (- G__23768);
return (G__23767.cljs$core$IFn$_invoke$arity$1 ? G__23767.cljs$core$IFn$_invoke$arity$1(G__23772) : G__23767.call(null,G__23772));
})()]);
});})(G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23763 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23773){
return (G__23773 / (2));
});})(G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23775,G__23774){
return ((G__23774 * Math.sin((G__23775.cljs$core$IFn$_invoke$arity$1 ? G__23775.cljs$core$IFn$_invoke$arity$1((45)) : G__23775.call(null,(45))))) / (2));
});})(width,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23776){
return (G__23776 / (12));
});})(width,rotated_offset,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23778,G__23777){
return (G__23777 + (- (G__23778 / (2))));
});})(width,rotated_offset,height,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23780,G__23779){
return (G__23779 + (- (G__23780 / (2))));
});})(width,rotated_offset,height,left,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23781,G__23782){
var G__23783 = (G__23782.cljs$core$IFn$_invoke$arity$0 ? G__23782.cljs$core$IFn$_invoke$arity$0() : G__23782.call(null));
return (G__23781.cljs$core$IFn$_invoke$arity$1 ? G__23781.cljs$core$IFn$_invoke$arity$1(G__23783) : G__23781.call(null,G__23783));
});})(width,rotated_offset,height,left,top,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23786,G__23787,G__23784,G__23788,G__23785,G__23789){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23784.cljs$core$IFn$_invoke$arity$1 ? G__23784.cljs$core$IFn$_invoke$arity$1(G__23785) : G__23784.call(null,G__23785)),cljs.core.cst$kw$height,(G__23784.cljs$core$IFn$_invoke$arity$1 ? G__23784.cljs$core$IFn$_invoke$arity$1(G__23786) : G__23784.call(null,G__23786)),cljs.core.cst$kw$left,(G__23784.cljs$core$IFn$_invoke$arity$1 ? G__23784.cljs$core$IFn$_invoke$arity$1(G__23787) : G__23784.call(null,G__23787)),cljs.core.cst$kw$background_DASH_color,G__23788,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23789),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23789),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23790 = cljs.core.cst$kw$css;
var G__23791 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23790,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23798,G__23796,G__23793,G__23794,G__23795,G__23792,G__23797){
var G__23799 = G__23793;
var G__23800 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23802 = (G__23795 - ((2) * G__23796));
return (G__23794.cljs$core$IFn$_invoke$arity$1 ? G__23794.cljs$core$IFn$_invoke$arity$1(G__23802) : G__23794.call(null,G__23802));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23797)?G__23798:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23797)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23801 = (cljs.core.truth_(G__23797)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23792.cljs$core$IFn$_invoke$arity$3 ? G__23792.cljs$core$IFn$_invoke$arity$3(G__23799,G__23800,G__23801) : G__23792.call(null,G__23799,G__23800,G__23801));
});})(G__23790,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23790,G__23791) : hoplon.core.div.call(null,G__23790,G__23791));
})(),(function (){var G__23803 = cljs.core.cst$kw$css;
var G__23804 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23803,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23806,G__23807,G__23808,G__23805,G__23809){
var G__23810 = G__23806;
var G__23811 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23807.cljs$core$IFn$_invoke$arity$1 ? G__23807.cljs$core$IFn$_invoke$arity$1(G__23808) : G__23807.call(null,G__23808)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23809)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23805.cljs$core$IFn$_invoke$arity$2 ? G__23805.cljs$core$IFn$_invoke$arity$2(G__23810,G__23811) : G__23805.call(null,G__23810,G__23811));
});})(G__23803,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23803,G__23804) : hoplon.core.div.call(null,G__23803,G__23804));
})(),(function (){var G__23812 = cljs.core.cst$kw$css;
var G__23813 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23812,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23820,G__23818,G__23815,G__23816,G__23817,G__23814,G__23819){
var G__23821 = G__23815;
var G__23822 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23824 = (G__23817 + ((2) * G__23818));
return (G__23816.cljs$core$IFn$_invoke$arity$1 ? G__23816.cljs$core$IFn$_invoke$arity$1(G__23824) : G__23816.call(null,G__23824));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23819)?G__23820:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23819)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23823 = (cljs.core.truth_(G__23819)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23814.cljs$core$IFn$_invoke$arity$3 ? G__23814.cljs$core$IFn$_invoke$arity$3(G__23821,G__23822,G__23823) : G__23814.call(null,G__23821,G__23822,G__23823));
});})(G__23812,width,rotated_offset,height,left,top,color,default_css,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23812,G__23813) : hoplon.core.div.call(null,G__23812,G__23813));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,G__23763) : hoplon.core.div.call(null,G__23755,G__23756,G__23757,G__23758,G__23759,G__23760,G__23761,G__23762,G__23763));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__23928,G__23929){
return (G__23928 / ((1) + G__23929));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__23931,G__23930){
return (G__23930 * G__23931);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__23933,G__23932){
return (((2) * Math.PI) / (G__23932.cljs$core$IFn$_invoke$arity$1 ? G__23932.cljs$core$IFn$_invoke$arity$1(G__23933) : G__23932.call(null,G__23933)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__23938,G__23934,G__23936,G__23935,G__23937){
var G__23939 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__23941 = G__23936;
var G__23942 = (i * G__23937);
return (G__23935.cljs$core$IFn$_invoke$arity$2 ? G__23935.cljs$core$IFn$_invoke$arity$2(G__23941,G__23942) : G__23935.call(null,G__23941,G__23942));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__23940 = G__23938;
return (G__23934.cljs$core$IFn$_invoke$arity$2 ? G__23934.cljs$core$IFn$_invoke$arity$2(G__23939,G__23940) : G__23934.call(null,G__23939,G__23940));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__23945,G__23943,G__23944){
return (G__23943 / (G__23944.cljs$core$IFn$_invoke$arity$1 ? G__23944.cljs$core$IFn$_invoke$arity$1(G__23945) : G__23944.call(null,G__23945)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__23946 = cljs.core.cst$kw$css;
var G__23947 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__23948 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23946,G__23947,G__23948) : hoplon.core.div.call(null,G__23946,G__23947,G__23948));
})(),(function (){var G__23949 = cljs.core.cst$kw$css;
var G__23950 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__23951 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__23964 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__23967){
var vec__23968 = p__23967;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23968,(0),null);
var vec__23971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23968,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23968,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23964,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23964,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23964,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23964,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23976,G__23975,G__23974){
if(cljs.core.truth_(G__23974)){
return (G__23975 * G__23976);
} else {
return (0);
}
});})(vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23977){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__23977);
});})(transition_delay,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23978){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__23978);
});})(transition_delay,url,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23979){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__23979);
});})(transition_delay,url,text,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23980,G__23981){
var and__7748__auto__ = G__23980;
if(cljs.core.truth_(and__7748__auto__)){
return G__23981;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__23982 = cljs.core.cst$kw$css;
var G__23983 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23982,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23990,G__23987,G__23991,G__23988,G__23985,G__23986,G__23989){
var G__23992 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23986),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23987),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23988),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__23993 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__23989)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23990),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23991),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__23985.cljs$core$IFn$_invoke$arity$2 ? G__23985.cljs$core$IFn$_invoke$arity$2(G__23992,G__23993) : G__23985.call(null,G__23992,G__23993));
});})(G__23982,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__23984 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23994,G__23995){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__23994)?"black":G__23995)], null);
});})(G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__23996 = cljs.core.cst$kw$mouseenter;
var G__23997 = ((function (G__23996,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__23996,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__23998 = cljs.core.cst$kw$mouseleave;
var G__23999 = ((function (G__23996,G__23997,G__23998,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__23996,G__23997,G__23998,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24000 = cljs.core.cst$kw$click;
var G__24001 = ((function (G__23996,G__23997,G__23998,G__23999,G__24000,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__23996,G__23997,G__23998,G__23999,G__24000,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__23996,G__23997,G__23998,G__23999,G__24000,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__23996,G__23997,G__23998,G__23999,G__24000,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24002 = cljs.core.cst$kw$css;
var G__24003 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24011,G__24009,G__24008,G__24007,G__24006,G__24010,G__24012){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24006)?G__24007:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24013 = (- G__24009);
return (G__24008.cljs$core$IFn$_invoke$arity$1 ? G__24008.cljs$core$IFn$_invoke$arity$1(G__24013) : G__24008.call(null,G__24013));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24010 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24011)].join(''),"hidden","white",((2) * G__24009),"pointer",(cljs.core.truth_(G__24012)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24012),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24008.cljs$core$IFn$_invoke$arity$1 ? G__24008.cljs$core$IFn$_invoke$arity$1(G__24009) : G__24008.call(null,G__24009)),"contain",((2) * G__24009),(function (){var G__24014 = (- G__24009);
return (G__24008.cljs$core$IFn$_invoke$arity$1 ? G__24008.cljs$core$IFn$_invoke$arity$1(G__24014) : G__24008.call(null,G__24014));
})()]);
});})(G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24004 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24015 = cljs.core.cst$kw$css;
var G__24016 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24017 = (function (){var G__24018 = (function (){var G__24019 = cljs.core.cst$kw$valign;
var G__24020 = "center";
var G__24021 = cljs.core.cst$kw$css;
var G__24022 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__24023 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24019,G__24020,G__24021,G__24022,G__24023) : hoplon.core.td.call(null,G__24019,G__24020,G__24021,G__24022,G__24023));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24018) : hoplon.core.tr.call(null,G__24018));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24015,G__24016,G__24017) : hoplon.core.table.call(null,G__24015,G__24016,G__24017));
});})(G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24024 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24024) : cljs.core.deref.call(null,G__24024));
});})(con__14913__auto__,alt__14914__auto__,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24005 = (function (){var G__24025 = cljs.core.cst$kw$css;
var G__24026 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24025,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__24004,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24028,G__24029,G__24027,G__24030){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24027),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24028),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24029),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24030)?(0):(1))], null);
});})(G__24025,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__24004,G__23982,G__23983,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23964,x,i,y,item,G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24025,G__24026) : hoplon.core.div.call(null,G__24025,G__24026));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__24004,G__24005) : hoplon.core.div.call(null,G__23996,G__23997,G__23998,G__23999,G__24000,G__24001,G__24002,G__24003,G__24004,G__24005));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23982,G__23983,G__23984) : hoplon.core.div.call(null,G__23982,G__23983,G__23984));
});})(G__23949,G__23950,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23949,G__23950,G__23951) : hoplon.core.div.call(null,G__23949,G__23950,G__23951));
})()], 0));
});
