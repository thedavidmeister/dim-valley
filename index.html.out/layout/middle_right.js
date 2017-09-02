// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24429 = cljs.core.cst$kw$css;
var G__24430 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24429,G__24430) : hoplon.core.td.call(null,G__24429,G__24430));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24433 = layout.middle_right.spacer_td();
var G__24434 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24433,G__24434) : hoplon.core.tr.call(null,G__24433,G__24434));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24438 = layout.middle_right.spacer_td();
var G__24439 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24440 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24438,G__24439,G__24440) : hoplon.core.tr.call(null,G__24438,G__24439,G__24440));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24450 = cljs.core.cst$kw$cellpadding;
var G__24451 = (0);
var G__24452 = cljs.core.cst$kw$cellspacing;
var G__24453 = (0);
var G__24454 = cljs.core.cst$kw$css;
var G__24455 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24456 = layout.middle_right.spacer_tr();
var G__24457 = layout.middle_right.content_tr(children);
var G__24458 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24450,G__24451,G__24452,G__24453,G__24454,G__24455,G__24456,G__24457,G__24458) : hoplon.core.table.call(null,G__24450,G__24451,G__24452,G__24453,G__24454,G__24455,G__24456,G__24457,G__24458));
});
