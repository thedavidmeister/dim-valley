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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24874 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__24875 = styles.core.style();
var G__24876 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__24874,G__24875,G__24876) : hoplon.core.head.call(null,G__24874,G__24875,G__24876));
})(),(function (){var G__24877 = cljs.core.cst$kw$css;
var G__24878 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("linear-gradient(to left, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden"], null);
var G__24879 = (function (){var items = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"dim valley pty. ltd.",cljs.core.cst$kw$f,pages.dim_valley.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$contact], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$legal], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/octocat.jpg",cljs.core.cst$kw$f,pages.github.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$github], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/dave.png",cljs.core.cst$kw$f,pages.dave.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$dave], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$url,"https://s3-ap-southeast-2.amazonaws.com/dim-valley-public/milly.png",cljs.core.cst$kw$f,pages.milly.content,cljs.core.cst$kw$handler,cljs.core.cst$kw$milly], null)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(items,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([hoplon.core.loop_tpl_STAR_(items,((function (items,G__24877,G__24878){
return (function (item__20491__auto__){
var vec__24880 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (items,G__24877,G__24878){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(items,G__24877,G__24878))
).call(null,item__20491__auto__));
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24880,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24880,item,items,G__24877,G__24878){
return (function (G__24883,G__24886,G__24885,G__24887,G__24884,G__24889,G__24888){
var G__24890 = (G__24884.cljs$core$IFn$_invoke$arity$3 ? G__24884.cljs$core$IFn$_invoke$arity$3(G__24885,G__24886,G__24887) : G__24884.call(null,G__24885,G__24886,G__24887));
var G__24891 = (function (){var G__24892 = G__24889;
var G__24893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handler], null);
return (G__24888.cljs$core$IFn$_invoke$arity$2 ? G__24888.cljs$core$IFn$_invoke$arity$2(G__24892,G__24893) : G__24888.call(null,G__24892,G__24893));
})();
return (G__24883.cljs$core$IFn$_invoke$arity$2 ? G__24883.cljs$core$IFn$_invoke$arity$2(G__24890,G__24891) : G__24883.call(null,G__24890,G__24891));
});})(vec__24880,item,items,G__24877,G__24878))
).call(null,cljs.core._EQ_,route.config.routes,route.state.history,route.config.fallback_handler,wheel.route.core.path__GT_bidi,item,cljs.core.select_keys),"calc(75vw + 4px)",cljs.core.array_seq([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__24894 = (function (){var G__24895 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__24880,item,items,G__24877,G__24878){
return (function (G__24896){
return cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__24896).call(null);
});})(vec__24880,item,items,G__24877,G__24878))
).call(null,item);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24895) : hoplon.core.div.call(null,G__24895));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__24894) : hoplon.core.div.call(null,G__24894));
})()], 0))], 0));
});})(items,G__24877,G__24878))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__24877,G__24878,G__24879) : hoplon.core.body.call(null,G__24877,G__24878,G__24879));
})()], 0));
