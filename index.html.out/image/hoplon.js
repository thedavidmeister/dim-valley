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
var vec__24475 = hoplon.core.parse_args(args__14861__auto__);
var map__24478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24475,(0),null);
var map__24478__$1 = ((((!((map__24478 == null)))?((((map__24478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24478):map__24478);
var attributes = map__24478__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24478__$1,cljs.core.cst$kw$css);
var G__24480 = cljs.core.cst$kw$css;
var G__24481 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24480,vec__24475,map__24478,map__24478__$1,attributes,src,height,width,css){
return (function (G__24484,G__24487,G__24485,G__24486,G__24483){
var G__24488 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24484,cljs.core.cst$kw$width,G__24485,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24486),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24489 = G__24487;
return (G__24483.cljs$core$IFn$_invoke$arity$2 ? G__24483.cljs$core$IFn$_invoke$arity$2(G__24488,G__24489) : G__24483.call(null,G__24488,G__24489));
});})(G__24480,vec__24475,map__24478,map__24478__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__24482 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24480,G__24481,G__24482) : hoplon.core.div.call(null,G__24480,G__24481,G__24482));
};
var image$hoplon$cropped = function (var_args){
var args__14861__auto__ = null;
if (arguments.length > 0) {
var G__24490__i = 0, G__24490__a = new Array(arguments.length -  0);
while (G__24490__i < G__24490__a.length) {G__24490__a[G__24490__i] = arguments[G__24490__i + 0]; ++G__24490__i;}
  args__14861__auto__ = new cljs.core.IndexedSeq(G__24490__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14861__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24491){
var args__14861__auto__ = cljs.core.seq(arglist__24491);
return image$hoplon$cropped__delegate(args__14861__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
