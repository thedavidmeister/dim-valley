// Compiled by ClojureScript 1.9.293 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9417 = arguments.length;
var i__7951__auto___9418 = (0);
while(true){
if((i__7951__auto___9418 < len__7950__auto___9417)){
args__7957__auto__.push((arguments[i__7951__auto___9418]));

var G__9419 = (i__7951__auto___9418 + (1));
i__7951__auto___9418 = G__9419;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__9411){
var map__9412 = p__9411;
var map__9412__$1 = ((((!((map__9412 == null)))?((((map__9412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9412):map__9412);
var separator = cljs.core.get.call(null,map__9412__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__9414 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__9415 = cljs.core.seq.call(null,vec__9414);
var first__9416 = cljs.core.first.call(null,seq__9415);
var seq__9415__$1 = cljs.core.next.call(null,seq__9415);
var first = first__9416;
var rest = seq__9415__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq9406){
var G__9407 = cljs.core.first.call(null,seq9406);
var seq9406__$1 = cljs.core.next.call(null,seq9406);
var G__9408 = cljs.core.first.call(null,seq9406__$1);
var seq9406__$2 = cljs.core.next.call(null,seq9406__$1);
var G__9409 = cljs.core.first.call(null,seq9406__$2);
var seq9406__$3 = cljs.core.next.call(null,seq9406__$2);
var G__9410 = cljs.core.first.call(null,seq9406__$3);
var seq9406__$4 = cljs.core.next.call(null,seq9406__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9407,G__9408,G__9409,G__9410,seq9406__$4);
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