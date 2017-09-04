// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___15534 = arguments.length;
var i__8982__auto___15535 = (0);
while(true){
if((i__8982__auto___15535 < len__8981__auto___15534)){
args__8988__auto__.push((arguments[i__8982__auto___15535]));

var G__15536 = (i__8982__auto___15535 + (1));
i__8982__auto___15535 = G__15536;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__15528){
var map__15529 = p__15528;
var map__15529__$1 = ((((!((map__15529 == null)))?((((map__15529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15529):map__15529);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15529__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__15531 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__15532 = cljs.core.seq(vec__15531);
var first__15533 = cljs.core.first(seq__15532);
var seq__15532__$1 = cljs.core.next(seq__15532);
var first = first__15533;
var rest = seq__15532__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq15523){
var G__15524 = cljs.core.first(seq15523);
var seq15523__$1 = cljs.core.next(seq15523);
var G__15525 = cljs.core.first(seq15523__$1);
var seq15523__$2 = cljs.core.next(seq15523__$1);
var G__15526 = cljs.core.first(seq15523__$2);
var seq15523__$3 = cljs.core.next(seq15523__$2);
var G__15527 = cljs.core.first(seq15523__$3);
var seq15523__$4 = cljs.core.next(seq15523__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__15524,G__15525,G__15526,G__15527,seq15523__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__7760__auto__ = (function (){var G__15540 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__15540) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__15540));
})();
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return clojure.string.capitalize(s);
}
});
