// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('image.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
/**
 * An image cropped around its center. Uses background images.
 * @param {...*} var_args
 */
image.hoplon.cropped = (function() { 
var image$hoplon$cropped__delegate = function (args__14859__auto__){
var vec__23489 = hoplon.core.parse_args(args__14859__auto__);
var map__23492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23489,(0),null);
var map__23492__$1 = ((((!((map__23492 == null)))?((((map__23492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23492):map__23492);
var attributes = map__23492__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23492__$1,cljs.core.cst$kw$css);
var G__23494 = cljs.core.cst$kw$css;
var G__23495 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23494,vec__23489,map__23492,map__23492__$1,attributes,src,height,width,css){
return (function (G__23498,G__23501,G__23499,G__23500,G__23497){
var G__23502 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__23498,cljs.core.cst$kw$width,G__23499,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23500),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__23503 = G__23501;
return (G__23497.cljs$core$IFn$_invoke$arity$2 ? G__23497.cljs$core$IFn$_invoke$arity$2(G__23502,G__23503) : G__23497.call(null,G__23502,G__23503));
});})(G__23494,vec__23489,map__23492,map__23492__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__23496 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23494,G__23495,G__23496) : hoplon.core.div.call(null,G__23494,G__23495,G__23496));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__23504__i = 0, G__23504__a = new Array(arguments.length -  0);
while (G__23504__i < G__23504__a.length) {G__23504__a[G__23504__i] = arguments[G__23504__i + 0]; ++G__23504__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__23504__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__23505){
var args__14859__auto__ = cljs.core.seq(arglist__23505);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
