// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24265 = cljs.core.cst$kw$css;
var G__24266 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24265,G__24266) : hoplon.core.td.call(null,G__24265,G__24266));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24269 = layout.middle_right.spacer_td();
var G__24270 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24269,G__24270) : hoplon.core.tr.call(null,G__24269,G__24270));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24274 = layout.middle_right.spacer_td();
var G__24275 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24276 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24274,G__24275,G__24276) : hoplon.core.tr.call(null,G__24274,G__24275,G__24276));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24286 = cljs.core.cst$kw$cellpadding;
var G__24287 = (0);
var G__24288 = cljs.core.cst$kw$cellspacing;
var G__24289 = (0);
var G__24290 = cljs.core.cst$kw$css;
var G__24291 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24292 = layout.middle_right.spacer_tr();
var G__24293 = layout.middle_right.content_tr(children);
var G__24294 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24286,G__24287,G__24288,G__24289,G__24290,G__24291,G__24292,G__24293,G__24294) : hoplon.core.table.call(null,G__24286,G__24287,G__24288,G__24289,G__24290,G__24291,G__24292,G__24293,G__24294));
});
