// Compiled by ClojureScript 1.9.293 {}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('fonts.hoplon');
goog.require('fonts.config');
goog.require('colours.ui_gradients');
goog.require('menu.config');
menu.flower.big_scale = 1.3;
menu.flower.polar__GT_cartesian = (function menu$flower$polar__GT_cartesian(radius,radians){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radius * Math.cos(radians)),(radius * Math.sin(radians))], null);
});
menu.flower.n__GT_px = (function menu$flower$n__GT_px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9694 = arguments.length;
var i__7951__auto___9695 = (0);
while(true){
if((i__7951__auto___9695 < len__7950__auto___9694)){
args__7957__auto__.push((arguments[i__7951__auto___9695]));

var G__9696 = (i__7951__auto___9695 + (1));
i__7951__auto___9695 = G__9696;
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
return (function (G__9689,G__9690,G__9693,G__9687,G__9691,G__9688,G__9692,G__9686){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),G__9686.call(null,G__9687),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__9686.call(null,G__9687),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9688),cljs.core.str("s "),cljs.core.str(G__9689)].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_((function (){var and__6830__auto__ = G__9690;
if(cljs.core.truth_(and__6830__auto__)){
return G__9691.call(null,G__9692);
} else {
return and__6830__auto__;
}
})())?G__9693:(1))),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3)], null);
});})(transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_,menu.flower.n__GT_px),children);
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq9681){
var G__9682 = cljs.core.first.call(null,seq9681);
var seq9681__$1 = cljs.core.next.call(null,seq9681);
var G__9683 = cljs.core.first.call(null,seq9681__$1);
var seq9681__$2 = cljs.core.next.call(null,seq9681__$1);
var G__9684 = cljs.core.first.call(null,seq9681__$2);
var seq9681__$3 = cljs.core.next.call(null,seq9681__$2);
var G__9685 = cljs.core.first.call(null,seq9681__$3);
var seq9681__$4 = cljs.core.next.call(null,seq9681__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__9682,G__9683,G__9684,G__9685,seq9681__$4);
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
return (function (G__9739,G__9744,G__9740,G__9742,G__9743,G__9738,G__9741){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_((function (){var and__6830__auto__ = G__9738;
if(cljs.core.truth_(and__6830__auto__)){
return G__9739;
} else {
return and__6830__auto__;
}
})())?G__9740:(1))),cljs.core.str(")")].join(''),G__9741.call(null,(- G__9742)),[cljs.core.str("transform "),cljs.core.str(G__9743),cljs.core.str("s "),cljs.core.str(G__9744)].join(''),(G__9742 * (2)),"pointer",(1),"absolute",G__9741.call(null,G__9742),(G__9742 * (2)),G__9741.call(null,(- G__9742))]);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1,menu.flower.n__GT_px),(function (){var width = javelin.core.formula.call(null,((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9745){
return (G__9745 / (2));
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.call(null,((function (width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9746){
return ((G__9746 * Math.sin((Math.PI / (4)))) / (2));
});})(width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width);
var height = javelin.core.formula.call(null,((function (width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9747){
return (G__9747 / (12));
});})(width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.call(null,((function (width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9749,G__9748){
return (G__9748 + (- (G__9749 / (2))));
});})(width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9751,G__9750){
return (G__9750 + (- (G__9751 / (2))));
});})(width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9752,G__9753){
return G__9752.call(null,G__9753.call(null));
});})(width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9756,G__9757,G__9758,G__9755,G__9759,G__9754){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),G__9754.call(null,G__9755),new cljs.core.Keyword(null,"height","height",1025178622),G__9754.call(null,G__9756),new cljs.core.Keyword(null,"left","left",-399115937),G__9754.call(null,G__9757),new cljs.core.Keyword(null,"background-color","background-color",570434026),G__9758,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9759),cljs.core.str("s ease, "),cljs.core.str("background-color "),cljs.core.str(G__9759),cljs.core.str("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,color,width,transition_length__$1,menu.flower.n__GT_px);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9766,G__9764,G__9761,G__9763,G__9760,G__9765,G__9762){
return G__9760.call(null,G__9761,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9762.call(null,(G__9763 - ((2) * G__9764))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, "),cljs.core.str((cljs.core.truth_(G__9765)?G__9766:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9765)?"45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9765)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9768,G__9770,G__9767,G__9771,G__9769){
return G__9767.call(null,G__9768,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9769.call(null,G__9770),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_(G__9771)?(0):(1))),cljs.core.str(")")].join('')], null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__9778,G__9776,G__9773,G__9775,G__9772,G__9777,G__9774){
return G__9772.call(null,G__9773,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__9774.call(null,(G__9775 + ((2) * G__9776))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate3d(0px, -"),cljs.core.str((cljs.core.truth_(G__9777)?G__9778:(0))),cljs.core.str("px, 0px)"),cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(G__9777)?"-45deg":"0deg")),cljs.core.str(") ")].join('')], null),(cljs.core.truth_(G__9777)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,top,cljs.core.merge,open_QMARK___$1,menu.flower.n__GT_px))], null);
})());
});
menu.flower.menu = (function menu$flower$menu(current_item,items,radius){
var open_QMARK_ = javelin.core.cell.call(null,false);
var button_hover_QMARK_ = javelin.core.cell.call(null,false);
var ratio = 0.4;
var offset = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__9839,G__9840){
return (G__9839 / ((1) + G__9840));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__9842,G__9841){
return (G__9841 * G__9842);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__9844,G__9843){
return (((2) * Math.PI) / G__9843.call(null,G__9844));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__9849,G__9845,G__9847,G__9846,G__9848){
return G__9845.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,G__9846.call(null,G__9847,(i * G__9848)),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
,G__9849);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,menu.flower.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__9852,G__9850,G__9851){
return (G__9850 / G__9851.call(null,G__9852));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.call(null,radius,open_QMARK_,button_hover_QMARK_,total_transition_length,hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),menu.flower.open_button.call(null,open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0)], null),hoplon.core.loop_tpl_STAR_.call(null,i_xy_item,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__8760__auto__){
var vec__9865 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__9868){
var vec__9869 = p__9868;
var i = cljs.core.nth.call(null,vec__9869,(0),null);
var vec__9872 = cljs.core.nth.call(null,vec__9869,(1),null);
var x = cljs.core.nth.call(null,vec__9872,(0),null);
var y = cljs.core.nth.call(null,vec__9872,(1),null);
var item = cljs.core.nth.call(null,vec__9869,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__8760__auto__));
var x = cljs.core.nth.call(null,vec__9865,(0),null);
var i = cljs.core.nth.call(null,vec__9865,(1),null);
var y = cljs.core.nth.call(null,vec__9865,(2),null);
var item = cljs.core.nth.call(null,vec__9865,(3),null);
var transition_delay = javelin.core.formula.call(null,((function (vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9877,G__9876,G__9875){
if(cljs.core.truth_(G__9875)){
return (G__9876 * G__9877);
} else {
return (0);
}
});})(vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.call(null,((function (transition_delay,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9878){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__9878);
});})(transition_delay,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.call(null,((function (transition_delay,url,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9879){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__9879);
});})(transition_delay,url,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.call(null,false);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9885,G__9882,G__9886,G__9883,G__9880,G__9881,G__9884){
return G__9880.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("transform "),cljs.core.str(G__9881),cljs.core.str("s "),cljs.core.str(G__9882),cljs.core.str(" "),cljs.core.str(G__9883),cljs.core.str("s")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(G__9884)?[cljs.core.str("translate("),cljs.core.str(G__9885),cljs.core.str("px, "),cljs.core.str(G__9886),cljs.core.str("px)")].join(''):"translate(0, 0)")], null));
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"click","click",1912301393),((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_.call(null,current_item,cljs.core.deref.call(null,item));

return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9887,G__9893,G__9891,G__9889,G__9892,G__9888,G__9890,G__9894){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str("scale("),cljs.core.str((cljs.core.truth_((function (){var and__6830__auto__ = G__9887;
if(cljs.core.truth_(and__6830__auto__)){
return G__9888;
} else {
return and__6830__auto__;
}
})())?G__9889:(1))),cljs.core.str(")")].join(''),G__9890.call(null,(- G__9891)),[cljs.core.str("transform "),cljs.core.str((G__9892 / (2))),cljs.core.str("s "),cljs.core.str(G__9893)].join(''),"hidden","white",((2) * G__9891),"pointer",(cljs.core.truth_(G__9894)?[cljs.core.str("url('"),cljs.core.str(G__9894),cljs.core.str("')")].join(''):null),"absolute","no-repeat","center","4px solid",G__9890.call(null,G__9891),"contain",((2) * G__9891),G__9890.call(null,(- G__9891))]);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,menu.config.easing,item_radius,menu.flower.big_scale,total_transition_length,open_QMARK_,menu.flower.n__GT_px,url),(function (){var con__8768__auto__ = (new cljs.core.Delay(((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),hoplon.core.tr.call(null,hoplon.core.td.call(null,new cljs.core.Keyword(null,"valign","valign",1485197511),"center",new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),fonts.hoplon.font_map__GT_css_map.call(null,fonts.config.playfair)),text)));
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__8769__auto__ = (new cljs.core.Delay(((function (con__8768__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__8768__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__8770__auto__ = ((function (con__8768__auto__,alt__8769__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__8771__auto__){
return cljs.core.deref.call(null,(function (){var or__6842__auto__ = (cljs.core.truth_(p__8771__auto__)?con__8768__auto__:alt__8769__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(con__8768__auto__,alt__8769__auto__,transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.call(null,tpl__8770__auto__).call(null,text);
})(),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__9896,G__9897,G__9895,G__9898){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str("opacity "),cljs.core.str(G__9895),cljs.core.str("s "),cljs.core.str(G__9896),cljs.core.str(" "),cljs.core.str(G__9897),cljs.core.str("s")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(G__9898)?(0):(1))], null);
});})(transition_delay,url,text,mouseover_QMARK_,vec__9865,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_))));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
)));
});

//# sourceMappingURL=flower.js.map