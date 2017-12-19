// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('unit.conversion');
goog.require('fonts.config');
goog.require('menu.config');
goog.require('colours.ui_gradients');
goog.require('wheel.math.geometry');
goog.require('wheel.font.core');
goog.require('route.hoplon');
menu.flower.big_scale = 1.3;
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24976 = arguments.length;
var i__9520__auto___24977 = (0);
while(true){
if((i__9520__auto___24977 < len__9519__auto___24976)){
args__9526__auto__.push((arguments[i__9520__auto___24977]));

var G__24978 = (i__9520__auto___24977 + (1));
i__9520__auto___24977 = G__24978;
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
var G__24964 = cljs.core.cst$kw$css;
var G__24965 = (function (){var fexpr__24975 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24964,transition_length__$1){
return (function (G__24970,G__24971,G__24967,G__24974,G__24968,G__24972,G__24969,G__24973){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24967.cljs$core$IFn$_invoke$arity$1 ? G__24967.cljs$core$IFn$_invoke$arity$1(G__24968) : G__24967.call(null,G__24968)),cljs.core.cst$kw$bottom,(G__24967.cljs$core$IFn$_invoke$arity$1 ? G__24967.cljs$core$IFn$_invoke$arity$1(G__24968) : G__24967.call(null,G__24968)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24969),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24970)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24971;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24972.cljs$core$IFn$_invoke$arity$1 ? G__24972.cljs$core$IFn$_invoke$arity$1(G__24973) : G__24972.call(null,G__24973));
} else {
return and__8230__auto__;
}
})())?G__24974:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24964,transition_length__$1))
);
return (fexpr__24975.cljs$core$IFn$_invoke$arity$8 ? fexpr__24975.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24975.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24966 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24964,G__24965,G__24966) : hoplon.core.div.call(null,G__24964,G__24965,G__24966));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

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
} else {
return and__8230__auto__;
}
})())?G__24990:(1))),")"].join(''),(function (){var G__24998 = (- G__24992);
return (G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24998) : G__24991.call(null,G__24998));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24993),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24994)].join(''),(G__24992 * (2)),"pointer",(1),"absolute",(G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24992) : G__24991.call(null,G__24992)),(G__24992 * (2)),(function (){var G__24999 = (- G__24992);
return (G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24999) : G__24991.call(null,G__24999));
})()]);
});})(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24997.cljs$core$IFn$_invoke$arity$7 ? fexpr__24997.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__24997.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24987 = (function (){var width = (function (){var fexpr__25003 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25001,G__25000){
var G__25004 = (G__25001 * 0.5);
return (G__25000.cljs$core$IFn$_invoke$arity$1 ? G__25000.cljs$core$IFn$_invoke$arity$1(G__25004) : G__25000.call(null,G__25004));
});})(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25003.cljs$core$IFn$_invoke$arity$2 ? fexpr__25003.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25003.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25008 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25006,G__25005){
var G__25009 = (G__25006 / (12));
return (G__25005.cljs$core$IFn$_invoke$arity$1 ? G__25005.cljs$core$IFn$_invoke$arity$1(G__25009) : G__25005.call(null,G__25009));
});})(width,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25008.cljs$core$IFn$_invoke$arity$2 ? fexpr__25008.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25008.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25012 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25011,G__25010){
return (G__25010 + (G__25011 * -0.5));
});})(width,height,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25012.cljs$core$IFn$_invoke$arity$2 ? fexpr__25012.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25012.call(null,width,radius));
})();
var top = (function (){var fexpr__25015 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25014,G__25013){
return (G__25013 + (G__25014 * -0.5));
});})(width,height,left,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25015.cljs$core$IFn$_invoke$arity$2 ? fexpr__25015.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25015.call(null,height,radius));
})();
var offset = (function (){var fexpr__25017 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25016){
return (G__25016 * (2));
});})(width,height,left,top,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25017.cljs$core$IFn$_invoke$arity$1 ? fexpr__25017.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25017.call(null,height));
})();
var color = (function (){var fexpr__25021 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25018,G__25019){
var G__25022 = (G__25019.cljs$core$IFn$_invoke$arity$0 ? G__25019.cljs$core$IFn$_invoke$arity$0() : G__25019.call(null));
return (G__25018.cljs$core$IFn$_invoke$arity$1 ? G__25018.cljs$core$IFn$_invoke$arity$1(G__25022) : G__25018.call(null,G__25022));
});})(width,height,left,top,offset,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25021.cljs$core$IFn$_invoke$arity$2 ? fexpr__25021.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25021.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25029 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25025,G__25026,G__25023,G__25027,G__25024,G__25028){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25023.cljs$core$IFn$_invoke$arity$1 ? G__25023.cljs$core$IFn$_invoke$arity$1(G__25024) : G__25023.call(null,G__25024)),cljs.core.cst$kw$height,(G__25023.cljs$core$IFn$_invoke$arity$1 ? G__25023.cljs$core$IFn$_invoke$arity$1(G__25025) : G__25023.call(null,G__25025)),cljs.core.cst$kw$left,(G__25023.cljs$core$IFn$_invoke$arity$1 ? G__25023.cljs$core$IFn$_invoke$arity$1(G__25026) : G__25023.call(null,G__25026)),cljs.core.cst$kw$background_DASH_color,G__25027,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25028),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25028),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25029.cljs$core$IFn$_invoke$arity$6 ? fexpr__25029.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25029.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25030 = cljs.core.cst$kw$css;
var G__25031 = (function (){var fexpr__25042 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25030,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25033,G__25034,G__25036,G__25035,G__25032,G__25037){
var G__25043 = G__25033;
var G__25044 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25046 = (G__25035 - G__25036);
return (G__25034.cljs$core$IFn$_invoke$arity$1 ? G__25034.cljs$core$IFn$_invoke$arity$1(G__25046) : G__25034.call(null,G__25046));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25037)?G__25036:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25037)?"45deg":"0deg")),") "].join('')], null);
var G__25045 = (cljs.core.truth_(G__25037)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25032.cljs$core$IFn$_invoke$arity$3 ? G__25032.cljs$core$IFn$_invoke$arity$3(G__25043,G__25044,G__25045) : G__25032.call(null,G__25043,G__25044,G__25045));
});})(G__25030,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25042.cljs$core$IFn$_invoke$arity$6 ? fexpr__25042.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25042.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25030,G__25031) : hoplon.core.div.call(null,G__25030,G__25031));
})(),(function (){var G__25047 = cljs.core.cst$kw$css;
var G__25048 = (function (){var fexpr__25056 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25047,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25050,G__25051,G__25052,G__25049,G__25053){
var G__25057 = G__25050;
var G__25058 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25051.cljs$core$IFn$_invoke$arity$1 ? G__25051.cljs$core$IFn$_invoke$arity$1(G__25052) : G__25051.call(null,G__25052)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25053)?(0):(1))),")"].join('')], null);
return (G__25049.cljs$core$IFn$_invoke$arity$2 ? G__25049.cljs$core$IFn$_invoke$arity$2(G__25057,G__25058) : G__25049.call(null,G__25057,G__25058));
});})(G__25047,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25056.cljs$core$IFn$_invoke$arity$5 ? fexpr__25056.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25056.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25047,G__25048) : hoplon.core.div.call(null,G__25047,G__25048));
})(),(function (){var G__25059 = cljs.core.cst$kw$css;
var G__25060 = (function (){var fexpr__25072 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25059,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25065,G__25062,G__25063,G__25067,G__25064,G__25061,G__25066){
var G__25073 = G__25062;
var G__25074 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25076 = (G__25064 + ((2) * G__25065));
return (G__25063.cljs$core$IFn$_invoke$arity$1 ? G__25063.cljs$core$IFn$_invoke$arity$1(G__25076) : G__25063.call(null,G__25076));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25066)?G__25067:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25066)?"-45deg":"0deg")),") "].join('')], null);
var G__25075 = (cljs.core.truth_(G__25066)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25061.cljs$core$IFn$_invoke$arity$3 ? G__25061.cljs$core$IFn$_invoke$arity$3(G__25073,G__25074,G__25075) : G__25061.call(null,G__25073,G__25074,G__25075));
});})(G__25059,width,height,left,top,offset,color,default_css,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25072.cljs$core$IFn$_invoke$arity$7 ? fexpr__25072.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25072.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25059,G__25060) : hoplon.core.div.call(null,G__25059,G__25060));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987) : hoplon.core.div.call(null,G__24979,G__24980,G__24981,G__24982,G__24983,G__24984,G__24985,G__24986,G__24987));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25077,G__25078){
return (G__25077 / ((1) + G__25078));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25079.cljs$core$IFn$_invoke$arity$2 ? fexpr__25079.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25079.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25082 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25081,G__25080){
return (G__25080 * G__25081);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25082.cljs$core$IFn$_invoke$arity$2 ? fexpr__25082.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25082.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25085 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25084,G__25083){
return (((2) * Math.PI) / (G__25083.cljs$core$IFn$_invoke$arity$1 ? G__25083.cljs$core$IFn$_invoke$arity$1(G__25084) : G__25083.call(null,G__25084)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25085.cljs$core$IFn$_invoke$arity$2 ? fexpr__25085.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25085.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25095 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25090,G__25086,G__25088,G__25087,G__25089){
var G__25096 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25098 = G__25088;
var G__25099 = (i * G__25089);
return (G__25087.cljs$core$IFn$_invoke$arity$2 ? G__25087.cljs$core$IFn$_invoke$arity$2(G__25098,G__25099) : G__25087.call(null,G__25098,G__25099));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25097 = G__25090;
return (G__25086.cljs$core$IFn$_invoke$arity$2 ? G__25086.cljs$core$IFn$_invoke$arity$2(G__25096,G__25097) : G__25086.call(null,G__25096,G__25097));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25095.cljs$core$IFn$_invoke$arity$5 ? fexpr__25095.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25095.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25103 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25102,G__25100,G__25101){
return (G__25100 / (G__25101.cljs$core$IFn$_invoke$arity$1 ? G__25101.cljs$core$IFn$_invoke$arity$1(G__25102) : G__25101.call(null,G__25102)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25103.cljs$core$IFn$_invoke$arity$3 ? fexpr__25103.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25103.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25104 = cljs.core.cst$kw$css;
var G__25105 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25106 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25104,G__25105,G__25106) : hoplon.core.div.call(null,G__25104,G__25105,G__25106));
})(),(function (){var G__25107 = cljs.core.cst$kw$css;
var G__25108 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25109 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18522__auto__){
var vec__25122 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25132 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25133){
var vec__25134 = p__25133;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25134,(0),null);
var vec__25137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25134,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25137,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25134,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25132.cljs$core$IFn$_invoke$arity$1 ? fexpr__25132.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25132.call(null,item__18522__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25122,(3),null);
var transition_delay = (function (){var fexpr__25143 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25142,G__25141,G__25140){
if(cljs.core.truth_(G__25140)){
return (G__25141 * G__25142);
} else {
return (0);
}
});})(vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25143.cljs$core$IFn$_invoke$arity$3 ? fexpr__25143.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25143.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25145 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25144){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25144);
});})(transition_delay,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25145.cljs$core$IFn$_invoke$arity$1 ? fexpr__25145.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25145.call(null,item));
})();
var text = (function (){var fexpr__25147 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25146){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25146);
});})(transition_delay,url,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25147.cljs$core$IFn$_invoke$arity$1 ? fexpr__25147.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25147.call(null,item));
})();
var handler = (function (){var fexpr__25149 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25148){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25148);
});})(transition_delay,url,text,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25149.cljs$core$IFn$_invoke$arity$1 ? fexpr__25149.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25149.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25152 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25150,G__25151){
var and__8230__auto__ = G__25150;
if(cljs.core.truth_(and__8230__auto__)){
return G__25151;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25152.cljs$core$IFn$_invoke$arity$2 ? fexpr__25152.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25152.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25153 = cljs.core.cst$kw$css;
var G__25154 = (function (){var fexpr__25165 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25153,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25161,G__25158,G__25162,G__25159,G__25156,G__25157,G__25160){
var G__25166 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25157),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25158)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25159),"s"].join('')], null);
var G__25167 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25160)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25161),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25162),"px)"].join(''):"translate(0, 0)")], null);
return (G__25156.cljs$core$IFn$_invoke$arity$2 ? G__25156.cljs$core$IFn$_invoke$arity$2(G__25166,G__25167) : G__25156.call(null,G__25166,G__25167));
});})(G__25153,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25165.cljs$core$IFn$_invoke$arity$7 ? fexpr__25165.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25165.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25155 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25170 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25168,G__25169){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25168)?"black":G__25169),cljs.core.cst$kw$display,"inline"], null);
});})(G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25170.cljs$core$IFn$_invoke$arity$2 ? fexpr__25170.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25170.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25171 = cljs.core.cst$kw$mouseenter;
var G__25172 = ((function (G__25171,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25171,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25173 = cljs.core.cst$kw$mouseleave;
var G__25174 = ((function (G__25171,G__25172,G__25173,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25171,G__25172,G__25173,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25175 = cljs.core.cst$kw$click;
var G__25176 = ((function (G__25171,G__25172,G__25173,G__25174,G__25175,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25171,G__25172,G__25173,G__25174,G__25175,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25171,G__25172,G__25173,G__25174,G__25175,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25171,G__25172,G__25173,G__25174,G__25175,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25177 = cljs.core.cst$kw$css;
var G__25178 = (function (){var fexpr__25190 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25186,G__25184,G__25183,G__25182,G__25181,G__25185,G__25187){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25181)?G__25182:(1))),")"].join(''),(function (){var G__25191 = (- G__25184);
return (G__25183.cljs$core$IFn$_invoke$arity$1 ? G__25183.cljs$core$IFn$_invoke$arity$1(G__25191) : G__25183.call(null,G__25191));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25185 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25186)].join(''),"hidden","white",((2) * G__25184),"pointer",(cljs.core.truth_(G__25187)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25187),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25183.cljs$core$IFn$_invoke$arity$1 ? G__25183.cljs$core$IFn$_invoke$arity$1(G__25184) : G__25183.call(null,G__25184)),"contain",((2) * G__25184),(function (){var G__25192 = (- G__25184);
return (G__25183.cljs$core$IFn$_invoke$arity$1 ? G__25183.cljs$core$IFn$_invoke$arity$1(G__25192) : G__25183.call(null,G__25192));
})()]);
});})(G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25190.cljs$core$IFn$_invoke$arity$7 ? fexpr__25190.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25190.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25179 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25193 = cljs.core.cst$kw$css;
var G__25194 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25195 = (function (){var G__25196 = (function (){var G__25197 = cljs.core.cst$kw$valign;
var G__25198 = "center";
var G__25199 = cljs.core.cst$kw$css;
var G__25200 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25201 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25197,G__25198,G__25199,G__25200,G__25201) : hoplon.core.td.call(null,G__25197,G__25198,G__25199,G__25200,G__25201));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25196) : hoplon.core.tr.call(null,G__25196));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25193,G__25194,G__25195) : hoplon.core.table.call(null,G__25193,G__25194,G__25195));
});})(G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (con__18532__auto__,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18532__auto__,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18534__auto__ = ((function (con__18532__auto__,alt__18533__auto__,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18532__auto__,alt__18533__auto__,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25202 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25202.cljs$core$IFn$_invoke$arity$1 ? fexpr__25202.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25202.call(null,text));
})();
var G__25180 = (function (){var G__25203 = cljs.core.cst$kw$css;
var G__25204 = (function (){var fexpr__25209 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25203,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25206,G__25207,G__25205,G__25208){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25205),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25206)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25207),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25208)?(0):(1))], null);
});})(G__25203,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25153,G__25154,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25122,x,i,y,item,G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25209.cljs$core$IFn$_invoke$arity$4 ? fexpr__25209.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25209.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25203,G__25204) : hoplon.core.div.call(null,G__25203,G__25204));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180) : hoplon.core.div.call(null,G__25171,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25153,G__25154,G__25155) : hoplon.core.div.call(null,G__25153,G__25154,G__25155));
});})(G__25107,G__25108,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25107,G__25108,G__25109) : hoplon.core.div.call(null,G__25107,G__25108,G__25109));
})()], 0));
});
