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
var len__9519__auto___24996 = arguments.length;
var i__9520__auto___24997 = (0);
while(true){
if((i__9520__auto___24997 < len__9519__auto___24996)){
args__9526__auto__.push((arguments[i__9520__auto___24997]));

var G__24998 = (i__9520__auto___24997 + (1));
i__9520__auto___24997 = G__24998;
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
var G__24984 = cljs.core.cst$kw$css;
var G__24985 = (function (){var fexpr__24995 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24984,transition_length__$1){
return (function (G__24990,G__24991,G__24987,G__24994,G__24988,G__24992,G__24989,G__24993){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24987.cljs$core$IFn$_invoke$arity$1 ? G__24987.cljs$core$IFn$_invoke$arity$1(G__24988) : G__24987.call(null,G__24988)),cljs.core.cst$kw$bottom,(G__24987.cljs$core$IFn$_invoke$arity$1 ? G__24987.cljs$core$IFn$_invoke$arity$1(G__24988) : G__24987.call(null,G__24988)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24989),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24990)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24991;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24992.cljs$core$IFn$_invoke$arity$1 ? G__24992.cljs$core$IFn$_invoke$arity$1(G__24993) : G__24992.call(null,G__24993));
} else {
return and__8230__auto__;
}
})())?G__24994:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24984,transition_length__$1))
);
return (fexpr__24995.cljs$core$IFn$_invoke$arity$8 ? fexpr__24995.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24995.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24986 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24984,G__24985,G__24986) : hoplon.core.div.call(null,G__24984,G__24985,G__24986));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24979){
var G__24980 = cljs.core.first(seq24979);
var seq24979__$1 = cljs.core.next(seq24979);
var G__24981 = cljs.core.first(seq24979__$1);
var seq24979__$2 = cljs.core.next(seq24979__$1);
var G__24982 = cljs.core.first(seq24979__$2);
var seq24979__$3 = cljs.core.next(seq24979__$2);
var G__24983 = cljs.core.first(seq24979__$3);
var seq24979__$4 = cljs.core.next(seq24979__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24980,G__24981,G__24982,G__24983,seq24979__$4);
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
var G__24999 = cljs.core.cst$kw$click;
var G__25000 = ((function (G__24999,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24999,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25001 = cljs.core.cst$kw$mouseenter;
var G__25002 = ((function (G__24999,G__25000,G__25001,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24999,G__25000,G__25001,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25003 = cljs.core.cst$kw$mouseleave;
var G__25004 = ((function (G__24999,G__25000,G__25001,G__25002,G__25003,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24999,G__25000,G__25001,G__25002,G__25003,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25005 = cljs.core.cst$kw$css;
var G__25006 = (function (){var fexpr__25017 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25009,G__25014,G__25011,G__25010,G__25012,G__25013,G__25008){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__25008;
if(cljs.core.truth_(and__8230__auto__)){
return G__25009;
} else {
return and__8230__auto__;
}
})())?G__25010:(1))),")"].join(''),(function (){var G__25018 = (- G__25012);
return (G__25011.cljs$core$IFn$_invoke$arity$1 ? G__25011.cljs$core$IFn$_invoke$arity$1(G__25018) : G__25011.call(null,G__25018));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25013),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25014)].join(''),(G__25012 * (2)),"pointer",(1),"absolute",(G__25011.cljs$core$IFn$_invoke$arity$1 ? G__25011.cljs$core$IFn$_invoke$arity$1(G__25012) : G__25011.call(null,G__25012)),(G__25012 * (2)),(function (){var G__25019 = (- G__25012);
return (G__25011.cljs$core$IFn$_invoke$arity$1 ? G__25011.cljs$core$IFn$_invoke$arity$1(G__25019) : G__25011.call(null,G__25019));
})()]);
});})(G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25017.cljs$core$IFn$_invoke$arity$7 ? fexpr__25017.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25017.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25007 = (function (){var width = (function (){var fexpr__25023 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25021,G__25020){
var G__25024 = (G__25021 * 0.5);
return (G__25020.cljs$core$IFn$_invoke$arity$1 ? G__25020.cljs$core$IFn$_invoke$arity$1(G__25024) : G__25020.call(null,G__25024));
});})(G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25023.cljs$core$IFn$_invoke$arity$2 ? fexpr__25023.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25023.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25028 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25026,G__25025){
var G__25029 = (G__25026 / (12));
return (G__25025.cljs$core$IFn$_invoke$arity$1 ? G__25025.cljs$core$IFn$_invoke$arity$1(G__25029) : G__25025.call(null,G__25029));
});})(width,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25028.cljs$core$IFn$_invoke$arity$2 ? fexpr__25028.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25028.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25032 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25031,G__25030){
return (G__25030 + (G__25031 * -0.5));
});})(width,height,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25032.cljs$core$IFn$_invoke$arity$2 ? fexpr__25032.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25032.call(null,width,radius));
})();
var top = (function (){var fexpr__25035 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25034,G__25033){
return (G__25033 + (G__25034 * -0.5));
});})(width,height,left,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25035.cljs$core$IFn$_invoke$arity$2 ? fexpr__25035.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25035.call(null,height,radius));
})();
var offset = (function (){var fexpr__25037 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25036){
return (G__25036 * (2));
});})(width,height,left,top,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25037.cljs$core$IFn$_invoke$arity$1 ? fexpr__25037.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25037.call(null,height));
})();
var color = (function (){var fexpr__25041 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25038,G__25039){
var G__25042 = (G__25039.cljs$core$IFn$_invoke$arity$0 ? G__25039.cljs$core$IFn$_invoke$arity$0() : G__25039.call(null));
return (G__25038.cljs$core$IFn$_invoke$arity$1 ? G__25038.cljs$core$IFn$_invoke$arity$1(G__25042) : G__25038.call(null,G__25042));
});})(width,height,left,top,offset,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25041.cljs$core$IFn$_invoke$arity$2 ? fexpr__25041.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25041.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25049 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25045,G__25046,G__25043,G__25047,G__25044,G__25048){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25044) : G__25043.call(null,G__25044)),cljs.core.cst$kw$height,(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25045) : G__25043.call(null,G__25045)),cljs.core.cst$kw$left,(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25046) : G__25043.call(null,G__25046)),cljs.core.cst$kw$background_DASH_color,G__25047,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25048),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25048),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25049.cljs$core$IFn$_invoke$arity$6 ? fexpr__25049.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25049.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25050 = cljs.core.cst$kw$css;
var G__25051 = (function (){var fexpr__25062 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25050,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25053,G__25054,G__25056,G__25055,G__25052,G__25057){
var G__25063 = G__25053;
var G__25064 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25066 = (G__25055 - G__25056);
return (G__25054.cljs$core$IFn$_invoke$arity$1 ? G__25054.cljs$core$IFn$_invoke$arity$1(G__25066) : G__25054.call(null,G__25066));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25057)?G__25056:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25057)?"45deg":"0deg")),") "].join('')], null);
var G__25065 = (cljs.core.truth_(G__25057)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25052.cljs$core$IFn$_invoke$arity$3 ? G__25052.cljs$core$IFn$_invoke$arity$3(G__25063,G__25064,G__25065) : G__25052.call(null,G__25063,G__25064,G__25065));
});})(G__25050,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25062.cljs$core$IFn$_invoke$arity$6 ? fexpr__25062.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25062.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25050,G__25051) : hoplon.core.div.call(null,G__25050,G__25051));
})(),(function (){var G__25067 = cljs.core.cst$kw$css;
var G__25068 = (function (){var fexpr__25076 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25067,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25070,G__25071,G__25072,G__25069,G__25073){
var G__25077 = G__25070;
var G__25078 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25071.cljs$core$IFn$_invoke$arity$1 ? G__25071.cljs$core$IFn$_invoke$arity$1(G__25072) : G__25071.call(null,G__25072)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25073)?(0):(1))),")"].join('')], null);
return (G__25069.cljs$core$IFn$_invoke$arity$2 ? G__25069.cljs$core$IFn$_invoke$arity$2(G__25077,G__25078) : G__25069.call(null,G__25077,G__25078));
});})(G__25067,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25076.cljs$core$IFn$_invoke$arity$5 ? fexpr__25076.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25076.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25067,G__25068) : hoplon.core.div.call(null,G__25067,G__25068));
})(),(function (){var G__25079 = cljs.core.cst$kw$css;
var G__25080 = (function (){var fexpr__25092 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25079,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25085,G__25082,G__25083,G__25087,G__25084,G__25081,G__25086){
var G__25093 = G__25082;
var G__25094 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25096 = (G__25084 + ((2) * G__25085));
return (G__25083.cljs$core$IFn$_invoke$arity$1 ? G__25083.cljs$core$IFn$_invoke$arity$1(G__25096) : G__25083.call(null,G__25096));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25086)?G__25087:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25086)?"-45deg":"0deg")),") "].join('')], null);
var G__25095 = (cljs.core.truth_(G__25086)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25081.cljs$core$IFn$_invoke$arity$3 ? G__25081.cljs$core$IFn$_invoke$arity$3(G__25093,G__25094,G__25095) : G__25081.call(null,G__25093,G__25094,G__25095));
});})(G__25079,width,height,left,top,offset,color,default_css,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25092.cljs$core$IFn$_invoke$arity$7 ? fexpr__25092.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25092.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25079,G__25080) : hoplon.core.div.call(null,G__25079,G__25080));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,G__25007) : hoplon.core.div.call(null,G__24999,G__25000,G__25001,G__25002,G__25003,G__25004,G__25005,G__25006,G__25007));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25099 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25097,G__25098){
return (G__25097 / ((1) + G__25098));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25099.cljs$core$IFn$_invoke$arity$2 ? fexpr__25099.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25099.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25102 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25101,G__25100){
return (G__25100 * G__25101);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25102.cljs$core$IFn$_invoke$arity$2 ? fexpr__25102.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25102.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25105 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25104,G__25103){
return (((2) * Math.PI) / (G__25103.cljs$core$IFn$_invoke$arity$1 ? G__25103.cljs$core$IFn$_invoke$arity$1(G__25104) : G__25103.call(null,G__25104)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25105.cljs$core$IFn$_invoke$arity$2 ? fexpr__25105.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25105.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25115 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25110,G__25106,G__25108,G__25107,G__25109){
var G__25116 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25118 = G__25108;
var G__25119 = (i * G__25109);
return (G__25107.cljs$core$IFn$_invoke$arity$2 ? G__25107.cljs$core$IFn$_invoke$arity$2(G__25118,G__25119) : G__25107.call(null,G__25118,G__25119));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25117 = G__25110;
return (G__25106.cljs$core$IFn$_invoke$arity$2 ? G__25106.cljs$core$IFn$_invoke$arity$2(G__25116,G__25117) : G__25106.call(null,G__25116,G__25117));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25115.cljs$core$IFn$_invoke$arity$5 ? fexpr__25115.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25115.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25123 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25122,G__25120,G__25121){
return (G__25120 / (G__25121.cljs$core$IFn$_invoke$arity$1 ? G__25121.cljs$core$IFn$_invoke$arity$1(G__25122) : G__25121.call(null,G__25122)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25123.cljs$core$IFn$_invoke$arity$3 ? fexpr__25123.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25123.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25124 = cljs.core.cst$kw$css;
var G__25125 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25126 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25124,G__25125,G__25126) : hoplon.core.div.call(null,G__25124,G__25125,G__25126));
})(),(function (){var G__25127 = cljs.core.cst$kw$css;
var G__25128 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25129 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18522__auto__){
var vec__25142 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25152 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25153){
var vec__25154 = p__25153;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25154,(0),null);
var vec__25157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25154,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25154,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25152.cljs$core$IFn$_invoke$arity$1 ? fexpr__25152.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25152.call(null,item__18522__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25142,(3),null);
var transition_delay = (function (){var fexpr__25163 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25162,G__25161,G__25160){
if(cljs.core.truth_(G__25160)){
return (G__25161 * G__25162);
} else {
return (0);
}
});})(vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25163.cljs$core$IFn$_invoke$arity$3 ? fexpr__25163.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25163.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25165 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25164){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25164);
});})(transition_delay,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25165.cljs$core$IFn$_invoke$arity$1 ? fexpr__25165.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25165.call(null,item));
})();
var text = (function (){var fexpr__25167 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25166){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25166);
});})(transition_delay,url,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25167.cljs$core$IFn$_invoke$arity$1 ? fexpr__25167.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25167.call(null,item));
})();
var handler = (function (){var fexpr__25169 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25168){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25168);
});})(transition_delay,url,text,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25169.cljs$core$IFn$_invoke$arity$1 ? fexpr__25169.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25169.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25172 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25170,G__25171){
var and__8230__auto__ = G__25170;
if(cljs.core.truth_(and__8230__auto__)){
return G__25171;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25172.cljs$core$IFn$_invoke$arity$2 ? fexpr__25172.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25172.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25173 = cljs.core.cst$kw$css;
var G__25174 = (function (){var fexpr__25185 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25173,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25181,G__25178,G__25182,G__25179,G__25176,G__25177,G__25180){
var G__25186 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25177),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25178)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25179),"s"].join('')], null);
var G__25187 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25180)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25181),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25182),"px)"].join(''):"translate(0, 0)")], null);
return (G__25176.cljs$core$IFn$_invoke$arity$2 ? G__25176.cljs$core$IFn$_invoke$arity$2(G__25186,G__25187) : G__25176.call(null,G__25186,G__25187));
});})(G__25173,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25185.cljs$core$IFn$_invoke$arity$7 ? fexpr__25185.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25185.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25175 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25190 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25188,G__25189){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25188)?"black":G__25189),cljs.core.cst$kw$display,"inline"], null);
});})(G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25190.cljs$core$IFn$_invoke$arity$2 ? fexpr__25190.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25190.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25191 = cljs.core.cst$kw$mouseenter;
var G__25192 = ((function (G__25191,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25191,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25193 = cljs.core.cst$kw$mouseleave;
var G__25194 = ((function (G__25191,G__25192,G__25193,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25191,G__25192,G__25193,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25195 = cljs.core.cst$kw$click;
var G__25196 = ((function (G__25191,G__25192,G__25193,G__25194,G__25195,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25191,G__25192,G__25193,G__25194,G__25195,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25191,G__25192,G__25193,G__25194,G__25195,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25191,G__25192,G__25193,G__25194,G__25195,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25197 = cljs.core.cst$kw$css;
var G__25198 = (function (){var fexpr__25210 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25206,G__25204,G__25203,G__25202,G__25201,G__25205,G__25207){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25201)?G__25202:(1))),")"].join(''),(function (){var G__25211 = (- G__25204);
return (G__25203.cljs$core$IFn$_invoke$arity$1 ? G__25203.cljs$core$IFn$_invoke$arity$1(G__25211) : G__25203.call(null,G__25211));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25205 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25206)].join(''),"hidden","white",((2) * G__25204),"pointer",(cljs.core.truth_(G__25207)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25207),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25203.cljs$core$IFn$_invoke$arity$1 ? G__25203.cljs$core$IFn$_invoke$arity$1(G__25204) : G__25203.call(null,G__25204)),"contain",((2) * G__25204),(function (){var G__25212 = (- G__25204);
return (G__25203.cljs$core$IFn$_invoke$arity$1 ? G__25203.cljs$core$IFn$_invoke$arity$1(G__25212) : G__25203.call(null,G__25212));
})()]);
});})(G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25210.cljs$core$IFn$_invoke$arity$7 ? fexpr__25210.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25210.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25199 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25213 = cljs.core.cst$kw$css;
var G__25214 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25215 = (function (){var G__25216 = (function (){var G__25217 = cljs.core.cst$kw$valign;
var G__25218 = "center";
var G__25219 = cljs.core.cst$kw$css;
var G__25220 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25221 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25217,G__25218,G__25219,G__25220,G__25221) : hoplon.core.td.call(null,G__25217,G__25218,G__25219,G__25220,G__25221));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25216) : hoplon.core.tr.call(null,G__25216));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25213,G__25214,G__25215) : hoplon.core.table.call(null,G__25213,G__25214,G__25215));
});})(G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (con__18532__auto__,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18532__auto__,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18534__auto__ = ((function (con__18532__auto__,alt__18533__auto__,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18532__auto__,alt__18533__auto__,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25222 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25222.cljs$core$IFn$_invoke$arity$1 ? fexpr__25222.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25222.call(null,text));
})();
var G__25200 = (function (){var G__25223 = cljs.core.cst$kw$css;
var G__25224 = (function (){var fexpr__25229 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25223,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25226,G__25227,G__25225,G__25228){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25225),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25226)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25227),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25228)?(0):(1))], null);
});})(G__25223,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25173,G__25174,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25142,x,i,y,item,G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25229.cljs$core$IFn$_invoke$arity$4 ? fexpr__25229.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25229.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25223,G__25224) : hoplon.core.div.call(null,G__25223,G__25224));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200) : hoplon.core.div.call(null,G__25191,G__25192,G__25193,G__25194,G__25195,G__25196,G__25197,G__25198,G__25199,G__25200));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25173,G__25174,G__25175) : hoplon.core.div.call(null,G__25173,G__25174,G__25175));
});})(G__25127,G__25128,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25127,G__25128,G__25129) : hoplon.core.div.call(null,G__25127,G__25128,G__25129));
})()], 0));
});
