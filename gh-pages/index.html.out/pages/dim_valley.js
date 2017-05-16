// Compiled by ClojureScript 1.9.521 {}
goog.provide('pages.dim_valley');
goog.require('cljs.core');
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
var line_length = javelin.core.formula.call(null,(function (G__14907,G__14906){
return (G__14906 / Math.cos(G__14907.call(null,(45))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.call(null,((function (line_length){
return (function (G__14908,G__14909,G__14910,G__14911){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),G__14908.call(null,G__14909),new cljs.core.Keyword(null,"height","height",1025178622),G__14908.call(null,(G__14910 / (6))),new cljs.core.Keyword(null,"background-color","background-color",570434026),G__14911,new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (line_length,base_css){
return (function (G__14913,G__14912){
return G__14912.call(null,G__14913,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(45deg)"], null));
});})(line_length,base_css))
).call(null,base_css,cljs.core.merge)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (line_length,base_css){
return (function (G__14915,G__14914){
return G__14914.call(null,G__14915,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-45deg)"], null));
});})(line_length,base_css))
).call(null,base_css,cljs.core.merge)));
});
pages.dim_valley.dv_map = (function pages$dim_valley$dv_map(){
var ll = mapbox.api.lng_lat.call(null,144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 0"], null),new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"marker","marker",865118313),pages.dim_valley.dv_marker.call(null,marker_width),new cljs.core.Keyword(null,"marker-options","marker-options",127332870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core._,((function (ll,marker_width,options){
return (function (p1__14916_SHARP_){
return (p1__14916_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null));
return el;
});
pages.dim_valley.content = (function pages$dim_valley$content(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [layout.header_block.header.call(null,"Dim valley pty. ltd.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A.B.N. ",wheel.abn.hoplon.abn.call(null,"38 617 641 595"),hoplon.core.br.call(null),"Modern business services"], null)),layout.content_block.content_inner.call(null,wheel.address.hoplon.simple.call(null,address.config.address),layout.spacer.vertical_spacer.call(null)),pages.dim_valley.dv_map.call(null),layout.content_block.content_inner.call(null,"Lorem ipsum")], null);
});

//# sourceMappingURL=dim_valley.js.map