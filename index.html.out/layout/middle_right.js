// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24244 = cljs.core.cst$kw$css;
var G__24245 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24244,G__24245) : hoplon.core.td.call(null,G__24244,G__24245));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24248 = layout.middle_right.spacer_td();
var G__24249 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24248,G__24249) : hoplon.core.tr.call(null,G__24248,G__24249));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24253 = layout.middle_right.spacer_td();
var G__24254 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24255 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24253,G__24254,G__24255) : hoplon.core.tr.call(null,G__24253,G__24254,G__24255));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24265 = cljs.core.cst$kw$cellpadding;
var G__24266 = (0);
var G__24267 = cljs.core.cst$kw$cellspacing;
var G__24268 = (0);
var G__24269 = cljs.core.cst$kw$css;
var G__24270 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24271 = layout.middle_right.spacer_tr();
var G__24272 = layout.middle_right.content_tr(children);
var G__24273 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24265,G__24266,G__24267,G__24268,G__24269,G__24270,G__24271,G__24272,G__24273) : hoplon.core.table.call(null,G__24265,G__24266,G__24267,G__24268,G__24269,G__24270,G__24271,G__24272,G__24273));
});
