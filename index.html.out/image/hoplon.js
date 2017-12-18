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
<<<<<<< HEAD
var image$hoplon$cropped__delegate = function (args__18464__auto__){
var vec__24714 = hoplon.core.parse_args(args__18464__auto__);
var map__24717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24714,(0),null);
var map__24717__$1 = ((((!((map__24717 == null)))?((((map__24717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24717):map__24717);
var attributes = map__24717__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24717__$1,cljs.core.cst$kw$css);
var G__24719 = cljs.core.cst$kw$css;
var G__24720 = (function (){var fexpr__24729 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24719,vec__24714,map__24717,map__24717__$1,attributes,src,height,width,css){
return (function (G__24723,G__24726,G__24724,G__24725,G__24722){
var G__24730 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24723,cljs.core.cst$kw$width,G__24724,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24725),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24731 = G__24726;
return (G__24722.cljs$core$IFn$_invoke$arity$2 ? G__24722.cljs$core$IFn$_invoke$arity$2(G__24730,G__24731) : G__24722.call(null,G__24730,G__24731));
});})(G__24719,vec__24714,map__24717,map__24717__$1,attributes,src,height,width,css))
);
return (fexpr__24729.cljs$core$IFn$_invoke$arity$5 ? fexpr__24729.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24729.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24721 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24719,G__24720,G__24721) : hoplon.core.div.call(null,G__24719,G__24720,G__24721));
};
var image$hoplon$cropped = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__24732__i = 0, G__24732__a = new Array(arguments.length -  0);
while (G__24732__i < G__24732__a.length) {G__24732__a[G__24732__i] = arguments[G__24732__i + 0]; ++G__24732__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__24732__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18464__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24733){
var args__18464__auto__ = cljs.core.seq(arglist__24733);
return image$hoplon$cropped__delegate(args__18464__auto__);
=======
var image$hoplon$cropped__delegate = function (args__19628__auto__){
var vec__24654 = hoplon.core.parse_args(args__19628__auto__);
var map__24657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24654,(0),null);
var map__24657__$1 = ((((!((map__24657 == null)))?((((map__24657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24657):map__24657);
var attributes = map__24657__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24657__$1,cljs.core.cst$kw$css);
var G__24659 = cljs.core.cst$kw$css;
var G__24660 = (function (){var fexpr__24669 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24659,vec__24654,map__24657,map__24657__$1,attributes,src,height,width,css){
return (function (G__24663,G__24666,G__24664,G__24665,G__24662){
var G__24670 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24663,cljs.core.cst$kw$width,G__24664,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24665),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24671 = G__24666;
return (G__24662.cljs$core$IFn$_invoke$arity$2 ? G__24662.cljs$core$IFn$_invoke$arity$2(G__24670,G__24671) : G__24662.call(null,G__24670,G__24671));
});})(G__24659,vec__24654,map__24657,map__24657__$1,attributes,src,height,width,css))
);
return (fexpr__24669.cljs$core$IFn$_invoke$arity$5 ? fexpr__24669.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24669.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24659,G__24660,G__24661) : hoplon.core.div.call(null,G__24659,G__24660,G__24661));
};
var image$hoplon$cropped = function (var_args){
var args__19628__auto__ = null;
if (arguments.length > 0) {
var G__24672__i = 0, G__24672__a = new Array(arguments.length -  0);
while (G__24672__i < G__24672__a.length) {G__24672__a[G__24672__i] = arguments[G__24672__i + 0]; ++G__24672__i;}
  args__19628__auto__ = new cljs.core.IndexedSeq(G__24672__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__19628__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24673){
var args__19628__auto__ = cljs.core.seq(arglist__24673);
return image$hoplon$cropped__delegate(args__19628__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
