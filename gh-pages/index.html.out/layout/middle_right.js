// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24383 = cljs.core.cst$kw$css;
var G__24384 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24383,G__24384) : hoplon.core.td.call(null,G__24383,G__24384));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24387 = layout.middle_right.spacer_td();
var G__24388 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24387,G__24388) : hoplon.core.tr.call(null,G__24387,G__24388));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24392 = layout.middle_right.spacer_td();
var G__24393 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24394 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24392,G__24393,G__24394) : hoplon.core.tr.call(null,G__24392,G__24393,G__24394));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24404 = cljs.core.cst$kw$cellpadding;
var G__24405 = (0);
var G__24406 = cljs.core.cst$kw$cellspacing;
var G__24407 = (0);
var G__24408 = cljs.core.cst$kw$css;
var G__24409 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24410 = layout.middle_right.spacer_tr();
var G__24411 = layout.middle_right.content_tr(children);
var G__24412 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24404,G__24405,G__24406,G__24407,G__24408,G__24409,G__24410,G__24411,G__24412) : hoplon.core.table.call(null,G__24404,G__24405,G__24406,G__24407,G__24408,G__24409,G__24410,G__24411,G__24412));
});
