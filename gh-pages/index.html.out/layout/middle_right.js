// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.content_percent = (60);
layout.middle_right.spacer_percent = (0.5 * ((100) - layout.middle_right.content_percent));
layout.middle_right.spacer = (function layout$middle_right$spacer(){
var G__25366 = cljs.core.cst$kw$class;
var G__25367 = "layout-spacer";
var G__25368 = cljs.core.cst$kw$css;
var G__25369 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.spacer_percent),"vw"].join(''),cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$float,"left"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25366,G__25367,G__25368,G__25369) : hoplon.core.div.call(null,G__25366,G__25367,G__25368,G__25369));
});
/**
 * @param {...*} var_args
 */
layout.middle_right.content_div = (function() { 
var layout$middle_right$content_div__delegate = function (args__18466__auto__){
var vec__25370 = hoplon.core.parse_args(args__18466__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25370,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25370,(1),null);
var G__25373 = cljs.core.cst$kw$css;
var G__25374 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.content_percent),"vw"].join(''),cljs.core.cst$kw$float,"left"], null);
var G__25375 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25373,G__25374,G__25375) : hoplon.core.div.call(null,G__25373,G__25374,G__25375));
};
var layout$middle_right$content_div = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__25376__i = 0, G__25376__a = new Array(arguments.length -  0);
while (G__25376__i < G__25376__a.length) {G__25376__a[G__25376__i] = arguments[G__25376__i + 0]; ++G__25376__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__25376__a,0,null);
} 
return layout$middle_right$content_div__delegate.call(this,args__18466__auto__);};
layout$middle_right$content_div.cljs$lang$maxFixedArity = 0;
layout$middle_right$content_div.cljs$lang$applyTo = (function (arglist__25377){
var args__18466__auto__ = cljs.core.seq(arglist__25377);
return layout$middle_right$content_div__delegate(args__18466__auto__);
});
layout$middle_right$content_div.cljs$core$IFn$_invoke$arity$variadic = layout$middle_right$content_div__delegate;
return layout$middle_right$content_div;
})()
;
layout.middle_right.spacer_row = (function layout$middle_right$spacer_row(){
var G__25378 = cljs.core.cst$kw$css;
var G__25379 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$float,"left",cljs.core.cst$kw$clear,"both"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25378,G__25379) : hoplon.core.div.call(null,G__25378,G__25379));
});
layout.middle_right.content_row = (function layout$middle_right$content_row(content){
var G__25380 = cljs.core.cst$kw$css;
var G__25381 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$overflow,"hidden"], null);
var G__25382 = layout.middle_right.spacer();
var G__25383 = layout.middle_right.content_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"visible"], null),content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25380,G__25381,G__25382,G__25383) : hoplon.core.div.call(null,G__25380,G__25381,G__25382,G__25383));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var content_percent = (50);
var spacer_percent = ((100) - ((2) * content_percent));
var G__25384 = cljs.core.cst$kw$css;
var G__25385 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25386 = layout.middle_right.spacer_row();
var G__25387 = layout.middle_right.content_row(children);
var G__25388 = layout.middle_right.spacer_row();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25384,G__25385,G__25386,G__25387,G__25388) : hoplon.core.div.call(null,G__25384,G__25385,G__25386,G__25387,G__25388));
});
