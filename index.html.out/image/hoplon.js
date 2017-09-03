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
var vec__23491 = hoplon.core.parse_args(args__14861__auto__);
var map__23494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491,(0),null);
var map__23494__$1 = ((((!((map__23494 == null)))?((((map__23494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23494):map__23494);
var attributes = map__23494__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494__$1,cljs.core.cst$kw$css);
var G__23496 = cljs.core.cst$kw$css;
var G__23497 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23496,vec__23491,map__23494,map__23494__$1,attributes,src,height,width,css){
return (function (G__23500,G__23503,G__23501,G__23502,G__23499){
var G__23504 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__23500,cljs.core.cst$kw$width,G__23501,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23502),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__23505 = G__23503;
return (G__23499.cljs$core$IFn$_invoke$arity$2 ? G__23499.cljs$core$IFn$_invoke$arity$2(G__23504,G__23505) : G__23499.call(null,G__23504,G__23505));
});})(G__23496,vec__23491,map__23494,map__23494__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__23498 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23496,G__23497,G__23498) : hoplon.core.div.call(null,G__23496,G__23497,G__23498));
};
var image$hoplon$cropped = function (var_args){
var args__14861__auto__ = null;
if (arguments.length > 0) {
var G__23506__i = 0, G__23506__a = new Array(arguments.length -  0);
while (G__23506__i < G__23506__a.length) {G__23506__a[G__23506__i] = arguments[G__23506__i + 0]; ++G__23506__i;}
  args__14861__auto__ = new cljs.core.IndexedSeq(G__23506__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14861__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__23507){
var args__14861__auto__ = cljs.core.seq(arglist__23507);
return image$hoplon$cropped__delegate(args__14861__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
