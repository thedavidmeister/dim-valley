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
var len__8981__auto___23841 = arguments.length;
var i__8982__auto___23842 = (0);
while(true){
if((i__8982__auto___23842 < len__8981__auto___23841)){
args__8988__auto__.push((arguments[i__8982__auto___23842]));

var G__23843 = (i__8982__auto___23842 + (1));
i__8982__auto___23842 = G__23843;
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
var G__23830 = cljs.core.cst$kw$css;
var G__23831 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23830,transition_length__$1){
return (function (G__23836,G__23837,G__23833,G__23840,G__23834,G__23838,G__23835,G__23839){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23833.cljs$core$IFn$_invoke$arity$1 ? G__23833.cljs$core$IFn$_invoke$arity$1(G__23834) : G__23833.call(null,G__23834)),cljs.core.cst$kw$bottom,(G__23833.cljs$core$IFn$_invoke$arity$1 ? G__23833.cljs$core$IFn$_invoke$arity$1(G__23834) : G__23833.call(null,G__23834)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23835),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23836)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23837;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23838.cljs$core$IFn$_invoke$arity$1 ? G__23838.cljs$core$IFn$_invoke$arity$1(G__23839) : G__23838.call(null,G__23839));
} else {
return and__7748__auto__;
}
})())?G__23840:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23830,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23832 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23830,G__23831,G__23832) : hoplon.core.div.call(null,G__23830,G__23831,G__23832));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23825){
var G__23826 = cljs.core.first(seq23825);
var seq23825__$1 = cljs.core.next(seq23825);
var G__23827 = cljs.core.first(seq23825__$1);
var seq23825__$2 = cljs.core.next(seq23825__$1);
var G__23828 = cljs.core.first(seq23825__$2);
var seq23825__$3 = cljs.core.next(seq23825__$2);
var G__23829 = cljs.core.first(seq23825__$3);
var seq23825__$4 = cljs.core.next(seq23825__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23826,G__23827,G__23828,G__23829,seq23825__$4);
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
var G__23914 = cljs.core.cst$kw$click;
var G__23915 = ((function (G__23914,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23914,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23916 = cljs.core.cst$kw$mouseenter;
var G__23917 = ((function (G__23914,G__23915,G__23916,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23914,G__23915,G__23916,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23918 = cljs.core.cst$kw$mouseleave;
var G__23919 = ((function (G__23914,G__23915,G__23916,G__23917,G__23918,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23914,G__23915,G__23916,G__23917,G__23918,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23920 = cljs.core.cst$kw$css;
var G__23921 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23924,G__23929,G__23926,G__23925,G__23927,G__23928,G__23923){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23923;
if(cljs.core.truth_(and__7748__auto__)){
return G__23924;
} else {
return and__7748__auto__;
}
})())?G__23925:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23930 = (- G__23927);
return (G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23930) : G__23926.call(null,G__23930));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23928),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23929)].join(''),(G__23927 * (2)),"pointer",(1),"absolute",(G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23927) : G__23926.call(null,G__23927)),(G__23927 * (2)),(function (){var G__23931 = (- G__23927);
return (G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23931) : G__23926.call(null,G__23931));
})()]);
});})(G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23922 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23932){
return (G__23932 / (2));
});})(G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23934,G__23933){
return ((G__23933 * Math.sin((G__23934.cljs$core$IFn$_invoke$arity$1 ? G__23934.cljs$core$IFn$_invoke$arity$1((45)) : G__23934.call(null,(45))))) / (2));
});})(width,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23935){
return (G__23935 / (12));
});})(width,rotated_offset,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23937,G__23936){
return (G__23936 + (- (G__23937 / (2))));
});})(width,rotated_offset,height,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23939,G__23938){
return (G__23938 + (- (G__23939 / (2))));
});})(width,rotated_offset,height,left,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23940,G__23941){
var G__23942 = (G__23941.cljs$core$IFn$_invoke$arity$0 ? G__23941.cljs$core$IFn$_invoke$arity$0() : G__23941.call(null));
return (G__23940.cljs$core$IFn$_invoke$arity$1 ? G__23940.cljs$core$IFn$_invoke$arity$1(G__23942) : G__23940.call(null,G__23942));
});})(width,rotated_offset,height,left,top,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23945,G__23946,G__23943,G__23947,G__23944,G__23948){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23943.cljs$core$IFn$_invoke$arity$1 ? G__23943.cljs$core$IFn$_invoke$arity$1(G__23944) : G__23943.call(null,G__23944)),cljs.core.cst$kw$height,(G__23943.cljs$core$IFn$_invoke$arity$1 ? G__23943.cljs$core$IFn$_invoke$arity$1(G__23945) : G__23943.call(null,G__23945)),cljs.core.cst$kw$left,(G__23943.cljs$core$IFn$_invoke$arity$1 ? G__23943.cljs$core$IFn$_invoke$arity$1(G__23946) : G__23943.call(null,G__23946)),cljs.core.cst$kw$background_DASH_color,G__23947,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23948),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23948),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23949 = cljs.core.cst$kw$css;
var G__23950 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23949,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23957,G__23955,G__23952,G__23953,G__23954,G__23951,G__23956){
var G__23958 = G__23952;
var G__23959 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23961 = (G__23954 - ((2) * G__23955));
return (G__23953.cljs$core$IFn$_invoke$arity$1 ? G__23953.cljs$core$IFn$_invoke$arity$1(G__23961) : G__23953.call(null,G__23961));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23956)?G__23957:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23956)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23960 = (cljs.core.truth_(G__23956)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23951.cljs$core$IFn$_invoke$arity$3 ? G__23951.cljs$core$IFn$_invoke$arity$3(G__23958,G__23959,G__23960) : G__23951.call(null,G__23958,G__23959,G__23960));
});})(G__23949,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23949,G__23950) : hoplon.core.div.call(null,G__23949,G__23950));
})(),(function (){var G__23962 = cljs.core.cst$kw$css;
var G__23963 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23962,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23965,G__23966,G__23967,G__23964,G__23968){
var G__23969 = G__23965;
var G__23970 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23966.cljs$core$IFn$_invoke$arity$1 ? G__23966.cljs$core$IFn$_invoke$arity$1(G__23967) : G__23966.call(null,G__23967)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23968)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23964.cljs$core$IFn$_invoke$arity$2 ? G__23964.cljs$core$IFn$_invoke$arity$2(G__23969,G__23970) : G__23964.call(null,G__23969,G__23970));
});})(G__23962,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23962,G__23963) : hoplon.core.div.call(null,G__23962,G__23963));
})(),(function (){var G__23971 = cljs.core.cst$kw$css;
var G__23972 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23971,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23979,G__23977,G__23974,G__23975,G__23976,G__23973,G__23978){
var G__23980 = G__23974;
var G__23981 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23983 = (G__23976 + ((2) * G__23977));
return (G__23975.cljs$core$IFn$_invoke$arity$1 ? G__23975.cljs$core$IFn$_invoke$arity$1(G__23983) : G__23975.call(null,G__23983));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23978)?G__23979:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23978)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23982 = (cljs.core.truth_(G__23978)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23973.cljs$core$IFn$_invoke$arity$3 ? G__23973.cljs$core$IFn$_invoke$arity$3(G__23980,G__23981,G__23982) : G__23973.call(null,G__23980,G__23981,G__23982));
});})(G__23971,width,rotated_offset,height,left,top,color,default_css,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23971,G__23972) : hoplon.core.div.call(null,G__23971,G__23972));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,G__23922) : hoplon.core.div.call(null,G__23914,G__23915,G__23916,G__23917,G__23918,G__23919,G__23920,G__23921,G__23922));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24087,G__24088){
return (G__24087 / ((1) + G__24088));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24090,G__24089){
return (G__24089 * G__24090);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24092,G__24091){
return (((2) * Math.PI) / (G__24091.cljs$core$IFn$_invoke$arity$1 ? G__24091.cljs$core$IFn$_invoke$arity$1(G__24092) : G__24091.call(null,G__24092)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24097,G__24093,G__24095,G__24094,G__24096){
var G__24098 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24100 = G__24095;
var G__24101 = (i * G__24096);
return (G__24094.cljs$core$IFn$_invoke$arity$2 ? G__24094.cljs$core$IFn$_invoke$arity$2(G__24100,G__24101) : G__24094.call(null,G__24100,G__24101));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24099 = G__24097;
return (G__24093.cljs$core$IFn$_invoke$arity$2 ? G__24093.cljs$core$IFn$_invoke$arity$2(G__24098,G__24099) : G__24093.call(null,G__24098,G__24099));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24104,G__24102,G__24103){
return (G__24102 / (G__24103.cljs$core$IFn$_invoke$arity$1 ? G__24103.cljs$core$IFn$_invoke$arity$1(G__24104) : G__24103.call(null,G__24104)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24105 = cljs.core.cst$kw$css;
var G__24106 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24107 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24105,G__24106,G__24107) : hoplon.core.div.call(null,G__24105,G__24106,G__24107));
})(),(function (){var G__24108 = cljs.core.cst$kw$css;
var G__24109 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24110 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14905__auto__){
var vec__24123 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24126){
var vec__24127 = p__24126;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24127,(0),null);
var vec__24130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24127,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24127,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14905__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24123,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24135,G__24134,G__24133){
if(cljs.core.truth_(G__24133)){
return (G__24134 * G__24135);
} else {
return (0);
}
});})(vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24136){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24136);
});})(transition_delay,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24137){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24137);
});})(transition_delay,url,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24138){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24138);
});})(transition_delay,url,text,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24139,G__24140){
var and__7748__auto__ = G__24139;
if(cljs.core.truth_(and__7748__auto__)){
return G__24140;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24141 = cljs.core.cst$kw$css;
var G__24142 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24141,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24149,G__24146,G__24150,G__24147,G__24144,G__24145,G__24148){
var G__24151 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24145),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24146),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24147),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24152 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24148)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24149),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24150),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24144.cljs$core$IFn$_invoke$arity$2 ? G__24144.cljs$core$IFn$_invoke$arity$2(G__24151,G__24152) : G__24144.call(null,G__24151,G__24152));
});})(G__24141,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24143 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24153,G__24154){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24153)?"black":G__24154)], null);
});})(G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24155 = cljs.core.cst$kw$mouseenter;
var G__24156 = ((function (G__24155,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24155,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24157 = cljs.core.cst$kw$mouseleave;
var G__24158 = ((function (G__24155,G__24156,G__24157,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24155,G__24156,G__24157,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24159 = cljs.core.cst$kw$click;
var G__24160 = ((function (G__24155,G__24156,G__24157,G__24158,G__24159,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24155,G__24156,G__24157,G__24158,G__24159,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24155,G__24156,G__24157,G__24158,G__24159,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24155,G__24156,G__24157,G__24158,G__24159,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24161 = cljs.core.cst$kw$css;
var G__24162 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24170,G__24168,G__24167,G__24166,G__24165,G__24169,G__24171){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24165)?G__24166:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24172 = (- G__24168);
return (G__24167.cljs$core$IFn$_invoke$arity$1 ? G__24167.cljs$core$IFn$_invoke$arity$1(G__24172) : G__24167.call(null,G__24172));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24169 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24170)].join(''),"hidden","white",((2) * G__24168),"pointer",(cljs.core.truth_(G__24171)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24171),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24167.cljs$core$IFn$_invoke$arity$1 ? G__24167.cljs$core$IFn$_invoke$arity$1(G__24168) : G__24167.call(null,G__24168)),"contain",((2) * G__24168),(function (){var G__24173 = (- G__24168);
return (G__24167.cljs$core$IFn$_invoke$arity$1 ? G__24167.cljs$core$IFn$_invoke$arity$1(G__24173) : G__24167.call(null,G__24173));
})()]);
});})(G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24163 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24174 = cljs.core.cst$kw$css;
var G__24175 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24176 = (function (){var G__24177 = (function (){var G__24178 = cljs.core.cst$kw$valign;
var G__24179 = "center";
var G__24180 = cljs.core.cst$kw$css;
var G__24181 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24182 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24178,G__24179,G__24180,G__24181,G__24182) : hoplon.core.td.call(null,G__24178,G__24179,G__24180,G__24181,G__24182));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24177) : hoplon.core.tr.call(null,G__24177));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24174,G__24175,G__24176) : hoplon.core.table.call(null,G__24174,G__24175,G__24176));
});})(G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14915__auto__,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14918__auto__){
var G__24183 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24183) : cljs.core.deref.call(null,G__24183));
});})(con__14915__auto__,alt__14916__auto__,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,text);
})();
var G__24164 = (function (){var G__24184 = cljs.core.cst$kw$css;
var G__24185 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24184,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24163,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24187,G__24188,G__24186,G__24189){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24186),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24187),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24188),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24189)?(0):(1))], null);
});})(G__24184,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24163,G__24141,G__24142,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24123,x,i,y,item,G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24184,G__24185) : hoplon.core.div.call(null,G__24184,G__24185));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24163,G__24164) : hoplon.core.div.call(null,G__24155,G__24156,G__24157,G__24158,G__24159,G__24160,G__24161,G__24162,G__24163,G__24164));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24141,G__24142,G__24143) : hoplon.core.div.call(null,G__24141,G__24142,G__24143));
});})(G__24108,G__24109,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24108,G__24109,G__24110) : hoplon.core.div.call(null,G__24108,G__24109,G__24110));
})()], 0));
});
