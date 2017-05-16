// Compiled by ClojureScript 1.9.521 {}
goog.provide('menu.flower');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('fonts.config');
goog.require('colours.ui_gradients');
goog.require('menu.config');
goog.require('unit.conversion');
goog.require('wheel.math.geometry');
goog.require('wheel.font.core');
menu.flower.big_scale = 1.3;
menu.flower.outer_wrapper = (function menu$flower$outer_wrapper(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14484 = arguments.length;
var i__8982__auto___14485 = (0);
while(true){
if((i__8982__auto___14485 < len__8981__auto___14484)){
args__8988__auto__.push((arguments[i__8982__auto___14485]));

var G__14486 = (i__8982__auto___14485 + (1));
i__8982__auto___14485 = G__14486;
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
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_length__$1){
return (function (G__14479,G__14480,G__14476,G__14483,G__14477,G__14481,G__14478,G__14482){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),G__14476.call(null,G__14477),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),G__14476.call(null,G__14477),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14478),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14479)].join(''),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__14480;
if(cljs.core.truth_(and__7748__auto__)){
return G__14481.call(null,G__14482);
} else {
return and__7748__auto__;
}
})())?G__14483:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3)], null);
});})(transition_length__$1))
).call(null,menu.config.easing,button_hover_QMARK_,unit.conversion.n__GT_px,menu.flower.big_scale,outer_radius,cljs.core.not,transition_length__$1,open_QMARK_),children);
});

menu.flower.outer_wrapper.cljs$lang$maxFixedArity = (4);

menu.flower.outer_wrapper.cljs$lang$applyTo = (function (seq14471){
var G__14472 = cljs.core.first.call(null,seq14471);
var seq14471__$1 = cljs.core.next.call(null,seq14471);
var G__14473 = cljs.core.first.call(null,seq14471__$1);
var seq14471__$2 = cljs.core.next.call(null,seq14471__$1);
var G__14474 = cljs.core.first.call(null,seq14471__$2);
var seq14471__$3 = cljs.core.next.call(null,seq14471__$2);
var G__14475 = cljs.core.first.call(null,seq14471__$3);
var seq14471__$4 = cljs.core.next.call(null,seq14471__$3);
return menu.flower.outer_wrapper.cljs$core$IFn$_invoke$arity$variadic(G__14472,G__14473,G__14474,G__14475,seq14471__$4);
});

