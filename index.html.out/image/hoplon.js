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
var image$hoplon$cropped__delegate = function (args__17299__auto__){
var vec__21118 = hoplon.core.parse_args(args__17299__auto__);
var map__21121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21118,(0),null);
var map__21121__$1 = ((((!((map__21121 == null)))?((((map__21121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21121):map__21121);
var attributes = map__21121__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$css);
var G__21123 = cljs.core.cst$kw$css;
var G__21124 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21123,vec__21118,map__21121,map__21121__$1,attributes,src,height,width,css){
return (function (G__21127,G__21130,G__21128,G__21129,G__21126){
var G__21131 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__21127,cljs.core.cst$kw$width,G__21128,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21129),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__21132 = G__21130;
return (G__21126.cljs$core$IFn$_invoke$arity$2 ? G__21126.cljs$core$IFn$_invoke$arity$2(G__21131,G__21132) : G__21126.call(null,G__21131,G__21132));
});})(G__21123,vec__21118,map__21121,map__21121__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__21125 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21123,G__21124,G__21125) : hoplon.core.div.call(null,G__21123,G__21124,G__21125));
};
var image$hoplon$cropped = function (var_args){
var args__17299__auto__ = null;
if (arguments.length > 0) {
var G__21133__i = 0, G__21133__a = new Array(arguments.length -  0);
while (G__21133__i < G__21133__a.length) {G__21133__a[G__21133__i] = arguments[G__21133__i + 0]; ++G__21133__i;}
  args__17299__auto__ = new cljs.core.IndexedSeq(G__21133__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__17299__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__21134){
var args__17299__auto__ = cljs.core.seq(arglist__21134);
return image$hoplon$cropped__delegate(args__17299__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
