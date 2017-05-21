// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24299 = cljs.core.cst$kw$css;
var G__24300 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24299,G__24300) : hoplon.core.td.call(null,G__24299,G__24300));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24303 = layout.middle_right.spacer_td();
var G__24304 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24303,G__24304) : hoplon.core.tr.call(null,G__24303,G__24304));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24307 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
var G__24308 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24307,G__24308) : hoplon.core.tr.call(null,G__24307,G__24308));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24318 = cljs.core.cst$kw$cellpadding;
var G__24319 = (0);
var G__24320 = cljs.core.cst$kw$cellspacing;
var G__24321 = (0);
var G__24322 = cljs.core.cst$kw$css;
var G__24323 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24324 = layout.middle_right.spacer_tr();
var G__24325 = layout.middle_right.content_tr(children);
var G__24326 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24318,G__24319,G__24320,G__24321,G__24322,G__24323,G__24324,G__24325,G__24326) : hoplon.core.table.call(null,G__24318,G__24319,G__24320,G__24321,G__24322,G__24323,G__24324,G__24325,G__24326));
});
