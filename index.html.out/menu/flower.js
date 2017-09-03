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
var len__8981__auto___23966 = arguments.length;
var i__8982__auto___23967 = (0);
while(true){
if((i__8982__auto___23967 < len__8981__auto___23966)){
args__8988__auto__.push((arguments[i__8982__auto___23967]));

var G__23968 = (i__8982__auto___23967 + (1));
i__8982__auto___23967 = G__23968;
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
var G__23955 = cljs.core.cst$kw$css;
var G__23956 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23955,transition_length__$1){
return (function (G__23961,G__23962,G__23958,G__23965,G__23959,G__23963,G__23960,G__23964){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23958.cljs$core$IFn$_invoke$arity$1 ? G__23958.cljs$core$IFn$_invoke$arity$1(G__23959) : G__23958.call(null,G__23959)),cljs.core.cst$kw$bottom,(G__23958.cljs$core$IFn$_invoke$arity$1 ? G__23958.cljs$core$IFn$_invoke$arity$1(G__23959) : G__23958.call(null,G__23959)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23960),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23961)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23962;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23963.cljs$core$IFn$_invoke$arity$1 ? G__23963.cljs$core$IFn$_invoke$arity$1(G__23964) : G__23963.call(null,G__23964));
} else {
return and__7748__auto__;
}
})())?G__23965:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23955,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23957 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23955,G__23956,G__23957) : hoplon.core.div.call(null,G__23955,G__23956,G__23957));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23950){
var G__23951 = cljs.core.first(seq23950);
var seq23950__$1 = cljs.core.next(seq23950);
var G__23952 = cljs.core.first(seq23950__$1);
var seq23950__$2 = cljs.core.next(seq23950__$1);
var G__23953 = cljs.core.first(seq23950__$2);
var seq23950__$3 = cljs.core.next(seq23950__$2);
var G__23954 = cljs.core.first(seq23950__$3);
var seq23950__$4 = cljs.core.next(seq23950__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23951,G__23952,G__23953,G__23954,seq23950__$4);
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
var G__24039 = cljs.core.cst$kw$click;
var G__24040 = ((function (G__24039,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24039,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24041 = cljs.core.cst$kw$mouseenter;
var G__24042 = ((function (G__24039,G__24040,G__24041,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__24039,G__24040,G__24041,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24043 = cljs.core.cst$kw$mouseleave;
var G__24044 = ((function (G__24039,G__24040,G__24041,G__24042,G__24043,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__24039,G__24040,G__24041,G__24042,G__24043,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24045 = cljs.core.cst$kw$css;
var G__24046 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24049,G__24054,G__24051,G__24050,G__24052,G__24053,G__24048){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__24048;
if(cljs.core.truth_(and__7748__auto__)){
return G__24049;
} else {
return and__7748__auto__;
}
})())?G__24050:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24055 = (- G__24052);
return (G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24055) : G__24051.call(null,G__24055));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24053),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24054)].join(''),(G__24052 * (2)),"pointer",(1),"absolute",(G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24052) : G__24051.call(null,G__24052)),(G__24052 * (2)),(function (){var G__24056 = (- G__24052);
return (G__24051.cljs$core$IFn$_invoke$arity$1 ? G__24051.cljs$core$IFn$_invoke$arity$1(G__24056) : G__24051.call(null,G__24056));
})()]);
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__24047 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24057){
return (G__24057 / (2));
});})(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24059,G__24058){
return ((G__24058 * Math.sin((G__24059.cljs$core$IFn$_invoke$arity$1 ? G__24059.cljs$core$IFn$_invoke$arity$1((45)) : G__24059.call(null,(45))))) / (2));
});})(width,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24060){
return (G__24060 / (12));
});})(width,rotated_offset,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24062,G__24061){
return (G__24061 + (- (G__24062 / (2))));
});})(width,rotated_offset,height,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24064,G__24063){
return (G__24063 + (- (G__24064 / (2))));
});})(width,rotated_offset,height,left,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24065,G__24066){
var G__24067 = (G__24066.cljs$core$IFn$_invoke$arity$0 ? G__24066.cljs$core$IFn$_invoke$arity$0() : G__24066.call(null));
return (G__24065.cljs$core$IFn$_invoke$arity$1 ? G__24065.cljs$core$IFn$_invoke$arity$1(G__24067) : G__24065.call(null,G__24067));
});})(width,rotated_offset,height,left,top,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24070,G__24071,G__24068,G__24072,G__24069,G__24073){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24068.cljs$core$IFn$_invoke$arity$1 ? G__24068.cljs$core$IFn$_invoke$arity$1(G__24069) : G__24068.call(null,G__24069)),cljs.core.cst$kw$height,(G__24068.cljs$core$IFn$_invoke$arity$1 ? G__24068.cljs$core$IFn$_invoke$arity$1(G__24070) : G__24068.call(null,G__24070)),cljs.core.cst$kw$left,(G__24068.cljs$core$IFn$_invoke$arity$1 ? G__24068.cljs$core$IFn$_invoke$arity$1(G__24071) : G__24068.call(null,G__24071)),cljs.core.cst$kw$background_DASH_color,G__24072,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24073),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24073),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24074 = cljs.core.cst$kw$css;
var G__24075 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24074,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24082,G__24080,G__24077,G__24078,G__24079,G__24076,G__24081){
var G__24083 = G__24077;
var G__24084 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24086 = (G__24079 - ((2) * G__24080));
return (G__24078.cljs$core$IFn$_invoke$arity$1 ? G__24078.cljs$core$IFn$_invoke$arity$1(G__24086) : G__24078.call(null,G__24086));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24081)?G__24082:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24081)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24085 = (cljs.core.truth_(G__24081)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24076.cljs$core$IFn$_invoke$arity$3 ? G__24076.cljs$core$IFn$_invoke$arity$3(G__24083,G__24084,G__24085) : G__24076.call(null,G__24083,G__24084,G__24085));
});})(G__24074,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24074,G__24075) : hoplon.core.div.call(null,G__24074,G__24075));
})(),(function (){var G__24087 = cljs.core.cst$kw$css;
var G__24088 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24087,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24090,G__24091,G__24092,G__24089,G__24093){
var G__24094 = G__24090;
var G__24095 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24091.cljs$core$IFn$_invoke$arity$1 ? G__24091.cljs$core$IFn$_invoke$arity$1(G__24092) : G__24091.call(null,G__24092)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24093)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__24089.cljs$core$IFn$_invoke$arity$2 ? G__24089.cljs$core$IFn$_invoke$arity$2(G__24094,G__24095) : G__24089.call(null,G__24094,G__24095));
});})(G__24087,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24087,G__24088) : hoplon.core.div.call(null,G__24087,G__24088));
})(),(function (){var G__24096 = cljs.core.cst$kw$css;
var G__24097 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24096,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24104,G__24102,G__24099,G__24100,G__24101,G__24098,G__24103){
var G__24105 = G__24099;
var G__24106 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24108 = (G__24101 + ((2) * G__24102));
return (G__24100.cljs$core$IFn$_invoke$arity$1 ? G__24100.cljs$core$IFn$_invoke$arity$1(G__24108) : G__24100.call(null,G__24108));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24103)?G__24104:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24103)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__24107 = (cljs.core.truth_(G__24103)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24098.cljs$core$IFn$_invoke$arity$3 ? G__24098.cljs$core$IFn$_invoke$arity$3(G__24105,G__24106,G__24107) : G__24098.call(null,G__24105,G__24106,G__24107));
});})(G__24096,width,rotated_offset,height,left,top,color,default_css,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24096,G__24097) : hoplon.core.div.call(null,G__24096,G__24097));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047) : hoplon.core.div.call(null,G__24039,G__24040,G__24041,G__24042,G__24043,G__24044,G__24045,G__24046,G__24047));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24212,G__24213){
return (G__24212 / ((1) + G__24213));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24215,G__24214){
return (G__24214 * G__24215);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24217,G__24216){
return (((2) * Math.PI) / (G__24216.cljs$core$IFn$_invoke$arity$1 ? G__24216.cljs$core$IFn$_invoke$arity$1(G__24217) : G__24216.call(null,G__24217)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24222,G__24218,G__24220,G__24219,G__24221){
var G__24223 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24225 = G__24220;
var G__24226 = (i * G__24221);
return (G__24219.cljs$core$IFn$_invoke$arity$2 ? G__24219.cljs$core$IFn$_invoke$arity$2(G__24225,G__24226) : G__24219.call(null,G__24225,G__24226));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24224 = G__24222;
return (G__24218.cljs$core$IFn$_invoke$arity$2 ? G__24218.cljs$core$IFn$_invoke$arity$2(G__24223,G__24224) : G__24218.call(null,G__24223,G__24224));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24229,G__24227,G__24228){
return (G__24227 / (G__24228.cljs$core$IFn$_invoke$arity$1 ? G__24228.cljs$core$IFn$_invoke$arity$1(G__24229) : G__24228.call(null,G__24229)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24230 = cljs.core.cst$kw$css;
var G__24231 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24232 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24230,G__24231,G__24232) : hoplon.core.div.call(null,G__24230,G__24231,G__24232));
})(),(function (){var G__24233 = cljs.core.cst$kw$css;
var G__24234 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24235 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24248 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24251){
var vec__24252 = p__24251;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(0),null);
var vec__24255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24252,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24248,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24248,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24248,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24248,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24260,G__24259,G__24258){
if(cljs.core.truth_(G__24258)){
return (G__24259 * G__24260);
} else {
return (0);
}
});})(vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24261){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24261);
});})(transition_delay,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24262){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24262);
});})(transition_delay,url,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24263){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24263);
});})(transition_delay,url,text,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24264,G__24265){
var and__7748__auto__ = G__24264;
if(cljs.core.truth_(and__7748__auto__)){
return G__24265;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24266 = cljs.core.cst$kw$css;
var G__24267 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24266,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24274,G__24271,G__24275,G__24272,G__24269,G__24270,G__24273){
var G__24276 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24270),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24271),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24272),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24277 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24273)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24274),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24275),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24269.cljs$core$IFn$_invoke$arity$2 ? G__24269.cljs$core$IFn$_invoke$arity$2(G__24276,G__24277) : G__24269.call(null,G__24276,G__24277));
});})(G__24266,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24268 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24278,G__24279){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24278)?"black":G__24279)], null);
});})(G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24280 = cljs.core.cst$kw$mouseenter;
var G__24281 = ((function (G__24280,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24280,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24282 = cljs.core.cst$kw$mouseleave;
var G__24283 = ((function (G__24280,G__24281,G__24282,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24280,G__24281,G__24282,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24284 = cljs.core.cst$kw$click;
var G__24285 = ((function (G__24280,G__24281,G__24282,G__24283,G__24284,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24280,G__24281,G__24282,G__24283,G__24284,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24280,G__24281,G__24282,G__24283,G__24284,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24280,G__24281,G__24282,G__24283,G__24284,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24286 = cljs.core.cst$kw$css;
var G__24287 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24295,G__24293,G__24292,G__24291,G__24290,G__24294,G__24296){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24290)?G__24291:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24297 = (- G__24293);
return (G__24292.cljs$core$IFn$_invoke$arity$1 ? G__24292.cljs$core$IFn$_invoke$arity$1(G__24297) : G__24292.call(null,G__24297));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24294 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24295)].join(''),"hidden","white",((2) * G__24293),"pointer",(cljs.core.truth_(G__24296)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24296),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24292.cljs$core$IFn$_invoke$arity$1 ? G__24292.cljs$core$IFn$_invoke$arity$1(G__24293) : G__24292.call(null,G__24293)),"contain",((2) * G__24293),(function (){var G__24298 = (- G__24293);
return (G__24292.cljs$core$IFn$_invoke$arity$1 ? G__24292.cljs$core$IFn$_invoke$arity$1(G__24298) : G__24292.call(null,G__24298));
})()]);
});})(G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24288 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24299 = cljs.core.cst$kw$css;
var G__24300 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24301 = (function (){var G__24302 = (function (){var G__24303 = cljs.core.cst$kw$valign;
var G__24304 = "center";
var G__24305 = cljs.core.cst$kw$css;
var G__24306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24307 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24303,G__24304,G__24305,G__24306,G__24307) : hoplon.core.td.call(null,G__24303,G__24304,G__24305,G__24306,G__24307));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24302) : hoplon.core.tr.call(null,G__24302));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24299,G__24300,G__24301) : hoplon.core.table.call(null,G__24299,G__24300,G__24301));
});})(G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24308 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24308) : cljs.core.deref.call(null,G__24308));
});})(con__14913__auto__,alt__14914__auto__,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24289 = (function (){var G__24309 = cljs.core.cst$kw$css;
var G__24310 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24309,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24312,G__24313,G__24311,G__24314){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24311),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24312),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24313),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24314)?(0):(1))], null);
});})(G__24309,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24266,G__24267,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24248,x,i,y,item,G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24309,G__24310) : hoplon.core.div.call(null,G__24309,G__24310));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24289) : hoplon.core.div.call(null,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287,G__24288,G__24289));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24266,G__24267,G__24268) : hoplon.core.div.call(null,G__24266,G__24267,G__24268));
});})(G__24233,G__24234,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24233,G__24234,G__24235) : hoplon.core.div.call(null,G__24233,G__24234,G__24235));
})()], 0));
});
