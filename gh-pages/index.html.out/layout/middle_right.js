// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24592 = cljs.core.cst$kw$css;
var G__24593 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24592,G__24593) : hoplon.core.td.call(null,G__24592,G__24593));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24596 = layout.middle_right.spacer_td();
var G__24597 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24596,G__24597) : hoplon.core.tr.call(null,G__24596,G__24597));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24601 = layout.middle_right.spacer_td();
var G__24602 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24603 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24601,G__24602,G__24603) : hoplon.core.tr.call(null,G__24601,G__24602,G__24603));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24613 = cljs.core.cst$kw$cellpadding;
var G__24614 = (0);
var G__24615 = cljs.core.cst$kw$cellspacing;
var G__24616 = (0);
var G__24617 = cljs.core.cst$kw$css;
var G__24618 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24619 = layout.middle_right.spacer_tr();
var G__24620 = layout.middle_right.content_tr(children);
var G__24621 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24613,G__24614,G__24615,G__24616,G__24617,G__24618,G__24619,G__24620,G__24621) : hoplon.core.table.call(null,G__24613,G__24614,G__24615,G__24616,G__24617,G__24618,G__24619,G__24620,G__24621));
});
