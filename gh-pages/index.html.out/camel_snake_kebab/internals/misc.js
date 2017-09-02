// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___19949 = arguments.length;
var i__8982__auto___19950 = (0);
while(true){
if((i__8982__auto___19950 < len__8981__auto___19949)){
args__8988__auto__.push((arguments[i__8982__auto___19950]));

var G__19951 = (i__8982__auto___19950 + (1));
i__8982__auto___19950 = G__19951;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__19943){
var map__19944 = p__19943;
var map__19944__$1 = ((((!((map__19944 == null)))?((((map__19944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19944):map__19944);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19944__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__19946 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__19947 = cljs.core.seq(vec__19946);
var first__19948 = cljs.core.first(seq__19947);
var seq__19947__$1 = cljs.core.next(seq__19947);
var first = first__19948;
var rest = seq__19947__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq19938){
var G__19939 = cljs.core.first(seq19938);
var seq19938__$1 = cljs.core.next(seq19938);
var G__19940 = cljs.core.first(seq19938__$1);
var seq19938__$2 = cljs.core.next(seq19938__$1);
var G__19941 = cljs.core.first(seq19938__$2);
var seq19938__$3 = cljs.core.next(seq19938__$2);
var G__19942 = cljs.core.first(seq19938__$3);
var seq19938__$4 = cljs.core.next(seq19938__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__19939,G__19940,G__19941,G__19942,seq19938__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__19955 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__19955) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__19955));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
