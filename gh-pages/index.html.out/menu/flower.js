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
var len__8981__auto___23987 = arguments.length;
var i__8982__auto___23988 = (0);
while(true){
if((i__8982__auto___23988 < len__8981__auto___23987)){
args__8988__auto__.push((arguments[i__8982__auto___23988]));

var G__23989 = (i__8982__auto___23988 + (1));
i__8982__auto___23988 = G__23989;
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
var G__23976 = cljs.core.cst$kw$css;
var G__23977 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23976,transition_length__$1){
return (function (G__23982,G__23983,G__23979,G__23986,G__23980,G__23984,G__23981,G__23985){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23979.cljs$core$IFn$_invoke$arity$1 ? G__23979.cljs$core$IFn$_invoke$arity$1(G__23980) : G__23979.call(null,G__23980)),cljs.core.cst$kw$bottom,(G__23979.cljs$core$IFn$_invoke$arity$1 ? G__23979.cljs$core$IFn$_invoke$arity$1(G__23980) : G__23979.call(null,G__23980)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23981),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23982)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23983;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23984.cljs$core$IFn$_invoke$arity$1 ? G__23984.cljs$core$IFn$_invoke$arity$1(G__23985) : G__23984.call(null,G__23985));
} else {
return and__7748__auto__;
}
})())?G__23986:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23976,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23978 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23976,G__23977,G__23978) : hoplon.core.div.call(null,G__23976,G__23977,G__23978));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23971){
var G__23972 = cljs.core.first(seq23971);
var seq23971__$1 = cljs.core.next(seq23971);
var G__23973 = cljs.core.first(seq23971__$1);
var seq23971__$2 = cljs.core.next(seq23971__$1);
var G__23974 = cljs.core.first(seq23971__$2);
var seq23971__$3 = cljs.core.next(seq23971__$2);
var G__23975 = cljs.core.first(seq23971__$3);
var seq23971__$4 = cljs.core.next(seq23971__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23972,G__23973,G__23974,G__23975,seq23971__$4);
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
var G__24060 = cljs.core.cst$kw$click;
var G__24061 = ((function (G__24060,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24060,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24062 = cljs.core.cst$kw$mouseenter;
var G__24063 = ((function (G__24060,G__24061,G__24062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__24060,G__24061,G__24062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24064 = cljs.core.cst$kw$mouseleave;
var G__24065 = ((function (G__24060,G__24061,G__24062,G__24063,G__24064,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__24060,G__24061,G__24062,G__24063,G__24064,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24066 = cljs.core.cst$kw$css;
var G__24067 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24070,G__24075,G__24072,G__24071,G__24073,G__24074,G__24069){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24069;
if(cljs.core.truth_(and__7748__auto__)){
return G__24070;
} else {
return and__7748__auto__;
}
})())?G__24071:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24076 = (- G__24073);
return (G__24072.cljs$core$IFn$_invoke$arity$1 ? G__24072.cljs$core$IFn$_invoke$arity$1(G__24076) : G__24072.call(null,G__24076));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24074),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24075)].join(''),(G__24073 * (2)),"pointer",(1),"absolute",(G__24072.cljs$core$IFn$_invoke$arity$1 ? G__24072.cljs$core$IFn$_invoke$arity$1(G__24073) : G__24072.call(null,G__24073)),(G__24073 * (2)),(function (){var G__24077 = (- G__24073);
return (G__24072.cljs$core$IFn$_invoke$arity$1 ? G__24072.cljs$core$IFn$_invoke$arity$1(G__24077) : G__24072.call(null,G__24077));
})()]);
});})(G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__24068 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24078){
return (G__24078 / (2));
});})(G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24080,G__24079){
return ((G__24079 * Math.sin((G__24080.cljs$core$IFn$_invoke$arity$1 ? G__24080.cljs$core$IFn$_invoke$arity$1((45)) : G__24080.call(null,(45))))) / (2));
});})(width,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24081){
return (G__24081 / (12));
});})(width,rotated_offset,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24083,G__24082){
return (G__24082 + (- (G__24083 / (2))));
});})(width,rotated_offset,height,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24085,G__24084){
return (G__24084 + (- (G__24085 / (2))));
});})(width,rotated_offset,height,left,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24086,G__24087){
var G__24088 = (G__24087.cljs$core$IFn$_invoke$arity$0 ? G__24087.cljs$core$IFn$_invoke$arity$0() : G__24087.call(null));
return (G__24086.cljs$core$IFn$_invoke$arity$1 ? G__24086.cljs$core$IFn$_invoke$arity$1(G__24088) : G__24086.call(null,G__24088));
});})(width,rotated_offset,height,left,top,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24091,G__24092,G__24089,G__24093,G__24090,G__24094){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24089.cljs$core$IFn$_invoke$arity$1 ? G__24089.cljs$core$IFn$_invoke$arity$1(G__24090) : G__24089.call(null,G__24090)),cljs.core.cst$kw$height,(G__24089.cljs$core$IFn$_invoke$arity$1 ? G__24089.cljs$core$IFn$_invoke$arity$1(G__24091) : G__24089.call(null,G__24091)),cljs.core.cst$kw$left,(G__24089.cljs$core$IFn$_invoke$arity$1 ? G__24089.cljs$core$IFn$_invoke$arity$1(G__24092) : G__24089.call(null,G__24092)),cljs.core.cst$kw$background_DASH_color,G__24093,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24094),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24094),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24095 = cljs.core.cst$kw$css;
var G__24096 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24095,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24103,G__24101,G__24098,G__24099,G__24100,G__24097,G__24102){
var G__24104 = G__24098;
var G__24105 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24107 = (G__24100 - ((2) * G__24101));
return (G__24099.cljs$core$IFn$_invoke$arity$1 ? G__24099.cljs$core$IFn$_invoke$arity$1(G__24107) : G__24099.call(null,G__24107));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24102)?G__24103:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24102)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24106 = (cljs.core.truth_(G__24102)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24097.cljs$core$IFn$_invoke$arity$3 ? G__24097.cljs$core$IFn$_invoke$arity$3(G__24104,G__24105,G__24106) : G__24097.call(null,G__24104,G__24105,G__24106));
});})(G__24095,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24095,G__24096) : hoplon.core.div.call(null,G__24095,G__24096));
})(),(function (){var G__24108 = cljs.core.cst$kw$css;
var G__24109 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24108,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24111,G__24112,G__24113,G__24110,G__24114){
var G__24115 = G__24111;
var G__24116 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24112.cljs$core$IFn$_invoke$arity$1 ? G__24112.cljs$core$IFn$_invoke$arity$1(G__24113) : G__24112.call(null,G__24113)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24114)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__24110.cljs$core$IFn$_invoke$arity$2 ? G__24110.cljs$core$IFn$_invoke$arity$2(G__24115,G__24116) : G__24110.call(null,G__24115,G__24116));
});})(G__24108,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24108,G__24109) : hoplon.core.div.call(null,G__24108,G__24109));
})(),(function (){var G__24117 = cljs.core.cst$kw$css;
var G__24118 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24117,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24125,G__24123,G__24120,G__24121,G__24122,G__24119,G__24124){
var G__24126 = G__24120;
var G__24127 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24129 = (G__24122 + ((2) * G__24123));
return (G__24121.cljs$core$IFn$_invoke$arity$1 ? G__24121.cljs$core$IFn$_invoke$arity$1(G__24129) : G__24121.call(null,G__24129));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24124)?G__24125:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24124)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24128 = (cljs.core.truth_(G__24124)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24119.cljs$core$IFn$_invoke$arity$3 ? G__24119.cljs$core$IFn$_invoke$arity$3(G__24126,G__24127,G__24128) : G__24119.call(null,G__24126,G__24127,G__24128));
});})(G__24117,width,rotated_offset,height,left,top,color,default_css,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24117,G__24118) : hoplon.core.div.call(null,G__24117,G__24118));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,G__24068) : hoplon.core.div.call(null,G__24060,G__24061,G__24062,G__24063,G__24064,G__24065,G__24066,G__24067,G__24068));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24233,G__24234){
return (G__24233 / ((1) + G__24234));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24236,G__24235){
return (G__24235 * G__24236);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24238,G__24237){
return (((2) * Math.PI) / (G__24237.cljs$core$IFn$_invoke$arity$1 ? G__24237.cljs$core$IFn$_invoke$arity$1(G__24238) : G__24237.call(null,G__24238)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24243,G__24239,G__24241,G__24240,G__24242){
var G__24244 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24246 = G__24241;
var G__24247 = (i * G__24242);
return (G__24240.cljs$core$IFn$_invoke$arity$2 ? G__24240.cljs$core$IFn$_invoke$arity$2(G__24246,G__24247) : G__24240.call(null,G__24246,G__24247));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24245 = G__24243;
return (G__24239.cljs$core$IFn$_invoke$arity$2 ? G__24239.cljs$core$IFn$_invoke$arity$2(G__24244,G__24245) : G__24239.call(null,G__24244,G__24245));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24250,G__24248,G__24249){
return (G__24248 / (G__24249.cljs$core$IFn$_invoke$arity$1 ? G__24249.cljs$core$IFn$_invoke$arity$1(G__24250) : G__24249.call(null,G__24250)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24251 = cljs.core.cst$kw$css;
var G__24252 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24253 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24251,G__24252,G__24253) : hoplon.core.div.call(null,G__24251,G__24252,G__24253));
})(),(function (){var G__24254 = cljs.core.cst$kw$css;
var G__24255 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24256 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24269 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24272){
var vec__24273 = p__24272;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(0),null);
var vec__24276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24276,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24276,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24273,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24269,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24281,G__24280,G__24279){
if(cljs.core.truth_(G__24279)){
return (G__24280 * G__24281);
} else {
return (0);
}
});})(vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24282){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24282);
});})(transition_delay,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24283){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24283);
});})(transition_delay,url,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24284){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24284);
});})(transition_delay,url,text,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24285,G__24286){
var and__7748__auto__ = G__24285;
if(cljs.core.truth_(and__7748__auto__)){
return G__24286;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24287 = cljs.core.cst$kw$css;
var G__24288 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24287,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24295,G__24292,G__24296,G__24293,G__24290,G__24291,G__24294){
var G__24297 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24291),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24292),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24293),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24298 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24294)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24295),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24296),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24290.cljs$core$IFn$_invoke$arity$2 ? G__24290.cljs$core$IFn$_invoke$arity$2(G__24297,G__24298) : G__24290.call(null,G__24297,G__24298));
});})(G__24287,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24289 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24299,G__24300){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24299)?"black":G__24300)], null);
});})(G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24301 = cljs.core.cst$kw$mouseenter;
var G__24302 = ((function (G__24301,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24301,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24303 = cljs.core.cst$kw$mouseleave;
var G__24304 = ((function (G__24301,G__24302,G__24303,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24301,G__24302,G__24303,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24305 = cljs.core.cst$kw$click;
var G__24306 = ((function (G__24301,G__24302,G__24303,G__24304,G__24305,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24301,G__24302,G__24303,G__24304,G__24305,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24301,G__24302,G__24303,G__24304,G__24305,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24301,G__24302,G__24303,G__24304,G__24305,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24307 = cljs.core.cst$kw$css;
var G__24308 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24316,G__24314,G__24313,G__24312,G__24311,G__24315,G__24317){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24311)?G__24312:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24318 = (- G__24314);
return (G__24313.cljs$core$IFn$_invoke$arity$1 ? G__24313.cljs$core$IFn$_invoke$arity$1(G__24318) : G__24313.call(null,G__24318));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24315 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24316)].join(''),"hidden","white",((2) * G__24314),"pointer",(cljs.core.truth_(G__24317)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24317),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24313.cljs$core$IFn$_invoke$arity$1 ? G__24313.cljs$core$IFn$_invoke$arity$1(G__24314) : G__24313.call(null,G__24314)),"contain",((2) * G__24314),(function (){var G__24319 = (- G__24314);
return (G__24313.cljs$core$IFn$_invoke$arity$1 ? G__24313.cljs$core$IFn$_invoke$arity$1(G__24319) : G__24313.call(null,G__24319));
})()]);
});})(G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24309 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24320 = cljs.core.cst$kw$css;
var G__24321 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24322 = (function (){var G__24323 = (function (){var G__24324 = cljs.core.cst$kw$valign;
var G__24325 = "center";
var G__24326 = cljs.core.cst$kw$css;
var G__24327 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24328 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24324,G__24325,G__24326,G__24327,G__24328) : hoplon.core.td.call(null,G__24324,G__24325,G__24326,G__24327,G__24328));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24323) : hoplon.core.tr.call(null,G__24323));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24320,G__24321,G__24322) : hoplon.core.table.call(null,G__24320,G__24321,G__24322));
});})(G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24329 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24329) : cljs.core.deref.call(null,G__24329));
});})(con__14913__auto__,alt__14914__auto__,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24310 = (function (){var G__24330 = cljs.core.cst$kw$css;
var G__24331 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24330,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24309,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24333,G__24334,G__24332,G__24335){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24332),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24333),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24334),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24335)?(0):(1))], null);
});})(G__24330,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24309,G__24287,G__24288,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24269,x,i,y,item,G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24330,G__24331) : hoplon.core.div.call(null,G__24330,G__24331));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24309,G__24310) : hoplon.core.div.call(null,G__24301,G__24302,G__24303,G__24304,G__24305,G__24306,G__24307,G__24308,G__24309,G__24310));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24287,G__24288,G__24289) : hoplon.core.div.call(null,G__24287,G__24288,G__24289));
});})(G__24254,G__24255,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24254,G__24255,G__24256) : hoplon.core.div.call(null,G__24254,G__24255,G__24256));
})()], 0));
});
