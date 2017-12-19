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
var image$hoplon$cropped__delegate = function (args__18464__auto__){
var vec__24716 = hoplon.core.parse_args(args__18464__auto__);
var map__24719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24716,(0),null);
var map__24719__$1 = ((((!((map__24719 == null)))?((((map__24719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24719):map__24719);
var attributes = map__24719__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24719__$1,cljs.core.cst$kw$css);
var G__24721 = cljs.core.cst$kw$css;
var G__24722 = (function (){var fexpr__24733 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24721,vec__24716,map__24719,map__24719__$1,attributes,src,height,width,css){
return (function (G__24727,G__24726,G__24728,G__24725,G__24724){
var G__24734 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24725),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24735 = G__24726;
var G__24736 = (cljs.core.truth_(G__24727)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,G__24727], null):null);
var G__24737 = (cljs.core.truth_(G__24728)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,G__24728], null):null);
return (G__24724.cljs$core$IFn$_invoke$arity$4 ? G__24724.cljs$core$IFn$_invoke$arity$4(G__24734,G__24735,G__24736,G__24737) : G__24724.call(null,G__24734,G__24735,G__24736,G__24737));
});})(G__24721,vec__24716,map__24719,map__24719__$1,attributes,src,height,width,css))
);
return (fexpr__24733.cljs$core$IFn$_invoke$arity$5 ? fexpr__24733.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24733.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24721,G__24722,G__24723) : hoplon.core.div.call(null,G__24721,G__24722,G__24723));
};
var image$hoplon$cropped = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__24738__i = 0, G__24738__a = new Array(arguments.length -  0);
while (G__24738__i < G__24738__a.length) {G__24738__a[G__24738__i] = arguments[G__24738__i + 0]; ++G__24738__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__24738__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18464__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24739){
var args__18464__auto__ = cljs.core.seq(arglist__24739);
return image$hoplon$cropped__delegate(args__18464__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
/**
 * @param {...*} var_args
 */
image.hoplon.header = (function() { 
var image$hoplon$header__delegate = function (args__18464__auto__){
var vec__24740 = hoplon.core.parse_args(args__18464__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24740,(1),null);
var header_styles = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px",cljs.core.cst$kw$filter,"saturate(0)"], null);
return image.hoplon.cropped.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(attributes,cljs.core.cst$kw$css,cljs.core.merge,header_styles)], 0));
};
var image$hoplon$header = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__24743__i = 0, G__24743__a = new Array(arguments.length -  0);
while (G__24743__i < G__24743__a.length) {G__24743__a[G__24743__i] = arguments[G__24743__i + 0]; ++G__24743__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__24743__a,0,null);
} 
return image$hoplon$header__delegate.call(this,args__18464__auto__);};
image$hoplon$header.cljs$lang$maxFixedArity = 0;
image$hoplon$header.cljs$lang$applyTo = (function (arglist__24744){
var args__18464__auto__ = cljs.core.seq(arglist__24744);
return image$hoplon$header__delegate(args__18464__auto__);
});
image$hoplon$header.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$header__delegate;
return image$hoplon$header;
})()
;
image.hoplon.default_header = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(image.hoplon.header,cljs.core.cst$kw$src,image.data.default_header);
