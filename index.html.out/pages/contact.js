// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('pages.contact');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('layout.content_block');
goog.require('layout.header_block');
goog.require('colours.ui_gradients');
goog.require('layout.spacer');
goog.require('mapbox.dom');
goog.require('mapbox.api');
goog.require('unit.conversion');
goog.require('wheel.math.geometry');
goog.require('wheel.address.hoplon');
goog.require('address.config');
pages.contact.dv_marker = (function pages$contact$dv_marker(width){
var line_length = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__24762,G__24761){
return (G__24761 / Math.cos((G__24762.cljs$core$IFn$_invoke$arity$1 ? G__24762.cljs$core$IFn$_invoke$arity$1((45)) : G__24762.call(null,(45)))));
})).call(null,wheel.math.geometry.degrees__GT_radians,width);
var base_css = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__24763,G__24764,G__24765,G__24766){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__24763.cljs$core$IFn$_invoke$arity$1 ? G__24763.cljs$core$IFn$_invoke$arity$1(G__24764) : G__24763.call(null,G__24764)),cljs.core.cst$kw$height,(function (){var G__24767 = (G__24765 / (6));
return (G__24763.cljs$core$IFn$_invoke$arity$1 ? G__24763.cljs$core$IFn$_invoke$arity$1(G__24767) : G__24763.call(null,G__24767));
})(),cljs.core.cst$kw$background_DASH_color,G__24766,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
).call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour);
var G__24768 = cljs.core.cst$kw$css;
var G__24769 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__24770 = (function (){var G__24772 = cljs.core.cst$kw$css;
var G__24773 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24772,G__24768,G__24769,line_length,base_css){
return (function (G__24775,G__24774){
var G__24776 = G__24775;
var G__24777 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__24774.cljs$core$IFn$_invoke$arity$2 ? G__24774.cljs$core$IFn$_invoke$arity$2(G__24776,G__24777) : G__24774.call(null,G__24776,G__24777));
});})(G__24772,G__24768,G__24769,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24772,G__24773) : hoplon.core.div.call(null,G__24772,G__24773));
})();
var G__24771 = (function (){var G__24778 = cljs.core.cst$kw$css;
var G__24779 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24778,G__24768,G__24769,G__24770,line_length,base_css){
return (function (G__24781,G__24780){
var G__24782 = G__24781;
var G__24783 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__24780.cljs$core$IFn$_invoke$arity$2 ? G__24780.cljs$core$IFn$_invoke$arity$2(G__24782,G__24783) : G__24780.call(null,G__24782,G__24783));
});})(G__24778,G__24768,G__24769,G__24770,line_length,base_css))
).call(null,base_css,cljs.core.merge);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24778,G__24779) : hoplon.core.div.call(null,G__24778,G__24779));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__24768,G__24769,G__24770,G__24771) : hoplon.core.div.call(null,G__24768,G__24769,G__24770,G__24771));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__24784_SHARP_){
return (p1__24784_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.contact.dv_map(),layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),(function (){var G__24791 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__24792 = "0403 858 811 | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24791,G__24792) : hoplon.core.p.call(null,G__24791,G__24792));
})(),(function (){var G__24793 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__24794 = "0434 016 790 | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24793,G__24794) : hoplon.core.p.call(null,G__24793,G__24794));
})(),(function (){var G__24795 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__24796 = wheel.address.hoplon.simple(address.config.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__24795,G__24796) : hoplon.core.p.call(null,G__24795,G__24796));
})(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0))], null);
});