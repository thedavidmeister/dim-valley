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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25849 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__25850 = styles.core.style();
var G__25851 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__25849,G__25850,G__25851) : hoplon.core.head.call(null,G__25849,G__25850,G__25851));
})(),(function (){var G__25852 = cljs.core.cst$kw$css;
var G__25853 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__25854 = (function (){var items = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"privacy",cljs.core.cst$kw$f,pages.privacy.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$privacy], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"rates",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(150)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__25852,G__25853){
return (function (item__18520__auto__){
var vec__25855 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25858 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__25852,G__25853){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__25852,G__25853))
);
return (fexpr__25858.cljs$core$IFn$_invoke$arity$1 ? fexpr__25858.cljs$core$IFn$_invoke$arity$1(item__18520__auto__) : fexpr__25858.call(null,item__18520__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25855,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__25870 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25855,item,items,G__25852,G__25853){
return (function (G__25859,G__25862,G__25861,G__25863,G__25860,G__25865,G__25864){
var G__25871 = (G__25860.cljs$core$IFn$_invoke$arity$3 ? G__25860.cljs$core$IFn$_invoke$arity$3(G__25861,G__25862,G__25863) : G__25860.call(null,G__25861,G__25862,G__25863));
var G__25872 = (function (){var G__25873 = G__25865;
var G__25874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__25864.cljs$core$IFn$_invoke$arity$2 ? G__25864.cljs$core$IFn$_invoke$arity$2(G__25873,G__25874) : G__25864.call(null,G__25873,G__25874));
})();
return (G__25859.cljs$core$IFn$_invoke$arity$2 ? G__25859.cljs$core$IFn$_invoke$arity$2(G__25871,G__25872) : G__25859.call(null,G__25871,G__25872));
});})(vec__25855,item,items,G__25852,G__25853))
);
return (fexpr__25870.cljs$core$IFn$_invoke$arity$7 ? fexpr__25870.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__25870.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25875 = (function (){var G__25876 = (function (){var fexpr__25879 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25855,item,items,G__25852,G__25853){
return (function (G__25877){
var fexpr__25880 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__25877);
return (fexpr__25880.cljs$core$IFn$_invoke$arity$0 ? fexpr__25880.cljs$core$IFn$_invoke$arity$0() : fexpr__25880.call(null));
});})(vec__25855,item,items,G__25852,G__25853))
);
return (fexpr__25879.cljs$core$IFn$_invoke$arity$1 ? fexpr__25879.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25879.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25876) : hoplon.core.div.call(null,G__25876));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25875) : hoplon.core.div.call(null,G__25875));
})()], 0))], 0));
});})(items,G__25852,G__25853))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__25852,G__25853,G__25854) : hoplon.core.body.call(null,G__25852,G__25853,G__25854));
})()], 0));
