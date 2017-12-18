// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24192 = arguments.length;
var i__9518__auto___24193 = (0);
while(true){
if((i__9518__auto___24193 < len__9517__auto___24192)){
args__9524__auto__.push((arguments[i__9518__auto___24193]));

var G__24194 = (i__9518__auto___24193 + (1));
i__9518__auto___24193 = G__24194;
=======
var args__9526__auto__ = [];
var len__9519__auto___13872 = arguments.length;
var i__9520__auto___13873 = (0);
while(true){
if((i__9520__auto___13873 < len__9519__auto___13872)){
args__9526__auto__.push((arguments[i__9520__auto___13873]));

var G__13874 = (i__9520__auto___13873 + (1));
i__9520__auto___13873 = G__13874;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((4) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__24186){
var map__24187 = p__24186;
var map__24187__$1 = ((((!((map__24187 == null)))?((((map__24187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24187):map__24187);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24187__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__24189 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__24190 = cljs.core.seq(vec__24189);
var first__24191 = cljs.core.first(seq__24190);
var seq__24190__$1 = cljs.core.next(seq__24190);
var first = first__24191;
var rest = seq__24190__$1;
=======
camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__13866){
var map__13867 = p__13866;
var map__13867__$1 = ((((!((map__13867 == null)))?((((map__13867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13867):map__13867);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13867__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__13869 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__13870 = cljs.core.seq(vec__13869);
var first__13871 = cljs.core.first(seq__13870);
var seq__13870__$1 = cljs.core.next(seq__13870);
var first = first__13871;
var rest = seq__13870__$1;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

<<<<<<< HEAD
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq24181){
var G__24182 = cljs.core.first(seq24181);
var seq24181__$1 = cljs.core.next(seq24181);
var G__24183 = cljs.core.first(seq24181__$1);
var seq24181__$2 = cljs.core.next(seq24181__$1);
var G__24184 = cljs.core.first(seq24181__$2);
var seq24181__$3 = cljs.core.next(seq24181__$2);
var G__24185 = cljs.core.first(seq24181__$3);
var seq24181__$4 = cljs.core.next(seq24181__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24182,G__24183,G__24184,G__24185,seq24181__$4);
=======
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq13861){
var G__13862 = cljs.core.first(seq13861);
var seq13861__$1 = cljs.core.next(seq13861);
var G__13863 = cljs.core.first(seq13861__$1);
var seq13861__$2 = cljs.core.next(seq13861__$1);
var G__13864 = cljs.core.first(seq13861__$2);
var seq13861__$3 = cljs.core.next(seq13861__$2);
var G__13865 = cljs.core.first(seq13861__$3);
var seq13861__$4 = cljs.core.next(seq13861__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__13862,G__13863,G__13864,G__13865,seq13861__$4);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
<<<<<<< HEAD
var or__8240__auto__ = (function (){var G__24196 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__24196) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__24196));
=======
var or__8242__auto__ = (function (){var G__13876 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__13876) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__13876));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return clojure.string.capitalize(s);
}
});
