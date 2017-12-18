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
var args__9524__auto__ = [];
var len__9517__auto___25039 = arguments.length;
var i__9518__auto___25040 = (0);
while(true){
if((i__9518__auto___25040 < len__9517__auto___25039)){
args__9524__auto__.push((arguments[i__9518__auto___25040]));

var G__25041 = (i__9518__auto___25040 + (1));
i__9518__auto___25040 = G__25041;
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
var G__25027 = cljs.core.cst$kw$css;
var G__25028 = (function (){var fexpr__25038 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25027,transition_length__$1){
return (function (G__25033,G__25034,G__25030,G__25037,G__25031,G__25035,G__25032,G__25036){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25030.cljs$core$IFn$_invoke$arity$1 ? G__25030.cljs$core$IFn$_invoke$arity$1(G__25031) : G__25030.call(null,G__25031)),cljs.core.cst$kw$bottom,(G__25030.cljs$core$IFn$_invoke$arity$1 ? G__25030.cljs$core$IFn$_invoke$arity$1(G__25031) : G__25030.call(null,G__25031)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25032),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25033)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25034;
if(cljs.core.truth_(and__8228__auto__)){
return (G__25035.cljs$core$IFn$_invoke$arity$1 ? G__25035.cljs$core$IFn$_invoke$arity$1(G__25036) : G__25035.call(null,G__25036));
} else {
return and__8228__auto__;
}
})())?G__25037:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25027,transition_length__$1))
);
return (fexpr__25038.cljs$core$IFn$_invoke$arity$8 ? fexpr__25038.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25038.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25029 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25027,G__25028,G__25029) : hoplon.core.div.call(null,G__25027,G__25028,G__25029));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

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
} else {
return and__8228__auto__;
}
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
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
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
} else {
return and__8228__auto__;
}
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
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
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
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
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
})()], 0));
});
