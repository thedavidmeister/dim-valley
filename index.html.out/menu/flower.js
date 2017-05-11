// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
menu.flower.polar__GT_cartesian = (function menu$flower$polar__GT_cartesian(radius,radians){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(radians)),(radius * Math.sin(radians))], null);
});
menu.flower.n__GT_px = (function menu$flower$n__GT_px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,radius){
var open_QMARK___$1 = (function (){var or__6842__auto__ = open_QMARK_;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return javelin.core.cell.call(null,false);
}
})();
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (open_QMARK___$1){
return (function (){
return cljs.core.swap_BANG_.call(null,open_QMARK___$1,cljs.core.not);
});})(open_QMARK___$1))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (open_QMARK___$1){
return (function (G__9276,G__9277){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["-2px","white",(G__9276 + (2)),"pointer",(1),"absolute",G__9277.call(null,G__9276),(G__9276 + (2)),"-1px"]);
});})(open_QMARK___$1))
).call(null,radius,menu.flower.n__GT_px));
});
menu.flower.menu = (function menu$flower$menu(items,width){
var open_QMARK_ = javelin.core.cell.call(null,false);
var ratio = 0.5;
var offset = javelin.core.formula.call(null,((function (open_QMARK_,ratio){
return (function (G__9323,G__9324){
return (G__9323 / ((2) * ((1) + G__9324)));
});})(open_QMARK_,ratio))
).call(null,width,ratio);
var radius = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset){
return (function (G__9326,G__9325){
return (G__9325 * G__9326);
});})(open_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,radius){
return (function (G__9328,G__9327){
return (((2) * Math.PI) / G__9327.call(null,G__9328));
});})(open_QMARK_,ratio,offset,radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,radius,radians_per_item){
return (function (G__9333,G__9329,G__9331,G__9330,G__9332){
return G__9329.call(null,((function (open_QMARK_,ratio,offset,radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,G__9330.call(null,G__9331,(i * G__9332)),item], null);
});})(open_QMARK_,ratio,offset,radius,radians_per_item))
,G__9333);
});})(open_QMARK_,ratio,offset,radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,menu.flower.polar__GT_cartesian,radians_per_item);
var total_transition_length = 0.6;
var base_transition_length = javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__9336,G__9334,G__9335){
return (G__9334 / G__9335.call(null,G__9336));
});})(open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),menu.flower.open_button.call(null,open_QMARK_,radius),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0)], null),hoplon.core.loop_tpl_STAR_.call(null,i_xy_item,((function (open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__8756__auto__){
var vec__9349 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__9352){
var vec__9353 = p__9352;
var i = cljs.core.nth.call(null,vec__9353,(0),null);
var vec__9356 = cljs.core.nth.call(null,vec__9353,(1),null);
var x = cljs.core.nth.call(null,vec__9356,(0),null);
var y = cljs.core.nth.call(null,vec__9356,(1),null);
var item = cljs.core.nth.call(null,vec__9353,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__8756__auto__));
var x = cljs.core.nth.call(null,vec__9349,(0),null);
var i = cljs.core.nth.call(null,vec__9349,(1),null);
var y = cljs.core.nth.call(null,vec__9349,(2),null);
var item = cljs.core.nth.call(null,vec__9349,(3),null);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (vec__9349,x,i,y,item,open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9366,G__9362,G__9361,G__9367,G__9364,G__9359,G__9363,G__9360,G__9365){
return G__9359.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[(function (){var transition_delay = (cljs.core.truth_(G__9360)?(G__9361 * G__9362):(0));
return [cljs.core.str("transform "),cljs.core.str(G__9363),cljs.core.str("s ease "),cljs.core.str(transition_delay),cljs.core.str("s")].join('');
})(),(0),"white",G__9364,"pointer","absolute",G__9365.call(null,G__9364),G__9364,(0)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(G__9360)?[cljs.core.str("translate("),cljs.core.str(G__9366),cljs.core.str("px, "),cljs.core.str(G__9367),cljs.core.str("px)")].join(''):"translate(0, 0)")], null));
});})(vec__9349,x,i,y,item,open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,base_transition_length,i,y,radius,cljs.core.merge,total_transition_length,open_QMARK_,menu.flower.n__GT_px));
});})(open_QMARK_,ratio,offset,radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
)));
});

//# sourceMappingURL=flower.js.map