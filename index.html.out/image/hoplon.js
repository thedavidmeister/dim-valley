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
var vec__24682 = hoplon.core.parse_args(args__18466__auto__);
var map__24685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24682,(0),null);
var map__24685__$1 = ((((!((map__24685 == null)))?((((map__24685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24685):map__24685);
var attributes = map__24685__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24685__$1,cljs.core.cst$kw$src);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24685__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24685__$1,cljs.core.cst$kw$width);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24685__$1,cljs.core.cst$kw$css);
var G__24687 = cljs.core.cst$kw$css;
var G__24688 = (function (){var fexpr__24697 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__24687,vec__24682,map__24685,map__24685__$1,attributes,src,height,width,css){
return (function (G__24691,G__24694,G__24692,G__24693,G__24690){
var G__24698 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,G__24691,cljs.core.cst$kw$width,G__24692,cljs.core.cst$kw$background_DASH_image,["url(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24693),"\")"].join(''),cljs.core.cst$kw$background_DASH_repeat,"no-repeat",cljs.core.cst$kw$background_DASH_size,"cover",cljs.core.cst$kw$background_DASH_position,"center"], null);
var G__24699 = G__24694;
return (G__24690.cljs$core$IFn$_invoke$arity$2 ? G__24690.cljs$core$IFn$_invoke$arity$2(G__24698,G__24699) : G__24690.call(null,G__24698,G__24699));
});})(G__24687,vec__24682,map__24685,map__24685__$1,attributes,src,height,width,css))
);
return (fexpr__24697.cljs$core$IFn$_invoke$arity$5 ? fexpr__24697.cljs$core$IFn$_invoke$arity$5(height,css,width,src,cljs.core.merge) : fexpr__24697.call(null,height,css,width,src,cljs.core.merge));
})();
var G__24689 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$height,cljs.core.cst$kw$width,cljs.core.cst$kw$css], 0));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__24687,G__24688,G__24689) : hoplon.core.div.call(null,G__24687,G__24688,G__24689));
};
var image$hoplon$cropped = function (var_args){
var args__18466__auto__ = null;
if (arguments.length > 0) {
var G__24700__i = 0, G__24700__a = new Array(arguments.length -  0);
while (G__24700__i < G__24700__a.length) {G__24700__a[G__24700__i] = arguments[G__24700__i + 0]; ++G__24700__i;}
  args__18466__auto__ = new cljs.core.IndexedSeq(G__24700__a,0,null);
} 
return image$hoplon$cropped__delegate.call(this,args__18466__auto__);};
image$hoplon$cropped.cljs$lang$maxFixedArity = 0;
image$hoplon$cropped.cljs$lang$applyTo = (function (arglist__24701){
var args__18466__auto__ = cljs.core.seq(arglist__24701);
return image$hoplon$cropped__delegate(args__18466__auto__);
});
image$hoplon$cropped.cljs$core$IFn$_invoke$arity$variadic = image$hoplon$cropped__delegate;
return image$hoplon$cropped;
})()
;
