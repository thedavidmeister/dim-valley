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
var vec__24421 = hoplon.core.parse_args(args__14859__auto__);
var map__24424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24421,(0),null);
var map__24424__$1 = ((((!((map__24424 == null)))?((((map__24424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24424):map__24424);
var attributes = map__24424__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24424__$1,cljs.core.cst$kw$css);
var G__24426 = cljs.core.cst$kw$css;
var G__24427 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24426,vec__24421,map__24424,map__24424__$1,attributes,src,height,width,css){
return (function (G__24430,G__24433,G__24431,G__24432,G__24429){
var G__24434 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24430,cljs.core.cst$kw$width,G__24431,cljs.core.cst$kw$background_DASH_image,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("url(\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24432),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\")")].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24435 = G__24433;
return (G__24429.cljs$core$IFn$_invoke$arity$2 ? G__24429.cljs$core$IFn$_invoke$arity$2(G__24434,G__24435) : G__24429.call(null,G__24434,G__24435));
});})(G__24426,vec__24421,map__24424,map__24424__$1,attributes,src,height,width,css))
).call(null,height,css,width,src,cljs.core.merge);
var G__24428 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.array_seq([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24426,G__24427,G__24428) : hoplon.core.div.call(null,G__24426,G__24427,G__24428));
};
var image$hoplon$cropped = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__24436__i = 0, G__24436__a = new Array(arguments.length -  0);
while (G__24436__i < G__24436__a.length) {G__24436__a[G__24436__i] = arguments[G__24436__i + 0]; ++G__24436__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__24436__a,0);
} 
return image$hoplon$cropped__delegate.call(this,args__14859__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24437){
var args__14859__auto__ = cljs.core.seq(arglist__24437);
return image$hoplon$cropped__delegate(args__14859__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
