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
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24238,G__24237){
return (G__24237 / Math.cos((G__24238.cljs$core$IFn$_invoke$arity$1 ? G__24238.cljs$core$IFn$_invoke$arity$1((45)) : G__24238.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__24239,G__24240,G__24241,G__24242){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24239.cljs$core$IFn$_invoke$arity$1 ? G__24239.cljs$core$IFn$_invoke$arity$1(G__24240) : G__24239.call(null,G__24240)),cljs.core.cst$kw$height,(function (){var G__24243 = (G__24241 / (6));
return (G__24239.cljs$core$IFn$_invoke$arity$1 ? G__24239.cljs$core$IFn$_invoke$arity$1(G__24243) : G__24239.call(null,G__24243));
})(),cljs.core.cst$kw$background_DASH_color,G__24242,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__24244 = cljs.core.cst$kw$css;
var G__24245 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__24246 = (function (){var G__24248 = cljs.core.cst$kw$css;
var G__24249 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24248,G__24244,G__24245,line_length,base_css){
return (function (G__24251,G__24250){
var G__24252 = G__24251;
var G__24253 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__24250.cljs$core$IFn$_invoke$arity$2 ? G__24250.cljs$core$IFn$_invoke$arity$2(G__24252,G__24253) : G__24250.call(null,G__24252,G__24253));
});})(G__24248,G__24244,G__24245,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24248,G__24249) : hoplon.core.div.call(null,G__24248,G__24249));
})();
var G__24247 = (function (){var G__24254 = cljs.core.cst$kw$css;
var G__24255 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24254,G__24244,G__24245,G__24246,line_length,base_css){
return (function (G__24257,G__24256){
var G__24258 = G__24257;
var G__24259 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__24256.cljs$core$IFn$_invoke$arity$2 ? G__24256.cljs$core$IFn$_invoke$arity$2(G__24258,G__24259) : G__24256.call(null,G__24258,G__24259));
});})(G__24254,G__24244,G__24245,G__24246,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24254,G__24255) : hoplon.core.div.call(null,G__24254,G__24255));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24244,G__24245,G__24246,G__24247) : hoplon.core.div.call(null,G__24244,G__24245,G__24246,G__24247));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.dim_valley.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__24260_SHARP_){
return (p1__24260_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.dim_valley.dv_map(),layout.header_block.header("Dim valley pty. ltd.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn("38 617 641 595"),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"Modern business services"], null)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([wheel.address.hoplon.simple(address.config.address),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Lorem ipsum"], 0))], null);
});
