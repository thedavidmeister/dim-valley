// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24335 = cljs.core.cst$kw$css;
var G__24336 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24335,G__24336) : hoplon.core.td.call(null,G__24335,G__24336));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24339 = layout.middle_right.spacer_td();
var G__24340 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24339,G__24340) : hoplon.core.tr.call(null,G__24339,G__24340));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24343 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
var G__24344 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24343,G__24344) : hoplon.core.tr.call(null,G__24343,G__24344));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24354 = cljs.core.cst$kw$cellpadding;
var G__24355 = (0);
var G__24356 = cljs.core.cst$kw$cellspacing;
var G__24357 = (0);
var G__24358 = cljs.core.cst$kw$css;
var G__24359 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24360 = layout.middle_right.spacer_tr();
var G__24361 = layout.middle_right.content_tr(children);
var G__24362 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24354,G__24355,G__24356,G__24357,G__24358,G__24359,G__24360,G__24361,G__24362) : hoplon.core.table.call(null,G__24354,G__24355,G__24356,G__24357,G__24358,G__24359,G__24360,G__24361,G__24362));
});
