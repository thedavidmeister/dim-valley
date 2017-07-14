// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24139 = cljs.core.cst$kw$css;
var G__24140 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24139,G__24140) : hoplon.core.td.call(null,G__24139,G__24140));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24143 = layout.middle_right.spacer_td();
var G__24144 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24143,G__24144) : hoplon.core.tr.call(null,G__24143,G__24144));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24148 = layout.middle_right.spacer_td();
var G__24149 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24150 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24148,G__24149,G__24150) : hoplon.core.tr.call(null,G__24148,G__24149,G__24150));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24160 = cljs.core.cst$kw$cellpadding;
var G__24161 = (0);
var G__24162 = cljs.core.cst$kw$cellspacing;
var G__24163 = (0);
var G__24164 = cljs.core.cst$kw$css;
var G__24165 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24166 = layout.middle_right.spacer_tr();
var G__24167 = layout.middle_right.content_tr(children);
var G__24168 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24160,G__24161,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168) : hoplon.core.table.call(null,G__24160,G__24161,G__24162,G__24163,G__24164,G__24165,G__24166,G__24167,G__24168));
});
