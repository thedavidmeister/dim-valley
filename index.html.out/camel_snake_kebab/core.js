// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21332 = arguments.length;
var i__8982__auto___21333 = (0);
while(true){
if((i__8982__auto___21333 < len__8981__auto___21332)){
args__8988__auto__.push((arguments[i__8982__auto___21333]));

var G__21334 = (i__8982__auto___21333 + (1));
i__8982__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.array_seq([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq21327){
var G__21328 = cljs.core.first(seq21327);
var seq21327__$1 = cljs.core.next(seq21327);
var G__21329 = cljs.core.first(seq21327__$1);
var seq21327__$2 = cljs.core.next(seq21327__$1);
var G__21330 = cljs.core.first(seq21327__$2);
var seq21327__$3 = cljs.core.next(seq21327__$2);
var G__21331 = cljs.core.first(seq21327__$3);
var seq21327__$4 = cljs.core.next(seq21327__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21328,G__21329,G__21330,G__21331,seq21327__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21343 = arguments.length;
var i__8982__auto___21344 = (0);
while(true){
if((i__8982__auto___21344 < len__8981__auto___21343)){
args__8988__auto__.push((arguments[i__8982__auto___21344]));

var G__21345 = (i__8982__auto___21344 + (1));
i__8982__auto___21344 = G__21345;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq21335){
var G__21336 = cljs.core.first(seq21335);
var seq21335__$1 = cljs.core.next(seq21335);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__21336,seq21335__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21346 = arguments.length;
var i__8982__auto___21347 = (0);
while(true){
if((i__8982__auto___21347 < len__8981__auto___21346)){
args__8988__auto__.push((arguments[i__8982__auto___21347]));

var G__21348 = (i__8982__auto___21347 + (1));
i__8982__auto___21347 = G__21348;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq21337){
var G__21338 = cljs.core.first(seq21337);
var seq21337__$1 = cljs.core.next(seq21337);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21338,seq21337__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21349 = arguments.length;
var i__8982__auto___21350 = (0);
while(true){
if((i__8982__auto___21350 < len__8981__auto___21349)){
args__8988__auto__.push((arguments[i__8982__auto___21350]));

var G__21351 = (i__8982__auto___21350 + (1));
i__8982__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq21339){
var G__21340 = cljs.core.first(seq21339);
var seq21339__$1 = cljs.core.next(seq21339);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21340,seq21339__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21352 = arguments.length;
var i__8982__auto___21353 = (0);
while(true){
if((i__8982__auto___21353 < len__8981__auto___21352)){
args__8988__auto__.push((arguments[i__8982__auto___21353]));

var G__21354 = (i__8982__auto___21353 + (1));
i__8982__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq21341){
var G__21342 = cljs.core.first(seq21341);
var seq21341__$1 = cljs.core.next(seq21341);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21342,seq21341__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21363 = arguments.length;
var i__8982__auto___21364 = (0);
while(true){
if((i__8982__auto___21364 < len__8981__auto___21363)){
args__8988__auto__.push((arguments[i__8982__auto___21364]));

var G__21365 = (i__8982__auto___21364 + (1));
i__8982__auto___21364 = G__21365;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq21355){
var G__21356 = cljs.core.first(seq21355);
var seq21355__$1 = cljs.core.next(seq21355);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__21356,seq21355__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21366 = arguments.length;
var i__8982__auto___21367 = (0);
while(true){
if((i__8982__auto___21367 < len__8981__auto___21366)){
args__8988__auto__.push((arguments[i__8982__auto___21367]));

var G__21368 = (i__8982__auto___21367 + (1));
i__8982__auto___21367 = G__21368;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq21357){
var G__21358 = cljs.core.first(seq21357);
var seq21357__$1 = cljs.core.next(seq21357);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21358,seq21357__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21369 = arguments.length;
var i__8982__auto___21370 = (0);
while(true){
if((i__8982__auto___21370 < len__8981__auto___21369)){
args__8988__auto__.push((arguments[i__8982__auto___21370]));

var G__21371 = (i__8982__auto___21370 + (1));
i__8982__auto___21370 = G__21371;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq21359){
var G__21360 = cljs.core.first(seq21359);
var seq21359__$1 = cljs.core.next(seq21359);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21360,seq21359__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21372 = arguments.length;
var i__8982__auto___21373 = (0);
while(true){
if((i__8982__auto___21373 < len__8981__auto___21372)){
args__8988__auto__.push((arguments[i__8982__auto___21373]));

var G__21374 = (i__8982__auto___21373 + (1));
i__8982__auto___21373 = G__21374;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq21361){
var G__21362 = cljs.core.first(seq21361);
var seq21361__$1 = cljs.core.next(seq21361);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21362,seq21361__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21383 = arguments.length;
var i__8982__auto___21384 = (0);
while(true){
if((i__8982__auto___21384 < len__8981__auto___21383)){
args__8988__auto__.push((arguments[i__8982__auto___21384]));

var G__21385 = (i__8982__auto___21384 + (1));
i__8982__auto___21384 = G__21385;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq21375){
var G__21376 = cljs.core.first(seq21375);
var seq21375__$1 = cljs.core.next(seq21375);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__21376,seq21375__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21386 = arguments.length;
var i__8982__auto___21387 = (0);
while(true){
if((i__8982__auto___21387 < len__8981__auto___21386)){
args__8988__auto__.push((arguments[i__8982__auto___21387]));

var G__21388 = (i__8982__auto___21387 + (1));
i__8982__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq21377){
var G__21378 = cljs.core.first(seq21377);
var seq21377__$1 = cljs.core.next(seq21377);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21378,seq21377__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21389 = arguments.length;
var i__8982__auto___21390 = (0);
while(true){
if((i__8982__auto___21390 < len__8981__auto___21389)){
args__8988__auto__.push((arguments[i__8982__auto___21390]));

var G__21391 = (i__8982__auto___21390 + (1));
i__8982__auto___21390 = G__21391;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq21379){
var G__21380 = cljs.core.first(seq21379);
var seq21379__$1 = cljs.core.next(seq21379);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21380,seq21379__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21392 = arguments.length;
var i__8982__auto___21393 = (0);
while(true){
if((i__8982__auto___21393 < len__8981__auto___21392)){
args__8988__auto__.push((arguments[i__8982__auto___21393]));

var G__21394 = (i__8982__auto___21393 + (1));
i__8982__auto___21393 = G__21394;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq21381){
var G__21382 = cljs.core.first(seq21381);
var seq21381__$1 = cljs.core.next(seq21381);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21382,seq21381__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21403 = arguments.length;
var i__8982__auto___21404 = (0);
while(true){
if((i__8982__auto___21404 < len__8981__auto___21403)){
args__8988__auto__.push((arguments[i__8982__auto___21404]));

var G__21405 = (i__8982__auto___21404 + (1));
i__8982__auto___21404 = G__21405;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq21395){
var G__21396 = cljs.core.first(seq21395);
var seq21395__$1 = cljs.core.next(seq21395);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__21396,seq21395__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21406 = arguments.length;
var i__8982__auto___21407 = (0);
while(true){
if((i__8982__auto___21407 < len__8981__auto___21406)){
args__8988__auto__.push((arguments[i__8982__auto___21407]));

var G__21408 = (i__8982__auto___21407 + (1));
i__8982__auto___21407 = G__21408;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq21397){
var G__21398 = cljs.core.first(seq21397);
var seq21397__$1 = cljs.core.next(seq21397);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__21398,seq21397__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21409 = arguments.length;
var i__8982__auto___21410 = (0);
while(true){
if((i__8982__auto___21410 < len__8981__auto___21409)){
args__8988__auto__.push((arguments[i__8982__auto___21410]));

var G__21411 = (i__8982__auto___21410 + (1));
i__8982__auto___21410 = G__21411;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq21399){
var G__21400 = cljs.core.first(seq21399);
var seq21399__$1 = cljs.core.next(seq21399);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__21400,seq21399__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21412 = arguments.length;
var i__8982__auto___21413 = (0);
while(true){
if((i__8982__auto___21413 < len__8981__auto___21412)){
args__8988__auto__.push((arguments[i__8982__auto___21413]));

var G__21414 = (i__8982__auto___21413 + (1));
i__8982__auto___21413 = G__21414;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq21401){
var G__21402 = cljs.core.first(seq21401);
var seq21401__$1 = cljs.core.next(seq21401);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__21402,seq21401__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21423 = arguments.length;
var i__8982__auto___21424 = (0);
while(true){
if((i__8982__auto___21424 < len__8981__auto___21423)){
args__8988__auto__.push((arguments[i__8982__auto___21424]));

var G__21425 = (i__8982__auto___21424 + (1));
i__8982__auto___21424 = G__21425;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq21415){
var G__21416 = cljs.core.first(seq21415);
var seq21415__$1 = cljs.core.next(seq21415);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__21416,seq21415__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21426 = arguments.length;
var i__8982__auto___21427 = (0);
while(true){
if((i__8982__auto___21427 < len__8981__auto___21426)){
args__8988__auto__.push((arguments[i__8982__auto___21427]));

var G__21428 = (i__8982__auto___21427 + (1));
i__8982__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq21417){
var G__21418 = cljs.core.first(seq21417);
var seq21417__$1 = cljs.core.next(seq21417);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21418,seq21417__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21429 = arguments.length;
var i__8982__auto___21430 = (0);
while(true){
if((i__8982__auto___21430 < len__8981__auto___21429)){
args__8988__auto__.push((arguments[i__8982__auto___21430]));

var G__21431 = (i__8982__auto___21430 + (1));
i__8982__auto___21430 = G__21431;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq21419){
var G__21420 = cljs.core.first(seq21419);
var seq21419__$1 = cljs.core.next(seq21419);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21420,seq21419__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21432 = arguments.length;
var i__8982__auto___21433 = (0);
while(true){
if((i__8982__auto___21433 < len__8981__auto___21432)){
args__8988__auto__.push((arguments[i__8982__auto___21433]));

var G__21434 = (i__8982__auto___21433 + (1));
i__8982__auto___21433 = G__21434;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq21421){
var G__21422 = cljs.core.first(seq21421);
var seq21421__$1 = cljs.core.next(seq21421);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21422,seq21421__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21443 = arguments.length;
var i__8982__auto___21444 = (0);
while(true){
if((i__8982__auto___21444 < len__8981__auto___21443)){
args__8988__auto__.push((arguments[i__8982__auto___21444]));

var G__21445 = (i__8982__auto___21444 + (1));
i__8982__auto___21444 = G__21445;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq21435){
var G__21436 = cljs.core.first(seq21435);
var seq21435__$1 = cljs.core.next(seq21435);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__21436,seq21435__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21446 = arguments.length;
var i__8982__auto___21447 = (0);
while(true){
if((i__8982__auto___21447 < len__8981__auto___21446)){
args__8988__auto__.push((arguments[i__8982__auto___21447]));

var G__21448 = (i__8982__auto___21447 + (1));
i__8982__auto___21447 = G__21448;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq21437){
var G__21438 = cljs.core.first(seq21437);
var seq21437__$1 = cljs.core.next(seq21437);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21438,seq21437__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21449 = arguments.length;
var i__8982__auto___21450 = (0);
while(true){
if((i__8982__auto___21450 < len__8981__auto___21449)){
args__8988__auto__.push((arguments[i__8982__auto___21450]));

var G__21451 = (i__8982__auto___21450 + (1));
i__8982__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq21439){
var G__21440 = cljs.core.first(seq21439);
var seq21439__$1 = cljs.core.next(seq21439);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21440,seq21439__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21452 = arguments.length;
var i__8982__auto___21453 = (0);
while(true){
if((i__8982__auto___21453 < len__8981__auto___21452)){
args__8988__auto__.push((arguments[i__8982__auto___21453]));

var G__21454 = (i__8982__auto___21453 + (1));
i__8982__auto___21453 = G__21454;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq21441){
var G__21442 = cljs.core.first(seq21441);
var seq21441__$1 = cljs.core.next(seq21441);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21442,seq21441__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21463 = arguments.length;
var i__8982__auto___21464 = (0);
while(true){
if((i__8982__auto___21464 < len__8981__auto___21463)){
args__8988__auto__.push((arguments[i__8982__auto___21464]));

var G__21465 = (i__8982__auto___21464 + (1));
i__8982__auto___21464 = G__21465;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21290__auto__,rest__21291__auto__){
var convert_case__21292__auto__ = (function (p1__21289__21293__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__21289__21293__auto__,cljs.core.array_seq([rest__21291__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21290__auto__,convert_case__21292__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq21455){
var G__21456 = cljs.core.first(seq21455);
var seq21455__$1 = cljs.core.next(seq21455);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__21456,seq21455__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21466 = arguments.length;
var i__8982__auto___21467 = (0);
while(true){
if((i__8982__auto___21467 < len__8981__auto___21466)){
args__8988__auto__.push((arguments[i__8982__auto___21467]));

var G__21468 = (i__8982__auto___21467 + (1));
i__8982__auto___21467 = G__21468;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq21457){
var G__21458 = cljs.core.first(seq21457);
var seq21457__$1 = cljs.core.next(seq21457);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21458,seq21457__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21469 = arguments.length;
var i__8982__auto___21470 = (0);
while(true){
if((i__8982__auto___21470 < len__8981__auto___21469)){
args__8988__auto__.push((arguments[i__8982__auto___21470]));

var G__21471 = (i__8982__auto___21470 + (1));
i__8982__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq21459){
var G__21460 = cljs.core.first(seq21459);
var seq21459__$1 = cljs.core.next(seq21459);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21460,seq21459__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21472 = arguments.length;
var i__8982__auto___21473 = (0);
while(true){
if((i__8982__auto___21473 < len__8981__auto___21472)){
args__8988__auto__.push((arguments[i__8982__auto___21473]));

var G__21474 = (i__8982__auto___21473 + (1));
i__8982__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21295__auto__,rest__21296__auto__){
if(!((s__21295__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21295__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21295__auto__),cljs.core.array_seq([rest__21296__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq21461){
var G__21462 = cljs.core.first(seq21461);
var seq21461__$1 = cljs.core.next(seq21461);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21462,seq21461__$1);
});

