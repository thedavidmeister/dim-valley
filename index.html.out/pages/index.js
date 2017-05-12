// Compiled by ClojureScript 1.9.293 {}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('fonts.config');
goog.require('pages.github');
goog.require('menu.flower');
goog.require('javelin.core');
goog.require('pages.dim_valley');
goog.require('fonts.google_fonts');
goog.require('hoplon.jquery');
goog.require('layout.middle_right');
goog.require('pages.dave');
goog.require('hoplon.core');
goog.require('layout.spacer');
goog.require('pages.legal');
goog.require('colours.ui_gradients');
goog.require('layout.config');
goog.require('pages.milly');
goog.require('fonts.hoplon');
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"https://necolas.github.io/normalize.css/latest/normalize.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"type","type",1174270348),"text/css"),fonts.google_fonts.fonts.call(null,fonts.config.fonts),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"app.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"type","type",1174270348),"text/css")),hoplon.core.body.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),[cljs.core.str("linear-gradient(to left, "),cljs.core.str(clojure.string.join.call(null,", ",colours.ui_gradients.stops.call(null))),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.last.call(null,colours.ui_gradients.stops.call(null)),new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null),(function (){var routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"dim valley pty. ltd.",new cljs.core.Keyword(null,"f","f",-1597136552),pages.dim_valley.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"legal",new cljs.core.Keyword(null,"f","f",-1597136552),pages.legal.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"octocat.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.github.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"dave.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.dave.content], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"milly.png",new cljs.core.Keyword(null,"f","f",-1597136552),pages.milly.content], null)], null);
var current_route = (function (){var c = javelin.core.cell.call(null,null);
var route_in_routes_QMARK_ = ((function (c,routes){
return (function (r,rs){
return cljs.core.some_QMARK_.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (c,routes){
return (function (p1__10017_SHARP_){
return cljs.core._EQ_.call(null,r,p1__10017_SHARP_);
});})(c,routes))
,rs)));
});})(c,routes))
;
var c__8225__auto__ = javelin.core.formula.call(null,((function (c,route_in_routes_QMARK_,routes){
return (function (G__10022,G__10019,G__10021,G__10020){
if(cljs.core.truth_(G__10019.call(null,G__10020,G__10021))){
return G__10020;
} else {
return G__10022.call(null,G__10021);
}
});})(c,route_in_routes_QMARK_,routes))
).call(null,cljs.core.first,route_in_routes_QMARK_,routes,c);
c__8225__auto__.update = ((function (c__8225__auto__,c,route_in_routes_QMARK_,routes){
return (function (p1__10018_SHARP_){
return cljs.core.reset_BANG_.call(null,c,p1__10018_SHARP_);
});})(c__8225__auto__,c,route_in_routes_QMARK_,routes))
;

return c__8225__auto__;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [menu.flower.menu.call(null,current_route,routes,(200)),layout.middle_right.middle_right.call(null,hoplon.core.loop_tpl_STAR_.call(null,routes,((function (routes,current_route){
return (function (item__8758__auto__){
var vec__10023 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (routes,current_route){
return (function (route){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null);
});})(routes,current_route))
).call(null,item__8758__auto__));
var route = cljs.core.nth.call(null,vec__10023,(0),null);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),javelin.core.formula.call(null,((function (vec__10023,route,routes,current_route){
return (function (G__10026,G__10028,G__10027){
return G__10026.call(null,G__10027,G__10028);
});})(vec__10023,route,routes,current_route))
).call(null,cljs.core._EQ_,current_route,route),layout.content_block.content_outer.call(null,hoplon.core.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"cacl(60vw - 4px)"], null)], null),hoplon.core.div.call(null,javelin.core.formula.call(null,((function (vec__10023,route,routes,current_route){
return (function (G__10029){
return new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__10029).call(null);
});})(vec__10023,route,routes,current_route))
).call(null,route)))));
});})(routes,current_route))
))], null);
})()));

//# sourceMappingURL=index.js.map