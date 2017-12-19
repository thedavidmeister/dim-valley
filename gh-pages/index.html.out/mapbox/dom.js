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
var vec__25300 = hoplon.core.parse_args(args__18464__auto__);
var map__25303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25300,(0),null);
var map__25303__$1 = ((((!((map__25303 == null)))?((((map__25303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25303):map__25303);
var attributes = map__25303__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25303__$1,cljs.core.cst$kw$options);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25303__$1,cljs.core.cst$kw$marker);
var marker_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25303__$1,cljs.core.cst$kw$marker_DASH_options);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25300,(1),null);
var el = (function (){var G__25305 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$marker,cljs.core.cst$kw$marker_DASH_options], 0));
var G__25306 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__25305,G__25306) : hoplon.core.div.call(null,G__25305,G__25306));
})();
mapbox.api.el__GT_map_BANG_(el,options);

var center_25307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,"center");
if(cljs.core.truth_((function (){var and__8228__auto__ = marker;
if(cljs.core.truth_(and__8228__auto__)){
return center_25307;
} else {
return and__8228__auto__;
}
})())){
mapbox.api.with_marker_BANG_(el,marker,center_25307,marker_options);
} else {
}

return el;
};
var mapbox$dom$map = function (var_args){
var args__18464__auto__ = null;
if (arguments.length > 0) {
var G__25308__i = 0, G__25308__a = new Array(arguments.length -  0);
while (G__25308__i < G__25308__a.length) {G__25308__a[G__25308__i] = arguments[G__25308__i + 0]; ++G__25308__i;}
  args__18464__auto__ = new cljs.core.IndexedSeq(G__25308__a,0,null);
} 
return mapbox$dom$map__delegate.call(this,args__18464__auto__);};
mapbox$dom$map.cljs$lang$maxFixedArity = 0;
mapbox$dom$map.cljs$lang$applyTo = (function (arglist__25309){
var args__18464__auto__ = cljs.core.seq(arglist__25309);
return mapbox$dom$map__delegate(args__18464__auto__);
});
mapbox$dom$map.cljs$core$IFn$_invoke$arity$variadic = mapbox$dom$map__delegate;
return mapbox$dom$map;
})()
;
mapbox.dom.stylesheet = (function mapbox$dom$stylesheet(){
var G__25310 = cljs.core.cst$kw$href;
var G__25311 = "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css";
var G__25312 = cljs.core.cst$kw$rel;
var G__25313 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__25310,G__25311,G__25312,G__25313) : hoplon.core.link.call(null,G__25310,G__25311,G__25312,G__25313));
});
