// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24258 = cljs.core.cst$kw$css;
var G__24259 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24258,G__24259) : hoplon.core.td.call(null,G__24258,G__24259));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24262 = layout.middle_right.spacer_td();
var G__24263 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24262,G__24263) : hoplon.core.tr.call(null,G__24262,G__24263));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24267 = layout.middle_right.spacer_td();
var G__24268 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24269 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24267,G__24268,G__24269) : hoplon.core.tr.call(null,G__24267,G__24268,G__24269));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24279 = cljs.core.cst$kw$cellpadding;
var G__24280 = (0);
var G__24281 = cljs.core.cst$kw$cellspacing;
var G__24282 = (0);
var G__24283 = cljs.core.cst$kw$css;
var G__24284 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24285 = layout.middle_right.spacer_tr();
var G__24286 = layout.middle_right.content_tr(children);
var G__24287 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24279,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287) : hoplon.core.table.call(null,G__24279,G__24280,G__24281,G__24282,G__24283,G__24284,G__24285,G__24286,G__24287));
});
