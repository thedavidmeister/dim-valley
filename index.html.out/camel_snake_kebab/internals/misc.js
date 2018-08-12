// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24104 = arguments.length;
var i__9520__auto___24105 = (0);
while(true){
if((i__9520__auto___24105 < len__9519__auto___24104)){
args__9526__auto__.push((arguments[i__9520__auto___24105]));

var G__24106 = (i__9520__auto___24105 + (1));
i__9520__auto___24105 = G__24106;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24098){
var map__24099 = p__24098;
var map__24099__$1 = ((((!((map__24099 == null)))?((((map__24099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24099):map__24099);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24099__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24101 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__24102 = cljs.core.seq(vec__24101);
var first__24103 = cljs.core.first(seq__24102);
var seq__24102__$1 = cljs.core.next(seq__24102);
var first = first__24103;
var rest = seq__24102__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24093){
var G__24094 = cljs.core.first(seq24093);
var seq24093__$1 = cljs.core.next(seq24093);
var G__24095 = cljs.core.first(seq24093__$1);
var seq24093__$2 = cljs.core.next(seq24093__$1);
var G__24096 = cljs.core.first(seq24093__$2);
var seq24093__$3 = cljs.core.next(seq24093__$2);
var G__24097 = cljs.core.first(seq24093__$3);
var seq24093__$4 = cljs.core.next(seq24093__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24094,G__24095,G__24096,G__24097,seq24093__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8242__auto__ = (function (){var G__24108 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__24108) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__24108));
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return clojure.string.capitalize(s);
}
});
