// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
goog.require('pages.github');
goog.require('pages.dave');
goog.require('styles.core');
goog.require('mapbox.dom');
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24645 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__24646 = styles.core.style();
var G__24647 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__24645,G__24646,G__24647) : hoplon.core.head.call(null,G__24645,G__24646,G__24647));
})(),(function (){var G__24648 = cljs.core.cst$kw$css;
var G__24649 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("linear-gradient(to left, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden"], null);
var G__24650 = (function (){var items = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"dim valley pty. ltd.",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"octocat.jpg",cljs.core.cst$kw$f,pages.github.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$github], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([hoplon.core.loop_tpl_STAR_(items,((function (items,G__24648,G__24649){
return (function (item__14903__auto__){
var vec__24651 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__24648,G__24649){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__24648,G__24649))
).call(null,item__14903__auto__));
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24651,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24651,item,items,G__24648,G__24649){
return (function (G__24654,G__24657,G__24656,G__24658,G__24655,G__24660,G__24659){
var G__24661 = (G__24655.cljs$core$IFn$_invoke$arity$3 ? G__24655.cljs$core$IFn$_invoke$arity$3(G__24656,G__24657,G__24658) : G__24655.call(null,G__24656,G__24657,G__24658));
var G__24662 = (function (){var G__24663 = G__24660;
var G__24664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__24659.cljs$core$IFn$_invoke$arity$2 ? G__24659.cljs$core$IFn$_invoke$arity$2(G__24663,G__24664) : G__24659.call(null,G__24663,G__24664));
})();
return (G__24654.cljs$core$IFn$_invoke$arity$2 ? G__24654.cljs$core$IFn$_invoke$arity$2(G__24661,G__24662) : G__24654.call(null,G__24661,G__24662));
});})(vec__24651,item,items,G__24648,G__24649))
).call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys),"calc(75vw + 4px)",cljs.core.array_seq([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24665 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"cacl(60vw - 4px)"], null)], null);
var G__24666 = (function (){var G__24667 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24665,vec__24651,item,items,G__24648,G__24649){
return (function (G__24668){
return cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__24668).call(null);
});})(G__24665,vec__24651,item,items,G__24648,G__24649))
).call(null,item);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24667) : hoplon.core.div.call(null,G__24667));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24665,G__24666) : hoplon.core.div.call(null,G__24665,G__24666));
})()], 0))], 0));
});})(items,G__24648,G__24649))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__24648,G__24649,G__24650) : hoplon.core.body.call(null,G__24648,G__24649,G__24650));
})()], 0));
