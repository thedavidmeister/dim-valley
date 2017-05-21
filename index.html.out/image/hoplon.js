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
var vec__24403 = hoplon.core.parse_args(args__14859__auto__);
var map__24406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403,(0),null);
var map__24406__$1 = ((((!((map__24406 == null)))?((((map__24406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24406):map__24406);
var attributes = map__24406__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24406__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24406__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24406__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24406__$1,cljs.core.cst$kw$css);
var G__24408 = cljs.core.cst$kw$css;
var G__24409 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24408,vec__24403,map__24406,map__24406__$1,attributes,src,height,width,css){
return (function (G__24412,G__24415,G__24413,G__24414,G__24411){
var G__24416 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24412,cljs.core.cst$kw$width,G__24413,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24414),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24417 = G__24415;
return (G__24411.cljs$core$IFn$_invoke$arity$2 ? G__24411.cljs$core$IFn$_invoke$arity$2(G__24416,G__24417) : G__24411.call(null,G__24416,G__24417));
});})(G__24408,vec__24403,map__24406,map__24406__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__24410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24408,G__24409,G__24410) : hoplon.core.div.call(null,G__24408,G__24409,G__24410));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__24418__i = 0, G__24418__a = new Array(arguments.length -  0);
while (G__24418__i < G__24418__a.length) {G__24418__a[G__24418__i] = arguments[G__24418__i + 0]; ++G__24418__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__24418__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24419){
var args__14859__auto__ = cljs.core.seq(arglist__24419);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
