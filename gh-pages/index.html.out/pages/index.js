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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25735 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__25736 = styles.core.style();
var G__25737 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__25735,G__25736,G__25737) : hoplon.core.head.call(null,G__25735,G__25736,G__25737));
})(),(function (){var G__25738 = cljs.core.cst$kw$css;
var G__25739 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__25740 = (function (){var items = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"privacy",cljs.core.cst$kw$f,pages.privacy.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$privacy], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"work with us",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__25738,G__25739){
return (function (item__18517__auto__){
var vec__25741 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25744 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__25738,G__25739){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__25738,G__25739))
);
return (fexpr__25744.cljs$core$IFn$_invoke$arity$1 ? fexpr__25744.cljs$core$IFn$_invoke$arity$1(item__18517__auto__) : fexpr__25744.call(null,item__18517__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25741,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__25756 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25741,item,items,G__25738,G__25739){
return (function (G__25745,G__25748,G__25747,G__25749,G__25746,G__25751,G__25750){
var G__25757 = (G__25746.cljs$core$IFn$_invoke$arity$3 ? G__25746.cljs$core$IFn$_invoke$arity$3(G__25747,G__25748,G__25749) : G__25746.call(null,G__25747,G__25748,G__25749));
var G__25758 = (function (){var G__25759 = G__25751;
var G__25760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__25750.cljs$core$IFn$_invoke$arity$2 ? G__25750.cljs$core$IFn$_invoke$arity$2(G__25759,G__25760) : G__25750.call(null,G__25759,G__25760));
})();
return (G__25745.cljs$core$IFn$_invoke$arity$2 ? G__25745.cljs$core$IFn$_invoke$arity$2(G__25757,G__25758) : G__25745.call(null,G__25757,G__25758));
});})(vec__25741,item,items,G__25738,G__25739))
);
return (fexpr__25756.cljs$core$IFn$_invoke$arity$7 ? fexpr__25756.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__25756.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),"calc(75vw + 4px)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25761 = (function (){var G__25762 = (function (){var fexpr__25765 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25741,item,items,G__25738,G__25739){
return (function (G__25763){
var fexpr__25766 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__25763);
return (fexpr__25766.cljs$core$IFn$_invoke$arity$0 ? fexpr__25766.cljs$core$IFn$_invoke$arity$0() : fexpr__25766.call(null));
});})(vec__25741,item,items,G__25738,G__25739))
);
return (fexpr__25765.cljs$core$IFn$_invoke$arity$1 ? fexpr__25765.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25765.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25762) : hoplon.core.div.call(null,G__25762));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25761) : hoplon.core.div.call(null,G__25761));
})()], 0))], 0));
});})(items,G__25738,G__25739))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__25738,G__25739,G__25740) : hoplon.core.body.call(null,G__25738,G__25739,G__25740));
})()], 0));
