// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var args__9526__auto__ = [];
var len__9519__auto___24840 = arguments.length;
var i__9520__auto___24841 = (0);
while(true){
if((i__9520__auto___24841 < len__9519__auto___24840)){
args__9526__auto__.push((arguments[i__9520__auto___24841]));

var G__24842 = (i__9520__auto___24841 + (1));
i__9520__auto___24841 = G__24842;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
var G__24828 = cljs.core.cst$kw$css;
var G__24829 = (function (){var fexpr__24839 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24828,transition_length__$1){
return (function (G__24834,G__24835,G__24831,G__24838,G__24832,G__24836,G__24833,G__24837){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24831.cljs$core$IFn$_invoke$arity$1 ? G__24831.cljs$core$IFn$_invoke$arity$1(G__24832) : G__24831.call(null,G__24832)),cljs.core.cst$kw$bottom,(G__24831.cljs$core$IFn$_invoke$arity$1 ? G__24831.cljs$core$IFn$_invoke$arity$1(G__24832) : G__24831.call(null,G__24832)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24833),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24834)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24835;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24836.cljs$core$IFn$_invoke$arity$1 ? G__24836.cljs$core$IFn$_invoke$arity$1(G__24837) : G__24836.call(null,G__24837));
} else {
return and__8230__auto__;
}
})())?G__24838:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24828,transition_length__$1))
);
return (fexpr__24839.cljs$core$IFn$_invoke$arity$8 ? fexpr__24839.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24839.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24830 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24828,G__24829,G__24830) : hoplon.core.div.call(null,G__24828,G__24829,G__24830));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24823){
var G__24824 = cljs.core.first(seq24823);
var seq24823__$1 = cljs.core.next(seq24823);
var G__24825 = cljs.core.first(seq24823__$1);
var seq24823__$2 = cljs.core.next(seq24823__$1);
var G__24826 = cljs.core.first(seq24823__$2);
var seq24823__$3 = cljs.core.next(seq24823__$2);
var G__24827 = cljs.core.first(seq24823__$3);
var seq24823__$4 = cljs.core.next(seq24823__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24824,G__24825,G__24826,G__24827,seq24823__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__8242__auto__ = open_QMARK_;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__8242__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
var G__24843 = cljs.core.cst$kw$click;
var G__24844 = ((function (G__24843,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24843,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24845 = cljs.core.cst$kw$mouseenter;
var G__24846 = ((function (G__24843,G__24844,G__24845,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24843,G__24844,G__24845,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24847 = cljs.core.cst$kw$mouseleave;
var G__24848 = ((function (G__24843,G__24844,G__24845,G__24846,G__24847,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24843,G__24844,G__24845,G__24846,G__24847,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24849 = cljs.core.cst$kw$css;
var G__24850 = (function (){var fexpr__24861 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24853,G__24858,G__24855,G__24854,G__24856,G__24857,G__24852){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24852;
if(cljs.core.truth_(and__8230__auto__)){
return G__24853;
} else {
return and__8230__auto__;
}
})())?G__24854:(1))),")"].join(''),(function (){var G__24862 = (- G__24856);
return (G__24855.cljs$core$IFn$_invoke$arity$1 ? G__24855.cljs$core$IFn$_invoke$arity$1(G__24862) : G__24855.call(null,G__24862));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24857),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24858)].join(''),(G__24856 * (2)),"pointer",(1),"absolute",(G__24855.cljs$core$IFn$_invoke$arity$1 ? G__24855.cljs$core$IFn$_invoke$arity$1(G__24856) : G__24855.call(null,G__24856)),(G__24856 * (2)),(function (){var G__24863 = (- G__24856);
return (G__24855.cljs$core$IFn$_invoke$arity$1 ? G__24855.cljs$core$IFn$_invoke$arity$1(G__24863) : G__24855.call(null,G__24863));
})()]);
});})(G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24861.cljs$core$IFn$_invoke$arity$7 ? fexpr__24861.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__24861.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24851 = (function (){var width = (function (){var fexpr__24865 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24864){
return (G__24864 / (2));
});})(G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24865.cljs$core$IFn$_invoke$arity$1 ? fexpr__24865.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__24865.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__24868 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24867,G__24866){
return ((G__24866 * Math.sin((G__24867.cljs$core$IFn$_invoke$arity$1 ? G__24867.cljs$core$IFn$_invoke$arity$1((45)) : G__24867.call(null,(45))))) / (2));
});})(width,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24868.cljs$core$IFn$_invoke$arity$2 ? fexpr__24868.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__24868.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__24870 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24869){
return (G__24869 / (12));
});})(width,rotated_offset,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24870.cljs$core$IFn$_invoke$arity$1 ? fexpr__24870.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__24870.call(null,radius));
})();
var left = (function (){var fexpr__24873 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24872,G__24871){
return (G__24871 + (- (G__24872 / (2))));
});})(width,rotated_offset,height,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24873.cljs$core$IFn$_invoke$arity$2 ? fexpr__24873.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__24873.call(null,width,radius));
})();
var top = (function (){var fexpr__24876 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24875,G__24874){
return (G__24874 + (- (G__24875 / (2))));
});})(width,rotated_offset,height,left,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24876.cljs$core$IFn$_invoke$arity$2 ? fexpr__24876.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__24876.call(null,height,radius));
})();
var color = (function (){var fexpr__24880 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24877,G__24878){
var G__24881 = (G__24878.cljs$core$IFn$_invoke$arity$0 ? G__24878.cljs$core$IFn$_invoke$arity$0() : G__24878.call(null));
return (G__24877.cljs$core$IFn$_invoke$arity$1 ? G__24877.cljs$core$IFn$_invoke$arity$1(G__24881) : G__24877.call(null,G__24881));
});})(width,rotated_offset,height,left,top,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24880.cljs$core$IFn$_invoke$arity$2 ? fexpr__24880.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__24880.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__24888 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24884,G__24885,G__24882,G__24886,G__24883,G__24887){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24882.cljs$core$IFn$_invoke$arity$1 ? G__24882.cljs$core$IFn$_invoke$arity$1(G__24883) : G__24882.call(null,G__24883)),cljs.core.cst$kw$height,(G__24882.cljs$core$IFn$_invoke$arity$1 ? G__24882.cljs$core$IFn$_invoke$arity$1(G__24884) : G__24882.call(null,G__24884)),cljs.core.cst$kw$left,(G__24882.cljs$core$IFn$_invoke$arity$1 ? G__24882.cljs$core$IFn$_invoke$arity$1(G__24885) : G__24882.call(null,G__24885)),cljs.core.cst$kw$background_DASH_color,G__24886,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24887),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24887),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24888.cljs$core$IFn$_invoke$arity$6 ? fexpr__24888.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__24888.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24889 = cljs.core.cst$kw$css;
var G__24890 = (function (){var fexpr__24902 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24889,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24897,G__24895,G__24892,G__24893,G__24894,G__24891,G__24896){
var G__24903 = G__24892;
var G__24904 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24906 = (G__24894 - ((2) * G__24895));
return (G__24893.cljs$core$IFn$_invoke$arity$1 ? G__24893.cljs$core$IFn$_invoke$arity$1(G__24906) : G__24893.call(null,G__24906));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24896)?G__24897:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24896)?"45deg":"0deg")),") "].join('')], null);
var G__24905 = (cljs.core.truth_(G__24896)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24891.cljs$core$IFn$_invoke$arity$3 ? G__24891.cljs$core$IFn$_invoke$arity$3(G__24903,G__24904,G__24905) : G__24891.call(null,G__24903,G__24904,G__24905));
});})(G__24889,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24902.cljs$core$IFn$_invoke$arity$7 ? fexpr__24902.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24902.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24889,G__24890) : hoplon.core.div.call(null,G__24889,G__24890));
})(),(function (){var G__24907 = cljs.core.cst$kw$css;
var G__24908 = (function (){var fexpr__24916 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24907,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24910,G__24911,G__24912,G__24909,G__24913){
var G__24917 = G__24910;
var G__24918 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24911.cljs$core$IFn$_invoke$arity$1 ? G__24911.cljs$core$IFn$_invoke$arity$1(G__24912) : G__24911.call(null,G__24912)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24913)?(0):(1))),")"].join('')], null);
return (G__24909.cljs$core$IFn$_invoke$arity$2 ? G__24909.cljs$core$IFn$_invoke$arity$2(G__24917,G__24918) : G__24909.call(null,G__24917,G__24918));
});})(G__24907,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24916.cljs$core$IFn$_invoke$arity$5 ? fexpr__24916.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24916.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24907,G__24908) : hoplon.core.div.call(null,G__24907,G__24908));
})(),(function (){var G__24919 = cljs.core.cst$kw$css;
var G__24920 = (function (){var fexpr__24932 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24919,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24927,G__24925,G__24922,G__24923,G__24924,G__24921,G__24926){
var G__24933 = G__24922;
var G__24934 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24936 = (G__24924 + ((2) * G__24925));
return (G__24923.cljs$core$IFn$_invoke$arity$1 ? G__24923.cljs$core$IFn$_invoke$arity$1(G__24936) : G__24923.call(null,G__24936));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24926)?G__24927:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24926)?"-45deg":"0deg")),") "].join('')], null);
var G__24935 = (cljs.core.truth_(G__24926)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24921.cljs$core$IFn$_invoke$arity$3 ? G__24921.cljs$core$IFn$_invoke$arity$3(G__24933,G__24934,G__24935) : G__24921.call(null,G__24933,G__24934,G__24935));
});})(G__24919,width,rotated_offset,height,left,top,color,default_css,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24932.cljs$core$IFn$_invoke$arity$7 ? fexpr__24932.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24932.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24919,G__24920) : hoplon.core.div.call(null,G__24919,G__24920));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,G__24851) : hoplon.core.div.call(null,G__24843,G__24844,G__24845,G__24846,G__24847,G__24848,G__24849,G__24850,G__24851));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__24939 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24937,G__24938){
return (G__24937 / ((1) + G__24938));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__24939.cljs$core$IFn$_invoke$arity$2 ? fexpr__24939.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__24939.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__24942 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24941,G__24940){
return (G__24940 * G__24941);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__24942.cljs$core$IFn$_invoke$arity$2 ? fexpr__24942.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__24942.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__24945 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24944,G__24943){
return (((2) * Math.PI) / (G__24943.cljs$core$IFn$_invoke$arity$1 ? G__24943.cljs$core$IFn$_invoke$arity$1(G__24944) : G__24943.call(null,G__24944)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__24945.cljs$core$IFn$_invoke$arity$2 ? fexpr__24945.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__24945.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__24955 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24950,G__24946,G__24948,G__24947,G__24949){
var G__24956 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24958 = G__24948;
var G__24959 = (i * G__24949);
return (G__24947.cljs$core$IFn$_invoke$arity$2 ? G__24947.cljs$core$IFn$_invoke$arity$2(G__24958,G__24959) : G__24947.call(null,G__24958,G__24959));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24957 = G__24950;
return (G__24946.cljs$core$IFn$_invoke$arity$2 ? G__24946.cljs$core$IFn$_invoke$arity$2(G__24956,G__24957) : G__24946.call(null,G__24956,G__24957));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__24955.cljs$core$IFn$_invoke$arity$5 ? fexpr__24955.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__24955.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__24963 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24962,G__24960,G__24961){
return (G__24960 / (G__24961.cljs$core$IFn$_invoke$arity$1 ? G__24961.cljs$core$IFn$_invoke$arity$1(G__24962) : G__24961.call(null,G__24962)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__24963.cljs$core$IFn$_invoke$arity$3 ? fexpr__24963.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__24963.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__24964 = cljs.core.cst$kw$css;
var G__24965 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24966 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24964,G__24965,G__24966) : hoplon.core.div.call(null,G__24964,G__24965,G__24966));
})(),(function (){var G__24967 = cljs.core.cst$kw$css;
var G__24968 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24969 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18517__auto__){
var vec__24982 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__24992 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24993){
var vec__24994 = p__24993;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(0),null);
var vec__24997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24997,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24997,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__24992.cljs$core$IFn$_invoke$arity$1 ? fexpr__24992.cljs$core$IFn$_invoke$arity$1(item__18517__auto__) : fexpr__24992.call(null,item__18517__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(3),null);
var transition_delay = (function (){var fexpr__25003 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25002,G__25001,G__25000){
if(cljs.core.truth_(G__25000)){
return (G__25001 * G__25002);
} else {
return (0);
}
});})(vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25003.cljs$core$IFn$_invoke$arity$3 ? fexpr__25003.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25003.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25005 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25004){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25004);
});})(transition_delay,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25005.cljs$core$IFn$_invoke$arity$1 ? fexpr__25005.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25005.call(null,item));
})();
var text = (function (){var fexpr__25007 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25006){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25006);
});})(transition_delay,url,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25007.cljs$core$IFn$_invoke$arity$1 ? fexpr__25007.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25007.call(null,item));
})();
var handler = (function (){var fexpr__25009 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25008){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25008);
});})(transition_delay,url,text,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25009.cljs$core$IFn$_invoke$arity$1 ? fexpr__25009.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25009.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25012 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25010,G__25011){
var and__8230__auto__ = G__25010;
if(cljs.core.truth_(and__8230__auto__)){
return G__25011;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25012.cljs$core$IFn$_invoke$arity$2 ? fexpr__25012.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25012.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25013 = cljs.core.cst$kw$css;
var G__25014 = (function (){var fexpr__25025 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25013,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25021,G__25018,G__25022,G__25019,G__25016,G__25017,G__25020){
var G__25026 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25017),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25018)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25019),"s"].join('')], null);
var G__25027 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25020)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25021),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25022),"px)"].join(''):"translate(0, 0)")], null);
return (G__25016.cljs$core$IFn$_invoke$arity$2 ? G__25016.cljs$core$IFn$_invoke$arity$2(G__25026,G__25027) : G__25016.call(null,G__25026,G__25027));
});})(G__25013,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25025.cljs$core$IFn$_invoke$arity$7 ? fexpr__25025.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25025.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25015 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25030 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25028,G__25029){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25028)?"black":G__25029)], null);
});})(G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25030.cljs$core$IFn$_invoke$arity$2 ? fexpr__25030.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25030.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25031 = cljs.core.cst$kw$mouseenter;
var G__25032 = ((function (G__25031,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25031,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25033 = cljs.core.cst$kw$mouseleave;
var G__25034 = ((function (G__25031,G__25032,G__25033,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25031,G__25032,G__25033,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25035 = cljs.core.cst$kw$click;
var G__25036 = ((function (G__25031,G__25032,G__25033,G__25034,G__25035,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25031,G__25032,G__25033,G__25034,G__25035,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25031,G__25032,G__25033,G__25034,G__25035,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25031,G__25032,G__25033,G__25034,G__25035,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25037 = cljs.core.cst$kw$css;
var G__25038 = (function (){var fexpr__25050 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25046,G__25044,G__25043,G__25042,G__25041,G__25045,G__25047){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25041)?G__25042:(1))),")"].join(''),(function (){var G__25051 = (- G__25044);
return (G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25051) : G__25043.call(null,G__25051));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25045 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25046)].join(''),"hidden","white",((2) * G__25044),"pointer",(cljs.core.truth_(G__25047)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25047),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25044) : G__25043.call(null,G__25044)),"contain",((2) * G__25044),(function (){var G__25052 = (- G__25044);
return (G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25052) : G__25043.call(null,G__25052));
})()]);
});})(G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25050.cljs$core$IFn$_invoke$arity$7 ? fexpr__25050.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25050.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25039 = (function (){var con__18527__auto__ = (new cljs.core.Delay(((function (G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25053 = cljs.core.cst$kw$css;
var G__25054 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25055 = (function (){var G__25056 = (function (){var G__25057 = cljs.core.cst$kw$valign;
var G__25058 = "center";
var G__25059 = cljs.core.cst$kw$css;
var G__25060 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25061 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25057,G__25058,G__25059,G__25060,G__25061) : hoplon.core.td.call(null,G__25057,G__25058,G__25059,G__25060,G__25061));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25056) : hoplon.core.tr.call(null,G__25056));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25053,G__25054,G__25055) : hoplon.core.table.call(null,G__25053,G__25054,G__25055));
});})(G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18528__auto__ = (new cljs.core.Delay(((function (con__18527__auto__,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18527__auto__,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18529__auto__ = ((function (con__18527__auto__,alt__18528__auto__,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18530__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18530__auto__)?con__18527__auto__:alt__18528__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18527__auto__,alt__18528__auto__,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25062 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18529__auto__);
return (fexpr__25062.cljs$core$IFn$_invoke$arity$1 ? fexpr__25062.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25062.call(null,text));
})();
var G__25040 = (function (){var G__25063 = cljs.core.cst$kw$css;
var G__25064 = (function (){var fexpr__25069 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25063,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25039,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25066,G__25067,G__25065,G__25068){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25065),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25066)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25067),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25068)?(0):(1))], null);
});})(G__25063,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25039,G__25013,G__25014,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24982,x,i,y,item,G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25069.cljs$core$IFn$_invoke$arity$4 ? fexpr__25069.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25069.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25063,G__25064) : hoplon.core.div.call(null,G__25063,G__25064));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25039,G__25040) : hoplon.core.div.call(null,G__25031,G__25032,G__25033,G__25034,G__25035,G__25036,G__25037,G__25038,G__25039,G__25040));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25013,G__25014,G__25015) : hoplon.core.div.call(null,G__25013,G__25014,G__25015));
});})(G__24967,G__24968,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24967,G__24968,G__24969) : hoplon.core.div.call(null,G__24967,G__24968,G__24969));
})()], 0));
});
