// Compiled by ClojureScript 1.9.521 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___12465 = arguments.length;
var i__8982__auto___12466 = (0);
while(true){
if((i__8982__auto___12466 < len__8981__auto___12465)){
args__8988__auto__.push((arguments[i__8982__auto___12466]));

var G__12467 = (i__8982__auto___12466 + (1));
i__8982__auto___12466 = G__12467;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__12459){
var map__12460 = p__12459;
var map__12460__$1 = ((((!((map__12460 == null)))?((((map__12460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12460):map__12460);
var separator = cljs.core.get.call(null,map__12460__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__12462 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__12463 = cljs.core.seq.call(null,vec__12462);
var first__12464 = cljs.core.first.call(null,seq__12463);
var seq__12463__$1 = cljs.core.next.call(null,seq__12463);
var first = first__12464;
var rest = seq__12463__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq12454){
var G__12455 = cljs.core.first.call(null,seq12454);
var seq12454__$1 = cljs.core.next.call(null,seq12454);
var G__12456 = cljs.core.first.call(null,seq12454__$1);
var seq12454__$2 = cljs.core.next.call(null,seq12454__$1);
var G__12457 = cljs.core.first.call(null,seq12454__$2);
var seq12454__$3 = cljs.core.next.call(null,seq12454__$2);
var G__12458 = cljs.core.first.call(null,seq12454__$3);
var seq12454__$4 = cljs.core.next.call(null,seq12454__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__12455,G__12456,G__12457,G__12458,seq12454__$4);
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