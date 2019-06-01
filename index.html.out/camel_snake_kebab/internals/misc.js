// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24138 = arguments.length;
var i__9520__auto___24139 = (0);
while(true){
if((i__9520__auto___24139 < len__9519__auto___24138)){
args__9526__auto__.push((arguments[i__9520__auto___24139]));

var G__24140 = (i__9520__auto___24139 + (1));
i__9520__auto___24139 = G__24140;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24132){
var map__24133 = p__24132;
var map__24133__$1 = ((((!((map__24133 == null)))?((((map__24133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24133):map__24133);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24133__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24135 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__24136 = cljs.core.seq(vec__24135);
var first__24137 = cljs.core.first(seq__24136);
var seq__24136__$1 = cljs.core.next(seq__24136);
var first = first__24137;
var rest = seq__24136__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24127){
var G__24128 = cljs.core.first(seq24127);
var seq24127__$1 = cljs.core.next(seq24127);
var G__24129 = cljs.core.first(seq24127__$1);
var seq24127__$2 = cljs.core.next(seq24127__$1);
var G__24130 = cljs.core.first(seq24127__$2);
var seq24127__$3 = cljs.core.next(seq24127__$2);
var G__24131 = cljs.core.first(seq24127__$3);
var seq24127__$4 = cljs.core.next(seq24127__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24128,G__24129,G__24130,G__24131,seq24127__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8242__auto__ = (function (){var G__24142 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__24142) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__24142));
})();
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return clojure.string.capitalize(s);
}
});
