// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24061 = arguments.length;
var i__9520__auto___24062 = (0);
while(true){
if((i__9520__auto___24062 < len__9519__auto___24061)){
args__9526__auto__.push((arguments[i__9520__auto___24062]));

var G__24063 = (i__9520__auto___24062 + (1));
i__9520__auto___24062 = G__24063;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24055){
var map__24056 = p__24055;
var map__24056__$1 = ((((!((map__24056 == null)))?((((map__24056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24056):map__24056);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24056__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24058 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__24059 = cljs.core.seq(vec__24058);
var first__24060 = cljs.core.first(seq__24059);
var seq__24059__$1 = cljs.core.next(seq__24059);
var first = first__24060;
var rest = seq__24059__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24050){
var G__24051 = cljs.core.first(seq24050);
var seq24050__$1 = cljs.core.next(seq24050);
var G__24052 = cljs.core.first(seq24050__$1);
var seq24050__$2 = cljs.core.next(seq24050__$1);
var G__24053 = cljs.core.first(seq24050__$2);
var seq24050__$3 = cljs.core.next(seq24050__$2);
var G__24054 = cljs.core.first(seq24050__$3);
var seq24050__$4 = cljs.core.next(seq24050__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24051,G__24052,G__24053,G__24054,seq24050__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8242__auto__ = (function (){var G__24065 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__24065) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__24065));
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return clojure.string.capitalize(s);
}
});
