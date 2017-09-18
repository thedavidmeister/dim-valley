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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25617 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__25618 = styles.core.style();
var G__25619 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__25617,G__25618,G__25619) : hoplon.core.head.call(null,G__25617,G__25618,G__25619));
})(),(function (){var G__25620 = cljs.core.cst$kw$css;
var G__25621 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$background,["linear-gradient(135deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),")"].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden",cljs.core.cst$kw$background_DASH_attachment,"fixed"], null);
var G__25622 = (function (){var items = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"about",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$about], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"contact",cljs.core.cst$kw$f,pages.contact.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"work with us",cljs.core.cst$kw$f,pages.work_with_us.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$work_DASH_with_DASH_us], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hoplon.core.loop_tpl_STAR_(items,((function (items,G__25620,G__25621){
return (function (item__18517__auto__){
var vec__25623 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__25626 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__25620,G__25621){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__25620,G__25621))
);
return (fexpr__25626.cljs$core$IFn$_invoke$arity$1 ? fexpr__25626.cljs$core$IFn$_invoke$arity$1(item__18517__auto__) : fexpr__25626.call(null,item__18517__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25623,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic((function (){var fexpr__25638 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25623,item,items,G__25620,G__25621){
return (function (G__25627,G__25630,G__25629,G__25631,G__25628,G__25633,G__25632){
var G__25639 = (G__25628.cljs$core$IFn$_invoke$arity$3 ? G__25628.cljs$core$IFn$_invoke$arity$3(G__25629,G__25630,G__25631) : G__25628.call(null,G__25629,G__25630,G__25631));
var G__25640 = (function (){var G__25641 = G__25633;
var G__25642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__25632.cljs$core$IFn$_invoke$arity$2 ? G__25632.cljs$core$IFn$_invoke$arity$2(G__25641,G__25642) : G__25632.call(null,G__25641,G__25642));
})();
return (G__25627.cljs$core$IFn$_invoke$arity$2 ? G__25627.cljs$core$IFn$_invoke$arity$2(G__25639,G__25640) : G__25627.call(null,G__25639,G__25640));
});})(vec__25623,item,items,G__25620,G__25621))
);
return (fexpr__25638.cljs$core$IFn$_invoke$arity$7 ? fexpr__25638.cljs$core$IFn$_invoke$arity$7(cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys) : fexpr__25638.call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys));
})(),"calc(75vw + 4px)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25643 = (function (){var G__25644 = (function (){var fexpr__25647 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__25623,item,items,G__25620,G__25621){
return (function (G__25645){
var fexpr__25648 = cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__25645);
return (fexpr__25648.cljs$core$IFn$_invoke$arity$0 ? fexpr__25648.cljs$core$IFn$_invoke$arity$0() : fexpr__25648.call(null));
});})(vec__25623,item,items,G__25620,G__25621))
);
return (fexpr__25647.cljs$core$IFn$_invoke$arity$1 ? fexpr__25647.cljs$core$IFn$_invoke$arity$1(item) : fexpr__25647.call(null,item));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25644) : hoplon.core.div.call(null,G__25644));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__25643) : hoplon.core.div.call(null,G__25643));
})()], 0))], 0));
});})(items,G__25620,G__25621))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__25620,G__25621,G__25622) : hoplon.core.body.call(null,G__25620,G__25621,G__25622));
})()], 0));
