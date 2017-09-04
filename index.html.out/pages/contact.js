// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
goog.require('address.config');
goog.require('layout.spacer');
pages.contact.dv_marker = (function pages$contact$dv_marker(width){
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24795,G__24794){
return (G__24794 / Math.cos((G__24795.cljs$core$IFn$_invoke$arity$1 ? G__24795.cljs$core$IFn$_invoke$arity$1((45)) : G__24795.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__24796,G__24797,G__24798,G__24799){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24796.cljs$core$IFn$_invoke$arity$1 ? G__24796.cljs$core$IFn$_invoke$arity$1(G__24797) : G__24796.call(null,G__24797)),cljs.core.cst$kw$height,(function (){var G__24800 = (G__24798 / (6));
return (G__24796.cljs$core$IFn$_invoke$arity$1 ? G__24796.cljs$core$IFn$_invoke$arity$1(G__24800) : G__24796.call(null,G__24800));
})(),cljs.core.cst$kw$background_DASH_color,G__24799,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__24801 = cljs.core.cst$kw$css;
var G__24802 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__24803 = (function (){var G__24805 = cljs.core.cst$kw$css;
var G__24806 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24805,G__24801,G__24802,line_length,base_css){
return (function (G__24808,G__24807){
var G__24809 = G__24808;
var G__24810 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__24807.cljs$core$IFn$_invoke$arity$2 ? G__24807.cljs$core$IFn$_invoke$arity$2(G__24809,G__24810) : G__24807.call(null,G__24809,G__24810));
});})(G__24805,G__24801,G__24802,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24805,G__24806) : hoplon.core.div.call(null,G__24805,G__24806));
})();
var G__24804 = (function (){var G__24811 = cljs.core.cst$kw$css;
var G__24812 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24811,G__24801,G__24802,G__24803,line_length,base_css){
return (function (G__24814,G__24813){
var G__24815 = G__24814;
var G__24816 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__24813.cljs$core$IFn$_invoke$arity$2 ? G__24813.cljs$core$IFn$_invoke$arity$2(G__24815,G__24816) : G__24813.call(null,G__24815,G__24816));
});})(G__24811,G__24801,G__24802,G__24803,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24811,G__24812) : hoplon.core.div.call(null,G__24811,G__24812));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24801,G__24802,G__24803,G__24804) : hoplon.core.div.call(null,G__24801,G__24802,G__24803,G__24804));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__24817_SHARP_){
return (p1__24817_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__24826 = pages.contact.dv_map();
var G__24827 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),(function (){var G__24828 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__24829 = "0403 858 811 | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24828,G__24829) : hoplon.core.p.call(null,G__24828,G__24829));
})(),(function (){var G__24830 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__24831 = "0434 016 790 | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24830,G__24831) : hoplon.core.p.call(null,G__24830,G__24831));
})(),(function (){var G__24832 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__24833 = wheel.address.hoplon.simple(address.config.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24832,G__24833) : hoplon.core.p.call(null,G__24832,G__24833));
})(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24826,G__24827) : hoplon.core.div.call(null,G__24826,G__24827));
});
