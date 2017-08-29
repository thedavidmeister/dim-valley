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
var len__8981__auto___24179 = arguments.length;
var i__8982__auto___24180 = (0);
while(true){
if((i__8982__auto___24180 < len__8981__auto___24179)){
args__8988__auto__.push((arguments[i__8982__auto___24180]));

var G__24181 = (i__8982__auto___24180 + (1));
i__8982__auto___24180 = G__24181;
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
var G__24168 = cljs.core.cst$kw$css;
var G__24169 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24168,transition_length__$1){
return (function (G__24174,G__24175,G__24171,G__24178,G__24172,G__24176,G__24173,G__24177){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24171.cljs$core$IFn$_invoke$arity$1 ? G__24171.cljs$core$IFn$_invoke$arity$1(G__24172) : G__24171.call(null,G__24172)),cljs.core.cst$kw$bottom,(G__24171.cljs$core$IFn$_invoke$arity$1 ? G__24171.cljs$core$IFn$_invoke$arity$1(G__24172) : G__24171.call(null,G__24172)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24173),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24174)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24175;
if(cljs.core.truth_(and__7748__auto__)){
return (G__24176.cljs$core$IFn$_invoke$arity$1 ? G__24176.cljs$core$IFn$_invoke$arity$1(G__24177) : G__24176.call(null,G__24177));
} else {
return and__7748__auto__;
}
})())?G__24178:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24168,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__24170 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24168,G__24169,G__24170) : hoplon.core.div.call(null,G__24168,G__24169,G__24170));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24163){
var G__24164 = cljs.core.first(seq24163);
var seq24163__$1 = cljs.core.next(seq24163);
var G__24165 = cljs.core.first(seq24163__$1);
var seq24163__$2 = cljs.core.next(seq24163__$1);
var G__24166 = cljs.core.first(seq24163__$2);
var seq24163__$3 = cljs.core.next(seq24163__$2);
var G__24167 = cljs.core.first(seq24163__$3);
var seq24163__$4 = cljs.core.next(seq24163__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24164,G__24165,G__24166,G__24167,seq24163__$4);
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
var G__24252 = cljs.core.cst$kw$click;
var G__24253 = ((function (G__24252,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24252,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24254 = cljs.core.cst$kw$mouseenter;
var G__24255 = ((function (G__24252,G__24253,G__24254,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__24252,G__24253,G__24254,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24256 = cljs.core.cst$kw$mouseleave;
var G__24257 = ((function (G__24252,G__24253,G__24254,G__24255,G__24256,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__24252,G__24253,G__24254,G__24255,G__24256,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24258 = cljs.core.cst$kw$css;
var G__24259 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24262,G__24267,G__24264,G__24263,G__24265,G__24266,G__24261){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24261;
if(cljs.core.truth_(and__7748__auto__)){
return G__24262;
} else {
return and__7748__auto__;
}
})())?G__24263:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24268 = (- G__24265);
return (G__24264.cljs$core$IFn$_invoke$arity$1 ? G__24264.cljs$core$IFn$_invoke$arity$1(G__24268) : G__24264.call(null,G__24268));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24266),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24267)].join(''),(G__24265 * (2)),"pointer",(1),"absolute",(G__24264.cljs$core$IFn$_invoke$arity$1 ? G__24264.cljs$core$IFn$_invoke$arity$1(G__24265) : G__24264.call(null,G__24265)),(G__24265 * (2)),(function (){var G__24269 = (- G__24265);
return (G__24264.cljs$core$IFn$_invoke$arity$1 ? G__24264.cljs$core$IFn$_invoke$arity$1(G__24269) : G__24264.call(null,G__24269));
})()]);
});})(G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__24260 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24270){
return (G__24270 / (2));
});})(G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24272,G__24271){
return ((G__24271 * Math.sin((G__24272.cljs$core$IFn$_invoke$arity$1 ? G__24272.cljs$core$IFn$_invoke$arity$1((45)) : G__24272.call(null,(45))))) / (2));
});})(width,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24273){
return (G__24273 / (12));
});})(width,rotated_offset,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24275,G__24274){
return (G__24274 + (- (G__24275 / (2))));
});})(width,rotated_offset,height,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24277,G__24276){
return (G__24276 + (- (G__24277 / (2))));
});})(width,rotated_offset,height,left,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24278,G__24279){
var G__24280 = (G__24279.cljs$core$IFn$_invoke$arity$0 ? G__24279.cljs$core$IFn$_invoke$arity$0() : G__24279.call(null));
return (G__24278.cljs$core$IFn$_invoke$arity$1 ? G__24278.cljs$core$IFn$_invoke$arity$1(G__24280) : G__24278.call(null,G__24280));
});})(width,rotated_offset,height,left,top,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24283,G__24284,G__24281,G__24285,G__24282,G__24286){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24281.cljs$core$IFn$_invoke$arity$1 ? G__24281.cljs$core$IFn$_invoke$arity$1(G__24282) : G__24281.call(null,G__24282)),cljs.core.cst$kw$height,(G__24281.cljs$core$IFn$_invoke$arity$1 ? G__24281.cljs$core$IFn$_invoke$arity$1(G__24283) : G__24281.call(null,G__24283)),cljs.core.cst$kw$left,(G__24281.cljs$core$IFn$_invoke$arity$1 ? G__24281.cljs$core$IFn$_invoke$arity$1(G__24284) : G__24281.call(null,G__24284)),cljs.core.cst$kw$background_DASH_color,G__24285,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24286),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24286),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24287 = cljs.core.cst$kw$css;
var G__24288 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24287,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24295,G__24293,G__24290,G__24291,G__24292,G__24289,G__24294){
var G__24296 = G__24290;
var G__24297 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24299 = (G__24292 - ((2) * G__24293));
return (G__24291.cljs$core$IFn$_invoke$arity$1 ? G__24291.cljs$core$IFn$_invoke$arity$1(G__24299) : G__24291.call(null,G__24299));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24294)?G__24295:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24294)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24298 = (cljs.core.truth_(G__24294)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24289.cljs$core$IFn$_invoke$arity$3 ? G__24289.cljs$core$IFn$_invoke$arity$3(G__24296,G__24297,G__24298) : G__24289.call(null,G__24296,G__24297,G__24298));
});})(G__24287,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24287,G__24288) : hoplon.core.div.call(null,G__24287,G__24288));
})(),(function (){var G__24300 = cljs.core.cst$kw$css;
var G__24301 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24300,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24303,G__24304,G__24305,G__24302,G__24306){
var G__24307 = G__24303;
var G__24308 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24304.cljs$core$IFn$_invoke$arity$1 ? G__24304.cljs$core$IFn$_invoke$arity$1(G__24305) : G__24304.call(null,G__24305)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24306)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__24302.cljs$core$IFn$_invoke$arity$2 ? G__24302.cljs$core$IFn$_invoke$arity$2(G__24307,G__24308) : G__24302.call(null,G__24307,G__24308));
});})(G__24300,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24300,G__24301) : hoplon.core.div.call(null,G__24300,G__24301));
})(),(function (){var G__24309 = cljs.core.cst$kw$css;
var G__24310 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24309,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24317,G__24315,G__24312,G__24313,G__24314,G__24311,G__24316){
var G__24318 = G__24312;
var G__24319 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24321 = (G__24314 + ((2) * G__24315));
return (G__24313.cljs$core$IFn$_invoke$arity$1 ? G__24313.cljs$core$IFn$_invoke$arity$1(G__24321) : G__24313.call(null,G__24321));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24316)?G__24317:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24316)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24320 = (cljs.core.truth_(G__24316)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24311.cljs$core$IFn$_invoke$arity$3 ? G__24311.cljs$core$IFn$_invoke$arity$3(G__24318,G__24319,G__24320) : G__24311.call(null,G__24318,G__24319,G__24320));
});})(G__24309,width,rotated_offset,height,left,top,color,default_css,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24309,G__24310) : hoplon.core.div.call(null,G__24309,G__24310));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,G__24260) : hoplon.core.div.call(null,G__24252,G__24253,G__24254,G__24255,G__24256,G__24257,G__24258,G__24259,G__24260));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24425,G__24426){
return (G__24425 / ((1) + G__24426));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24428,G__24427){
return (G__24427 * G__24428);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24430,G__24429){
return (((2) * Math.PI) / (G__24429.cljs$core$IFn$_invoke$arity$1 ? G__24429.cljs$core$IFn$_invoke$arity$1(G__24430) : G__24429.call(null,G__24430)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24435,G__24431,G__24433,G__24432,G__24434){
var G__24436 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24438 = G__24433;
var G__24439 = (i * G__24434);
return (G__24432.cljs$core$IFn$_invoke$arity$2 ? G__24432.cljs$core$IFn$_invoke$arity$2(G__24438,G__24439) : G__24432.call(null,G__24438,G__24439));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24437 = G__24435;
return (G__24431.cljs$core$IFn$_invoke$arity$2 ? G__24431.cljs$core$IFn$_invoke$arity$2(G__24436,G__24437) : G__24431.call(null,G__24436,G__24437));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24442,G__24440,G__24441){
return (G__24440 / (G__24441.cljs$core$IFn$_invoke$arity$1 ? G__24441.cljs$core$IFn$_invoke$arity$1(G__24442) : G__24441.call(null,G__24442)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24443 = cljs.core.cst$kw$css;
var G__24444 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24445 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24443,G__24444,G__24445) : hoplon.core.div.call(null,G__24443,G__24444,G__24445));
})(),(function (){var G__24446 = cljs.core.cst$kw$css;
var G__24447 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24448 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24461 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24464){
var vec__24465 = p__24464;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(0),null);
var vec__24468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24468,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24465,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24473,G__24472,G__24471){
if(cljs.core.truth_(G__24471)){
return (G__24472 * G__24473);
} else {
return (0);
}
});})(vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24474){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24474);
});})(transition_delay,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24475){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24475);
});})(transition_delay,url,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24476){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24476);
});})(transition_delay,url,text,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24477,G__24478){
var and__7748__auto__ = G__24477;
if(cljs.core.truth_(and__7748__auto__)){
return G__24478;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24479 = cljs.core.cst$kw$css;
var G__24480 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24479,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24487,G__24484,G__24488,G__24485,G__24482,G__24483,G__24486){
var G__24489 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24483),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24484),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24485),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24490 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24486)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24487),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24488),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24482.cljs$core$IFn$_invoke$arity$2 ? G__24482.cljs$core$IFn$_invoke$arity$2(G__24489,G__24490) : G__24482.call(null,G__24489,G__24490));
});})(G__24479,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24481 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24491,G__24492){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24491)?"black":G__24492)], null);
});})(G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24493 = cljs.core.cst$kw$mouseenter;
var G__24494 = ((function (G__24493,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24493,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24495 = cljs.core.cst$kw$mouseleave;
var G__24496 = ((function (G__24493,G__24494,G__24495,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24493,G__24494,G__24495,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24497 = cljs.core.cst$kw$click;
var G__24498 = ((function (G__24493,G__24494,G__24495,G__24496,G__24497,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24493,G__24494,G__24495,G__24496,G__24497,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24493,G__24494,G__24495,G__24496,G__24497,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24493,G__24494,G__24495,G__24496,G__24497,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24499 = cljs.core.cst$kw$css;
var G__24500 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24508,G__24506,G__24505,G__24504,G__24503,G__24507,G__24509){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24503)?G__24504:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24510 = (- G__24506);
return (G__24505.cljs$core$IFn$_invoke$arity$1 ? G__24505.cljs$core$IFn$_invoke$arity$1(G__24510) : G__24505.call(null,G__24510));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24507 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24508)].join(''),"hidden","white",((2) * G__24506),"pointer",(cljs.core.truth_(G__24509)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24509),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24505.cljs$core$IFn$_invoke$arity$1 ? G__24505.cljs$core$IFn$_invoke$arity$1(G__24506) : G__24505.call(null,G__24506)),"contain",((2) * G__24506),(function (){var G__24511 = (- G__24506);
return (G__24505.cljs$core$IFn$_invoke$arity$1 ? G__24505.cljs$core$IFn$_invoke$arity$1(G__24511) : G__24505.call(null,G__24511));
})()]);
});})(G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24501 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24512 = cljs.core.cst$kw$css;
var G__24513 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24514 = (function (){var G__24515 = (function (){var G__24516 = cljs.core.cst$kw$valign;
var G__24517 = "center";
var G__24518 = cljs.core.cst$kw$css;
var G__24519 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24520 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24516,G__24517,G__24518,G__24519,G__24520) : hoplon.core.td.call(null,G__24516,G__24517,G__24518,G__24519,G__24520));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24515) : hoplon.core.tr.call(null,G__24515));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24512,G__24513,G__24514) : hoplon.core.table.call(null,G__24512,G__24513,G__24514));
});})(G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24521 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24521) : cljs.core.deref.call(null,G__24521));
});})(con__14913__auto__,alt__14914__auto__,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24502 = (function (){var G__24522 = cljs.core.cst$kw$css;
var G__24523 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24522,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24501,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24525,G__24526,G__24524,G__24527){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24524),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24525),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24526),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24527)?(0):(1))], null);
});})(G__24522,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24501,G__24479,G__24480,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24461,x,i,y,item,G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24522,G__24523) : hoplon.core.div.call(null,G__24522,G__24523));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24501,G__24502) : hoplon.core.div.call(null,G__24493,G__24494,G__24495,G__24496,G__24497,G__24498,G__24499,G__24500,G__24501,G__24502));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24479,G__24480,G__24481) : hoplon.core.div.call(null,G__24479,G__24480,G__24481));
});})(G__24446,G__24447,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24446,G__24447,G__24448) : hoplon.core.div.call(null,G__24446,G__24447,G__24448));
})()], 0));
});
