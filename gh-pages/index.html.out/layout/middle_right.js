// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__25165 = cljs.core.cst$kw$css;
var G__25166 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__25165,G__25166) : hoplon.core.td.call(null,G__25165,G__25166));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__25167 = layout.middle_right.spacer_td();
var G__25168 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__25167,G__25168) : hoplon.core.tr.call(null,G__25167,G__25168));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__25169 = layout.middle_right.spacer_td();
var G__25170 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__25171 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__25169,G__25170,G__25171) : hoplon.core.tr.call(null,G__25169,G__25170,G__25171));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__25172 = cljs.core.cst$kw$cellpadding;
var G__25173 = (0);
var G__25174 = cljs.core.cst$kw$cellspacing;
var G__25175 = (0);
var G__25176 = cljs.core.cst$kw$css;
var G__25177 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25178 = layout.middle_right.spacer_tr();
var G__25179 = layout.middle_right.content_tr(children);
var G__25180 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180) : hoplon.core.table.call(null,G__25172,G__25173,G__25174,G__25175,G__25176,G__25177,G__25178,G__25179,G__25180));
});
