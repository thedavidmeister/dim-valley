// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24237 = cljs.core.cst$kw$css;
var G__24238 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24237,G__24238) : hoplon.core.td.call(null,G__24237,G__24238));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24241 = layout.middle_right.spacer_td();
var G__24242 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24241,G__24242) : hoplon.core.tr.call(null,G__24241,G__24242));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24246 = layout.middle_right.spacer_td();
var G__24247 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24248 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24246,G__24247,G__24248) : hoplon.core.tr.call(null,G__24246,G__24247,G__24248));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24258 = cljs.core.cst$kw$cellpadding;
var G__24259 = (0);
var G__24260 = cljs.core.cst$kw$cellspacing;
var G__24261 = (0);
var G__24262 = cljs.core.cst$kw$css;
var G__24263 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24264 = layout.middle_right.spacer_tr();
var G__24265 = layout.middle_right.content_tr(children);
var G__24266 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24258,G__24259,G__24260,G__24261,G__24262,G__24263,G__24264,G__24265,G__24266) : hoplon.core.table.call(null,G__24258,G__24259,G__24260,G__24261,G__24262,G__24263,G__24264,G__24265,G__24266));
});
