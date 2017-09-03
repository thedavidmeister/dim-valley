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
var image$hoplon$cropped__delegate = function (args__14861__auto__){
var vec__20413 = hoplon.core.parse_args(args__14861__auto__);
var map__20416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20413,(0),null);
var map__20416__$1 = ((((!((map__20416 == null)))?((((map__20416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20416):map__20416);
var attributes = map__20416__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20416__$1,cljs.core.cst$kw$css);
var G__20418 = cljs.core.cst$kw$css;
var G__20419 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20418,vec__20413,map__20416,map__20416__$1,attributes,src,height,width,css){
return (function (G__20422,G__20425,G__20423,G__20424,G__20421){
var G__20426 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__20422,cljs.core.cst$kw$width,G__20423,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20424),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__20427 = G__20425;
return (G__20421.cljs$core$IFn$_invoke$arity$2 ? G__20421.cljs$core$IFn$_invoke$arity$2(G__20426,G__20427) : G__20421.call(null,G__20426,G__20427));
});})(G__20418,vec__20413,map__20416,map__20416__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__20420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20418,G__20419,G__20420) : hoplon.core.div.call(null,G__20418,G__20419,G__20420));
};
var image$hoplon$cropped = function (var_args){
var args__14861__auto__ = null;
if (arguments.length > 0) {
var G__20428__i = 0, G__20428__a = new Array(arguments.length -  0);
while (G__20428__i < G__20428__a.length) {G__20428__a[G__20428__i] = arguments[G__20428__i + 0]; ++G__20428__i;}
  args__14861__auto__ = new cljs.core.IndexedSeq(G__20428__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14861__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__20429){
var args__14861__auto__ = cljs.core.seq(arglist__20429);
return image$hoplon$cropped__delegate(args__14861__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
