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
var len__8981__auto___24012 = arguments.length;
var i__8982__auto___24013 = (0);
while(true){
if((i__8982__auto___24013 < len__8981__auto___24012)){
args__8988__auto__.push((arguments[i__8982__auto___24013]));

var G__24014 = (i__8982__auto___24013 + (1));
i__8982__auto___24013 = G__24014;
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
var G__24001 = cljs.core.cst$kw$css;
var G__24002 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24001,transition_length__$1){
return (function (G__24007,G__24008,G__24004,G__24011,G__24005,G__24009,G__24006,G__24010){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24004.cljs$core$IFn$_invoke$arity$1 ? G__24004.cljs$core$IFn$_invoke$arity$1(G__24005) : G__24004.call(null,G__24005)),cljs.core.cst$kw$bottom,(G__24004.cljs$core$IFn$_invoke$arity$1 ? G__24004.cljs$core$IFn$_invoke$arity$1(G__24005) : G__24004.call(null,G__24005)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24006),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24007)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24008;
if(cljs.core.truth_(and__7748__auto__)){
return (G__24009.cljs$core$IFn$_invoke$arity$1 ? G__24009.cljs$core$IFn$_invoke$arity$1(G__24010) : G__24009.call(null,G__24010));
} else {
return and__7748__auto__;
}
})())?G__24011:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24001,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__24003 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24001,G__24002,G__24003) : hoplon.core.div.call(null,G__24001,G__24002,G__24003));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23996){
var G__23997 = cljs.core.first(seq23996);
var seq23996__$1 = cljs.core.next(seq23996);
var G__23998 = cljs.core.first(seq23996__$1);
var seq23996__$2 = cljs.core.next(seq23996__$1);
var G__23999 = cljs.core.first(seq23996__$2);
var seq23996__$3 = cljs.core.next(seq23996__$2);
var G__24000 = cljs.core.first(seq23996__$3);
var seq23996__$4 = cljs.core.next(seq23996__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23997,G__23998,G__23999,G__24000,seq23996__$4);
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
var G__24085 = cljs.core.cst$kw$click;
var G__24086 = ((function (G__24085,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24085,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24087 = cljs.core.cst$kw$mouseenter;
var G__24088 = ((function (G__24085,G__24086,G__24087,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__24085,G__24086,G__24087,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24089 = cljs.core.cst$kw$mouseleave;
var G__24090 = ((function (G__24085,G__24086,G__24087,G__24088,G__24089,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__24085,G__24086,G__24087,G__24088,G__24089,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24091 = cljs.core.cst$kw$css;
var G__24092 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24095,G__24100,G__24097,G__24096,G__24098,G__24099,G__24094){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24094;
if(cljs.core.truth_(and__7748__auto__)){
return G__24095;
} else {
return and__7748__auto__;
}
})())?G__24096:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24101 = (- G__24098);
return (G__24097.cljs$core$IFn$_invoke$arity$1 ? G__24097.cljs$core$IFn$_invoke$arity$1(G__24101) : G__24097.call(null,G__24101));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24099),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24100)].join(''),(G__24098 * (2)),"pointer",(1),"absolute",(G__24097.cljs$core$IFn$_invoke$arity$1 ? G__24097.cljs$core$IFn$_invoke$arity$1(G__24098) : G__24097.call(null,G__24098)),(G__24098 * (2)),(function (){var G__24102 = (- G__24098);
return (G__24097.cljs$core$IFn$_invoke$arity$1 ? G__24097.cljs$core$IFn$_invoke$arity$1(G__24102) : G__24097.call(null,G__24102));
})()]);
});})(G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__24093 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24103){
return (G__24103 / (2));
});})(G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24105,G__24104){
return ((G__24104 * Math.sin((G__24105.cljs$core$IFn$_invoke$arity$1 ? G__24105.cljs$core$IFn$_invoke$arity$1((45)) : G__24105.call(null,(45))))) / (2));
});})(width,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24106){
return (G__24106 / (12));
});})(width,rotated_offset,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24108,G__24107){
return (G__24107 + (- (G__24108 / (2))));
});})(width,rotated_offset,height,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24110,G__24109){
return (G__24109 + (- (G__24110 / (2))));
});})(width,rotated_offset,height,left,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24111,G__24112){
var G__24113 = (G__24112.cljs$core$IFn$_invoke$arity$0 ? G__24112.cljs$core$IFn$_invoke$arity$0() : G__24112.call(null));
return (G__24111.cljs$core$IFn$_invoke$arity$1 ? G__24111.cljs$core$IFn$_invoke$arity$1(G__24113) : G__24111.call(null,G__24113));
});})(width,rotated_offset,height,left,top,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24116,G__24117,G__24114,G__24118,G__24115,G__24119){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24114.cljs$core$IFn$_invoke$arity$1 ? G__24114.cljs$core$IFn$_invoke$arity$1(G__24115) : G__24114.call(null,G__24115)),cljs.core.cst$kw$height,(G__24114.cljs$core$IFn$_invoke$arity$1 ? G__24114.cljs$core$IFn$_invoke$arity$1(G__24116) : G__24114.call(null,G__24116)),cljs.core.cst$kw$left,(G__24114.cljs$core$IFn$_invoke$arity$1 ? G__24114.cljs$core$IFn$_invoke$arity$1(G__24117) : G__24114.call(null,G__24117)),cljs.core.cst$kw$background_DASH_color,G__24118,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24119),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24119),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24120 = cljs.core.cst$kw$css;
var G__24121 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24120,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24128,G__24126,G__24123,G__24124,G__24125,G__24122,G__24127){
var G__24129 = G__24123;
var G__24130 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24132 = (G__24125 - ((2) * G__24126));
return (G__24124.cljs$core$IFn$_invoke$arity$1 ? G__24124.cljs$core$IFn$_invoke$arity$1(G__24132) : G__24124.call(null,G__24132));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24127)?G__24128:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24127)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24131 = (cljs.core.truth_(G__24127)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24122.cljs$core$IFn$_invoke$arity$3 ? G__24122.cljs$core$IFn$_invoke$arity$3(G__24129,G__24130,G__24131) : G__24122.call(null,G__24129,G__24130,G__24131));
});})(G__24120,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24120,G__24121) : hoplon.core.div.call(null,G__24120,G__24121));
})(),(function (){var G__24133 = cljs.core.cst$kw$css;
var G__24134 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24133,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24136,G__24137,G__24138,G__24135,G__24139){
var G__24140 = G__24136;
var G__24141 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24137.cljs$core$IFn$_invoke$arity$1 ? G__24137.cljs$core$IFn$_invoke$arity$1(G__24138) : G__24137.call(null,G__24138)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24139)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__24135.cljs$core$IFn$_invoke$arity$2 ? G__24135.cljs$core$IFn$_invoke$arity$2(G__24140,G__24141) : G__24135.call(null,G__24140,G__24141));
});})(G__24133,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24133,G__24134) : hoplon.core.div.call(null,G__24133,G__24134));
})(),(function (){var G__24142 = cljs.core.cst$kw$css;
var G__24143 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24142,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24150,G__24148,G__24145,G__24146,G__24147,G__24144,G__24149){
var G__24151 = G__24145;
var G__24152 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24154 = (G__24147 + ((2) * G__24148));
return (G__24146.cljs$core$IFn$_invoke$arity$1 ? G__24146.cljs$core$IFn$_invoke$arity$1(G__24154) : G__24146.call(null,G__24154));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24149)?G__24150:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24149)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24153 = (cljs.core.truth_(G__24149)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24144.cljs$core$IFn$_invoke$arity$3 ? G__24144.cljs$core$IFn$_invoke$arity$3(G__24151,G__24152,G__24153) : G__24144.call(null,G__24151,G__24152,G__24153));
});})(G__24142,width,rotated_offset,height,left,top,color,default_css,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24142,G__24143) : hoplon.core.div.call(null,G__24142,G__24143));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,G__24093) : hoplon.core.div.call(null,G__24085,G__24086,G__24087,G__24088,G__24089,G__24090,G__24091,G__24092,G__24093));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24258,G__24259){
return (G__24258 / ((1) + G__24259));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24261,G__24260){
return (G__24260 * G__24261);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24263,G__24262){
return (((2) * Math.PI) / (G__24262.cljs$core$IFn$_invoke$arity$1 ? G__24262.cljs$core$IFn$_invoke$arity$1(G__24263) : G__24262.call(null,G__24263)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24268,G__24264,G__24266,G__24265,G__24267){
var G__24269 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24271 = G__24266;
var G__24272 = (i * G__24267);
return (G__24265.cljs$core$IFn$_invoke$arity$2 ? G__24265.cljs$core$IFn$_invoke$arity$2(G__24271,G__24272) : G__24265.call(null,G__24271,G__24272));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24270 = G__24268;
return (G__24264.cljs$core$IFn$_invoke$arity$2 ? G__24264.cljs$core$IFn$_invoke$arity$2(G__24269,G__24270) : G__24264.call(null,G__24269,G__24270));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24275,G__24273,G__24274){
return (G__24273 / (G__24274.cljs$core$IFn$_invoke$arity$1 ? G__24274.cljs$core$IFn$_invoke$arity$1(G__24275) : G__24274.call(null,G__24275)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24276 = cljs.core.cst$kw$css;
var G__24277 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24278 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24276,G__24277,G__24278) : hoplon.core.div.call(null,G__24276,G__24277,G__24278));
})(),(function (){var G__24279 = cljs.core.cst$kw$css;
var G__24280 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24281 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24294 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24297){
var vec__24298 = p__24297;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24298,(0),null);
var vec__24301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24298,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24301,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24298,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24294,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24306,G__24305,G__24304){
if(cljs.core.truth_(G__24304)){
return (G__24305 * G__24306);
} else {
return (0);
}
});})(vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24307){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24307);
});})(transition_delay,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24308){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24308);
});})(transition_delay,url,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24309){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24309);
});})(transition_delay,url,text,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24310,G__24311){
var and__7748__auto__ = G__24310;
if(cljs.core.truth_(and__7748__auto__)){
return G__24311;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24312 = cljs.core.cst$kw$css;
var G__24313 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24312,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24320,G__24317,G__24321,G__24318,G__24315,G__24316,G__24319){
var G__24322 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24316),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24317),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24318),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24323 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24319)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24320),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24321),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24315.cljs$core$IFn$_invoke$arity$2 ? G__24315.cljs$core$IFn$_invoke$arity$2(G__24322,G__24323) : G__24315.call(null,G__24322,G__24323));
});})(G__24312,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24314 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24324,G__24325){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24324)?"black":G__24325)], null);
});})(G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24326 = cljs.core.cst$kw$mouseenter;
var G__24327 = ((function (G__24326,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24326,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24328 = cljs.core.cst$kw$mouseleave;
var G__24329 = ((function (G__24326,G__24327,G__24328,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24326,G__24327,G__24328,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24330 = cljs.core.cst$kw$click;
var G__24331 = ((function (G__24326,G__24327,G__24328,G__24329,G__24330,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24326,G__24327,G__24328,G__24329,G__24330,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24326,G__24327,G__24328,G__24329,G__24330,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24326,G__24327,G__24328,G__24329,G__24330,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24332 = cljs.core.cst$kw$css;
var G__24333 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24341,G__24339,G__24338,G__24337,G__24336,G__24340,G__24342){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24336)?G__24337:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24343 = (- G__24339);
return (G__24338.cljs$core$IFn$_invoke$arity$1 ? G__24338.cljs$core$IFn$_invoke$arity$1(G__24343) : G__24338.call(null,G__24343));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24340 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24341)].join(''),"hidden","white",((2) * G__24339),"pointer",(cljs.core.truth_(G__24342)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24342),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24338.cljs$core$IFn$_invoke$arity$1 ? G__24338.cljs$core$IFn$_invoke$arity$1(G__24339) : G__24338.call(null,G__24339)),"contain",((2) * G__24339),(function (){var G__24344 = (- G__24339);
return (G__24338.cljs$core$IFn$_invoke$arity$1 ? G__24338.cljs$core$IFn$_invoke$arity$1(G__24344) : G__24338.call(null,G__24344));
})()]);
});})(G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24334 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24345 = cljs.core.cst$kw$css;
var G__24346 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24347 = (function (){var G__24348 = (function (){var G__24349 = cljs.core.cst$kw$valign;
var G__24350 = "center";
var G__24351 = cljs.core.cst$kw$css;
var G__24352 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24353 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24349,G__24350,G__24351,G__24352,G__24353) : hoplon.core.td.call(null,G__24349,G__24350,G__24351,G__24352,G__24353));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24348) : hoplon.core.tr.call(null,G__24348));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24345,G__24346,G__24347) : hoplon.core.table.call(null,G__24345,G__24346,G__24347));
});})(G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24354 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24354) : cljs.core.deref.call(null,G__24354));
});})(con__14913__auto__,alt__14914__auto__,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24335 = (function (){var G__24355 = cljs.core.cst$kw$css;
var G__24356 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24355,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24334,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24358,G__24359,G__24357,G__24360){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24357),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24358),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24359),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24360)?(0):(1))], null);
});})(G__24355,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24334,G__24312,G__24313,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24294,x,i,y,item,G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24355,G__24356) : hoplon.core.div.call(null,G__24355,G__24356));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24334,G__24335) : hoplon.core.div.call(null,G__24326,G__24327,G__24328,G__24329,G__24330,G__24331,G__24332,G__24333,G__24334,G__24335));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24312,G__24313,G__24314) : hoplon.core.div.call(null,G__24312,G__24313,G__24314));
});})(G__24279,G__24280,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24279,G__24280,G__24281) : hoplon.core.div.call(null,G__24279,G__24280,G__24281));
})()], 0));
});