menu.flower.open_button = (function menu$flower$open_button(open_QMARK_,mouseover_QMARK_,radius,transition_length){
var open_QMARK___$1 = (function (){var or__7760__auto__ = open_QMARK_;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return javelin.core.cell.call(null,false);
}
})();
var mouseover_QMARK___$1 = (function (){var or__7760__auto__ = mouseover_QMARK_;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
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
return (function (G__14530,G__14535,G__14532,G__14531,G__14533,G__14534,G__14529){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__14529;
if(cljs.core.truth_(and__7748__auto__)){
return G__14530;
} else {
return and__7748__auto__;
}
})())?G__14531:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),G__14532.call(null,(- G__14533)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14534),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14535)].join(''),(G__14533 * (2)),"pointer",(1),"absolute",G__14532.call(null,G__14533),(G__14533 * (2)),G__14532.call(null,(- G__14533))]);
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,mouseover_QMARK___$1,menu.config.easing,unit.conversion.n__GT_px,menu.flower.big_scale,radius,transition_length__$1,open_QMARK___$1),(function (){var width = javelin.core.formula.call(null,((function (open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14536){
return (G__14536 / (2));
});})(open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var rotated_offset = javelin.core.formula.call(null,((function (width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14538,G__14537){
return ((G__14537 * Math.sin(G__14538.call(null,(45)))) / (2));
});})(width,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,wheel.math.geometry.degrees__GT_radians,width);
var height = javelin.core.formula.call(null,((function (width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14539){
return (G__14539 / (12));
});})(width,rotated_offset,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,radius);
var left = javelin.core.formula.call(null,((function (width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14541,G__14540){
return (G__14540 + (- (G__14541 / (2))));
});})(width,rotated_offset,height,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,width,radius);
var top = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14543,G__14542){
return (G__14542 + (- (G__14543 / (2))));
});})(width,rotated_offset,height,left,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,radius);
var color = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14544,G__14545){
return G__14544.call(null,G__14545.call(null));
});})(width,rotated_offset,height,left,top,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,cljs.core.last,colours.ui_gradients.stops);
var default_css = javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14548,G__14549,G__14546,G__14550,G__14547,G__14551){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),G__14546.call(null,G__14547),new cljs.core.Keyword(null,"height","height",1025178622),G__14546.call(null,G__14548),new cljs.core.Keyword(null,"left","left",-399115937),G__14546.call(null,G__14549),new cljs.core.Keyword(null,"background-color","background-color",570434026),G__14550,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14551),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14551),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s ease")].join('')], null);
});})(width,rotated_offset,height,left,top,color,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,height,left,unit.conversion.n__GT_px,color,width,transition_length__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14558,G__14556,G__14553,G__14554,G__14555,G__14552,G__14557){
return G__14552.call(null,G__14553,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__14554.call(null,(G__14555 - ((2) * G__14556))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14557)?G__14558:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14557)?"45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null),(cljs.core.truth_(G__14557)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14560,G__14561,G__14562,G__14559,G__14563){
return G__14559.call(null,G__14560,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__14561.call(null,G__14562),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14563)?(0):(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('')], null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1){
return (function (G__14570,G__14568,G__14565,G__14566,G__14567,G__14564,G__14569){
return G__14564.call(null,G__14565,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),G__14566.call(null,(G__14567 + ((2) * G__14568))),new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, -"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14569)?G__14570:(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rotate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__14569)?"-45deg":"0deg")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") ")].join('')], null),(cljs.core.truth_(G__14569)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white"], null):null));
});})(width,rotated_offset,height,left,top,color,default_css,open_QMARK___$1,mouseover_QMARK___$1,transition_length__$1))
).call(null,rotated_offset,height,default_css,unit.conversion.n__GT_px,top,cljs.core.merge,open_QMARK___$1))], null);
})());
});
menu.flower.menu = (function menu$flower$menu(current_item,items,radius){
var open_QMARK_ = javelin.core.cell.call(null,false);
var button_hover_QMARK_ = javelin.core.cell.call(null,false);
var ratio = 0.4;
var offset = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio){
return (function (G__14631,G__14632){
return (G__14631 / ((1) + G__14632));
});})(open_QMARK_,button_hover_QMARK_,ratio))
).call(null,radius,ratio);
var item_radius = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset){
return (function (G__14634,G__14633){
return (G__14633 * G__14634);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset))
).call(null,offset,ratio);
var radians_per_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius){
return (function (G__14636,G__14635){
return (((2) * Math.PI) / G__14635.call(null,G__14636));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius))
).call(null,items,cljs.core.count);
var i_xy_item = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (G__14641,G__14637,G__14639,G__14638,G__14640){
return G__14637.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item){
return (function (i,item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,G__14638.call(null,G__14639,(i * G__14640)),item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
,G__14641);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item))
).call(null,items,cljs.core.map_indexed,offset,wheel.math.geometry.polar__GT_cartesian,radians_per_item);
var total_transition_length = menu.config.transition_length;
var base_transition_length = javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length){
return (function (G__14644,G__14642,G__14643){
return (G__14642 / G__14643.call(null,G__14644));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length))
).call(null,items,total_transition_length,cljs.core.count);
return menu.flower.outer_wrapper.call(null,radius,open_QMARK_,button_hover_QMARK_,total_transition_length,hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null),menu.flower.open_button.call(null,open_QMARK_,button_hover_QMARK_,item_radius,total_transition_length)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0)], null),hoplon.core.loop_tpl_STAR_.call(null,i_xy_item,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (item__10271__auto__){
var vec__14657 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__14660){
var vec__14661 = p__14660;
var i = cljs.core.nth.call(null,vec__14661,(0),null);
var vec__14664 = cljs.core.nth.call(null,vec__14661,(1),null);
var x = cljs.core.nth.call(null,vec__14664,(0),null);
var y = cljs.core.nth.call(null,vec__14664,(1),null);
var item = cljs.core.nth.call(null,vec__14661,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,i,y,item], null);
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item__10271__auto__));
var x = cljs.core.nth.call(null,vec__14657,(0),null);
var i = cljs.core.nth.call(null,vec__14657,(1),null);
var y = cljs.core.nth.call(null,vec__14657,(2),null);
var item = cljs.core.nth.call(null,vec__14657,(3),null);
var transition_delay = javelin.core.formula.call(null,((function (vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14669,G__14668,G__14667){
if(cljs.core.truth_(G__14667)){
return (G__14668 * G__14669);
} else {
return (0);
}
});})(vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,base_transition_length,i,open_QMARK_);
var url = javelin.core.formula.call(null,((function (transition_delay,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14670){
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__14670);
});})(transition_delay,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var text = javelin.core.formula.call(null,((function (transition_delay,url,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14671){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__14671);
});})(transition_delay,url,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,item);
var mouseover_QMARK_ = javelin.core.cell.call(null,false);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14677,G__14674,G__14678,G__14675,G__14672,G__14673,G__14676){
return G__14672.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14673),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14674),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14675),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(G__14676)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14677),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14678),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px)")].join(''):"translate(0, 0)")], null));
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,x,menu.config.easing,y,transition_delay,cljs.core.merge,total_transition_length,open_QMARK_),hoplon.core.div.call(null,new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,true);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return cljs.core.reset_BANG_.call(null,mouseover_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"click","click",1912301393),((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return javelin.core.dosync_STAR_.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
cljs.core.reset_BANG_.call(null,current_item,cljs.core.deref.call(null,item));

return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14679,G__14685,G__14683,G__14682,G__14681,G__14684,G__14680,G__14686){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"background-image","background-image",-1142314704),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"background-repeat","background-repeat",-387201191),new cljs.core.Keyword(null,"background-position","background-position",1112702746),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"background-size","background-size",-1248630243),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1("scale("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__7748__auto__ = G__14679;
if(cljs.core.truth_(and__7748__auto__)){
return G__14680;
} else {
return and__7748__auto__;
}
})())?G__14681:(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),G__14682.call(null,(- G__14683)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("transform "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((G__14684 / (2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14685)].join(''),"hidden","white",((2) * G__14683),"pointer",(cljs.core.truth_(G__14686)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url('"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14686),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):null),"absolute","no-repeat","center","4px solid",G__14682.call(null,G__14683),"contain",((2) * G__14683),G__14682.call(null,(- G__14683))]);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,mouseover_QMARK_,menu.config.easing,item_radius,unit.conversion.n__GT_px,menu.flower.big_scale,total_transition_length,open_QMARK_,url),(function (){var con__10281__auto__ = (new cljs.core.Delay(((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return hoplon.core.table.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),hoplon.core.tr.call(null,hoplon.core.td.call(null,new cljs.core.Keyword(null,"valign","valign",1485197511),"center",new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),wheel.font.core.font__GT_css_map.call(null,fonts.config.playfair)),text)));
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var alt__10282__auto__ = (new cljs.core.Delay(((function (con__10281__auto__,transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (){
return null;
});})(con__10281__auto__,transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
,null));
var tpl__10283__auto__ = ((function (con__10281__auto__,alt__10282__auto__,transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (p__10284__auto__){
return cljs.core.deref.call(null,(function (){var or__7760__auto__ = (cljs.core.truth_(p__10284__auto__)?con__10281__auto__:alt__10282__auto__);
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return cljs.core.atom.call(null);
}
})());
});})(con__10281__auto__,alt__10282__auto__,transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
;
return javelin.core.formula.call(null,tpl__10283__auto__).call(null,text);
})(),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length){
return (function (G__14688,G__14689,G__14687,G__14690){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"transition","transition",765692007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14687),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14688),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14689),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(G__14690)?(0):(1))], null);
});})(transition_delay,url,text,mouseover_QMARK_,vec__14657,x,i,y,item,open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
).call(null,menu.config.easing,transition_delay,total_transition_length,open_QMARK_))));
});})(open_QMARK_,button_hover_QMARK_,ratio,offset,item_radius,radians_per_item,i_xy_item,total_transition_length,base_transition_length))
)));
});

//# sourceMappingURL=flower.js.map