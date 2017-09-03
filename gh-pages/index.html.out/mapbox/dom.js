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
var mapbox$dom$map__delegate = function (args__14859__auto__){
var vec__24341 = hoplon.core.parse_args(args__14859__auto__);
var map__24344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24341,(0),null);
var map__24344__$1 = ((((!((map__24344 == null)))?((((map__24344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24344):map__24344);
var attributes = map__24344__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,cljs.core.cst$kw$options);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,cljs.core.cst$kw$marker);
var marker_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,cljs.core.cst$kw$marker_DASH_options);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24341,(1),null);
var el = (function (){var G__24346 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.cst$kw$options,cljs.core.array_seq([cljs.core.cst$kw$marker,cljs.core.cst$kw$marker_DASH_options], 0));
var G__24347 = children;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__24346,G__24347) : hoplon.core.div.call(null,G__24346,G__24347));
})();
mapbox.api.el__GT_map_BANG_(el,options);

var center_24348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,"center");
if(cljs.core.truth_((function (){var and__7748__auto__ = marker;
if(cljs.core.truth_(and__7748__auto__)){
return center_24348;
} else {
return and__7748__auto__;
}
})())){
mapbox.api.with_marker_BANG_(el,marker,center_24348,marker_options);
} else {
}

return el;
};
var mapbox$dom$map = function (var_args){
var args__14859__auto__ = null;
if (arguments.length > 0) {
var G__24349__i = 0, G__24349__a = new Array(arguments.length -  0);
while (G__24349__i < G__24349__a.length) {G__24349__a[G__24349__i] = arguments[G__24349__i + 0]; ++G__24349__i;}
  args__14859__auto__ = new cljs.core.IndexedSeq(G__24349__a,0);
} 
return mapbox$dom$map__delegate.call(this,args__14859__auto__);};
mapbox$dom$map.cljs$lang$maxFixedArity = 0;
mapbox$dom$map.cljs$lang$applyTo = (function (arglist__24350){
var args__14859__auto__ = cljs.core.seq(arglist__24350);
return mapbox$dom$map__delegate(args__14859__auto__);
});
mapbox$dom$map.cljs$core$IFn$_invoke$arity$variadic = mapbox$dom$map__delegate;
return mapbox$dom$map;
})()
;
mapbox.dom.stylesheet = (function mapbox$dom$stylesheet(){
var G__24355 = cljs.core.cst$kw$href;
var G__24356 = "https://api.mapbox.com/mapbox-gl-js/v0.36.0/mapbox-gl.css";
var G__24357 = cljs.core.cst$kw$rel;
var G__24358 = "stylesheet";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(G__24355,G__24356,G__24357,G__24358) : hoplon.core.link.call(null,G__24355,G__24356,G__24357,G__24358));
});
