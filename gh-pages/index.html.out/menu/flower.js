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
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___25039 = arguments.length;
var i__9518__auto___25040 = (0);
while(true){
if((i__9518__auto___25040 < len__9517__auto___25039)){
args__9524__auto__.push((arguments[i__9518__auto___25040]));

var G__25041 = (i__9518__auto___25040 + (1));
i__9518__auto___25040 = G__25041;
=======
var args__9526__auto__ = [];
var len__9519__auto___24976 = arguments.length;
var i__9520__auto___24977 = (0);
while(true){
if((i__9520__auto___24977 < len__9519__auto___24976)){
args__9526__auto__.push((arguments[i__9520__auto___24977]));

var G__24978 = (i__9520__auto___24977 + (1));
i__9520__auto___24977 = G__24978;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((4) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9525__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
<<<<<<< HEAD
var G__25027 = cljs.core.cst$kw$css;
var G__25028 = (function (){var fexpr__25038 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25027,transition_length__$1){
return (function (G__25033,G__25034,G__25030,G__25037,G__25031,G__25035,G__25032,G__25036){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25030.cljs$core$IFn$_invoke$arity$1 ? G__25030.cljs$core$IFn$_invoke$arity$1(G__25031) : G__25030.call(null,G__25031)),cljs.core.cst$kw$bottom,(G__25030.cljs$core$IFn$_invoke$arity$1 ? G__25030.cljs$core$IFn$_invoke$arity$1(G__25031) : G__25030.call(null,G__25031)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25032),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25033)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25034;
if(cljs.core.truth_(and__8228__auto__)){
return (G__25035.cljs$core$IFn$_invoke$arity$1 ? G__25035.cljs$core$IFn$_invoke$arity$1(G__25036) : G__25035.call(null,G__25036));
=======
var G__24964 = cljs.core.cst$kw$css;
var G__24965 = (function (){var fexpr__24975 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24964,transition_length__$1){
return (function (G__24970,G__24971,G__24967,G__24974,G__24968,G__24972,G__24969,G__24973){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24967.cljs$core$IFn$_invoke$arity$1 ? G__24967.cljs$core$IFn$_invoke$arity$1(G__24968) : G__24967.call(null,G__24968)),cljs.core.cst$kw$bottom,(G__24967.cljs$core$IFn$_invoke$arity$1 ? G__24967.cljs$core$IFn$_invoke$arity$1(G__24968) : G__24967.call(null,G__24968)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24969),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24970)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24971;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24972.cljs$core$IFn$_invoke$arity$1 ? G__24972.cljs$core$IFn$_invoke$arity$1(G__24973) : G__24972.call(null,G__24973));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
<<<<<<< HEAD
})())?G__25037:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25027,transition_length__$1))
);
return (fexpr__25038.cljs$core$IFn$_invoke$arity$8 ? fexpr__25038.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25038.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25029 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25027,G__25028,G__25029) : hoplon.core.div.call(null,G__25027,G__25028,G__25029));
=======
})())?G__24974:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24964,transition_length__$1))
);
return (fexpr__24975.cljs$core$IFn$_invoke$arity$8 ? fexpr__24975.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24975.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24966 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24964,G__24965,G__24966) : hoplon.core.div.call(null,G__24964,G__24965,G__24966));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

