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
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24284,G__24283){
return (G__24283 / Math.cos((G__24284.cljs$core$IFn$_invoke$arity$1 ? G__24284.cljs$core$IFn$_invoke$arity$1((45)) : G__24284.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__24285,G__24286,G__24287,G__24288){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24285.cljs$core$IFn$_invoke$arity$1 ? G__24285.cljs$core$IFn$_invoke$arity$1(G__24286) : G__24285.call(null,G__24286)),cljs.core.cst$kw$height,(function (){var G__24289 = (G__24287 / (6));
return (G__24285.cljs$core$IFn$_invoke$arity$1 ? G__24285.cljs$core$IFn$_invoke$arity$1(G__24289) : G__24285.call(null,G__24289));
})(),cljs.core.cst$kw$background_DASH_color,G__24288,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__24290 = cljs.core.cst$kw$css;
var G__24291 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__24292 = (function (){var G__24294 = cljs.core.cst$kw$css;
var G__24295 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24294,G__24290,G__24291,line_length,base_css){
return (function (G__24297,G__24296){
var G__24298 = G__24297;
var G__24299 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__24296.cljs$core$IFn$_invoke$arity$2 ? G__24296.cljs$core$IFn$_invoke$arity$2(G__24298,G__24299) : G__24296.call(null,G__24298,G__24299));
});})(G__24294,G__24290,G__24291,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24294,G__24295) : hoplon.core.div.call(null,G__24294,G__24295));
})();
var G__24293 = (function (){var G__24300 = cljs.core.cst$kw$css;
var G__24301 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24300,G__24290,G__24291,G__24292,line_length,base_css){
return (function (G__24303,G__24302){
var G__24304 = G__24303;
var G__24305 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__24302.cljs$core$IFn$_invoke$arity$2 ? G__24302.cljs$core$IFn$_invoke$arity$2(G__24304,G__24305) : G__24302.call(null,G__24304,G__24305));
});})(G__24300,G__24290,G__24291,G__24292,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24300,G__24301) : hoplon.core.div.call(null,G__24300,G__24301));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24290,G__24291,G__24292,G__24293) : hoplon.core.div.call(null,G__24290,G__24291,G__24292,G__24293));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.dim_valley.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__24306_SHARP_){
return (p1__24306_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout.header_block.header("Dim Valley","Modern business services"),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Milly Schmidt and Dave Meister have developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns, technologies and tools to solve their unique problems.",layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Contact us") : hoplon.core.h2.call(null,"Contact us")),(function (){var G__24311 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__24312 = "0403 858 811 | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24311,G__24312) : hoplon.core.p.call(null,G__24311,G__24312));
})(),(function (){var G__24313 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__24314 = "0434 016 790 | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24313,G__24314) : hoplon.core.p.call(null,G__24313,G__24314));
})(),wheel.address.hoplon.simple(address.config.address),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn("38 617 641 595")], null),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),pages.dim_valley.dv_map()], null);
});