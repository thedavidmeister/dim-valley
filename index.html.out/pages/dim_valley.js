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
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24315,G__24314){
return (G__24314 / Math.cos((G__24315.cljs$core$IFn$_invoke$arity$1 ? G__24315.cljs$core$IFn$_invoke$arity$1((45)) : G__24315.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__24316,G__24317,G__24318,G__24319){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24316.cljs$core$IFn$_invoke$arity$1 ? G__24316.cljs$core$IFn$_invoke$arity$1(G__24317) : G__24316.call(null,G__24317)),cljs.core.cst$kw$height,(function (){var G__24320 = (G__24318 / (6));
return (G__24316.cljs$core$IFn$_invoke$arity$1 ? G__24316.cljs$core$IFn$_invoke$arity$1(G__24320) : G__24316.call(null,G__24320));
})(),cljs.core.cst$kw$background_DASH_color,G__24319,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__24321 = cljs.core.cst$kw$css;
var G__24322 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__24323 = (function (){var G__24325 = cljs.core.cst$kw$css;
var G__24326 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24325,G__24321,G__24322,line_length,base_css){
return (function (G__24328,G__24327){
var G__24329 = G__24328;
var G__24330 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__24327.cljs$core$IFn$_invoke$arity$2 ? G__24327.cljs$core$IFn$_invoke$arity$2(G__24329,G__24330) : G__24327.call(null,G__24329,G__24330));
});})(G__24325,G__24321,G__24322,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24325,G__24326) : hoplon.core.div.call(null,G__24325,G__24326));
})();
var G__24324 = (function (){var G__24331 = cljs.core.cst$kw$css;
var G__24332 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24331,G__24321,G__24322,G__24323,line_length,base_css){
return (function (G__24334,G__24333){
var G__24335 = G__24334;
var G__24336 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__24333.cljs$core$IFn$_invoke$arity$2 ? G__24333.cljs$core$IFn$_invoke$arity$2(G__24335,G__24336) : G__24333.call(null,G__24335,G__24336));
});})(G__24331,G__24321,G__24322,G__24323,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24331,G__24332) : hoplon.core.div.call(null,G__24331,G__24332));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24321,G__24322,G__24323,G__24324) : hoplon.core.div.call(null,G__24321,G__24322,G__24323,G__24324));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.dim_valley.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__24337_SHARP_){
return (p1__24337_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [image.hoplon.cropped.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$src,"https://c1.staticflickr.com/5/4147/5171955995_e22e6c41d4_b.jpg",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_bottom,"4px",cljs.core.cst$kw$filter,"saturate(0)"], null)], 0)),layout.header_block.header("Dim Valley","Modern business services"),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(layout.body_text.p.cljs$core$IFn$_invoke$arity$1 ? layout.body_text.p.cljs$core$IFn$_invoke$arity$1("Milly Schmidt and Dave Meister have developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns, technologies and tools to solve their unique problems.") : layout.body_text.p.call(null,"Milly Schmidt and Dave Meister have developed a business-first approach to technology. We work with organisations in an honest and bespoke manner, leveraging various approaches, patterns, technologies and tools to solve their unique problems.")),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1("Contact us") : hoplon.core.h2.call(null,"Contact us")),(function (){var G__24342 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__24343 = "0403 858 811 | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24342,G__24343) : hoplon.core.p.call(null,G__24342,G__24343));
})(),(function (){var G__24344 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__24345 = "0434 016 790 | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24344,G__24345) : hoplon.core.p.call(null,G__24344,G__24345));
})(),wheel.address.hoplon.simple(address.config.address),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn("38 617 641 595")], null),(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0)),pages.dim_valley.dv_map()], null);
});
