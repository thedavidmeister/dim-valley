// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14102 = arguments.length;
var i__8982__auto___14103 = (0);
while(true){
if((i__8982__auto___14103 < len__8981__auto___14102)){
args__8988__auto__.push((arguments[i__8982__auto___14103]));

var G__14104 = (i__8982__auto___14103 + (1));
i__8982__auto___14103 = G__14104;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__14096){
var map__14097 = p__14096;
var map__14097__$1 = ((((!((map__14097 == null)))?((((map__14097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14097):map__14097);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14097__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__14099 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__14100 = cljs.core.seq(vec__14099);
var first__14101 = cljs.core.first(seq__14100);
var seq__14100__$1 = cljs.core.next(seq__14100);
var first = first__14101;
var rest = seq__14100__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq14091){
var G__14092 = cljs.core.first(seq14091);
var seq14091__$1 = cljs.core.next(seq14091);
var G__14093 = cljs.core.first(seq14091__$1);
var seq14091__$2 = cljs.core.next(seq14091__$1);
var G__14094 = cljs.core.first(seq14091__$2);
var seq14091__$3 = cljs.core.next(seq14091__$2);
var G__14095 = cljs.core.first(seq14091__$3);
var seq14091__$4 = cljs.core.next(seq14091__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__14092,G__14093,G__14094,G__14095,seq14091__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__14108 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__14108) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__14108));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
