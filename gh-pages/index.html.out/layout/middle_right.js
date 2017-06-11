// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24319 = cljs.core.cst$kw$css;
var G__24320 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24319,G__24320) : hoplon.core.td.call(null,G__24319,G__24320));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24323 = layout.middle_right.spacer_td();
var G__24324 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24323,G__24324) : hoplon.core.tr.call(null,G__24323,G__24324));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24327 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
var G__24328 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24327,G__24328) : hoplon.core.tr.call(null,G__24327,G__24328));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24338 = cljs.core.cst$kw$cellpadding;
var G__24339 = (0);
var G__24340 = cljs.core.cst$kw$cellspacing;
var G__24341 = (0);
var G__24342 = cljs.core.cst$kw$css;
var G__24343 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24344 = layout.middle_right.spacer_tr();
var G__24345 = layout.middle_right.content_tr(children);
var G__24346 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24338,G__24339,G__24340,G__24341,G__24342,G__24343,G__24344,G__24345,G__24346) : hoplon.core.table.call(null,G__24338,G__24339,G__24340,G__24341,G__24342,G__24343,G__24344,G__24345,G__24346));
});
