// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.content_percent = (60);
layout.middle_right.spacer_percent = (0.5 * ((100) - layout.middle_right.content_percent));
layout.middle_right.spacer = (function layout$middle_right$spacer(){
var G__25338 = cljs.core.cst$kw$class;
var G__25339 = "layout-spacer";
var G__25340 = cljs.core.cst$kw$css;
var G__25341 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.spacer_percent),"vw"].join(''),cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$float,"left"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25338,G__25339,G__25340,G__25341) : hoplon.core.div.call(null,G__25338,G__25339,G__25340,G__25341));
});
/**
 * @param {...*} var_args
 */
layout.middle_right.content_div = (function() { 
var layout$middle_right$content_div__delegate = function (args__18464__auto__){
var vec__25342 = hoplon.core.parse_args(args__18464__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25342,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25342,(1),null);
var G__25345 = cljs.core.cst$kw$css;
var G__25346 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.content_percent),"vw"].join(''),cljs.core.cst$kw$float,"left"], null);
var G__25347 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25345,G__25346,G__25347) : hoplon.core.div.call(null,G__25345,G__25346,G__25347));
};
var layout$middle_right$content_div = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__25348__i = 0, G__25348__a = new Array(arguments.length -  0);
while (G__25348__i < G__25348__a.length) {G__25348__a[G__25348__i] = arguments[G__25348__i + 0]; ++G__25348__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__25348__a,0,null);
} 
return layout$middle_right$content_div__delegate.call(this,args__18464__auto__);};
layout$middle_right$content_div.cljs$lang$maxFixedArity = 0;
layout$middle_right$content_div.cljs$lang$applyTo = (function (arglist__25349){
var args__18464__auto__ = cljs.core.seq(arglist__25349);
return layout$middle_right$content_div__delegate(args__18464__auto__);
});
layout$middle_right$content_div.cljs$core$IFn$_invoke$arity$variadic = layout$middle_right$content_div__delegate;
return layout$middle_right$content_div;
})()
;
layout.middle_right.spacer_row = (function layout$middle_right$spacer_row(){
var G__25350 = cljs.core.cst$kw$css;
var G__25351 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$float,"left",cljs.core.cst$kw$clear,"both"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25350,G__25351) : hoplon.core.div.call(null,G__25350,G__25351));
});
layout.middle_right.content_row = (function layout$middle_right$content_row(content){
var G__25352 = cljs.core.cst$kw$css;
var G__25353 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$overflow,"hidden"], null);
var G__25354 = layout.middle_right.spacer();
var G__25355 = layout.middle_right.content_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"visible"], null),content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25352,G__25353,G__25354,G__25355) : hoplon.core.div.call(null,G__25352,G__25353,G__25354,G__25355));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var content_percent = (50);
var spacer_percent = ((100) - ((2) * content_percent));
var G__25356 = cljs.core.cst$kw$css;
var G__25357 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25358 = layout.middle_right.spacer_row();
var G__25359 = layout.middle_right.content_row(children);
var G__25360 = layout.middle_right.spacer_row();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25356,G__25357,G__25358,G__25359,G__25360) : hoplon.core.div.call(null,G__25356,G__25357,G__25358,G__25359,G__25360));
});
