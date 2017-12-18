// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.content_percent = (50);
layout.middle_right.spacer_percent = (0.5 * ((100) - layout.middle_right.content_percent));
layout.middle_right.spacer = (function layout$middle_right$spacer(){
var G__25310 = cljs.core.cst$kw$class;
var G__25311 = "layout-spacer";
var G__25312 = cljs.core.cst$kw$css;
var G__25313 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.spacer_percent),"vw"].join(''),cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$float,"left"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25310,G__25311,G__25312,G__25313) : hoplon.core.div.call(null,G__25310,G__25311,G__25312,G__25313));
});
/**
 * @param {...*} var_args
 */
layout.middle_right.content_div = (function() { 
var layout$middle_right$content_div__delegate = function (args__18464__auto__){
var vec__25314 = hoplon.core.parse_args(args__18464__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25314,(1),null);
var G__25317 = cljs.core.cst$kw$css;
var G__25318 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.content_percent),"vw"].join(''),cljs.core.cst$kw$float,"left"], null);
var G__25319 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25317,G__25318,G__25319) : hoplon.core.div.call(null,G__25317,G__25318,G__25319));
};
var layout$middle_right$content_div = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__25320__i = 0, G__25320__a = new Array(arguments.length -  0);
while (G__25320__i < G__25320__a.length) {G__25320__a[G__25320__i] = arguments[G__25320__i + 0]; ++G__25320__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__25320__a,0,null);
} 
return layout$middle_right$content_div__delegate.call(this,args__18464__auto__);};
layout$middle_right$content_div.cljs$lang$maxFixedArity = 0;
layout$middle_right$content_div.cljs$lang$applyTo = (function (arglist__25321){
var args__18464__auto__ = cljs.core.seq(arglist__25321);
return layout$middle_right$content_div__delegate(args__18464__auto__);
});
layout$middle_right$content_div.cljs$core$IFn$_invoke$arity$variadic = layout$middle_right$content_div__delegate;
return layout$middle_right$content_div;
})()
;
layout.middle_right.spacer_row = (function layout$middle_right$spacer_row(){
var G__25322 = cljs.core.cst$kw$css;
var G__25323 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$float,"left",cljs.core.cst$kw$clear,"both"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25322,G__25323) : hoplon.core.div.call(null,G__25322,G__25323));
});
layout.middle_right.content_row = (function layout$middle_right$content_row(content){
var G__25324 = cljs.core.cst$kw$css;
var G__25325 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$overflow,"hidden"], null);
var G__25326 = layout.middle_right.spacer();
var G__25327 = layout.middle_right.content_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"visible"], null),content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25324,G__25325,G__25326,G__25327) : hoplon.core.div.call(null,G__25324,G__25325,G__25326,G__25327));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var content_percent = (50);
var spacer_percent = ((100) - ((2) * content_percent));
var G__25328 = cljs.core.cst$kw$css;
var G__25329 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25330 = layout.middle_right.spacer_row();
var G__25331 = layout.middle_right.content_row(children);
var G__25332 = layout.middle_right.spacer_row();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25328,G__25329,G__25330,G__25331,G__25332) : hoplon.core.div.call(null,G__25328,G__25329,G__25330,G__25331,G__25332));
});
