// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__24332 = cljs.core.cst$kw$css;
var G__24333 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__24332,G__24333) : hoplon.core.td.call(null,G__24332,G__24333));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__24336 = layout.middle_right.spacer_td();
var G__24337 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__24336,G__24337) : hoplon.core.tr.call(null,G__24336,G__24337));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__24341 = layout.middle_right.spacer_td();
var G__24342 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__24343 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__24341,G__24342,G__24343) : hoplon.core.tr.call(null,G__24341,G__24342,G__24343));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__24353 = cljs.core.cst$kw$cellpadding;
var G__24354 = (0);
var G__24355 = cljs.core.cst$kw$cellspacing;
var G__24356 = (0);
var G__24357 = cljs.core.cst$kw$css;
var G__24358 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__24359 = layout.middle_right.spacer_tr();
var G__24360 = layout.middle_right.content_tr(children);
var G__24361 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__24353,G__24354,G__24355,G__24356,G__24357,G__24358,G__24359,G__24360,G__24361) : hoplon.core.table.call(null,G__24353,G__24354,G__24355,G__24356,G__24357,G__24358,G__24359,G__24360,G__24361));
});
