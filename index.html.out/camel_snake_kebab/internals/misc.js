// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24201 = arguments.length;
var i__9518__auto___24202 = (0);
while(true){
if((i__9518__auto___24202 < len__9517__auto___24201)){
args__9524__auto__.push((arguments[i__9518__auto___24202]));

var G__24203 = (i__9518__auto___24202 + (1));
i__9518__auto___24202 = G__24203;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((4) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9525__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24195){
var map__24196 = p__24195;
var map__24196__$1 = ((((!((map__24196 == null)))?((((map__24196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24196):map__24196);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24196__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24198 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__24199 = cljs.core.seq(vec__24198);
var first__24200 = cljs.core.first(seq__24199);
var seq__24199__$1 = cljs.core.next(seq__24199);
var first = first__24200;
var rest = seq__24199__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24190){
var G__24191 = cljs.core.first(seq24190);
var seq24190__$1 = cljs.core.next(seq24190);
var G__24192 = cljs.core.first(seq24190__$1);
var seq24190__$2 = cljs.core.next(seq24190__$1);
var G__24193 = cljs.core.first(seq24190__$2);
var seq24190__$3 = cljs.core.next(seq24190__$2);
var G__24194 = cljs.core.first(seq24190__$3);
var seq24190__$4 = cljs.core.next(seq24190__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24191,G__24192,G__24193,G__24194,seq24190__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8240__auto__ = (function (){var G__24205 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__24205) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__24205));
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return clojure.string.capitalize(s);
}
});
