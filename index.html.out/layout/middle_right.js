// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('layout.middle_right');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('layout.config');
layout.middle_right.content_percent = (50);
layout.middle_right.spacer_percent = (0.5 * ((100) - layout.middle_right.content_percent));
layout.middle_right.spacer = (function layout$middle_right$spacer(){
var G__25247 = cljs.core.cst$kw$class;
var G__25248 = "layout-spacer";
var G__25249 = cljs.core.cst$kw$css;
var G__25250 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.spacer_percent),"vw"].join(''),cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$float,"left"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25247,G__25248,G__25249,G__25250) : hoplon.core.div.call(null,G__25247,G__25248,G__25249,G__25250));
});
/**
 * @param {...*} var_args
 */
layout.middle_right.content_div = (function() { 
var layout$middle_right$content_div__delegate = function (args__19628__auto__){
var vec__25251 = hoplon.core.parse_args(args__19628__auto__);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25251,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25251,(1),null);
var G__25254 = cljs.core.cst$kw$css;
var G__25255 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout.middle_right.content_percent),"vw"].join(''),cljs.core.cst$kw$float,"left"], null);
var G__25256 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__25254,G__25255,G__25256) : hoplon.core.div.call(null,G__25254,G__25255,G__25256));
};
var layout$middle_right$content_div = function (var_args){
var args__19628__auto__ = null;
if (arguments.length > 0) {
var G__25257__i = 0, G__25257__a = new Array(arguments.length -  0);
while (G__25257__i < G__25257__a.length) {G__25257__a[G__25257__i] = arguments[G__25257__i + 0]; ++G__25257__i;}
  args__19628__auto__ = new cljs.core.IndexedSeq(G__25257__a,0,null);
} 
return layout$middle_right$content_div__delegate.call(this,args__19628__auto__);};
layout$middle_right$content_div.cljs$lang$maxFixedArity = 0;
layout$middle_right$content_div.cljs$lang$applyTo = (function (arglist__25258){
var args__19628__auto__ = cljs.core.seq(arglist__25258);
return layout$middle_right$content_div__delegate(args__19628__auto__);
});
layout$middle_right$content_div.cljs$core$IFn$_invoke$arity$variadic = layout$middle_right$content_div__delegate;
return layout$middle_right$content_div;
})()
;
layout.middle_right.spacer_row = (function layout$middle_right$spacer_row(){
var G__25259 = cljs.core.cst$kw$css;
var G__25260 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$height,"10vh",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$float,"left",cljs.core.cst$kw$clear,"both"], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25259,G__25260) : hoplon.core.div.call(null,G__25259,G__25260));
});
layout.middle_right.content_row = (function layout$middle_right$content_row(content){
var G__25261 = cljs.core.cst$kw$css;
var G__25262 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$overflow,"hidden"], null);
var G__25263 = layout.middle_right.spacer();
var G__25264 = layout.middle_right.content_div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$css,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow_DASH_x,"visible"], null),content], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__25261,G__25262,G__25263,G__25264) : hoplon.core.div.call(null,G__25261,G__25262,G__25263,G__25264));
});
layout.middle_right.middle_right = (function layout$middle_right$middle_right(children){
var content_percent = (50);
var spacer_percent = ((100) - ((2) * content_percent));
var G__25265 = cljs.core.cst$kw$css;
var G__25266 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null);
var G__25267 = layout.middle_right.spacer_row();
var G__25268 = layout.middle_right.content_row(children);
var G__25269 = layout.middle_right.spacer_row();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__25265,G__25266,G__25267,G__25268,G__25269) : hoplon.core.div.call(null,G__25265,G__25266,G__25267,G__25268,G__25269));
});
