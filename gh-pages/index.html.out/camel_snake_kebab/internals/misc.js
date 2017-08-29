// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15536 = arguments.length;
var i__8982__auto___15537 = (0);
while(true){
if((i__8982__auto___15537 < len__8981__auto___15536)){
args__8988__auto__.push((arguments[i__8982__auto___15537]));

var G__15538 = (i__8982__auto___15537 + (1));
i__8982__auto___15537 = G__15538;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__15530){
var map__15531 = p__15530;
var map__15531__$1 = ((((!((map__15531 == null)))?((((map__15531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15531):map__15531);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15531__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__15533 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__15534 = cljs.core.seq(vec__15533);
var first__15535 = cljs.core.first(seq__15534);
var seq__15534__$1 = cljs.core.next(seq__15534);
var first = first__15535;
var rest = seq__15534__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq15525){
var G__15526 = cljs.core.first(seq15525);
var seq15525__$1 = cljs.core.next(seq15525);
var G__15527 = cljs.core.first(seq15525__$1);
var seq15525__$2 = cljs.core.next(seq15525__$1);
var G__15528 = cljs.core.first(seq15525__$2);
var seq15525__$3 = cljs.core.next(seq15525__$2);
var G__15529 = cljs.core.first(seq15525__$3);
var seq15525__$4 = cljs.core.next(seq15525__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__15526,G__15527,G__15528,G__15529,seq15525__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__15542 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__15542) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__15542));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
