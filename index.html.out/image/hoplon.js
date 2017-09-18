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
var image$hoplon$cropped__delegate = function (args__18862__auto__){
var vec__24911 = hoplon.core.parse_args(args__18862__auto__);
var map__24914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24911,(0),null);
var map__24914__$1 = ((((!((map__24914 == null)))?((((map__24914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24914):map__24914);
var attributes = map__24914__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24914__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24914__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24914__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24914__$1,cljs.core.cst$kw$css);
var G__24916 = cljs.core.cst$kw$css;
var G__24917 = (function (){var fexpr__24926 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24916,vec__24911,map__24914,map__24914__$1,attributes,src,height,width,css){
return (function (G__24920,G__24923,G__24921,G__24922,G__24919){
var G__24927 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24920,cljs.core.cst$kw$width,G__24921,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24922),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24928 = G__24923;
return (G__24919.cljs$core$IFn$_invoke$arity$2 ? G__24919.cljs$core$IFn$_invoke$arity$2(G__24927,G__24928) : G__24919.call(null,G__24927,G__24928));
});})(G__24916,vec__24911,map__24914,map__24914__$1,attributes,src,height,width,css))
);
return (fexpr__24926.cljs$core$IFn$_invoke$arity$5 ? fexpr__24926.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24926.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24918 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24916,G__24917,G__24918) : hoplon.core.div.call(null,G__24916,G__24917,G__24918));
};
var image$hoplon$cropped = function (var_args){
var args__18862__auto__ = null;
if (arguments.length > 0) {
var G__24929__i = 0, G__24929__a = new Array(arguments.length -  0);
while (G__24929__i < G__24929__a.length) {G__24929__a[G__24929__i] = arguments[G__24929__i + 0]; ++G__24929__i;}
  args__18862__auto__ = new cljs.core.IndexedSeq(G__24929__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18862__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24930){
var args__18862__auto__ = cljs.core.seq(arglist__24930);
return image$hoplon$cropped__delegate(args__18862__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
