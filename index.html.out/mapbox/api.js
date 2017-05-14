// Compiled by ClojureScript 1.9.542 {}
goog.provide('mapbox.api');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('lib.mapbox');
goog.require('mapbox.config');
mapbox.api.mapbox_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))].join('');
mapbox.api.init = (function mapbox$api$init(token){
if(cljs.core._EQ_.call(null,token,(mapboxgl["accessToken"]))){
return null;
} else {
return (mapboxgl["accessToken"] = token);
}
});
/**
 * Returns a mapbox LngLat object from given co-ordinates
 */
mapbox.api.lng_lat = (function mapbox$api$lng_lat(var_args){
var args13905 = [];
var len__8306__auto___13912 = arguments.length;
var i__8307__auto___13913 = (0);
while(true){
if((i__8307__auto___13913 < len__8306__auto___13912)){
args13905.push((arguments[i__8307__auto___13913]));

var G__13914 = (i__8307__auto___13913 + (1));
i__8307__auto___13913 = G__13914;
continue;
} else {
}
break;
}

var G__13907 = args13905.length;
switch (G__13907) {
case 1:
return mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13905.length)].join('')));

}
});

mapbox.api.lng_lat.cljs$core$IFn$_invoke$arity$1 = (function (p__13908){
var vec__13909 = p__13908;
var lng = cljs.core.nth.call(null,vec__13909,(0),null);
var lat = cljs.core.nth.call(null,vec__13909,(1),null);
return mapbox.api.lng_lat.call(null,lng,lat);
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
return hoplon.core.when_dom.call(null,map_el,(function (){
var G__13917 = (new mapboxgl.Marker(marker_el,cljs.core.clj__GT_js.call(null,marker_options)));
G__13917.setLngLat(ll);

G__13917.addTo(mapbox.api.map_el__GT_map.call(null,map_el));

return G__13917;
}));
});
/**
 * Given an el, instantiates a map in the element and returns the map object
 */
mapbox.api.el__GT_map_BANG_ = (function mapbox$api$el__GT_map_BANG_(el,options){
mapbox.api.init.call(null,mapbox.config.token);

var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["container",el], null),options);
return hoplon.core.when_dom.call(null,el,((function (options__$1){
return (function (){
var m = (new mapboxgl.Map(cljs.core.clj__GT_js.call(null,options__$1)));
return mapbox.api.set_map_el_BANG_.call(null,el,m);
});})(options__$1))
);
});

//# sourceMappingURL=api.js.map