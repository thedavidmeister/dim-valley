// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__15502 = cljs.core.cst$kw$css;
var G__15503 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__15502,G__15503) : hoplon.core.td.call(null,G__15502,G__15503));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__15506 = layout.middle_right.spacer_td();
var G__15507 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__15506,G__15507) : hoplon.core.tr.call(null,G__15506,G__15507));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__15511 = layout.middle_right.spacer_td();
var G__15512 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__15513 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__15511,G__15512,G__15513) : hoplon.core.tr.call(null,G__15511,G__15512,G__15513));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__15523 = cljs.core.cst$kw$cellpadding;
var G__15524 = (0);
var G__15525 = cljs.core.cst$kw$cellspacing;
var G__15526 = (0);
var G__15527 = cljs.core.cst$kw$css;
var G__15528 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__15529 = layout.middle_right.spacer_tr();
var G__15530 = layout.middle_right.content_tr(children);
var G__15531 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__15523,G__15524,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531) : hoplon.core.table.call(null,G__15523,G__15524,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531));
});
