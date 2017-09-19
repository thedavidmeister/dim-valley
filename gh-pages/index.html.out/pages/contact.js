// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pages.contact');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('unit.conversion');
goog.require('layout.content_block');
goog.require('layout.header_block');
goog.require('colours.ui_gradients');
goog.require('mapbox.dom');
goog.require('mapbox.api');
goog.require('wheel.math.geometry');
goog.require('wheel.address.hoplon');
goog.require('layout.spacer');
goog.require('wheel.phone.hoplon');
goog.require('contact.hoplon');
pages.contact.dv_marker = (function pages$contact$dv_marker(width){
var line_length = (function (){var fexpr__25631 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25630,G__25629){
return (G__25629 / Math.cos((G__25630.cljs$core$IFn$_invoke$arity$1 ? G__25630.cljs$core$IFn$_invoke$arity$1((45)) : G__25630.call(null,(45)))));
}));
return (fexpr__25631.cljs$core$IFn$_invoke$arity$2 ? fexpr__25631.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25631.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25637 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25632,G__25633,G__25634,G__25635){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25632.cljs$core$IFn$_invoke$arity$1 ? G__25632.cljs$core$IFn$_invoke$arity$1(G__25633) : G__25632.call(null,G__25633)),cljs.core.cst$kw$height,(function (){var G__25638 = (G__25634 / (6));
return (G__25632.cljs$core$IFn$_invoke$arity$1 ? G__25632.cljs$core$IFn$_invoke$arity$1(G__25638) : G__25632.call(null,G__25638));
})(),cljs.core.cst$kw$background_DASH_color,G__25635,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25637.cljs$core$IFn$_invoke$arity$4 ? fexpr__25637.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25637.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25639 = cljs.core.cst$kw$css;
var G__25640 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25641 = (function (){var G__25643 = cljs.core.cst$kw$css;
var G__25644 = (function (){var fexpr__25649 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25643,G__25639,G__25640,line_length,base_css){
return (function (G__25646,G__25645){
var G__25650 = G__25646;
var G__25651 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25645.cljs$core$IFn$_invoke$arity$2 ? G__25645.cljs$core$IFn$_invoke$arity$2(G__25650,G__25651) : G__25645.call(null,G__25650,G__25651));
});})(G__25643,G__25639,G__25640,line_length,base_css))
);
return (fexpr__25649.cljs$core$IFn$_invoke$arity$2 ? fexpr__25649.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25649.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25643,G__25644) : hoplon.core.div.call(null,G__25643,G__25644));
})();
var G__25642 = (function (){var G__25652 = cljs.core.cst$kw$css;
var G__25653 = (function (){var fexpr__25658 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25652,G__25639,G__25640,G__25641,line_length,base_css){
return (function (G__25655,G__25654){
var G__25659 = G__25655;
var G__25660 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25654.cljs$core$IFn$_invoke$arity$2 ? G__25654.cljs$core$IFn$_invoke$arity$2(G__25659,G__25660) : G__25654.call(null,G__25659,G__25660));
});})(G__25652,G__25639,G__25640,G__25641,line_length,base_css))
);
return (fexpr__25658.cljs$core$IFn$_invoke$arity$2 ? fexpr__25658.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25658.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25652,G__25653) : hoplon.core.div.call(null,G__25652,G__25653));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25639,G__25640,G__25641,G__25642) : hoplon.core.div.call(null,G__25639,G__25640,G__25641,G__25642));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25661_SHARP_){
return (p1__25661_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25662 = pages.contact.dv_map();
var G__25663 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),contact.hoplon.details(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25662,G__25663) : hoplon.core.div.call(null,G__25662,G__25663));
});
