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
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__20827,G__20826){
return (G__20826 / Math.cos((G__20827.cljs$core$IFn$_invoke$arity$1 ? G__20827.cljs$core$IFn$_invoke$arity$1((45)) : G__20827.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__20828,G__20829,G__20830,G__20831){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__20828.cljs$core$IFn$_invoke$arity$1 ? G__20828.cljs$core$IFn$_invoke$arity$1(G__20829) : G__20828.call(null,G__20829)),cljs.core.cst$kw$height,(function (){var G__20832 = (G__20830 / (6));
return (G__20828.cljs$core$IFn$_invoke$arity$1 ? G__20828.cljs$core$IFn$_invoke$arity$1(G__20832) : G__20828.call(null,G__20832));
})(),cljs.core.cst$kw$background_DASH_color,G__20831,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__20833 = cljs.core.cst$kw$css;
var G__20834 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__20835 = (function (){var G__20837 = cljs.core.cst$kw$css;
var G__20838 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20837,G__20833,G__20834,line_length,base_css){
return (function (G__20840,G__20839){
var G__20841 = G__20840;
var G__20842 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__20839.cljs$core$IFn$_invoke$arity$2 ? G__20839.cljs$core$IFn$_invoke$arity$2(G__20841,G__20842) : G__20839.call(null,G__20841,G__20842));
});})(G__20837,G__20833,G__20834,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20837,G__20838) : hoplon.core.div.call(null,G__20837,G__20838));
})();
var G__20836 = (function (){var G__20843 = cljs.core.cst$kw$css;
var G__20844 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20843,G__20833,G__20834,G__20835,line_length,base_css){
return (function (G__20846,G__20845){
var G__20847 = G__20846;
var G__20848 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__20845.cljs$core$IFn$_invoke$arity$2 ? G__20845.cljs$core$IFn$_invoke$arity$2(G__20847,G__20848) : G__20845.call(null,G__20847,G__20848));
});})(G__20843,G__20833,G__20834,G__20835,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20843,G__20844) : hoplon.core.div.call(null,G__20843,G__20844));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__20833,G__20834,G__20835,G__20836) : hoplon.core.div.call(null,G__20833,G__20834,G__20835,G__20836));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.dim_valley.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__20849_SHARP_){
return (p1__20849_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.dim_valley.dv_map(),layout.header_block.header("Dim valley pty. ltd.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn("38 617 641 595"),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"Modern business services"], null)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([wheel.address.hoplon.simple(address.config.address),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lorem ipsum"], 0))], null);
});
