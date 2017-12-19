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
var args__9524__auto__ = [];
var len__9517__auto___25057 = arguments.length;
var i__9518__auto___25058 = (0);
while(true){
if((i__9518__auto___25058 < len__9517__auto___25057)){
args__9524__auto__.push((arguments[i__9518__auto___25058]));

var G__25059 = (i__9518__auto___25058 + (1));
i__9518__auto___25058 = G__25059;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((4) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9525__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
var G__25045 = cljs.core.cst$kw$css;
var G__25046 = (function (){var fexpr__25056 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25045,transition_length__$1){
return (function (G__25051,G__25052,G__25048,G__25055,G__25049,G__25053,G__25050,G__25054){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25048.cljs$core$IFn$_invoke$arity$1 ? G__25048.cljs$core$IFn$_invoke$arity$1(G__25049) : G__25048.call(null,G__25049)),cljs.core.cst$kw$bottom,(G__25048.cljs$core$IFn$_invoke$arity$1 ? G__25048.cljs$core$IFn$_invoke$arity$1(G__25049) : G__25048.call(null,G__25049)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25050),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25051)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25052;
if(cljs.core.truth_(and__8228__auto__)){
return (G__25053.cljs$core$IFn$_invoke$arity$1 ? G__25053.cljs$core$IFn$_invoke$arity$1(G__25054) : G__25053.call(null,G__25054));
} else {
return and__8228__auto__;
}
})())?G__25055:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25045,transition_length__$1))
);
return (fexpr__25056.cljs$core$IFn$_invoke$arity$8 ? fexpr__25056.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25056.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25047 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25045,G__25046,G__25047) : hoplon.core.div.call(null,G__25045,G__25046,G__25047));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25040){
var G__25041 = cljs.core.first(seq25040);
var seq25040__$1 = cljs.core.next(seq25040);
var G__25042 = cljs.core.first(seq25040__$1);
var seq25040__$2 = cljs.core.next(seq25040__$1);
var G__25043 = cljs.core.first(seq25040__$2);
var seq25040__$3 = cljs.core.next(seq25040__$2);
var G__25044 = cljs.core.first(seq25040__$3);
var seq25040__$4 = cljs.core.next(seq25040__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25041,G__25042,G__25043,G__25044,seq25040__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__8240__auto__ = open_QMARK_;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__8240__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var transition_length__$1 = (transition_length / (2));
var G__25060 = cljs.core.cst$kw$click;
var G__25061 = ((function (G__25060,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25060,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25062 = cljs.core.cst$kw$mouseenter;
var G__25063 = ((function (G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25064 = cljs.core.cst$kw$mouseleave;
var G__25065 = ((function (G__25060,G__25061,G__25062,G__25063,G__25064,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25060,G__25061,G__25062,G__25063,G__25064,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25066 = cljs.core.cst$kw$css;
var G__25067 = (function (){var fexpr__25078 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25070,G__25075,G__25072,G__25071,G__25073,G__25074,G__25069){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25069;
if(cljs.core.truth_(and__8228__auto__)){
return G__25070;
} else {
return and__8228__auto__;
}
})())?G__25071:(1))),")"].join(''),(function (){var G__25079 = (- G__25073);
return (G__25072.cljs$core$IFn$_invoke$arity$1 ? G__25072.cljs$core$IFn$_invoke$arity$1(G__25079) : G__25072.call(null,G__25079));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25074),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25075)].join(''),(G__25073 * (2)),"pointer",(1),"absolute",(G__25072.cljs$core$IFn$_invoke$arity$1 ? G__25072.cljs$core$IFn$_invoke$arity$1(G__25073) : G__25072.call(null,G__25073)),(G__25073 * (2)),(function (){var G__25080 = (- G__25073);
return (G__25072.cljs$core$IFn$_invoke$arity$1 ? G__25072.cljs$core$IFn$_invoke$arity$1(G__25080) : G__25072.call(null,G__25080));
})()]);
});})(G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25078.cljs$core$IFn$_invoke$arity$7 ? fexpr__25078.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25078.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25068 = (function (){var width = (function (){var fexpr__25084 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25082,G__25081){
var G__25085 = (G__25082 * 0.5);
return (G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25085) : G__25081.call(null,G__25085));
});})(G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25084.cljs$core$IFn$_invoke$arity$2 ? fexpr__25084.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25084.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25089 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25087,G__25086){
var G__25090 = (G__25087 / (12));
return (G__25086.cljs$core$IFn$_invoke$arity$1 ? G__25086.cljs$core$IFn$_invoke$arity$1(G__25090) : G__25086.call(null,G__25090));
});})(width,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25089.cljs$core$IFn$_invoke$arity$2 ? fexpr__25089.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25089.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25093 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25092,G__25091){
return (G__25091 + (G__25092 * -0.5));
});})(width,height,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25093.cljs$core$IFn$_invoke$arity$2 ? fexpr__25093.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25093.call(null,width,radius));
})();
var top = (function (){var fexpr__25096 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25095,G__25094){
return (G__25094 + (G__25095 * -0.5));
});})(width,height,left,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25096.cljs$core$IFn$_invoke$arity$2 ? fexpr__25096.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25096.call(null,height,radius));
})();
var offset = (function (){var fexpr__25098 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25097){
return (G__25097 * (2));
});})(width,height,left,top,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25098.cljs$core$IFn$_invoke$arity$1 ? fexpr__25098.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25098.call(null,height));
})();
var color = (function (){var fexpr__25102 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25099,G__25100){
var G__25103 = (G__25100.cljs$core$IFn$_invoke$arity$0 ? G__25100.cljs$core$IFn$_invoke$arity$0() : G__25100.call(null));
return (G__25099.cljs$core$IFn$_invoke$arity$1 ? G__25099.cljs$core$IFn$_invoke$arity$1(G__25103) : G__25099.call(null,G__25103));
});})(width,height,left,top,offset,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25102.cljs$core$IFn$_invoke$arity$2 ? fexpr__25102.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25102.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25110 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25106,G__25107,G__25104,G__25108,G__25105,G__25109){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25104.cljs$core$IFn$_invoke$arity$1 ? G__25104.cljs$core$IFn$_invoke$arity$1(G__25105) : G__25104.call(null,G__25105)),cljs.core.cst$kw$height,(G__25104.cljs$core$IFn$_invoke$arity$1 ? G__25104.cljs$core$IFn$_invoke$arity$1(G__25106) : G__25104.call(null,G__25106)),cljs.core.cst$kw$left,(G__25104.cljs$core$IFn$_invoke$arity$1 ? G__25104.cljs$core$IFn$_invoke$arity$1(G__25107) : G__25104.call(null,G__25107)),cljs.core.cst$kw$background_DASH_color,G__25108,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25109),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25109),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25110.cljs$core$IFn$_invoke$arity$6 ? fexpr__25110.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25110.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25111 = cljs.core.cst$kw$css;
var G__25112 = (function (){var fexpr__25123 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25111,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25114,G__25115,G__25117,G__25116,G__25113,G__25118){
var G__25124 = G__25114;
var G__25125 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25127 = (G__25116 - G__25117);
return (G__25115.cljs$core$IFn$_invoke$arity$1 ? G__25115.cljs$core$IFn$_invoke$arity$1(G__25127) : G__25115.call(null,G__25127));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25118)?G__25117:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25118)?"45deg":"0deg")),") "].join('')], null);
var G__25126 = (cljs.core.truth_(G__25118)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25113.cljs$core$IFn$_invoke$arity$3 ? G__25113.cljs$core$IFn$_invoke$arity$3(G__25124,G__25125,G__25126) : G__25113.call(null,G__25124,G__25125,G__25126));
});})(G__25111,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25123.cljs$core$IFn$_invoke$arity$6 ? fexpr__25123.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25123.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25111,G__25112) : hoplon.core.div.call(null,G__25111,G__25112));
})(),(function (){var G__25128 = cljs.core.cst$kw$css;
var G__25129 = (function (){var fexpr__25137 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25128,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25131,G__25132,G__25133,G__25130,G__25134){
var G__25138 = G__25131;
var G__25139 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25132.cljs$core$IFn$_invoke$arity$1 ? G__25132.cljs$core$IFn$_invoke$arity$1(G__25133) : G__25132.call(null,G__25133)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25134)?(0):(1))),")"].join('')], null);
return (G__25130.cljs$core$IFn$_invoke$arity$2 ? G__25130.cljs$core$IFn$_invoke$arity$2(G__25138,G__25139) : G__25130.call(null,G__25138,G__25139));
});})(G__25128,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25137.cljs$core$IFn$_invoke$arity$5 ? fexpr__25137.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25137.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25128,G__25129) : hoplon.core.div.call(null,G__25128,G__25129));
})(),(function (){var G__25140 = cljs.core.cst$kw$css;
var G__25141 = (function (){var fexpr__25153 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25140,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25146,G__25143,G__25144,G__25148,G__25145,G__25142,G__25147){
var G__25154 = G__25143;
var G__25155 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25157 = (G__25145 + ((2) * G__25146));
return (G__25144.cljs$core$IFn$_invoke$arity$1 ? G__25144.cljs$core$IFn$_invoke$arity$1(G__25157) : G__25144.call(null,G__25157));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25147)?G__25148:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25147)?"-45deg":"0deg")),") "].join('')], null);
var G__25156 = (cljs.core.truth_(G__25147)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25142.cljs$core$IFn$_invoke$arity$3 ? G__25142.cljs$core$IFn$_invoke$arity$3(G__25154,G__25155,G__25156) : G__25142.call(null,G__25154,G__25155,G__25156));
});})(G__25140,width,height,left,top,offset,color,default_css,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25153.cljs$core$IFn$_invoke$arity$7 ? fexpr__25153.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25153.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25140,G__25141) : hoplon.core.div.call(null,G__25140,G__25141));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068) : hoplon.core.div.call(null,G__25060,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25160 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25158,G__25159){
return (G__25158 / ((1) + G__25159));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25160.cljs$core$IFn$_invoke$arity$2 ? fexpr__25160.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25160.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25163 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25162,G__25161){
return (G__25161 * G__25162);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25163.cljs$core$IFn$_invoke$arity$2 ? fexpr__25163.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25163.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25166 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25165,G__25164){
return (((2) * Math.PI) / (G__25164.cljs$core$IFn$_invoke$arity$1 ? G__25164.cljs$core$IFn$_invoke$arity$1(G__25165) : G__25164.call(null,G__25165)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25166.cljs$core$IFn$_invoke$arity$2 ? fexpr__25166.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25166.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25176 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25171,G__25167,G__25169,G__25168,G__25170){
var G__25177 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25179 = G__25169;
var G__25180 = (i * G__25170);
return (G__25168.cljs$core$IFn$_invoke$arity$2 ? G__25168.cljs$core$IFn$_invoke$arity$2(G__25179,G__25180) : G__25168.call(null,G__25179,G__25180));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25178 = G__25171;
return (G__25167.cljs$core$IFn$_invoke$arity$2 ? G__25167.cljs$core$IFn$_invoke$arity$2(G__25177,G__25178) : G__25167.call(null,G__25177,G__25178));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25176.cljs$core$IFn$_invoke$arity$5 ? fexpr__25176.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25176.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25184 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25183,G__25181,G__25182){
return (G__25181 / (G__25182.cljs$core$IFn$_invoke$arity$1 ? G__25182.cljs$core$IFn$_invoke$arity$1(G__25183) : G__25182.call(null,G__25183)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25184.cljs$core$IFn$_invoke$arity$3 ? fexpr__25184.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25184.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25185 = cljs.core.cst$kw$css;
var G__25186 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25187 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25185,G__25186,G__25187) : hoplon.core.div.call(null,G__25185,G__25186,G__25187));
})(),(function (){var G__25188 = cljs.core.cst$kw$css;
var G__25189 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25190 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18520__auto__){
var vec__25203 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25213 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25214){
var vec__25215 = p__25214;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(0),null);
var vec__25218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25218,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25218,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25215,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25213.cljs$core$IFn$_invoke$arity$1 ? fexpr__25213.cljs$core$IFn$_invoke$arity$1(item__18520__auto__) : fexpr__25213.call(null,item__18520__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(3),null);
var transition_delay = (function (){var fexpr__25224 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25223,G__25222,G__25221){
if(cljs.core.truth_(G__25221)){
return (G__25222 * G__25223);
} else {
return (0);
}
});})(vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25224.cljs$core$IFn$_invoke$arity$3 ? fexpr__25224.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25224.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25226 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25225){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25225);
});})(transition_delay,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25226.cljs$core$IFn$_invoke$arity$1 ? fexpr__25226.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25226.call(null,item));
})();
var text = (function (){var fexpr__25228 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25227){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25227);
});})(transition_delay,url,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25228.cljs$core$IFn$_invoke$arity$1 ? fexpr__25228.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25228.call(null,item));
})();
var handler = (function (){var fexpr__25230 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25229){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25229);
});})(transition_delay,url,text,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25230.cljs$core$IFn$_invoke$arity$1 ? fexpr__25230.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25230.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25233 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25231,G__25232){
var and__8228__auto__ = G__25231;
if(cljs.core.truth_(and__8228__auto__)){
return G__25232;
} else {
return and__8228__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25233.cljs$core$IFn$_invoke$arity$2 ? fexpr__25233.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25233.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25234 = cljs.core.cst$kw$css;
var G__25235 = (function (){var fexpr__25246 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25234,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25242,G__25239,G__25243,G__25240,G__25237,G__25238,G__25241){
var G__25247 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25238),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25239)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25240),"s"].join('')], null);
var G__25248 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25241)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25242),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25243),"px)"].join(''):"translate(0, 0)")], null);
return (G__25237.cljs$core$IFn$_invoke$arity$2 ? G__25237.cljs$core$IFn$_invoke$arity$2(G__25247,G__25248) : G__25237.call(null,G__25247,G__25248));
});})(G__25234,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25246.cljs$core$IFn$_invoke$arity$7 ? fexpr__25246.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25246.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25236 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25251 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25249,G__25250){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25249)?"black":G__25250),cljs.core.cst$kw$display,"inline"], null);
});})(G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25251.cljs$core$IFn$_invoke$arity$2 ? fexpr__25251.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25251.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25252 = cljs.core.cst$kw$mouseenter;
var G__25253 = ((function (G__25252,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25252,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25254 = cljs.core.cst$kw$mouseleave;
var G__25255 = ((function (G__25252,G__25253,G__25254,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25252,G__25253,G__25254,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25256 = cljs.core.cst$kw$click;
var G__25257 = ((function (G__25252,G__25253,G__25254,G__25255,G__25256,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25252,G__25253,G__25254,G__25255,G__25256,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25252,G__25253,G__25254,G__25255,G__25256,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25252,G__25253,G__25254,G__25255,G__25256,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25258 = cljs.core.cst$kw$css;
var G__25259 = (function (){var fexpr__25271 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25267,G__25265,G__25264,G__25263,G__25262,G__25266,G__25268){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25262)?G__25263:(1))),")"].join(''),(function (){var G__25272 = (- G__25265);
return (G__25264.cljs$core$IFn$_invoke$arity$1 ? G__25264.cljs$core$IFn$_invoke$arity$1(G__25272) : G__25264.call(null,G__25272));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25266 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25267)].join(''),"hidden","white",((2) * G__25265),"pointer",(cljs.core.truth_(G__25268)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25268),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25264.cljs$core$IFn$_invoke$arity$1 ? G__25264.cljs$core$IFn$_invoke$arity$1(G__25265) : G__25264.call(null,G__25265)),"contain",((2) * G__25265),(function (){var G__25273 = (- G__25265);
return (G__25264.cljs$core$IFn$_invoke$arity$1 ? G__25264.cljs$core$IFn$_invoke$arity$1(G__25273) : G__25264.call(null,G__25273));
})()]);
});})(G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25271.cljs$core$IFn$_invoke$arity$7 ? fexpr__25271.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25271.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25260 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25274 = cljs.core.cst$kw$css;
var G__25275 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25276 = (function (){var G__25277 = (function (){var G__25278 = cljs.core.cst$kw$valign;
var G__25279 = "center";
var G__25280 = cljs.core.cst$kw$css;
var G__25281 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25282 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25278,G__25279,G__25280,G__25281,G__25282) : hoplon.core.td.call(null,G__25278,G__25279,G__25280,G__25281,G__25282));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25277) : hoplon.core.tr.call(null,G__25277));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25274,G__25275,G__25276) : hoplon.core.table.call(null,G__25274,G__25275,G__25276));
});})(G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18530__auto__,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18530__auto__,alt__18531__auto__,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25283 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25283.cljs$core$IFn$_invoke$arity$1 ? fexpr__25283.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25283.call(null,text));
})();
var G__25261 = (function (){var G__25284 = cljs.core.cst$kw$css;
var G__25285 = (function (){var fexpr__25290 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25284,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25260,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25287,G__25288,G__25286,G__25289){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25286),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25287)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25288),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25289)?(0):(1))], null);
});})(G__25284,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25260,G__25234,G__25235,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25203,x,i,y,item,G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25290.cljs$core$IFn$_invoke$arity$4 ? fexpr__25290.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25290.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25284,G__25285) : hoplon.core.div.call(null,G__25284,G__25285));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261) : hoplon.core.div.call(null,G__25252,G__25253,G__25254,G__25255,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25234,G__25235,G__25236) : hoplon.core.div.call(null,G__25234,G__25235,G__25236));
});})(G__25188,G__25189,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25188,G__25189,G__25190) : hoplon.core.div.call(null,G__25188,G__25189,G__25190));
})()], 0));
});
