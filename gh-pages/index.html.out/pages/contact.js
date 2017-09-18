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
var line_length = (function (){var fexpr__25887 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__25886,G__25885){
return (G__25885 / Math.cos((G__25886.cljs$core$IFn$_invoke$arity$1 ? G__25886.cljs$core$IFn$_invoke$arity$1((45)) : G__25886.call(null,(45)))));
}));
return (fexpr__25887.cljs$core$IFn$_invoke$arity$2 ? fexpr__25887.cljs$core$IFn$_invoke$arity$2(wheel.math.geometry.degrees__GT_radians,width) : fexpr__25887.call(null,wheel.math.geometry.degrees__GT_radians,width));
})();
var base_css = (function (){var fexpr__25893 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (line_length){
return (function (G__25888,G__25889,G__25890,G__25891){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,(G__25888.cljs$core$IFn$_invoke$arity$1 ? G__25888.cljs$core$IFn$_invoke$arity$1(G__25889) : G__25888.call(null,G__25889)),cljs.core.cst$kw$height,(function (){var G__25894 = (G__25890 / (6));
return (G__25888.cljs$core$IFn$_invoke$arity$1 ? G__25888.cljs$core$IFn$_invoke$arity$1(G__25894) : G__25888.call(null,G__25894));
})(),cljs.core.cst$kw$background_DASH_color,G__25891,cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$left,(0)], null);
});})(line_length))
);
return (fexpr__25893.cljs$core$IFn$_invoke$arity$4 ? fexpr__25893.cljs$core$IFn$_invoke$arity$4(unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour) : fexpr__25893.call(null,unit.conversion.n__GT_px,line_length,width,colours.ui_gradients.base_colour));
})();
var G__25895 = cljs.core.cst$kw$css;
var G__25896 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null);
var G__25897 = (function (){var G__25899 = cljs.core.cst$kw$css;
var G__25900 = (function (){var fexpr__25905 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25899,G__25895,G__25896,line_length,base_css){
return (function (G__25902,G__25901){
var G__25906 = G__25902;
var G__25907 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(45deg)"], null);
return (G__25901.cljs$core$IFn$_invoke$arity$2 ? G__25901.cljs$core$IFn$_invoke$arity$2(G__25906,G__25907) : G__25901.call(null,G__25906,G__25907));
});})(G__25899,G__25895,G__25896,line_length,base_css))
);
return (fexpr__25905.cljs$core$IFn$_invoke$arity$2 ? fexpr__25905.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25905.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25899,G__25900) : hoplon.core.div.call(null,G__25899,G__25900));
})();
var G__25898 = (function (){var G__25908 = cljs.core.cst$kw$css;
var G__25909 = (function (){var fexpr__25914 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__25908,G__25895,G__25896,G__25897,line_length,base_css){
return (function (G__25911,G__25910){
var G__25915 = G__25911;
var G__25916 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(-45deg)"], null);
return (G__25910.cljs$core$IFn$_invoke$arity$2 ? G__25910.cljs$core$IFn$_invoke$arity$2(G__25915,G__25916) : G__25910.call(null,G__25915,G__25916));
});})(G__25908,G__25895,G__25896,G__25897,line_length,base_css))
);
return (fexpr__25914.cljs$core$IFn$_invoke$arity$2 ? fexpr__25914.cljs$core$IFn$_invoke$arity$2(base_css,cljs.core.merge) : fexpr__25914.call(null,base_css,cljs.core.merge));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25908,G__25909) : hoplon.core.div.call(null,G__25908,G__25909));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25895,G__25896,G__25897,G__25898) : hoplon.core.div.call(null,G__25895,G__25896,G__25897,G__25898));
});
pages.contact.dv_map = (function pages$contact$dv_map(){
var ll = mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(144.995415,-37.826018);
var marker_width = (20);
var options = new cljs.core.PersistentArrayMap(null, 5, ["center",ll,"style","mapbox://styles/thedavidmeister/cj2ll9ozt00282rqny3ozjigd","zoom",(13),"interactive",false,"logoPosition","bottom-right"], null);
var el = mapbox.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null),cljs.core.cst$kw$options,options,cljs.core.cst$kw$marker,pages.contact.dv_marker(marker_width),cljs.core.cst$kw$marker_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,((function (ll,marker_width,options){
return (function (p1__25917_SHARP_){
return (p1__25917_SHARP_ / (2));
});})(ll,marker_width,options))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marker_width,marker_width], null))], null)], 0));
return el;
});
pages.contact.content = (function pages$contact$content(){
var G__25918 = pages.contact.dv_map();
var G__25919 = layout.content_block.content_inner.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Let's work together.") : hoplon.core.h1.call(null,"Let's work together.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("If you are interested in working with us, let's talk.") : hoplon.core.p.call(null,"If you are interested in working with us, let's talk.")),(function (){var G__25920 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Milly: ") : hoplon.core.strong.call(null,"Milly: "));
var G__25921 = wheel.phone.hoplon.phone("0403 858 811");
var G__25922 = " | meeli.jane@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__25920,G__25921,G__25922) : hoplon.core.p.call(null,G__25920,G__25921,G__25922));
})(),(function (){var G__25923 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("Dave: ") : hoplon.core.strong.call(null,"Dave: "));
var G__25924 = wheel.phone.hoplon.phone("0434 016 790");
var G__25925 = " | thedavidmeister@gmail.com";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__25923,G__25924,G__25925) : hoplon.core.p.call(null,G__25923,G__25924,G__25925));
})(),(function (){var G__25926 = (hoplon.core.strong.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.strong.cljs$core$IFn$_invoke$arity$1("We are based at ") : hoplon.core.strong.call(null,"We are based at "));
var G__25927 = wheel.address.hoplon.simple(address.config.address);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__25926,G__25927) : hoplon.core.p.call(null,G__25926,G__25927));
})(),layout.spacer.vertical_spacer.cljs$core$IFn$_invoke$arity$0()], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25918,G__25919) : hoplon.core.div.call(null,G__25918,G__25919));
});
