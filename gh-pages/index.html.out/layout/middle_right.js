// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24153 = cljs.core.cst$kw$css;
var G__24154 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24153,G__24154) : hoplon.core.td.call(null,G__24153,G__24154));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24157 = layout.middle_right.spacer_td();
var G__24158 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24157,G__24158) : hoplon.core.tr.call(null,G__24157,G__24158));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24162 = layout.middle_right.spacer_td();
var G__24163 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24164 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24162,G__24163,G__24164) : hoplon.core.tr.call(null,G__24162,G__24163,G__24164));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24174 = cljs.core.cst$kw$cellpadding;
var G__24175 = (0);
var G__24176 = cljs.core.cst$kw$cellspacing;
var G__24177 = (0);
var G__24178 = cljs.core.cst$kw$css;
var G__24179 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24180 = layout.middle_right.spacer_tr();
var G__24181 = layout.middle_right.content_tr(children);
var G__24182 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24174,G__24175,G__24176,G__24177,G__24178,G__24179,G__24180,G__24181,G__24182) : hoplon.core.table.call(null,G__24174,G__24175,G__24176,G__24177,G__24178,G__24179,G__24180,G__24181,G__24182));
});
