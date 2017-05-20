// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__21007 = cljs.core.cst$kw$css;
var G__21008 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__21007,G__21008) : hoplon.core.td.call(null,G__21007,G__21008));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__21011 = layout.middle_right.spacer_td();
var G__21012 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__21011,G__21012) : hoplon.core.tr.call(null,G__21011,G__21012));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__21015 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
var G__21016 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__21015,G__21016) : hoplon.core.tr.call(null,G__21015,G__21016));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__21026 = cljs.core.cst$kw$cellpadding;
var G__21027 = (0);
var G__21028 = cljs.core.cst$kw$cellspacing;
var G__21029 = (0);
var G__21030 = cljs.core.cst$kw$css;
var G__21031 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__21032 = layout.middle_right.spacer_tr();
var G__21033 = layout.middle_right.content_tr(children);
var G__21034 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__21026,G__21027,G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034) : hoplon.core.table.call(null,G__21026,G__21027,G__21028,G__21029,G__21030,G__21031,G__21032,G__21033,G__21034));
});
