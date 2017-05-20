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
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__21405 = wheel.font.google.hoplon.link(fonts.config.fonts);
var G__21406 = styles.core.style();
var G__21407 = mapbox.dom.stylesheet();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$3(G__21405,G__21406,G__21407) : hoplon.core.head.call(null,G__21405,G__21406,G__21407));
})(),(function (){var G__21408 = cljs.core.cst$kw$css;
var G__21409 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("linear-gradient(to left, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",colours.ui_gradients.stops.cljs$core$IFn$_invoke$arity$0())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$min_DASH_height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$overflow_DASH_x,"hidden"], null);
var G__21410 = (function (){var routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"dim valley pty. ltd.",cljs.core.cst$kw$f,pages.dim_valley.content], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"legal",cljs.core.cst$kw$f,pages.legal.content], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"octocat.jpg",cljs.core.cst$kw$f,pages.github.content], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"dave.png",cljs.core.cst$kw$f,pages.dave.content], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,"milly.png",cljs.core.cst$kw$f,pages.milly.content], null)], null);
var current_route = (function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var route_in_routes_QMARK_ = ((function (c,routes,G__21408,G__21409){
return (function (r,rs){
return !((cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (c,routes,G__21408,G__21409){
return (function (p1__21403_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,p1__21403_SHARP_);
});})(c,routes,G__21408,G__21409))
,rs)) == null));
});})(c,routes,G__21408,G__21409))
;
var c__16747__auto__ = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,route_in_routes_QMARK_,routes,G__21408,G__21409){
return (function (G__21414,G__21411,G__21413,G__21412){
if(cljs.core.truth_((G__21411.cljs$core$IFn$_invoke$arity$2 ? G__21411.cljs$core$IFn$_invoke$arity$2(G__21412,G__21413) : G__21411.call(null,G__21412,G__21413)))){
return G__21412;
} else {
return (G__21414.cljs$core$IFn$_invoke$arity$1 ? G__21414.cljs$core$IFn$_invoke$arity$1(G__21413) : G__21414.call(null,G__21413));
}
});})(c,route_in_routes_QMARK_,routes,G__21408,G__21409))
).call(null,cljs.core.first,route_in_routes_QMARK_,routes,c);
c__16747__auto__.update = ((function (c__16747__auto__,c,route_in_routes_QMARK_,routes,G__21408,G__21409){
return (function (p1__21404_SHARP_){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__21404_SHARP_) : cljs.core.reset_BANG_.call(null,c,p1__21404_SHARP_));
});})(c__16747__auto__,c,route_in_routes_QMARK_,routes,G__21408,G__21409))
;

return c__16747__auto__;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu(current_route,routes,(200)),layout.middle_right.middle_right(menu.drawers.drawers.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([hoplon.core.loop_tpl_STAR_(routes,((function (routes,current_route,G__21408,G__21409){
return (function (item__17337__auto__){
var vec__21415 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (routes,current_route,G__21408,G__21409){
return (function (route){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null);
});})(routes,current_route,G__21408,G__21409))
).call(null,item__17337__auto__));
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21415,(0),null);
return menu.drawers.drawer.cljs$core$IFn$_invoke$arity$variadic(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__21415,route,routes,current_route,G__21408,G__21409){
return (function (G__21418,G__21420,G__21419){
return (G__21418.cljs$core$IFn$_invoke$arity$2 ? G__21418.cljs$core$IFn$_invoke$arity$2(G__21419,G__21420) : G__21418.call(null,G__21419,G__21420));
});})(vec__21415,route,routes,current_route,G__21408,G__21409))
).call(null,cljs.core._EQ_,current_route,route),"calc(75vw + 4px)",cljs.core.array_seq([layout.content_block.content_outer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__21421 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"cacl(60vw - 4px)"], null)], null);
var G__21422 = (function (){var G__21423 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21421,vec__21415,route,routes,current_route,G__21408,G__21409){
return (function (G__21424){
return cljs.core.cst$kw$f.cljs$core$IFn$_invoke$arity$1(G__21424).call(null);
});})(G__21421,vec__21415,route,routes,current_route,G__21408,G__21409))
).call(null,route);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1(G__21423) : hoplon.core.div.call(null,G__21423));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__21421,G__21422) : hoplon.core.div.call(null,G__21421,G__21422));
})()], 0))], 0));
});})(routes,current_route,G__21408,G__21409))
)], 0)))], null);
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__21408,G__21409,G__21410) : hoplon.core.body.call(null,G__21408,G__21409,G__21410));
})()], 0));
