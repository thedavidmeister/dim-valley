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
var len__8981__auto___24208 = arguments.length;
var i__8982__auto___24209 = (0);
while(true){
if((i__8982__auto___24209 < len__8981__auto___24208)){
args__8988__auto__.push((arguments[i__8982__auto___24209]));

var G__24210 = (i__8982__auto___24209 + (1));
i__8982__auto___24209 = G__24210;
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
var G__24197 = cljs.core.cst$kw$css;
var G__24198 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24197,transition_length__$1){
return (function (G__24203,G__24204,G__24200,G__24207,G__24201,G__24205,G__24202,G__24206){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24200.cljs$core$IFn$_invoke$arity$1 ? G__24200.cljs$core$IFn$_invoke$arity$1(G__24201) : G__24200.call(null,G__24201)),cljs.core.cst$kw$bottom,(G__24200.cljs$core$IFn$_invoke$arity$1 ? G__24200.cljs$core$IFn$_invoke$arity$1(G__24201) : G__24200.call(null,G__24201)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24202),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24203)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24204;
if(cljs.core.truth_(and__7748__auto__)){
return (G__24205.cljs$core$IFn$_invoke$arity$1 ? G__24205.cljs$core$IFn$_invoke$arity$1(G__24206) : G__24205.call(null,G__24206));
} else {
return and__7748__auto__;
}
})())?G__24207:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24197,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__24199 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24197,G__24198,G__24199) : hoplon.core.div.call(null,G__24197,G__24198,G__24199));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24192){
var G__24193 = cljs.core.first(seq24192);
var seq24192__$1 = cljs.core.next(seq24192);
var G__24194 = cljs.core.first(seq24192__$1);
var seq24192__$2 = cljs.core.next(seq24192__$1);
var G__24195 = cljs.core.first(seq24192__$2);
var seq24192__$3 = cljs.core.next(seq24192__$2);
var G__24196 = cljs.core.first(seq24192__$3);
var seq24192__$4 = cljs.core.next(seq24192__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24193,G__24194,G__24195,G__24196,seq24192__$4);
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
var G__24281 = cljs.core.cst$kw$click;
var G__24282 = ((function (G__24281,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24281,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24283 = cljs.core.cst$kw$mouseenter;
var G__24284 = ((function (G__24281,G__24282,G__24283,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__24281,G__24282,G__24283,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24285 = cljs.core.cst$kw$mouseleave;
var G__24286 = ((function (G__24281,G__24282,G__24283,G__24284,G__24285,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__24281,G__24282,G__24283,G__24284,G__24285,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24287 = cljs.core.cst$kw$css;
var G__24288 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24291,G__24296,G__24293,G__24292,G__24294,G__24295,G__24290){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24290;
if(cljs.core.truth_(and__7748__auto__)){
return G__24291;
} else {
return and__7748__auto__;
}
})())?G__24292:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24297 = (- G__24294);
return (G__24293.cljs$core$IFn$_invoke$arity$1 ? G__24293.cljs$core$IFn$_invoke$arity$1(G__24297) : G__24293.call(null,G__24297));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24295),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24296)].join(''),(G__24294 * (2)),"pointer",(1),"absolute",(G__24293.cljs$core$IFn$_invoke$arity$1 ? G__24293.cljs$core$IFn$_invoke$arity$1(G__24294) : G__24293.call(null,G__24294)),(G__24294 * (2)),(function (){var G__24298 = (- G__24294);
return (G__24293.cljs$core$IFn$_invoke$arity$1 ? G__24293.cljs$core$IFn$_invoke$arity$1(G__24298) : G__24293.call(null,G__24298));
})()]);
});})(G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__24289 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24299){
return (G__24299 / (2));
});})(G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24301,G__24300){
return ((G__24300 * Math.sin((G__24301.cljs$core$IFn$_invoke$arity$1 ? G__24301.cljs$core$IFn$_invoke$arity$1((45)) : G__24301.call(null,(45))))) / (2));
});})(width,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24302){
return (G__24302 / (12));
});})(width,rotated_offset,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24304,G__24303){
return (G__24303 + (- (G__24304 / (2))));
});})(width,rotated_offset,height,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24306,G__24305){
return (G__24305 + (- (G__24306 / (2))));
});})(width,rotated_offset,height,left,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24307,G__24308){
var G__24309 = (G__24308.cljs$core$IFn$_invoke$arity$0 ? G__24308.cljs$core$IFn$_invoke$arity$0() : G__24308.call(null));
return (G__24307.cljs$core$IFn$_invoke$arity$1 ? G__24307.cljs$core$IFn$_invoke$arity$1(G__24309) : G__24307.call(null,G__24309));
});})(width,rotated_offset,height,left,top,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24312,G__24313,G__24310,G__24314,G__24311,G__24315){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24310.cljs$core$IFn$_invoke$arity$1 ? G__24310.cljs$core$IFn$_invoke$arity$1(G__24311) : G__24310.call(null,G__24311)),cljs.core.cst$kw$height,(G__24310.cljs$core$IFn$_invoke$arity$1 ? G__24310.cljs$core$IFn$_invoke$arity$1(G__24312) : G__24310.call(null,G__24312)),cljs.core.cst$kw$left,(G__24310.cljs$core$IFn$_invoke$arity$1 ? G__24310.cljs$core$IFn$_invoke$arity$1(G__24313) : G__24310.call(null,G__24313)),cljs.core.cst$kw$background_DASH_color,G__24314,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24315),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24315),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24316 = cljs.core.cst$kw$css;
var G__24317 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24316,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24324,G__24322,G__24319,G__24320,G__24321,G__24318,G__24323){
var G__24325 = G__24319;
var G__24326 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24328 = (G__24321 - ((2) * G__24322));
return (G__24320.cljs$core$IFn$_invoke$arity$1 ? G__24320.cljs$core$IFn$_invoke$arity$1(G__24328) : G__24320.call(null,G__24328));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24323)?G__24324:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24323)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24327 = (cljs.core.truth_(G__24323)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24318.cljs$core$IFn$_invoke$arity$3 ? G__24318.cljs$core$IFn$_invoke$arity$3(G__24325,G__24326,G__24327) : G__24318.call(null,G__24325,G__24326,G__24327));
});})(G__24316,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24316,G__24317) : hoplon.core.div.call(null,G__24316,G__24317));
})(),(function (){var G__24329 = cljs.core.cst$kw$css;
var G__24330 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24329,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24332,G__24333,G__24334,G__24331,G__24335){
var G__24336 = G__24332;
var G__24337 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24333.cljs$core$IFn$_invoke$arity$1 ? G__24333.cljs$core$IFn$_invoke$arity$1(G__24334) : G__24333.call(null,G__24334)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24335)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__24331.cljs$core$IFn$_invoke$arity$2 ? G__24331.cljs$core$IFn$_invoke$arity$2(G__24336,G__24337) : G__24331.call(null,G__24336,G__24337));
});})(G__24329,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24329,G__24330) : hoplon.core.div.call(null,G__24329,G__24330));
})(),(function (){var G__24338 = cljs.core.cst$kw$css;
var G__24339 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24338,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24346,G__24344,G__24341,G__24342,G__24343,G__24340,G__24345){
var G__24347 = G__24341;
var G__24348 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24350 = (G__24343 + ((2) * G__24344));
return (G__24342.cljs$core$IFn$_invoke$arity$1 ? G__24342.cljs$core$IFn$_invoke$arity$1(G__24350) : G__24342.call(null,G__24350));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24345)?G__24346:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24345)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24349 = (cljs.core.truth_(G__24345)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24340.cljs$core$IFn$_invoke$arity$3 ? G__24340.cljs$core$IFn$_invoke$arity$3(G__24347,G__24348,G__24349) : G__24340.call(null,G__24347,G__24348,G__24349));
});})(G__24338,width,rotated_offset,height,left,top,color,default_css,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24338,G__24339) : hoplon.core.div.call(null,G__24338,G__24339));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24289) : hoplon.core.div.call(null,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24289));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24454,G__24455){
return (G__24454 / ((1) + G__24455));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24457,G__24456){
return (G__24456 * G__24457);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24459,G__24458){
return (((2) * Math.PI) / (G__24458.cljs$core$IFn$_invoke$arity$1 ? G__24458.cljs$core$IFn$_invoke$arity$1(G__24459) : G__24458.call(null,G__24459)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24464,G__24460,G__24462,G__24461,G__24463){
var G__24465 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24467 = G__24462;
var G__24468 = (i * G__24463);
return (G__24461.cljs$core$IFn$_invoke$arity$2 ? G__24461.cljs$core$IFn$_invoke$arity$2(G__24467,G__24468) : G__24461.call(null,G__24467,G__24468));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24466 = G__24464;
return (G__24460.cljs$core$IFn$_invoke$arity$2 ? G__24460.cljs$core$IFn$_invoke$arity$2(G__24465,G__24466) : G__24460.call(null,G__24465,G__24466));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24471,G__24469,G__24470){
return (G__24469 / (G__24470.cljs$core$IFn$_invoke$arity$1 ? G__24470.cljs$core$IFn$_invoke$arity$1(G__24471) : G__24470.call(null,G__24471)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24472 = cljs.core.cst$kw$css;
var G__24473 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24474 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24472,G__24473,G__24474) : hoplon.core.div.call(null,G__24472,G__24473,G__24474));
})(),(function (){var G__24475 = cljs.core.cst$kw$css;
var G__24476 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24477 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24490 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24493){
var vec__24494 = p__24493;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24494,(0),null);
var vec__24497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24494,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24497,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24497,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24494,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24490,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24502,G__24501,G__24500){
if(cljs.core.truth_(G__24500)){
return (G__24501 * G__24502);
} else {
return (0);
}
});})(vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24503){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24503);
});})(transition_delay,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24504){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24504);
});})(transition_delay,url,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24505){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24505);
});})(transition_delay,url,text,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24506,G__24507){
var and__7748__auto__ = G__24506;
if(cljs.core.truth_(and__7748__auto__)){
return G__24507;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24508 = cljs.core.cst$kw$css;
var G__24509 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24508,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24516,G__24513,G__24517,G__24514,G__24511,G__24512,G__24515){
var G__24518 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24512),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24513),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24514),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24519 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24515)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24516),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24517),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24511.cljs$core$IFn$_invoke$arity$2 ? G__24511.cljs$core$IFn$_invoke$arity$2(G__24518,G__24519) : G__24511.call(null,G__24518,G__24519));
});})(G__24508,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24510 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24520,G__24521){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24520)?"black":G__24521)], null);
});})(G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24522 = cljs.core.cst$kw$mouseenter;
var G__24523 = ((function (G__24522,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24522,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24524 = cljs.core.cst$kw$mouseleave;
var G__24525 = ((function (G__24522,G__24523,G__24524,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24522,G__24523,G__24524,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24526 = cljs.core.cst$kw$click;
var G__24527 = ((function (G__24522,G__24523,G__24524,G__24525,G__24526,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24522,G__24523,G__24524,G__24525,G__24526,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24522,G__24523,G__24524,G__24525,G__24526,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24522,G__24523,G__24524,G__24525,G__24526,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24528 = cljs.core.cst$kw$css;
var G__24529 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24537,G__24535,G__24534,G__24533,G__24532,G__24536,G__24538){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24532)?G__24533:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24539 = (- G__24535);
return (G__24534.cljs$core$IFn$_invoke$arity$1 ? G__24534.cljs$core$IFn$_invoke$arity$1(G__24539) : G__24534.call(null,G__24539));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24536 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24537)].join(''),"hidden","white",((2) * G__24535),"pointer",(cljs.core.truth_(G__24538)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24538),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24534.cljs$core$IFn$_invoke$arity$1 ? G__24534.cljs$core$IFn$_invoke$arity$1(G__24535) : G__24534.call(null,G__24535)),"contain",((2) * G__24535),(function (){var G__24540 = (- G__24535);
return (G__24534.cljs$core$IFn$_invoke$arity$1 ? G__24534.cljs$core$IFn$_invoke$arity$1(G__24540) : G__24534.call(null,G__24540));
})()]);
});})(G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24530 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24541 = cljs.core.cst$kw$css;
var G__24542 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24543 = (function (){var G__24544 = (function (){var G__24545 = cljs.core.cst$kw$valign;
var G__24546 = "center";
var G__24547 = cljs.core.cst$kw$css;
var G__24548 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24549 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24545,G__24546,G__24547,G__24548,G__24549) : hoplon.core.td.call(null,G__24545,G__24546,G__24547,G__24548,G__24549));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24544) : hoplon.core.tr.call(null,G__24544));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24541,G__24542,G__24543) : hoplon.core.table.call(null,G__24541,G__24542,G__24543));
});})(G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24550 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24550) : cljs.core.deref.call(null,G__24550));
});})(con__14913__auto__,alt__14914__auto__,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24531 = (function (){var G__24551 = cljs.core.cst$kw$css;
var G__24552 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24551,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24530,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24554,G__24555,G__24553,G__24556){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24553),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24554),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24555),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24556)?(0):(1))], null);
});})(G__24551,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24530,G__24508,G__24509,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24490,x,i,y,item,G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24551,G__24552) : hoplon.core.div.call(null,G__24551,G__24552));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24530,G__24531) : hoplon.core.div.call(null,G__24522,G__24523,G__24524,G__24525,G__24526,G__24527,G__24528,G__24529,G__24530,G__24531));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24508,G__24509,G__24510) : hoplon.core.div.call(null,G__24508,G__24509,G__24510));
});})(G__24475,G__24476,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24475,G__24476,G__24477) : hoplon.core.div.call(null,G__24475,G__24476,G__24477));
})()], 0));
});
