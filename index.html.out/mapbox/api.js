// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('mapbox.api');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('mapbox.config');
mapbox.api.mapbox_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
mapbox.api.init = (function mapbox$api$init(token){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,(mapboxgl["accessToken"]))){
return null;
} else {
return (mapboxgl["accessToken"] = token);
}
});
/**
 * Returns a mapbox LngLat object from given co-ordinates
 */
mapbox.api.lng_lat = (function mapbox$api$lng_lat(var_args){
var args24001 = [];
var len__8981__auto___24008 = arguments.length;
var i__8982__auto___24009 = (0);
while(true){
if((i__8982__auto___24009 < len__8981__auto___24008)){
args24001.push((arguments[i__8982__auto___24009]));

var G__24010 = (i__8982__auto___24009 + (1));
i__8982__auto___24009 = G__24010;
continue;
} else {
}
break;
}

var G__24003 = args24001.length;
switch (G__24003) {
case 1:
return mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24001.length)].join('')));

}
});

mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$1 = (function (p__24004){
var vec__24005 = p__24004;
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24005,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24005,(1),null);
return mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2(lng,lat);
});

mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2 = (function (lng,lat){
if(typeof lng === 'number'){
} else {
throw (new Error("Assert failed: (number? lng)"));
}

if(typeof lat === 'number'){
} else {
throw (new Error("Assert failed: (number? lat)"));
}

return (new mapboxgl.LngLat(lng,lat));
});

mapbox.api.lng_lat.cljs$lang$maxFixedArity = 2;

mapbox.api.map_el__GT_map = (function mapbox$api$map_el__GT_map(el){
return jQuery.data(el,mapbox.api.mapbox_key);
});
mapbox.api.set_map_el_BANG_ = (function mapbox$api$set_map_el_BANG_(el,m){
return jQuery.data(el,mapbox.api.mapbox_key,m);
});
/**
 * Given a map container DOM element, a marker element and a long/lat, add the marker to the map
 */
mapbox.api.with_marker_BANG_ = (function mapbox$api$with_marker_BANG_(map_el,marker_el,ll,marker_options){
return hoplon.core.when_dom(map_el,(function (){
var G__24013 = (new mapboxgl.Marker(marker_el,cljs.core.clj__GT_js(marker_options)));
G__24013.setLngLat(ll);

G__24013.addTo(mapbox.api.map_el__GT_map(map_el));

return G__24013;
}));
});
/**
 * Given an el, instantiates a map in the element and returns the map object
 */
mapbox.api.el__GT_map_BANG_ = (function mapbox$api$el__GT_map_BANG_(el,options){
mapbox.api.init(mapbox.config.token);

var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["container",el], null),options], 0));
return hoplon.core.when_dom(el,((function (options__$1){
return (function (){
var m = (new mapboxgl.Map(cljs.core.clj__GT_js(options__$1)));
return mapbox.api.set_map_el_BANG_(el,m);
});})(options__$1))
);
});
