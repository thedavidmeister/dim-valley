// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('colours.ui_gradients');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('fonts.config');
goog.require('wheel.font.google.hoplon');
goog.require('layout.config');
goog.require('layout.spacer');
goog.require('layout.middle_right');
goog.require('menu.flower');
goog.require('menu.drawers');
goog.require('pages.milly');
goog.require('pages.dim_valley');
goog.require('pages.legal');
goog.require('pages.contact');
goog.require('pages.work_with_us');
goog.require('pages.github');
goog.require('pages.dave');
goog.require('styles.core');
goog.require('mapbox.dom');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__26013 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__26014 = styles.core.style();
var G__26015 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__26013,G__26014,G__26015) : hoplon.core.head.call(null,G__26013,G__26014,G__26015));
})(),(function (){var G__26016 = cljs.core.cst$kw$css;
var G__26017 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__26018 = (function (){var items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"work with us",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__26016,G__26017){
return (function (item__18913__auto__){
var vec__26019 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__26022 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__26016,G__26017){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__26016,G__26017))
);
return (fexpr__26022.cljs$core$IFn$_invoke$arity$1 ? fexpr__26022.cljs$core$IFn$_invoke$arity$1(item__18913__auto__) : fexpr__26022.call(null,item__18913__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26019,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__26034 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__26019,item,items,G__26016,G__26017){
return (function (G__26023,G__26026,G__26025,G__26027,G__26024,G__26029,G__26028){
var G__26035 = (G__26024.cljs$core$IFn$_invoke$arity$3 ? G__26024.cljs$core$IFn$_invoke$arity$3(G__26025,G__26026,G__26027) : G__26024.call(null,G__26025,G__26026,G__26027));
var G__26036 = (function (){var G__26037 = G__26029;
var G__26038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__26028.cljs$core$IFn$_invoke$arity$2 ? G__26028.cljs$core$IFn$_invoke$arity$2(G__26037,G__26038) : G__26028.call(null,G__26037,G__26038));
})();
return (G__26023.cljs$core$IFn$_invoke$arity$2 ? G__26023.cljs$core$IFn$_invoke$arity$2(G__26035,G__26036) : G__26023.call(null,G__26035,G__26036));
});})(vec__26019,item,items,G__26016,G__26017))
);
return (fexpr__26034.cljs$core$IFn$_invoke$arity$7 ? fexpr__26034.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__26034.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),"calc(75vw + 4px)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__26039 = (function (){var G__26040 = (function (){var fexpr__26043 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__26019,item,items,G__26016,G__26017){
return (function (G__26041){
var fexpr__26044 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__26041);
return (fexpr__26044.cljs$core$IFn$_invoke$arity$0 ? fexpr__26044.cljs$core$IFn$_invoke$arity$0() : fexpr__26044.call(null));
});})(vec__26019,item,items,G__26016,G__26017))
);
return (fexpr__26043.cljs$core$IFn$_invoke$arity$1 ? fexpr__26043.cljs$core$IFn$_invoke$arity$1(item) : fexpr__26043.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__26040) : hoplon.core.div.call(null,G__26040));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__26039) : hoplon.core.div.call(null,G__26039));
})()], 0))], 0));
});})(items,G__26016,G__26017))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__26016,G__26017,G__26018) : hoplon.core.body.call(null,G__26016,G__26017,G__26018));
})()], 0));
