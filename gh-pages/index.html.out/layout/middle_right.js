// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__25111 = cljs.core.cst$kw$css;
var G__25112 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__25111,G__25112) : hoplon.core.td.call(null,G__25111,G__25112));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__25113 = layout.middle_right.spacer_td();
var G__25114 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__25113,G__25114) : hoplon.core.tr.call(null,G__25113,G__25114));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__25115 = layout.middle_right.spacer_td();
var G__25116 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__25117 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__25115,G__25116,G__25117) : hoplon.core.tr.call(null,G__25115,G__25116,G__25117));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__25118 = cljs.core.cst$kw$cellpadding;
var G__25119 = (0);
var G__25120 = cljs.core.cst$kw$cellspacing;
var G__25121 = (0);
var G__25122 = cljs.core.cst$kw$css;
var G__25123 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25124 = layout.middle_right.spacer_tr();
var G__25125 = layout.middle_right.content_tr(children);
var G__25126 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__25118,G__25119,G__25120,G__25121,G__25122,G__25123,G__25124,G__25125,G__25126) : hoplon.core.table.call(null,G__25118,G__25119,G__25120,G__25121,G__25122,G__25123,G__25124,G__25125,G__25126));
});
