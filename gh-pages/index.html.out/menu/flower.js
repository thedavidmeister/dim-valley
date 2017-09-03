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
var len__8981__auto___23850 = arguments.length;
var i__8982__auto___23851 = (0);
while(true){
if((i__8982__auto___23851 < len__8981__auto___23850)){
args__8988__auto__.push((arguments[i__8982__auto___23851]));

var G__23852 = (i__8982__auto___23851 + (1));
i__8982__auto___23851 = G__23852;
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
var G__23839 = cljs.core.cst$kw$css;
var G__23840 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23839,transition_length__$1){
return (function (G__23845,G__23846,G__23842,G__23849,G__23843,G__23847,G__23844,G__23848){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__23842.cljs$core$IFn$_invoke$arity$1 ? G__23842.cljs$core$IFn$_invoke$arity$1(G__23843) : G__23842.call(null,G__23843)),cljs.core.cst$kw$bottom,(G__23842.cljs$core$IFn$_invoke$arity$1 ? G__23842.cljs$core$IFn$_invoke$arity$1(G__23843) : G__23842.call(null,G__23843)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23844),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23845)].join(''),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23846;
if(cljs.core.truth_(and__7748__auto__)){
return (G__23847.cljs$core$IFn$_invoke$arity$1 ? G__23847.cljs$core$IFn$_invoke$arity$1(G__23848) : G__23847.call(null,G__23848));
} else {
return and__7748__auto__;
}
})())?G__23849:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__23839,transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_);
var G__23841 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23839,G__23840,G__23841) : hoplon.core.div.call(null,G__23839,G__23840,G__23841));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq23834){
var G__23835 = cljs.core.first(seq23834);
var seq23834__$1 = cljs.core.next(seq23834);
var G__23836 = cljs.core.first(seq23834__$1);
var seq23834__$2 = cljs.core.next(seq23834__$1);
var G__23837 = cljs.core.first(seq23834__$2);
var seq23834__$3 = cljs.core.next(seq23834__$2);
var G__23838 = cljs.core.first(seq23834__$3);
var seq23834__$4 = cljs.core.next(seq23834__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__23835,G__23836,G__23837,G__23838,seq23834__$4);
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
var G__23923 = cljs.core.cst$kw$click;
var G__23924 = ((function (G__23923,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__23923,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23925 = cljs.core.cst$kw$mouseenter;
var G__23926 = ((function (G__23923,G__23924,G__23925,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true));
});})(G__23923,G__23924,G__23925,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23927 = cljs.core.cst$kw$mouseleave;
var G__23928 = ((function (G__23923,G__23924,G__23925,G__23926,G__23927,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK___$1,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false));
});})(G__23923,G__23924,G__23925,G__23926,G__23927,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__23929 = cljs.core.cst$kw$css;
var G__23930 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23933,G__23938,G__23935,G__23934,G__23936,G__23937,G__23932){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__23932;
if(cljs.core.truth_(and__7748__auto__)){
return G__23933;
} else {
return and__7748__auto__;
}
})())?G__23934:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__23939 = (- G__23936);
return (G__23935.cljs$core$IFn$_invoke$arity$1 ? G__23935.cljs$core$IFn$_invoke$arity$1(G__23939) : G__23935.call(null,G__23939));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23937),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23938)].join(''),(G__23936 * (2)),"pointer",(1),"absolute",(G__23935.cljs$core$IFn$_invoke$arity$1 ? G__23935.cljs$core$IFn$_invoke$arity$1(G__23936) : G__23935.call(null,G__23936)),(G__23936 * (2)),(function (){var G__23940 = (- G__23936);
return (G__23935.cljs$core$IFn$_invoke$arity$1 ? G__23935.cljs$core$IFn$_invoke$arity$1(G__23940) : G__23935.call(null,G__23940));
})()]);
});})(G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1);
var G__23931 = (function (){var width = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23941){
return (G__23941 / (2));
});})(G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23943,G__23942){
return ((G__23942 * Math.sin((G__23943.cljs$core$IFn$_invoke$arity$1 ? G__23943.cljs$core$IFn$_invoke$arity$1((45)) : G__23943.call(null,(45))))) / (2));
});})(width,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23944){
return (G__23944 / (12));
});})(width,rotated_offset,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23946,G__23945){
return (G__23945 + (- (G__23946 / (2))));
});})(width,rotated_offset,height,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23948,G__23947){
return (G__23947 + (- (G__23948 / (2))));
});})(width,rotated_offset,height,left,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23949,G__23950){
var G__23951 = (G__23950.cljs$core$IFn$_invoke$arity$0 ? G__23950.cljs$core$IFn$_invoke$arity$0() : G__23950.call(null));
return (G__23949.cljs$core$IFn$_invoke$arity$1 ? G__23949.cljs$core$IFn$_invoke$arity$1(G__23951) : G__23949.call(null,G__23951));
});})(width,rotated_offset,height,left,top,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23954,G__23955,G__23952,G__23956,G__23953,G__23957){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__23952.cljs$core$IFn$_invoke$arity$1 ? G__23952.cljs$core$IFn$_invoke$arity$1(G__23953) : G__23952.call(null,G__23953)),cljs.core.cst$kw$height,(G__23952.cljs$core$IFn$_invoke$arity$1 ? G__23952.cljs$core$IFn$_invoke$arity$1(G__23954) : G__23952.call(null,G__23954)),cljs.core.cst$kw$left,(G__23952.cljs$core$IFn$_invoke$arity$1 ? G__23952.cljs$core$IFn$_invoke$arity$1(G__23955) : G__23952.call(null,G__23955)),cljs.core.cst$kw$background_DASH_color,G__23956,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23957),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23957),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23958 = cljs.core.cst$kw$css;
var G__23959 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23958,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23966,G__23964,G__23961,G__23962,G__23963,G__23960,G__23965){
var G__23967 = G__23961;
var G__23968 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23970 = (G__23963 - ((2) * G__23964));
return (G__23962.cljs$core$IFn$_invoke$arity$1 ? G__23962.cljs$core$IFn$_invoke$arity$1(G__23970) : G__23962.call(null,G__23970));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23965)?G__23966:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23965)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23969 = (cljs.core.truth_(G__23965)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23960.cljs$core$IFn$_invoke$arity$3 ? G__23960.cljs$core$IFn$_invoke$arity$3(G__23967,G__23968,G__23969) : G__23960.call(null,G__23967,G__23968,G__23969));
});})(G__23958,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23958,G__23959) : hoplon.core.div.call(null,G__23958,G__23959));
})(),(function (){var G__23971 = cljs.core.cst$kw$css;
var G__23972 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23971,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23974,G__23975,G__23976,G__23973,G__23977){
var G__23978 = G__23974;
var G__23979 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__23975.cljs$core$IFn$_invoke$arity$1 ? G__23975.cljs$core$IFn$_invoke$arity$1(G__23976) : G__23975.call(null,G__23976)),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23977)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null);
return (G__23973.cljs$core$IFn$_invoke$arity$2 ? G__23973.cljs$core$IFn$_invoke$arity$2(G__23978,G__23979) : G__23973.call(null,G__23978,G__23979));
});})(G__23971,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23971,G__23972) : hoplon.core.div.call(null,G__23971,G__23972));
})(),(function (){var G__23980 = cljs.core.cst$kw$css;
var G__23981 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23980,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__23988,G__23986,G__23983,G__23984,G__23985,G__23982,G__23987){
var G__23989 = G__23983;
var G__23990 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__23992 = (G__23985 + ((2) * G__23986));
return (G__23984.cljs$core$IFn$_invoke$arity$1 ? G__23984.cljs$core$IFn$_invoke$arity$1(G__23992) : G__23984.call(null,G__23992));
})(),cljs.core.cst$kw$transform,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23987)?G__23988:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__23987)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null);
var G__23991 = (cljs.core.truth_(G__23987)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__23982.cljs$core$IFn$_invoke$arity$3 ? G__23982.cljs$core$IFn$_invoke$arity$3(G__23989,G__23990,G__23991) : G__23982.call(null,G__23989,G__23990,G__23991));
});})(G__23980,width,rotated_offset,height,left,top,color,default_css,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__23980,G__23981) : hoplon.core.div.call(null,G__23980,G__23981));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,G__23931) : hoplon.core.div.call(null,G__23923,G__23924,G__23925,G__23926,G__23927,G__23928,G__23929,G__23930,G__23931));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24096,G__24097){
return (G__24096 / ((1) + G__24097));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24099,G__24098){
return (G__24098 * G__24099);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24101,G__24100){
return (((2) * Math.PI) / (G__24100.cljs$core$IFn$_invoke$arity$1 ? G__24100.cljs$core$IFn$_invoke$arity$1(G__24101) : G__24100.call(null,G__24101)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__24106,G__24102,G__24104,G__24103,G__24105){
var G__24107 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__24109 = G__24104;
var G__24110 = (i * G__24105);
return (G__24103.cljs$core$IFn$_invoke$arity$2 ? G__24103.cljs$core$IFn$_invoke$arity$2(G__24109,G__24110) : G__24103.call(null,G__24109,G__24110));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__24108 = G__24106;
return (G__24102.cljs$core$IFn$_invoke$arity$2 ? G__24102.cljs$core$IFn$_invoke$arity$2(G__24107,G__24108) : G__24102.call(null,G__24107,G__24108));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__24113,G__24111,G__24112){
return (G__24111 / (G__24112.cljs$core$IFn$_invoke$arity$1 ? G__24112.cljs$core$IFn$_invoke$arity$1(G__24113) : G__24112.call(null,G__24113)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.array_seq([(function (){var G__24114 = cljs.core.cst$kw$css;
var G__24115 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__24116 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24114,G__24115,G__24116) : hoplon.core.div.call(null,G__24114,G__24115,G__24116));
})(),(function (){var G__24117 = cljs.core.cst$kw$css;
var G__24118 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__24119 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__14905__auto__){
var vec__24132 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__24135){
var vec__24136 = p__24135;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24136,(0),null);
var vec__24139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24136,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24139,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24136,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__14905__auto__));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24132,(3),null);
var transition_delay = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24144,G__24143,G__24142){
if(cljs.core.truth_(G__24142)){
return (G__24143 * G__24144);
} else {
return (0);
}
});})(vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24145){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__24145);
});})(transition_delay,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24146){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__24146);
});})(transition_delay,url,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var handler = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24147){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__24147);
});})(transition_delay,url,text,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24148,G__24149){
var and__7748__auto__ = G__24148;
if(cljs.core.truth_(and__7748__auto__)){
return G__24149;
} else {
return and__7748__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,open_QMARK_);
var G__24150 = cljs.core.cst$kw$css;
var G__24151 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24158,G__24155,G__24159,G__24156,G__24153,G__24154,G__24157){
var G__24160 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24154),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24155),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24156),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null);
var G__24161 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__24157)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24158),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24159),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null);
return (G__24153.cljs$core$IFn$_invoke$arity$2 ? G__24153.cljs$core$IFn$_invoke$arity$2(G__24160,G__24161) : G__24153.call(null,G__24160,G__24161));
});})(G__24150,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_);
var G__24152 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24162,G__24163){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__24162)?"black":G__24163)], null);
});})(G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,interacting_QMARK_,colours.ui_gradients.base_colour),(function (){var G__24164 = cljs.core.cst$kw$mouseenter;
var G__24165 = ((function (G__24164,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,true) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true));
});})(G__24164,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24166 = cljs.core.cst$kw$mouseleave;
var G__24167 = ((function (G__24164,G__24165,G__24166,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,false) : cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false));
});})(G__24164,G__24165,G__24166,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24168 = cljs.core.cst$kw$click;
var G__24169 = ((function (G__24164,G__24165,G__24166,G__24167,G__24168,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__24164,G__24165,G__24166,G__24167,G__24168,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,false) : cljs.core.reset_BANG_.call(null,open_QMARK_,false));

return true;
});})(G__24164,G__24165,G__24166,G__24167,G__24168,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__24164,G__24165,G__24166,G__24167,G__24168,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__24170 = cljs.core.cst$kw$css;
var G__24171 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24179,G__24177,G__24176,G__24175,G__24174,G__24178,G__24180){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24174)?G__24175:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),(function (){var G__24181 = (- G__24177);
return (G__24176.cljs$core$IFn$_invoke$arity$1 ? G__24176.cljs$core$IFn$_invoke$arity$1(G__24181) : G__24176.call(null,G__24181));
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__24178 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24179)].join(''),"hidden","white",((2) * G__24177),"pointer",(cljs.core.truth_(G__24180)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24180),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",(G__24176.cljs$core$IFn$_invoke$arity$1 ? G__24176.cljs$core$IFn$_invoke$arity$1(G__24177) : G__24176.call(null,G__24177)),"contain",((2) * G__24177),(function (){var G__24182 = (- G__24177);
return (G__24176.cljs$core$IFn$_invoke$arity$1 ? G__24176.cljs$core$IFn$_invoke$arity$1(G__24182) : G__24176.call(null,G__24182));
})()]);
});})(G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url);
var G__24172 = (function (){var con__14915__auto__ = (new cljs.core.Delay(((function (G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__24183 = cljs.core.cst$kw$css;
var G__24184 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__24185 = (function (){var G__24186 = (function (){var G__24187 = cljs.core.cst$kw$valign;
var G__24188 = "center";
var G__24189 = cljs.core.cst$kw$css;
var G__24190 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__24191 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__24187,G__24188,G__24189,G__24190,G__24191) : hoplon.core.td.call(null,G__24187,G__24188,G__24189,G__24190,G__24191));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__24186) : hoplon.core.tr.call(null,G__24186));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__24183,G__24184,G__24185) : hoplon.core.table.call(null,G__24183,G__24184,G__24185));
});})(G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__14916__auto__ = (new cljs.core.Delay(((function (con__14915__auto__,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__14915__auto__,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__14917__auto__ = ((function (con__14915__auto__,alt__14916__auto__,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14918__auto__){
var G__24192 = (function (){var or__7760__auto__ = (cljs.core.truth_(p__14918__auto__)?con__14915__auto__:alt__14916__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24192) : cljs.core.deref.call(null,G__24192));
});})(con__14915__auto__,alt__14916__auto__,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14917__auto__).call(null,text);
})();
var G__24173 = (function (){var G__24193 = cljs.core.cst$kw$css;
var G__24194 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24193,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24172,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__24196,G__24197,G__24195,G__24198){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24195),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24196),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24197),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__24198)?(0):(1))], null);
});})(G__24193,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24172,G__24150,G__24151,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__24132,x,i,y,item,G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24193,G__24194) : hoplon.core.div.call(null,G__24193,G__24194));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24172,G__24173) : hoplon.core.div.call(null,G__24164,G__24165,G__24166,G__24167,G__24168,G__24169,G__24170,G__24171,G__24172,G__24173));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24150,G__24151,G__24152) : hoplon.core.div.call(null,G__24150,G__24151,G__24152));
});})(G__24117,G__24118,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24117,G__24118,G__24119) : hoplon.core.div.call(null,G__24117,G__24118,G__24119));
})()], 0));
});
