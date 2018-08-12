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
var len__9519__auto___24995 = arguments.length;
var i__9520__auto___24996 = (0);
while(true){
if((i__9520__auto___24996 < len__9519__auto___24995)){
args__9526__auto__.push((arguments[i__9520__auto___24996]));

var G__24997 = (i__9520__auto___24996 + (1));
i__9520__auto___24996 = G__24997;
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
var G__24983 = cljs.core.cst$kw$css;
var G__24984 = (function (){var fexpr__24994 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24983,transition_length__$1){
return (function (G__24989,G__24990,G__24986,G__24993,G__24987,G__24991,G__24988,G__24992){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24986.cljs$core$IFn$_invoke$arity$1 ? G__24986.cljs$core$IFn$_invoke$arity$1(G__24987) : G__24986.call(null,G__24987)),cljs.core.cst$kw$bottom,(G__24986.cljs$core$IFn$_invoke$arity$1 ? G__24986.cljs$core$IFn$_invoke$arity$1(G__24987) : G__24986.call(null,G__24987)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24988),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24989)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24990;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24991.cljs$core$IFn$_invoke$arity$1 ? G__24991.cljs$core$IFn$_invoke$arity$1(G__24992) : G__24991.call(null,G__24992));
} else {
return and__8230__auto__;
}
})())?G__24993:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24983,transition_length__$1))
);
return (fexpr__24994.cljs$core$IFn$_invoke$arity$8 ? fexpr__24994.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24994.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24985 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24983,G__24984,G__24985) : hoplon.core.div.call(null,G__24983,G__24984,G__24985));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24978){
var G__24979 = cljs.core.first(seq24978);
var seq24978__$1 = cljs.core.next(seq24978);
var G__24980 = cljs.core.first(seq24978__$1);
var seq24978__$2 = cljs.core.next(seq24978__$1);
var G__24981 = cljs.core.first(seq24978__$2);
var seq24978__$3 = cljs.core.next(seq24978__$2);
var G__24982 = cljs.core.first(seq24978__$3);
var seq24978__$4 = cljs.core.next(seq24978__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24979,G__24980,G__24981,G__24982,seq24978__$4);
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
var G__24998 = cljs.core.cst$kw$click;
var G__24999 = ((function (G__24998,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24998,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25000 = cljs.core.cst$kw$mouseenter;
var G__25001 = ((function (G__24998,G__24999,G__25000,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24998,G__24999,G__25000,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25002 = cljs.core.cst$kw$mouseleave;
var G__25003 = ((function (G__24998,G__24999,G__25000,G__25001,G__25002,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24998,G__24999,G__25000,G__25001,G__25002,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25004 = cljs.core.cst$kw$css;
var G__25005 = (function (){var fexpr__25016 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25008,G__25013,G__25010,G__25009,G__25011,G__25012,G__25007){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__25007;
if(cljs.core.truth_(and__8230__auto__)){
return G__25008;
} else {
return and__8230__auto__;
}
})())?G__25009:(1))),")"].join(''),(function (){var G__25017 = (- G__25011);
return (G__25010.cljs$core$IFn$_invoke$arity$1 ? G__25010.cljs$core$IFn$_invoke$arity$1(G__25017) : G__25010.call(null,G__25017));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25012),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25013)].join(''),(G__25011 * (2)),"pointer",(1),"absolute",(G__25010.cljs$core$IFn$_invoke$arity$1 ? G__25010.cljs$core$IFn$_invoke$arity$1(G__25011) : G__25010.call(null,G__25011)),(G__25011 * (2)),(function (){var G__25018 = (- G__25011);
return (G__25010.cljs$core$IFn$_invoke$arity$1 ? G__25010.cljs$core$IFn$_invoke$arity$1(G__25018) : G__25010.call(null,G__25018));
})()]);
});})(G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25016.cljs$core$IFn$_invoke$arity$7 ? fexpr__25016.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25016.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25006 = (function (){var width = (function (){var fexpr__25022 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25020,G__25019){
var G__25023 = (G__25020 * 0.5);
return (G__25019.cljs$core$IFn$_invoke$arity$1 ? G__25019.cljs$core$IFn$_invoke$arity$1(G__25023) : G__25019.call(null,G__25023));
});})(G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25022.cljs$core$IFn$_invoke$arity$2 ? fexpr__25022.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25022.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25027 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25025,G__25024){
var G__25028 = (G__25025 / (12));
return (G__25024.cljs$core$IFn$_invoke$arity$1 ? G__25024.cljs$core$IFn$_invoke$arity$1(G__25028) : G__25024.call(null,G__25028));
});})(width,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25027.cljs$core$IFn$_invoke$arity$2 ? fexpr__25027.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25027.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25031 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25030,G__25029){
return (G__25029 + (G__25030 * -0.5));
});})(width,height,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25031.cljs$core$IFn$_invoke$arity$2 ? fexpr__25031.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25031.call(null,width,radius));
})();
var top = (function (){var fexpr__25034 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25033,G__25032){
return (G__25032 + (G__25033 * -0.5));
});})(width,height,left,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25034.cljs$core$IFn$_invoke$arity$2 ? fexpr__25034.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25034.call(null,height,radius));
})();
var offset = (function (){var fexpr__25036 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25035){
return (G__25035 * (2));
});})(width,height,left,top,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25036.cljs$core$IFn$_invoke$arity$1 ? fexpr__25036.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25036.call(null,height));
})();
var color = (function (){var fexpr__25040 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25037,G__25038){
var G__25041 = (G__25038.cljs$core$IFn$_invoke$arity$0 ? G__25038.cljs$core$IFn$_invoke$arity$0() : G__25038.call(null));
return (G__25037.cljs$core$IFn$_invoke$arity$1 ? G__25037.cljs$core$IFn$_invoke$arity$1(G__25041) : G__25037.call(null,G__25041));
});})(width,height,left,top,offset,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25040.cljs$core$IFn$_invoke$arity$2 ? fexpr__25040.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25040.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25050 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25044,G__25046,G__25042,G__25047,G__25043,G__25048,G__25045){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25042.cljs$core$IFn$_invoke$arity$1 ? G__25042.cljs$core$IFn$_invoke$arity$1(G__25043) : G__25042.call(null,G__25043)),cljs.core.cst$kw$height,(G__25042.cljs$core$IFn$_invoke$arity$1 ? G__25042.cljs$core$IFn$_invoke$arity$1(G__25044) : G__25042.call(null,G__25044)),cljs.core.cst$kw$left,(function (){var G__25051 = (G__25045.cljs$core$IFn$_invoke$arity$1 ? G__25045.cljs$core$IFn$_invoke$arity$1(G__25046) : G__25045.call(null,G__25046));
return (G__25042.cljs$core$IFn$_invoke$arity$1 ? G__25042.cljs$core$IFn$_invoke$arity$1(G__25051) : G__25042.call(null,G__25051));
})(),cljs.core.cst$kw$background_DASH_color,G__25047,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25048),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25048),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25050.cljs$core$IFn$_invoke$arity$7 ? fexpr__25050.cljs$core$IFn$_invoke$arity$7(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1,Math.round) : fexpr__25050.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1,Math.round));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25052 = cljs.core.cst$kw$css;
var G__25053 = (function (){var fexpr__25064 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25052,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25055,G__25056,G__25058,G__25057,G__25054,G__25059){
var G__25065 = G__25055;
var G__25066 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25068 = (G__25057 - G__25058);
return (G__25056.cljs$core$IFn$_invoke$arity$1 ? G__25056.cljs$core$IFn$_invoke$arity$1(G__25068) : G__25056.call(null,G__25068));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25059)?G__25058:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25059)?"45deg":"0deg")),") "].join('')], null);
var G__25067 = (cljs.core.truth_(G__25059)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25054.cljs$core$IFn$_invoke$arity$3 ? G__25054.cljs$core$IFn$_invoke$arity$3(G__25065,G__25066,G__25067) : G__25054.call(null,G__25065,G__25066,G__25067));
});})(G__25052,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25064.cljs$core$IFn$_invoke$arity$6 ? fexpr__25064.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25064.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25052,G__25053) : hoplon.core.div.call(null,G__25052,G__25053));
})(),(function (){var G__25069 = cljs.core.cst$kw$css;
var G__25070 = (function (){var fexpr__25078 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25069,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25072,G__25073,G__25074,G__25071,G__25075){
var G__25079 = G__25072;
var G__25080 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25073.cljs$core$IFn$_invoke$arity$1 ? G__25073.cljs$core$IFn$_invoke$arity$1(G__25074) : G__25073.call(null,G__25074)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25075)?(0):(1))),")"].join('')], null);
return (G__25071.cljs$core$IFn$_invoke$arity$2 ? G__25071.cljs$core$IFn$_invoke$arity$2(G__25079,G__25080) : G__25071.call(null,G__25079,G__25080));
});})(G__25069,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25078.cljs$core$IFn$_invoke$arity$5 ? fexpr__25078.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25078.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25069,G__25070) : hoplon.core.div.call(null,G__25069,G__25070));
})(),(function (){var G__25081 = cljs.core.cst$kw$css;
var G__25082 = (function (){var fexpr__25094 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25081,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25087,G__25084,G__25085,G__25089,G__25086,G__25083,G__25088){
var G__25095 = G__25084;
var G__25096 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25098 = (G__25086 + ((2) * G__25087));
return (G__25085.cljs$core$IFn$_invoke$arity$1 ? G__25085.cljs$core$IFn$_invoke$arity$1(G__25098) : G__25085.call(null,G__25098));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25088)?G__25089:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25088)?"-45deg":"0deg")),") "].join('')], null);
var G__25097 = (cljs.core.truth_(G__25088)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25083.cljs$core$IFn$_invoke$arity$3 ? G__25083.cljs$core$IFn$_invoke$arity$3(G__25095,G__25096,G__25097) : G__25083.call(null,G__25095,G__25096,G__25097));
});})(G__25081,width,height,left,top,offset,color,default_css,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25094.cljs$core$IFn$_invoke$arity$7 ? fexpr__25094.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25094.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25081,G__25082) : hoplon.core.div.call(null,G__25081,G__25082));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006) : hoplon.core.div.call(null,G__24998,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25101 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25099,G__25100){
return (G__25099 / ((1) + G__25100));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25101.cljs$core$IFn$_invoke$arity$2 ? fexpr__25101.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25101.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25104 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25103,G__25102){
return (G__25102 * G__25103);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25104.cljs$core$IFn$_invoke$arity$2 ? fexpr__25104.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25104.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25107 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25106,G__25105){
return (((2) * Math.PI) / (G__25105.cljs$core$IFn$_invoke$arity$1 ? G__25105.cljs$core$IFn$_invoke$arity$1(G__25106) : G__25105.call(null,G__25106)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25107.cljs$core$IFn$_invoke$arity$2 ? fexpr__25107.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25107.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25117 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25112,G__25108,G__25110,G__25109,G__25111){
var G__25118 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25120 = G__25110;
var G__25121 = (i * G__25111);
return (G__25109.cljs$core$IFn$_invoke$arity$2 ? G__25109.cljs$core$IFn$_invoke$arity$2(G__25120,G__25121) : G__25109.call(null,G__25120,G__25121));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25119 = G__25112;
return (G__25108.cljs$core$IFn$_invoke$arity$2 ? G__25108.cljs$core$IFn$_invoke$arity$2(G__25118,G__25119) : G__25108.call(null,G__25118,G__25119));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25117.cljs$core$IFn$_invoke$arity$5 ? fexpr__25117.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25117.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25125 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25124,G__25122,G__25123){
return (G__25122 / (G__25123.cljs$core$IFn$_invoke$arity$1 ? G__25123.cljs$core$IFn$_invoke$arity$1(G__25124) : G__25123.call(null,G__25124)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25125.cljs$core$IFn$_invoke$arity$3 ? fexpr__25125.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25125.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25126 = cljs.core.cst$kw$css;
var G__25127 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25128 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25126,G__25127,G__25128) : hoplon.core.div.call(null,G__25126,G__25127,G__25128));
})(),(function (){var G__25129 = cljs.core.cst$kw$css;
var G__25130 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25131 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18522__auto__){
var vec__25144 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25154 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25155){
var vec__25156 = p__25155;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25156,(0),null);
var vec__25159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25156,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25156,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25154.cljs$core$IFn$_invoke$arity$1 ? fexpr__25154.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25154.call(null,item__18522__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(3),null);
var transition_delay = (function (){var fexpr__25165 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25164,G__25163,G__25162){
if(cljs.core.truth_(G__25162)){
return (G__25163 * G__25164);
} else {
return (0);
}
});})(vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25165.cljs$core$IFn$_invoke$arity$3 ? fexpr__25165.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25165.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25167 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25166){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25166);
});})(transition_delay,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25167.cljs$core$IFn$_invoke$arity$1 ? fexpr__25167.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25167.call(null,item));
})();
var text = (function (){var fexpr__25169 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25168){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25168);
});})(transition_delay,url,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25169.cljs$core$IFn$_invoke$arity$1 ? fexpr__25169.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25169.call(null,item));
})();
var handler = (function (){var fexpr__25171 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25170){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25170);
});})(transition_delay,url,text,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25171.cljs$core$IFn$_invoke$arity$1 ? fexpr__25171.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25171.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25174 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25172,G__25173){
var and__8230__auto__ = G__25172;
if(cljs.core.truth_(and__8230__auto__)){
return G__25173;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25174.cljs$core$IFn$_invoke$arity$2 ? fexpr__25174.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25174.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25175 = cljs.core.cst$kw$css;
var G__25176 = (function (){var fexpr__25187 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25175,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25183,G__25180,G__25184,G__25181,G__25178,G__25179,G__25182){
var G__25188 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25179),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25180)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25181),"s"].join('')], null);
var G__25189 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25182)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25183),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25184),"px)"].join(''):"translate(0, 0)")], null);
return (G__25178.cljs$core$IFn$_invoke$arity$2 ? G__25178.cljs$core$IFn$_invoke$arity$2(G__25188,G__25189) : G__25178.call(null,G__25188,G__25189));
});})(G__25175,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25187.cljs$core$IFn$_invoke$arity$7 ? fexpr__25187.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25187.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25177 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25192 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25190,G__25191){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25190)?"black":G__25191),cljs.core.cst$kw$display,"inline"], null);
});})(G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25192.cljs$core$IFn$_invoke$arity$2 ? fexpr__25192.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25192.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25193 = cljs.core.cst$kw$mouseenter;
var G__25194 = ((function (G__25193,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25193,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25195 = cljs.core.cst$kw$mouseleave;
var G__25196 = ((function (G__25193,G__25194,G__25195,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25193,G__25194,G__25195,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25197 = cljs.core.cst$kw$click;
var G__25198 = ((function (G__25193,G__25194,G__25195,G__25196,G__25197,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25193,G__25194,G__25195,G__25196,G__25197,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25193,G__25194,G__25195,G__25196,G__25197,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25193,G__25194,G__25195,G__25196,G__25197,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25199 = cljs.core.cst$kw$css;
var G__25200 = (function (){var fexpr__25212 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25208,G__25206,G__25205,G__25204,G__25203,G__25207,G__25209){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25203)?G__25204:(1))),")"].join(''),(function (){var G__25213 = (- G__25206);
return (G__25205.cljs$core$IFn$_invoke$arity$1 ? G__25205.cljs$core$IFn$_invoke$arity$1(G__25213) : G__25205.call(null,G__25213));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25207 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25208)].join(''),"hidden","white",((2) * G__25206),"pointer",(cljs.core.truth_(G__25209)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25209),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25205.cljs$core$IFn$_invoke$arity$1 ? G__25205.cljs$core$IFn$_invoke$arity$1(G__25206) : G__25205.call(null,G__25206)),"contain",((2) * G__25206),(function (){var G__25214 = (- G__25206);
return (G__25205.cljs$core$IFn$_invoke$arity$1 ? G__25205.cljs$core$IFn$_invoke$arity$1(G__25214) : G__25205.call(null,G__25214));
})()]);
});})(G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25212.cljs$core$IFn$_invoke$arity$7 ? fexpr__25212.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25212.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25201 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25215 = cljs.core.cst$kw$css;
var G__25216 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25217 = (function (){var G__25218 = (function (){var G__25219 = cljs.core.cst$kw$valign;
var G__25220 = "center";
var G__25221 = cljs.core.cst$kw$css;
var G__25222 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25223 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25219,G__25220,G__25221,G__25222,G__25223) : hoplon.core.td.call(null,G__25219,G__25220,G__25221,G__25222,G__25223));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25218) : hoplon.core.tr.call(null,G__25218));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25215,G__25216,G__25217) : hoplon.core.table.call(null,G__25215,G__25216,G__25217));
});})(G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (con__18532__auto__,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18532__auto__,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18534__auto__ = ((function (con__18532__auto__,alt__18533__auto__,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18532__auto__,alt__18533__auto__,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25224 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25224.cljs$core$IFn$_invoke$arity$1 ? fexpr__25224.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25224.call(null,text));
})();
var G__25202 = (function (){var G__25225 = cljs.core.cst$kw$css;
var G__25226 = (function (){var fexpr__25231 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25225,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25228,G__25229,G__25227,G__25230){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25227),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25228)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25229),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25230)?(0):(1))], null);
});})(G__25225,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25175,G__25176,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25144,x,i,y,item,G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25231.cljs$core$IFn$_invoke$arity$4 ? fexpr__25231.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25231.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25225,G__25226) : hoplon.core.div.call(null,G__25225,G__25226));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25202) : hoplon.core.div.call(null,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25202));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25175,G__25176,G__25177) : hoplon.core.div.call(null,G__25175,G__25176,G__25177));
});})(G__25129,G__25130,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25129,G__25130,G__25131) : hoplon.core.div.call(null,G__25129,G__25130,G__25131));
})()], 0));
});
