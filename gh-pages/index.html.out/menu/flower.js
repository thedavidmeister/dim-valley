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
var len__8981__auto___23875 = arguments.length;
var i__8982__auto___23876 = (0);
while(true){
if((i__8982__auto___23876 < len__8981__auto___23875)){
args__8988__auto__.push((arguments[i__8982__auto___23876]));

var G__23877 = (i__8982__auto___23876 + (1));
i__8982__auto___23876 = G__23877;
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
var G__23864 = cljs.core.cst$kw$css;
var G__23865 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23864,transition_length__$1){
return (function (G__23870,G__23871,G__23867,G__23874,G__23868,G__23872,G__23869,G__23873){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23867.cljs$core$IFn$_invoke$arity$1 ? G__23867.cljs$core$IFn$_invoke$arity$1(G__23868) : G__23867.call(null,G__23868)),cljs.core.cst$kw$bottom,(G__23867.cljs$core$IFn$_invoke$arity$1 ? G__23867.cljs$core$IFn$_invoke$arity$1(G__23868) : G__23867.call(null,G__23868)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23869),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23870)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23871;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23872.cljs$core$IFn$_invoke$arity$1 ? G__23872.cljs$core$IFn$_invoke$arity$1(G__23873) : G__23872.call(null,G__23873));
} else {
return and__7748__auto__;
}
})())?G__23874:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23864,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23866 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23864,G__23865,G__23866) : hoplon.core.div.call(null,G__23864,G__23865,G__23866));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23859){
var G__23860 = cljs.core.first(seq23859);
var seq23859__$1 = cljs.core.next(seq23859);
var G__23861 = cljs.core.first(seq23859__$1);
var seq23859__$2 = cljs.core.next(seq23859__$1);
var G__23862 = cljs.core.first(seq23859__$2);
var seq23859__$3 = cljs.core.next(seq23859__$2);
var G__23863 = cljs.core.first(seq23859__$3);
var seq23859__$4 = cljs.core.next(seq23859__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23860,G__23861,G__23862,G__23863,seq23859__$4);
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
var G__23948 = cljs.core.cst$kw$click;
var G__23949 = ((function (G__23948,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23948,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23950 = cljs.core.cst$kw$mouseenter;
var G__23951 = ((function (G__23948,G__23949,G__23950,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23948,G__23949,G__23950,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23952 = cljs.core.cst$kw$mouseleave;
var G__23953 = ((function (G__23948,G__23949,G__23950,G__23951,G__23952,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23948,G__23949,G__23950,G__23951,G__23952,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23954 = cljs.core.cst$kw$css;
var G__23955 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23958,G__23963,G__23960,G__23959,G__23961,G__23962,G__23957){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23957;
if(cljs.core.truth_(and__7748__auto__)){
return G__23958;
} else {
return and__7748__auto__;
}
})())?G__23959:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23964 = (- G__23961);
return (G__23960.cljs$core$IFn$_invoke$arity$1 ? G__23960.cljs$core$IFn$_invoke$arity$1(G__23964) : G__23960.call(null,G__23964));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23962),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23963)].join(''),(G__23961 * (2)),"pointer",(1),"absolute",(G__23960.cljs$core$IFn$_invoke$arity$1 ? G__23960.cljs$core$IFn$_invoke$arity$1(G__23961) : G__23960.call(null,G__23961)),(G__23961 * (2)),(function (){var G__23965 = (- G__23961);
return (G__23960.cljs$core$IFn$_invoke$arity$1 ? G__23960.cljs$core$IFn$_invoke$arity$1(G__23965) : G__23960.call(null,G__23965));
})()]);
});})(G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23956 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23966){
return (G__23966 / (2));
});})(G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23968,G__23967){
return ((G__23967 * Math.sin((G__23968.cljs$core$IFn$_invoke$arity$1 ? G__23968.cljs$core$IFn$_invoke$arity$1((45)) : G__23968.call(null,(45))))) / (2));
});})(width,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23969){
return (G__23969 / (12));
});})(width,rotated_offset,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23971,G__23970){
return (G__23970 + (- (G__23971 / (2))));
});})(width,rotated_offset,height,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23973,G__23972){
return (G__23972 + (- (G__23973 / (2))));
});})(width,rotated_offset,height,left,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23974,G__23975){
var G__23976 = (G__23975.cljs$core$IFn$_invoke$arity$0 ? G__23975.cljs$core$IFn$_invoke$arity$0() : G__23975.call(null));
return (G__23974.cljs$core$IFn$_invoke$arity$1 ? G__23974.cljs$core$IFn$_invoke$arity$1(G__23976) : G__23974.call(null,G__23976));
});})(width,rotated_offset,height,left,top,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23979,G__23980,G__23977,G__23981,G__23978,G__23982){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23977.cljs$core$IFn$_invoke$arity$1 ? G__23977.cljs$core$IFn$_invoke$arity$1(G__23978) : G__23977.call(null,G__23978)),cljs.core.cst$kw$height,(G__23977.cljs$core$IFn$_invoke$arity$1 ? G__23977.cljs$core$IFn$_invoke$arity$1(G__23979) : G__23977.call(null,G__23979)),cljs.core.cst$kw$left,(G__23977.cljs$core$IFn$_invoke$arity$1 ? G__23977.cljs$core$IFn$_invoke$arity$1(G__23980) : G__23977.call(null,G__23980)),cljs.core.cst$kw$background_DASH_color,G__23981,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23982),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23982),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23983 = cljs.core.cst$kw$css;
var G__23984 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23983,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23991,G__23989,G__23986,G__23987,G__23988,G__23985,G__23990){
var G__23992 = G__23986;
var G__23993 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23995 = (G__23988 - ((2) * G__23989));
return (G__23987.cljs$core$IFn$_invoke$arity$1 ? G__23987.cljs$core$IFn$_invoke$arity$1(G__23995) : G__23987.call(null,G__23995));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23990)?G__23991:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23990)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23994 = (cljs.core.truth_(G__23990)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23985.cljs$core$IFn$_invoke$arity$3 ? G__23985.cljs$core$IFn$_invoke$arity$3(G__23992,G__23993,G__23994) : G__23985.call(null,G__23992,G__23993,G__23994));
});})(G__23983,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23983,G__23984) : hoplon.core.div.call(null,G__23983,G__23984));
})(),(function (){var G__23996 = cljs.core.cst$kw$css;
var G__23997 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23996,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23999,G__24000,G__24001,G__23998,G__24002){
var G__24003 = G__23999;
var G__24004 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24000.cljs$core$IFn$_invoke$arity$1 ? G__24000.cljs$core$IFn$_invoke$arity$1(G__24001) : G__24000.call(null,G__24001)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24002)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23998.cljs$core$IFn$_invoke$arity$2 ? G__23998.cljs$core$IFn$_invoke$arity$2(G__24003,G__24004) : G__23998.call(null,G__24003,G__24004));
});})(G__23996,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23996,G__23997) : hoplon.core.div.call(null,G__23996,G__23997));
})(),(function (){var G__24005 = cljs.core.cst$kw$css;
var G__24006 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24005,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24013,G__24011,G__24008,G__24009,G__24010,G__24007,G__24012){
var G__24014 = G__24008;
var G__24015 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24017 = (G__24010 + ((2) * G__24011));
return (G__24009.cljs$core$IFn$_invoke$arity$1 ? G__24009.cljs$core$IFn$_invoke$arity$1(G__24017) : G__24009.call(null,G__24017));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24012)?G__24013:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24012)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24016 = (cljs.core.truth_(G__24012)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24007.cljs$core$IFn$_invoke$arity$3 ? G__24007.cljs$core$IFn$_invoke$arity$3(G__24014,G__24015,G__24016) : G__24007.call(null,G__24014,G__24015,G__24016));
});})(G__24005,width,rotated_offset,height,left,top,color,default_css,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24005,G__24006) : hoplon.core.div.call(null,G__24005,G__24006));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,G__23956) : hoplon.core.div.call(null,G__23948,G__23949,G__23950,G__23951,G__23952,G__23953,G__23954,G__23955,G__23956));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24121,G__24122){
return (G__24121 / ((1) + G__24122));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24124,G__24123){
return (G__24123 * G__24124);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24126,G__24125){
return (((2) * Math.PI) / (G__24125.cljs$core$IFn$_invoke$arity$1 ? G__24125.cljs$core$IFn$_invoke$arity$1(G__24126) : G__24125.call(null,G__24126)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24131,G__24127,G__24129,G__24128,G__24130){
var G__24132 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24134 = G__24129;
var G__24135 = (i * G__24130);
return (G__24128.cljs$core$IFn$_invoke$arity$2 ? G__24128.cljs$core$IFn$_invoke$arity$2(G__24134,G__24135) : G__24128.call(null,G__24134,G__24135));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24133 = G__24131;
return (G__24127.cljs$core$IFn$_invoke$arity$2 ? G__24127.cljs$core$IFn$_invoke$arity$2(G__24132,G__24133) : G__24127.call(null,G__24132,G__24133));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24138,G__24136,G__24137){
return (G__24136 / (G__24137.cljs$core$IFn$_invoke$arity$1 ? G__24137.cljs$core$IFn$_invoke$arity$1(G__24138) : G__24137.call(null,G__24138)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24139 = cljs.core.cst$kw$css;
var G__24140 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24141 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24139,G__24140,G__24141) : hoplon.core.div.call(null,G__24139,G__24140,G__24141));
})(),(function (){var G__24142 = cljs.core.cst$kw$css;
var G__24143 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24144 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24157 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24160){
var vec__24161 = p__24160;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24161,(0),null);
var vec__24164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24161,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24164,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24161,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24157,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24157,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24157,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24157,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24169,G__24168,G__24167){
if(cljs.core.truth_(G__24167)){
return (G__24168 * G__24169);
} else {
return (0);
}
});})(vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24170){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24170);
});})(transition_delay,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24171){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24171);
});})(transition_delay,url,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24172){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24172);
});})(transition_delay,url,text,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24173,G__24174){
var and__7748__auto__ = G__24173;
if(cljs.core.truth_(and__7748__auto__)){
return G__24174;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24175 = cljs.core.cst$kw$css;
var G__24176 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24175,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24183,G__24180,G__24184,G__24181,G__24178,G__24179,G__24182){
var G__24185 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24179),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24180),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24181),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24186 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24182)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24183),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24184),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24178.cljs$core$IFn$_invoke$arity$2 ? G__24178.cljs$core$IFn$_invoke$arity$2(G__24185,G__24186) : G__24178.call(null,G__24185,G__24186));
});})(G__24175,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24177 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24187,G__24188){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24187)?"black":G__24188)], null);
});})(G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24189 = cljs.core.cst$kw$mouseenter;
var G__24190 = ((function (G__24189,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24189,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24191 = cljs.core.cst$kw$mouseleave;
var G__24192 = ((function (G__24189,G__24190,G__24191,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24189,G__24190,G__24191,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24193 = cljs.core.cst$kw$click;
var G__24194 = ((function (G__24189,G__24190,G__24191,G__24192,G__24193,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24189,G__24190,G__24191,G__24192,G__24193,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24189,G__24190,G__24191,G__24192,G__24193,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24189,G__24190,G__24191,G__24192,G__24193,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24195 = cljs.core.cst$kw$css;
var G__24196 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24204,G__24202,G__24201,G__24200,G__24199,G__24203,G__24205){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24199)?G__24200:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24206 = (- G__24202);
return (G__24201.cljs$core$IFn$_invoke$arity$1 ? G__24201.cljs$core$IFn$_invoke$arity$1(G__24206) : G__24201.call(null,G__24206));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24203 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24204)].join(''),"hidden","white",((2) * G__24202),"pointer",(cljs.core.truth_(G__24205)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24205),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24201.cljs$core$IFn$_invoke$arity$1 ? G__24201.cljs$core$IFn$_invoke$arity$1(G__24202) : G__24201.call(null,G__24202)),"contain",((2) * G__24202),(function (){var G__24207 = (- G__24202);
return (G__24201.cljs$core$IFn$_invoke$arity$1 ? G__24201.cljs$core$IFn$_invoke$arity$1(G__24207) : G__24201.call(null,G__24207));
})()]);
});})(G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24197 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24208 = cljs.core.cst$kw$css;
var G__24209 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24210 = (function (){var G__24211 = (function (){var G__24212 = cljs.core.cst$kw$valign;
var G__24213 = "center";
var G__24214 = cljs.core.cst$kw$css;
var G__24215 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24216 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24212,G__24213,G__24214,G__24215,G__24216) : hoplon.core.td.call(null,G__24212,G__24213,G__24214,G__24215,G__24216));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24211) : hoplon.core.tr.call(null,G__24211));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24208,G__24209,G__24210) : hoplon.core.table.call(null,G__24208,G__24209,G__24210));
});})(G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24217 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24217) : cljs.core.deref.call(null,G__24217));
});})(con__14913__auto__,alt__14914__auto__,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24198 = (function (){var G__24218 = cljs.core.cst$kw$css;
var G__24219 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24218,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24197,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24221,G__24222,G__24220,G__24223){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24220),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24221),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24222),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24223)?(0):(1))], null);
});})(G__24218,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24197,G__24175,G__24176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24157,x,i,y,item,G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24218,G__24219) : hoplon.core.div.call(null,G__24218,G__24219));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24197,G__24198) : hoplon.core.div.call(null,G__24189,G__24190,G__24191,G__24192,G__24193,G__24194,G__24195,G__24196,G__24197,G__24198));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24175,G__24176,G__24177) : hoplon.core.div.call(null,G__24175,G__24176,G__24177));
});})(G__24142,G__24143,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24142,G__24143,G__24144) : hoplon.core.div.call(null,G__24142,G__24143,G__24144));
})()], 0));
});
