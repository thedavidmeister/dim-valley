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
var line_length = (function (){var fexpr__25557 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25556,G__25555){
return (G__25555 / Math.cos((G__25556.cljs$core$IFn$_invoke$arity$1 ? G__25556.cljs$core$IFn$_invoke$arity$1((45)) : G__25556.call(null,(45)))));
}));
return (fexpr__25557.cljs$core$IFn$_invoke$arity$2 ? fexpr__25557.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25557.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25563 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25558,G__25559,G__25560,G__25561){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25558.cljs$core$IFn$_invoke$arity$1 ? G__25558.cljs$core$IFn$_invoke$arity$1(G__25559) : G__25558.call(null,G__25559)),cljs.core.cst$kw$height,(function (){var G__25564 = (G__25560 / (6));
return (G__25558.cljs$core$IFn$_invoke$arity$1 ? G__25558.cljs$core$IFn$_invoke$arity$1(G__25564) : G__25558.call(null,G__25564));
})(),cljs.core.cst$kw$background_DASH_color,G__25561,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25563.cljs$core$IFn$_invoke$arity$4 ? fexpr__25563.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25563.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25565 = cljs.core.cst$kw$css;
var G__25566 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25567 = (function (){var G__25569 = cljs.core.cst$kw$css;
var G__25570 = (function (){var fexpr__25575 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25569,G__25565,G__25566,line_length,base_css){
return (function (G__25572,G__25571){
var G__25576 = G__25572;
var G__25577 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25571.cljs$core$IFn$_invoke$arity$2 ? G__25571.cljs$core$IFn$_invoke$arity$2(G__25576,G__25577) : G__25571.call(null,G__25576,G__25577));
});})(G__25569,G__25565,G__25566,line_length,base_css))
);
return (fexpr__25575.cljs$core$IFn$_invoke$arity$2 ? fexpr__25575.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25575.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25569,G__25570) : hoplon.core.div.call(null,G__25569,G__25570));
})();
var G__25568 = (function (){var G__25578 = cljs.core.cst$kw$css;
var G__25579 = (function (){var fexpr__25584 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25578,G__25565,G__25566,G__25567,line_length,base_css){
return (function (G__25581,G__25580){
var G__25585 = G__25581;
var G__25586 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25580.cljs$core$IFn$_invoke$arity$2 ? G__25580.cljs$core$IFn$_invoke$arity$2(G__25585,G__25586) : G__25580.call(null,G__25585,G__25586));
});})(G__25578,G__25565,G__25566,G__25567,line_length,base_css))
);
return (fexpr__25584.cljs$core$IFn$_invoke$arity$2 ? fexpr__25584.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25584.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25578,G__25579) : hoplon.core.div.call(null,G__25578,G__25579));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25565,G__25566,G__25567,G__25568) : hoplon.core.div.call(null,G__25565,G__25566,G__25567,G__25568));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25587_SHARP_){
return (p1__25587_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25588 = pages.contact.dv_map();
var G__25589 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),contact.hoplon.details(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25588,G__25589) : hoplon.core.div.call(null,G__25588,G__25589));
});
