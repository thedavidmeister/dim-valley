// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('pages.dim_valley');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('colours.ui_gradients');
goog.require('layout.header_block');
goog.require('layout.content_block');
goog.require('layout.spacer');
goog.require('mapbox.dom');
goog.require('mapbox.api');
goog.require('unit.conversion');
goog.require('wheel.math.geometry');
goog.require('wheel.abn.hoplon');
goog.require('wheel.address.hoplon');
goog.require('address.config');
pages.dim_valley.dv_marker = (function pages$dim_valley$dv_marker(width){
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20854,G__20853){
return (G__20853 / Math.cos((G__20854.cljs$core$IFn$_invoke$arity$1 ? G__20854.cljs$core$IFn$_invoke$arity$1((45)) : G__20854.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__20855,G__20856,G__20857,G__20858){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__20855.cljs$core$IFn$_invoke$arity$1 ? G__20855.cljs$core$IFn$_invoke$arity$1(G__20856) : G__20855.call(null,G__20856)),cljs.core.cst$kw$height,(function (){var G__20859 = (G__20857 / (6));
return (G__20855.cljs$core$IFn$_invoke$arity$1 ? G__20855.cljs$core$IFn$_invoke$arity$1(G__20859) : G__20855.call(null,G__20859));
})(),cljs.core.cst$kw$background_DASH_color,G__20858,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__20860 = cljs.core.cst$kw$css;
var G__20861 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__20862 = (function (){var G__20864 = cljs.core.cst$kw$css;
var G__20865 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20864,G__20860,G__20861,line_length,base_css){
return (function (G__20867,G__20866){
var G__20868 = G__20867;
var G__20869 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__20866.cljs$core$IFn$_invoke$arity$2 ? G__20866.cljs$core$IFn$_invoke$arity$2(G__20868,G__20869) : G__20866.call(null,G__20868,G__20869));
});})(G__20864,G__20860,G__20861,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20864,G__20865) : hoplon.core.div.call(null,G__20864,G__20865));
})();
var G__20863 = (function (){var G__20870 = cljs.core.cst$kw$css;
var G__20871 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20870,G__20860,G__20861,G__20862,line_length,base_css){
return (function (G__20873,G__20872){
var G__20874 = G__20873;
var G__20875 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__20872.cljs$core$IFn$_invoke$arity$2 ? G__20872.cljs$core$IFn$_invoke$arity$2(G__20874,G__20875) : G__20872.call(null,G__20874,G__20875));
});})(G__20870,G__20860,G__20861,G__20862,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20870,G__20871) : hoplon.core.div.call(null,G__20870,G__20871));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20860,G__20861,G__20862,G__20863) : hoplon.core.div.call(null,G__20860,G__20861,G__20862,G__20863));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.dim_valley.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__20876_SHARP_){
return (p1__20876_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.dim_valley.dv_map(),layout.header_block.header("Dim valley pty. ltd.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn("38 617 641 595"),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"Modern business services"], null)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([wheel.address.hoplon.simple(address.config.address),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lorem ipsum"], 0))], null);
});
