// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24625 = cljs.core.cst$kw$css;
var G__24626 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24625,G__24626) : hoplon.core.td.call(null,G__24625,G__24626));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24629 = layout.middle_right.spacer_td();
var G__24630 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24629,G__24630) : hoplon.core.tr.call(null,G__24629,G__24630));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24634 = layout.middle_right.spacer_td();
var G__24635 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24636 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24634,G__24635,G__24636) : hoplon.core.tr.call(null,G__24634,G__24635,G__24636));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24646 = cljs.core.cst$kw$cellpadding;
var G__24647 = (0);
var G__24648 = cljs.core.cst$kw$cellspacing;
var G__24649 = (0);
var G__24650 = cljs.core.cst$kw$css;
var G__24651 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24652 = layout.middle_right.spacer_tr();
var G__24653 = layout.middle_right.content_tr(children);
var G__24654 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24646,G__24647,G__24648,G__24649,G__24650,G__24651,G__24652,G__24653,G__24654) : hoplon.core.table.call(null,G__24646,G__24647,G__24648,G__24649,G__24650,G__24651,G__24652,G__24653,G__24654));
});
