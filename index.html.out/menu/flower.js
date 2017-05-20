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
menu.flower.big_scale = 1.3;
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__8988__auto__ = [];
var len__8981__auto___20181 = arguments.length;
var i__8982__auto___20182 = (0);
while(true){
if((i__8982__auto___20182 < len__8981__auto___20181)){
args__8988__auto__.push((arguments[i__8982__auto___20182]));

var G__20183 = (i__8982__auto___20182 + (1));
i__8982__auto___20182 = G__20183;
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
var G__20170 = cljs.core.cst$kw$css;
var G__20171 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20170,transition_length__$1){
return (function (G__20176,G__20177,G__20173,G__20180,G__20174,G__20178,G__20175,G__20179){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__20173.cljs$core$IFn$_invoke$arity$1 ? G__20173.cljs$core$IFn$_invoke$arity$1(G__20174) : G__20173.call(null,G__20174)),cljs.core.cst$kw$bottom,(G__20173.cljs$core$IFn$_invoke$arity$1 ? G__20173.cljs$core$IFn$_invoke$arity$1(G__20174) : G__20173.call(null,G__20174)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20175),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20176)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__20177;
if(cljs.core.truth_(and__7748__auto__)){
return (G__20178.cljs$core$IFn$_invoke$arity$1 ? G__20178.cljs$core$IFn$_invoke$arity$1(G__20179) : G__20178.call(null,G__20179));
} else {
return and__7748__auto__;
}
})())?G__20180:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__20170,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__20172 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20170,G__20171,G__20172) : hoplon.core.div.call(null,G__20170,G__20171,G__20172));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq20165){
var G__20166 = cljs.core.first(seq20165);
var seq20165__$1 = cljs.core.next(seq20165);
var G__20167 = cljs.core.first(seq20165__$1);
var seq20165__$2 = cljs.core.next(seq20165__$1);
var G__20168 = cljs.core.first(seq20165__$2);
var seq20165__$3 = cljs.core.next(seq20165__$2);
var G__20169 = cljs.core.first(seq20165__$3);
var seq20165__$4 = cljs.core.next(seq20165__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__20166,G__20167,G__20168,G__20169,seq20165__$4);
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
var G__20254 = cljs.core.cst$kw$click;
var G__20255 = ((function (G__20254,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__20254,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__20256 = cljs.core.cst$kw$mouseenter;
var G__20257 = ((function (G__20254,G__20255,G__20256,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__20254,G__20255,G__20256,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__20258 = cljs.core.cst$kw$mouseleave;
var G__20259 = ((function (G__20254,G__20255,G__20256,G__20257,G__20258,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__20254,G__20255,G__20256,G__20257,G__20258,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__20260 = cljs.core.cst$kw$css;
var G__20261 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20264,G__20269,G__20266,G__20265,G__20267,G__20268,G__20263){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__20263;
if(cljs.core.truth_(and__7748__auto__)){
return G__20264;
} else {
return and__7748__auto__;
}
})())?G__20265:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__20270 = (- G__20267);
return (G__20266.cljs$core$IFn$_invoke$arity$1 ? G__20266.cljs$core$IFn$_invoke$arity$1(G__20270) : G__20266.call(null,G__20270));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20268),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20269)].join(''),(G__20267 * (2)),"pointer",(1),"absolute",(G__20266.cljs$core$IFn$_invoke$arity$1 ? G__20266.cljs$core$IFn$_invoke$arity$1(G__20267) : G__20266.call(null,G__20267)),(G__20267 * (2)),(function (){var G__20271 = (- G__20267);
return (G__20266.cljs$core$IFn$_invoke$arity$1 ? G__20266.cljs$core$IFn$_invoke$arity$1(G__20271) : G__20266.call(null,G__20271));
})()]);
});})(G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__20262 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20272){
return (G__20272 / (2));
});})(G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20274,G__20273){
return ((G__20273 * Math.sin((G__20274.cljs$core$IFn$_invoke$arity$1 ? G__20274.cljs$core$IFn$_invoke$arity$1((45)) : G__20274.call(null,(45))))) / (2));
});})(width,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20275){
return (G__20275 / (12));
});})(width,rotated_offset,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20277,G__20276){
return (G__20276 + (- (G__20277 / (2))));
});})(width,rotated_offset,height,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20279,G__20278){
return (G__20278 + (- (G__20279 / (2))));
});})(width,rotated_offset,height,left,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20280,G__20281){
var G__20282 = (G__20281.cljs$core$IFn$_invoke$arity$0 ? G__20281.cljs$core$IFn$_invoke$arity$0() : G__20281.call(null));
return (G__20280.cljs$core$IFn$_invoke$arity$1 ? G__20280.cljs$core$IFn$_invoke$arity$1(G__20282) : G__20280.call(null,G__20282));
});})(width,rotated_offset,height,left,top,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20285,G__20286,G__20283,G__20287,G__20284,G__20288){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__20283.cljs$core$IFn$_invoke$arity$1 ? G__20283.cljs$core$IFn$_invoke$arity$1(G__20284) : G__20283.call(null,G__20284)),cljs.core.cst$kw$height,(G__20283.cljs$core$IFn$_invoke$arity$1 ? G__20283.cljs$core$IFn$_invoke$arity$1(G__20285) : G__20283.call(null,G__20285)),cljs.core.cst$kw$left,(G__20283.cljs$core$IFn$_invoke$arity$1 ? G__20283.cljs$core$IFn$_invoke$arity$1(G__20286) : G__20283.call(null,G__20286)),cljs.core.cst$kw$background_DASH_color,G__20287,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20288),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20288),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20289 = cljs.core.cst$kw$css;
var G__20290 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20289,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20297,G__20295,G__20292,G__20293,G__20294,G__20291,G__20296){
var G__20298 = G__20292;
var G__20299 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__20301 = (G__20294 - ((2) * G__20295));
return (G__20293.cljs$core$IFn$_invoke$arity$1 ? G__20293.cljs$core$IFn$_invoke$arity$1(G__20301) : G__20293.call(null,G__20301));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__20296)?G__20297:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__20296)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__20300 = (cljs.core.truth_(G__20296)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__20291.cljs$core$IFn$_invoke$arity$3 ? G__20291.cljs$core$IFn$_invoke$arity$3(G__20298,G__20299,G__20300) : G__20291.call(null,G__20298,G__20299,G__20300));
});})(G__20289,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20289,G__20290) : hoplon.core.div.call(null,G__20289,G__20290));
})(),(function (){var G__20302 = cljs.core.cst$kw$css;
var G__20303 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20302,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20305,G__20306,G__20307,G__20304,G__20308){
var G__20309 = G__20305;
var G__20310 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__20306.cljs$core$IFn$_invoke$arity$1 ? G__20306.cljs$core$IFn$_invoke$arity$1(G__20307) : G__20306.call(null,G__20307)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__20308)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__20304.cljs$core$IFn$_invoke$arity$2 ? G__20304.cljs$core$IFn$_invoke$arity$2(G__20309,G__20310) : G__20304.call(null,G__20309,G__20310));
});})(G__20302,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20302,G__20303) : hoplon.core.div.call(null,G__20302,G__20303));
})(),(function (){var G__20311 = cljs.core.cst$kw$css;
var G__20312 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20311,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__20319,G__20317,G__20314,G__20315,G__20316,G__20313,G__20318){
var G__20320 = G__20314;
var G__20321 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__20323 = (G__20316 + ((2) * G__20317));
return (G__20315.cljs$core$IFn$_invoke$arity$1 ? G__20315.cljs$core$IFn$_invoke$arity$1(G__20323) : G__20315.call(null,G__20323));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__20318)?G__20319:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__20318)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__20322 = (cljs.core.truth_(G__20318)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__20313.cljs$core$IFn$_invoke$arity$3 ? G__20313.cljs$core$IFn$_invoke$arity$3(G__20320,G__20321,G__20322) : G__20313.call(null,G__20320,G__20321,G__20322));
});})(G__20311,width,rotated_offset,height,left,top,color,default_css,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20311,G__20312) : hoplon.core.div.call(null,G__20311,G__20312));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,G__20262) : hoplon.core.div.call(null,G__20254,G__20255,G__20256,G__20257,G__20258,G__20259,G__20260,G__20261,G__20262));
});
menu.flower.menu = (function menu$flower$menu(current_item,items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__20425,G__20426){
return (G__20425 / ((1) + G__20426));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__20428,G__20427){
return (G__20427 * G__20428);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__20430,G__20429){
return (((2) * Math.PI) / (G__20429.cljs$core$IFn$_invoke$arity$1 ? G__20429.cljs$core$IFn$_invoke$arity$1(G__20430) : G__20429.call(null,G__20430)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__20435,G__20431,G__20433,G__20432,G__20434){
var G__20436 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__20438 = G__20433;
var G__20439 = (i * G__20434);
return (G__20432.cljs$core$IFn$_invoke$arity$2 ? G__20432.cljs$core$IFn$_invoke$arity$2(G__20438,G__20439) : G__20432.call(null,G__20438,G__20439));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__20437 = G__20435;
return (G__20431.cljs$core$IFn$_invoke$arity$2 ? G__20431.cljs$core$IFn$_invoke$arity$2(G__20436,G__20437) : G__20431.call(null,G__20436,G__20437));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__20442,G__20440,G__20441){
return (G__20440 / (G__20441.cljs$core$IFn$_invoke$arity$1 ? G__20441.cljs$core$IFn$_invoke$arity$1(G__20442) : G__20441.call(null,G__20442)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__20443 = cljs.core.cst$kw$css;
var G__20444 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__20445 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20443,G__20444,G__20445) : hoplon.core.div.call(null,G__20443,G__20444,G__20445));
})(),(function (){var G__20446 = cljs.core.cst$kw$css;
var G__20447 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__20448 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__17337__auto__){
var vec__20461 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__20464){
var vec__20465 = p__20464;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(0),null);
var vec__20468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20468,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20465,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__17337__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20461,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20473,G__20472,G__20471){
if(cljs.core.truth_(G__20471)){
return (G__20472 * G__20473);
} else {
return (0);
}
});})(vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20474){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__20474);
});})(transition_delay,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20475){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__20475);
});})(transition_delay,url,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var G__20476 = cljs.core.cst$kw$css;
var G__20477 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20476,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20484,G__20481,G__20485,G__20482,G__20479,G__20480,G__20483){
var G__20486 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20480),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20481),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20482),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__20487 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__20483)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20484),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20485),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__20479.cljs$core$IFn$_invoke$arity$2 ? G__20479.cljs$core$IFn$_invoke$arity$2(G__20486,G__20487) : G__20479.call(null,G__20486,G__20487));
});})(G__20476,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__20478 = (function (){var G__20488 = cljs.core.cst$kw$mouseenter;
var G__20489 = ((function (G__20488,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__20488,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__20490 = cljs.core.cst$kw$mouseleave;
var G__20491 = ((function (G__20488,G__20489,G__20490,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__20488,G__20489,G__20490,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__20492 = cljs.core.cst$kw$click;
var G__20493 = ((function (G__20488,G__20489,G__20490,G__20491,G__20492,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__20488,G__20489,G__20490,G__20491,G__20492,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__20498_20526 = current_item;
var G__20499_20527 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item) : cljs.core.deref.call(null,item));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20498_20526,G__20499_20527) : cljs.core.reset_BANG_.call(null,G__20498_20526,G__20499_20527));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));
});})(G__20488,G__20489,G__20490,G__20491,G__20492,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__20488,G__20489,G__20490,G__20491,G__20492,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__20494 = cljs.core.cst$kw$css;
var G__20495 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20500,G__20506,G__20504,G__20503,G__20502,G__20505,G__20501,G__20507){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__20500;
if(cljs.core.truth_(and__7748__auto__)){
return G__20501;
} else {
return and__7748__auto__;
}
})())?G__20502:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__20508 = (- G__20504);
return (G__20503.cljs$core$IFn$_invoke$arity$1 ? G__20503.cljs$core$IFn$_invoke$arity$1(G__20508) : G__20503.call(null,G__20508));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__20505 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20506)].join(''),"hidden","white",((2) * G__20504),"pointer",(cljs.core.truth_(G__20507)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20507),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__20503.cljs$core$IFn$_invoke$arity$1 ? G__20503.cljs$core$IFn$_invoke$arity$1(G__20504) : G__20503.call(null,G__20504)),"contain",((2) * G__20504),(function (){var G__20509 = (- G__20504);
return (G__20503.cljs$core$IFn$_invoke$arity$1 ? G__20503.cljs$core$IFn$_invoke$arity$1(G__20509) : G__20503.call(null,G__20509));
})()]);
});})(G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,total_transition_length,open_QMARK_,url);
var G__20496 = (function (){var con__17347__auto__ = (new cljs.core.Delay(((function (G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__20510 = cljs.core.cst$kw$css;
var G__20511 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__20512 = (function (){var G__20513 = (function (){var G__20514 = cljs.core.cst$kw$valign;
var G__20515 = "center";
var G__20516 = cljs.core.cst$kw$css;
var G__20517 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.playfair)], 0));
var G__20518 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__20514,G__20515,G__20516,G__20517,G__20518) : hoplon.core.td.call(null,G__20514,G__20515,G__20516,G__20517,G__20518));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__20513) : hoplon.core.tr.call(null,G__20513));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__20510,G__20511,G__20512) : hoplon.core.table.call(null,G__20510,G__20511,G__20512));
});})(G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__17348__auto__ = (new cljs.core.Delay(((function (con__17347__auto__,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__17347__auto__,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__17349__auto__ = ((function (con__17347__auto__,alt__17348__auto__,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__17350__auto__){
var G__20519 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__17350__auto__)?con__17347__auto__:alt__17348__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20519) : cljs.core.deref.call(null,G__20519));
});})(con__17347__auto__,alt__17348__auto__,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__17349__auto__).call(null,text);
})();
var G__20497 = (function (){var G__20520 = cljs.core.cst$kw$css;
var G__20521 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20520,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__20523,G__20524,G__20522,G__20525){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20522),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20523),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20524),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__20525)?(0):(1))], null);
});})(G__20520,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20476,G__20477,transition_delay,url,text,mouseover_QMARK_,vec__20461,x,i,y,item,G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20520,G__20521) : hoplon.core.div.call(null,G__20520,G__20521));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497) : hoplon.core.div.call(null,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20476,G__20477,G__20478) : hoplon.core.div.call(null,G__20476,G__20477,G__20478));
});})(G__20446,G__20447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20446,G__20447,G__20448) : hoplon.core.div.call(null,G__20446,G__20447,G__20448));
})()], 0));
});
