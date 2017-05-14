// Compiled by ClojureScript 1.9.542 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13213 = arguments.length;
var i__8307__auto___13214 = (0);
while(true){
if((i__8307__auto___13214 < len__8306__auto___13213)){
args__8313__auto__.push((arguments[i__8307__auto___13214]));

var G__13215 = (i__8307__auto___13214 + (1));
i__8307__auto___13214 = G__13215;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((4) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8314__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq13208){
var G__13209 = cljs.core.first.call(null,seq13208);
var seq13208__$1 = cljs.core.next.call(null,seq13208);
var G__13210 = cljs.core.first.call(null,seq13208__$1);
var seq13208__$2 = cljs.core.next.call(null,seq13208__$1);
var G__13211 = cljs.core.first.call(null,seq13208__$2);
var seq13208__$3 = cljs.core.next.call(null,seq13208__$2);
var G__13212 = cljs.core.first.call(null,seq13208__$3);
var seq13208__$4 = cljs.core.next.call(null,seq13208__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__13209,G__13210,G__13211,G__13212,seq13208__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13224 = arguments.length;
var i__8307__auto___13225 = (0);
while(true){
if((i__8307__auto___13225 < len__8306__auto___13224)){
args__8313__auto__.push((arguments[i__8307__auto___13225]));

var G__13226 = (i__8307__auto___13225 + (1));
i__8307__auto___13225 = G__13226;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq13216){
var G__13217 = cljs.core.first.call(null,seq13216);
var seq13216__$1 = cljs.core.next.call(null,seq13216);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__13217,seq13216__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13227 = arguments.length;
var i__8307__auto___13228 = (0);
while(true){
if((i__8307__auto___13228 < len__8306__auto___13227)){
args__8313__auto__.push((arguments[i__8307__auto___13228]));

var G__13229 = (i__8307__auto___13228 + (1));
i__8307__auto___13228 = G__13229;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq13218){
var G__13219 = cljs.core.first.call(null,seq13218);
var seq13218__$1 = cljs.core.next.call(null,seq13218);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__13219,seq13218__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13230 = arguments.length;
var i__8307__auto___13231 = (0);
while(true){
if((i__8307__auto___13231 < len__8306__auto___13230)){
args__8313__auto__.push((arguments[i__8307__auto___13231]));

var G__13232 = (i__8307__auto___13231 + (1));
i__8307__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq13220){
var G__13221 = cljs.core.first.call(null,seq13220);
var seq13220__$1 = cljs.core.next.call(null,seq13220);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__13221,seq13220__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13233 = arguments.length;
var i__8307__auto___13234 = (0);
while(true){
if((i__8307__auto___13234 < len__8306__auto___13233)){
args__8313__auto__.push((arguments[i__8307__auto___13234]));

var G__13235 = (i__8307__auto___13234 + (1));
i__8307__auto___13234 = G__13235;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq13222){
var G__13223 = cljs.core.first.call(null,seq13222);
var seq13222__$1 = cljs.core.next.call(null,seq13222);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__13223,seq13222__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13244 = arguments.length;
var i__8307__auto___13245 = (0);
while(true){
if((i__8307__auto___13245 < len__8306__auto___13244)){
args__8313__auto__.push((arguments[i__8307__auto___13245]));

var G__13246 = (i__8307__auto___13245 + (1));
i__8307__auto___13245 = G__13246;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq13236){
var G__13237 = cljs.core.first.call(null,seq13236);
var seq13236__$1 = cljs.core.next.call(null,seq13236);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__13237,seq13236__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13247 = arguments.length;
var i__8307__auto___13248 = (0);
while(true){
if((i__8307__auto___13248 < len__8306__auto___13247)){
args__8313__auto__.push((arguments[i__8307__auto___13248]));

var G__13249 = (i__8307__auto___13248 + (1));
i__8307__auto___13248 = G__13249;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq13238){
var G__13239 = cljs.core.first.call(null,seq13238);
var seq13238__$1 = cljs.core.next.call(null,seq13238);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__13239,seq13238__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13250 = arguments.length;
var i__8307__auto___13251 = (0);
while(true){
if((i__8307__auto___13251 < len__8306__auto___13250)){
args__8313__auto__.push((arguments[i__8307__auto___13251]));

var G__13252 = (i__8307__auto___13251 + (1));
i__8307__auto___13251 = G__13252;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq13240){
var G__13241 = cljs.core.first.call(null,seq13240);
var seq13240__$1 = cljs.core.next.call(null,seq13240);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__13241,seq13240__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13253 = arguments.length;
var i__8307__auto___13254 = (0);
while(true){
if((i__8307__auto___13254 < len__8306__auto___13253)){
args__8313__auto__.push((arguments[i__8307__auto___13254]));

var G__13255 = (i__8307__auto___13254 + (1));
i__8307__auto___13254 = G__13255;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq13242){
var G__13243 = cljs.core.first.call(null,seq13242);
var seq13242__$1 = cljs.core.next.call(null,seq13242);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__13243,seq13242__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13264 = arguments.length;
var i__8307__auto___13265 = (0);
while(true){
if((i__8307__auto___13265 < len__8306__auto___13264)){
args__8313__auto__.push((arguments[i__8307__auto___13265]));

var G__13266 = (i__8307__auto___13265 + (1));
i__8307__auto___13265 = G__13266;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq13256){
var G__13257 = cljs.core.first.call(null,seq13256);
var seq13256__$1 = cljs.core.next.call(null,seq13256);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__13257,seq13256__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13267 = arguments.length;
var i__8307__auto___13268 = (0);
while(true){
if((i__8307__auto___13268 < len__8306__auto___13267)){
args__8313__auto__.push((arguments[i__8307__auto___13268]));

var G__13269 = (i__8307__auto___13268 + (1));
i__8307__auto___13268 = G__13269;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq13258){
var G__13259 = cljs.core.first.call(null,seq13258);
var seq13258__$1 = cljs.core.next.call(null,seq13258);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__13259,seq13258__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13270 = arguments.length;
var i__8307__auto___13271 = (0);
while(true){
if((i__8307__auto___13271 < len__8306__auto___13270)){
args__8313__auto__.push((arguments[i__8307__auto___13271]));

var G__13272 = (i__8307__auto___13271 + (1));
i__8307__auto___13271 = G__13272;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq13260){
var G__13261 = cljs.core.first.call(null,seq13260);
var seq13260__$1 = cljs.core.next.call(null,seq13260);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__13261,seq13260__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13273 = arguments.length;
var i__8307__auto___13274 = (0);
while(true){
if((i__8307__auto___13274 < len__8306__auto___13273)){
args__8313__auto__.push((arguments[i__8307__auto___13274]));

var G__13275 = (i__8307__auto___13274 + (1));
i__8307__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq13262){
var G__13263 = cljs.core.first.call(null,seq13262);
var seq13262__$1 = cljs.core.next.call(null,seq13262);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__13263,seq13262__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13284 = arguments.length;
var i__8307__auto___13285 = (0);
while(true){
if((i__8307__auto___13285 < len__8306__auto___13284)){
args__8313__auto__.push((arguments[i__8307__auto___13285]));

var G__13286 = (i__8307__auto___13285 + (1));
i__8307__auto___13285 = G__13286;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq13276){
var G__13277 = cljs.core.first.call(null,seq13276);
var seq13276__$1 = cljs.core.next.call(null,seq13276);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__13277,seq13276__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13287 = arguments.length;
var i__8307__auto___13288 = (0);
while(true){
if((i__8307__auto___13288 < len__8306__auto___13287)){
args__8313__auto__.push((arguments[i__8307__auto___13288]));

var G__13289 = (i__8307__auto___13288 + (1));
i__8307__auto___13288 = G__13289;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq13278){
var G__13279 = cljs.core.first.call(null,seq13278);
var seq13278__$1 = cljs.core.next.call(null,seq13278);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__13279,seq13278__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13290 = arguments.length;
var i__8307__auto___13291 = (0);
while(true){
if((i__8307__auto___13291 < len__8306__auto___13290)){
args__8313__auto__.push((arguments[i__8307__auto___13291]));

var G__13292 = (i__8307__auto___13291 + (1));
i__8307__auto___13291 = G__13292;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq13280){
var G__13281 = cljs.core.first.call(null,seq13280);
var seq13280__$1 = cljs.core.next.call(null,seq13280);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__13281,seq13280__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13293 = arguments.length;
var i__8307__auto___13294 = (0);
while(true){
if((i__8307__auto___13294 < len__8306__auto___13293)){
args__8313__auto__.push((arguments[i__8307__auto___13294]));

var G__13295 = (i__8307__auto___13294 + (1));
i__8307__auto___13294 = G__13295;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq13282){
var G__13283 = cljs.core.first.call(null,seq13282);
var seq13282__$1 = cljs.core.next.call(null,seq13282);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__13283,seq13282__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13304 = arguments.length;
var i__8307__auto___13305 = (0);
while(true){
if((i__8307__auto___13305 < len__8306__auto___13304)){
args__8313__auto__.push((arguments[i__8307__auto___13305]));

var G__13306 = (i__8307__auto___13305 + (1));
i__8307__auto___13305 = G__13306;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq13296){
var G__13297 = cljs.core.first.call(null,seq13296);
var seq13296__$1 = cljs.core.next.call(null,seq13296);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__13297,seq13296__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13307 = arguments.length;
var i__8307__auto___13308 = (0);
while(true){
if((i__8307__auto___13308 < len__8306__auto___13307)){
args__8313__auto__.push((arguments[i__8307__auto___13308]));

var G__13309 = (i__8307__auto___13308 + (1));
i__8307__auto___13308 = G__13309;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq13298){
var G__13299 = cljs.core.first.call(null,seq13298);
var seq13298__$1 = cljs.core.next.call(null,seq13298);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__13299,seq13298__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13310 = arguments.length;
var i__8307__auto___13311 = (0);
while(true){
if((i__8307__auto___13311 < len__8306__auto___13310)){
args__8313__auto__.push((arguments[i__8307__auto___13311]));

var G__13312 = (i__8307__auto___13311 + (1));
i__8307__auto___13311 = G__13312;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq13300){
var G__13301 = cljs.core.first.call(null,seq13300);
var seq13300__$1 = cljs.core.next.call(null,seq13300);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__13301,seq13300__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13313 = arguments.length;
var i__8307__auto___13314 = (0);
while(true){
if((i__8307__auto___13314 < len__8306__auto___13313)){
args__8313__auto__.push((arguments[i__8307__auto___13314]));

var G__13315 = (i__8307__auto___13314 + (1));
i__8307__auto___13314 = G__13315;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq13302){
var G__13303 = cljs.core.first.call(null,seq13302);
var seq13302__$1 = cljs.core.next.call(null,seq13302);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__13303,seq13302__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13324 = arguments.length;
var i__8307__auto___13325 = (0);
while(true){
if((i__8307__auto___13325 < len__8306__auto___13324)){
args__8313__auto__.push((arguments[i__8307__auto___13325]));

var G__13326 = (i__8307__auto___13325 + (1));
i__8307__auto___13325 = G__13326;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq13316){
var G__13317 = cljs.core.first.call(null,seq13316);
var seq13316__$1 = cljs.core.next.call(null,seq13316);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__13317,seq13316__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13327 = arguments.length;
var i__8307__auto___13328 = (0);
while(true){
if((i__8307__auto___13328 < len__8306__auto___13327)){
args__8313__auto__.push((arguments[i__8307__auto___13328]));

var G__13329 = (i__8307__auto___13328 + (1));
i__8307__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq13318){
var G__13319 = cljs.core.first.call(null,seq13318);
var seq13318__$1 = cljs.core.next.call(null,seq13318);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__13319,seq13318__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13330 = arguments.length;
var i__8307__auto___13331 = (0);
while(true){
if((i__8307__auto___13331 < len__8306__auto___13330)){
args__8313__auto__.push((arguments[i__8307__auto___13331]));

var G__13332 = (i__8307__auto___13331 + (1));
i__8307__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq13320){
var G__13321 = cljs.core.first.call(null,seq13320);
var seq13320__$1 = cljs.core.next.call(null,seq13320);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__13321,seq13320__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13333 = arguments.length;
var i__8307__auto___13334 = (0);
while(true){
if((i__8307__auto___13334 < len__8306__auto___13333)){
args__8313__auto__.push((arguments[i__8307__auto___13334]));

var G__13335 = (i__8307__auto___13334 + (1));
i__8307__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq13322){
var G__13323 = cljs.core.first.call(null,seq13322);
var seq13322__$1 = cljs.core.next.call(null,seq13322);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__13323,seq13322__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13344 = arguments.length;
var i__8307__auto___13345 = (0);
while(true){
if((i__8307__auto___13345 < len__8306__auto___13344)){
args__8313__auto__.push((arguments[i__8307__auto___13345]));

var G__13346 = (i__8307__auto___13345 + (1));
i__8307__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__13175__auto__,rest__13176__auto__){
var convert_case__13177__auto__ = (function (p1__13174__13178__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__13174__13178__auto__,rest__13176__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__13175__auto__,convert_case__13177__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq13336){
var G__13337 = cljs.core.first.call(null,seq13336);
var seq13336__$1 = cljs.core.next.call(null,seq13336);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__13337,seq13336__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13347 = arguments.length;
var i__8307__auto___13348 = (0);
while(true){
if((i__8307__auto___13348 < len__8306__auto___13347)){
args__8313__auto__.push((arguments[i__8307__auto___13348]));

var G__13349 = (i__8307__auto___13348 + (1));
i__8307__auto___13348 = G__13349;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq13338){
var G__13339 = cljs.core.first.call(null,seq13338);
var seq13338__$1 = cljs.core.next.call(null,seq13338);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__13339,seq13338__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13350 = arguments.length;
var i__8307__auto___13351 = (0);
while(true){
if((i__8307__auto___13351 < len__8306__auto___13350)){
args__8313__auto__.push((arguments[i__8307__auto___13351]));

var G__13352 = (i__8307__auto___13351 + (1));
i__8307__auto___13351 = G__13352;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq13340){
var G__13341 = cljs.core.first.call(null,seq13340);
var seq13340__$1 = cljs.core.next.call(null,seq13340);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__13341,seq13340__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8313__auto__ = [];
var len__8306__auto___13353 = arguments.length;
var i__8307__auto___13354 = (0);
while(true){
if((i__8307__auto___13354 < len__8306__auto___13353)){
args__8313__auto__.push((arguments[i__8307__auto___13354]));

var G__13355 = (i__8307__auto___13354 + (1));
i__8307__auto___13354 = G__13355;
continue;
} else {
}
break;
}

var argseq__8314__auto__ = ((((1) < args__8313__auto__.length))?(new cljs.core.IndexedSeq(args__8313__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8314__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__13180__auto__,rest__13181__auto__){
if(!((s__13180__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__13180__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__13180__auto__),rest__13181__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq13342){
var G__13343 = cljs.core.first.call(null,seq13342);
var seq13342__$1 = cljs.core.next.call(null,seq13342);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__13343,seq13342__$1);
});


//# sourceMappingURL=core.js.map