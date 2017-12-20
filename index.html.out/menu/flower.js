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
var len__9517__auto___25058 = arguments.length;
var i__9518__auto___25059 = (0);
while(true){
if((i__9518__auto___25059 < len__9517__auto___25058)){
args__9524__auto__.push((arguments[i__9518__auto___25059]));

var G__25060 = (i__9518__auto___25059 + (1));
i__9518__auto___25059 = G__25060;
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
var G__25046 = cljs.core.cst$kw$css;
var G__25047 = (function (){var fexpr__25057 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25046,transition_length__$1){
return (function (G__25052,G__25053,G__25049,G__25056,G__25050,G__25054,G__25051,G__25055){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,(G__25049.cljs$core$IFn$_invoke$arity$1 ? G__25049.cljs$core$IFn$_invoke$arity$1(G__25050) : G__25049.call(null,G__25050)),cljs.core.cst$kw$bottom,(G__25049.cljs$core$IFn$_invoke$arity$1 ? G__25049.cljs$core$IFn$_invoke$arity$1(G__25050) : G__25049.call(null,G__25050)),cljs.core.cst$kw$overflow,"visible",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25051),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25052)].join(''),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25053;
if(cljs.core.truth_(and__8228__auto__)){
return (G__25054.cljs$core$IFn$_invoke$arity$1 ? G__25054.cljs$core$IFn$_invoke$arity$1(G__25055) : G__25054.call(null,G__25055));
} else {
return and__8228__auto__;
}
})())?G__25056:(1))),")"].join(''),cljs.core.cst$kw$z_DASH_index,(3)], null);
});})(G__25046,transition_length__$1))
);
return (fexpr__25057.cljs$core$IFn$_invoke$arity$8 ? fexpr__25057.cljs$core$IFn$_invoke$arity$8(menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_) : fexpr__25057.call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_));
})();
var G__25048 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25046,G__25047,G__25048) : hoplon.core.div.call(null,G__25046,G__25047,G__25048));
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq25041){
var G__25042 = cljs.core.first(seq25041);
var seq25041__$1 = cljs.core.next(seq25041);
var G__25043 = cljs.core.first(seq25041__$1);
var seq25041__$2 = cljs.core.next(seq25041__$1);
var G__25044 = cljs.core.first(seq25041__$2);
var seq25041__$3 = cljs.core.next(seq25041__$2);
var G__25045 = cljs.core.first(seq25041__$3);
var seq25041__$4 = cljs.core.next(seq25041__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__25042,G__25043,G__25044,G__25045,seq25041__$4);
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
var G__25061 = cljs.core.cst$kw$click;
var G__25062 = ((function (G__25061,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK___$1,cljs.core.not);
});})(G__25061,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25063 = cljs.core.cst$kw$mouseenter;
var G__25064 = ((function (G__25061,G__25062,G__25063,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,true);
});})(G__25061,G__25062,G__25063,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25065 = cljs.core.cst$kw$mouseleave;
var G__25066 = ((function (G__25061,G__25062,G__25063,G__25064,G__25065,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK___$1,false);
});})(G__25061,G__25062,G__25063,G__25064,G__25065,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
;
var G__25067 = cljs.core.cst$kw$css;
var G__25068 = (function (){var fexpr__25079 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25071,G__25076,G__25073,G__25072,G__25074,G__25075,G__25070){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__8228__auto__ = G__25070;
if(cljs.core.truth_(and__8228__auto__)){
return G__25071;
} else {
return and__8228__auto__;
}
})())?G__25072:(1))),")"].join(''),(function (){var G__25080 = (- G__25074);
return (G__25073.cljs$core$IFn$_invoke$arity$1 ? G__25073.cljs$core$IFn$_invoke$arity$1(G__25080) : G__25073.call(null,G__25080));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25075),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25076)].join(''),(G__25074 * (2)),"pointer",(1),"absolute",(G__25073.cljs$core$IFn$_invoke$arity$1 ? G__25073.cljs$core$IFn$_invoke$arity$1(G__25074) : G__25073.call(null,G__25074)),(G__25074 * (2)),(function (){var G__25081 = (- G__25074);
return (G__25073.cljs$core$IFn$_invoke$arity$1 ? G__25073.cljs$core$IFn$_invoke$arity$1(G__25081) : G__25073.call(null,G__25081));
})()]);
});})(G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25079.cljs$core$IFn$_invoke$arity$7 ? fexpr__25079.cljs$core$IFn$_invoke$arity$7(mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1) : fexpr__25079.call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1));
})();
var G__25069 = (function (){var width = (function (){var fexpr__25085 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25083,G__25082){
var G__25086 = (G__25083 * 0.5);
return (G__25082.cljs$core$IFn$_invoke$arity$1 ? G__25082.cljs$core$IFn$_invoke$arity$1(G__25086) : G__25082.call(null,G__25086));
});})(G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25085.cljs$core$IFn$_invoke$arity$2 ? fexpr__25085.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25085.call(null,radius,Math.round));
})();
var height = (function (){var fexpr__25090 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25088,G__25087){
var G__25091 = (G__25088 / (12));
return (G__25087.cljs$core$IFn$_invoke$arity$1 ? G__25087.cljs$core$IFn$_invoke$arity$1(G__25091) : G__25087.call(null,G__25091));
});})(width,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25090.cljs$core$IFn$_invoke$arity$2 ? fexpr__25090.cljs$core$IFn$_invoke$arity$2(radius,Math.round) : fexpr__25090.call(null,radius,Math.round));
})();
var left = (function (){var fexpr__25094 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25093,G__25092){
return (G__25092 + (G__25093 * -0.5));
});})(width,height,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25094.cljs$core$IFn$_invoke$arity$2 ? fexpr__25094.cljs$core$IFn$_invoke$arity$2(width,radius) : fexpr__25094.call(null,width,radius));
})();
var top = (function (){var fexpr__25097 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25096,G__25095){
return (G__25095 + (G__25096 * -0.5));
});})(width,height,left,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25097.cljs$core$IFn$_invoke$arity$2 ? fexpr__25097.cljs$core$IFn$_invoke$arity$2(height,radius) : fexpr__25097.call(null,height,radius));
})();
var offset = (function (){var fexpr__25099 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25098){
return (G__25098 * (2));
});})(width,height,left,top,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25099.cljs$core$IFn$_invoke$arity$1 ? fexpr__25099.cljs$core$IFn$_invoke$arity$1(height) : fexpr__25099.call(null,height));
})();
var color = (function (){var fexpr__25103 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25100,G__25101){
var G__25104 = (G__25101.cljs$core$IFn$_invoke$arity$0 ? G__25101.cljs$core$IFn$_invoke$arity$0() : G__25101.call(null));
return (G__25100.cljs$core$IFn$_invoke$arity$1 ? G__25100.cljs$core$IFn$_invoke$arity$1(G__25104) : G__25100.call(null,G__25104));
});})(width,height,left,top,offset,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25103.cljs$core$IFn$_invoke$arity$2 ? fexpr__25103.cljs$core$IFn$_invoke$arity$2(cljs.core.last,colours.ui_gradients.stops) : fexpr__25103.call(null,cljs.core.last,colours.ui_gradients.stops));
})();
var default_css = (function (){var fexpr__25113 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (width,height,left,top,offset,color,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25107,G__25109,G__25105,G__25110,G__25106,G__25111,G__25108){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25105.cljs$core$IFn$_invoke$arity$1 ? G__25105.cljs$core$IFn$_invoke$arity$1(G__25106) : G__25105.call(null,G__25106)),cljs.core.cst$kw$height,(G__25105.cljs$core$IFn$_invoke$arity$1 ? G__25105.cljs$core$IFn$_invoke$arity$1(G__25107) : G__25105.call(null,G__25107)),cljs.core.cst$kw$left,(function (){var G__25114 = (G__25108.cljs$core$IFn$_invoke$arity$1 ? G__25108.cljs$core$IFn$_invoke$arity$1(G__25109) : G__25108.call(null,G__25109));
return (G__25105.cljs$core$IFn$_invoke$arity$1 ? G__25105.cljs$core$IFn$_invoke$arity$1(G__25114) : G__25105.call(null,G__25114));
})(),cljs.core.cst$kw$background_DASH_color,G__25110,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25111),"s ease, ","background-color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25111),"s ease"].join('')], null);
});})(width,height,left,top,offset,color,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25113.cljs$core$IFn$_invoke$arity$7 ? fexpr__25113.cljs$core$IFn$_invoke$arity$7(height,left,unit.conversion.n__GT_px,color,width,transition_length__$1,Math.round) : fexpr__25113.call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1,Math.round));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25115 = cljs.core.cst$kw$css;
var G__25116 = (function (){var fexpr__25127 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25115,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25118,G__25119,G__25121,G__25120,G__25117,G__25122){
var G__25128 = G__25118;
var G__25129 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25131 = (G__25120 - G__25121);
return (G__25119.cljs$core$IFn$_invoke$arity$1 ? G__25119.cljs$core$IFn$_invoke$arity$1(G__25131) : G__25119.call(null,G__25131));
})(),cljs.core.cst$kw$transform,["translate3d(0px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25122)?G__25121:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25122)?"45deg":"0deg")),") "].join('')], null);
var G__25130 = (cljs.core.truth_(G__25122)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25117.cljs$core$IFn$_invoke$arity$3 ? G__25117.cljs$core$IFn$_invoke$arity$3(G__25128,G__25129,G__25130) : G__25117.call(null,G__25128,G__25129,G__25130));
});})(G__25115,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25127.cljs$core$IFn$_invoke$arity$6 ? fexpr__25127.cljs$core$IFn$_invoke$arity$6(default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25127.call(null,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25115,G__25116) : hoplon.core.div.call(null,G__25115,G__25116));
})(),(function (){var G__25132 = cljs.core.cst$kw$css;
var G__25133 = (function (){var fexpr__25141 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25132,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25135,G__25136,G__25137,G__25134,G__25138){
var G__25142 = G__25135;
var G__25143 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(G__25136.cljs$core$IFn$_invoke$arity$1 ? G__25136.cljs$core$IFn$_invoke$arity$1(G__25137) : G__25136.call(null,G__25137)),cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25138)?(0):(1))),")"].join('')], null);
return (G__25134.cljs$core$IFn$_invoke$arity$2 ? G__25134.cljs$core$IFn$_invoke$arity$2(G__25142,G__25143) : G__25134.call(null,G__25142,G__25143));
});})(G__25132,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25141.cljs$core$IFn$_invoke$arity$5 ? fexpr__25141.cljs$core$IFn$_invoke$arity$5(default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1) : fexpr__25141.call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25132,G__25133) : hoplon.core.div.call(null,G__25132,G__25133));
})(),(function (){var G__25144 = cljs.core.cst$kw$css;
var G__25145 = (function (){var fexpr__25157 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25144,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__25150,G__25147,G__25148,G__25152,G__25149,G__25146,G__25151){
var G__25158 = G__25147;
var G__25159 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(function (){var G__25161 = (G__25149 + ((2) * G__25150));
return (G__25148.cljs$core$IFn$_invoke$arity$1 ? G__25148.cljs$core$IFn$_invoke$arity$1(G__25161) : G__25148.call(null,G__25161));
})(),cljs.core.cst$kw$transform,["translate3d(0px, -",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25151)?G__25152:(0))),"px, 0px)","rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25151)?"-45deg":"0deg")),") "].join('')], null);
var G__25160 = (cljs.core.truth_(G__25151)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"white"], null):null);
return (G__25146.cljs$core$IFn$_invoke$arity$3 ? G__25146.cljs$core$IFn$_invoke$arity$3(G__25158,G__25159,G__25160) : G__25146.call(null,G__25158,G__25159,G__25160));
});})(G__25144,width,height,left,top,offset,color,default_css,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
);
return (fexpr__25157.cljs$core$IFn$_invoke$arity$7 ? fexpr__25157.cljs$core$IFn$_invoke$arity$7(height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1) : fexpr__25157.call(null,height,default_css,unit.conversion.n__GT_px,offset,top,cljs.core.merge,open_QMARK___$1));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25144,G__25145) : hoplon.core.div.call(null,G__25144,G__25145));
})()], null);
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$9(G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,G__25069) : hoplon.core.div.call(null,G__25061,G__25062,G__25063,G__25064,G__25065,G__25066,G__25067,G__25068,G__25069));
});
menu.flower.menu = (function menu$flower$menu(items,radius){
var open_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var button_hover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var ratio = 0.4;
var offset = (function (){var fexpr__25164 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__25162,G__25163){
return (G__25162 / ((1) + G__25163));
});})(open_QMARK_,button_hover_QMARK_,ratio))
);
return (fexpr__25164.cljs$core$IFn$_invoke$arity$2 ? fexpr__25164.cljs$core$IFn$_invoke$arity$2(radius,ratio) : fexpr__25164.call(null,radius,ratio));
})();
var item_radius = (function (){var fexpr__25167 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__25166,G__25165){
return (G__25165 * G__25166);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
);
return (fexpr__25167.cljs$core$IFn$_invoke$arity$2 ? fexpr__25167.cljs$core$IFn$_invoke$arity$2(offset,ratio) : fexpr__25167.call(null,offset,ratio));
})();
var radians_per_item = (function (){var fexpr__25170 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__25169,G__25168){
return (((2) * Math.PI) / (G__25168.cljs$core$IFn$_invoke$arity$1 ? G__25168.cljs$core$IFn$_invoke$arity$1(G__25169) : G__25168.call(null,G__25169)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
);
return (fexpr__25170.cljs$core$IFn$_invoke$arity$2 ? fexpr__25170.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__25170.call(null,items,cljs.core.count));
})();
var i_xy_item = (function (){var fexpr__25180 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__25175,G__25171,G__25173,G__25172,G__25174){
var G__25181 = ((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__25183 = G__25173;
var G__25184 = (i * G__25174);
return (G__25172.cljs$core$IFn$_invoke$arity$2 ? G__25172.cljs$core$IFn$_invoke$arity$2(G__25183,G__25184) : G__25172.call(null,G__25183,G__25184));
})(),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
;
var G__25182 = G__25175;
return (G__25171.cljs$core$IFn$_invoke$arity$2 ? G__25171.cljs$core$IFn$_invoke$arity$2(G__25181,G__25182) : G__25171.call(null,G__25181,G__25182));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
);
return (fexpr__25180.cljs$core$IFn$_invoke$arity$5 ? fexpr__25180.cljs$core$IFn$_invoke$arity$5(items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item) : fexpr__25180.call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item));
})();
var total_transition_length = menu.config.transition_length;
var base_transition_length = (function (){var fexpr__25188 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__25187,G__25185,G__25186){
return (G__25185 / (G__25186.cljs$core$IFn$_invoke$arity$1 ? G__25186.cljs$core$IFn$_invoke$arity$1(G__25187) : G__25186.call(null,G__25187)));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
);
return (fexpr__25188.cljs$core$IFn$_invoke$arity$3 ? fexpr__25188.cljs$core$IFn$_invoke$arity$3(items,total_transition_length,cljs.core.count) : fexpr__25188.call(null,items,total_transition_length,cljs.core.count));
})();
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(radius,open_QMARK_,button_hover_QMARK_,total_transition_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25189 = cljs.core.cst$kw$css;
var G__25190 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$z_DASH_index,(1)], null);
var G__25191 = menu.flower.open_button(open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25189,G__25190,G__25191) : hoplon.core.div.call(null,G__25189,G__25190,G__25191));
})(),(function (){var G__25192 = cljs.core.cst$kw$css;
var G__25193 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$z_DASH_index,(0)], null);
var G__25194 = hoplon.core.loop_tpl_STAR_(i_xy_item,((function (G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__18520__auto__){
var vec__25207 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25217 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__25218){
var vec__25219 = p__25218;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219,(0),null);
var vec__25222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25222,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25222,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25217.cljs$core$IFn$_invoke$arity$1 ? fexpr__25217.cljs$core$IFn$_invoke$arity$1(item__18520__auto__) : fexpr__25217.call(null,item__18520__auto__));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207,(2),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207,(3),null);
var transition_delay = (function (){var fexpr__25228 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25227,G__25226,G__25225){
if(cljs.core.truth_(G__25225)){
return (G__25226 * G__25227);
} else {
return (0);
}
});})(vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25228.cljs$core$IFn$_invoke$arity$3 ? fexpr__25228.cljs$core$IFn$_invoke$arity$3(base_transition_length,i,open_QMARK_) : fexpr__25228.call(null,base_transition_length,i,open_QMARK_));
})();
var url = (function (){var fexpr__25230 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25229){
return cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__25229);
});})(transition_delay,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25230.cljs$core$IFn$_invoke$arity$1 ? fexpr__25230.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25230.call(null,item));
})();
var text = (function (){var fexpr__25232 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25231){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(G__25231);
});})(transition_delay,url,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25232.cljs$core$IFn$_invoke$arity$1 ? fexpr__25232.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25232.call(null,item));
})();
var handler = (function (){var fexpr__25234 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25233){
return cljs.core.cst$kw$handler.cljs$core$IFn$_invoke$arity$1(G__25233);
});})(transition_delay,url,text,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25234.cljs$core$IFn$_invoke$arity$1 ? fexpr__25234.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25234.call(null,item));
})();
var mouseover_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var interacting_QMARK_ = (function (){var fexpr__25237 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (transition_delay,url,text,handler,mouseover_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25235,G__25236){
var and__8228__auto__ = G__25235;
if(cljs.core.truth_(and__8228__auto__)){
return G__25236;
} else {
return and__8228__auto__;
}
});})(transition_delay,url,text,handler,mouseover_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25237.cljs$core$IFn$_invoke$arity$2 ? fexpr__25237.cljs$core$IFn$_invoke$arity$2(mouseover_QMARK_,open_QMARK_) : fexpr__25237.call(null,mouseover_QMARK_,open_QMARK_));
})();
var G__25238 = cljs.core.cst$kw$css;
var G__25239 = (function (){var fexpr__25250 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25238,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25246,G__25243,G__25247,G__25244,G__25241,G__25242,G__25245){
var G__25251 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transition,["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25242),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25243)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25244),"s"].join('')], null);
var G__25252 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,(cljs.core.truth_(G__25245)?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25246),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25247),"px)"].join(''):"translate(0, 0)")], null);
return (G__25241.cljs$core$IFn$_invoke$arity$2 ? G__25241.cljs$core$IFn$_invoke$arity$2(G__25251,G__25252) : G__25241.call(null,G__25251,G__25252));
});})(G__25238,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25250.cljs$core$IFn$_invoke$arity$7 ? fexpr__25250.cljs$core$IFn$_invoke$arity$7(x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_) : fexpr__25250.call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_));
})();
var G__25240 = route.hoplon.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,handler,cljs.core.cst$kw$css,(function (){var fexpr__25255 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25253,G__25254){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(cljs.core.truth_(G__25253)?"black":G__25254),cljs.core.cst$kw$display,"inline"], null);
});})(G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25255.cljs$core$IFn$_invoke$arity$2 ? fexpr__25255.cljs$core$IFn$_invoke$arity$2(interacting_QMARK_,colours.ui_gradients.base_colour) : fexpr__25255.call(null,interacting_QMARK_,colours.ui_gradients.base_colour));
})(),(function (){var G__25256 = cljs.core.cst$kw$mouseenter;
var G__25257 = ((function (G__25256,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,true);
});})(G__25256,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25258 = cljs.core.cst$kw$mouseleave;
var G__25259 = ((function (G__25256,G__25257,G__25258,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_(mouseover_QMARK_,false);
});})(G__25256,G__25257,G__25258,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25260 = cljs.core.cst$kw$click;
var G__25261 = ((function (G__25256,G__25257,G__25258,G__25259,G__25260,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_(((function (G__25256,G__25257,G__25258,G__25259,G__25260,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_(open_QMARK_,false);

return true;
});})(G__25256,G__25257,G__25258,G__25259,G__25260,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(G__25256,G__25257,G__25258,G__25259,G__25260,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var G__25262 = cljs.core.cst$kw$css;
var G__25263 = (function (){var fexpr__25275 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25271,G__25269,G__25268,G__25267,G__25266,G__25270,G__25272){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$transition,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_image,cljs.core.cst$kw$position,cljs.core.cst$kw$background_DASH_repeat,cljs.core.cst$kw$background_DASH_position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$background_DASH_size,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__25266)?G__25267:(1))),")"].join(''),(function (){var G__25276 = (- G__25269);
return (G__25268.cljs$core$IFn$_invoke$arity$1 ? G__25268.cljs$core$IFn$_invoke$arity$1(G__25276) : G__25268.call(null,G__25276));
})(),["transform ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__25270 / (2))),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25271)].join(''),"hidden","white",((2) * G__25269),"pointer",(cljs.core.truth_(G__25272)?["url('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25272),"')"].join(''):null),"absolute","no-repeat","center","4px solid",(G__25268.cljs$core$IFn$_invoke$arity$1 ? G__25268.cljs$core$IFn$_invoke$arity$1(G__25269) : G__25268.call(null,G__25269)),"contain",((2) * G__25269),(function (){var G__25277 = (- G__25269);
return (G__25268.cljs$core$IFn$_invoke$arity$1 ? G__25268.cljs$core$IFn$_invoke$arity$1(G__25277) : G__25268.call(null,G__25277));
})()]);
});})(G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25275.cljs$core$IFn$_invoke$arity$7 ? fexpr__25275.cljs$core$IFn$_invoke$arity$7(menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url) : fexpr__25275.call(null,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,interacting_QMARK_,total_transition_length,url));
})();
var G__25264 = (function (){var con__18530__auto__ = (new cljs.core.Delay(((function (G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
var G__25278 = cljs.core.cst$kw$css;
var G__25279 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%"], null);
var G__25280 = (function (){var G__25281 = (function (){var G__25282 = cljs.core.cst$kw$valign;
var G__25283 = "center";
var G__25284 = cljs.core.cst$kw$css;
var G__25285 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,"center"], null),wheel.font.core.font__GT_css_map(fonts.config.gentium_basic)], 0));
var G__25286 = text;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(G__25282,G__25283,G__25284,G__25285,G__25286) : hoplon.core.td.call(null,G__25282,G__25283,G__25284,G__25285,G__25286));
})();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__25281) : hoplon.core.tr.call(null,G__25281));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$3(G__25278,G__25279,G__25280) : hoplon.core.table.call(null,G__25278,G__25279,G__25280));
});})(G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__18531__auto__ = (new cljs.core.Delay(((function (con__18530__auto__,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__18530__auto__,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__18532__auto__ = ((function (con__18530__auto__,alt__18531__auto__,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__18533__auto__){
return cljs.core.deref((function (){var or__8240__auto__ = (cljs.core.truth_(p__18533__auto__)?con__18530__auto__:alt__18531__auto__);
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18530__auto__,alt__18531__auto__,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
var fexpr__25287 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18532__auto__);
return (fexpr__25287.cljs$core$IFn$_invoke$arity$1 ? fexpr__25287.cljs$core$IFn$_invoke$arity$1(text) : fexpr__25287.call(null,text));
})();
var G__25265 = (function (){var G__25288 = cljs.core.cst$kw$css;
var G__25289 = (function (){var fexpr__25294 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25288,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__25291,G__25292,G__25290,G__25293){
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$transition,["opacity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25290),"s ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25291)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25292),"s"].join(''),cljs.core.cst$kw$opacity,(cljs.core.truth_(G__25293)?(0):(1))], null);
});})(G__25288,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25238,G__25239,transition_delay,url,text,handler,mouseover_QMARK_,interacting_QMARK_,vec__25207,x,i,y,item,G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (fexpr__25294.cljs$core$IFn$_invoke$arity$4 ? fexpr__25294.cljs$core$IFn$_invoke$arity$4(menu.config.easing,transition_delay,total_transition_length,open_QMARK_) : fexpr__25294.call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25288,G__25289) : hoplon.core.div.call(null,G__25288,G__25289));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25265) : hoplon.core.div.call(null,G__25256,G__25257,G__25258,G__25259,G__25260,G__25261,G__25262,G__25263,G__25264,G__25265));
})()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25238,G__25239,G__25240) : hoplon.core.div.call(null,G__25238,G__25239,G__25240));
});})(G__25192,G__25193,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25192,G__25193,G__25194) : hoplon.core.div.call(null,G__25192,G__25193,G__25194));
})()], 0));
});
