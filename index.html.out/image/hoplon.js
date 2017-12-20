// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('image.hoplon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('image.data');
/**
 * An image cropped around its center. Uses background images.
 * @param {...*} var_args
 */
image.hoplon.cropped = (function() { 
var image$hoplon$cropped__delegate = function (args__18466__auto__){
var vec__24769 = hoplon.core.parse_args(args__18466__auto__);
var map__24772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24769,(0),null);
var map__24772__$1 = ((((!((map__24772 == null)))?((((map__24772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24772):map__24772);
var attributes = map__24772__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24772__$1,cljs.core.cst$kw$css);
var G__24774 = cljs.core.cst$kw$css;
var G__24775 = (function (){var fexpr__24786 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24774,vec__24769,map__24772,map__24772__$1,attributes,src,height,width,css){
return (function (G__24780,G__24779,G__24781,G__24778,G__24777){
var G__24787 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24778),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24788 = G__24779;
var G__24789 = (cljs.core.truth_(G__24780)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,G__24780], null):null);
var G__24790 = (cljs.core.truth_(G__24781)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,G__24781], null):null);
return (G__24777.cljs$core$IFn$_invoke$arity$4 ? G__24777.cljs$core$IFn$_invoke$arity$4(G__24787,G__24788,G__24789,G__24790) : G__24777.call(null,G__24787,G__24788,G__24789,G__24790));
});})(G__24774,vec__24769,map__24772,map__24772__$1,attributes,src,height,width,css))
);
return (fexpr__24786.cljs$core$IFn$_invoke$arity$5 ? fexpr__24786.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24786.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24774,G__24775,G__24776) : hoplon.core.div.call(null,G__24774,G__24775,G__24776));
};
var image$hoplon$cropped = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24791__i = 0, G__24791__a = new Array(arguments.length -  0);
while (G__24791__i < G__24791__a.length) {G__24791__a[G__24791__i] = arguments[G__24791__i + 0]; ++G__24791__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24791__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18466__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24792){
var args__18466__auto__ = cljs.core.seq(arglist__24792);
return image$hoplon$cropped__delegate(args__18466__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
/**
 * @param {...*} var_args
 */
image.hoplon.header = (function() { 
var image$hoplon$header__delegate = function (args__18466__auto__){
var vec__24793 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(1),null);
var header_styles = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px",cljs.core.cst$kw$filter,"saturate(0)"], null);
return image.hoplon.cropped.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(attributes,cljs.core.cst$kw$css,cljs.core.merge,header_styles)], 0));
};
var image$hoplon$header = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24796__i = 0, G__24796__a = new Array(arguments.length -  0);
while (G__24796__i < G__24796__a.length) {G__24796__a[G__24796__i] = arguments[G__24796__i + 0]; ++G__24796__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24796__a,0,null);
} 
return image$hoplon$header__delegate.call(this,args__18466__auto__);};
image$hoplon$header.cljs$lang$maxFixedArity = 0;
image$hoplon$header.cljs$lang$applyTo = (function (arglist__24797){
var args__18466__auto__ = cljs.core.seq(arglist__24797);
return image$hoplon$header__delegate(args__18466__auto__);
});
image$hoplon$header.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$header__delegate;
return image$hoplon$header;
})()
;
image.hoplon.default_header = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(image.hoplon.header,cljs.core.cst$kw$src,image.data.default_header);
