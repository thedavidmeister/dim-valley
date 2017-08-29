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
var vec__20389 = hoplon.core.parse_args(args__14859__auto__);
var map__20392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20389,(0),null);
var map__20392__$1 = ((((!((map__20392 == null)))?((((map__20392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20392):map__20392);
var attributes = map__20392__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20392__$1,cljs.core.cst$kw$css);
var G__20394 = cljs.core.cst$kw$css;
var G__20395 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__20394,vec__20389,map__20392,map__20392__$1,attributes,src,height,width,css){
return (function (G__20398,G__20401,G__20399,G__20400,G__20397){
var G__20402 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__20398,cljs.core.cst$kw$width,G__20399,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20400),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__20403 = G__20401;
return (G__20397.cljs$core$IFn$_invoke$arity$2 ? G__20397.cljs$core$IFn$_invoke$arity$2(G__20402,G__20403) : G__20397.call(null,G__20402,G__20403));
});})(G__20394,vec__20389,map__20392,map__20392__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__20396 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__20394,G__20395,G__20396) : hoplon.core.div.call(null,G__20394,G__20395,G__20396));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__20404__i = 0, G__20404__a = new Array(arguments.length -  0);
while (G__20404__i < G__20404__a.length) {G__20404__a[G__20404__i] = arguments[G__20404__i + 0]; ++G__20404__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__20404__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__20405){
var args__14859__auto__ = cljs.core.seq(arglist__20405);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
