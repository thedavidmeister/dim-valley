// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
var mapbox$dom$map__delegate = function (args__17299__auto__){
var vec__20549 = hoplon.core.parse_args(args__17299__auto__);
var map__20552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549,(0),null);
var map__20552__$1 = ((((!((map__20552 == null)))?((((map__20552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20552):map__20552);
var attributes = map__20552__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20552__$1,cljs.core.cst$kw$options);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20552__$1,cljs.core.cst$kw$marker);
var marker_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20552__$1,cljs.core.cst$kw$marker_DASH_options);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549,(1),null);
var el = (function (){var G__20554 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$options,cljs.core.array_seq([cljs.core.cst$kw$marker,cljs.core.cst$kw$marker_DASH_options], 0));
var G__20555 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__20554,G__20555) : hoplon.core.div.call(null,G__20554,G__20555));
})();
mapbox.api.el__GT_map_BANG_(el,options);

var center_20556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,"center");
if(cljs.core.truth_((function (){var and__7748__auto__ = marker;
if(cljs.core.truth_(and__7748__auto__)){
return center_20556;
} else {
return and__7748__auto__;
}
})())){
mapbox.api.with_marker_BANG_(el,marker,center_20556,marker_options);
} else {
}

return el;
};
var mapbox$dom$map = function (var_args){
var args__17299__auto__ = null;
if (arguments.length > 0) {
var G__20557__i = 0, G__20557__a = new Array(arguments.length -  0);
while (G__20557__i < G__20557__a.length) {G__20557__a[G__20557__i] = arguments[G__20557__i + 0]; ++G__20557__i;}
  args__17299__auto__ = new cljs.core.IndexedSeq(G__20557__a,0);
} 
return mapbox$dom$map__delegate.call(this,args__17299__auto__);};
mapbox$dom$map.cljs$lang$maxFixedArity = 0;
mapbox$dom$map.cljs$lang$applyTo = (function (arglist__20558){
var args__17299__auto__ = cljs.core.seq(arglist__20558);
return mapbox$dom$map__delegate(args__17299__auto__);
});
mapbox$dom$map.cljs$core$IFn$_invoke$arity$variadic = mapbox$dom$map__delegate;
return mapbox$dom$map;
})()
;
mapbox.dom.stylesheet = (function mapbox$dom$stylesheet(){
var G__20563 = cljs.core.cst$kw$href;
var G__20564 = "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css";
var G__20565 = cljs.core.cst$kw$rel;
var G__20566 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__20563,G__20564,G__20565,G__20566) : hoplon.core.link.call(null,G__20563,G__20564,G__20565,G__20566));
});
