// Compiled by ClojureScript 1.9.521 {}
goog.provide('pages.index');
goog.require('cljs.core');
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
hoplon.core.html.call(null,hoplon.core.head.call(null,wheel.font.google.hoplon.link.call(null,fonts.config.fonts),styles.core.style.call(null),mapbox.dom.stylesheet.call(null)),hoplon.core.body.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("linear-gradient(to left, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",colours.ui_gradients.stops.call(null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden"], null),(function (){var routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"dim valley pty. ltd.",new cljs.core.Keyword(null,"f","f",-1597136552),pages.dim_valley.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"legal",new cljs.core.Keyword(null,"f","f",-1597136552),pages.legal.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"octocat.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.github.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"dave.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.dave.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"milly.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.milly.content], null)], null);
var current_route = (function (){var c = javelin.core.cell.call(null,null);
var route_in_routes_QMARK_ = ((function (c,routes){
return (function (r,rs){
return !((cljs.core.first.call(null,cljs.core.filter.call(null,((function (c,routes){
return (function (p1__15140_SHARP_){
return cljs.core._EQ_.call(null,r,p1__15140_SHARP_);
});})(c,routes))
,rs)) == null));
});})(c,routes))
;
var c__9731__auto__ = javelin.core.formula.call(null,((function (c,route_in_routes_QMARK_,routes){
return (function (G__15145,G__15142,G__15144,G__15143){
if(cljs.core.truth_(G__15142.call(null,G__15143,G__15144))){
return G__15143;
} else {
return G__15145.call(null,G__15144);
}
});})(c,route_in_routes_QMARK_,routes))
).call(null,cljs.core.first,route_in_routes_QMARK_,routes,c);
c__9731__auto__.update = ((function (c__9731__auto__,c,route_in_routes_QMARK_,routes){
return (function (p1__15141_SHARP_){
return cljs.core.reset_BANG_.call(null,c,p1__15141_SHARP_);
});})(c__9731__auto__,c,route_in_routes_QMARK_,routes))
;

return c__9731__auto__;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu.call(null,current_route,routes,(200)),layout.middle_right.middle_right.call(null,menu.drawers.drawers.call(null,hoplon.core.loop_tpl_STAR_.call(null,routes,((function (routes,current_route){
return (function (item__10271__auto__){
var vec__15146 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (routes,current_route){
return (function (route){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null);
});})(routes,current_route))
).call(null,item__10271__auto__));
var route = cljs.core.nth.call(null,vec__15146,(0),null);
return menu.drawers.drawer.call(null,javelin.core.formula.call(null,((function (vec__15146,route,routes,current_route){
return (function (G__15149,G__15151,G__15150){
return G__15149.call(null,G__15150,G__15151);
});})(vec__15146,route,routes,current_route))
).call(null,cljs.core._EQ_,current_route,route),"calc(75vw + 4px)",layout.content_block.content_outer.call(null,hoplon.core.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"cacl(60vw - 4px)"], null)], null),hoplon.core.div.call(null,javelin.core.formula.call(null,((function (vec__15146,route,routes,current_route){
return (function (G__15152){
return new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__15152).call(null);
});})(vec__15146,route,routes,current_route))
).call(null,route)))));
});})(routes,current_route))
)))], null);
})()));

//# sourceMappingURL=index.js.map