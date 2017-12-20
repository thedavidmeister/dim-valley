// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('unit.conversion');
goog.require('fonts.config');
goog.require('menu.config');
goog.require('colours.ui_gradients');
goog.require('wheel.math.geometry');
goog.require('wheel.font.core');
goog.require('route.hoplon');
menu.flower.big_scale = 1.3;
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__9526__auto__ = [];
var len__9519__auto___25085 = arguments.length;
var i__9520__auto___25086 = (0);
while(true){
if((i__9520__auto___25086 < len__9519__auto___25085)){
args__9526__auto__.push((arguments[i__9520__auto___25086]));

var G__25087 = (i__9520__auto___25086 + (1));
i__9520__auto___25086 = G__25087;
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
var G__25073 = cljs.core.cst$kw$css;
var G__25074 = (function (){var fexpr__25084 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25073,transition_length__$1){
return (function (G__25079,G__25080,G__25076,G__25083,G__25077,G__25081,G__25078,G__25082){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25076.cljs$core$IFn$_invoke$arity$1 ? G__25076.cljs$core$IFn$_invoke$arity$1(G__25077) : G__25076.call(null,G__25077)),cljs.core.cst$kw$bottom,(G__25076.cljs$core$IFn$_invoke$arity$1 ? G__25076.cljs$core$IFn$_invoke$arity$1(G__25077) : G__25076.call(null,G__25077)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25078),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25079)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__25080;
if(cljs.core.truth_(and__8230__auto__)){
return (G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25082) : G__25081.call(null,G__25082));
} else {
return and__8230__auto__;
}
})())?G__25083:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25073,transition_length__$1))
);
return (fexpr__25084.cljs$core$IFn$_invoke$arity$8 ? fexpr__25084.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25084.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25075 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25073,G__25074,G__25075) : hoplon.core.div.call(null,G__25073,G__25074,G__25075));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25068){
var G__25069 = cljs.core.first(seq25068);
var seq25068__$1 = cljs.core.next(seq25068);
var G__25070 = cljs.core.first(seq25068__$1);
var seq25068__$2 = cljs.core.next(seq25068__$1);
var G__25071 = cljs.core.first(seq25068__$2);
var seq25068__$3 = cljs.core.next(seq25068__$2);
var G__25072 = cljs.core.first(seq25068__$3);
var seq25068__$4 = cljs.core.next(seq25068__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25069,G__25070,G__25071,G__25072,seq25068__$4);
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
var G__25088 = cljs.core.cst$kw$click;
var G__25089 = ((function (G__25088,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25088,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25090 = cljs.core.cst$kw$mouseenter;
var G__25091 = ((function (G__25088,G__25089,G__25090,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25088,G__25089,G__25090,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25092 = cljs.core.cst$kw$mouseleave;
var G__25093 = ((function (G__25088,G__25089,G__25090,G__25091,G__25092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25088,G__25089,G__25090,G__25091,G__25092,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25094 = cljs.core.cst$kw$css;
var G__25095 = (function (){var fexpr__25106 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25098,G__25103,G__25100,G__25099,G__25101,G__25102,G__25097){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8230__auto__ = G__25097;
if(cljs.core.truth_(and__8230__auto__)){
return G__25098;
} else {
return and__8230__auto__;
}
})())?G__25099:(1))),")"].join(''),(function (){var G__25107 = (- G__25101);
return (G__25100.cljs$core$IFn$_invoke$arity$1 ? G__25100.cljs$core$IFn$_invoke$arity$1(G__25107) : G__25100.call(null,G__25107));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25102),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25103)].join(''),(G__25101 * (2)),"pointer",(1),"absolute",(G__25100.cljs$core$IFn$_invoke$arity$1 ? G__25100.cljs$core$IFn$_invoke$arity$1(G__25101) : G__25100.call(null,G__25101)),(G__25101 * (2)),(function (){var G__25108 = (- G__25101);
return (G__25100.cljs$core$IFn$_invoke$arity$1 ? G__25100.cljs$core$IFn$_invoke$arity$1(G__25108) : G__25100.call(null,G__25108));
})()]);
});})(G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25106.cljs$core$IFn$_invoke$arity$7 ? fexpr__25106.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25106.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25096 = (function (){var width = (function (){var fexpr__25112 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25110,G__25109){
var G__25113 = (G__25110 * 0.5);
return (G__25109.cljs$core$IFn$_invoke$arity$1 ? G__25109.cljs$core$IFn$_invoke$arity$1(G__25113) : G__25109.call(null,G__25113));
});})(G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25112.cljs$core$IFn$_invoke$arity$2 ? fexpr__25112.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25112.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25117 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25115,G__25114){
var G__25118 = (G__25115 / (12));
return (G__25114.cljs$core$IFn$_invoke$arity$1 ? G__25114.cljs$core$IFn$_invoke$arity$1(G__25118) : G__25114.call(null,G__25118));
});})(width,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25117.cljs$core$IFn$_invoke$arity$2 ? fexpr__25117.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25117.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25121 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25120,G__25119){
return (G__25119 + (G__25120 * -0.5));
});})(width,height,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25121.cljs$core$IFn$_invoke$arity$2 ? fexpr__25121.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25121.call(null,width,radius));
})();
var top = (function (){var fexpr__25124 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25123,G__25122){
return (G__25122 + (G__25123 * -0.5));
});})(width,height,left,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25124.cljs$core$IFn$_invoke$arity$2 ? fexpr__25124.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25124.call(null,height,radius));
})();
var offset = (function (){var fexpr__25126 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25125){
return (G__25125 * (2));
});})(width,height,left,top,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25126.cljs$core$IFn$_invoke$arity$1 ? fexpr__25126.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25126.call(null,height));
})();
var color = (function (){var fexpr__25130 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25127,G__25128){
var G__25131 = (G__25128.cljs$core$IFn$_invoke$arity$0 ? G__25128.cljs$core$IFn$_invoke$arity$0() : G__25128.call(null));
return (G__25127.cljs$core$IFn$_invoke$arity$1 ? G__25127.cljs$core$IFn$_invoke$arity$1(G__25131) : G__25127.call(null,G__25131));
});})(width,height,left,top,offset,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25130.cljs$core$IFn$_invoke$arity$2 ? fexpr__25130.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25130.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25138 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25134,G__25135,G__25132,G__25136,G__25133,G__25137){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25132.cljs$core$IFn$_invoke$arity$1 ? G__25132.cljs$core$IFn$_invoke$arity$1(G__25133) : G__25132.call(null,G__25133)),cljs.core.cst$kw$height,(G__25132.cljs$core$IFn$_invoke$arity$1 ? G__25132.cljs$core$IFn$_invoke$arity$1(G__25134) : G__25132.call(null,G__25134)),cljs.core.cst$kw$left,(G__25132.cljs$core$IFn$_invoke$arity$1 ? G__25132.cljs$core$IFn$_invoke$arity$1(G__25135) : G__25132.call(null,G__25135)),cljs.core.cst$kw$background_DASH_color,G__25136,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25137),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25137),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25138.cljs$core$IFn$_invoke$arity$6 ? fexpr__25138.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25138.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25139 = cljs.core.cst$kw$css;
var G__25140 = (function (){var fexpr__25151 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25139,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25142,G__25143,G__25145,G__25144,G__25141,G__25146){
var G__25152 = G__25142;
var G__25153 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25155 = (G__25144 - G__25145);
return (G__25143.cljs$core$IFn$_invoke$arity$1 ? G__25143.cljs$core$IFn$_invoke$arity$1(G__25155) : G__25143.call(null,G__25155));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25146)?G__25145:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25146)?"45deg":"0deg")),") "].join('')], null);
var G__25154 = (cljs.core.truth_(G__25146)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25141.cljs$core$IFn$_invoke$arity$3 ? G__25141.cljs$core$IFn$_invoke$arity$3(G__25152,G__25153,G__25154) : G__25141.call(null,G__25152,G__25153,G__25154));
});})(G__25139,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25151.cljs$core$IFn$_invoke$arity$6 ? fexpr__25151.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25151.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25139,G__25140) : hoplon.core.div.call(null,G__25139,G__25140));
})(),(function (){var G__25156 = cljs.core.cst$kw$css;
var G__25157 = (function (){var fexpr__25165 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25156,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25159,G__25160,G__25161,G__25158,G__25162){
var G__25166 = G__25159;
var G__25167 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25160.cljs$core$IFn$_invoke$arity$1 ? G__25160.cljs$core$IFn$_invoke$arity$1(G__25161) : G__25160.call(null,G__25161)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25162)?(0):(1))),")"].join('')], null);
return (G__25158.cljs$core$IFn$_invoke$arity$2 ? G__25158.cljs$core$IFn$_invoke$arity$2(G__25166,G__25167) : G__25158.call(null,G__25166,G__25167));
});})(G__25156,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25165.cljs$core$IFn$_invoke$arity$5 ? fexpr__25165.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25165.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25156,G__25157) : hoplon.core.div.call(null,G__25156,G__25157));
})(),(function (){var G__25168 = cljs.core.cst$kw$css;
var G__25169 = (function (){var fexpr__25181 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25168,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25174,G__25171,G__25172,G__25176,G__25173,G__25170,G__25175){
var G__25182 = G__25171;
var G__25183 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25185 = (G__25173 + ((2) * G__25174));
return (G__25172.cljs$core$IFn$_invoke$arity$1 ? G__25172.cljs$core$IFn$_invoke$arity$1(G__25185) : G__25172.call(null,G__25185));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25175)?G__25176:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25175)?"-45deg":"0deg")),") "].join('')], null);
var G__25184 = (cljs.core.truth_(G__25175)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25170.cljs$core$IFn$_invoke$arity$3 ? G__25170.cljs$core$IFn$_invoke$arity$3(G__25182,G__25183,G__25184) : G__25170.call(null,G__25182,G__25183,G__25184));
});})(G__25168,width,height,left,top,offset,color,default_css,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25181.cljs$core$IFn$_invoke$arity$7 ? fexpr__25181.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25181.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25168,G__25169) : hoplon.core.div.call(null,G__25168,G__25169));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,G__25096) : hoplon.core.div.call(null,G__25088,G__25089,G__25090,G__25091,G__25092,G__25093,G__25094,G__25095,G__25096));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25188 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25186,G__25187){
return (G__25186 / ((1) + G__25187));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25188.cljs$core$IFn$_invoke$arity$2 ? fexpr__25188.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25188.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25191 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25190,G__25189){
return (G__25189 * G__25190);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25191.cljs$core$IFn$_invoke$arity$2 ? fexpr__25191.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25191.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25194 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25193,G__25192){
return (((2) * Math.PI) / (G__25192.cljs$core$IFn$_invoke$arity$1 ? G__25192.cljs$core$IFn$_invoke$arity$1(G__25193) : G__25192.call(null,G__25193)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25194.cljs$core$IFn$_invoke$arity$2 ? fexpr__25194.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25194.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25204 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25199,G__25195,G__25197,G__25196,G__25198){
var G__25205 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25207 = G__25197;
var G__25208 = (i * G__25198);
return (G__25196.cljs$core$IFn$_invoke$arity$2 ? G__25196.cljs$core$IFn$_invoke$arity$2(G__25207,G__25208) : G__25196.call(null,G__25207,G__25208));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25206 = G__25199;
return (G__25195.cljs$core$IFn$_invoke$arity$2 ? G__25195.cljs$core$IFn$_invoke$arity$2(G__25205,G__25206) : G__25195.call(null,G__25205,G__25206));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25204.cljs$core$IFn$_invoke$arity$5 ? fexpr__25204.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25204.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25212 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25211,G__25209,G__25210){
return (G__25209 / (G__25210.cljs$core$IFn$_invoke$arity$1 ? G__25210.cljs$core$IFn$_invoke$arity$1(G__25211) : G__25210.call(null,G__25211)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25212.cljs$core$IFn$_invoke$arity$3 ? fexpr__25212.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25212.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25213 = cljs.core.cst$kw$css;
var G__25214 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25215 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25213,G__25214,G__25215) : hoplon.core.div.call(null,G__25213,G__25214,G__25215));
})(),(function (){var G__25216 = cljs.core.cst$kw$css;
var G__25217 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25218 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18522__auto__){
var vec__25231 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25241 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25242){
var vec__25243 = p__25242;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25243,(0),null);
var vec__25246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25243,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25246,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25243,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25241.cljs$core$IFn$_invoke$arity$1 ? fexpr__25241.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25241.call(null,item__18522__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231,(3),null);
var transition_delay = (function (){var fexpr__25252 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25251,G__25250,G__25249){
if(cljs.core.truth_(G__25249)){
return (G__25250 * G__25251);
} else {
return (0);
}
});})(vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25252.cljs$core$IFn$_invoke$arity$3 ? fexpr__25252.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25252.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25254 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25253){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25253);
});})(transition_delay,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25254.cljs$core$IFn$_invoke$arity$1 ? fexpr__25254.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25254.call(null,item));
})();
var text = (function (){var fexpr__25256 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25255){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25255);
});})(transition_delay,url,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25256.cljs$core$IFn$_invoke$arity$1 ? fexpr__25256.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25256.call(null,item));
})();
var handler = (function (){var fexpr__25258 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25257){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25257);
});})(transition_delay,url,text,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25258.cljs$core$IFn$_invoke$arity$1 ? fexpr__25258.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25258.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25261 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25259,G__25260){
var and__8230__auto__ = G__25259;
if(cljs.core.truth_(and__8230__auto__)){
return G__25260;
} else {
return and__8230__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25261.cljs$core$IFn$_invoke$arity$2 ? fexpr__25261.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25261.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25262 = cljs.core.cst$kw$css;
var G__25263 = (function (){var fexpr__25274 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25262,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25270,G__25267,G__25271,G__25268,G__25265,G__25266,G__25269){
var G__25275 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25266),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25267)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25268),"s"].join('')], null);
var G__25276 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25269)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25270),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25271),"px)"].join(''):"translate(0, 0)")], null);
return (G__25265.cljs$core$IFn$_invoke$arity$2 ? G__25265.cljs$core$IFn$_invoke$arity$2(G__25275,G__25276) : G__25265.call(null,G__25275,G__25276));
});})(G__25262,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25274.cljs$core$IFn$_invoke$arity$7 ? fexpr__25274.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25274.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25264 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25279 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25277,G__25278){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25277)?"black":G__25278),cljs.core.cst$kw$display,"inline"], null);
});})(G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25279.cljs$core$IFn$_invoke$arity$2 ? fexpr__25279.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25279.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25280 = cljs.core.cst$kw$mouseenter;
var G__25281 = ((function (G__25280,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25280,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25282 = cljs.core.cst$kw$mouseleave;
var G__25283 = ((function (G__25280,G__25281,G__25282,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25280,G__25281,G__25282,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25284 = cljs.core.cst$kw$click;
var G__25285 = ((function (G__25280,G__25281,G__25282,G__25283,G__25284,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25280,G__25281,G__25282,G__25283,G__25284,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25280,G__25281,G__25282,G__25283,G__25284,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25280,G__25281,G__25282,G__25283,G__25284,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25286 = cljs.core.cst$kw$css;
var G__25287 = (function (){var fexpr__25299 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25295,G__25293,G__25292,G__25291,G__25290,G__25294,G__25296){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25290)?G__25291:(1))),")"].join(''),(function (){var G__25300 = (- G__25293);
return (G__25292.cljs$core$IFn$_invoke$arity$1 ? G__25292.cljs$core$IFn$_invoke$arity$1(G__25300) : G__25292.call(null,G__25300));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25294 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25295)].join(''),"hidden","white",((2) * G__25293),"pointer",(cljs.core.truth_(G__25296)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25296),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25292.cljs$core$IFn$_invoke$arity$1 ? G__25292.cljs$core$IFn$_invoke$arity$1(G__25293) : G__25292.call(null,G__25293)),"contain",((2) * G__25293),(function (){var G__25301 = (- G__25293);
return (G__25292.cljs$core$IFn$_invoke$arity$1 ? G__25292.cljs$core$IFn$_invoke$arity$1(G__25301) : G__25292.call(null,G__25301));
})()]);
});})(G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25299.cljs$core$IFn$_invoke$arity$7 ? fexpr__25299.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25299.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25288 = (function (){var con__18532__auto__ = (new cljs.core.Delay(((function (G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25302 = cljs.core.cst$kw$css;
var G__25303 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25304 = (function (){var G__25305 = (function (){var G__25306 = cljs.core.cst$kw$valign;
var G__25307 = "center";
var G__25308 = cljs.core.cst$kw$css;
var G__25309 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25310 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25306,G__25307,G__25308,G__25309,G__25310) : hoplon.core.td.call(null,G__25306,G__25307,G__25308,G__25309,G__25310));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25305) : hoplon.core.tr.call(null,G__25305));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25302,G__25303,G__25304) : hoplon.core.table.call(null,G__25302,G__25303,G__25304));
});})(G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18533__auto__ = (new cljs.core.Delay(((function (con__18532__auto__,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18532__auto__,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18534__auto__ = ((function (con__18532__auto__,alt__18533__auto__,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18535__auto__){
return cljs.core.deref((function (){var or__8242__auto__ = (cljs.core.truth_(p__18535__auto__)?con__18532__auto__:alt__18533__auto__);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18532__auto__,alt__18533__auto__,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25311 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18534__auto__);
return (fexpr__25311.cljs$core$IFn$_invoke$arity$1 ? fexpr__25311.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25311.call(null,text));
})();
var G__25289 = (function (){var G__25312 = cljs.core.cst$kw$css;
var G__25313 = (function (){var fexpr__25318 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25312,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25288,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25315,G__25316,G__25314,G__25317){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25314),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25315)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25316),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25317)?(0):(1))], null);
});})(G__25312,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25288,G__25262,G__25263,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25231,x,i,y,item,G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25318.cljs$core$IFn$_invoke$arity$4 ? fexpr__25318.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25318.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25312,G__25313) : hoplon.core.div.call(null,G__25312,G__25313));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25288,G__25289) : hoplon.core.div.call(null,G__25280,G__25281,G__25282,G__25283,G__25284,G__25285,G__25286,G__25287,G__25288,G__25289));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25262,G__25263,G__25264) : hoplon.core.div.call(null,G__25262,G__25263,G__25264));
});})(G__25216,G__25217,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25216,G__25217,G__25218) : hoplon.core.div.call(null,G__25216,G__25217,G__25218));
})()], 0));
});
