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
var vec__24350 = hoplon.core.parse_args(args__14859__auto__);
var map__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(0),null);
var map__24353__$1 = ((((!((map__24353 == null)))?((((map__24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24353):map__24353);
var attributes = map__24353__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,cljs.core.cst$kw$css);
var G__24355 = cljs.core.cst$kw$css;
var G__24356 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24355,vec__24350,map__24353,map__24353__$1,attributes,src,height,width,css){
return (function (G__24359,G__24362,G__24360,G__24361,G__24358){
var G__24363 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24359,cljs.core.cst$kw$width,G__24360,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24361),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24364 = G__24362;
return (G__24358.cljs$core$IFn$_invoke$arity$2 ? G__24358.cljs$core$IFn$_invoke$arity$2(G__24363,G__24364) : G__24358.call(null,G__24363,G__24364));
});})(G__24355,vec__24350,map__24353,map__24353__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__24357 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24355,G__24356,G__24357) : hoplon.core.div.call(null,G__24355,G__24356,G__24357));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__24365__i = 0, G__24365__a = new Array(arguments.length -  0);
while (G__24365__i < G__24365__a.length) {G__24365__a[G__24365__i] = arguments[G__24365__i + 0]; ++G__24365__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__24365__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24366){
var args__14859__auto__ = cljs.core.seq(arglist__24366);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
