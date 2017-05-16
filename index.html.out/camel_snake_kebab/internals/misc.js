// Compiled by ClojureScript 1.9.521 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___9124 = arguments.length;
var i__8982__auto___9125 = (0);
while(true){
if((i__8982__auto___9125 < len__8981__auto___9124)){
args__8988__auto__.push((arguments[i__8982__auto___9125]));

var G__9126 = (i__8982__auto___9125 + (1));
i__8982__auto___9125 = G__9126;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__9118){
var map__9119 = p__9118;
var map__9119__$1 = ((((!((map__9119 == null)))?((((map__9119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9119):map__9119);
var separator = cljs.core.get.call(null,map__9119__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__9121 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__9122 = cljs.core.seq.call(null,vec__9121);
var first__9123 = cljs.core.first.call(null,seq__9122);
var seq__9122__$1 = cljs.core.next.call(null,seq__9122);
var first = first__9123;
var rest = seq__9122__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq9113){
var G__9114 = cljs.core.first.call(null,seq9113);
var seq9113__$1 = cljs.core.next.call(null,seq9113);
var G__9115 = cljs.core.first.call(null,seq9113__$1);
var seq9113__$2 = cljs.core.next.call(null,seq9113__$1);
var G__9116 = cljs.core.first.call(null,seq9113__$2);
var seq9113__$3 = cljs.core.next.call(null,seq9113__$2);
var G__9117 = cljs.core.first.call(null,seq9113__$3);
var seq9113__$4 = cljs.core.next.call(null,seq9113__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9114,G__9115,G__9116,G__9117,seq9113__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map