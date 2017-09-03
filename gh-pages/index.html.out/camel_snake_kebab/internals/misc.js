// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21251 = arguments.length;
var i__8982__auto___21252 = (0);
while(true){
if((i__8982__auto___21252 < len__8981__auto___21251)){
args__8988__auto__.push((arguments[i__8982__auto___21252]));

var G__21253 = (i__8982__auto___21252 + (1));
i__8982__auto___21252 = G__21253;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__21245){
var map__21246 = p__21245;
var map__21246__$1 = ((((!((map__21246 == null)))?((((map__21246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21246):map__21246);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21246__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__21248 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__21249 = cljs.core.seq(vec__21248);
var first__21250 = cljs.core.first(seq__21249);
var seq__21249__$1 = cljs.core.next(seq__21249);
var first = first__21250;
var rest = seq__21249__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq21240){
var G__21241 = cljs.core.first(seq21240);
var seq21240__$1 = cljs.core.next(seq21240);
var G__21242 = cljs.core.first(seq21240__$1);
var seq21240__$2 = cljs.core.next(seq21240__$1);
var G__21243 = cljs.core.first(seq21240__$2);
var seq21240__$3 = cljs.core.next(seq21240__$2);
var G__21244 = cljs.core.first(seq21240__$3);
var seq21240__$4 = cljs.core.next(seq21240__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21241,G__21242,G__21243,G__21244,seq21240__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__21257 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__21257) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__21257));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
