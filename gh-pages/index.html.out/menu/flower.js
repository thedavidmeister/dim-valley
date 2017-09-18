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
var args__9922__auto__ = [];
var len__9915__auto___25236 = arguments.length;
var i__9916__auto___25237 = (0);
while(true){
if((i__9916__auto___25237 < len__9915__auto___25236)){
args__9922__auto__.push((arguments[i__9916__auto___25237]));

var G__25238 = (i__9916__auto___25237 + (1));
i__9916__auto___25237 = G__25238;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((4) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9923__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
var G__25224 = cljs.core.cst$kw$css;
var G__25225 = (function (){var fexpr__25235 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25224,transition_length__$1){
return (function (G__25230,G__25231,G__25227,G__25234,G__25228,G__25232,G__25229,G__25233){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25227.cljs$core$IFn$_invoke$arity$1 ? G__25227.cljs$core$IFn$_invoke$arity$1(G__25228) : G__25227.call(null,G__25228)),cljs.core.cst$kw$bottom,(G__25227.cljs$core$IFn$_invoke$arity$1 ? G__25227.cljs$core$IFn$_invoke$arity$1(G__25228) : G__25227.call(null,G__25228)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25229),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25230)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8626__auto__ = G__25231;
if(cljs.core.truth_(and__8626__auto__)){
return (G__25232.cljs$core$IFn$_invoke$arity$1 ? G__25232.cljs$core$IFn$_invoke$arity$1(G__25233) : G__25232.call(null,G__25233));
} else {
return and__8626__auto__;
}
})())?G__25234:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25224,transition_length__$1))
);
return (fexpr__25235.cljs$core$IFn$_invoke$arity$8 ? fexpr__25235.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25235.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25226 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25224,G__25225,G__25226) : hoplon.core.div.call(null,G__25224,G__25225,G__25226));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25219){
var G__25220 = cljs.core.first(seq25219);
var seq25219__$1 = cljs.core.next(seq25219);
var G__25221 = cljs.core.first(seq25219__$1);
var seq25219__$2 = cljs.core.next(seq25219__$1);
var G__25222 = cljs.core.first(seq25219__$2);
var seq25219__$3 = cljs.core.next(seq25219__$2);
var G__25223 = cljs.core.first(seq25219__$3);
var seq25219__$4 = cljs.core.next(seq25219__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25220,G__25221,G__25222,G__25223,seq25219__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__8638__auto__ = open_QMARK_;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__8638__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
var G__25239 = cljs.core.cst$kw$click;
var G__25240 = ((function (G__25239,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25239,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25241 = cljs.core.cst$kw$mouseenter;
var G__25242 = ((function (G__25239,G__25240,G__25241,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25239,G__25240,G__25241,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25243 = cljs.core.cst$kw$mouseleave;
var G__25244 = ((function (G__25239,G__25240,G__25241,G__25242,G__25243,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25239,G__25240,G__25241,G__25242,G__25243,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25245 = cljs.core.cst$kw$css;
var G__25246 = (function (){var fexpr__25257 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25249,G__25254,G__25251,G__25250,G__25252,G__25253,G__25248){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8626__auto__ = G__25248;
if(cljs.core.truth_(and__8626__auto__)){
return G__25249;
} else {
return and__8626__auto__;
}
})())?G__25250:(1))),")"].join(''),(function (){var G__25258 = (- G__25252);
return (G__25251.cljs$core$IFn$_invoke$arity$1 ? G__25251.cljs$core$IFn$_invoke$arity$1(G__25258) : G__25251.call(null,G__25258));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25253),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25254)].join(''),(G__25252 * (2)),"pointer",(1),"absolute",(G__25251.cljs$core$IFn$_invoke$arity$1 ? G__25251.cljs$core$IFn$_invoke$arity$1(G__25252) : G__25251.call(null,G__25252)),(G__25252 * (2)),(function (){var G__25259 = (- G__25252);
return (G__25251.cljs$core$IFn$_invoke$arity$1 ? G__25251.cljs$core$IFn$_invoke$arity$1(G__25259) : G__25251.call(null,G__25259));
})()]);
});})(G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25257.cljs$core$IFn$_invoke$arity$7 ? fexpr__25257.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25257.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25247 = (function (){var width = (function (){var fexpr__25261 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25260){
return (G__25260 / (2));
});})(G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25261.cljs$core$IFn$_invoke$arity$1 ? fexpr__25261.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25261.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__25264 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25263,G__25262){
return ((G__25262 * Math.sin((G__25263.cljs$core$IFn$_invoke$arity$1 ? G__25263.cljs$core$IFn$_invoke$arity$1((45)) : G__25263.call(null,(45))))) / (2));
});})(width,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25264.cljs$core$IFn$_invoke$arity$2 ? fexpr__25264.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25264.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__25266 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25265){
return (G__25265 / (12));
});})(width,rotated_offset,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25266.cljs$core$IFn$_invoke$arity$1 ? fexpr__25266.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__25266.call(null,radius));
})();
var left = (function (){var fexpr__25269 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25268,G__25267){
return (G__25267 + (- (G__25268 / (2))));
});})(width,rotated_offset,height,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25269.cljs$core$IFn$_invoke$arity$2 ? fexpr__25269.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25269.call(null,width,radius));
})();
var top = (function (){var fexpr__25272 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25271,G__25270){
return (G__25270 + (- (G__25271 / (2))));
});})(width,rotated_offset,height,left,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25272.cljs$core$IFn$_invoke$arity$2 ? fexpr__25272.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25272.call(null,height,radius));
})();
var color = (function (){var fexpr__25276 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25273,G__25274){
var G__25277 = (G__25274.cljs$core$IFn$_invoke$arity$0 ? G__25274.cljs$core$IFn$_invoke$arity$0() : G__25274.call(null));
return (G__25273.cljs$core$IFn$_invoke$arity$1 ? G__25273.cljs$core$IFn$_invoke$arity$1(G__25277) : G__25273.call(null,G__25277));
});})(width,rotated_offset,height,left,top,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25276.cljs$core$IFn$_invoke$arity$2 ? fexpr__25276.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25276.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25284 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25280,G__25281,G__25278,G__25282,G__25279,G__25283){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25278.cljs$core$IFn$_invoke$arity$1 ? G__25278.cljs$core$IFn$_invoke$arity$1(G__25279) : G__25278.call(null,G__25279)),cljs.core.cst$kw$height,(G__25278.cljs$core$IFn$_invoke$arity$1 ? G__25278.cljs$core$IFn$_invoke$arity$1(G__25280) : G__25278.call(null,G__25280)),cljs.core.cst$kw$left,(G__25278.cljs$core$IFn$_invoke$arity$1 ? G__25278.cljs$core$IFn$_invoke$arity$1(G__25281) : G__25278.call(null,G__25281)),cljs.core.cst$kw$background_DASH_color,G__25282,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25283),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25283),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25284.cljs$core$IFn$_invoke$arity$6 ? fexpr__25284.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25284.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25285 = cljs.core.cst$kw$css;
var G__25286 = (function (){var fexpr__25298 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25285,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25293,G__25291,G__25288,G__25289,G__25290,G__25287,G__25292){
var G__25299 = G__25288;
var G__25300 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25302 = (G__25290 - ((2) * G__25291));
return (G__25289.cljs$core$IFn$_invoke$arity$1 ? G__25289.cljs$core$IFn$_invoke$arity$1(G__25302) : G__25289.call(null,G__25302));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25292)?G__25293:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25292)?"45deg":"0deg")),") "].join('')], null);
var G__25301 = (cljs.core.truth_(G__25292)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25287.cljs$core$IFn$_invoke$arity$3 ? G__25287.cljs$core$IFn$_invoke$arity$3(G__25299,G__25300,G__25301) : G__25287.call(null,G__25299,G__25300,G__25301));
});})(G__25285,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25298.cljs$core$IFn$_invoke$arity$7 ? fexpr__25298.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25298.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25285,G__25286) : hoplon.core.div.call(null,G__25285,G__25286));
})(),(function (){var G__25303 = cljs.core.cst$kw$css;
var G__25304 = (function (){var fexpr__25312 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25303,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25306,G__25307,G__25308,G__25305,G__25309){
var G__25313 = G__25306;
var G__25314 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25307.cljs$core$IFn$_invoke$arity$1 ? G__25307.cljs$core$IFn$_invoke$arity$1(G__25308) : G__25307.call(null,G__25308)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25309)?(0):(1))),")"].join('')], null);
return (G__25305.cljs$core$IFn$_invoke$arity$2 ? G__25305.cljs$core$IFn$_invoke$arity$2(G__25313,G__25314) : G__25305.call(null,G__25313,G__25314));
});})(G__25303,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25312.cljs$core$IFn$_invoke$arity$5 ? fexpr__25312.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25312.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25303,G__25304) : hoplon.core.div.call(null,G__25303,G__25304));
})(),(function (){var G__25315 = cljs.core.cst$kw$css;
var G__25316 = (function (){var fexpr__25328 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25315,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25323,G__25321,G__25318,G__25319,G__25320,G__25317,G__25322){
var G__25329 = G__25318;
var G__25330 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25332 = (G__25320 + ((2) * G__25321));
return (G__25319.cljs$core$IFn$_invoke$arity$1 ? G__25319.cljs$core$IFn$_invoke$arity$1(G__25332) : G__25319.call(null,G__25332));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25322)?G__25323:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25322)?"-45deg":"0deg")),") "].join('')], null);
var G__25331 = (cljs.core.truth_(G__25322)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25317.cljs$core$IFn$_invoke$arity$3 ? G__25317.cljs$core$IFn$_invoke$arity$3(G__25329,G__25330,G__25331) : G__25317.call(null,G__25329,G__25330,G__25331));
});})(G__25315,width,rotated_offset,height,left,top,color,default_css,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25328.cljs$core$IFn$_invoke$arity$7 ? fexpr__25328.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25328.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25315,G__25316) : hoplon.core.div.call(null,G__25315,G__25316));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,G__25247) : hoplon.core.div.call(null,G__25239,G__25240,G__25241,G__25242,G__25243,G__25244,G__25245,G__25246,G__25247));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25335 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25333,G__25334){
return (G__25333 / ((1) + G__25334));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25335.cljs$core$IFn$_invoke$arity$2 ? fexpr__25335.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25335.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25338 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25337,G__25336){
return (G__25336 * G__25337);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25338.cljs$core$IFn$_invoke$arity$2 ? fexpr__25338.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25338.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25341 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25340,G__25339){
return (((2) * Math.PI) / (G__25339.cljs$core$IFn$_invoke$arity$1 ? G__25339.cljs$core$IFn$_invoke$arity$1(G__25340) : G__25339.call(null,G__25340)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25341.cljs$core$IFn$_invoke$arity$2 ? fexpr__25341.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25341.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25351 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25346,G__25342,G__25344,G__25343,G__25345){
var G__25352 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25354 = G__25344;
var G__25355 = (i * G__25345);
return (G__25343.cljs$core$IFn$_invoke$arity$2 ? G__25343.cljs$core$IFn$_invoke$arity$2(G__25354,G__25355) : G__25343.call(null,G__25354,G__25355));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25353 = G__25346;
return (G__25342.cljs$core$IFn$_invoke$arity$2 ? G__25342.cljs$core$IFn$_invoke$arity$2(G__25352,G__25353) : G__25342.call(null,G__25352,G__25353));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25351.cljs$core$IFn$_invoke$arity$5 ? fexpr__25351.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25351.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25359 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25358,G__25356,G__25357){
return (G__25356 / (G__25357.cljs$core$IFn$_invoke$arity$1 ? G__25357.cljs$core$IFn$_invoke$arity$1(G__25358) : G__25357.call(null,G__25358)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25359.cljs$core$IFn$_invoke$arity$3 ? fexpr__25359.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25359.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25360 = cljs.core.cst$kw$css;
var G__25361 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25362 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25360,G__25361,G__25362) : hoplon.core.div.call(null,G__25360,G__25361,G__25362));
})(),(function (){var G__25363 = cljs.core.cst$kw$css;
var G__25364 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25365 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18913__auto__){
var vec__25378 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25388 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25389){
var vec__25390 = p__25389;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(0),null);
var vec__25393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25393,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25393,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25388.cljs$core$IFn$_invoke$arity$1 ? fexpr__25388.cljs$core$IFn$_invoke$arity$1(item__18913__auto__) : fexpr__25388.call(null,item__18913__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25378,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25378,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25378,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25378,(3),null);
var transition_delay = (function (){var fexpr__25399 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25398,G__25397,G__25396){
if(cljs.core.truth_(G__25396)){
return (G__25397 * G__25398);
} else {
return (0);
}
});})(vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25399.cljs$core$IFn$_invoke$arity$3 ? fexpr__25399.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25399.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25401 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25400){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25400);
});})(transition_delay,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25401.cljs$core$IFn$_invoke$arity$1 ? fexpr__25401.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25401.call(null,item));
})();
var text = (function (){var fexpr__25403 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25402){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25402);
});})(transition_delay,url,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25403.cljs$core$IFn$_invoke$arity$1 ? fexpr__25403.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25403.call(null,item));
})();
var handler = (function (){var fexpr__25405 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25404){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25404);
});})(transition_delay,url,text,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25405.cljs$core$IFn$_invoke$arity$1 ? fexpr__25405.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25405.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25408 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25406,G__25407){
var and__8626__auto__ = G__25406;
if(cljs.core.truth_(and__8626__auto__)){
return G__25407;
} else {
return and__8626__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25408.cljs$core$IFn$_invoke$arity$2 ? fexpr__25408.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25408.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25409 = cljs.core.cst$kw$css;
var G__25410 = (function (){var fexpr__25421 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25409,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25417,G__25414,G__25418,G__25415,G__25412,G__25413,G__25416){
var G__25422 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25413),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25414)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25415),"s"].join('')], null);
var G__25423 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25416)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25417),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25418),"px)"].join(''):"translate(0, 0)")], null);
return (G__25412.cljs$core$IFn$_invoke$arity$2 ? G__25412.cljs$core$IFn$_invoke$arity$2(G__25422,G__25423) : G__25412.call(null,G__25422,G__25423));
});})(G__25409,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25421.cljs$core$IFn$_invoke$arity$7 ? fexpr__25421.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25421.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25411 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25426 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25424,G__25425){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25424)?"black":G__25425)], null);
});})(G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25426.cljs$core$IFn$_invoke$arity$2 ? fexpr__25426.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25426.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25427 = cljs.core.cst$kw$mouseenter;
var G__25428 = ((function (G__25427,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25427,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25429 = cljs.core.cst$kw$mouseleave;
var G__25430 = ((function (G__25427,G__25428,G__25429,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25427,G__25428,G__25429,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25431 = cljs.core.cst$kw$click;
var G__25432 = ((function (G__25427,G__25428,G__25429,G__25430,G__25431,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25427,G__25428,G__25429,G__25430,G__25431,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25427,G__25428,G__25429,G__25430,G__25431,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25427,G__25428,G__25429,G__25430,G__25431,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25433 = cljs.core.cst$kw$css;
var G__25434 = (function (){var fexpr__25446 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25442,G__25440,G__25439,G__25438,G__25437,G__25441,G__25443){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25437)?G__25438:(1))),")"].join(''),(function (){var G__25447 = (- G__25440);
return (G__25439.cljs$core$IFn$_invoke$arity$1 ? G__25439.cljs$core$IFn$_invoke$arity$1(G__25447) : G__25439.call(null,G__25447));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25441 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25442)].join(''),"hidden","white",((2) * G__25440),"pointer",(cljs.core.truth_(G__25443)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25443),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25439.cljs$core$IFn$_invoke$arity$1 ? G__25439.cljs$core$IFn$_invoke$arity$1(G__25440) : G__25439.call(null,G__25440)),"contain",((2) * G__25440),(function (){var G__25448 = (- G__25440);
return (G__25439.cljs$core$IFn$_invoke$arity$1 ? G__25439.cljs$core$IFn$_invoke$arity$1(G__25448) : G__25439.call(null,G__25448));
})()]);
});})(G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25446.cljs$core$IFn$_invoke$arity$7 ? fexpr__25446.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25446.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25435 = (function (){var con__18923__auto__ = (new cljs.core.Delay(((function (G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25449 = cljs.core.cst$kw$css;
var G__25450 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25451 = (function (){var G__25452 = (function (){var G__25453 = cljs.core.cst$kw$valign;
var G__25454 = "center";
var G__25455 = cljs.core.cst$kw$css;
var G__25456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25457 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25453,G__25454,G__25455,G__25456,G__25457) : hoplon.core.td.call(null,G__25453,G__25454,G__25455,G__25456,G__25457));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25452) : hoplon.core.tr.call(null,G__25452));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25449,G__25450,G__25451) : hoplon.core.table.call(null,G__25449,G__25450,G__25451));
});})(G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18924__auto__ = (new cljs.core.Delay(((function (con__18923__auto__,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18923__auto__,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18925__auto__ = ((function (con__18923__auto__,alt__18924__auto__,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18926__auto__){
return cljs.core.deref((function (){var or__8638__auto__ = (cljs.core.truth_(p__18926__auto__)?con__18923__auto__:alt__18924__auto__);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18923__auto__,alt__18924__auto__,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25458 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18925__auto__);
return (fexpr__25458.cljs$core$IFn$_invoke$arity$1 ? fexpr__25458.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25458.call(null,text));
})();
var G__25436 = (function (){var G__25459 = cljs.core.cst$kw$css;
var G__25460 = (function (){var fexpr__25465 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25459,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25435,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25462,G__25463,G__25461,G__25464){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25461),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25462)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25463),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25464)?(0):(1))], null);
});})(G__25459,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25435,G__25409,G__25410,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25378,x,i,y,item,G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25465.cljs$core$IFn$_invoke$arity$4 ? fexpr__25465.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25465.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25459,G__25460) : hoplon.core.div.call(null,G__25459,G__25460));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25435,G__25436) : hoplon.core.div.call(null,G__25427,G__25428,G__25429,G__25430,G__25431,G__25432,G__25433,G__25434,G__25435,G__25436));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25409,G__25410,G__25411) : hoplon.core.div.call(null,G__25409,G__25410,G__25411));
});})(G__25363,G__25364,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25363,G__25364,G__25365) : hoplon.core.div.call(null,G__25363,G__25364,G__25365));
})()], 0));
});
