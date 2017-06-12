// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24350 = cljs.core.cst$kw$css;
var G__24351 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24350,G__24351) : hoplon.core.td.call(null,G__24350,G__24351));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24354 = layout.middle_right.spacer_td();
var G__24355 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24354,G__24355) : hoplon.core.tr.call(null,G__24354,G__24355));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24359 = layout.middle_right.spacer_td();
var G__24360 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24361 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24359,G__24360,G__24361) : hoplon.core.tr.call(null,G__24359,G__24360,G__24361));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24371 = cljs.core.cst$kw$cellpadding;
var G__24372 = (0);
var G__24373 = cljs.core.cst$kw$cellspacing;
var G__24374 = (0);
var G__24375 = cljs.core.cst$kw$css;
var G__24376 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24377 = layout.middle_right.spacer_tr();
var G__24378 = layout.middle_right.content_tr(children);
var G__24379 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24371,G__24372,G__24373,G__24374,G__24375,G__24376,G__24377,G__24378,G__24379) : hoplon.core.table.call(null,G__24371,G__24372,G__24373,G__24374,G__24375,G__24376,G__24377,G__24378,G__24379));
});
