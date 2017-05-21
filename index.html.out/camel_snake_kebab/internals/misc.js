// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21255 = arguments.length;
var i__8982__auto___21256 = (0);
while(true){
if((i__8982__auto___21256 < len__8981__auto___21255)){
args__8988__auto__.push((arguments[i__8982__auto___21256]));

var G__21257 = (i__8982__auto___21256 + (1));
i__8982__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__21249){
var map__21250 = p__21249;
var map__21250__$1 = ((((!((map__21250 == null)))?((((map__21250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21250):map__21250);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21250__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__21252 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__21253 = cljs.core.seq(vec__21252);
var first__21254 = cljs.core.first(seq__21253);
var seq__21253__$1 = cljs.core.next(seq__21253);
var first = first__21254;
var rest = seq__21253__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq21244){
var G__21245 = cljs.core.first(seq21244);
var seq21244__$1 = cljs.core.next(seq21244);
var G__21246 = cljs.core.first(seq21244__$1);
var seq21244__$2 = cljs.core.next(seq21244__$1);
var G__21247 = cljs.core.first(seq21244__$2);
var seq21244__$3 = cljs.core.next(seq21244__$2);
var G__21248 = cljs.core.first(seq21244__$3);
var seq21244__$4 = cljs.core.next(seq21244__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21245,G__21246,G__21247,G__21248,seq21244__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__21261 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__21261) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__21261));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
