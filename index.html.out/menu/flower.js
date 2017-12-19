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
var len__9519__auto___24987 = arguments.length;
var i__9520__auto___24988 = (0);
while(true){
if((i__9520__auto___24988 < len__9519__auto___24987)){
args__9526__auto__.push((arguments[i__9520__auto___24988]));

var G__24989 = (i__9520__auto___24988 + (1));
i__9520__auto___24988 = G__24989;
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
var G__24975 = cljs.core.cst$kw$css;
var G__24976 = (function (){var fexpr__24986 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24975,transition_length__$1){
return (function (G__24981,G__24982,G__24978,G__24985,G__24979,G__24983,G__24980,G__24984){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24978.cljs$core$IFn$_invoke$arity$1 ? G__24978.cljs$core$IFn$_invoke$arity$1(G__24979) : G__24978.call(null,G__24979)),cljs.core.cst$kw$bottom,(G__24978.cljs$core$IFn$_invoke$arity$1 ? G__24978.cljs$core$IFn$_invoke$arity$1(G__24979) : G__24978.call(null,G__24979)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24980),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24981)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24982;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24983.cljs$core$IFn$_invoke$arity$1 ? G__24983.cljs$core$IFn$_invoke$arity$1(G__24984) : G__24983.call(null,G__24984));
} else {
return and__8230__auto__;
}
})())?G__24985:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24975,transition_length__$1))
);
return (fexpr__24986.cljs$core$IFn$_invoke$arity$8 ? fexpr__24986.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24986.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24977 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24975,G__24976,G__24977) : hoplon.core.div.call(null,G__24975,G__24976,G__24977));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24970){
var G__24971 = cljs.core.first(seq24970);
var seq24970__$1 = cljs.core.next(seq24970);
var G__24972 = cljs.core.first(seq24970__$1);
var seq24970__$2 = cljs.core.next(seq24970__$1);
var G__24973 = cljs.core.first(seq24970__$2);
var seq24970__$3 = cljs.core.next(seq24970__$2);
var G__24974 = cljs.core.first(seq24970__$3);
var seq24970__$4 = cljs.core.next(seq24970__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24971,G__24972,G__24973,G__24974,seq24970__$4);
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
var G__24990 = cljs.core.cst$kw$click;
var G__24991 = ((function (G__24990,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24990,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24992 = cljs.core.cst$kw$mouseenter;
var G__24993 = ((function (G__24990,G__24991,G__24992,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24990,G__24991,G__24992,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24994 = cljs.core.cst$kw$mouseleave;
var G__24995 = ((function (G__24990,G__24991,G__24992,G__24993,G__24994,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24990,G__24991,G__24992,G__24993,G__24994,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24996 = cljs.core.cst$kw$css;
var G__24997 = (function (){var fexpr__25008 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25000,G__25005,G__25002,G__25001,G__25003,G__25004,G__24999){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24999;
if(cljs.core.truth_(and__8230__auto__)){
return G__25000;
} else {
return and__8230__auto__;
}
})())?G__25001:(1))),")"].join(''),(function (){var G__25009 = (- G__25003);
return (G__25002.cljs$core$IFn$_invoke$arity$1 ? G__25002.cljs$core$IFn$_invoke$arity$1(G__25009) : G__25002.call(null,G__25009));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25004),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25005)].join(''),(G__25003 * (2)),"pointer",(1),"absolute",(G__25002.cljs$core$IFn$_invoke$arity$1 ? G__25002.cljs$core$IFn$_invoke$arity$1(G__25003) : G__25002.call(null,G__25003)),(G__25003 * (2)),(function (){var G__25010 = (- G__25003);
return (G__25002.cljs$core$IFn$_invoke$arity$1 ? G__25002.cljs$core$IFn$_invoke$arity$1(G__25010) : G__25002.call(null,G__25010));
})()]);
});})(G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25008.cljs$core$IFn$_invoke$arity$7 ? fexpr__25008.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25008.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24998 = (function (){var width = (function (){var fexpr__25014 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25012,G__25011){
var G__25015 = (G__25012 * 0.5);
return (G__25011.cljs$core$IFn$_invoke$arity$1 ? G__25011.cljs$core$IFn$_invoke$arity$1(G__25015) : G__25011.call(null,G__25015));
});})(G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25014.cljs$core$IFn$_invoke$arity$2 ? fexpr__25014.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25014.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25019 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25017,G__25016){
var G__25020 = (G__25017 / (12));
return (G__25016.cljs$core$IFn$_invoke$arity$1 ? G__25016.cljs$core$IFn$_invoke$arity$1(G__25020) : G__25016.call(null,G__25020));
});})(width,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25019.cljs$core$IFn$_invoke$arity$2 ? fexpr__25019.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25019.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25023 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25022,G__25021){
return (G__25021 + (G__25022 * -0.5));
});})(width,height,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25023.cljs$core$IFn$_invoke$arity$2 ? fexpr__25023.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25023.call(null,width,radius));
})();
var top = (function (){var fexpr__25026 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25025,G__25024){
return (G__25024 + (G__25025 * -0.5));
});})(width,height,left,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25026.cljs$core$IFn$_invoke$arity$2 ? fexpr__25026.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25026.call(null,height,radius));
})();
var offset = (function (){var fexpr__25028 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25027){
return (G__25027 * (2));
});})(width,height,left,top,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25028.cljs$core$IFn$_invoke$arity$1 ? fexpr__25028.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25028.call(null,height));
})();
var color = (function (){var fexpr__25032 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25029,G__25030){
var G__25033 = (G__25030.cljs$core$IFn$_invoke$arity$0 ? G__25030.cljs$core$IFn$_invoke$arity$0() : G__25030.call(null));
return (G__25029.cljs$core$IFn$_invoke$arity$1 ? G__25029.cljs$core$IFn$_invoke$arity$1(G__25033) : G__25029.call(null,G__25033));
});})(width,height,left,top,offset,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25032.cljs$core$IFn$_invoke$arity$2 ? fexpr__25032.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25032.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25040 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25036,G__25037,G__25034,G__25038,G__25035,G__25039){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25034.cljs$core$IFn$_invoke$arity$1 ? G__25034.cljs$core$IFn$_invoke$arity$1(G__25035) : G__25034.call(null,G__25035)),cljs.core.cst$kw$height,(G__25034.cljs$core$IFn$_invoke$arity$1 ? G__25034.cljs$core$IFn$_invoke$arity$1(G__25036) : G__25034.call(null,G__25036)),cljs.core.cst$kw$left,(G__25034.cljs$core$IFn$_invoke$arity$1 ? G__25034.cljs$core$IFn$_invoke$arity$1(G__25037) : G__25034.call(null,G__25037)),cljs.core.cst$kw$background_DASH_color,G__25038,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25039),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25039),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25040.cljs$core$IFn$_invoke$arity$6 ? fexpr__25040.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25040.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25041 = cljs.core.cst$kw$css;
var G__25042 = (function (){var fexpr__25053 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25041,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25044,G__25045,G__25047,G__25046,G__25043,G__25048){
var G__25054 = G__25044;
var G__25055 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25057 = (G__25046 - G__25047);
return (G__25045.cljs$core$IFn$_invoke$arity$1 ? G__25045.cljs$core$IFn$_invoke$arity$1(G__25057) : G__25045.call(null,G__25057));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25048)?G__25047:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25048)?"45deg":"0deg")),") "].join('')], null);
var G__25056 = (cljs.core.truth_(G__25048)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25043.cljs$core$IFn$_invoke$arity$3 ? G__25043.cljs$core$IFn$_invoke$arity$3(G__25054,G__25055,G__25056) : G__25043.call(null,G__25054,G__25055,G__25056));
});})(G__25041,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25053.cljs$core$IFn$_invoke$arity$6 ? fexpr__25053.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25053.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25041,G__25042) : hoplon.core.div.call(null,G__25041,G__25042));
})(),(function (){var G__25058 = cljs.core.cst$kw$css;
var G__25059 = (function (){var fexpr__25067 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25058,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25061,G__25062,G__25063,G__25060,G__25064){
var G__25068 = G__25061;
var G__25069 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25062.cljs$core$IFn$_invoke$arity$1 ? G__25062.cljs$core$IFn$_invoke$arity$1(G__25063) : G__25062.call(null,G__25063)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25064)?(0):(1))),")"].join('')], null);
return (G__25060.cljs$core$IFn$_invoke$arity$2 ? G__25060.cljs$core$IFn$_invoke$arity$2(G__25068,G__25069) : G__25060.call(null,G__25068,G__25069));
});})(G__25058,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25067.cljs$core$IFn$_invoke$arity$5 ? fexpr__25067.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25067.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25058,G__25059) : hoplon.core.div.call(null,G__25058,G__25059));
})(),(function (){var G__25070 = cljs.core.cst$kw$css;
var G__25071 = (function (){var fexpr__25083 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25070,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25076,G__25073,G__25074,G__25078,G__25075,G__25072,G__25077){
var G__25084 = G__25073;
var G__25085 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25087 = (G__25075 + ((2) * G__25076));
return (G__25074.cljs$core$IFn$_invoke$arity$1 ? G__25074.cljs$core$IFn$_invoke$arity$1(G__25087) : G__25074.call(null,G__25087));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25077)?G__25078:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25077)?"-45deg":"0deg")),") "].join('')], null);
var G__25086 = (cljs.core.truth_(G__25077)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25072.cljs$core$IFn$_invoke$arity$3 ? G__25072.cljs$core$IFn$_invoke$arity$3(G__25084,G__25085,G__25086) : G__25072.call(null,G__25084,G__25085,G__25086));
});})(G__25070,width,height,left,top,offset,color,default_css,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25083.cljs$core$IFn$_invoke$arity$7 ? fexpr__25083.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25083.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25070,G__25071) : hoplon.core.div.call(null,G__25070,G__25071));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,G__24998) : hoplon.core.div.call(null,G__24990,G__24991,G__24992,G__24993,G__24994,G__24995,G__24996,G__24997,G__24998));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25090 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25088,G__25089){
return (G__25088 / ((1) + G__25089));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25090.cljs$core$IFn$_invoke$arity$2 ? fexpr__25090.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25090.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25093 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25092,G__25091){
return (G__25091 * G__25092);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25093.cljs$core$IFn$_invoke$arity$2 ? fexpr__25093.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25093.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25096 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25095,G__25094){
return (((2) * Math.PI) / (G__25094.cljs$core$IFn$_invoke$arity$1 ? G__25094.cljs$core$IFn$_invoke$arity$1(G__25095) : G__25094.call(null,G__25095)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25096.cljs$core$IFn$_invoke$arity$2 ? fexpr__25096.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25096.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25106 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25101,G__25097,G__25099,G__25098,G__25100){
var G__25107 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25109 = G__25099;
var G__25110 = (i * G__25100);
return (G__25098.cljs$core$IFn$_invoke$arity$2 ? G__25098.cljs$core$IFn$_invoke$arity$2(G__25109,G__25110) : G__25098.call(null,G__25109,G__25110));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25108 = G__25101;
return (G__25097.cljs$core$IFn$_invoke$arity$2 ? G__25097.cljs$core$IFn$_invoke$arity$2(G__25107,G__25108) : G__25097.call(null,G__25107,G__25108));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25106.cljs$core$IFn$_invoke$arity$5 ? fexpr__25106.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25106.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25114 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25113,G__25111,G__25112){
return (G__25111 / (G__25112.cljs$core$IFn$_invoke$arity$1 ? G__25112.cljs$core$IFn$_invoke$arity$1(G__25113) : G__25112.call(null,G__25113)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25114.cljs$core$IFn$_invoke$arity$3 ? fexpr__25114.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25114.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25115 = cljs.core.cst$kw$css;
var G__25116 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25117 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25115,G__25116,G__25117) : hoplon.core.div.call(null,G__25115,G__25116,G__25117));
})(),(function (){var G__25118 = cljs.core.cst$kw$css;
var G__25119 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25120 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__19684__auto__){
var vec__25133 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25143 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25144){
var vec__25145 = p__25144;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25145,(0),null);
var vec__25148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25145,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25145,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25143.cljs$core$IFn$_invoke$arity$1 ? fexpr__25143.cljs$core$IFn$_invoke$arity$1(item__19684__auto__) : fexpr__25143.call(null,item__19684__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25133,(3),null);
var transition_delay = (function (){var fexpr__25154 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25153,G__25152,G__25151){
if(cljs.core.truth_(G__25151)){
return (G__25152 * G__25153);
} else {
return (0);
}
});})(vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25154.cljs$core$IFn$_invoke$arity$3 ? fexpr__25154.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25154.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25156 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25155){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25155);
});})(transition_delay,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25156.cljs$core$IFn$_invoke$arity$1 ? fexpr__25156.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25156.call(null,item));
})();
var text = (function (){var fexpr__25158 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25157){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25157);
});})(transition_delay,url,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25158.cljs$core$IFn$_invoke$arity$1 ? fexpr__25158.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25158.call(null,item));
})();
var handler = (function (){var fexpr__25160 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25159){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25159);
});})(transition_delay,url,text,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25160.cljs$core$IFn$_invoke$arity$1 ? fexpr__25160.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25160.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25163 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25161,G__25162){
var and__8230__auto__ = G__25161;
if(cljs.core.truth_(and__8230__auto__)){
return G__25162;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25163.cljs$core$IFn$_invoke$arity$2 ? fexpr__25163.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25163.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25164 = cljs.core.cst$kw$css;
var G__25165 = (function (){var fexpr__25176 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25164,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25172,G__25169,G__25173,G__25170,G__25167,G__25168,G__25171){
var G__25177 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25168),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25169)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25170),"s"].join('')], null);
var G__25178 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25171)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25172),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25173),"px)"].join(''):"translate(0, 0)")], null);
return (G__25167.cljs$core$IFn$_invoke$arity$2 ? G__25167.cljs$core$IFn$_invoke$arity$2(G__25177,G__25178) : G__25167.call(null,G__25177,G__25178));
});})(G__25164,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25176.cljs$core$IFn$_invoke$arity$7 ? fexpr__25176.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25176.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25166 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25181 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25179,G__25180){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25179)?"black":G__25180),cljs.core.cst$kw$display,"inline"], null);
});})(G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25181.cljs$core$IFn$_invoke$arity$2 ? fexpr__25181.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25181.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25182 = cljs.core.cst$kw$mouseenter;
var G__25183 = ((function (G__25182,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25182,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25184 = cljs.core.cst$kw$mouseleave;
var G__25185 = ((function (G__25182,G__25183,G__25184,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25182,G__25183,G__25184,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25186 = cljs.core.cst$kw$click;
var G__25187 = ((function (G__25182,G__25183,G__25184,G__25185,G__25186,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25182,G__25183,G__25184,G__25185,G__25186,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25182,G__25183,G__25184,G__25185,G__25186,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25182,G__25183,G__25184,G__25185,G__25186,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25188 = cljs.core.cst$kw$css;
var G__25189 = (function (){var fexpr__25201 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25197,G__25195,G__25194,G__25193,G__25192,G__25196,G__25198){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25192)?G__25193:(1))),")"].join(''),(function (){var G__25202 = (- G__25195);
return (G__25194.cljs$core$IFn$_invoke$arity$1 ? G__25194.cljs$core$IFn$_invoke$arity$1(G__25202) : G__25194.call(null,G__25202));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25196 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25197)].join(''),"hidden","white",((2) * G__25195),"pointer",(cljs.core.truth_(G__25198)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25198),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25194.cljs$core$IFn$_invoke$arity$1 ? G__25194.cljs$core$IFn$_invoke$arity$1(G__25195) : G__25194.call(null,G__25195)),"contain",((2) * G__25195),(function (){var G__25203 = (- G__25195);
return (G__25194.cljs$core$IFn$_invoke$arity$1 ? G__25194.cljs$core$IFn$_invoke$arity$1(G__25203) : G__25194.call(null,G__25203));
})()]);
});})(G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25201.cljs$core$IFn$_invoke$arity$7 ? fexpr__25201.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25201.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25190 = (function (){var con__19694__auto__ = (new cljs.core.Delay(((function (G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25204 = cljs.core.cst$kw$css;
var G__25205 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25206 = (function (){var G__25207 = (function (){var G__25208 = cljs.core.cst$kw$valign;
var G__25209 = "center";
var G__25210 = cljs.core.cst$kw$css;
var G__25211 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25212 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25208,G__25209,G__25210,G__25211,G__25212) : hoplon.core.td.call(null,G__25208,G__25209,G__25210,G__25211,G__25212));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25207) : hoplon.core.tr.call(null,G__25207));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25204,G__25205,G__25206) : hoplon.core.table.call(null,G__25204,G__25205,G__25206));
});})(G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__19695__auto__ = (new cljs.core.Delay(((function (con__19694__auto__,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__19694__auto__,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__19696__auto__ = ((function (con__19694__auto__,alt__19695__auto__,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__19697__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__19697__auto__)?con__19694__auto__:alt__19695__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__19694__auto__,alt__19695__auto__,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25213 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__19696__auto__);
return (fexpr__25213.cljs$core$IFn$_invoke$arity$1 ? fexpr__25213.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25213.call(null,text));
})();
var G__25191 = (function (){var G__25214 = cljs.core.cst$kw$css;
var G__25215 = (function (){var fexpr__25220 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25214,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25217,G__25218,G__25216,G__25219){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25216),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25217)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25218),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25219)?(0):(1))], null);
});})(G__25214,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25164,G__25165,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25133,x,i,y,item,G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25220.cljs$core$IFn$_invoke$arity$4 ? fexpr__25220.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25220.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25214,G__25215) : hoplon.core.div.call(null,G__25214,G__25215));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25191) : hoplon.core.div.call(null,G__25182,G__25183,G__25184,G__25185,G__25186,G__25187,G__25188,G__25189,G__25190,G__25191));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25164,G__25165,G__25166) : hoplon.core.div.call(null,G__25164,G__25165,G__25166));
});})(G__25118,G__25119,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25118,G__25119,G__25120) : hoplon.core.div.call(null,G__25118,G__25119,G__25120));
})()], 0));
});
