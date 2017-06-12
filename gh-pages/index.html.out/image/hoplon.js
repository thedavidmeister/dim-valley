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
var vec__24491 = hoplon.core.parse_args(args__14859__auto__);
var map__24494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24491,(0),null);
var map__24494__$1 = ((((!((map__24494 == null)))?((((map__24494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24494):map__24494);
var attributes = map__24494__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24494__$1,cljs.core.cst$kw$css);
var G__24496 = cljs.core.cst$kw$css;
var G__24497 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24496,vec__24491,map__24494,map__24494__$1,attributes,src,height,width,css){
return (function (G__24500,G__24503,G__24501,G__24502,G__24499){
var G__24504 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24500,cljs.core.cst$kw$width,G__24501,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24502),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24505 = G__24503;
return (G__24499.cljs$core$IFn$_invoke$arity$2 ? G__24499.cljs$core$IFn$_invoke$arity$2(G__24504,G__24505) : G__24499.call(null,G__24504,G__24505));
});})(G__24496,vec__24491,map__24494,map__24494__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__24498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24496,G__24497,G__24498) : hoplon.core.div.call(null,G__24496,G__24497,G__24498));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__24506__i = 0, G__24506__a = new Array(arguments.length -  0);
while (G__24506__i < G__24506__a.length) {G__24506__a[G__24506__i] = arguments[G__24506__i + 0]; ++G__24506__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__24506__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24507){
var args__14859__auto__ = cljs.core.seq(arglist__24507);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