<<<<<<< HEAD
menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25022){
var G__25023 = cljs.core.first(seq25022);
var seq25022__$1 = cljs.core.next(seq25022);
var G__25024 = cljs.core.first(seq25022__$1);
var seq25022__$2 = cljs.core.next(seq25022__$1);
var G__25025 = cljs.core.first(seq25022__$2);
var seq25022__$3 = cljs.core.next(seq25022__$2);
var G__25026 = cljs.core.first(seq25022__$3);
var seq25022__$4 = cljs.core.next(seq25022__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25023,G__25024,G__25025,G__25026,seq25022__$4);
=======
menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24959){
var G__24960 = cljs.core.first(seq24959);
var seq24959__$1 = cljs.core.next(seq24959);
var G__24961 = cljs.core.first(seq24959__$1);
var seq24959__$2 = cljs.core.next(seq24959__$1);
var G__24962 = cljs.core.first(seq24959__$2);
var seq24959__$3 = cljs.core.next(seq24959__$2);
var G__24963 = cljs.core.first(seq24959__$3);
var seq24959__$4 = cljs.core.next(seq24959__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24960,G__24961,G__24962,G__24963,seq24959__$4);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__8240__auto__ = open_QMARK_;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__8240__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
<<<<<<< HEAD
var G__25042 = cljs.core.cst$kw$click;
var G__25043 = ((function (G__25042,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25042,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25044 = cljs.core.cst$kw$mouseenter;
var G__25045 = ((function (G__25042,G__25043,G__25044,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25042,G__25043,G__25044,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25046 = cljs.core.cst$kw$mouseleave;
var G__25047 = ((function (G__25042,G__25043,G__25044,G__25045,G__25046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25042,G__25043,G__25044,G__25045,G__25046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25048 = cljs.core.cst$kw$css;
var G__25049 = (function (){var fexpr__25060 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25052,G__25057,G__25054,G__25053,G__25055,G__25056,G__25051){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25051;
if(cljs.core.truth_(and__8228__auto__)){
return G__25052;
=======
var G__24979 = cljs.core.cst$kw$click;
var G__24980 = ((function (G__24979,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24979,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24981 = cljs.core.cst$kw$mouseenter;
var G__24982 = ((function (G__24979,G__24980,G__24981,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24979,G__24980,G__24981,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24983 = cljs.core.cst$kw$mouseleave;
var G__24984 = ((function (G__24979,G__24980,G__24981,G__24982,G__24983,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24979,G__24980,G__24981,G__24982,G__24983,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24985 = cljs.core.cst$kw$css;
var G__24986 = (function (){var fexpr__24997 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24989,G__24994,G__24991,G__24990,G__24992,G__24993,G__24988){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24988;
if(cljs.core.truth_(and__8230__auto__)){
return G__24989;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
<<<<<<< HEAD
})())?G__25053:(1))),")"].join(''),(function (){var G__25061 = (- G__25055);
return (G__25054.cljs$core$IFn$_invoke$arity$1 ? G__25054.cljs$core$IFn$_invoke$arity$1(G__25061) : G__25054.call(null,G__25061));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25056),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25057)].join(''),(G__25055 * (2)),"pointer",(1),"absolute",(G__25054.cljs$core$IFn$_invoke$arity$1 ? G__25054.cljs$core$IFn$_invoke$arity$1(G__25055) : G__25054.call(null,G__25055)),(G__25055 * (2)),(function (){var G__25062 = (- G__25055);
return (G__25054.cljs$core$IFn$_invoke$arity$1 ? G__25054.cljs$core$IFn$_invoke$arity$1(G__25062) : G__25054.call(null,G__25062));
})()]);
});})(G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25060.cljs$core$IFn$_invoke$arity$7 ? fexpr__25060.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25060.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25050 = (function (){var width = (function (){var fexpr__25064 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25063){
return (G__25063 / (2));
});})(G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25064.cljs$core$IFn$_invoke$arity$1 ? fexpr__25064.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25064.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__25067 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25066,G__25065){
return ((G__25065 * Math.sin((G__25066.cljs$core$IFn$_invoke$arity$1 ? G__25066.cljs$core$IFn$_invoke$arity$1((45)) : G__25066.call(null,(45))))) / (2));
});})(width,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25067.cljs$core$IFn$_invoke$arity$2 ? fexpr__25067.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25067.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__25069 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25068){
return (G__25068 / (12));
});})(width,rotated_offset,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25069.cljs$core$IFn$_invoke$arity$1 ? fexpr__25069.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25069.call(null,radius));
})();
var left = (function (){var fexpr__25072 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25071,G__25070){
return (G__25070 + (- (G__25071 / (2))));
});})(width,rotated_offset,height,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25072.cljs$core$IFn$_invoke$arity$2 ? fexpr__25072.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25072.call(null,width,radius));
})();
var top = (function (){var fexpr__25075 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25074,G__25073){
return (G__25073 + (- (G__25074 / (2))));
});})(width,rotated_offset,height,left,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25075.cljs$core$IFn$_invoke$arity$2 ? fexpr__25075.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25075.call(null,height,radius));
})();
var color = (function (){var fexpr__25079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25076,G__25077){
var G__25080 = (G__25077.cljs$core$IFn$_invoke$arity$0 ? G__25077.cljs$core$IFn$_invoke$arity$0() : G__25077.call(null));
return (G__25076.cljs$core$IFn$_invoke$arity$1 ? G__25076.cljs$core$IFn$_invoke$arity$1(G__25080) : G__25076.call(null,G__25080));
});})(width,rotated_offset,height,left,top,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25079.cljs$core$IFn$_invoke$arity$2 ? fexpr__25079.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25079.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25087 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25083,G__25084,G__25081,G__25085,G__25082,G__25086){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25082) : G__25081.call(null,G__25082)),cljs.core.cst$kw$height,(G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25083) : G__25081.call(null,G__25083)),cljs.core.cst$kw$left,(G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25084) : G__25081.call(null,G__25084)),cljs.core.cst$kw$background_DASH_color,G__25085,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25086),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25086),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25087.cljs$core$IFn$_invoke$arity$6 ? fexpr__25087.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25087.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25088 = cljs.core.cst$kw$css;
var G__25089 = (function (){var fexpr__25101 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25088,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25096,G__25094,G__25091,G__25092,G__25093,G__25090,G__25095){
var G__25102 = G__25091;
var G__25103 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25105 = (G__25093 - ((2) * G__25094));
return (G__25092.cljs$core$IFn$_invoke$arity$1 ? G__25092.cljs$core$IFn$_invoke$arity$1(G__25105) : G__25092.call(null,G__25105));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25095)?G__25096:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25095)?"45deg":"0deg")),") "].join('')], null);
var G__25104 = (cljs.core.truth_(G__25095)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25090.cljs$core$IFn$_invoke$arity$3 ? G__25090.cljs$core$IFn$_invoke$arity$3(G__25102,G__25103,G__25104) : G__25090.call(null,G__25102,G__25103,G__25104));
});})(G__25088,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25101.cljs$core$IFn$_invoke$arity$7 ? fexpr__25101.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25101.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25088,G__25089) : hoplon.core.div.call(null,G__25088,G__25089));
})(),(function (){var G__25106 = cljs.core.cst$kw$css;
var G__25107 = (function (){var fexpr__25115 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25106,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25109,G__25110,G__25111,G__25108,G__25112){
var G__25116 = G__25109;
var G__25117 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25110.cljs$core$IFn$_invoke$arity$1 ? G__25110.cljs$core$IFn$_invoke$arity$1(G__25111) : G__25110.call(null,G__25111)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25112)?(0):(1))),")"].join('')], null);
return (G__25108.cljs$core$IFn$_invoke$arity$2 ? G__25108.cljs$core$IFn$_invoke$arity$2(G__25116,G__25117) : G__25108.call(null,G__25116,G__25117));
});})(G__25106,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25115.cljs$core$IFn$_invoke$arity$5 ? fexpr__25115.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25115.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25106,G__25107) : hoplon.core.div.call(null,G__25106,G__25107));
})(),(function (){var G__25118 = cljs.core.cst$kw$css;
var G__25119 = (function (){var fexpr__25131 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25118,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25126,G__25124,G__25121,G__25122,G__25123,G__25120,G__25125){
var G__25132 = G__25121;
var G__25133 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25135 = (G__25123 + ((2) * G__25124));
return (G__25122.cljs$core$IFn$_invoke$arity$1 ? G__25122.cljs$core$IFn$_invoke$arity$1(G__25135) : G__25122.call(null,G__25135));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25125)?G__25126:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25125)?"-45deg":"0deg")),") "].join('')], null);
var G__25134 = (cljs.core.truth_(G__25125)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25120.cljs$core$IFn$_invoke$arity$3 ? G__25120.cljs$core$IFn$_invoke$arity$3(G__25132,G__25133,G__25134) : G__25120.call(null,G__25132,G__25133,G__25134));
});})(G__25118,width,rotated_offset,height,left,top,color,default_css,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25131.cljs$core$IFn$_invoke$arity$7 ? fexpr__25131.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25131.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25118,G__25119) : hoplon.core.div.call(null,G__25118,G__25119));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,G__25050) : hoplon.core.div.call(null,G__25042,G__25043,G__25044,G__25045,G__25046,G__25047,G__25048,G__25049,G__25050));
=======
})())?G__24990:(1))),")"].join(''),(function (){var G__24998 = (- G__24992);
return (G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24998) : G__24991.call(null,G__24998));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24993),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24994)].join(''),(G__24992 * (2)),"pointer",(1),"absolute",(G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24992) : G__24991.call(null,G__24992)),(G__24992 * (2)),(function (){var G__24999 = (- G__24992);
return (G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24999) : G__24991.call(null,G__24999));
})()]);
});})(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24997.cljs$core$IFn$_invoke$arity$7 ? fexpr__24997.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__24997.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24987 = (function (){var width = (function (){var fexpr__25001 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25000){
return (G__25000 / (2));
});})(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25001.cljs$core$IFn$_invoke$arity$1 ? fexpr__25001.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25001.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__25004 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25003,G__25002){
return ((G__25002 * Math.sin((G__25003.cljs$core$IFn$_invoke$arity$1 ? G__25003.cljs$core$IFn$_invoke$arity$1((45)) : G__25003.call(null,(45))))) / (2));
});})(width,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25004.cljs$core$IFn$_invoke$arity$2 ? fexpr__25004.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25004.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__25006 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25005){
return (G__25005 / (12));
});})(width,rotated_offset,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25006.cljs$core$IFn$_invoke$arity$1 ? fexpr__25006.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25006.call(null,radius));
})();
var left = (function (){var fexpr__25009 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25008,G__25007){
return (G__25007 + (- (G__25008 / (2))));
});})(width,rotated_offset,height,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25009.cljs$core$IFn$_invoke$arity$2 ? fexpr__25009.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25009.call(null,width,radius));
})();
var top = (function (){var fexpr__25012 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25011,G__25010){
return (G__25010 + (- (G__25011 / (2))));
});})(width,rotated_offset,height,left,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25012.cljs$core$IFn$_invoke$arity$2 ? fexpr__25012.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25012.call(null,height,radius));
})();
var color = (function (){var fexpr__25016 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25013,G__25014){
var G__25017 = (G__25014.cljs$core$IFn$_invoke$arity$0 ? G__25014.cljs$core$IFn$_invoke$arity$0() : G__25014.call(null));
return (G__25013.cljs$core$IFn$_invoke$arity$1 ? G__25013.cljs$core$IFn$_invoke$arity$1(G__25017) : G__25013.call(null,G__25017));
});})(width,rotated_offset,height,left,top,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25016.cljs$core$IFn$_invoke$arity$2 ? fexpr__25016.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25016.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25024 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25020,G__25021,G__25018,G__25022,G__25019,G__25023){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25018.cljs$core$IFn$_invoke$arity$1 ? G__25018.cljs$core$IFn$_invoke$arity$1(G__25019) : G__25018.call(null,G__25019)),cljs.core.cst$kw$height,(G__25018.cljs$core$IFn$_invoke$arity$1 ? G__25018.cljs$core$IFn$_invoke$arity$1(G__25020) : G__25018.call(null,G__25020)),cljs.core.cst$kw$left,(G__25018.cljs$core$IFn$_invoke$arity$1 ? G__25018.cljs$core$IFn$_invoke$arity$1(G__25021) : G__25018.call(null,G__25021)),cljs.core.cst$kw$background_DASH_color,G__25022,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25023),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25023),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25024.cljs$core$IFn$_invoke$arity$6 ? fexpr__25024.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25024.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25025 = cljs.core.cst$kw$css;
var G__25026 = (function (){var fexpr__25038 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25025,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25033,G__25031,G__25028,G__25029,G__25030,G__25027,G__25032){
var G__25039 = G__25028;
var G__25040 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25042 = (G__25030 - ((2) * G__25031));
return (G__25029.cljs$core$IFn$_invoke$arity$1 ? G__25029.cljs$core$IFn$_invoke$arity$1(G__25042) : G__25029.call(null,G__25042));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25032)?G__25033:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25032)?"45deg":"0deg")),") "].join('')], null);
var G__25041 = (cljs.core.truth_(G__25032)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25027.cljs$core$IFn$_invoke$arity$3 ? G__25027.cljs$core$IFn$_invoke$arity$3(G__25039,G__25040,G__25041) : G__25027.call(null,G__25039,G__25040,G__25041));
});})(G__25025,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25038.cljs$core$IFn$_invoke$arity$7 ? fexpr__25038.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25038.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25025,G__25026) : hoplon.core.div.call(null,G__25025,G__25026));
})(),(function (){var G__25043 = cljs.core.cst$kw$css;
var G__25044 = (function (){var fexpr__25052 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25043,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25046,G__25047,G__25048,G__25045,G__25049){
var G__25053 = G__25046;
var G__25054 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25047.cljs$core$IFn$_invoke$arity$1 ? G__25047.cljs$core$IFn$_invoke$arity$1(G__25048) : G__25047.call(null,G__25048)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25049)?(0):(1))),")"].join('')], null);
return (G__25045.cljs$core$IFn$_invoke$arity$2 ? G__25045.cljs$core$IFn$_invoke$arity$2(G__25053,G__25054) : G__25045.call(null,G__25053,G__25054));
});})(G__25043,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25052.cljs$core$IFn$_invoke$arity$5 ? fexpr__25052.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25052.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25043,G__25044) : hoplon.core.div.call(null,G__25043,G__25044));
})(),(function (){var G__25055 = cljs.core.cst$kw$css;
var G__25056 = (function (){var fexpr__25068 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25055,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25063,G__25061,G__25058,G__25059,G__25060,G__25057,G__25062){
var G__25069 = G__25058;
var G__25070 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25072 = (G__25060 + ((2) * G__25061));
return (G__25059.cljs$core$IFn$_invoke$arity$1 ? G__25059.cljs$core$IFn$_invoke$arity$1(G__25072) : G__25059.call(null,G__25072));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25062)?G__25063:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25062)?"-45deg":"0deg")),") "].join('')], null);
var G__25071 = (cljs.core.truth_(G__25062)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25057.cljs$core$IFn$_invoke$arity$3 ? G__25057.cljs$core$IFn$_invoke$arity$3(G__25069,G__25070,G__25071) : G__25057.call(null,G__25069,G__25070,G__25071));
});})(G__25055,width,rotated_offset,height,left,top,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25068.cljs$core$IFn$_invoke$arity$7 ? fexpr__25068.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25068.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25055,G__25056) : hoplon.core.div.call(null,G__25055,G__25056));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987) : hoplon.core.div.call(null,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
<<<<<<< HEAD
var offset = (function (){var fexpr__25138 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25136,G__25137){
return (G__25136 / ((1) + G__25137));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25138.cljs$core$IFn$_invoke$arity$2 ? fexpr__25138.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25138.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25141 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25140,G__25139){
return (G__25139 * G__25140);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25141.cljs$core$IFn$_invoke$arity$2 ? fexpr__25141.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25141.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25144 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25143,G__25142){
return (((2) * Math.PI) / (G__25142.cljs$core$IFn$_invoke$arity$1 ? G__25142.cljs$core$IFn$_invoke$arity$1(G__25143) : G__25142.call(null,G__25143)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25144.cljs$core$IFn$_invoke$arity$2 ? fexpr__25144.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25144.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25154 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25149,G__25145,G__25147,G__25146,G__25148){
var G__25155 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25157 = G__25147;
var G__25158 = (i * G__25148);
return (G__25146.cljs$core$IFn$_invoke$arity$2 ? G__25146.cljs$core$IFn$_invoke$arity$2(G__25157,G__25158) : G__25146.call(null,G__25157,G__25158));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25156 = G__25149;
return (G__25145.cljs$core$IFn$_invoke$arity$2 ? G__25145.cljs$core$IFn$_invoke$arity$2(G__25155,G__25156) : G__25145.call(null,G__25155,G__25156));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25154.cljs$core$IFn$_invoke$arity$5 ? fexpr__25154.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25154.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25162 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25161,G__25159,G__25160){
return (G__25159 / (G__25160.cljs$core$IFn$_invoke$arity$1 ? G__25160.cljs$core$IFn$_invoke$arity$1(G__25161) : G__25160.call(null,G__25161)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25162.cljs$core$IFn$_invoke$arity$3 ? fexpr__25162.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25162.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25163 = cljs.core.cst$kw$css;
var G__25164 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25165 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25163,G__25164,G__25165) : hoplon.core.div.call(null,G__25163,G__25164,G__25165));
})(),(function (){var G__25166 = cljs.core.cst$kw$css;
var G__25167 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25168 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18520__auto__){
var vec__25181 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25191 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25192){
var vec__25193 = p__25192;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193,(0),null);
var vec__25196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25196,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25196,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25193,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25191.cljs$core$IFn$_invoke$arity$1 ? fexpr__25191.cljs$core$IFn$_invoke$arity$1(item__18520__auto__) : fexpr__25191.call(null,item__18520__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25181,(3),null);
var transition_delay = (function (){var fexpr__25202 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25201,G__25200,G__25199){
if(cljs.core.truth_(G__25199)){
return (G__25200 * G__25201);
} else {
return (0);
}
});})(vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25202.cljs$core$IFn$_invoke$arity$3 ? fexpr__25202.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25202.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25204 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25203){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25203);
});})(transition_delay,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25204.cljs$core$IFn$_invoke$arity$1 ? fexpr__25204.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25204.call(null,item));
})();
var text = (function (){var fexpr__25206 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25205){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25205);
});})(transition_delay,url,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25206.cljs$core$IFn$_invoke$arity$1 ? fexpr__25206.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25206.call(null,item));
})();
var handler = (function (){var fexpr__25208 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25207){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25207);
});})(transition_delay,url,text,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25208.cljs$core$IFn$_invoke$arity$1 ? fexpr__25208.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25208.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25211 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25209,G__25210){
var and__8228__auto__ = G__25209;
if(cljs.core.truth_(and__8228__auto__)){
return G__25210;
=======
var offset = (function (){var fexpr__25075 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25073,G__25074){
return (G__25073 / ((1) + G__25074));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25075.cljs$core$IFn$_invoke$arity$2 ? fexpr__25075.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25075.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25078 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25077,G__25076){
return (G__25076 * G__25077);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25078.cljs$core$IFn$_invoke$arity$2 ? fexpr__25078.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25078.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25081 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25080,G__25079){
return (((2) * Math.PI) / (G__25079.cljs$core$IFn$_invoke$arity$1 ? G__25079.cljs$core$IFn$_invoke$arity$1(G__25080) : G__25079.call(null,G__25080)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25081.cljs$core$IFn$_invoke$arity$2 ? fexpr__25081.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25081.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25091 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25086,G__25082,G__25084,G__25083,G__25085){
var G__25092 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25094 = G__25084;
var G__25095 = (i * G__25085);
return (G__25083.cljs$core$IFn$_invoke$arity$2 ? G__25083.cljs$core$IFn$_invoke$arity$2(G__25094,G__25095) : G__25083.call(null,G__25094,G__25095));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25093 = G__25086;
return (G__25082.cljs$core$IFn$_invoke$arity$2 ? G__25082.cljs$core$IFn$_invoke$arity$2(G__25092,G__25093) : G__25082.call(null,G__25092,G__25093));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25091.cljs$core$IFn$_invoke$arity$5 ? fexpr__25091.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25091.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25099 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25098,G__25096,G__25097){
return (G__25096 / (G__25097.cljs$core$IFn$_invoke$arity$1 ? G__25097.cljs$core$IFn$_invoke$arity$1(G__25098) : G__25097.call(null,G__25098)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25099.cljs$core$IFn$_invoke$arity$3 ? fexpr__25099.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25099.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25100 = cljs.core.cst$kw$css;
var G__25101 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25102 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25100,G__25101,G__25102) : hoplon.core.div.call(null,G__25100,G__25101,G__25102));
})(),(function (){var G__25103 = cljs.core.cst$kw$css;
var G__25104 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25105 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__19684__auto__){
var vec__25118 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25128 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25129){
var vec__25130 = p__25129;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(0),null);
var vec__25133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25130,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25128.cljs$core$IFn$_invoke$arity$1 ? fexpr__25128.cljs$core$IFn$_invoke$arity$1(item__19684__auto__) : fexpr__25128.call(null,item__19684__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118,(3),null);
var transition_delay = (function (){var fexpr__25139 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25138,G__25137,G__25136){
if(cljs.core.truth_(G__25136)){
return (G__25137 * G__25138);
} else {
return (0);
}
});})(vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25139.cljs$core$IFn$_invoke$arity$3 ? fexpr__25139.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25139.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25141 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25140){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25140);
});})(transition_delay,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25141.cljs$core$IFn$_invoke$arity$1 ? fexpr__25141.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25141.call(null,item));
})();
var text = (function (){var fexpr__25143 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25142){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25142);
});})(transition_delay,url,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25143.cljs$core$IFn$_invoke$arity$1 ? fexpr__25143.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25143.call(null,item));
})();
var handler = (function (){var fexpr__25145 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25144){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25144);
});})(transition_delay,url,text,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25145.cljs$core$IFn$_invoke$arity$1 ? fexpr__25145.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25145.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25148 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25146,G__25147){
var and__8230__auto__ = G__25146;
if(cljs.core.truth_(and__8230__auto__)){
return G__25147;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return and__8228__auto__;
}
<<<<<<< HEAD
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25211.cljs$core$IFn$_invoke$arity$2 ? fexpr__25211.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25211.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25212 = cljs.core.cst$kw$css;
var G__25213 = (function (){var fexpr__25224 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25212,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25220,G__25217,G__25221,G__25218,G__25215,G__25216,G__25219){
var G__25225 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25216),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25217)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25218),"s"].join('')], null);
var G__25226 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25219)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25220),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25221),"px)"].join(''):"translate(0, 0)")], null);
return (G__25215.cljs$core$IFn$_invoke$arity$2 ? G__25215.cljs$core$IFn$_invoke$arity$2(G__25225,G__25226) : G__25215.call(null,G__25225,G__25226));
});})(G__25212,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25224.cljs$core$IFn$_invoke$arity$7 ? fexpr__25224.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25224.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25214 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25229 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25227,G__25228){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25227)?"black":G__25228),cljs.core.cst$kw$display,"inline"], null);
});})(G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25229.cljs$core$IFn$_invoke$arity$2 ? fexpr__25229.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25229.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25230 = cljs.core.cst$kw$mouseenter;
var G__25231 = ((function (G__25230,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25230,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25232 = cljs.core.cst$kw$mouseleave;
var G__25233 = ((function (G__25230,G__25231,G__25232,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25230,G__25231,G__25232,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25234 = cljs.core.cst$kw$click;
var G__25235 = ((function (G__25230,G__25231,G__25232,G__25233,G__25234,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25230,G__25231,G__25232,G__25233,G__25234,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
=======
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25148.cljs$core$IFn$_invoke$arity$2 ? fexpr__25148.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25148.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25149 = cljs.core.cst$kw$css;
var G__25150 = (function (){var fexpr__25161 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25157,G__25154,G__25158,G__25155,G__25152,G__25153,G__25156){
var G__25162 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25153),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25154)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25155),"s"].join('')], null);
var G__25163 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25156)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25157),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25158),"px)"].join(''):"translate(0, 0)")], null);
return (G__25152.cljs$core$IFn$_invoke$arity$2 ? G__25152.cljs$core$IFn$_invoke$arity$2(G__25162,G__25163) : G__25152.call(null,G__25162,G__25163));
});})(G__25149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25161.cljs$core$IFn$_invoke$arity$7 ? fexpr__25161.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25161.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25151 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25166 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25164,G__25165){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25164)?"black":G__25165),cljs.core.cst$kw$display,"inline"], null);
});})(G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25166.cljs$core$IFn$_invoke$arity$2 ? fexpr__25166.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25166.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25167 = cljs.core.cst$kw$mouseenter;
var G__25168 = ((function (G__25167,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25167,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25169 = cljs.core.cst$kw$mouseleave;
var G__25170 = ((function (G__25167,G__25168,G__25169,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25167,G__25168,G__25169,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25171 = cljs.core.cst$kw$click;
var G__25172 = ((function (G__25167,G__25168,G__25169,G__25170,G__25171,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25167,G__25168,G__25169,G__25170,G__25171,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
<<<<<<< HEAD
});})(G__25230,G__25231,G__25232,G__25233,G__25234,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25230,G__25231,G__25232,G__25233,G__25234,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25236 = cljs.core.cst$kw$css;
var G__25237 = (function (){var fexpr__25249 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25245,G__25243,G__25242,G__25241,G__25240,G__25244,G__25246){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25240)?G__25241:(1))),")"].join(''),(function (){var G__25250 = (- G__25243);
return (G__25242.cljs$core$IFn$_invoke$arity$1 ? G__25242.cljs$core$IFn$_invoke$arity$1(G__25250) : G__25242.call(null,G__25250));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25244 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25245)].join(''),"hidden","white",((2) * G__25243),"pointer",(cljs.core.truth_(G__25246)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25246),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25242.cljs$core$IFn$_invoke$arity$1 ? G__25242.cljs$core$IFn$_invoke$arity$1(G__25243) : G__25242.call(null,G__25243)),"contain",((2) * G__25243),(function (){var G__25251 = (- G__25243);
return (G__25242.cljs$core$IFn$_invoke$arity$1 ? G__25242.cljs$core$IFn$_invoke$arity$1(G__25251) : G__25242.call(null,G__25251));
})()]);
});})(G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25249.cljs$core$IFn$_invoke$arity$7 ? fexpr__25249.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25249.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25238 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25252 = cljs.core.cst$kw$css;
var G__25253 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25254 = (function (){var G__25255 = (function (){var G__25256 = cljs.core.cst$kw$valign;
var G__25257 = "center";
var G__25258 = cljs.core.cst$kw$css;
var G__25259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25260 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25256,G__25257,G__25258,G__25259,G__25260) : hoplon.core.td.call(null,G__25256,G__25257,G__25258,G__25259,G__25260));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25255) : hoplon.core.tr.call(null,G__25255));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25252,G__25253,G__25254) : hoplon.core.table.call(null,G__25252,G__25253,G__25254));
});})(G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18530__auto__,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
=======
});})(G__25167,G__25168,G__25169,G__25170,G__25171,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25167,G__25168,G__25169,G__25170,G__25171,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25173 = cljs.core.cst$kw$css;
var G__25174 = (function (){var fexpr__25186 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25182,G__25180,G__25179,G__25178,G__25177,G__25181,G__25183){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25177)?G__25178:(1))),")"].join(''),(function (){var G__25187 = (- G__25180);
return (G__25179.cljs$core$IFn$_invoke$arity$1 ? G__25179.cljs$core$IFn$_invoke$arity$1(G__25187) : G__25179.call(null,G__25187));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25181 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25182)].join(''),"hidden","white",((2) * G__25180),"pointer",(cljs.core.truth_(G__25183)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25183),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25179.cljs$core$IFn$_invoke$arity$1 ? G__25179.cljs$core$IFn$_invoke$arity$1(G__25180) : G__25179.call(null,G__25180)),"contain",((2) * G__25180),(function (){var G__25188 = (- G__25180);
return (G__25179.cljs$core$IFn$_invoke$arity$1 ? G__25179.cljs$core$IFn$_invoke$arity$1(G__25188) : G__25179.call(null,G__25188));
})()]);
});})(G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25186.cljs$core$IFn$_invoke$arity$7 ? fexpr__25186.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25186.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25175 = (function (){var con__19694__auto__ = (new cljs.core.Delay(((function (G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25189 = cljs.core.cst$kw$css;
var G__25190 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25191 = (function (){var G__25192 = (function (){var G__25193 = cljs.core.cst$kw$valign;
var G__25194 = "center";
var G__25195 = cljs.core.cst$kw$css;
var G__25196 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25197 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25193,G__25194,G__25195,G__25196,G__25197) : hoplon.core.td.call(null,G__25193,G__25194,G__25195,G__25196,G__25197));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25192) : hoplon.core.tr.call(null,G__25192));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25189,G__25190,G__25191) : hoplon.core.table.call(null,G__25189,G__25190,G__25191));
});})(G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__19695__auto__ = (new cljs.core.Delay(((function (con__19694__auto__,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__19694__auto__,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__19696__auto__ = ((function (con__19694__auto__,alt__19695__auto__,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__19697__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__19697__auto__)?con__19694__auto__:alt__19695__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
<<<<<<< HEAD
});})(con__18530__auto__,alt__18531__auto__,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25261 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25261.cljs$core$IFn$_invoke$arity$1 ? fexpr__25261.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25261.call(null,text));
})();
var G__25239 = (function (){var G__25262 = cljs.core.cst$kw$css;
var G__25263 = (function (){var fexpr__25268 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25262,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25238,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25265,G__25266,G__25264,G__25267){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25264),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25265)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25266),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25267)?(0):(1))], null);
});})(G__25262,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25238,G__25212,G__25213,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25181,x,i,y,item,G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25268.cljs$core$IFn$_invoke$arity$4 ? fexpr__25268.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25268.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25262,G__25263) : hoplon.core.div.call(null,G__25262,G__25263));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25238,G__25239) : hoplon.core.div.call(null,G__25230,G__25231,G__25232,G__25233,G__25234,G__25235,G__25236,G__25237,G__25238,G__25239));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25212,G__25213,G__25214) : hoplon.core.div.call(null,G__25212,G__25213,G__25214));
});})(G__25166,G__25167,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25166,G__25167,G__25168) : hoplon.core.div.call(null,G__25166,G__25167,G__25168));
=======
});})(con__19694__auto__,alt__19695__auto__,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25198 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__19696__auto__);
return (fexpr__25198.cljs$core$IFn$_invoke$arity$1 ? fexpr__25198.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25198.call(null,text));
})();
var G__25176 = (function (){var G__25199 = cljs.core.cst$kw$css;
var G__25200 = (function (){var fexpr__25205 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25199,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25202,G__25203,G__25201,G__25204){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25201),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25202)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25203),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25204)?(0):(1))], null);
});})(G__25199,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25149,G__25150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25118,x,i,y,item,G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25205.cljs$core$IFn$_invoke$arity$4 ? fexpr__25205.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25205.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25199,G__25200) : hoplon.core.div.call(null,G__25199,G__25200));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176) : hoplon.core.div.call(null,G__25167,G__25168,G__25169,G__25170,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25149,G__25150,G__25151) : hoplon.core.div.call(null,G__25149,G__25150,G__25151));
});})(G__25103,G__25104,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25103,G__25104,G__25105) : hoplon.core.div.call(null,G__25103,G__25104,G__25105));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})()], 0));
});
