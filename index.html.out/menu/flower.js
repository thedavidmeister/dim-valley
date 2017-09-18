// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var args__9526__auto__ = [];
var len__9519__auto___24894 = arguments.length;
var i__9520__auto___24895 = (0);
while(true){
if((i__9520__auto___24895 < len__9519__auto___24894)){
args__9526__auto__.push((arguments[i__9520__auto___24895]));

var G__24896 = (i__9520__auto___24895 + (1));
i__9520__auto___24895 = G__24896;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
var G__24882 = cljs.core.cst$kw$css;
var G__24883 = (function (){var fexpr__24893 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24882,transition_length__$1){
return (function (G__24888,G__24889,G__24885,G__24892,G__24886,G__24890,G__24887,G__24891){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__24885.cljs$core$IFn$_invoke$arity$1 ? G__24885.cljs$core$IFn$_invoke$arity$1(G__24886) : G__24885.call(null,G__24886)),cljs.core.cst$kw$bottom,(G__24885.cljs$core$IFn$_invoke$arity$1 ? G__24885.cljs$core$IFn$_invoke$arity$1(G__24886) : G__24885.call(null,G__24886)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24887),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24888)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24889;
if(cljs.core.truth_(and__8230__auto__)){
return (G__24890.cljs$core$IFn$_invoke$arity$1 ? G__24890.cljs$core$IFn$_invoke$arity$1(G__24891) : G__24890.call(null,G__24891));
} else {
return and__8230__auto__;
}
})())?G__24892:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__24882,transition_length__$1))
);
return (fexpr__24893.cljs$core$IFn$_invoke$arity$8 ? fexpr__24893.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__24893.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__24884 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24882,G__24883,G__24884) : hoplon.core.div.call(null,G__24882,G__24883,G__24884));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq24877){
var G__24878 = cljs.core.first(seq24877);
var seq24877__$1 = cljs.core.next(seq24877);
var G__24879 = cljs.core.first(seq24877__$1);
var seq24877__$2 = cljs.core.next(seq24877__$1);
var G__24880 = cljs.core.first(seq24877__$2);
var seq24877__$3 = cljs.core.next(seq24877__$2);
var G__24881 = cljs.core.first(seq24877__$3);
var seq24877__$4 = cljs.core.next(seq24877__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__24878,G__24879,G__24880,G__24881,seq24877__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__8242__auto__ = open_QMARK_;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__8242__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
var G__24897 = cljs.core.cst$kw$click;
var G__24898 = ((function (G__24897,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__24897,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24899 = cljs.core.cst$kw$mouseenter;
var G__24900 = ((function (G__24897,G__24898,G__24899,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__24897,G__24898,G__24899,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24901 = cljs.core.cst$kw$mouseleave;
var G__24902 = ((function (G__24897,G__24898,G__24899,G__24900,G__24901,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__24897,G__24898,G__24899,G__24900,G__24901,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__24903 = cljs.core.cst$kw$css;
var G__24904 = (function (){var fexpr__24915 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24907,G__24912,G__24909,G__24908,G__24910,G__24911,G__24906){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__24906;
if(cljs.core.truth_(and__8230__auto__)){
return G__24907;
} else {
return and__8230__auto__;
}
})())?G__24908:(1))),")"].join(''),(function (){var G__24916 = (- G__24910);
return (G__24909.cljs$core$IFn$_invoke$arity$1 ? G__24909.cljs$core$IFn$_invoke$arity$1(G__24916) : G__24909.call(null,G__24916));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24911),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24912)].join(''),(G__24910 * (2)),"pointer",(1),"absolute",(G__24909.cljs$core$IFn$_invoke$arity$1 ? G__24909.cljs$core$IFn$_invoke$arity$1(G__24910) : G__24909.call(null,G__24910)),(G__24910 * (2)),(function (){var G__24917 = (- G__24910);
return (G__24909.cljs$core$IFn$_invoke$arity$1 ? G__24909.cljs$core$IFn$_invoke$arity$1(G__24917) : G__24909.call(null,G__24917));
})()]);
});})(G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24915.cljs$core$IFn$_invoke$arity$7 ? fexpr__24915.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__24915.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__24905 = (function (){var width = (function (){var fexpr__24919 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24918){
return (G__24918 / (2));
});})(G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24919.cljs$core$IFn$_invoke$arity$1 ? fexpr__24919.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__24919.call(null,radius));
})();
var rotated_offset = (function (){var fexpr__24922 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24921,G__24920){
return ((G__24920 * Math.sin((G__24921.cljs$core$IFn$_invoke$arity$1 ? G__24921.cljs$core$IFn$_invoke$arity$1((45)) : G__24921.call(null,(45))))) / (2));
});})(width,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24922.cljs$core$IFn$_invoke$arity$2 ? fexpr__24922.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__24922.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var height = (function (){var fexpr__24924 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24923){
return (G__24923 / (12));
});})(width,rotated_offset,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24924.cljs$core$IFn$_invoke$arity$1 ? fexpr__24924.cljs$core$IFn$_invoke$arity$1(radius) : fexpr__24924.call(null,radius));
})();
var left = (function (){var fexpr__24927 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24926,G__24925){
return (G__24925 + (- (G__24926 / (2))));
});})(width,rotated_offset,height,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24927.cljs$core$IFn$_invoke$arity$2 ? fexpr__24927.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__24927.call(null,width,radius));
})();
var top = (function (){var fexpr__24930 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24929,G__24928){
return (G__24928 + (- (G__24929 / (2))));
});})(width,rotated_offset,height,left,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24930.cljs$core$IFn$_invoke$arity$2 ? fexpr__24930.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__24930.call(null,height,radius));
})();
var color = (function (){var fexpr__24934 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24931,G__24932){
var G__24935 = (G__24932.cljs$core$IFn$_invoke$arity$0 ? G__24932.cljs$core$IFn$_invoke$arity$0() : G__24932.call(null));
return (G__24931.cljs$core$IFn$_invoke$arity$1 ? G__24931.cljs$core$IFn$_invoke$arity$1(G__24935) : G__24931.call(null,G__24935));
});})(width,rotated_offset,height,left,top,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24934.cljs$core$IFn$_invoke$arity$2 ? fexpr__24934.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__24934.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__24942 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,rotated_offset,height,left,top,color,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24938,G__24939,G__24936,G__24940,G__24937,G__24941){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24936.cljs$core$IFn$_invoke$arity$1 ? G__24936.cljs$core$IFn$_invoke$arity$1(G__24937) : G__24936.call(null,G__24937)),cljs.core.cst$kw$height,(G__24936.cljs$core$IFn$_invoke$arity$1 ? G__24936.cljs$core$IFn$_invoke$arity$1(G__24938) : G__24936.call(null,G__24938)),cljs.core.cst$kw$left,(G__24936.cljs$core$IFn$_invoke$arity$1 ? G__24936.cljs$core$IFn$_invoke$arity$1(G__24939) : G__24936.call(null,G__24939)),cljs.core.cst$kw$background_DASH_color,G__24940,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24941),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24941),"s ease"].join('')], null);
});})(width,rotated_offset,height,left,top,color,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24942.cljs$core$IFn$_invoke$arity$6 ? fexpr__24942.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__24942.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24943 = cljs.core.cst$kw$css;
var G__24944 = (function (){var fexpr__24956 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24943,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24951,G__24949,G__24946,G__24947,G__24948,G__24945,G__24950){
var G__24957 = G__24946;
var G__24958 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24960 = (G__24948 - ((2) * G__24949));
return (G__24947.cljs$core$IFn$_invoke$arity$1 ? G__24947.cljs$core$IFn$_invoke$arity$1(G__24960) : G__24947.call(null,G__24960));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24950)?G__24951:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24950)?"45deg":"0deg")),") "].join('')], null);
var G__24959 = (cljs.core.truth_(G__24950)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24945.cljs$core$IFn$_invoke$arity$3 ? G__24945.cljs$core$IFn$_invoke$arity$3(G__24957,G__24958,G__24959) : G__24945.call(null,G__24957,G__24958,G__24959));
});})(G__24943,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24956.cljs$core$IFn$_invoke$arity$7 ? fexpr__24956.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24956.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24943,G__24944) : hoplon.core.div.call(null,G__24943,G__24944));
})(),(function (){var G__24961 = cljs.core.cst$kw$css;
var G__24962 = (function (){var fexpr__24970 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24961,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24964,G__24965,G__24966,G__24963,G__24967){
var G__24971 = G__24964;
var G__24972 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__24965.cljs$core$IFn$_invoke$arity$1 ? G__24965.cljs$core$IFn$_invoke$arity$1(G__24966) : G__24965.call(null,G__24966)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24967)?(0):(1))),")"].join('')], null);
return (G__24963.cljs$core$IFn$_invoke$arity$2 ? G__24963.cljs$core$IFn$_invoke$arity$2(G__24971,G__24972) : G__24963.call(null,G__24971,G__24972));
});})(G__24961,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24970.cljs$core$IFn$_invoke$arity$5 ? fexpr__24970.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24970.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24961,G__24962) : hoplon.core.div.call(null,G__24961,G__24962));
})(),(function (){var G__24973 = cljs.core.cst$kw$css;
var G__24974 = (function (){var fexpr__24986 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24973,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__24981,G__24979,G__24976,G__24977,G__24978,G__24975,G__24980){
var G__24987 = G__24976;
var G__24988 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__24990 = (G__24978 + ((2) * G__24979));
return (G__24977.cljs$core$IFn$_invoke$arity$1 ? G__24977.cljs$core$IFn$_invoke$arity$1(G__24990) : G__24977.call(null,G__24990));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24980)?G__24981:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__24980)?"-45deg":"0deg")),") "].join('')], null);
var G__24989 = (cljs.core.truth_(G__24980)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__24975.cljs$core$IFn$_invoke$arity$3 ? G__24975.cljs$core$IFn$_invoke$arity$3(G__24987,G__24988,G__24989) : G__24975.call(null,G__24987,G__24988,G__24989));
});})(G__24973,width,rotated_offset,height,left,top,color,default_css,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__24986.cljs$core$IFn$_invoke$arity$7 ? fexpr__24986.cljs$core$IFn$_invoke$arity$7(rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__24986.call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24973,G__24974) : hoplon.core.div.call(null,G__24973,G__24974));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,G__24905) : hoplon.core.div.call(null,G__24897,G__24898,G__24899,G__24900,G__24901,G__24902,G__24903,G__24904,G__24905));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__24993 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__24991,G__24992){
return (G__24991 / ((1) + G__24992));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__24993.cljs$core$IFn$_invoke$arity$2 ? fexpr__24993.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__24993.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__24996 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__24995,G__24994){
return (G__24994 * G__24995);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__24996.cljs$core$IFn$_invoke$arity$2 ? fexpr__24996.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__24996.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__24999 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__24998,G__24997){
return (((2) * Math.PI) / (G__24997.cljs$core$IFn$_invoke$arity$1 ? G__24997.cljs$core$IFn$_invoke$arity$1(G__24998) : G__24997.call(null,G__24998)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__24999.cljs$core$IFn$_invoke$arity$2 ? fexpr__24999.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__24999.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25009 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25004,G__25000,G__25002,G__25001,G__25003){
var G__25010 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25012 = G__25002;
var G__25013 = (i * G__25003);
return (G__25001.cljs$core$IFn$_invoke$arity$2 ? G__25001.cljs$core$IFn$_invoke$arity$2(G__25012,G__25013) : G__25001.call(null,G__25012,G__25013));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25011 = G__25004;
return (G__25000.cljs$core$IFn$_invoke$arity$2 ? G__25000.cljs$core$IFn$_invoke$arity$2(G__25010,G__25011) : G__25000.call(null,G__25010,G__25011));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25009.cljs$core$IFn$_invoke$arity$5 ? fexpr__25009.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25009.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25017 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25016,G__25014,G__25015){
return (G__25014 / (G__25015.cljs$core$IFn$_invoke$arity$1 ? G__25015.cljs$core$IFn$_invoke$arity$1(G__25016) : G__25015.call(null,G__25016)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25017.cljs$core$IFn$_invoke$arity$3 ? fexpr__25017.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25017.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25018 = cljs.core.cst$kw$css;
var G__25019 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25020 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25018,G__25019,G__25020) : hoplon.core.div.call(null,G__25018,G__25019,G__25020));
})(),(function (){var G__25021 = cljs.core.cst$kw$css;
var G__25022 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25023 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18517__auto__){
var vec__25036 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25046 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25047){
var vec__25048 = p__25047;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048,(0),null);
var vec__25051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25051,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25046.cljs$core$IFn$_invoke$arity$1 ? fexpr__25046.cljs$core$IFn$_invoke$arity$1(item__18517__auto__) : fexpr__25046.call(null,item__18517__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25036,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25036,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25036,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25036,(3),null);
var transition_delay = (function (){var fexpr__25057 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25056,G__25055,G__25054){
if(cljs.core.truth_(G__25054)){
return (G__25055 * G__25056);
} else {
return (0);
}
});})(vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25057.cljs$core$IFn$_invoke$arity$3 ? fexpr__25057.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25057.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25059 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25058){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25058);
});})(transition_delay,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25059.cljs$core$IFn$_invoke$arity$1 ? fexpr__25059.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25059.call(null,item));
})();
var text = (function (){var fexpr__25061 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25060){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25060);
});})(transition_delay,url,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25061.cljs$core$IFn$_invoke$arity$1 ? fexpr__25061.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25061.call(null,item));
})();
var handler = (function (){var fexpr__25063 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25062){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25062);
});})(transition_delay,url,text,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25063.cljs$core$IFn$_invoke$arity$1 ? fexpr__25063.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25063.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25066 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25064,G__25065){
var and__8230__auto__ = G__25064;
if(cljs.core.truth_(and__8230__auto__)){
return G__25065;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25066.cljs$core$IFn$_invoke$arity$2 ? fexpr__25066.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25066.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25067 = cljs.core.cst$kw$css;
var G__25068 = (function (){var fexpr__25079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25067,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25075,G__25072,G__25076,G__25073,G__25070,G__25071,G__25074){
var G__25080 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25071),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25072)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25073),"s"].join('')], null);
var G__25081 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25074)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25075),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25076),"px)"].join(''):"translate(0, 0)")], null);
return (G__25070.cljs$core$IFn$_invoke$arity$2 ? G__25070.cljs$core$IFn$_invoke$arity$2(G__25080,G__25081) : G__25070.call(null,G__25080,G__25081));
});})(G__25067,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25079.cljs$core$IFn$_invoke$arity$7 ? fexpr__25079.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25079.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25069 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25084 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25082,G__25083){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25082)?"black":G__25083)], null);
});})(G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25084.cljs$core$IFn$_invoke$arity$2 ? fexpr__25084.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25084.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25085 = cljs.core.cst$kw$mouseenter;
var G__25086 = ((function (G__25085,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25085,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25087 = cljs.core.cst$kw$mouseleave;
var G__25088 = ((function (G__25085,G__25086,G__25087,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25085,G__25086,G__25087,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25089 = cljs.core.cst$kw$click;
var G__25090 = ((function (G__25085,G__25086,G__25087,G__25088,G__25089,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25085,G__25086,G__25087,G__25088,G__25089,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25085,G__25086,G__25087,G__25088,G__25089,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25085,G__25086,G__25087,G__25088,G__25089,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25091 = cljs.core.cst$kw$css;
var G__25092 = (function (){var fexpr__25104 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25100,G__25098,G__25097,G__25096,G__25095,G__25099,G__25101){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25095)?G__25096:(1))),")"].join(''),(function (){var G__25105 = (- G__25098);
return (G__25097.cljs$core$IFn$_invoke$arity$1 ? G__25097.cljs$core$IFn$_invoke$arity$1(G__25105) : G__25097.call(null,G__25105));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25099 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25100)].join(''),"hidden","white",((2) * G__25098),"pointer",(cljs.core.truth_(G__25101)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25101),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25097.cljs$core$IFn$_invoke$arity$1 ? G__25097.cljs$core$IFn$_invoke$arity$1(G__25098) : G__25097.call(null,G__25098)),"contain",((2) * G__25098),(function (){var G__25106 = (- G__25098);
return (G__25097.cljs$core$IFn$_invoke$arity$1 ? G__25097.cljs$core$IFn$_invoke$arity$1(G__25106) : G__25097.call(null,G__25106));
})()]);
});})(G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25104.cljs$core$IFn$_invoke$arity$7 ? fexpr__25104.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25104.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25093 = (function (){var con__18527__auto__ = (new cljs.core.Delay(((function (G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25107 = cljs.core.cst$kw$css;
var G__25108 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25109 = (function (){var G__25110 = (function (){var G__25111 = cljs.core.cst$kw$valign;
var G__25112 = "center";
var G__25113 = cljs.core.cst$kw$css;
var G__25114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25115 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25111,G__25112,G__25113,G__25114,G__25115) : hoplon.core.td.call(null,G__25111,G__25112,G__25113,G__25114,G__25115));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25110) : hoplon.core.tr.call(null,G__25110));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25107,G__25108,G__25109) : hoplon.core.table.call(null,G__25107,G__25108,G__25109));
});})(G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18528__auto__ = (new cljs.core.Delay(((function (con__18527__auto__,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18527__auto__,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18529__auto__ = ((function (con__18527__auto__,alt__18528__auto__,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18530__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18530__auto__)?con__18527__auto__:alt__18528__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18527__auto__,alt__18528__auto__,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25116 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18529__auto__);
return (fexpr__25116.cljs$core$IFn$_invoke$arity$1 ? fexpr__25116.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25116.call(null,text));
})();
var G__25094 = (function (){var G__25117 = cljs.core.cst$kw$css;
var G__25118 = (function (){var fexpr__25123 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25117,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25120,G__25121,G__25119,G__25122){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25119),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25120)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25121),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25122)?(0):(1))], null);
});})(G__25117,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25067,G__25068,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25036,x,i,y,item,G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25123.cljs$core$IFn$_invoke$arity$4 ? fexpr__25123.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25123.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25117,G__25118) : hoplon.core.div.call(null,G__25117,G__25118));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094) : hoplon.core.div.call(null,G__25085,G__25086,G__25087,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25067,G__25068,G__25069) : hoplon.core.div.call(null,G__25067,G__25068,G__25069));
});})(G__25021,G__25022,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25021,G__25022,G__25023) : hoplon.core.div.call(null,G__25021,G__25022,G__25023));
})()], 0));
});
