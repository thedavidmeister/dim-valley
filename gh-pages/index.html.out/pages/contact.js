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
goog.require('address.config');
goog.require('layout.spacer');
goog.require('wheel.phone.hoplon');
pages.contact.dv_marker = (function pages$contact$dv_marker(width){
var line_length = (function (){var fexpr__25491 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25490,G__25489){
return (G__25489 / Math.cos((G__25490.cljs$core$IFn$_invoke$arity$1 ? G__25490.cljs$core$IFn$_invoke$arity$1((45)) : G__25490.call(null,(45)))));
}));
return (fexpr__25491.cljs$core$IFn$_invoke$arity$2 ? fexpr__25491.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25491.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25497 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25492,G__25493,G__25494,G__25495){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25492.cljs$core$IFn$_invoke$arity$1 ? G__25492.cljs$core$IFn$_invoke$arity$1(G__25493) : G__25492.call(null,G__25493)),cljs.core.cst$kw$height,(function (){var G__25498 = (G__25494 / (6));
return (G__25492.cljs$core$IFn$_invoke$arity$1 ? G__25492.cljs$core$IFn$_invoke$arity$1(G__25498) : G__25492.call(null,G__25498));
})(),cljs.core.cst$kw$background_DASH_color,G__25495,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25497.cljs$core$IFn$_invoke$arity$4 ? fexpr__25497.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25497.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25499 = cljs.core.cst$kw$css;
var G__25500 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25501 = (function (){var G__25503 = cljs.core.cst$kw$css;
var G__25504 = (function (){var fexpr__25509 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25503,G__25499,G__25500,line_length,base_css){
return (function (G__25506,G__25505){
var G__25510 = G__25506;
var G__25511 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25505.cljs$core$IFn$_invoke$arity$2 ? G__25505.cljs$core$IFn$_invoke$arity$2(G__25510,G__25511) : G__25505.call(null,G__25510,G__25511));
});})(G__25503,G__25499,G__25500,line_length,base_css))
);
return (fexpr__25509.cljs$core$IFn$_invoke$arity$2 ? fexpr__25509.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25509.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25503,G__25504) : hoplon.core.div.call(null,G__25503,G__25504));
})();
var G__25502 = (function (){var G__25512 = cljs.core.cst$kw$css;
var G__25513 = (function (){var fexpr__25518 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25512,G__25499,G__25500,G__25501,line_length,base_css){
return (function (G__25515,G__25514){
var G__25519 = G__25515;
var G__25520 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25514.cljs$core$IFn$_invoke$arity$2 ? G__25514.cljs$core$IFn$_invoke$arity$2(G__25519,G__25520) : G__25514.call(null,G__25519,G__25520));
});})(G__25512,G__25499,G__25500,G__25501,line_length,base_css))
);
return (fexpr__25518.cljs$core$IFn$_invoke$arity$2 ? fexpr__25518.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25518.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25512,G__25513) : hoplon.core.div.call(null,G__25512,G__25513));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25499,G__25500,G__25501,G__25502) : hoplon.core.div.call(null,G__25499,G__25500,G__25501,G__25502));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25521_SHARP_){
return (p1__25521_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25522 = pages.contact.dv_map();
var G__25523 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),(function (){var G__25524 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__25525 = wheel.phone.hoplon.phone("0403 858 811");
var G__25526 = " | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__25524,G__25525,G__25526) : hoplon.core.p.call(null,G__25524,G__25525,G__25526));
})(),(function (){var G__25527 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__25528 = wheel.phone.hoplon.phone("0434 016 790");
var G__25529 = " | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__25527,G__25528,G__25529) : hoplon.core.p.call(null,G__25527,G__25528,G__25529));
})(),(function (){var G__25530 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__25531 = wheel.address.hoplon.simple(address.config.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__25530,G__25531) : hoplon.core.p.call(null,G__25530,G__25531));
})(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25522,G__25523) : hoplon.core.div.call(null,G__25522,G__25523));
});
