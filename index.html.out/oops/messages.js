// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('oops.messages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if(typeof oops.messages.runtime_message !== 'undefined'){
} else {
oops.messages.runtime_message = (function (){var method_table__9691__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9692__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9693__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9694__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9695__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),((function (method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__){
return (function() { 
var G__24193__delegate = function (type,_){
return type;
};
var G__24193 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__24194__i = 0, G__24194__a = new Array(arguments.length -  1);
while (G__24194__i < G__24194__a.length) {G__24194__a[G__24194__i] = arguments[G__24194__i + 1]; ++G__24194__i;}
  _ = new cljs.core.IndexedSeq(G__24194__a,0,null);
} 
return G__24193__delegate.call(this,type,_);};
G__24193.cljs$lang$maxFixedArity = 1;
G__24193.cljs$lang$applyTo = (function (arglist__24195){
var type = cljs.core.first(arglist__24195);
var _ = cljs.core.rest(arglist__24195);
return G__24193__delegate(type,_);
});
G__24193.cljs$core$IFn$_invoke$arity$variadic = G__24193__delegate;
return G__24193;
})()
;})(method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__,hierarchy__9695__auto__))
,cljs.core.cst$kw$default,hierarchy__9695__auto__,method_table__9691__auto__,prefer_table__9692__auto__,method_cache__9693__auto__,cached_hierarchy__9694__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,(function (_type,info){
var map__24196 = info;
var map__24196__$1 = ((((!((map__24196 == null)))?((((map__24196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24196):map__24196);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,cljs.core.cst$kw$flavor);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24196__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join('')) : oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,(function (_type,info){
var map__24198 = info;
var map__24198__$1 = ((((!((map__24198 == null)))?((((map__24198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24198):map__24198);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24198__$1,cljs.core.cst$kw$soft_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24198__$1,cljs.core.cst$kw$path);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24198__$1,cljs.core.cst$kw$fn);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')) : oops.messages.post_process_message.call(null,["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null)),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,(function (_type,info){
var map__24200 = info;
var map__24200__$1 = ((((!((map__24200 == null)))?((((map__24200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24200):map__24200);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24200__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24200__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join('')) : oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''):null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Invalid selector") : oops.messages.post_process_message.call(null,"Invalid selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected empty selector"].join('')) : oops.messages.post_process_message.call(null,["Unexpected empty selector"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected punching selector (\"!\" makes sense only with oset!)"].join('')) : oops.messages.post_process_message.call(null,["Unexpected punching selector (\"!\" makes sense only with oset!)"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected soft selector (\"?\" does not make sense with oset!)"].join('')) : oops.messages.post_process_message.call(null,["Unexpected soft selector (\"?\" does not make sense with oset!)"].join('')));
}));
