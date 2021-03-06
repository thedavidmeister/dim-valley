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
var line_length = (function (){var fexpr__25685 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25684,G__25683){
return (G__25683 / Math.cos((G__25684.cljs$core$IFn$_invoke$arity$1 ? G__25684.cljs$core$IFn$_invoke$arity$1((45)) : G__25684.call(null,(45)))));
}));
return (fexpr__25685.cljs$core$IFn$_invoke$arity$2 ? fexpr__25685.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25685.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25691 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25686,G__25687,G__25688,G__25689){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25686.cljs$core$IFn$_invoke$arity$1 ? G__25686.cljs$core$IFn$_invoke$arity$1(G__25687) : G__25686.call(null,G__25687)),cljs.core.cst$kw$height,(function (){var G__25692 = (G__25688 / (6));
return (G__25686.cljs$core$IFn$_invoke$arity$1 ? G__25686.cljs$core$IFn$_invoke$arity$1(G__25692) : G__25686.call(null,G__25692));
})(),cljs.core.cst$kw$background_DASH_color,G__25689,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25691.cljs$core$IFn$_invoke$arity$4 ? fexpr__25691.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25691.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25693 = cljs.core.cst$kw$css;
var G__25694 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25695 = (function (){var G__25697 = cljs.core.cst$kw$css;
var G__25698 = (function (){var fexpr__25703 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25697,G__25693,G__25694,line_length,base_css){
return (function (G__25700,G__25699){
var G__25704 = G__25700;
var G__25705 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25699.cljs$core$IFn$_invoke$arity$2 ? G__25699.cljs$core$IFn$_invoke$arity$2(G__25704,G__25705) : G__25699.call(null,G__25704,G__25705));
});})(G__25697,G__25693,G__25694,line_length,base_css))
);
return (fexpr__25703.cljs$core$IFn$_invoke$arity$2 ? fexpr__25703.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25703.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25697,G__25698) : hoplon.core.div.call(null,G__25697,G__25698));
})();
var G__25696 = (function (){var G__25706 = cljs.core.cst$kw$css;
var G__25707 = (function (){var fexpr__25712 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25706,G__25693,G__25694,G__25695,line_length,base_css){
return (function (G__25709,G__25708){
var G__25713 = G__25709;
var G__25714 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25708.cljs$core$IFn$_invoke$arity$2 ? G__25708.cljs$core$IFn$_invoke$arity$2(G__25713,G__25714) : G__25708.call(null,G__25713,G__25714));
});})(G__25706,G__25693,G__25694,G__25695,line_length,base_css))
);
return (fexpr__25712.cljs$core$IFn$_invoke$arity$2 ? fexpr__25712.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25712.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25706,G__25707) : hoplon.core.div.call(null,G__25706,G__25707));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25693,G__25694,G__25695,G__25696) : hoplon.core.div.call(null,G__25693,G__25694,G__25695,G__25696));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25715_SHARP_){
return (p1__25715_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25716 = pages.contact.dv_map();
var G__25717 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["If you are interested in working with us, let's talk."], 0)),layout.body_text.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["We prefer to meet in person before committing to anything new.",(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"Both of us love to ride our bikes around Melbourne.",(hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null)),"If you are within 10km of the CBD we will come to you!"], 0)),contact.hoplon.details(),pages.work_with_us.link()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25716,G__25717) : hoplon.core.div.call(null,G__25716,G__25717));
});
