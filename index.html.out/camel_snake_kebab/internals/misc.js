// Compiled by ClojureScript 1.9.542 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13030 = arguments.length;
var i__8307__auto___13031 = (0);
while(true){
if((i__8307__auto___13031 < len__8306__auto___13030)){
args__8313__auto__.push((arguments[i__8307__auto___13031]));

var G__13032 = (i__8307__auto___13031 + (1));
i__8307__auto___13031 = G__13032;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((4) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8314__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__13024){
var map__13025 = p__13024;
var map__13025__$1 = ((((!((map__13025 == null)))?((((map__13025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13025):map__13025);
var separator = cljs.core.get.call(null,map__13025__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__13027 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__13028 = cljs.core.seq.call(null,vec__13027);
var first__13029 = cljs.core.first.call(null,seq__13028);
var seq__13028__$1 = cljs.core.next.call(null,seq__13028);
var first = first__13029;
var rest = seq__13028__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq13019){
var G__13020 = cljs.core.first.call(null,seq13019);
var seq13019__$1 = cljs.core.next.call(null,seq13019);
var G__13021 = cljs.core.first.call(null,seq13019__$1);
var seq13019__$2 = cljs.core.next.call(null,seq13019__$1);
var G__13022 = cljs.core.first.call(null,seq13019__$2);
var seq13019__$3 = cljs.core.next.call(null,seq13019__$2);
var G__13023 = cljs.core.first.call(null,seq13019__$3);
var seq13019__$4 = cljs.core.next.call(null,seq13019__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__13020,G__13021,G__13022,G__13023,seq13019__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7193__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__7193__auto__)){
return or__7193__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map