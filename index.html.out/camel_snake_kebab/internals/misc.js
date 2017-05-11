// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9528 = arguments.length;
var i__7951__auto___9529 = (0);
while(true){
if((i__7951__auto___9529 < len__7950__auto___9528)){
args__7957__auto__.push((arguments[i__7951__auto___9529]));

var G__9530 = (i__7951__auto___9529 + (1));
i__7951__auto___9529 = G__9530;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__9522){
var map__9523 = p__9522;
var map__9523__$1 = ((((!((map__9523 == null)))?((((map__9523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9523):map__9523);
var separator = cljs.core.get.call(null,map__9523__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__9525 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__9526 = cljs.core.seq.call(null,vec__9525);
var first__9527 = cljs.core.first.call(null,seq__9526);
var seq__9526__$1 = cljs.core.next.call(null,seq__9526);
var first = first__9527;
var rest = seq__9526__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq9517){
var G__9518 = cljs.core.first.call(null,seq9517);
var seq9517__$1 = cljs.core.next.call(null,seq9517);
var G__9519 = cljs.core.first.call(null,seq9517__$1);
var seq9517__$2 = cljs.core.next.call(null,seq9517__$1);
var G__9520 = cljs.core.first.call(null,seq9517__$2);
var seq9517__$3 = cljs.core.next.call(null,seq9517__$2);
var G__9521 = cljs.core.first.call(null,seq9517__$3);
var seq9517__$4 = cljs.core.next.call(null,seq9517__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9518,G__9519,G__9520,G__9521,seq9517__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__6842__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map