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
var image$hoplon$cropped__delegate = function (args__17293__auto__){
var vec__21145 = hoplon.core.parse_args(args__17293__auto__);
var map__21148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21145,(0),null);
var map__21148__$1 = ((((!((map__21148 == null)))?((((map__21148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21148):map__21148);
var attributes = map__21148__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148__$1,cljs.core.cst$kw$css);
var G__21150 = cljs.core.cst$kw$css;
var G__21151 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__21150,vec__21145,map__21148,map__21148__$1,attributes,src,height,width,css){
return (function (G__21154,G__21157,G__21155,G__21156,G__21153){
var G__21158 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__21154,cljs.core.cst$kw$width,G__21155,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21156),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__21159 = G__21157;
return (G__21153.cljs$core$IFn$_invoke$arity$2 ? G__21153.cljs$core$IFn$_invoke$arity$2(G__21158,G__21159) : G__21153.call(null,G__21158,G__21159));
});})(G__21150,vec__21145,map__21148,map__21148__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__21152 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__21150,G__21151,G__21152) : hoplon.core.div.call(null,G__21150,G__21151,G__21152));
};
var image$hoplon$cropped = function (var_args){
var args__17293__auto__ = null;
if (arguments.length > 0) {
var G__21160__i = 0, G__21160__a = new Array(arguments.length -  0);
while (G__21160__i < G__21160__a.length) {G__21160__a[G__21160__i] = arguments[G__21160__i + 0]; ++G__21160__i;}
  args__17293__auto__ = new cljs.core.IndexedSeq(G__21160__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__17293__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__21161){
var args__17293__auto__ = cljs.core.seq(arglist__21161);
return image$hoplon$cropped__delegate(args__17293__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
