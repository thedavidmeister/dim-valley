// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('fonts.hoplon');
goog.require('fonts.config');
goog.require('colours.ui_gradients');
menu.flower.easing = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
menu.flower.polar__GT_cartesian = (function menu$flower$polar__GT_cartesian(radius,radians){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(radians)),(radius * Math.sin(radians))], null);
});
menu.flower.n__GT_px = (function menu$flower$n__GT_px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9690 = arguments.length;
var i__7951__auto___9691 = (0);
while(true){
if((i__7951__auto___9691 < len__7950__auto___9690)){
args__7957__auto__.push((arguments[i__7951__auto___9691]));

var G__9692 = (i__7951__auto___9691 + (1));
i__7951__auto___9691 = G__9692;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (outer_radius,open_QMARK_,button_hover_QMARK_,transition_length,children){
var transition_length__$1 = (transition_length / (2));
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_length__$1){
return (function (G__9687,G__9686,G__9684,G__9688,G__9685,G__9689,G__9683){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),G__9683.call(null,G__9684),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__9683.call(null,G__9684),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9685),cljs.core.str("s "),cljs.core.str(G__9686)].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_((function (){var and__6830__auto__ = G__9687;
if(cljs.core.truth_(and__6830__auto__)){
return G__9688.call(null,G__9689);
} else {
return and__6830__auto__;
}
})())?1.1:(1))),cljs.core.str(")")].join('')], null);
});})(transition_length__$1))
).call(null,button_hover_QMARK_,menu.flower.easing,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_,menu.flower.n__GT_px),children);
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq9678){
var G__9679 = cljs.core.first.call(null,seq9678);
var seq9678__$1 = cljs.core.next.call(null,seq9678);
var G__9680 = cljs.core.first.call(null,seq9678__$1);
var seq9678__$2 = cljs.core.next.call(null,seq9678__$1);
var G__9681 = cljs.core.first.call(null,seq9678__$2);
var seq9678__$3 = cljs.core.next.call(null,seq9678__$2);
var G__9682 = cljs.core.first.call(null,seq9678__$3);
var seq9678__$4 = cljs.core.next.call(null,seq9678__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__9679,G__9680,G__9681,G__9682,seq9678__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__6842__auto__ = open_QMARK_;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return javelin.core.cell.call(null,false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__6842__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return javelin.core.cell.call(null,false);
}
})();
var transition_length__$1 = (transition_length / (2));
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,open_QMARK___$1,cljs.core.not);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,true);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK___$1,false);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9729,G__9730){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(G__9729 * (2)),new cljs.core.Keyword(null,"height","height",1025178622),(G__9729 * (2)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),G__9730.call(null,G__9729),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),G__9730.call(null,(- G__9729)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__9730.call(null,(- G__9729)),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius,menu.flower.n__GT_px),(function (){var width = javelin.core.formula.call(null,((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9731){
return (G__9731 / (2));
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.call(null,((function (width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9732){
return ((G__9732 * Math.sin((Math.PI / (4)))) / (2));
});})(width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width);
var height = javelin.core.formula.call(null,((function (width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9733){
return (G__9733 / (12));
});})(width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.call(null,((function (width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9735,G__9734){
return (G__9734 + (- (G__9735 / (2))));
});})(width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9737,G__9736){
return (G__9736 + (- (G__9737 / (2))));
});})(width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9738,G__9739){
return G__9738.call(null,G__9739.call(null));
});})(width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9742,G__9743,G__9744,G__9741,G__9745,G__9740){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),G__9740.call(null,G__9741),new cljs.core.Keyword(null,"height","height",1025178622),G__9740.call(null,G__9742),new cljs.core.Keyword(null,"left","left",-399115937),G__9740.call(null,G__9743),new cljs.core.Keyword(null,"background-color","background-color",570434026),G__9744,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9745),cljs.core.str("s ease, "),cljs.core.str("background-color "),cljs.core.str(G__9745),cljs.core.str("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,color,width,transition_length__$1,menu.flower.n__GT_px);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9752,G__9750,G__9747,G__9749,G__9746,G__9751,G__9748){
return G__9746.call(null,G__9747,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9748.call(null,(G__9749 - ((2) * G__9750))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, "),cljs.core.str((cljs.core.truth_(G__9751)?G__9752:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9751)?"45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9751)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9754,G__9756,G__9753,G__9757,G__9755){
return G__9753.call(null,G__9754,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9755.call(null,G__9756),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_(G__9757)?(0):(1))),cljs.core.str(")")].join('')], null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9764,G__9762,G__9759,G__9761,G__9758,G__9763,G__9760){
return G__9758.call(null,G__9759,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9760.call(null,(G__9761 + ((2) * G__9762))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, -"),cljs.core.str((cljs.core.truth_(G__9763)?G__9764:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9763)?"-45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9763)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px))], null);
})());
});
menu.flower.menu = (function menu$flower$menu(current_item,items,radius){
var open_QMARK_ = javelin.core.cell.call(null,false);
var button_hover_QMARK_ = javelin.core.cell.call(null,false);
var ratio = 0.4;
var offset = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__9824,G__9825){
return (G__9824 / ((1) + G__9825));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__9827,G__9826){
return (G__9826 * G__9827);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__9829,G__9828){
return (((2) * Math.PI) / G__9828.call(null,G__9829));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__9834,G__9830,G__9832,G__9831,G__9833){
return G__9830.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,G__9831.call(null,G__9832,(i * G__9833)),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
,G__9834);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,menu.flower.polar__GT_cartesian,radians_per_item);
var total_transition_length = 0.4;
var base_transition_length = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__9837,G__9835,G__9836){
return (G__9835 / G__9836.call(null,G__9837));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.call(null,radius,open_QMARK_,button_hover_QMARK_,total_transition_length,hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),menu.flower.open_button.call(null,open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0)], null),hoplon.core.loop_tpl_STAR_.call(null,i_xy_item,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__8756__auto__){
var vec__9850 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__9853){
var vec__9854 = p__9853;
var i = cljs.core.nth.call(null,vec__9854,(0),null);
var vec__9857 = cljs.core.nth.call(null,vec__9854,(1),null);
var x = cljs.core.nth.call(null,vec__9857,(0),null);
var y = cljs.core.nth.call(null,vec__9857,(1),null);
var item = cljs.core.nth.call(null,vec__9854,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__8756__auto__));
var x = cljs.core.nth.call(null,vec__9850,(0),null);
var i = cljs.core.nth.call(null,vec__9850,(1),null);
var y = cljs.core.nth.call(null,vec__9850,(2),null);
var item = cljs.core.nth.call(null,vec__9850,(3),null);
var transition_delay = javelin.core.formula.call(null,((function (vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9862,G__9861,G__9860){
if(cljs.core.truth_(G__9860)){
return (G__9861 * G__9862);
} else {
return (0);
}
});})(vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.call(null,((function (transition_delay,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9863){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__9863);
});})(transition_delay,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.call(null,((function (transition_delay,url,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9864){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__9864);
});})(transition_delay,url,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.call(null,false);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9870,G__9871,G__9868,G__9867,G__9865,G__9866,G__9869){
return G__9865.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9866),cljs.core.str("s "),cljs.core.str(G__9867),cljs.core.str(" "),cljs.core.str(G__9868),cljs.core.str("s")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(G__9869)?[cljs.core.str("translate("),cljs.core.str(G__9870),cljs.core.str("px, "),cljs.core.str(G__9871),cljs.core.str("px)")].join(''):"translate(0, 0)")], null));
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,y,transition_delay,menu.flower.easing,cljs.core.merge,total_transition_length,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"click","click",1912301393),((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_.call(null,current_item,cljs.core.deref.call(null,item));

return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9872,G__9875,G__9877,G__9876,G__9873,G__9874,G__9878){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_((function (){var and__6830__auto__ = G__9872;
if(cljs.core.truth_(and__6830__auto__)){
return G__9873;
} else {
return and__6830__auto__;
}
})())?1.1:(1))),cljs.core.str(")")].join(''),G__9874.call(null,(- G__9875)),[cljs.core.str("transform "),cljs.core.str((G__9876 / (2))),cljs.core.str("s "),cljs.core.str(G__9877)].join(''),"hidden","white",((2) * G__9875),"pointer",(cljs.core.truth_(G__9878)?[cljs.core.str("url('"),cljs.core.str(G__9878),cljs.core.str("')")].join(''):null),"absolute","no-repeat","center","4px solid",G__9874.call(null,G__9875),"contain",((2) * G__9875),G__9874.call(null,(- G__9875))]);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,item_radius,menu.flower.easing,total_transition_length,open_QMARK_,menu.flower.n__GT_px,url),(function (){var con__8764__auto__ = (new cljs.core.Delay(((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),hoplon.core.tr.call(null,hoplon.core.td.call(null,new cljs.core.Keyword(null,"valign","valign",1485197511),"center",new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),fonts.hoplon.font_map__GT_css_map.call(null,fonts.config.playfair)),text)));
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__8765__auto__ = (new cljs.core.Delay(((function (con__8764__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__8764__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__8766__auto__ = ((function (con__8764__auto__,alt__8765__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__8767__auto__){
return cljs.core.deref.call(null,(function (){var or__6842__auto__ = (cljs.core.truth_(p__8767__auto__)?con__8764__auto__:alt__8765__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(con__8764__auto__,alt__8765__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.call(null,tpl__8766__auto__).call(null,text);
})(),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9881,G__9880,G__9879,G__9882){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("opacity "),cljs.core.str(G__9879),cljs.core.str("s "),cljs.core.str(G__9880),cljs.core.str(" "),cljs.core.str(G__9881),cljs.core.str("s")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(G__9882)?(0):(1))], null);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9850,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,transition_delay,menu.flower.easing,total_transition_length,open_QMARK_))));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
)));
});

//# sourceMappingURL=flower.js.map