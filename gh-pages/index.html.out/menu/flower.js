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
var len__8981__auto___23691 = arguments.length;
var i__8982__auto___23692 = (0);
while(true){
if((i__8982__auto___23692 < len__8981__auto___23691)){
args__8988__auto__.push((arguments[i__8982__auto___23692]));

var G__23693 = (i__8982__auto___23692 + (1));
i__8982__auto___23692 = G__23693;
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
var G__23680 = cljs.core.cst$kw$css;
var G__23681 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23680,transition_length__$1){
return (function (G__23686,G__23687,G__23683,G__23690,G__23684,G__23688,G__23685,G__23689){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23683.cljs$core$IFn$_invoke$arity$1 ? G__23683.cljs$core$IFn$_invoke$arity$1(G__23684) : G__23683.call(null,G__23684)),cljs.core.cst$kw$bottom,(G__23683.cljs$core$IFn$_invoke$arity$1 ? G__23683.cljs$core$IFn$_invoke$arity$1(G__23684) : G__23683.call(null,G__23684)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23685),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23686)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23687;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23688.cljs$core$IFn$_invoke$arity$1 ? G__23688.cljs$core$IFn$_invoke$arity$1(G__23689) : G__23688.call(null,G__23689));
} else {
return and__7748__auto__;
}
})())?G__23690:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23680,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23682 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23680,G__23681,G__23682) : hoplon.core.div.call(null,G__23680,G__23681,G__23682));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23675){
var G__23676 = cljs.core.first(seq23675);
var seq23675__$1 = cljs.core.next(seq23675);
var G__23677 = cljs.core.first(seq23675__$1);
var seq23675__$2 = cljs.core.next(seq23675__$1);
var G__23678 = cljs.core.first(seq23675__$2);
var seq23675__$3 = cljs.core.next(seq23675__$2);
var G__23679 = cljs.core.first(seq23675__$3);
var seq23675__$4 = cljs.core.next(seq23675__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23676,G__23677,G__23678,G__23679,seq23675__$4);
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
var G__23764 = cljs.core.cst$kw$click;
var G__23765 = ((function (G__23764,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23764,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23766 = cljs.core.cst$kw$mouseenter;
var G__23767 = ((function (G__23764,G__23765,G__23766,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23764,G__23765,G__23766,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23768 = cljs.core.cst$kw$mouseleave;
var G__23769 = ((function (G__23764,G__23765,G__23766,G__23767,G__23768,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23764,G__23765,G__23766,G__23767,G__23768,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23770 = cljs.core.cst$kw$css;
var G__23771 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23774,G__23779,G__23776,G__23775,G__23777,G__23778,G__23773){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23773;
if(cljs.core.truth_(and__7748__auto__)){
return G__23774;
} else {
return and__7748__auto__;
}
})())?G__23775:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23780 = (- G__23777);
return (G__23776.cljs$core$IFn$_invoke$arity$1 ? G__23776.cljs$core$IFn$_invoke$arity$1(G__23780) : G__23776.call(null,G__23780));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23778),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23779)].join(''),(G__23777 * (2)),"pointer",(1),"absolute",(G__23776.cljs$core$IFn$_invoke$arity$1 ? G__23776.cljs$core$IFn$_invoke$arity$1(G__23777) : G__23776.call(null,G__23777)),(G__23777 * (2)),(function (){var G__23781 = (- G__23777);
return (G__23776.cljs$core$IFn$_invoke$arity$1 ? G__23776.cljs$core$IFn$_invoke$arity$1(G__23781) : G__23776.call(null,G__23781));
})()]);
});})(G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23772 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23782){
return (G__23782 / (2));
});})(G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23784,G__23783){
return ((G__23783 * Math.sin((G__23784.cljs$core$IFn$_invoke$arity$1 ? G__23784.cljs$core$IFn$_invoke$arity$1((45)) : G__23784.call(null,(45))))) / (2));
});})(width,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23785){
return (G__23785 / (12));
});})(width,rotated_offset,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23787,G__23786){
return (G__23786 + (- (G__23787 / (2))));
});})(width,rotated_offset,height,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23789,G__23788){
return (G__23788 + (- (G__23789 / (2))));
});})(width,rotated_offset,height,left,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23790,G__23791){
var G__23792 = (G__23791.cljs$core$IFn$_invoke$arity$0 ? G__23791.cljs$core$IFn$_invoke$arity$0() : G__23791.call(null));
return (G__23790.cljs$core$IFn$_invoke$arity$1 ? G__23790.cljs$core$IFn$_invoke$arity$1(G__23792) : G__23790.call(null,G__23792));
});})(width,rotated_offset,height,left,top,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23795,G__23796,G__23793,G__23797,G__23794,G__23798){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23793.cljs$core$IFn$_invoke$arity$1 ? G__23793.cljs$core$IFn$_invoke$arity$1(G__23794) : G__23793.call(null,G__23794)),cljs.core.cst$kw$height,(G__23793.cljs$core$IFn$_invoke$arity$1 ? G__23793.cljs$core$IFn$_invoke$arity$1(G__23795) : G__23793.call(null,G__23795)),cljs.core.cst$kw$left,(G__23793.cljs$core$IFn$_invoke$arity$1 ? G__23793.cljs$core$IFn$_invoke$arity$1(G__23796) : G__23793.call(null,G__23796)),cljs.core.cst$kw$background_DASH_color,G__23797,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23798),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23798),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23799 = cljs.core.cst$kw$css;
var G__23800 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23799,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23807,G__23805,G__23802,G__23803,G__23804,G__23801,G__23806){
var G__23808 = G__23802;
var G__23809 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23811 = (G__23804 - ((2) * G__23805));
return (G__23803.cljs$core$IFn$_invoke$arity$1 ? G__23803.cljs$core$IFn$_invoke$arity$1(G__23811) : G__23803.call(null,G__23811));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23806)?G__23807:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23806)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23810 = (cljs.core.truth_(G__23806)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23801.cljs$core$IFn$_invoke$arity$3 ? G__23801.cljs$core$IFn$_invoke$arity$3(G__23808,G__23809,G__23810) : G__23801.call(null,G__23808,G__23809,G__23810));
});})(G__23799,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23799,G__23800) : hoplon.core.div.call(null,G__23799,G__23800));
})(),(function (){var G__23812 = cljs.core.cst$kw$css;
var G__23813 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23812,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23815,G__23816,G__23817,G__23814,G__23818){
var G__23819 = G__23815;
var G__23820 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23816.cljs$core$IFn$_invoke$arity$1 ? G__23816.cljs$core$IFn$_invoke$arity$1(G__23817) : G__23816.call(null,G__23817)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23818)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23814.cljs$core$IFn$_invoke$arity$2 ? G__23814.cljs$core$IFn$_invoke$arity$2(G__23819,G__23820) : G__23814.call(null,G__23819,G__23820));
});})(G__23812,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23812,G__23813) : hoplon.core.div.call(null,G__23812,G__23813));
})(),(function (){var G__23821 = cljs.core.cst$kw$css;
var G__23822 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23821,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23829,G__23827,G__23824,G__23825,G__23826,G__23823,G__23828){
var G__23830 = G__23824;
var G__23831 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23833 = (G__23826 + ((2) * G__23827));
return (G__23825.cljs$core$IFn$_invoke$arity$1 ? G__23825.cljs$core$IFn$_invoke$arity$1(G__23833) : G__23825.call(null,G__23833));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23828)?G__23829:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23828)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23832 = (cljs.core.truth_(G__23828)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23823.cljs$core$IFn$_invoke$arity$3 ? G__23823.cljs$core$IFn$_invoke$arity$3(G__23830,G__23831,G__23832) : G__23823.call(null,G__23830,G__23831,G__23832));
});})(G__23821,width,rotated_offset,height,left,top,color,default_css,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23821,G__23822) : hoplon.core.div.call(null,G__23821,G__23822));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772) : hoplon.core.div.call(null,G__23764,G__23765,G__23766,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__23937,G__23938){
return (G__23937 / ((1) + G__23938));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__23940,G__23939){
return (G__23939 * G__23940);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__23942,G__23941){
return (((2) * Math.PI) / (G__23941.cljs$core$IFn$_invoke$arity$1 ? G__23941.cljs$core$IFn$_invoke$arity$1(G__23942) : G__23941.call(null,G__23942)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__23947,G__23943,G__23945,G__23944,G__23946){
var G__23948 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__23950 = G__23945;
var G__23951 = (i * G__23946);
return (G__23944.cljs$core$IFn$_invoke$arity$2 ? G__23944.cljs$core$IFn$_invoke$arity$2(G__23950,G__23951) : G__23944.call(null,G__23950,G__23951));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__23949 = G__23947;
return (G__23943.cljs$core$IFn$_invoke$arity$2 ? G__23943.cljs$core$IFn$_invoke$arity$2(G__23948,G__23949) : G__23943.call(null,G__23948,G__23949));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__23954,G__23952,G__23953){
return (G__23952 / (G__23953.cljs$core$IFn$_invoke$arity$1 ? G__23953.cljs$core$IFn$_invoke$arity$1(G__23954) : G__23953.call(null,G__23954)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__23955 = cljs.core.cst$kw$css;
var G__23956 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__23957 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23955,G__23956,G__23957) : hoplon.core.div.call(null,G__23955,G__23956,G__23957));
})(),(function (){var G__23958 = cljs.core.cst$kw$css;
var G__23959 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__23960 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__23973 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__23976){
var vec__23977 = p__23976;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(0),null);
var vec__23980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23977,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23973,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23985,G__23984,G__23983){
if(cljs.core.truth_(G__23983)){
return (G__23984 * G__23985);
} else {
return (0);
}
});})(vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23986){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__23986);
});})(transition_delay,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23987){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__23987);
});})(transition_delay,url,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23988){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__23988);
});})(transition_delay,url,text,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23989,G__23990){
var and__7748__auto__ = G__23989;
if(cljs.core.truth_(and__7748__auto__)){
return G__23990;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__23991 = cljs.core.cst$kw$css;
var G__23992 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23991,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23999,G__23996,G__24000,G__23997,G__23994,G__23995,G__23998){
var G__24001 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23995),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23996),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23997),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24002 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__23998)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23999),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24000),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__23994.cljs$core$IFn$_invoke$arity$2 ? G__23994.cljs$core$IFn$_invoke$arity$2(G__24001,G__24002) : G__23994.call(null,G__24001,G__24002));
});})(G__23991,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__23993 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24003,G__24004){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24003)?"black":G__24004)], null);
});})(G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24005 = cljs.core.cst$kw$mouseenter;
var G__24006 = ((function (G__24005,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24005,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24007 = cljs.core.cst$kw$mouseleave;
var G__24008 = ((function (G__24005,G__24006,G__24007,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24005,G__24006,G__24007,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24009 = cljs.core.cst$kw$click;
var G__24010 = ((function (G__24005,G__24006,G__24007,G__24008,G__24009,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24005,G__24006,G__24007,G__24008,G__24009,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24005,G__24006,G__24007,G__24008,G__24009,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24005,G__24006,G__24007,G__24008,G__24009,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24011 = cljs.core.cst$kw$css;
var G__24012 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24020,G__24018,G__24017,G__24016,G__24015,G__24019,G__24021){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24015)?G__24016:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24022 = (- G__24018);
return (G__24017.cljs$core$IFn$_invoke$arity$1 ? G__24017.cljs$core$IFn$_invoke$arity$1(G__24022) : G__24017.call(null,G__24022));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24019 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24020)].join(''),"hidden","white",((2) * G__24018),"pointer",(cljs.core.truth_(G__24021)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24021),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24017.cljs$core$IFn$_invoke$arity$1 ? G__24017.cljs$core$IFn$_invoke$arity$1(G__24018) : G__24017.call(null,G__24018)),"contain",((2) * G__24018),(function (){var G__24023 = (- G__24018);
return (G__24017.cljs$core$IFn$_invoke$arity$1 ? G__24017.cljs$core$IFn$_invoke$arity$1(G__24023) : G__24017.call(null,G__24023));
})()]);
});})(G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24013 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24024 = cljs.core.cst$kw$css;
var G__24025 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24026 = (function (){var G__24027 = (function (){var G__24028 = cljs.core.cst$kw$valign;
var G__24029 = "center";
var G__24030 = cljs.core.cst$kw$css;
var G__24031 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24032 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24028,G__24029,G__24030,G__24031,G__24032) : hoplon.core.td.call(null,G__24028,G__24029,G__24030,G__24031,G__24032));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24027) : hoplon.core.tr.call(null,G__24027));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24024,G__24025,G__24026) : hoplon.core.table.call(null,G__24024,G__24025,G__24026));
});})(G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24033 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24033) : cljs.core.deref.call(null,G__24033));
});})(con__14913__auto__,alt__14914__auto__,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24014 = (function (){var G__24034 = cljs.core.cst$kw$css;
var G__24035 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24034,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24037,G__24038,G__24036,G__24039){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24036),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24037),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24038),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24039)?(0):(1))], null);
});})(G__24034,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__23991,G__23992,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23973,x,i,y,item,G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24034,G__24035) : hoplon.core.div.call(null,G__24034,G__24035));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014) : hoplon.core.div.call(null,G__24005,G__24006,G__24007,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23991,G__23992,G__23993) : hoplon.core.div.call(null,G__23991,G__23992,G__23993));
});})(G__23958,G__23959,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23958,G__23959,G__23960) : hoplon.core.div.call(null,G__23958,G__23959,G__23960));
})()], 0));
});
