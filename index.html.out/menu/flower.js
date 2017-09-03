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
var len__8981__auto___23848 = arguments.length;
var i__8982__auto___23849 = (0);
while(true){
if((i__8982__auto___23849 < len__8981__auto___23848)){
args__8988__auto__.push((arguments[i__8982__auto___23849]));

var G__23850 = (i__8982__auto___23849 + (1));
i__8982__auto___23849 = G__23850;
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
var G__23837 = cljs.core.cst$kw$css;
var G__23838 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23837,transition_length__$1){
return (function (G__23843,G__23844,G__23840,G__23847,G__23841,G__23845,G__23842,G__23846){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23840.cljs$core$IFn$_invoke$arity$1 ? G__23840.cljs$core$IFn$_invoke$arity$1(G__23841) : G__23840.call(null,G__23841)),cljs.core.cst$kw$bottom,(G__23840.cljs$core$IFn$_invoke$arity$1 ? G__23840.cljs$core$IFn$_invoke$arity$1(G__23841) : G__23840.call(null,G__23841)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23842),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23843)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23844;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23845.cljs$core$IFn$_invoke$arity$1 ? G__23845.cljs$core$IFn$_invoke$arity$1(G__23846) : G__23845.call(null,G__23846));
} else {
return and__7748__auto__;
}
})())?G__23847:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23837,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23839 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23837,G__23838,G__23839) : hoplon.core.div.call(null,G__23837,G__23838,G__23839));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23832){
var G__23833 = cljs.core.first(seq23832);
var seq23832__$1 = cljs.core.next(seq23832);
var G__23834 = cljs.core.first(seq23832__$1);
var seq23832__$2 = cljs.core.next(seq23832__$1);
var G__23835 = cljs.core.first(seq23832__$2);
var seq23832__$3 = cljs.core.next(seq23832__$2);
var G__23836 = cljs.core.first(seq23832__$3);
var seq23832__$4 = cljs.core.next(seq23832__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23833,G__23834,G__23835,G__23836,seq23832__$4);
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
var G__23921 = cljs.core.cst$kw$click;
var G__23922 = ((function (G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23923 = cljs.core.cst$kw$mouseenter;
var G__23924 = ((function (G__23921,G__23922,G__23923,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23921,G__23922,G__23923,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23925 = cljs.core.cst$kw$mouseleave;
var G__23926 = ((function (G__23921,G__23922,G__23923,G__23924,G__23925,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23921,G__23922,G__23923,G__23924,G__23925,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23927 = cljs.core.cst$kw$css;
var G__23928 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23931,G__23936,G__23933,G__23932,G__23934,G__23935,G__23930){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23930;
if(cljs.core.truth_(and__7748__auto__)){
return G__23931;
} else {
return and__7748__auto__;
}
})())?G__23932:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23937 = (- G__23934);
return (G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23937) : G__23933.call(null,G__23937));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23935),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23936)].join(''),(G__23934 * (2)),"pointer",(1),"absolute",(G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23934) : G__23933.call(null,G__23934)),(G__23934 * (2)),(function (){var G__23938 = (- G__23934);
return (G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23938) : G__23933.call(null,G__23938));
})()]);
});})(G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23929 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23939){
return (G__23939 / (2));
});})(G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23941,G__23940){
return ((G__23940 * Math.sin((G__23941.cljs$core$IFn$_invoke$arity$1 ? G__23941.cljs$core$IFn$_invoke$arity$1((45)) : G__23941.call(null,(45))))) / (2));
});})(width,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23942){
return (G__23942 / (12));
});})(width,rotated_offset,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23944,G__23943){
return (G__23943 + (- (G__23944 / (2))));
});})(width,rotated_offset,height,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23946,G__23945){
return (G__23945 + (- (G__23946 / (2))));
});})(width,rotated_offset,height,left,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23947,G__23948){
var G__23949 = (G__23948.cljs$core$IFn$_invoke$arity$0 ? G__23948.cljs$core$IFn$_invoke$arity$0() : G__23948.call(null));
return (G__23947.cljs$core$IFn$_invoke$arity$1 ? G__23947.cljs$core$IFn$_invoke$arity$1(G__23949) : G__23947.call(null,G__23949));
});})(width,rotated_offset,height,left,top,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23952,G__23953,G__23950,G__23954,G__23951,G__23955){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23950.cljs$core$IFn$_invoke$arity$1 ? G__23950.cljs$core$IFn$_invoke$arity$1(G__23951) : G__23950.call(null,G__23951)),cljs.core.cst$kw$height,(G__23950.cljs$core$IFn$_invoke$arity$1 ? G__23950.cljs$core$IFn$_invoke$arity$1(G__23952) : G__23950.call(null,G__23952)),cljs.core.cst$kw$left,(G__23950.cljs$core$IFn$_invoke$arity$1 ? G__23950.cljs$core$IFn$_invoke$arity$1(G__23953) : G__23950.call(null,G__23953)),cljs.core.cst$kw$background_DASH_color,G__23954,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23955),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23955),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23956 = cljs.core.cst$kw$css;
var G__23957 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23956,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23964,G__23962,G__23959,G__23960,G__23961,G__23958,G__23963){
var G__23965 = G__23959;
var G__23966 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23968 = (G__23961 - ((2) * G__23962));
return (G__23960.cljs$core$IFn$_invoke$arity$1 ? G__23960.cljs$core$IFn$_invoke$arity$1(G__23968) : G__23960.call(null,G__23968));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23963)?G__23964:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23963)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23967 = (cljs.core.truth_(G__23963)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23958.cljs$core$IFn$_invoke$arity$3 ? G__23958.cljs$core$IFn$_invoke$arity$3(G__23965,G__23966,G__23967) : G__23958.call(null,G__23965,G__23966,G__23967));
});})(G__23956,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23956,G__23957) : hoplon.core.div.call(null,G__23956,G__23957));
})(),(function (){var G__23969 = cljs.core.cst$kw$css;
var G__23970 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23969,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23972,G__23973,G__23974,G__23971,G__23975){
var G__23976 = G__23972;
var G__23977 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23973.cljs$core$IFn$_invoke$arity$1 ? G__23973.cljs$core$IFn$_invoke$arity$1(G__23974) : G__23973.call(null,G__23974)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23975)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23971.cljs$core$IFn$_invoke$arity$2 ? G__23971.cljs$core$IFn$_invoke$arity$2(G__23976,G__23977) : G__23971.call(null,G__23976,G__23977));
});})(G__23969,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23969,G__23970) : hoplon.core.div.call(null,G__23969,G__23970));
})(),(function (){var G__23978 = cljs.core.cst$kw$css;
var G__23979 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23978,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23986,G__23984,G__23981,G__23982,G__23983,G__23980,G__23985){
var G__23987 = G__23981;
var G__23988 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23990 = (G__23983 + ((2) * G__23984));
return (G__23982.cljs$core$IFn$_invoke$arity$1 ? G__23982.cljs$core$IFn$_invoke$arity$1(G__23990) : G__23982.call(null,G__23990));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23985)?G__23986:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23985)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23989 = (cljs.core.truth_(G__23985)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23980.cljs$core$IFn$_invoke$arity$3 ? G__23980.cljs$core$IFn$_invoke$arity$3(G__23987,G__23988,G__23989) : G__23980.call(null,G__23987,G__23988,G__23989));
});})(G__23978,width,rotated_offset,height,left,top,color,default_css,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23978,G__23979) : hoplon.core.div.call(null,G__23978,G__23979));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929) : hoplon.core.div.call(null,G__23921,G__23922,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24094,G__24095){
return (G__24094 / ((1) + G__24095));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24097,G__24096){
return (G__24096 * G__24097);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24099,G__24098){
return (((2) * Math.PI) / (G__24098.cljs$core$IFn$_invoke$arity$1 ? G__24098.cljs$core$IFn$_invoke$arity$1(G__24099) : G__24098.call(null,G__24099)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24104,G__24100,G__24102,G__24101,G__24103){
var G__24105 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24107 = G__24102;
var G__24108 = (i * G__24103);
return (G__24101.cljs$core$IFn$_invoke$arity$2 ? G__24101.cljs$core$IFn$_invoke$arity$2(G__24107,G__24108) : G__24101.call(null,G__24107,G__24108));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24106 = G__24104;
return (G__24100.cljs$core$IFn$_invoke$arity$2 ? G__24100.cljs$core$IFn$_invoke$arity$2(G__24105,G__24106) : G__24100.call(null,G__24105,G__24106));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24111,G__24109,G__24110){
return (G__24109 / (G__24110.cljs$core$IFn$_invoke$arity$1 ? G__24110.cljs$core$IFn$_invoke$arity$1(G__24111) : G__24110.call(null,G__24111)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24112 = cljs.core.cst$kw$css;
var G__24113 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24114 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24112,G__24113,G__24114) : hoplon.core.div.call(null,G__24112,G__24113,G__24114));
})(),(function (){var G__24115 = cljs.core.cst$kw$css;
var G__24116 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24117 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__15299__auto__){
var vec__24130 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24133){
var vec__24134 = p__24133;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134,(0),null);
var vec__24137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24137,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24134,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__15299__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24142,G__24141,G__24140){
if(cljs.core.truth_(G__24140)){
return (G__24141 * G__24142);
} else {
return (0);
}
});})(vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24143){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24143);
});})(transition_delay,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24144){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24144);
});})(transition_delay,url,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24145){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24145);
});})(transition_delay,url,text,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24146,G__24147){
var and__7748__auto__ = G__24146;
if(cljs.core.truth_(and__7748__auto__)){
return G__24147;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24148 = cljs.core.cst$kw$css;
var G__24149 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24148,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24156,G__24153,G__24157,G__24154,G__24151,G__24152,G__24155){
var G__24158 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24152),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24153),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24154),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24159 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24155)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24156),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24157),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24151.cljs$core$IFn$_invoke$arity$2 ? G__24151.cljs$core$IFn$_invoke$arity$2(G__24158,G__24159) : G__24151.call(null,G__24158,G__24159));
});})(G__24148,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24150 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24160,G__24161){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24160)?"black":G__24161)], null);
});})(G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24162 = cljs.core.cst$kw$mouseenter;
var G__24163 = ((function (G__24162,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24162,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24164 = cljs.core.cst$kw$mouseleave;
var G__24165 = ((function (G__24162,G__24163,G__24164,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24162,G__24163,G__24164,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24166 = cljs.core.cst$kw$click;
var G__24167 = ((function (G__24162,G__24163,G__24164,G__24165,G__24166,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24162,G__24163,G__24164,G__24165,G__24166,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24162,G__24163,G__24164,G__24165,G__24166,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24162,G__24163,G__24164,G__24165,G__24166,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24168 = cljs.core.cst$kw$css;
var G__24169 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24177,G__24175,G__24174,G__24173,G__24172,G__24176,G__24178){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24172)?G__24173:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24179 = (- G__24175);
return (G__24174.cljs$core$IFn$_invoke$arity$1 ? G__24174.cljs$core$IFn$_invoke$arity$1(G__24179) : G__24174.call(null,G__24179));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24176 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24177)].join(''),"hidden","white",((2) * G__24175),"pointer",(cljs.core.truth_(G__24178)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24178),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24174.cljs$core$IFn$_invoke$arity$1 ? G__24174.cljs$core$IFn$_invoke$arity$1(G__24175) : G__24174.call(null,G__24175)),"contain",((2) * G__24175),(function (){var G__24180 = (- G__24175);
return (G__24174.cljs$core$IFn$_invoke$arity$1 ? G__24174.cljs$core$IFn$_invoke$arity$1(G__24180) : G__24174.call(null,G__24180));
})()]);
});})(G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24170 = (function (){var con__15309__auto__ = (new cljs.core.Delay(((function (G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24181 = cljs.core.cst$kw$css;
var G__24182 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24183 = (function (){var G__24184 = (function (){var G__24185 = cljs.core.cst$kw$valign;
var G__24186 = "center";
var G__24187 = cljs.core.cst$kw$css;
var G__24188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24189 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24185,G__24186,G__24187,G__24188,G__24189) : hoplon.core.td.call(null,G__24185,G__24186,G__24187,G__24188,G__24189));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24184) : hoplon.core.tr.call(null,G__24184));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24181,G__24182,G__24183) : hoplon.core.table.call(null,G__24181,G__24182,G__24183));
});})(G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__15310__auto__ = (new cljs.core.Delay(((function (con__15309__auto__,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__15309__auto__,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__15311__auto__ = ((function (con__15309__auto__,alt__15310__auto__,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__15312__auto__){
var G__24190 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__15312__auto__)?con__15309__auto__:alt__15310__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24190) : cljs.core.deref.call(null,G__24190));
});})(con__15309__auto__,alt__15310__auto__,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__15311__auto__).call(null,text);
})();
var G__24171 = (function (){var G__24191 = cljs.core.cst$kw$css;
var G__24192 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24191,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24194,G__24195,G__24193,G__24196){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24193),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24194),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24195),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24196)?(0):(1))], null);
});})(G__24191,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24148,G__24149,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24130,x,i,y,item,G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24191,G__24192) : hoplon.core.div.call(null,G__24191,G__24192));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171) : hoplon.core.div.call(null,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24148,G__24149,G__24150) : hoplon.core.div.call(null,G__24148,G__24149,G__24150));
});})(G__24115,G__24116,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24115,G__24116,G__24117) : hoplon.core.div.call(null,G__24115,G__24116,G__24117));
})()], 0));
});
