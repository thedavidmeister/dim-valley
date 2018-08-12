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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25846 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__25847 = styles.core.style();
var G__25848 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__25846,G__25847,G__25848) : hoplon.core.head.call(null,G__25846,G__25847,G__25848));
})(),(function (){var G__25849 = cljs.core.cst$kw$css;
var G__25850 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__25851 = (function (){var items = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"privacy",cljs.core.cst$kw$f,pages.privacy.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$privacy], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"rates",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(150)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__25849,G__25850){
return (function (item__18522__auto__){
var vec__25852 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25855 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__25849,G__25850){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__25849,G__25850))
);
return (fexpr__25855.cljs$core$IFn$_invoke$arity$1 ? fexpr__25855.cljs$core$IFn$_invoke$arity$1(item__18522__auto__) : fexpr__25855.call(null,item__18522__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25852,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__25867 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25852,item,items,G__25849,G__25850){
return (function (G__25856,G__25859,G__25858,G__25860,G__25857,G__25862,G__25861){
var G__25868 = (G__25857.cljs$core$IFn$_invoke$arity$3 ? G__25857.cljs$core$IFn$_invoke$arity$3(G__25858,G__25859,G__25860) : G__25857.call(null,G__25858,G__25859,G__25860));
var G__25869 = (function (){var G__25870 = G__25862;
var G__25871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__25861.cljs$core$IFn$_invoke$arity$2 ? G__25861.cljs$core$IFn$_invoke$arity$2(G__25870,G__25871) : G__25861.call(null,G__25870,G__25871));
})();
return (G__25856.cljs$core$IFn$_invoke$arity$2 ? G__25856.cljs$core$IFn$_invoke$arity$2(G__25868,G__25869) : G__25856.call(null,G__25868,G__25869));
});})(vec__25852,item,items,G__25849,G__25850))
);
return (fexpr__25867.cljs$core$IFn$_invoke$arity$7 ? fexpr__25867.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__25867.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25872 = (function (){var G__25873 = (function (){var fexpr__25876 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25852,item,items,G__25849,G__25850){
return (function (G__25874){
var fexpr__25877 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__25874);
return (fexpr__25877.cljs$core$IFn$_invoke$arity$0 ? fexpr__25877.cljs$core$IFn$_invoke$arity$0() : fexpr__25877.call(null));
});})(vec__25852,item,items,G__25849,G__25850))
);
return (fexpr__25876.cljs$core$IFn$_invoke$arity$1 ? fexpr__25876.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25876.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25873) : hoplon.core.div.call(null,G__25873));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25872) : hoplon.core.div.call(null,G__25872));
})()], 0))], 0));
});})(items,G__25849,G__25850))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__25849,G__25850,G__25851) : hoplon.core.body.call(null,G__25849,G__25850,G__25851));
})()], 0));
