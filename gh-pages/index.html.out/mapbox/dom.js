// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('mapbox.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('mapbox.api');
/**
 * @param {...*} var_args
 */
mapbox.dom.map = (function() { 
var mapbox$dom$map__delegate = function (args__18464__auto__){
var vec__25305 = hoplon.core.parse_args(args__18464__auto__);
var map__25308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25305,(0),null);
var map__25308__$1 = ((((!((map__25308 == null)))?((((map__25308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25308):map__25308);
var attributes = map__25308__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25308__$1,cljs.core.cst$kw$options);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25308__$1,cljs.core.cst$kw$marker);
var marker_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25308__$1,cljs.core.cst$kw$marker_DASH_options);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25305,(1),null);
var el = (function (){var G__25310 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$marker,cljs.core.cst$kw$marker_DASH_options], 0));
var G__25311 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25310,G__25311) : hoplon.core.div.call(null,G__25310,G__25311));
})();
mapbox.api.el__GT_map_BANG_(el,options);

var center_25312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,"center");
if(cljs.core.truth_((function (){var and__8228__auto__ = marker;
if(cljs.core.truth_(and__8228__auto__)){
return center_25312;
} else {
return and__8228__auto__;
}
})())){
mapbox.api.with_marker_BANG_(el,marker,center_25312,marker_options);
} else {
}

return el;
};
var mapbox$dom$map = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__25313__i = 0, G__25313__a = new Array(arguments.length -  0);
while (G__25313__i < G__25313__a.length) {G__25313__a[G__25313__i] = arguments[G__25313__i + 0]; ++G__25313__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__25313__a,0,null);
} 
return mapbox$dom$map__delegate.call(this,args__18464__auto__);};
mapbox$dom$map.cljs$lang$maxFixedArity = 0;
mapbox$dom$map.cljs$lang$applyTo = (function (arglist__25314){
var args__18464__auto__ = cljs.core.seq(arglist__25314);
return mapbox$dom$map__delegate(args__18464__auto__);
});
mapbox$dom$map.cljs$core$IFn$_invoke$arity$variadic = mapbox$dom$map__delegate;
return mapbox$dom$map;
})()
;
mapbox.dom.stylesheet = (function mapbox$dom$stylesheet(){
var G__25315 = cljs.core.cst$kw$href;
var G__25316 = "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css";
var G__25317 = cljs.core.cst$kw$rel;
var G__25318 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__25315,G__25316,G__25317,G__25318) : hoplon.core.link.call(null,G__25315,G__25316,G__25317,G__25318));
});
