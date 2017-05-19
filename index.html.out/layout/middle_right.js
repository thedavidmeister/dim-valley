// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__20980 = cljs.core.cst$kw$css;
var G__20981 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__20980,G__20981) : hoplon.core.td.call(null,G__20980,G__20981));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__20984 = layout.middle_right.spacer_td();
var G__20985 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__20984,G__20985) : hoplon.core.tr.call(null,G__20984,G__20985));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__20988 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
var G__20989 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__20988,G__20989) : hoplon.core.tr.call(null,G__20988,G__20989));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__20999 = cljs.core.cst$kw$cellpadding;
var G__21000 = (0);
var G__21001 = cljs.core.cst$kw$cellspacing;
var G__21002 = (0);
var G__21003 = cljs.core.cst$kw$css;
var G__21004 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__21005 = layout.middle_right.spacer_tr();
var G__21006 = layout.middle_right.content_tr(children);
var G__21007 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__20999,G__21000,G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007) : hoplon.core.table.call(null,G__20999,G__21000,G__21001,G__21002,G__21003,G__21004,G__21005,G__21006,G__21007));
});
