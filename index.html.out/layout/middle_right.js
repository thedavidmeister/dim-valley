// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.content_percent = (60);
layout.middle_right.spacer_percent = (0.5 * ((100) - layout.middle_right.content_percent));
layout.middle_right.spacer = (function layout$middle_right$spacer(){
var G__25279 = cljs.core.cst$kw$class;
var G__25280 = "layout-spacer";
var G__25281 = cljs.core.cst$kw$css;
var G__25282 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.spacer_percent),"vw"].join(''),cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$float,"left"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25279,G__25280,G__25281,G__25282) : hoplon.core.div.call(null,G__25279,G__25280,G__25281,G__25282));
});
/**
 * @param {...*} var_args
 */
layout.middle_right.content_div = (function() { 
var layout$middle_right$content_div__delegate = function (args__18466__auto__){
var vec__25283 = hoplon.core.parse_args(args__18466__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25283,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25283,(1),null);
var G__25286 = cljs.core.cst$kw$css;
var G__25287 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.content_percent),"vw"].join(''),cljs.core.cst$kw$float,"left"], null);
var G__25288 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25286,G__25287,G__25288) : hoplon.core.div.call(null,G__25286,G__25287,G__25288));
};
var layout$middle_right$content_div = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__25289__i = 0, G__25289__a = new Array(arguments.length -  0);
while (G__25289__i < G__25289__a.length) {G__25289__a[G__25289__i] = arguments[G__25289__i + 0]; ++G__25289__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__25289__a,0,null);
} 
return layout$middle_right$content_div__delegate.call(this,args__18466__auto__);};
layout$middle_right$content_div.cljs$lang$maxFixedArity = 0;
layout$middle_right$content_div.cljs$lang$applyTo = (function (arglist__25290){
var args__18466__auto__ = cljs.core.seq(arglist__25290);
return layout$middle_right$content_div__delegate(args__18466__auto__);
});
layout$middle_right$content_div.cljs$core$IFn$_invoke$arity$variadic = layout$middle_right$content_div__delegate;
return layout$middle_right$content_div;
})()
;
layout.middle_right.spacer_row = (function layout$middle_right$spacer_row(){
var G__25291 = cljs.core.cst$kw$css;
var G__25292 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$float,"left",cljs.core.cst$kw$clear,"both"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25291,G__25292) : hoplon.core.div.call(null,G__25291,G__25292));
});
layout.middle_right.content_row = (function layout$middle_right$content_row(content){
var G__25293 = cljs.core.cst$kw$css;
var G__25294 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$overflow,"hidden"], null);
var G__25295 = layout.middle_right.spacer();
var G__25296 = layout.middle_right.content_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"visible"], null),content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25293,G__25294,G__25295,G__25296) : hoplon.core.div.call(null,G__25293,G__25294,G__25295,G__25296));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var content_percent = (50);
var spacer_percent = ((100) - ((2) * content_percent));
var G__25297 = cljs.core.cst$kw$css;
var G__25298 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25299 = layout.middle_right.spacer_row();
var G__25300 = layout.middle_right.content_row(children);
var G__25301 = layout.middle_right.spacer_row();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25297,G__25298,G__25299,G__25300,G__25301) : hoplon.core.div.call(null,G__25297,G__25298,G__25299,G__25300,G__25301));
});
