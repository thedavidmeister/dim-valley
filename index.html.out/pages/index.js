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
goog.require('pages.privacy');
goog.require('styles.core');
goog.require('mapbox.dom');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25832 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__25833 = styles.core.style();
var G__25834 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__25832,G__25833,G__25834) : hoplon.core.head.call(null,G__25832,G__25833,G__25834));
})(),(function (){var G__25835 = cljs.core.cst$kw$css;
var G__25836 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__25837 = (function (){var items = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"privacy",cljs.core.cst$kw$f,pages.privacy.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$privacy], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"work with us",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__25835,G__25836){
return (function (item__18522__auto__){
var vec__25838 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25841 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__25835,G__25836){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__25835,G__25836))
);
return (fexpr__25841.cljs$core$IFn$_invoke$arity$1 ? fexpr__25841.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25841.call(null,item__18522__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25838,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__25853 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25838,item,items,G__25835,G__25836){
return (function (G__25842,G__25845,G__25844,G__25846,G__25843,G__25848,G__25847){
var G__25854 = (G__25843.cljs$core$IFn$_invoke$arity$3 ? G__25843.cljs$core$IFn$_invoke$arity$3(G__25844,G__25845,G__25846) : G__25843.call(null,G__25844,G__25845,G__25846));
var G__25855 = (function (){var G__25856 = G__25848;
var G__25857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__25847.cljs$core$IFn$_invoke$arity$2 ? G__25847.cljs$core$IFn$_invoke$arity$2(G__25856,G__25857) : G__25847.call(null,G__25856,G__25857));
})();
return (G__25842.cljs$core$IFn$_invoke$arity$2 ? G__25842.cljs$core$IFn$_invoke$arity$2(G__25854,G__25855) : G__25842.call(null,G__25854,G__25855));
});})(vec__25838,item,items,G__25835,G__25836))
);
return (fexpr__25853.cljs$core$IFn$_invoke$arity$7 ? fexpr__25853.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__25853.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),"calc(75vw + 4px)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25858 = (function (){var G__25859 = (function (){var fexpr__25862 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25838,item,items,G__25835,G__25836){
return (function (G__25860){
var fexpr__25863 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__25860);
return (fexpr__25863.cljs$core$IFn$_invoke$arity$0 ? fexpr__25863.cljs$core$IFn$_invoke$arity$0() : fexpr__25863.call(null));
});})(vec__25838,item,items,G__25835,G__25836))
);
return (fexpr__25862.cljs$core$IFn$_invoke$arity$1 ? fexpr__25862.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25862.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25859) : hoplon.core.div.call(null,G__25859));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25858) : hoplon.core.div.call(null,G__25858));
})()], 0))], 0));
});})(items,G__25835,G__25836))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__25835,G__25836,G__25837) : hoplon.core.body.call(null,G__25835,G__25836,G__25837));
})()], 0));
