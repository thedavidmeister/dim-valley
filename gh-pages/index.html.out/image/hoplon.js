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
var vec__15513 = hoplon.core.parse_args(args__14859__auto__);
var map__15516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15513,(0),null);
var map__15516__$1 = ((((!((map__15516 == null)))?((((map__15516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15516):map__15516);
var attributes = map__15516__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15516__$1,cljs.core.cst$kw$css);
var G__15518 = cljs.core.cst$kw$css;
var G__15519 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15518,vec__15513,map__15516,map__15516__$1,attributes,src,height,width,css){
return (function (G__15522,G__15525,G__15523,G__15524,G__15521){
var G__15526 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__15522,cljs.core.cst$kw$width,G__15523,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15524),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__15527 = G__15525;
return (G__15521.cljs$core$IFn$_invoke$arity$2 ? G__15521.cljs$core$IFn$_invoke$arity$2(G__15526,G__15527) : G__15521.call(null,G__15526,G__15527));
});})(G__15518,vec__15513,map__15516,map__15516__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__15520 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__15518,G__15519,G__15520) : hoplon.core.div.call(null,G__15518,G__15519,G__15520));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__15528__i = 0, G__15528__a = new Array(arguments.length -  0);
while (G__15528__i < G__15528__a.length) {G__15528__a[G__15528__i] = arguments[G__15528__i + 0]; ++G__15528__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__15528__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__15529){
var args__14859__auto__ = cljs.core.seq(arglist__15529);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
