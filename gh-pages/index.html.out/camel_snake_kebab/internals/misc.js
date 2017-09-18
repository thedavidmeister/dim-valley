// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23472 = arguments.length;
var i__9916__auto___23473 = (0);
while(true){
if((i__9916__auto___23473 < len__9915__auto___23472)){
args__9922__auto__.push((arguments[i__9916__auto___23473]));

var G__23474 = (i__9916__auto___23473 + (1));
i__9916__auto___23473 = G__23474;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((4) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9923__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__23466){
var map__23467 = p__23466;
var map__23467__$1 = ((((!((map__23467 == null)))?((((map__23467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23467):map__23467);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23467__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__23469 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__23470 = cljs.core.seq(vec__23469);
var first__23471 = cljs.core.first(seq__23470);
var seq__23470__$1 = cljs.core.next(seq__23470);
var first = first__23471;
var rest = seq__23470__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq23461){
var G__23462 = cljs.core.first(seq23461);
var seq23461__$1 = cljs.core.next(seq23461);
var G__23463 = cljs.core.first(seq23461__$1);
var seq23461__$2 = cljs.core.next(seq23461__$1);
var G__23464 = cljs.core.first(seq23461__$2);
var seq23461__$3 = cljs.core.next(seq23461__$2);
var G__23465 = cljs.core.first(seq23461__$3);
var seq23461__$4 = cljs.core.next(seq23461__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__23462,G__23463,G__23464,G__23465,seq23461__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__8638__auto__ = (function (){var G__23476 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__23476) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__23476));
})();
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return clojure.string.capitalize(s);
}
});
