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
var len__8981__auto___23694 = arguments.length;
var i__8982__auto___23695 = (0);
while(true){
if((i__8982__auto___23695 < len__8981__auto___23694)){
args__8988__auto__.push((arguments[i__8982__auto___23695]));

var G__23696 = (i__8982__auto___23695 + (1));
i__8982__auto___23695 = G__23696;
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
var G__23683 = cljs.core.cst$kw$css;
var G__23684 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23683,transition_length__$1){
return (function (G__23689,G__23690,G__23686,G__23693,G__23687,G__23691,G__23688,G__23692){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23686.cljs$core$IFn$_invoke$arity$1 ? G__23686.cljs$core$IFn$_invoke$arity$1(G__23687) : G__23686.call(null,G__23687)),cljs.core.cst$kw$bottom,(G__23686.cljs$core$IFn$_invoke$arity$1 ? G__23686.cljs$core$IFn$_invoke$arity$1(G__23687) : G__23686.call(null,G__23687)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23688),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23689)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23690;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23691.cljs$core$IFn$_invoke$arity$1 ? G__23691.cljs$core$IFn$_invoke$arity$1(G__23692) : G__23691.call(null,G__23692));
} else {
return and__7748__auto__;
}
})())?G__23693:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23683,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23685 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23683,G__23684,G__23685) : hoplon.core.div.call(null,G__23683,G__23684,G__23685));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23678){
var G__23679 = cljs.core.first(seq23678);
var seq23678__$1 = cljs.core.next(seq23678);
var G__23680 = cljs.core.first(seq23678__$1);
var seq23678__$2 = cljs.core.next(seq23678__$1);
var G__23681 = cljs.core.first(seq23678__$2);
var seq23678__$3 = cljs.core.next(seq23678__$2);
var G__23682 = cljs.core.first(seq23678__$3);
var seq23678__$4 = cljs.core.next(seq23678__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23679,G__23680,G__23681,G__23682,seq23678__$4);
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
var G__23767 = cljs.core.cst$kw$click;
var G__23768 = ((function (G__23767,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23767,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23769 = cljs.core.cst$kw$mouseenter;
var G__23770 = ((function (G__23767,G__23768,G__23769,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23767,G__23768,G__23769,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23771 = cljs.core.cst$kw$mouseleave;
var G__23772 = ((function (G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23767,G__23768,G__23769,G__23770,G__23771,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23773 = cljs.core.cst$kw$css;
var G__23774 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23777,G__23782,G__23779,G__23778,G__23780,G__23781,G__23776){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23776;
if(cljs.core.truth_(and__7748__auto__)){
return G__23777;
} else {
return and__7748__auto__;
}
})())?G__23778:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23783 = (- G__23780);
return (G__23779.cljs$core$IFn$_invoke$arity$1 ? G__23779.cljs$core$IFn$_invoke$arity$1(G__23783) : G__23779.call(null,G__23783));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23781),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23782)].join(''),(G__23780 * (2)),"pointer",(1),"absolute",(G__23779.cljs$core$IFn$_invoke$arity$1 ? G__23779.cljs$core$IFn$_invoke$arity$1(G__23780) : G__23779.call(null,G__23780)),(G__23780 * (2)),(function (){var G__23784 = (- G__23780);
return (G__23779.cljs$core$IFn$_invoke$arity$1 ? G__23779.cljs$core$IFn$_invoke$arity$1(G__23784) : G__23779.call(null,G__23784));
})()]);
});})(G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23775 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23785){
return (G__23785 / (2));
});})(G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23787,G__23786){
return ((G__23786 * Math.sin((G__23787.cljs$core$IFn$_invoke$arity$1 ? G__23787.cljs$core$IFn$_invoke$arity$1((45)) : G__23787.call(null,(45))))) / (2));
});})(width,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23788){
return (G__23788 / (12));
});})(width,rotated_offset,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23790,G__23789){
return (G__23789 + (- (G__23790 / (2))));
});})(width,rotated_offset,height,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23792,G__23791){
return (G__23791 + (- (G__23792 / (2))));
});})(width,rotated_offset,height,left,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23793,G__23794){
var G__23795 = (G__23794.cljs$core$IFn$_invoke$arity$0 ? G__23794.cljs$core$IFn$_invoke$arity$0() : G__23794.call(null));
return (G__23793.cljs$core$IFn$_invoke$arity$1 ? G__23793.cljs$core$IFn$_invoke$arity$1(G__23795) : G__23793.call(null,G__23795));
});})(width,rotated_offset,height,left,top,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23798,G__23799,G__23796,G__23800,G__23797,G__23801){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23796.cljs$core$IFn$_invoke$arity$1 ? G__23796.cljs$core$IFn$_invoke$arity$1(G__23797) : G__23796.call(null,G__23797)),cljs.core.cst$kw$height,(G__23796.cljs$core$IFn$_invoke$arity$1 ? G__23796.cljs$core$IFn$_invoke$arity$1(G__23798) : G__23796.call(null,G__23798)),cljs.core.cst$kw$left,(G__23796.cljs$core$IFn$_invoke$arity$1 ? G__23796.cljs$core$IFn$_invoke$arity$1(G__23799) : G__23796.call(null,G__23799)),cljs.core.cst$kw$background_DASH_color,G__23800,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23801),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23801),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23802 = cljs.core.cst$kw$css;
var G__23803 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23802,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23810,G__23808,G__23805,G__23806,G__23807,G__23804,G__23809){
var G__23811 = G__23805;
var G__23812 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23814 = (G__23807 - ((2) * G__23808));
return (G__23806.cljs$core$IFn$_invoke$arity$1 ? G__23806.cljs$core$IFn$_invoke$arity$1(G__23814) : G__23806.call(null,G__23814));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23809)?G__23810:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23809)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23813 = (cljs.core.truth_(G__23809)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23804.cljs$core$IFn$_invoke$arity$3 ? G__23804.cljs$core$IFn$_invoke$arity$3(G__23811,G__23812,G__23813) : G__23804.call(null,G__23811,G__23812,G__23813));
});})(G__23802,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23802,G__23803) : hoplon.core.div.call(null,G__23802,G__23803));
})(),(function (){var G__23815 = cljs.core.cst$kw$css;
var G__23816 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23815,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23818,G__23819,G__23820,G__23817,G__23821){
var G__23822 = G__23818;
var G__23823 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23819.cljs$core$IFn$_invoke$arity$1 ? G__23819.cljs$core$IFn$_invoke$arity$1(G__23820) : G__23819.call(null,G__23820)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23821)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23817.cljs$core$IFn$_invoke$arity$2 ? G__23817.cljs$core$IFn$_invoke$arity$2(G__23822,G__23823) : G__23817.call(null,G__23822,G__23823));
});})(G__23815,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23815,G__23816) : hoplon.core.div.call(null,G__23815,G__23816));
})(),(function (){var G__23824 = cljs.core.cst$kw$css;
var G__23825 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23824,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23832,G__23830,G__23827,G__23828,G__23829,G__23826,G__23831){
var G__23833 = G__23827;
var G__23834 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23836 = (G__23829 + ((2) * G__23830));
return (G__23828.cljs$core$IFn$_invoke$arity$1 ? G__23828.cljs$core$IFn$_invoke$arity$1(G__23836) : G__23828.call(null,G__23836));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23831)?G__23832:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23831)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23835 = (cljs.core.truth_(G__23831)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23826.cljs$core$IFn$_invoke$arity$3 ? G__23826.cljs$core$IFn$_invoke$arity$3(G__23833,G__23834,G__23835) : G__23826.call(null,G__23833,G__23834,G__23835));
});})(G__23824,width,rotated_offset,height,left,top,color,default_css,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23824,G__23825) : hoplon.core.div.call(null,G__23824,G__23825));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,G__23775) : hoplon.core.div.call(null,G__23767,G__23768,G__23769,G__23770,G__23771,G__23772,G__23773,G__23774,G__23775));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__23940,G__23941){
return (G__23940 / ((1) + G__23941));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__23943,G__23942){
return (G__23942 * G__23943);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__23945,G__23944){
return (((2) * Math.PI) / (G__23944.cljs$core$IFn$_invoke$arity$1 ? G__23944.cljs$core$IFn$_invoke$arity$1(G__23945) : G__23944.call(null,G__23945)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__23950,G__23946,G__23948,G__23947,G__23949){
var G__23951 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__23953 = G__23948;
var G__23954 = (i * G__23949);
return (G__23947.cljs$core$IFn$_invoke$arity$2 ? G__23947.cljs$core$IFn$_invoke$arity$2(G__23953,G__23954) : G__23947.call(null,G__23953,G__23954));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__23952 = G__23950;
return (G__23946.cljs$core$IFn$_invoke$arity$2 ? G__23946.cljs$core$IFn$_invoke$arity$2(G__23951,G__23952) : G__23946.call(null,G__23951,G__23952));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__23957,G__23955,G__23956){
return (G__23955 / (G__23956.cljs$core$IFn$_invoke$arity$1 ? G__23956.cljs$core$IFn$_invoke$arity$1(G__23957) : G__23956.call(null,G__23957)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__23958 = cljs.core.cst$kw$css;
var G__23959 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__23960 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23958,G__23959,G__23960) : hoplon.core.div.call(null,G__23958,G__23959,G__23960));
})(),(function (){var G__23961 = cljs.core.cst$kw$css;
var G__23962 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__23963 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14905__auto__){
var vec__23976 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__23979){
var vec__23980 = p__23979;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980,(0),null);
var vec__23983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23983,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23983,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23980,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14905__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23976,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23988,G__23987,G__23986){
if(cljs.core.truth_(G__23986)){
return (G__23987 * G__23988);
} else {
return (0);
}
});})(vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23989){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__23989);
});})(transition_delay,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23990){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__23990);
});})(transition_delay,url,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23991){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__23991);
});})(transition_delay,url,text,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__23992,G__23993){
var and__7748__auto__ = G__23992;
if(cljs.core.truth_(and__7748__auto__)){
return G__23993;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__23994 = cljs.core.cst$kw$css;
var G__23995 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23994,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24002,G__23999,G__24003,G__24000,G__23997,G__23998,G__24001){
var G__24004 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23998),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23999),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24000),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24005 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24001)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24002),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24003),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__23997.cljs$core$IFn$_invoke$arity$2 ? G__23997.cljs$core$IFn$_invoke$arity$2(G__24004,G__24005) : G__23997.call(null,G__24004,G__24005));
});})(G__23994,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__23996 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24006,G__24007){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24006)?"black":G__24007)], null);
});})(G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24008 = cljs.core.cst$kw$mouseenter;
var G__24009 = ((function (G__24008,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24008,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24010 = cljs.core.cst$kw$mouseleave;
var G__24011 = ((function (G__24008,G__24009,G__24010,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24008,G__24009,G__24010,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24012 = cljs.core.cst$kw$click;
var G__24013 = ((function (G__24008,G__24009,G__24010,G__24011,G__24012,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24008,G__24009,G__24010,G__24011,G__24012,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24008,G__24009,G__24010,G__24011,G__24012,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24008,G__24009,G__24010,G__24011,G__24012,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24014 = cljs.core.cst$kw$css;
var G__24015 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24023,G__24021,G__24020,G__24019,G__24018,G__24022,G__24024){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24018)?G__24019:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24025 = (- G__24021);
return (G__24020.cljs$core$IFn$_invoke$arity$1 ? G__24020.cljs$core$IFn$_invoke$arity$1(G__24025) : G__24020.call(null,G__24025));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24022 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24023)].join(''),"hidden","white",((2) * G__24021),"pointer",(cljs.core.truth_(G__24024)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24024),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24020.cljs$core$IFn$_invoke$arity$1 ? G__24020.cljs$core$IFn$_invoke$arity$1(G__24021) : G__24020.call(null,G__24021)),"contain",((2) * G__24021),(function (){var G__24026 = (- G__24021);
return (G__24020.cljs$core$IFn$_invoke$arity$1 ? G__24020.cljs$core$IFn$_invoke$arity$1(G__24026) : G__24020.call(null,G__24026));
})()]);
});})(G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24016 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24027 = cljs.core.cst$kw$css;
var G__24028 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24029 = (function (){var G__24030 = (function (){var G__24031 = cljs.core.cst$kw$valign;
var G__24032 = "center";
var G__24033 = cljs.core.cst$kw$css;
var G__24034 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__24035 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24031,G__24032,G__24033,G__24034,G__24035) : hoplon.core.td.call(null,G__24031,G__24032,G__24033,G__24034,G__24035));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24030) : hoplon.core.tr.call(null,G__24030));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24027,G__24028,G__24029) : hoplon.core.table.call(null,G__24027,G__24028,G__24029));
});})(G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14915__auto__,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14918__auto__){
var G__24036 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24036) : cljs.core.deref.call(null,G__24036));
});})(con__14915__auto__,alt__14916__auto__,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,text);
})();
var G__24017 = (function (){var G__24037 = cljs.core.cst$kw$css;
var G__24038 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24037,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__24016,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24040,G__24041,G__24039,G__24042){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24039),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24040),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24041),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24042)?(0):(1))], null);
});})(G__24037,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__24016,G__23994,G__23995,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__23976,x,i,y,item,G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24037,G__24038) : hoplon.core.div.call(null,G__24037,G__24038));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__24016,G__24017) : hoplon.core.div.call(null,G__24008,G__24009,G__24010,G__24011,G__24012,G__24013,G__24014,G__24015,G__24016,G__24017));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23994,G__23995,G__23996) : hoplon.core.div.call(null,G__23994,G__23995,G__23996));
});})(G__23961,G__23962,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23961,G__23962,G__23963) : hoplon.core.div.call(null,G__23961,G__23962,G__23963));
})()], 0));
});
