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
var len__8981__auto___23831 = arguments.length;
var i__8982__auto___23832 = (0);
while(true){
if((i__8982__auto___23832 < len__8981__auto___23831)){
args__8988__auto__.push((arguments[i__8982__auto___23832]));

var G__23833 = (i__8982__auto___23832 + (1));
i__8982__auto___23832 = G__23833;
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
var G__23820 = cljs.core.cst$kw$css;
var G__23821 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23820,transition_length__$1){
return (function (G__23826,G__23827,G__23823,G__23830,G__23824,G__23828,G__23825,G__23829){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23823.cljs$core$IFn$_invoke$arity$1 ? G__23823.cljs$core$IFn$_invoke$arity$1(G__23824) : G__23823.call(null,G__23824)),cljs.core.cst$kw$bottom,(G__23823.cljs$core$IFn$_invoke$arity$1 ? G__23823.cljs$core$IFn$_invoke$arity$1(G__23824) : G__23823.call(null,G__23824)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23825),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23826)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23827;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23828.cljs$core$IFn$_invoke$arity$1 ? G__23828.cljs$core$IFn$_invoke$arity$1(G__23829) : G__23828.call(null,G__23829));
} else {
return and__7748__auto__;
}
})())?G__23830:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23820,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23822 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23820,G__23821,G__23822) : hoplon.core.div.call(null,G__23820,G__23821,G__23822));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23815){
var G__23816 = cljs.core.first(seq23815);
var seq23815__$1 = cljs.core.next(seq23815);
var G__23817 = cljs.core.first(seq23815__$1);
var seq23815__$2 = cljs.core.next(seq23815__$1);
var G__23818 = cljs.core.first(seq23815__$2);
var seq23815__$3 = cljs.core.next(seq23815__$2);
var G__23819 = cljs.core.first(seq23815__$3);
var seq23815__$4 = cljs.core.next(seq23815__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23816,G__23817,G__23818,G__23819,seq23815__$4);
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
var G__23904 = cljs.core.cst$kw$click;
var G__23905 = ((function (G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23906 = cljs.core.cst$kw$mouseenter;
var G__23907 = ((function (G__23904,G__23905,G__23906,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23904,G__23905,G__23906,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23908 = cljs.core.cst$kw$mouseleave;
var G__23909 = ((function (G__23904,G__23905,G__23906,G__23907,G__23908,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23904,G__23905,G__23906,G__23907,G__23908,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23910 = cljs.core.cst$kw$css;
var G__23911 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23914,G__23919,G__23916,G__23915,G__23917,G__23918,G__23913){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23913;
if(cljs.core.truth_(and__7748__auto__)){
return G__23914;
} else {
return and__7748__auto__;
}
})())?G__23915:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23920 = (- G__23917);
return (G__23916.cljs$core$IFn$_invoke$arity$1 ? G__23916.cljs$core$IFn$_invoke$arity$1(G__23920) : G__23916.call(null,G__23920));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23918),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23919)].join(''),(G__23917 * (2)),"pointer",(1),"absolute",(G__23916.cljs$core$IFn$_invoke$arity$1 ? G__23916.cljs$core$IFn$_invoke$arity$1(G__23917) : G__23916.call(null,G__23917)),(G__23917 * (2)),(function (){var G__23921 = (- G__23917);
return (G__23916.cljs$core$IFn$_invoke$arity$1 ? G__23916.cljs$core$IFn$_invoke$arity$1(G__23921) : G__23916.call(null,G__23921));
})()]);
});})(G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23912 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23922){
return (G__23922 / (2));
});})(G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23924,G__23923){
return ((G__23923 * Math.sin((G__23924.cljs$core$IFn$_invoke$arity$1 ? G__23924.cljs$core$IFn$_invoke$arity$1((45)) : G__23924.call(null,(45))))) / (2));
});})(width,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23925){
return (G__23925 / (12));
});})(width,rotated_offset,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23927,G__23926){
return (G__23926 + (- (G__23927 / (2))));
});})(width,rotated_offset,height,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23929,G__23928){
return (G__23928 + (- (G__23929 / (2))));
});})(width,rotated_offset,height,left,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23930,G__23931){
var G__23932 = (G__23931.cljs$core$IFn$_invoke$arity$0 ? G__23931.cljs$core$IFn$_invoke$arity$0() : G__23931.call(null));
return (G__23930.cljs$core$IFn$_invoke$arity$1 ? G__23930.cljs$core$IFn$_invoke$arity$1(G__23932) : G__23930.call(null,G__23932));
});})(width,rotated_offset,height,left,top,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23935,G__23936,G__23933,G__23937,G__23934,G__23938){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23934) : G__23933.call(null,G__23934)),cljs.core.cst$kw$height,(G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23935) : G__23933.call(null,G__23935)),cljs.core.cst$kw$left,(G__23933.cljs$core$IFn$_invoke$arity$1 ? G__23933.cljs$core$IFn$_invoke$arity$1(G__23936) : G__23933.call(null,G__23936)),cljs.core.cst$kw$background_DASH_color,G__23937,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23938),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23938),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23939 = cljs.core.cst$kw$css;
var G__23940 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23939,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23947,G__23945,G__23942,G__23943,G__23944,G__23941,G__23946){
var G__23948 = G__23942;
var G__23949 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23951 = (G__23944 - ((2) * G__23945));
return (G__23943.cljs$core$IFn$_invoke$arity$1 ? G__23943.cljs$core$IFn$_invoke$arity$1(G__23951) : G__23943.call(null,G__23951));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23946)?G__23947:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23946)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23950 = (cljs.core.truth_(G__23946)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23941.cljs$core$IFn$_invoke$arity$3 ? G__23941.cljs$core$IFn$_invoke$arity$3(G__23948,G__23949,G__23950) : G__23941.call(null,G__23948,G__23949,G__23950));
});})(G__23939,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23939,G__23940) : hoplon.core.div.call(null,G__23939,G__23940));
})(),(function (){var G__23952 = cljs.core.cst$kw$css;
var G__23953 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23952,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23955,G__23956,G__23957,G__23954,G__23958){
var G__23959 = G__23955;
var G__23960 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23956.cljs$core$IFn$_invoke$arity$1 ? G__23956.cljs$core$IFn$_invoke$arity$1(G__23957) : G__23956.call(null,G__23957)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23958)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23954.cljs$core$IFn$_invoke$arity$2 ? G__23954.cljs$core$IFn$_invoke$arity$2(G__23959,G__23960) : G__23954.call(null,G__23959,G__23960));
});})(G__23952,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23952,G__23953) : hoplon.core.div.call(null,G__23952,G__23953));
})(),(function (){var G__23961 = cljs.core.cst$kw$css;
var G__23962 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23961,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23969,G__23967,G__23964,G__23965,G__23966,G__23963,G__23968){
var G__23970 = G__23964;
var G__23971 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23973 = (G__23966 + ((2) * G__23967));
return (G__23965.cljs$core$IFn$_invoke$arity$1 ? G__23965.cljs$core$IFn$_invoke$arity$1(G__23973) : G__23965.call(null,G__23973));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23968)?G__23969:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23968)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23972 = (cljs.core.truth_(G__23968)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23963.cljs$core$IFn$_invoke$arity$3 ? G__23963.cljs$core$IFn$_invoke$arity$3(G__23970,G__23971,G__23972) : G__23963.call(null,G__23970,G__23971,G__23972));
});})(G__23961,width,rotated_offset,height,left,top,color,default_css,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23961,G__23962) : hoplon.core.div.call(null,G__23961,G__23962));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,G__23912) : hoplon.core.div.call(null,G__23904,G__23905,G__23906,G__23907,G__23908,G__23909,G__23910,G__23911,G__23912));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24077,G__24078){
return (G__24077 / ((1) + G__24078));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24080,G__24079){
return (G__24079 * G__24080);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24082,G__24081){
return (((2) * Math.PI) / (G__24081.cljs$core$IFn$_invoke$arity$1 ? G__24081.cljs$core$IFn$_invoke$arity$1(G__24082) : G__24081.call(null,G__24082)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24087,G__24083,G__24085,G__24084,G__24086){
var G__24088 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24090 = G__24085;
var G__24091 = (i * G__24086);
return (G__24084.cljs$core$IFn$_invoke$arity$2 ? G__24084.cljs$core$IFn$_invoke$arity$2(G__24090,G__24091) : G__24084.call(null,G__24090,G__24091));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24089 = G__24087;
return (G__24083.cljs$core$IFn$_invoke$arity$2 ? G__24083.cljs$core$IFn$_invoke$arity$2(G__24088,G__24089) : G__24083.call(null,G__24088,G__24089));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24094,G__24092,G__24093){
return (G__24092 / (G__24093.cljs$core$IFn$_invoke$arity$1 ? G__24093.cljs$core$IFn$_invoke$arity$1(G__24094) : G__24093.call(null,G__24094)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24095 = cljs.core.cst$kw$css;
var G__24096 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24097 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24095,G__24096,G__24097) : hoplon.core.div.call(null,G__24095,G__24096,G__24097));
})(),(function (){var G__24098 = cljs.core.cst$kw$css;
var G__24099 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24100 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14903__auto__){
var vec__24113 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24116){
var vec__24117 = p__24116;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117,(0),null);
var vec__24120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24120,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24120,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14903__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24125,G__24124,G__24123){
if(cljs.core.truth_(G__24123)){
return (G__24124 * G__24125);
} else {
return (0);
}
});})(vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24126){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24126);
});})(transition_delay,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24127){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24127);
});})(transition_delay,url,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24128){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24128);
});})(transition_delay,url,text,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24129,G__24130){
var and__7748__auto__ = G__24129;
if(cljs.core.truth_(and__7748__auto__)){
return G__24130;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24131 = cljs.core.cst$kw$css;
var G__24132 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24131,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24139,G__24136,G__24140,G__24137,G__24134,G__24135,G__24138){
var G__24141 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24135),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24136),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24137),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24142 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24138)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24139),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24140),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24134.cljs$core$IFn$_invoke$arity$2 ? G__24134.cljs$core$IFn$_invoke$arity$2(G__24141,G__24142) : G__24134.call(null,G__24141,G__24142));
});})(G__24131,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24133 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24143,G__24144){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24143)?"black":G__24144)], null);
});})(G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24145 = cljs.core.cst$kw$mouseenter;
var G__24146 = ((function (G__24145,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24145,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24147 = cljs.core.cst$kw$mouseleave;
var G__24148 = ((function (G__24145,G__24146,G__24147,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24145,G__24146,G__24147,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24149 = cljs.core.cst$kw$click;
var G__24150 = ((function (G__24145,G__24146,G__24147,G__24148,G__24149,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24145,G__24146,G__24147,G__24148,G__24149,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24145,G__24146,G__24147,G__24148,G__24149,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24145,G__24146,G__24147,G__24148,G__24149,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24151 = cljs.core.cst$kw$css;
var G__24152 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24160,G__24158,G__24157,G__24156,G__24155,G__24159,G__24161){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24155)?G__24156:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24162 = (- G__24158);
return (G__24157.cljs$core$IFn$_invoke$arity$1 ? G__24157.cljs$core$IFn$_invoke$arity$1(G__24162) : G__24157.call(null,G__24162));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24159 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24160)].join(''),"hidden","white",((2) * G__24158),"pointer",(cljs.core.truth_(G__24161)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24161),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24157.cljs$core$IFn$_invoke$arity$1 ? G__24157.cljs$core$IFn$_invoke$arity$1(G__24158) : G__24157.call(null,G__24158)),"contain",((2) * G__24158),(function (){var G__24163 = (- G__24158);
return (G__24157.cljs$core$IFn$_invoke$arity$1 ? G__24157.cljs$core$IFn$_invoke$arity$1(G__24163) : G__24157.call(null,G__24163));
})()]);
});})(G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24153 = (function (){var con__14913__auto__ = (new cljs.core.Delay(((function (G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24164 = cljs.core.cst$kw$css;
var G__24165 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24166 = (function (){var G__24167 = (function (){var G__24168 = cljs.core.cst$kw$valign;
var G__24169 = "center";
var G__24170 = cljs.core.cst$kw$css;
var G__24171 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24172 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24168,G__24169,G__24170,G__24171,G__24172) : hoplon.core.td.call(null,G__24168,G__24169,G__24170,G__24171,G__24172));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24167) : hoplon.core.tr.call(null,G__24167));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24164,G__24165,G__24166) : hoplon.core.table.call(null,G__24164,G__24165,G__24166));
});})(G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14914__auto__ = (new cljs.core.Delay(((function (con__14913__auto__,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14913__auto__,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14915__auto__ = ((function (con__14913__auto__,alt__14914__auto__,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14916__auto__){
var G__24173 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14916__auto__)?con__14913__auto__:alt__14914__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24173) : cljs.core.deref.call(null,G__24173));
});})(con__14913__auto__,alt__14914__auto__,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14915__auto__).call(null,text);
})();
var G__24154 = (function (){var G__24174 = cljs.core.cst$kw$css;
var G__24175 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24174,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24153,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24177,G__24178,G__24176,G__24179){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24176),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24178),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24179)?(0):(1))], null);
});})(G__24174,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24153,G__24131,G__24132,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24113,x,i,y,item,G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24174,G__24175) : hoplon.core.div.call(null,G__24174,G__24175));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24153,G__24154) : hoplon.core.div.call(null,G__24145,G__24146,G__24147,G__24148,G__24149,G__24150,G__24151,G__24152,G__24153,G__24154));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24131,G__24132,G__24133) : hoplon.core.div.call(null,G__24131,G__24132,G__24133));
});})(G__24098,G__24099,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24098,G__24099,G__24100) : hoplon.core.div.call(null,G__24098,G__24099,G__24100));
})()], 0));
});
