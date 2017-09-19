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
var len__9519__auto___24986 = arguments.length;
var i__9520__auto___24987 = (0);
while(true){
if((i__9520__auto___24987 < len__9519__auto___24986)){
args__9526__auto__.push((arguments[i__9520__auto___24987]));

var G__24988 = (i__9520__auto___24987 + (1));
i__9520__auto___24987 = G__24988;
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
var G__24974 = cljs.core.cst$kw$css;
var G__24975 = (function (){var fexpr__24985 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24974,transition_length__$1){
return (function (G__24980,G__24981,G__24977,G__24984,G__24978,G__24982,G__24979,G__24983){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24977.cljs$core$IFn$_invoke$arity$1 ? G__24977.cljs$core$IFn$_invoke$arity$1(G__24978) : G__24977.call(null,G__24978)),cljs.core.cst$kw$bottom,(G__24977.cljs$core$IFn$_invoke$arity$1 ? G__24977.cljs$core$IFn$_invoke$arity$1(G__24978) : G__24977.call(null,G__24978)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24979),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24980)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24981;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24982.cljs$core$IFn$_invoke$arity$1 ? G__24982.cljs$core$IFn$_invoke$arity$1(G__24983) : G__24982.call(null,G__24983));
} else {
return and__8230__auto__;
}
})())?G__24984:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24974,transition_length__$1))
);
return (fexpr__24985.cljs$core$IFn$_invoke$arity$8 ? fexpr__24985.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24985.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24976 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24974,G__24975,G__24976) : hoplon.core.div.call(null,G__24974,G__24975,G__24976));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24969){
var G__24970 = cljs.core.first(seq24969);
var seq24969__$1 = cljs.core.next(seq24969);
var G__24971 = cljs.core.first(seq24969__$1);
var seq24969__$2 = cljs.core.next(seq24969__$1);
var G__24972 = cljs.core.first(seq24969__$2);
var seq24969__$3 = cljs.core.next(seq24969__$2);
var G__24973 = cljs.core.first(seq24969__$3);
var seq24969__$4 = cljs.core.next(seq24969__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24970,G__24971,G__24972,G__24973,seq24969__$4);
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
var G__24989 = cljs.core.cst$kw$click;
var G__24990 = ((function (G__24989,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24989,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24991 = cljs.core.cst$kw$mouseenter;
var G__24992 = ((function (G__24989,G__24990,G__24991,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24989,G__24990,G__24991,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24993 = cljs.core.cst$kw$mouseleave;
var G__24994 = ((function (G__24989,G__24990,G__24991,G__24992,G__24993,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24989,G__24990,G__24991,G__24992,G__24993,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24995 = cljs.core.cst$kw$css;
var G__24996 = (function (){var fexpr__25007 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24999,G__25004,G__25001,G__25000,G__25002,G__25003,G__24998){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24998;
if(cljs.core.truth_(and__8230__auto__)){
return G__24999;
} else {
return and__8230__auto__;
}
})())?G__25000:(1))),")"].join(''),(function (){var G__25008 = (- G__25002);
return (G__25001.cljs$core$IFn$_invoke$arity$1 ? G__25001.cljs$core$IFn$_invoke$arity$1(G__25008) : G__25001.call(null,G__25008));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25003),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25004)].join(''),(G__25002 * (2)),"pointer",(1),"absolute",(G__25001.cljs$core$IFn$_invoke$arity$1 ? G__25001.cljs$core$IFn$_invoke$arity$1(G__25002) : G__25001.call(null,G__25002)),(G__25002 * (2)),(function (){var G__25009 = (- G__25002);
return (G__25001.cljs$core$IFn$_invoke$arity$1 ? G__25001.cljs$core$IFn$_invoke$arity$1(G__25009) : G__25001.call(null,G__25009));
})()]);
});})(G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25007.cljs$core$IFn$_invoke$arity$7 ? fexpr__25007.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25007.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24997 = (function (){var width = (function (){var fexpr__25011 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25010){
return (G__25010 / (2));
});})(G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25011.cljs$core$IFn$_invoke$arity$1 ? fexpr__25011.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25011.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__25014 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25013,G__25012){
return ((G__25012 * Math.sin((G__25013.cljs$core$IFn$_invoke$arity$1 ? G__25013.cljs$core$IFn$_invoke$arity$1((45)) : G__25013.call(null,(45))))) / (2));
});})(width,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25014.cljs$core$IFn$_invoke$arity$2 ? fexpr__25014.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25014.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__25016 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25015){
return (G__25015 / (12));
});})(width,rotated_offset,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25016.cljs$core$IFn$_invoke$arity$1 ? fexpr__25016.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25016.call(null,radius));
})();
var left = (function (){var fexpr__25019 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25018,G__25017){
return (G__25017 + (- (G__25018 / (2))));
});})(width,rotated_offset,height,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25019.cljs$core$IFn$_invoke$arity$2 ? fexpr__25019.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25019.call(null,width,radius));
})();
var top = (function (){var fexpr__25022 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25021,G__25020){
return (G__25020 + (- (G__25021 / (2))));
});})(width,rotated_offset,height,left,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25022.cljs$core$IFn$_invoke$arity$2 ? fexpr__25022.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25022.call(null,height,radius));
})();
var color = (function (){var fexpr__25026 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25023,G__25024){
var G__25027 = (G__25024.cljs$core$IFn$_invoke$arity$0 ? G__25024.cljs$core$IFn$_invoke$arity$0() : G__25024.call(null));
return (G__25023.cljs$core$IFn$_invoke$arity$1 ? G__25023.cljs$core$IFn$_invoke$arity$1(G__25027) : G__25023.call(null,G__25027));
});})(width,rotated_offset,height,left,top,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25026.cljs$core$IFn$_invoke$arity$2 ? fexpr__25026.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25026.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25034 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25030,G__25031,G__25028,G__25032,G__25029,G__25033){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25028.cljs$core$IFn$_invoke$arity$1 ? G__25028.cljs$core$IFn$_invoke$arity$1(G__25029) : G__25028.call(null,G__25029)),cljs.core.cst$kw$height,(G__25028.cljs$core$IFn$_invoke$arity$1 ? G__25028.cljs$core$IFn$_invoke$arity$1(G__25030) : G__25028.call(null,G__25030)),cljs.core.cst$kw$left,(G__25028.cljs$core$IFn$_invoke$arity$1 ? G__25028.cljs$core$IFn$_invoke$arity$1(G__25031) : G__25028.call(null,G__25031)),cljs.core.cst$kw$background_DASH_color,G__25032,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25033),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25033),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25034.cljs$core$IFn$_invoke$arity$6 ? fexpr__25034.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25034.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25035 = cljs.core.cst$kw$css;
var G__25036 = (function (){var fexpr__25048 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25035,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25043,G__25041,G__25038,G__25039,G__25040,G__25037,G__25042){
var G__25049 = G__25038;
var G__25050 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25052 = (G__25040 - ((2) * G__25041));
return (G__25039.cljs$core$IFn$_invoke$arity$1 ? G__25039.cljs$core$IFn$_invoke$arity$1(G__25052) : G__25039.call(null,G__25052));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25042)?G__25043:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25042)?"45deg":"0deg")),") "].join('')], null);
var G__25051 = (cljs.core.truth_(G__25042)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25037.cljs$core$IFn$_invoke$arity$3 ? G__25037.cljs$core$IFn$_invoke$arity$3(G__25049,G__25050,G__25051) : G__25037.call(null,G__25049,G__25050,G__25051));
});})(G__25035,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25048.cljs$core$IFn$_invoke$arity$7 ? fexpr__25048.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25048.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25035,G__25036) : hoplon.core.div.call(null,G__25035,G__25036));
})(),(function (){var G__25053 = cljs.core.cst$kw$css;
var G__25054 = (function (){var fexpr__25062 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25053,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25056,G__25057,G__25058,G__25055,G__25059){
var G__25063 = G__25056;
var G__25064 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25057.cljs$core$IFn$_invoke$arity$1 ? G__25057.cljs$core$IFn$_invoke$arity$1(G__25058) : G__25057.call(null,G__25058)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25059)?(0):(1))),")"].join('')], null);
return (G__25055.cljs$core$IFn$_invoke$arity$2 ? G__25055.cljs$core$IFn$_invoke$arity$2(G__25063,G__25064) : G__25055.call(null,G__25063,G__25064));
});})(G__25053,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25062.cljs$core$IFn$_invoke$arity$5 ? fexpr__25062.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25062.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25053,G__25054) : hoplon.core.div.call(null,G__25053,G__25054));
})(),(function (){var G__25065 = cljs.core.cst$kw$css;
var G__25066 = (function (){var fexpr__25078 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25065,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25073,G__25071,G__25068,G__25069,G__25070,G__25067,G__25072){
var G__25079 = G__25068;
var G__25080 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25082 = (G__25070 + ((2) * G__25071));
return (G__25069.cljs$core$IFn$_invoke$arity$1 ? G__25069.cljs$core$IFn$_invoke$arity$1(G__25082) : G__25069.call(null,G__25082));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25072)?G__25073:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25072)?"-45deg":"0deg")),") "].join('')], null);
var G__25081 = (cljs.core.truth_(G__25072)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25067.cljs$core$IFn$_invoke$arity$3 ? G__25067.cljs$core$IFn$_invoke$arity$3(G__25079,G__25080,G__25081) : G__25067.call(null,G__25079,G__25080,G__25081));
});})(G__25065,width,rotated_offset,height,left,top,color,default_css,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25078.cljs$core$IFn$_invoke$arity$7 ? fexpr__25078.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25078.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25065,G__25066) : hoplon.core.div.call(null,G__25065,G__25066));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997) : hoplon.core.div.call(null,G__24989,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25085 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25083,G__25084){
return (G__25083 / ((1) + G__25084));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25085.cljs$core$IFn$_invoke$arity$2 ? fexpr__25085.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25085.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25088 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25087,G__25086){
return (G__25086 * G__25087);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25088.cljs$core$IFn$_invoke$arity$2 ? fexpr__25088.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25088.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25091 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25090,G__25089){
return (((2) * Math.PI) / (G__25089.cljs$core$IFn$_invoke$arity$1 ? G__25089.cljs$core$IFn$_invoke$arity$1(G__25090) : G__25089.call(null,G__25090)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25091.cljs$core$IFn$_invoke$arity$2 ? fexpr__25091.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25091.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25101 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25096,G__25092,G__25094,G__25093,G__25095){
var G__25102 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25104 = G__25094;
var G__25105 = (i * G__25095);
return (G__25093.cljs$core$IFn$_invoke$arity$2 ? G__25093.cljs$core$IFn$_invoke$arity$2(G__25104,G__25105) : G__25093.call(null,G__25104,G__25105));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25103 = G__25096;
return (G__25092.cljs$core$IFn$_invoke$arity$2 ? G__25092.cljs$core$IFn$_invoke$arity$2(G__25102,G__25103) : G__25092.call(null,G__25102,G__25103));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25101.cljs$core$IFn$_invoke$arity$5 ? fexpr__25101.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25101.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25109 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25108,G__25106,G__25107){
return (G__25106 / (G__25107.cljs$core$IFn$_invoke$arity$1 ? G__25107.cljs$core$IFn$_invoke$arity$1(G__25108) : G__25107.call(null,G__25108)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25109.cljs$core$IFn$_invoke$arity$3 ? fexpr__25109.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25109.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25110 = cljs.core.cst$kw$css;
var G__25111 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25112 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25110,G__25111,G__25112) : hoplon.core.div.call(null,G__25110,G__25111,G__25112));
})(),(function (){var G__25113 = cljs.core.cst$kw$css;
var G__25114 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25115 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18517__auto__){
var vec__25128 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25138 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25139){
var vec__25140 = p__25139;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(0),null);
var vec__25143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25143,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25138.cljs$core$IFn$_invoke$arity$1 ? fexpr__25138.cljs$core$IFn$_invoke$arity$1(item__18517__auto__) : fexpr__25138.call(null,item__18517__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25128,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25128,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25128,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25128,(3),null);
var transition_delay = (function (){var fexpr__25149 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25148,G__25147,G__25146){
if(cljs.core.truth_(G__25146)){
return (G__25147 * G__25148);
} else {
return (0);
}
});})(vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25149.cljs$core$IFn$_invoke$arity$3 ? fexpr__25149.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25149.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25151 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25150){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25150);
});})(transition_delay,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25151.cljs$core$IFn$_invoke$arity$1 ? fexpr__25151.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25151.call(null,item));
})();
var text = (function (){var fexpr__25153 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25152){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25152);
});})(transition_delay,url,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25153.cljs$core$IFn$_invoke$arity$1 ? fexpr__25153.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25153.call(null,item));
})();
var handler = (function (){var fexpr__25155 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25154){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25154);
});})(transition_delay,url,text,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25155.cljs$core$IFn$_invoke$arity$1 ? fexpr__25155.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25155.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25158 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25156,G__25157){
var and__8230__auto__ = G__25156;
if(cljs.core.truth_(and__8230__auto__)){
return G__25157;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25158.cljs$core$IFn$_invoke$arity$2 ? fexpr__25158.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25158.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25159 = cljs.core.cst$kw$css;
var G__25160 = (function (){var fexpr__25171 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25159,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25167,G__25164,G__25168,G__25165,G__25162,G__25163,G__25166){
var G__25172 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25163),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25164)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25165),"s"].join('')], null);
var G__25173 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25166)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25167),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25168),"px)"].join(''):"translate(0, 0)")], null);
return (G__25162.cljs$core$IFn$_invoke$arity$2 ? G__25162.cljs$core$IFn$_invoke$arity$2(G__25172,G__25173) : G__25162.call(null,G__25172,G__25173));
});})(G__25159,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25171.cljs$core$IFn$_invoke$arity$7 ? fexpr__25171.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25171.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25161 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25176 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25174,G__25175){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25174)?"black":G__25175)], null);
});})(G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25176.cljs$core$IFn$_invoke$arity$2 ? fexpr__25176.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25176.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25177 = cljs.core.cst$kw$mouseenter;
var G__25178 = ((function (G__25177,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25177,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25179 = cljs.core.cst$kw$mouseleave;
var G__25180 = ((function (G__25177,G__25178,G__25179,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25177,G__25178,G__25179,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25181 = cljs.core.cst$kw$click;
var G__25182 = ((function (G__25177,G__25178,G__25179,G__25180,G__25181,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25177,G__25178,G__25179,G__25180,G__25181,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25177,G__25178,G__25179,G__25180,G__25181,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25177,G__25178,G__25179,G__25180,G__25181,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25183 = cljs.core.cst$kw$css;
var G__25184 = (function (){var fexpr__25196 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25192,G__25190,G__25189,G__25188,G__25187,G__25191,G__25193){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25187)?G__25188:(1))),")"].join(''),(function (){var G__25197 = (- G__25190);
return (G__25189.cljs$core$IFn$_invoke$arity$1 ? G__25189.cljs$core$IFn$_invoke$arity$1(G__25197) : G__25189.call(null,G__25197));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25191 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25192)].join(''),"hidden","white",((2) * G__25190),"pointer",(cljs.core.truth_(G__25193)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25193),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25189.cljs$core$IFn$_invoke$arity$1 ? G__25189.cljs$core$IFn$_invoke$arity$1(G__25190) : G__25189.call(null,G__25190)),"contain",((2) * G__25190),(function (){var G__25198 = (- G__25190);
return (G__25189.cljs$core$IFn$_invoke$arity$1 ? G__25189.cljs$core$IFn$_invoke$arity$1(G__25198) : G__25189.call(null,G__25198));
})()]);
});})(G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25196.cljs$core$IFn$_invoke$arity$7 ? fexpr__25196.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25196.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25185 = (function (){var con__18527__auto__ = (new cljs.core.Delay(((function (G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25199 = cljs.core.cst$kw$css;
var G__25200 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25201 = (function (){var G__25202 = (function (){var G__25203 = cljs.core.cst$kw$valign;
var G__25204 = "center";
var G__25205 = cljs.core.cst$kw$css;
var G__25206 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25207 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25203,G__25204,G__25205,G__25206,G__25207) : hoplon.core.td.call(null,G__25203,G__25204,G__25205,G__25206,G__25207));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25202) : hoplon.core.tr.call(null,G__25202));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25199,G__25200,G__25201) : hoplon.core.table.call(null,G__25199,G__25200,G__25201));
});})(G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18528__auto__ = (new cljs.core.Delay(((function (con__18527__auto__,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18527__auto__,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18529__auto__ = ((function (con__18527__auto__,alt__18528__auto__,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18530__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18530__auto__)?con__18527__auto__:alt__18528__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18527__auto__,alt__18528__auto__,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25208 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18529__auto__);
return (fexpr__25208.cljs$core$IFn$_invoke$arity$1 ? fexpr__25208.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25208.call(null,text));
})();
var G__25186 = (function (){var G__25209 = cljs.core.cst$kw$css;
var G__25210 = (function (){var fexpr__25215 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25209,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25185,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25212,G__25213,G__25211,G__25214){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25211),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25212)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25213),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25214)?(0):(1))], null);
});})(G__25209,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25185,G__25159,G__25160,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25128,x,i,y,item,G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25215.cljs$core$IFn$_invoke$arity$4 ? fexpr__25215.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25215.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25209,G__25210) : hoplon.core.div.call(null,G__25209,G__25210));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25185,G__25186) : hoplon.core.div.call(null,G__25177,G__25178,G__25179,G__25180,G__25181,G__25182,G__25183,G__25184,G__25185,G__25186));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25159,G__25160,G__25161) : hoplon.core.div.call(null,G__25159,G__25160,G__25161));
});})(G__25113,G__25114,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25113,G__25114,G__25115) : hoplon.core.div.call(null,G__25113,G__25114,G__25115));
})()], 0));
});
