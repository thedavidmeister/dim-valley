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
var vec__24655 = hoplon.core.parse_args(args__18466__auto__);
var map__24658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24655,(0),null);
var map__24658__$1 = ((((!((map__24658 == null)))?((((map__24658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24658):map__24658);
var attributes = map__24658__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24658__$1,cljs.core.cst$kw$css);
var G__24660 = cljs.core.cst$kw$css;
var G__24661 = (function (){var fexpr__24672 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24660,vec__24655,map__24658,map__24658__$1,attributes,src,height,width,css){
return (function (G__24666,G__24665,G__24667,G__24664,G__24663){
var G__24673 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24664),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24674 = G__24665;
var G__24675 = (cljs.core.truth_(G__24666)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,G__24666], null):null);
var G__24676 = (cljs.core.truth_(G__24667)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,G__24667], null):null);
return (G__24663.cljs$core$IFn$_invoke$arity$4 ? G__24663.cljs$core$IFn$_invoke$arity$4(G__24673,G__24674,G__24675,G__24676) : G__24663.call(null,G__24673,G__24674,G__24675,G__24676));
});})(G__24660,vec__24655,map__24658,map__24658__$1,attributes,src,height,width,css))
);
return (fexpr__24672.cljs$core$IFn$_invoke$arity$5 ? fexpr__24672.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24672.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24660,G__24661,G__24662) : hoplon.core.div.call(null,G__24660,G__24661,G__24662));
};
var image$hoplon$cropped = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24677__i = 0, G__24677__a = new Array(arguments.length -  0);
while (G__24677__i < G__24677__a.length) {G__24677__a[G__24677__i] = arguments[G__24677__i + 0]; ++G__24677__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24677__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18466__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24678){
var args__18466__auto__ = cljs.core.seq(arglist__24678);
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
var vec__24679 = hoplon.core.parse_args(args__18466__auto__);
var attributes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24679,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24679,(1),null);
var header_styles = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$margin_DASH_bottom,"4px",cljs.core.cst$kw$filter,"saturate(0)"], null);
return image.hoplon.cropped.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(attributes,cljs.core.cst$kw$css,cljs.core.merge,header_styles)], 0));
};
var image$hoplon$header = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24682__i = 0, G__24682__a = new Array(arguments.length -  0);
while (G__24682__i < G__24682__a.length) {G__24682__a[G__24682__i] = arguments[G__24682__i + 0]; ++G__24682__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24682__a,0,null);
} 
return image$hoplon$header__delegate.call(this,args__18466__auto__);};
image$hoplon$header.cljs$lang$maxFixedArity = 0;
image$hoplon$header.cljs$lang$applyTo = (function (arglist__24683){
var args__18466__auto__ = cljs.core.seq(arglist__24683);
return image$hoplon$header__delegate(args__18466__auto__);
});
image$hoplon$header.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$header__delegate;
return image$hoplon$header;
})()
;
image.hoplon.default_header = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(image.hoplon.header,cljs.core.cst$kw$src,image.data.default_header);
