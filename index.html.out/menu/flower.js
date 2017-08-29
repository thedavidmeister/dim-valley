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
var len__8981__auto___23824 = arguments.length;
var i__8982__auto___23825 = (0);
while(true){
if((i__8982__auto___23825 < len__8981__auto___23824)){
args__8988__auto__.push((arguments[i__8982__auto___23825]));

var G__23826 = (i__8982__auto___23825 + (1));
i__8982__auto___23825 = G__23826;
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
var G__23813 = cljs.core.cst$kw$css;
var G__23814 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23813,transition_length__$1){
return (function (G__23819,G__23820,G__23816,G__23823,G__23817,G__23821,G__23818,G__23822){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23816.cljs$core$IFn$_invoke$arity$1 ? G__23816.cljs$core$IFn$_invoke$arity$1(G__23817) : G__23816.call(null,G__23817)),cljs.core.cst$kw$bottom,(G__23816.cljs$core$IFn$_invoke$arity$1 ? G__23816.cljs$core$IFn$_invoke$arity$1(G__23817) : G__23816.call(null,G__23817)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23818),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23819)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23820;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23821.cljs$core$IFn$_invoke$arity$1 ? G__23821.cljs$core$IFn$_invoke$arity$1(G__23822) : G__23821.call(null,G__23822));
} else {
return and__7748__auto__;
}
})())?G__23823:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23813,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23815 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23813,G__23814,G__23815) : hoplon.core.div.call(null,G__23813,G__23814,G__23815));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23808){
var G__23809 = cljs.core.first(seq23808);
var seq23808__$1 = cljs.core.next(seq23808);
var G__23810 = cljs.core.first(seq23808__$1);
var seq23808__$2 = cljs.core.next(seq23808__$1);
var G__23811 = cljs.core.first(seq23808__$2);
var seq23808__$3 = cljs.core.next(seq23808__$2);
var G__23812 = cljs.core.first(seq23808__$3);
var seq23808__$4 = cljs.core.next(seq23808__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23809,G__23810,G__23811,G__23812,seq23808__$4);
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
var G__23897 = cljs.core.cst$kw$click;
var G__23898 = ((function (G__23897,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23897,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23899 = cljs.core.cst$kw$mouseenter;
var G__23900 = ((function (G__23897,G__23898,G__23899,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23897,G__23898,G__23899,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23901 = cljs.core.cst$kw$mouseleave;
var G__23902 = ((function (G__23897,G__23898,G__23899,G__23900,G__23901,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23897,G__23898,G__23899,G__23900,G__23901,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23903 = cljs.core.cst$kw$css;
var G__23904 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23907,G__23912,G__23909,G__23908,G__23910,G__23911,G__23906){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23906;
if(cljs.core.truth_(and__7748__auto__)){
return G__23907;
} else {
return and__7748__auto__;
}
})())?G__23908:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23913 = (- G__23910);
return (G__23909.cljs$core$IFn$_invoke$arity$1 ? G__23909.cljs$core$IFn$_invoke$arity$1(G__23913) : G__23909.call(null,G__23913));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23911),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23912)].join(''),(G__23910 * (2)),"pointer",(1),"absolute",(G__23909.cljs$core$IFn$_invoke$arity$1 ? G__23909.cljs$core$IFn$_invoke$arity$1(G__23910) : G__23909.call(null,G__23910)),(G__23910 * (2)),(function (){var G__23914 = (- G__23910);
return (G__23909.cljs$core$IFn$_invoke$arity$1 ? G__23909.cljs$core$IFn$_invoke$arity$1(G__23914) : G__23909.call(null,G__23914));
})()]);
});})(G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23905 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23915){
return (G__23915 / (2));
});})(G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23917,G__23916){
return ((G__23916 * Math.sin((G__23917.cljs$core$IFn$_invoke$arity$1 ? G__23917.cljs$core$IFn$_invoke$arity$1((45)) : G__23917.call(null,(45))))) / (2));
});})(width,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23918){
return (G__23918 / (12));
});})(width,rotated_offset,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23920,G__23919){
return (G__23919 + (- (G__23920 / (2))));
});})(width,rotated_offset,height,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23922,G__23921){
return (G__23921 + (- (G__23922 / (2))));
});})(width,rotated_offset,height,left,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23923,G__23924){
var G__23925 = (G__23924.cljs$core$IFn$_invoke$arity$0 ? G__23924.cljs$core$IFn$_invoke$arity$0() : G__23924.call(null));
return (G__23923.cljs$core$IFn$_invoke$arity$1 ? G__23923.cljs$core$IFn$_invoke$arity$1(G__23925) : G__23923.call(null,G__23925));
});})(width,rotated_offset,height,left,top,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23928,G__23929,G__23926,G__23930,G__23927,G__23931){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23927) : G__23926.call(null,G__23927)),cljs.core.cst$kw$height,(G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23928) : G__23926.call(null,G__23928)),cljs.core.cst$kw$left,(G__23926.cljs$core$IFn$_invoke$arity$1 ? G__23926.cljs$core$IFn$_invoke$arity$1(G__23929) : G__23926.call(null,G__23929)),cljs.core.cst$kw$background_DASH_color,G__23930,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23931),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23931),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23932 = cljs.core.cst$kw$css;
var G__23933 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23932,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23940,G__23938,G__23935,G__23936,G__23937,G__23934,G__23939){
var G__23941 = G__23935;
var G__23942 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23944 = (G__23937 - ((2) * G__23938));
return (G__23936.cljs$core$IFn$_invoke$arity$1 ? G__23936.cljs$core$IFn$_invoke$arity$1(G__23944) : G__23936.call(null,G__23944));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23939)?G__23940:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23939)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23943 = (cljs.core.truth_(G__23939)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23934.cljs$core$IFn$_invoke$arity$3 ? G__23934.cljs$core$IFn$_invoke$arity$3(G__23941,G__23942,G__23943) : G__23934.call(null,G__23941,G__23942,G__23943));
});})(G__23932,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23932,G__23933) : hoplon.core.div.call(null,G__23932,G__23933));
})(),(function (){var G__23945 = cljs.core.cst$kw$css;
var G__23946 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23945,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23948,G__23949,G__23950,G__23947,G__23951){
var G__23952 = G__23948;
var G__23953 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23949.cljs$core$IFn$_invoke$arity$1 ? G__23949.cljs$core$IFn$_invoke$arity$1(G__23950) : G__23949.call(null,G__23950)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23951)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23947.cljs$core$IFn$_invoke$arity$2 ? G__23947.cljs$core$IFn$_invoke$arity$2(G__23952,G__23953) : G__23947.call(null,G__23952,G__23953));
});})(G__23945,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23945,G__23946) : hoplon.core.div.call(null,G__23945,G__23946));
})(),(function (){var G__23954 = cljs.core.cst$kw$css;
var G__23955 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23954,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23962,G__23960,G__23957,G__23958,G__23959,G__23956,G__23961){
var G__23963 = G__23957;
var G__23964 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23966 = (G__23959 + ((2) * G__23960));
return (G__23958.cljs$core$IFn$_invoke$arity$1 ? G__23958.cljs$core$IFn$_invoke$arity$1(G__23966) : G__23958.call(null,G__23966));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23961)?G__23962:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23961)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23965 = (cljs.core.truth_(G__23961)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23956.cljs$core$IFn$_invoke$arity$3 ? G__23956.cljs$core$IFn$_invoke$arity$3(G__23963,G__23964,G__23965) : G__23956.call(null,G__23963,G__23964,G__23965));
});})(G__23954,width,rotated_offset,height,left,top,color,default_css,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23954,G__23955) : hoplon.core.div.call(null,G__23954,G__23955));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,G__23905) : hoplon.core.div.call(null,G__23897,G__23898,G__23899,G__23900,G__23901,G__23902,G__23903,G__23904,G__23905));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24070,G__24071){
return (G__24070 / ((1) + G__24071));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24073,G__24072){
return (G__24072 * G__24073);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24075,G__24074){
return (((2) * Math.PI) / (G__24074.cljs$core$IFn$_invoke$arity$1 ? G__24074.cljs$core$IFn$_invoke$arity$1(G__24075) : G__24074.call(null,G__24075)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24080,G__24076,G__24078,G__24077,G__24079){
var G__24081 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24083 = G__24078;
var G__24084 = (i * G__24079);
return (G__24077.cljs$core$IFn$_invoke$arity$2 ? G__24077.cljs$core$IFn$_invoke$arity$2(G__24083,G__24084) : G__24077.call(null,G__24083,G__24084));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24082 = G__24080;
return (G__24076.cljs$core$IFn$_invoke$arity$2 ? G__24076.cljs$core$IFn$_invoke$arity$2(G__24081,G__24082) : G__24076.call(null,G__24081,G__24082));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24087,G__24085,G__24086){
return (G__24085 / (G__24086.cljs$core$IFn$_invoke$arity$1 ? G__24086.cljs$core$IFn$_invoke$arity$1(G__24087) : G__24086.call(null,G__24087)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24088 = cljs.core.cst$kw$css;
var G__24089 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24090 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24088,G__24089,G__24090) : hoplon.core.div.call(null,G__24088,G__24089,G__24090));
})(),(function (){var G__24091 = cljs.core.cst$kw$css;
var G__24092 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24093 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14905__auto__){
var vec__24106 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24109){
var vec__24110 = p__24109;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110,(0),null);
var vec__24113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24113,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14905__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24106,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24118,G__24117,G__24116){
if(cljs.core.truth_(G__24116)){
return (G__24117 * G__24118);
} else {
return (0);
}
});})(vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24119){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24119);
});})(transition_delay,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24120){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24120);
});})(transition_delay,url,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24121){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24121);
});})(transition_delay,url,text,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24122,G__24123){
var and__7748__auto__ = G__24122;
if(cljs.core.truth_(and__7748__auto__)){
return G__24123;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24124 = cljs.core.cst$kw$css;
var G__24125 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24124,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24132,G__24129,G__24133,G__24130,G__24127,G__24128,G__24131){
var G__24134 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24128),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24129),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24130),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24135 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24131)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24132),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24133),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24127.cljs$core$IFn$_invoke$arity$2 ? G__24127.cljs$core$IFn$_invoke$arity$2(G__24134,G__24135) : G__24127.call(null,G__24134,G__24135));
});})(G__24124,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24126 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24136,G__24137){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24136)?"black":G__24137)], null);
});})(G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24138 = cljs.core.cst$kw$mouseenter;
var G__24139 = ((function (G__24138,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24138,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24140 = cljs.core.cst$kw$mouseleave;
var G__24141 = ((function (G__24138,G__24139,G__24140,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24138,G__24139,G__24140,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24142 = cljs.core.cst$kw$click;
var G__24143 = ((function (G__24138,G__24139,G__24140,G__24141,G__24142,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24138,G__24139,G__24140,G__24141,G__24142,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24138,G__24139,G__24140,G__24141,G__24142,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24138,G__24139,G__24140,G__24141,G__24142,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24144 = cljs.core.cst$kw$css;
var G__24145 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24153,G__24151,G__24150,G__24149,G__24148,G__24152,G__24154){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24148)?G__24149:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24155 = (- G__24151);
return (G__24150.cljs$core$IFn$_invoke$arity$1 ? G__24150.cljs$core$IFn$_invoke$arity$1(G__24155) : G__24150.call(null,G__24155));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24152 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24153)].join(''),"hidden","white",((2) * G__24151),"pointer",(cljs.core.truth_(G__24154)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24154),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24150.cljs$core$IFn$_invoke$arity$1 ? G__24150.cljs$core$IFn$_invoke$arity$1(G__24151) : G__24150.call(null,G__24151)),"contain",((2) * G__24151),(function (){var G__24156 = (- G__24151);
return (G__24150.cljs$core$IFn$_invoke$arity$1 ? G__24150.cljs$core$IFn$_invoke$arity$1(G__24156) : G__24150.call(null,G__24156));
})()]);
});})(G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24146 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24157 = cljs.core.cst$kw$css;
var G__24158 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24159 = (function (){var G__24160 = (function (){var G__24161 = cljs.core.cst$kw$valign;
var G__24162 = "center";
var G__24163 = cljs.core.cst$kw$css;
var G__24164 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24165 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24161,G__24162,G__24163,G__24164,G__24165) : hoplon.core.td.call(null,G__24161,G__24162,G__24163,G__24164,G__24165));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24160) : hoplon.core.tr.call(null,G__24160));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24157,G__24158,G__24159) : hoplon.core.table.call(null,G__24157,G__24158,G__24159));
});})(G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14915__auto__,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14918__auto__){
var G__24166 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24166) : cljs.core.deref.call(null,G__24166));
});})(con__14915__auto__,alt__14916__auto__,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,text);
})();
var G__24147 = (function (){var G__24167 = cljs.core.cst$kw$css;
var G__24168 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24167,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24146,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24170,G__24171,G__24169,G__24172){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24169),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24170),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24171),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24172)?(0):(1))], null);
});})(G__24167,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24146,G__24124,G__24125,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24106,x,i,y,item,G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24167,G__24168) : hoplon.core.div.call(null,G__24167,G__24168));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24146,G__24147) : hoplon.core.div.call(null,G__24138,G__24139,G__24140,G__24141,G__24142,G__24143,G__24144,G__24145,G__24146,G__24147));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24124,G__24125,G__24126) : hoplon.core.div.call(null,G__24124,G__24125,G__24126));
});})(G__24091,G__24092,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24091,G__24092,G__24093) : hoplon.core.div.call(null,G__24091,G__24092,G__24093));
})()], 0));
});
