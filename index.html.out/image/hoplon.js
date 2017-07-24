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
var vec__20400 = hoplon.core.parse_args(args__14859__auto__);
var map__20403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(0),null);
var map__20403__$1 = ((((!((map__20403 == null)))?((((map__20403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20403):map__20403);
var attributes = map__20403__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20403__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20403__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20403__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20403__$1,cljs.core.cst$kw$css);
var G__20405 = cljs.core.cst$kw$css;
var G__20406 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20405,vec__20400,map__20403,map__20403__$1,attributes,src,height,width,css){
return (function (G__20409,G__20412,G__20410,G__20411,G__20408){
var G__20413 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__20409,cljs.core.cst$kw$width,G__20410,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20411),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__20414 = G__20412;
return (G__20408.cljs$core$IFn$_invoke$arity$2 ? G__20408.cljs$core$IFn$_invoke$arity$2(G__20413,G__20414) : G__20408.call(null,G__20413,G__20414));
});})(G__20405,vec__20400,map__20403,map__20403__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__20407 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20405,G__20406,G__20407) : hoplon.core.div.call(null,G__20405,G__20406,G__20407));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__20415__i = 0, G__20415__a = new Array(arguments.length -  0);
while (G__20415__i < G__20415__a.length) {G__20415__a[G__20415__i] = arguments[G__20415__i + 0]; ++G__20415__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__20415__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__20416){
var args__14859__auto__ = cljs.core.seq(arglist__20416);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
