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
var len__9517__auto___25052 = arguments.length;
var i__9518__auto___25053 = (0);
while(true){
if((i__9518__auto___25053 < len__9517__auto___25052)){
args__9524__auto__.push((arguments[i__9518__auto___25053]));

var G__25054 = (i__9518__auto___25053 + (1));
i__9518__auto___25053 = G__25054;
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
var G__25040 = cljs.core.cst$kw$css;
var G__25041 = (function (){var fexpr__25051 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25040,transition_length__$1){
return (function (G__25046,G__25047,G__25043,G__25050,G__25044,G__25048,G__25045,G__25049){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25044) : G__25043.call(null,G__25044)),cljs.core.cst$kw$bottom,(G__25043.cljs$core$IFn$_invoke$arity$1 ? G__25043.cljs$core$IFn$_invoke$arity$1(G__25044) : G__25043.call(null,G__25044)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25045),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25046)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25047;
if(cljs.core.truth_(and__8228__auto__)){
return (G__25048.cljs$core$IFn$_invoke$arity$1 ? G__25048.cljs$core$IFn$_invoke$arity$1(G__25049) : G__25048.call(null,G__25049));
} else {
return and__8228__auto__;
}
})())?G__25050:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25040,transition_length__$1))
);
return (fexpr__25051.cljs$core$IFn$_invoke$arity$8 ? fexpr__25051.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25051.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25042 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25040,G__25041,G__25042) : hoplon.core.div.call(null,G__25040,G__25041,G__25042));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25035){
var G__25036 = cljs.core.first(seq25035);
var seq25035__$1 = cljs.core.next(seq25035);
var G__25037 = cljs.core.first(seq25035__$1);
var seq25035__$2 = cljs.core.next(seq25035__$1);
var G__25038 = cljs.core.first(seq25035__$2);
var seq25035__$3 = cljs.core.next(seq25035__$2);
var G__25039 = cljs.core.first(seq25035__$3);
var seq25035__$4 = cljs.core.next(seq25035__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25036,G__25037,G__25038,G__25039,seq25035__$4);
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
var G__25055 = cljs.core.cst$kw$click;
var G__25056 = ((function (G__25055,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25055,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25057 = cljs.core.cst$kw$mouseenter;
var G__25058 = ((function (G__25055,G__25056,G__25057,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25055,G__25056,G__25057,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25059 = cljs.core.cst$kw$mouseleave;
var G__25060 = ((function (G__25055,G__25056,G__25057,G__25058,G__25059,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25055,G__25056,G__25057,G__25058,G__25059,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25061 = cljs.core.cst$kw$css;
var G__25062 = (function (){var fexpr__25073 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25065,G__25070,G__25067,G__25066,G__25068,G__25069,G__25064){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25064;
if(cljs.core.truth_(and__8228__auto__)){
return G__25065;
} else {
return and__8228__auto__;
}
})())?G__25066:(1))),")"].join(''),(function (){var G__25074 = (- G__25068);
return (G__25067.cljs$core$IFn$_invoke$arity$1 ? G__25067.cljs$core$IFn$_invoke$arity$1(G__25074) : G__25067.call(null,G__25074));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25069),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25070)].join(''),(G__25068 * (2)),"pointer",(1),"absolute",(G__25067.cljs$core$IFn$_invoke$arity$1 ? G__25067.cljs$core$IFn$_invoke$arity$1(G__25068) : G__25067.call(null,G__25068)),(G__25068 * (2)),(function (){var G__25075 = (- G__25068);
return (G__25067.cljs$core$IFn$_invoke$arity$1 ? G__25067.cljs$core$IFn$_invoke$arity$1(G__25075) : G__25067.call(null,G__25075));
})()]);
});})(G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25073.cljs$core$IFn$_invoke$arity$7 ? fexpr__25073.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25073.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25063 = (function (){var width = (function (){var fexpr__25079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25077,G__25076){
var G__25080 = (G__25077 * 0.5);
return (G__25076.cljs$core$IFn$_invoke$arity$1 ? G__25076.cljs$core$IFn$_invoke$arity$1(G__25080) : G__25076.call(null,G__25080));
});})(G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25079.cljs$core$IFn$_invoke$arity$2 ? fexpr__25079.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25079.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25084 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25082,G__25081){
var G__25085 = (G__25082 / (12));
return (G__25081.cljs$core$IFn$_invoke$arity$1 ? G__25081.cljs$core$IFn$_invoke$arity$1(G__25085) : G__25081.call(null,G__25085));
});})(width,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25084.cljs$core$IFn$_invoke$arity$2 ? fexpr__25084.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25084.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25088 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25087,G__25086){
return (G__25086 + (G__25087 * -0.5));
});})(width,height,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25088.cljs$core$IFn$_invoke$arity$2 ? fexpr__25088.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25088.call(null,width,radius));
})();
var top = (function (){var fexpr__25091 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25090,G__25089){
return (G__25089 + (G__25090 * -0.5));
});})(width,height,left,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25091.cljs$core$IFn$_invoke$arity$2 ? fexpr__25091.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25091.call(null,height,radius));
})();
var offset = (function (){var fexpr__25093 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25092){
return (G__25092 * (2));
});})(width,height,left,top,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25093.cljs$core$IFn$_invoke$arity$1 ? fexpr__25093.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25093.call(null,height));
})();
var color = (function (){var fexpr__25097 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25094,G__25095){
var G__25098 = (G__25095.cljs$core$IFn$_invoke$arity$0 ? G__25095.cljs$core$IFn$_invoke$arity$0() : G__25095.call(null));
return (G__25094.cljs$core$IFn$_invoke$arity$1 ? G__25094.cljs$core$IFn$_invoke$arity$1(G__25098) : G__25094.call(null,G__25098));
});})(width,height,left,top,offset,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25097.cljs$core$IFn$_invoke$arity$2 ? fexpr__25097.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25097.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25105 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25101,G__25102,G__25099,G__25103,G__25100,G__25104){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25099.cljs$core$IFn$_invoke$arity$1 ? G__25099.cljs$core$IFn$_invoke$arity$1(G__25100) : G__25099.call(null,G__25100)),cljs.core.cst$kw$height,(G__25099.cljs$core$IFn$_invoke$arity$1 ? G__25099.cljs$core$IFn$_invoke$arity$1(G__25101) : G__25099.call(null,G__25101)),cljs.core.cst$kw$left,(G__25099.cljs$core$IFn$_invoke$arity$1 ? G__25099.cljs$core$IFn$_invoke$arity$1(G__25102) : G__25099.call(null,G__25102)),cljs.core.cst$kw$background_DASH_color,G__25103,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25104),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25104),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25105.cljs$core$IFn$_invoke$arity$6 ? fexpr__25105.cljs$core$IFn$_invoke$arity$6(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1) : fexpr__25105.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25106 = cljs.core.cst$kw$css;
var G__25107 = (function (){var fexpr__25118 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25106,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25109,G__25110,G__25112,G__25111,G__25108,G__25113){
var G__25119 = G__25109;
var G__25120 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25122 = (G__25111 - G__25112);
return (G__25110.cljs$core$IFn$_invoke$arity$1 ? G__25110.cljs$core$IFn$_invoke$arity$1(G__25122) : G__25110.call(null,G__25122));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25113)?G__25112:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25113)?"45deg":"0deg")),") "].join('')], null);
var G__25121 = (cljs.core.truth_(G__25113)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25108.cljs$core$IFn$_invoke$arity$3 ? G__25108.cljs$core$IFn$_invoke$arity$3(G__25119,G__25120,G__25121) : G__25108.call(null,G__25119,G__25120,G__25121));
});})(G__25106,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25118.cljs$core$IFn$_invoke$arity$6 ? fexpr__25118.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25118.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25106,G__25107) : hoplon.core.div.call(null,G__25106,G__25107));
})(),(function (){var G__25123 = cljs.core.cst$kw$css;
var G__25124 = (function (){var fexpr__25132 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25123,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25126,G__25127,G__25128,G__25125,G__25129){
var G__25133 = G__25126;
var G__25134 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25127.cljs$core$IFn$_invoke$arity$1 ? G__25127.cljs$core$IFn$_invoke$arity$1(G__25128) : G__25127.call(null,G__25128)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25129)?(0):(1))),")"].join('')], null);
return (G__25125.cljs$core$IFn$_invoke$arity$2 ? G__25125.cljs$core$IFn$_invoke$arity$2(G__25133,G__25134) : G__25125.call(null,G__25133,G__25134));
});})(G__25123,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25132.cljs$core$IFn$_invoke$arity$5 ? fexpr__25132.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25132.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25123,G__25124) : hoplon.core.div.call(null,G__25123,G__25124));
})(),(function (){var G__25135 = cljs.core.cst$kw$css;
var G__25136 = (function (){var fexpr__25148 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25135,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25141,G__25138,G__25139,G__25143,G__25140,G__25137,G__25142){
var G__25149 = G__25138;
var G__25150 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25152 = (G__25140 + ((2) * G__25141));
return (G__25139.cljs$core$IFn$_invoke$arity$1 ? G__25139.cljs$core$IFn$_invoke$arity$1(G__25152) : G__25139.call(null,G__25152));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25142)?G__25143:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25142)?"-45deg":"0deg")),") "].join('')], null);
var G__25151 = (cljs.core.truth_(G__25142)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25137.cljs$core$IFn$_invoke$arity$3 ? G__25137.cljs$core$IFn$_invoke$arity$3(G__25149,G__25150,G__25151) : G__25137.call(null,G__25149,G__25150,G__25151));
});})(G__25135,width,height,left,top,offset,color,default_css,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25148.cljs$core$IFn$_invoke$arity$7 ? fexpr__25148.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25148.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25135,G__25136) : hoplon.core.div.call(null,G__25135,G__25136));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,G__25063) : hoplon.core.div.call(null,G__25055,G__25056,G__25057,G__25058,G__25059,G__25060,G__25061,G__25062,G__25063));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25155 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25153,G__25154){
return (G__25153 / ((1) + G__25154));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25155.cljs$core$IFn$_invoke$arity$2 ? fexpr__25155.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25155.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25158 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25157,G__25156){
return (G__25156 * G__25157);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25158.cljs$core$IFn$_invoke$arity$2 ? fexpr__25158.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25158.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25161 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25160,G__25159){
return (((2) * Math.PI) / (G__25159.cljs$core$IFn$_invoke$arity$1 ? G__25159.cljs$core$IFn$_invoke$arity$1(G__25160) : G__25159.call(null,G__25160)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25161.cljs$core$IFn$_invoke$arity$2 ? fexpr__25161.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25161.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25171 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25166,G__25162,G__25164,G__25163,G__25165){
var G__25172 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25174 = G__25164;
var G__25175 = (i * G__25165);
return (G__25163.cljs$core$IFn$_invoke$arity$2 ? G__25163.cljs$core$IFn$_invoke$arity$2(G__25174,G__25175) : G__25163.call(null,G__25174,G__25175));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25173 = G__25166;
return (G__25162.cljs$core$IFn$_invoke$arity$2 ? G__25162.cljs$core$IFn$_invoke$arity$2(G__25172,G__25173) : G__25162.call(null,G__25172,G__25173));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25171.cljs$core$IFn$_invoke$arity$5 ? fexpr__25171.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25171.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25179 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25178,G__25176,G__25177){
return (G__25176 / (G__25177.cljs$core$IFn$_invoke$arity$1 ? G__25177.cljs$core$IFn$_invoke$arity$1(G__25178) : G__25177.call(null,G__25178)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25179.cljs$core$IFn$_invoke$arity$3 ? fexpr__25179.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25179.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25180 = cljs.core.cst$kw$css;
var G__25181 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25182 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25180,G__25181,G__25182) : hoplon.core.div.call(null,G__25180,G__25181,G__25182));
})(),(function (){var G__25183 = cljs.core.cst$kw$css;
var G__25184 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25185 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18520__auto__){
var vec__25198 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25208 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25209){
var vec__25210 = p__25209;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25210,(0),null);
var vec__25213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25210,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25213,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25213,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25210,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25208.cljs$core$IFn$_invoke$arity$1 ? fexpr__25208.cljs$core$IFn$_invoke$arity$1(item__18520__auto__) : fexpr__25208.call(null,item__18520__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198,(3),null);
var transition_delay = (function (){var fexpr__25219 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25218,G__25217,G__25216){
if(cljs.core.truth_(G__25216)){
return (G__25217 * G__25218);
} else {
return (0);
}
});})(vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25219.cljs$core$IFn$_invoke$arity$3 ? fexpr__25219.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25219.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25221 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25220){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25220);
});})(transition_delay,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25221.cljs$core$IFn$_invoke$arity$1 ? fexpr__25221.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25221.call(null,item));
})();
var text = (function (){var fexpr__25223 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25222){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25222);
});})(transition_delay,url,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25223.cljs$core$IFn$_invoke$arity$1 ? fexpr__25223.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25223.call(null,item));
})();
var handler = (function (){var fexpr__25225 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25224){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25224);
});})(transition_delay,url,text,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25225.cljs$core$IFn$_invoke$arity$1 ? fexpr__25225.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25225.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25228 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25226,G__25227){
var and__8228__auto__ = G__25226;
if(cljs.core.truth_(and__8228__auto__)){
return G__25227;
} else {
return and__8228__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25228.cljs$core$IFn$_invoke$arity$2 ? fexpr__25228.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25228.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25229 = cljs.core.cst$kw$css;
var G__25230 = (function (){var fexpr__25241 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25229,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25237,G__25234,G__25238,G__25235,G__25232,G__25233,G__25236){
var G__25242 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25233),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25234)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25235),"s"].join('')], null);
var G__25243 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25236)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25237),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25238),"px)"].join(''):"translate(0, 0)")], null);
return (G__25232.cljs$core$IFn$_invoke$arity$2 ? G__25232.cljs$core$IFn$_invoke$arity$2(G__25242,G__25243) : G__25232.call(null,G__25242,G__25243));
});})(G__25229,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25241.cljs$core$IFn$_invoke$arity$7 ? fexpr__25241.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25241.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25231 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25246 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25244,G__25245){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25244)?"black":G__25245),cljs.core.cst$kw$display,"inline"], null);
});})(G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25246.cljs$core$IFn$_invoke$arity$2 ? fexpr__25246.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25246.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25247 = cljs.core.cst$kw$mouseenter;
var G__25248 = ((function (G__25247,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25247,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25249 = cljs.core.cst$kw$mouseleave;
var G__25250 = ((function (G__25247,G__25248,G__25249,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25247,G__25248,G__25249,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25251 = cljs.core.cst$kw$click;
var G__25252 = ((function (G__25247,G__25248,G__25249,G__25250,G__25251,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25247,G__25248,G__25249,G__25250,G__25251,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25247,G__25248,G__25249,G__25250,G__25251,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25247,G__25248,G__25249,G__25250,G__25251,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25253 = cljs.core.cst$kw$css;
var G__25254 = (function (){var fexpr__25266 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25262,G__25260,G__25259,G__25258,G__25257,G__25261,G__25263){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25257)?G__25258:(1))),")"].join(''),(function (){var G__25267 = (- G__25260);
return (G__25259.cljs$core$IFn$_invoke$arity$1 ? G__25259.cljs$core$IFn$_invoke$arity$1(G__25267) : G__25259.call(null,G__25267));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25261 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25262)].join(''),"hidden","white",((2) * G__25260),"pointer",(cljs.core.truth_(G__25263)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25263),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25259.cljs$core$IFn$_invoke$arity$1 ? G__25259.cljs$core$IFn$_invoke$arity$1(G__25260) : G__25259.call(null,G__25260)),"contain",((2) * G__25260),(function (){var G__25268 = (- G__25260);
return (G__25259.cljs$core$IFn$_invoke$arity$1 ? G__25259.cljs$core$IFn$_invoke$arity$1(G__25268) : G__25259.call(null,G__25268));
})()]);
});})(G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25266.cljs$core$IFn$_invoke$arity$7 ? fexpr__25266.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25266.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25255 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25269 = cljs.core.cst$kw$css;
var G__25270 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25271 = (function (){var G__25272 = (function (){var G__25273 = cljs.core.cst$kw$valign;
var G__25274 = "center";
var G__25275 = cljs.core.cst$kw$css;
var G__25276 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25277 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25273,G__25274,G__25275,G__25276,G__25277) : hoplon.core.td.call(null,G__25273,G__25274,G__25275,G__25276,G__25277));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25272) : hoplon.core.tr.call(null,G__25272));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25269,G__25270,G__25271) : hoplon.core.table.call(null,G__25269,G__25270,G__25271));
});})(G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18530__auto__,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18530__auto__,alt__18531__auto__,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25278 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25278.cljs$core$IFn$_invoke$arity$1 ? fexpr__25278.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25278.call(null,text));
})();
var G__25256 = (function (){var G__25279 = cljs.core.cst$kw$css;
var G__25280 = (function (){var fexpr__25285 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25279,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25282,G__25283,G__25281,G__25284){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25281),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25282)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25283),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25284)?(0):(1))], null);
});})(G__25279,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25229,G__25230,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25198,x,i,y,item,G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25285.cljs$core$IFn$_invoke$arity$4 ? fexpr__25285.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25285.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25279,G__25280) : hoplon.core.div.call(null,G__25279,G__25280));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25256) : hoplon.core.div.call(null,G__25247,G__25248,G__25249,G__25250,G__25251,G__25252,G__25253,G__25254,G__25255,G__25256));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25229,G__25230,G__25231) : hoplon.core.div.call(null,G__25229,G__25230,G__25231));
});})(G__25183,G__25184,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25183,G__25184,G__25185) : hoplon.core.div.call(null,G__25183,G__25184,G__25185));
})()], 0));
});
