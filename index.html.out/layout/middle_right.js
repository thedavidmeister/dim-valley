// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.spacer_td = (function layout$middle_right$spacer_td(){
var G__19031 = cljs.core.cst$kw$css;
var G__19032 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"25vw",cljs.core.cst$kw$height,"10vh"], null);
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$2(G__19031,G__19032) : hoplon.core.td.call(null,G__19031,G__19032));
});
layout.middle_right.spacer_tr = (function layout$middle_right$spacer_tr(){
var G__19033 = layout.middle_right.spacer_td();
var G__19034 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$0() : hoplon.core.td.call(null));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__19033,G__19034) : hoplon.core.tr.call(null,G__19033,G__19034));
});
layout.middle_right.content_tr = (function layout$middle_right$content_tr(content){
var G__19035 = layout.middle_right.spacer_td();
var G__19036 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1(content) : hoplon.core.td.call(null,content));
var G__19037 = layout.middle_right.spacer_td();
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$3(G__19035,G__19036,G__19037) : hoplon.core.tr.call(null,G__19035,G__19036,G__19037));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var G__19038 = cljs.core.cst$kw$cellpadding;
var G__19039 = (0);
var G__19040 = cljs.core.cst$kw$cellspacing;
var G__19041 = (0);
var G__19042 = cljs.core.cst$kw$css;
var G__19043 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__19044 = layout.middle_right.spacer_tr();
var G__19045 = layout.middle_right.content_tr(children);
var G__19046 = layout.middle_right.spacer_tr();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$9 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$9(G__19038,G__19039,G__19040,G__19041,G__19042,G__19043,G__19044,G__19045,G__19046) : hoplon.core.table.call(null,G__19038,G__19039,G__19040,G__19041,G__19042,G__19043,G__19044,G__19045,G__19046));
});
