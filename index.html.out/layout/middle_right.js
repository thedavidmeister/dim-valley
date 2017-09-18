// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__25507 = cljs.core.cst$kw$css;
var G__25508 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__25507,G__25508) : hoplon.core.td.call(null,G__25507,G__25508));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__25509 = layout.middle_right.spacer_td();
var G__25510 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__25509,G__25510) : hoplon.core.tr.call(null,G__25509,G__25510));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__25511 = layout.middle_right.spacer_td();
var G__25512 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__25513 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__25511,G__25512,G__25513) : hoplon.core.tr.call(null,G__25511,G__25512,G__25513));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__25514 = cljs.core.cst$kw$cellpadding;
var G__25515 = (0);
var G__25516 = cljs.core.cst$kw$cellspacing;
var G__25517 = (0);
var G__25518 = cljs.core.cst$kw$css;
var G__25519 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25520 = layout.middle_right.spacer_tr();
var G__25521 = layout.middle_right.content_tr(children);
var G__25522 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__25514,G__25515,G__25516,G__25517,G__25518,G__25519,G__25520,G__25521,G__25522) : hoplon.core.table.call(null,G__25514,G__25515,G__25516,G__25517,G__25518,G__25519,G__25520,G__25521,G__25522));
});
