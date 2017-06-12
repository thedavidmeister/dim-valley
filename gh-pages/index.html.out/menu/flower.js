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
var len__8981__auto___23725 = arguments.length;
var i__8982__auto___23726 = (0);
while(true){
if((i__8982__auto___23726 < len__8981__auto___23725)){
args__8988__auto__.push((arguments[i__8982__auto___23726]));

var G__23727 = (i__8982__auto___23726 + (1));
i__8982__auto___23726 = G__23727;
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
var G__23714 = cljs.core.cst$kw$css;
var G__23715 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23714,transition_length__$1){
return (function (G__23720,G__23721,G__23717,G__23724,G__23718,G__23722,G__23719,G__23723){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23717.cljs$core$IFn$_invoke$arity$1 ? G__23717.cljs$core$IFn$_invoke$arity$1(G__23718) : G__23717.call(null,G__23718)),cljs.core.cst$kw$bottom,(G__23717.cljs$core$IFn$_invoke$arity$1 ? G__23717.cljs$core$IFn$_invoke$arity$1(G__23718) : G__23717.call(null,G__23718)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23719),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23720)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23721;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23722.cljs$core$IFn$_invoke$arity$1 ? G__23722.cljs$core$IFn$_invoke$arity$1(G__23723) : G__23722.call(null,G__23723));
} else {
return and__7748__auto__;
}
})())?G__23724:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23714,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23716 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23714,G__23715,G__23716) : hoplon.core.div.call(null,G__23714,G__23715,G__23716));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23709){
var G__23710 = cljs.core.first(seq23709);
var seq23709__$1 = cljs.core.next(seq23709);
var G__23711 = cljs.core.first(seq23709__$1);
var seq23709__$2 = cljs.core.next(seq23709__$1);
var G__23712 = cljs.core.first(seq23709__$2);
var seq23709__$3 = cljs.core.next(seq23709__$2);
var G__23713 = cljs.core.first(seq23709__$3);
var seq23709__$4 = cljs.core.next(seq23709__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23710,G__23711,G__23712,G__23713,seq23709__$4);
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
var G__23798 = cljs.core.cst$kw$click;
var G__23799 = ((function (G__23798,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23798,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23800 = cljs.core.cst$kw$mouseenter;
var G__23801 = ((function (G__23798,G__23799,G__23800,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23798,G__23799,G__23800,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23802 = cljs.core.cst$kw$mouseleave;
var G__23803 = ((function (G__23798,G__23799,G__23800,G__23801,G__23802,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23798,G__23799,G__23800,G__23801,G__23802,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23804 = cljs.core.cst$kw$css;
var G__23805 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23808,G__23813,G__23810,G__23809,G__23811,G__23812,G__23807){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23807;
if(cljs.core.truth_(and__7748__auto__)){
return G__23808;
} else {
return and__7748__auto__;
}
})())?G__23809:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23814 = (- G__23811);
return (G__23810.cljs$core$IFn$_invoke$arity$1 ? G__23810.cljs$core$IFn$_invoke$arity$1(G__23814) : G__23810.call(null,G__23814));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23812),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23813)].join(''),(G__23811 * (2)),"pointer",(1),"absolute",(G__23810.cljs$core$IFn$_invoke$arity$1 ? G__23810.cljs$core$IFn$_invoke$arity$1(G__23811) : G__23810.call(null,G__23811)),(G__23811 * (2)),(function (){var G__23815 = (- G__23811);
return (G__23810.cljs$core$IFn$_invoke$arity$1 ? G__23810.cljs$core$IFn$_invoke$arity$1(G__23815) : G__23810.call(null,G__23815));
})()]);
});})(G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23806 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23816){
return (G__23816 / (2));
});})(G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23818,G__23817){
return ((G__23817 * Math.sin((G__23818.cljs$core$IFn$_invoke$arity$1 ? G__23818.cljs$core$IFn$_invoke$arity$1((45)) : G__23818.call(null,(45))))) / (2));
});})(width,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23819){
return (G__23819 / (12));
});})(width,rotated_offset,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23821,G__23820){
return (G__23820 + (- (G__23821 / (2))));
});})(width,rotated_offset,height,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23823,G__23822){
return (G__23822 + (- (G__23823 / (2))));
});})(width,rotated_offset,height,left,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23824,G__23825){
var G__23826 = (G__23825.cljs$core$IFn$_invoke$arity$0 ? G__23825.cljs$core$IFn$_invoke$arity$0() : G__23825.call(null));
return (G__23824.cljs$core$IFn$_invoke$arity$1 ? G__23824.cljs$core$IFn$_invoke$arity$1(G__23826) : G__23824.call(null,G__23826));
});})(width,rotated_offset,height,left,top,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23829,G__23830,G__23827,G__23831,G__23828,G__23832){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23827.cljs$core$IFn$_invoke$arity$1 ? G__23827.cljs$core$IFn$_invoke$arity$1(G__23828) : G__23827.call(null,G__23828)),cljs.core.cst$kw$height,(G__23827.cljs$core$IFn$_invoke$arity$1 ? G__23827.cljs$core$IFn$_invoke$arity$1(G__23829) : G__23827.call(null,G__23829)),cljs.core.cst$kw$left,(G__23827.cljs$core$IFn$_invoke$arity$1 ? G__23827.cljs$core$IFn$_invoke$arity$1(G__23830) : G__23827.call(null,G__23830)),cljs.core.cst$kw$background_DASH_color,G__23831,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23832),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23832),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23833 = cljs.core.cst$kw$css;
var G__23834 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23833,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23841,G__23839,G__23836,G__23837,G__23838,G__23835,G__23840){
var G__23842 = G__23836;
var G__23843 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23845 = (G__23838 - ((2) * G__23839));
return (G__23837.cljs$core$IFn$_invoke$arity$1 ? G__23837.cljs$core$IFn$_invoke$arity$1(G__23845) : G__23837.call(null,G__23845));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23840)?G__23841:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23840)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23844 = (cljs.core.truth_(G__23840)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23835.cljs$core$IFn$_invoke$arity$3 ? G__23835.cljs$core$IFn$_invoke$arity$3(G__23842,G__23843,G__23844) : G__23835.call(null,G__23842,G__23843,G__23844));
});})(G__23833,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23833,G__23834) : hoplon.core.div.call(null,G__23833,G__23834));
})(),(function (){var G__23846 = cljs.core.cst$kw$css;
var G__23847 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23846,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23849,G__23850,G__23851,G__23848,G__23852){
var G__23853 = G__23849;
var G__23854 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23850.cljs$core$IFn$_invoke$arity$1 ? G__23850.cljs$core$IFn$_invoke$arity$1(G__23851) : G__23850.call(null,G__23851)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23852)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23848.cljs$core$IFn$_invoke$arity$2 ? G__23848.cljs$core$IFn$_invoke$arity$2(G__23853,G__23854) : G__23848.call(null,G__23853,G__23854));
});})(G__23846,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23846,G__23847) : hoplon.core.div.call(null,G__23846,G__23847));
})(),(function (){var G__23855 = cljs.core.cst$kw$css;
var G__23856 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23855,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23863,G__23861,G__23858,G__23859,G__23860,G__23857,G__23862){
var G__23864 = G__23858;
var G__23865 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23867 = (G__23860 + ((2) * G__23861));
return (G__23859.cljs$core$IFn$_invoke$arity$1 ? G__23859.cljs$core$IFn$_invoke$arity$1(G__23867) : G__23859.call(null,G__23867));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23862)?G__23863:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23862)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23866 = (cljs.core.truth_(G__23862)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23857.cljs$core$IFn$_invoke$arity$3 ? G__23857.cljs$core$IFn$_invoke$arity$3(G__23864,G__23865,G__23866) : G__23857.call(null,G__23864,G__23865,G__23866));
});})(G__23855,width,rotated_offset,height,left,top,color,default_css,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23855,G__23856) : hoplon.core.div.call(null,G__23855,G__23856));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,G__23806) : hoplon.core.div.call(null,G__23798,G__23799,G__23800,G__23801,G__23802,G__23803,G__23804,G__23805,G__23806));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__23971,G__23972){
return (G__23971 / ((1) + G__23972));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__23974,G__23973){
return (G__23973 * G__23974);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__23976,G__23975){
return (((2) * Math.PI) / (G__23975.cljs$core$IFn$_invoke$arity$1 ? G__23975.cljs$core$IFn$_invoke$arity$1(G__23976) : G__23975.call(null,G__23976)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__23981,G__23977,G__23979,G__23978,G__23980){
var G__23982 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__23984 = G__23979;
var G__23985 = (i * G__23980);
return (G__23978.cljs$core$IFn$_invoke$arity$2 ? G__23978.cljs$core$IFn$_invoke$arity$2(G__23984,G__23985) : G__23978.call(null,G__23984,G__23985));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__23983 = G__23981;
return (G__23977.cljs$core$IFn$_invoke$arity$2 ? G__23977.cljs$core$IFn$_invoke$arity$2(G__23982,G__23983) : G__23977.call(null,G__23982,G__23983));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__23988,G__23986,G__23987){
return (G__23986 / (G__23987.cljs$core$IFn$_invoke$arity$1 ? G__23987.cljs$core$IFn$_invoke$arity$1(G__23988) : G__23987.call(null,G__23988)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__23989 = cljs.core.cst$kw$css;
var G__23990 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__23991 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23989,G__23990,G__23991) : hoplon.core.div.call(null,G__23989,G__23990,G__23991));
})(),(function (){var G__23992 = cljs.core.cst$kw$css;
var G__23993 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__23994 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24007 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24010){
var vec__24011 = p__24010;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24011,(0),null);
var vec__24014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24011,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24014,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24011,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24007,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24019,G__24018,G__24017){
if(cljs.core.truth_(G__24017)){
return (G__24018 * G__24019);
} else {
return (0);
}
});})(vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24020){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24020);
});})(transition_delay,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24021){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24021);
});})(transition_delay,url,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24022){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24022);
});})(transition_delay,url,text,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24023,G__24024){
var and__7748__auto__ = G__24023;
if(cljs.core.truth_(and__7748__auto__)){
return G__24024;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24025 = cljs.core.cst$kw$css;
var G__24026 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24025,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24033,G__24030,G__24034,G__24031,G__24028,G__24029,G__24032){
var G__24035 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24029),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24030),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24031),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24036 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24032)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24033),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24034),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24028.cljs$core$IFn$_invoke$arity$2 ? G__24028.cljs$core$IFn$_invoke$arity$2(G__24035,G__24036) : G__24028.call(null,G__24035,G__24036));
});})(G__24025,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24027 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24037,G__24038){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24037)?"black":G__24038)], null);
});})(G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24039 = cljs.core.cst$kw$mouseenter;
var G__24040 = ((function (G__24039,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24039,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24041 = cljs.core.cst$kw$mouseleave;
var G__24042 = ((function (G__24039,G__24040,G__24041,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24039,G__24040,G__24041,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24043 = cljs.core.cst$kw$click;
var G__24044 = ((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24045 = cljs.core.cst$kw$css;
var G__24046 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24054,G__24052,G__24051,G__24050,G__24049,G__24053,G__24055){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24049)?G__24050:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24056 = (- G__24052);
return (G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24056) : G__24051.call(null,G__24056));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24053 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24054)].join(''),"hidden","white",((2) * G__24052),"pointer",(cljs.core.truth_(G__24055)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24055),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24052) : G__24051.call(null,G__24052)),"contain",((2) * G__24052),(function (){var G__24057 = (- G__24052);
return (G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24057) : G__24051.call(null,G__24057));
})()]);
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24047 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24058 = cljs.core.cst$kw$css;
var G__24059 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24060 = (function (){var G__24061 = (function (){var G__24062 = cljs.core.cst$kw$valign;
var G__24063 = "center";
var G__24064 = cljs.core.cst$kw$css;
var G__24065 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24066 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24062,G__24063,G__24064,G__24065,G__24066) : hoplon.core.td.call(null,G__24062,G__24063,G__24064,G__24065,G__24066));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24061) : hoplon.core.tr.call(null,G__24061));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24058,G__24059,G__24060) : hoplon.core.table.call(null,G__24058,G__24059,G__24060));
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24067 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24067) : cljs.core.deref.call(null,G__24067));
});})(con__14913__auto__,alt__14914__auto__,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24048 = (function (){var G__24068 = cljs.core.cst$kw$css;
var G__24069 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24068,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24071,G__24072,G__24070,G__24073){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24070),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24071),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24072),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24073)?(0):(1))], null);
});})(G__24068,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047,G__24025,G__24026,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24007,x,i,y,item,G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24068,G__24069) : hoplon.core.div.call(null,G__24068,G__24069));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047,G__24048) : hoplon.core.div.call(null,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047,G__24048));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24025,G__24026,G__24027) : hoplon.core.div.call(null,G__24025,G__24026,G__24027));
});})(G__23992,G__23993,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23992,G__23993,G__23994) : hoplon.core.div.call(null,G__23992,G__23993,G__23994));
})()], 0));
});
