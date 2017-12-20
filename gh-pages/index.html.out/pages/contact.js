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
goog.require('layout.body_text');
pages.contact.dv_marker = (function pages$contact$dv_marker(width){
var line_length = (function (){var fexpr__25671 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25670,G__25669){
return (G__25669 / Math.cos((G__25670.cljs$core$IFn$_invoke$arity$1 ? G__25670.cljs$core$IFn$_invoke$arity$1((45)) : G__25670.call(null,(45)))));
}));
return (fexpr__25671.cljs$core$IFn$_invoke$arity$2 ? fexpr__25671.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25671.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25677 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25672,G__25673,G__25674,G__25675){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25672.cljs$core$IFn$_invoke$arity$1 ? G__25672.cljs$core$IFn$_invoke$arity$1(G__25673) : G__25672.call(null,G__25673)),cljs.core.cst$kw$height,(function (){var G__25678 = (G__25674 / (6));
return (G__25672.cljs$core$IFn$_invoke$arity$1 ? G__25672.cljs$core$IFn$_invoke$arity$1(G__25678) : G__25672.call(null,G__25678));
})(),cljs.core.cst$kw$background_DASH_color,G__25675,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25677.cljs$core$IFn$_invoke$arity$4 ? fexpr__25677.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25677.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25679 = cljs.core.cst$kw$css;
var G__25680 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25681 = (function (){var G__25683 = cljs.core.cst$kw$css;
var G__25684 = (function (){var fexpr__25689 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25683,G__25679,G__25680,line_length,base_css){
return (function (G__25686,G__25685){
var G__25690 = G__25686;
var G__25691 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25685.cljs$core$IFn$_invoke$arity$2 ? G__25685.cljs$core$IFn$_invoke$arity$2(G__25690,G__25691) : G__25685.call(null,G__25690,G__25691));
});})(G__25683,G__25679,G__25680,line_length,base_css))
);
return (fexpr__25689.cljs$core$IFn$_invoke$arity$2 ? fexpr__25689.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25689.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25683,G__25684) : hoplon.core.div.call(null,G__25683,G__25684));
})();
var G__25682 = (function (){var G__25692 = cljs.core.cst$kw$css;
var G__25693 = (function (){var fexpr__25698 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25692,G__25679,G__25680,G__25681,line_length,base_css){
return (function (G__25695,G__25694){
var G__25699 = G__25695;
var G__25700 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25694.cljs$core$IFn$_invoke$arity$2 ? G__25694.cljs$core$IFn$_invoke$arity$2(G__25699,G__25700) : G__25694.call(null,G__25699,G__25700));
});})(G__25692,G__25679,G__25680,G__25681,line_length,base_css))
);
return (fexpr__25698.cljs$core$IFn$_invoke$arity$2 ? fexpr__25698.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25698.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25692,G__25693) : hoplon.core.div.call(null,G__25692,G__25693));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25679,G__25680,G__25681,G__25682) : hoplon.core.div.call(null,G__25679,G__25680,G__25681,G__25682));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25701_SHARP_){
return (p1__25701_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25702 = pages.contact.dv_map();
var G__25703 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you are interested in working with us, let's talk."], 0)),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We prefer to meet in person before committing to anything new.",(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"Both of us love to ride our bikes around Melbourne.",(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"If you are within 10km of the CBD we will come to you!"], 0)),contact.hoplon.details(),pages.work_with_us.link()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25702,G__25703) : hoplon.core.div.call(null,G__25702,G__25703));
});
