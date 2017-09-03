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
var vec__23607 = hoplon.core.parse_args(args__14859__auto__);
var map__23610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23607,(0),null);
var map__23610__$1 = ((((!((map__23610 == null)))?((((map__23610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23610.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23610):map__23610);
var attributes = map__23610__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,cljs.core.cst$kw$css);
var G__23612 = cljs.core.cst$kw$css;
var G__23613 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__23612,vec__23607,map__23610,map__23610__$1,attributes,src,height,width,css){
return (function (G__23616,G__23619,G__23617,G__23618,G__23615){
var G__23620 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__23616,cljs.core.cst$kw$width,G__23617,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23618),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__23621 = G__23619;
return (G__23615.cljs$core$IFn$_invoke$arity$2 ? G__23615.cljs$core$IFn$_invoke$arity$2(G__23620,G__23621) : G__23615.call(null,G__23620,G__23621));
});})(G__23612,vec__23607,map__23610,map__23610__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__23614 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__23612,G__23613,G__23614) : hoplon.core.div.call(null,G__23612,G__23613,G__23614));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__23622__i = 0, G__23622__a = new Array(arguments.length -  0);
while (G__23622__i < G__23622__a.length) {G__23622__a[G__23622__i] = arguments[G__23622__i + 0]; ++G__23622__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__23622__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__23623){
var args__14859__auto__ = cljs.core.seq(arglist__23623);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
