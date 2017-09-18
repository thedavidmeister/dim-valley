// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var image$hoplon$cropped__delegate = function (args__18466__auto__){
var vec__24628 = hoplon.core.parse_args(args__18466__auto__);
var map__24631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24628,(0),null);
var map__24631__$1 = ((((!((map__24631 == null)))?((((map__24631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24631):map__24631);
var attributes = map__24631__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24631__$1,cljs.core.cst$kw$css);
var G__24633 = cljs.core.cst$kw$css;
var G__24634 = (function (){var fexpr__24643 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24633,vec__24628,map__24631,map__24631__$1,attributes,src,height,width,css){
return (function (G__24637,G__24640,G__24638,G__24639,G__24636){
var G__24644 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24637,cljs.core.cst$kw$width,G__24638,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24639),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24645 = G__24640;
return (G__24636.cljs$core$IFn$_invoke$arity$2 ? G__24636.cljs$core$IFn$_invoke$arity$2(G__24644,G__24645) : G__24636.call(null,G__24644,G__24645));
});})(G__24633,vec__24628,map__24631,map__24631__$1,attributes,src,height,width,css))
);
return (fexpr__24643.cljs$core$IFn$_invoke$arity$5 ? fexpr__24643.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24643.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24635 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24633,G__24634,G__24635) : hoplon.core.div.call(null,G__24633,G__24634,G__24635));
};
var image$hoplon$cropped = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24646__i = 0, G__24646__a = new Array(arguments.length -  0);
while (G__24646__i < G__24646__a.length) {G__24646__a[G__24646__i] = arguments[G__24646__i + 0]; ++G__24646__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24646__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18466__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24647){
var args__18466__auto__ = cljs.core.seq(arglist__24647);
return image$hoplon$cropped__delegate(args__18466__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
