// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24400 = cljs.core.cst$kw$css;
var G__24401 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24400,G__24401) : hoplon.core.td.call(null,G__24400,G__24401));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24404 = layout.middle_right.spacer_td();
var G__24405 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24404,G__24405) : hoplon.core.tr.call(null,G__24404,G__24405));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24409 = layout.middle_right.spacer_td();
var G__24410 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24411 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24409,G__24410,G__24411) : hoplon.core.tr.call(null,G__24409,G__24410,G__24411));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24421 = cljs.core.cst$kw$cellpadding;
var G__24422 = (0);
var G__24423 = cljs.core.cst$kw$cellspacing;
var G__24424 = (0);
var G__24425 = cljs.core.cst$kw$css;
var G__24426 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24427 = layout.middle_right.spacer_tr();
var G__24428 = layout.middle_right.content_tr(children);
var G__24429 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24421,G__24422,G__24423,G__24424,G__24425,G__24426,G__24427,G__24428,G__24429) : hoplon.core.table.call(null,G__24421,G__24422,G__24423,G__24424,G__24425,G__24426,G__24427,G__24428,G__24429));
});
