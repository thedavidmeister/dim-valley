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
var vec__24661 = hoplon.core.parse_args(args__18466__auto__);
var map__24664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24661,(0),null);
var map__24664__$1 = ((((!((map__24664 == null)))?((((map__24664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24664):map__24664);
var attributes = map__24664__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24664__$1,cljs.core.cst$kw$css);
var G__24666 = cljs.core.cst$kw$css;
var G__24667 = (function (){var fexpr__24676 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24666,vec__24661,map__24664,map__24664__$1,attributes,src,height,width,css){
return (function (G__24670,G__24673,G__24671,G__24672,G__24669){
var G__24677 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24670,cljs.core.cst$kw$width,G__24671,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24672),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24678 = G__24673;
return (G__24669.cljs$core$IFn$_invoke$arity$2 ? G__24669.cljs$core$IFn$_invoke$arity$2(G__24677,G__24678) : G__24669.call(null,G__24677,G__24678));
});})(G__24666,vec__24661,map__24664,map__24664__$1,attributes,src,height,width,css))
);
return (fexpr__24676.cljs$core$IFn$_invoke$arity$5 ? fexpr__24676.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24676.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24668 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24666,G__24667,G__24668) : hoplon.core.div.call(null,G__24666,G__24667,G__24668));
};
var image$hoplon$cropped = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24679__i = 0, G__24679__a = new Array(arguments.length -  0);
while (G__24679__i < G__24679__a.length) {G__24679__a[G__24679__i] = arguments[G__24679__i + 0]; ++G__24679__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24679__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18466__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24680){
var args__18466__auto__ = cljs.core.seq(arglist__24680);
return image$hoplon$cropped__delegate(args__18466__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
