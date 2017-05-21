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
var len__8981__auto___21360 = arguments.length;
var i__8982__auto___21361 = (0);
while(true){
if((i__8982__auto___21361 < len__8981__auto___21360)){
args__8988__auto__.push((arguments[i__8982__auto___21361]));

var G__21362 = (i__8982__auto___21361 + (1));
i__8982__auto___21361 = G__21362;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq21355){
var G__21356 = cljs.core.first(seq21355);
var seq21355__$1 = cljs.core.next(seq21355);
var G__21357 = cljs.core.first(seq21355__$1);
var seq21355__$2 = cljs.core.next(seq21355__$1);
var G__21358 = cljs.core.first(seq21355__$2);
var seq21355__$3 = cljs.core.next(seq21355__$2);
var G__21359 = cljs.core.first(seq21355__$3);
var seq21355__$4 = cljs.core.next(seq21355__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21356,G__21357,G__21358,G__21359,seq21355__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21371 = arguments.length;
var i__8982__auto___21372 = (0);
while(true){
if((i__8982__auto___21372 < len__8981__auto___21371)){
args__8988__auto__.push((arguments[i__8982__auto___21372]));

var G__21373 = (i__8982__auto___21372 + (1));
i__8982__auto___21372 = G__21373;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq21363){
var G__21364 = cljs.core.first(seq21363);
var seq21363__$1 = cljs.core.next(seq21363);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__21364,seq21363__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21374 = arguments.length;
var i__8982__auto___21375 = (0);
while(true){
if((i__8982__auto___21375 < len__8981__auto___21374)){
args__8988__auto__.push((arguments[i__8982__auto___21375]));

var G__21376 = (i__8982__auto___21375 + (1));
i__8982__auto___21375 = G__21376;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq21365){
var G__21366 = cljs.core.first(seq21365);
var seq21365__$1 = cljs.core.next(seq21365);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21366,seq21365__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21377 = arguments.length;
var i__8982__auto___21378 = (0);
while(true){
if((i__8982__auto___21378 < len__8981__auto___21377)){
args__8988__auto__.push((arguments[i__8982__auto___21378]));

var G__21379 = (i__8982__auto___21378 + (1));
i__8982__auto___21378 = G__21379;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq21367){
var G__21368 = cljs.core.first(seq21367);
var seq21367__$1 = cljs.core.next(seq21367);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21368,seq21367__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21380 = arguments.length;
var i__8982__auto___21381 = (0);
while(true){
if((i__8982__auto___21381 < len__8981__auto___21380)){
args__8988__auto__.push((arguments[i__8982__auto___21381]));

var G__21382 = (i__8982__auto___21381 + (1));
i__8982__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq21369){
var G__21370 = cljs.core.first(seq21369);
var seq21369__$1 = cljs.core.next(seq21369);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21370,seq21369__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21391 = arguments.length;
var i__8982__auto___21392 = (0);
while(true){
if((i__8982__auto___21392 < len__8981__auto___21391)){
args__8988__auto__.push((arguments[i__8982__auto___21392]));

var G__21393 = (i__8982__auto___21392 + (1));
i__8982__auto___21392 = G__21393;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq21383){
var G__21384 = cljs.core.first(seq21383);
var seq21383__$1 = cljs.core.next(seq21383);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__21384,seq21383__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21394 = arguments.length;
var i__8982__auto___21395 = (0);
while(true){
if((i__8982__auto___21395 < len__8981__auto___21394)){
args__8988__auto__.push((arguments[i__8982__auto___21395]));

var G__21396 = (i__8982__auto___21395 + (1));
i__8982__auto___21395 = G__21396;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq21385){
var G__21386 = cljs.core.first(seq21385);
var seq21385__$1 = cljs.core.next(seq21385);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21386,seq21385__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21397 = arguments.length;
var i__8982__auto___21398 = (0);
while(true){
if((i__8982__auto___21398 < len__8981__auto___21397)){
args__8988__auto__.push((arguments[i__8982__auto___21398]));

var G__21399 = (i__8982__auto___21398 + (1));
i__8982__auto___21398 = G__21399;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq21387){
var G__21388 = cljs.core.first(seq21387);
var seq21387__$1 = cljs.core.next(seq21387);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21388,seq21387__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21400 = arguments.length;
var i__8982__auto___21401 = (0);
while(true){
if((i__8982__auto___21401 < len__8981__auto___21400)){
args__8988__auto__.push((arguments[i__8982__auto___21401]));

var G__21402 = (i__8982__auto___21401 + (1));
i__8982__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq21389){
var G__21390 = cljs.core.first(seq21389);
var seq21389__$1 = cljs.core.next(seq21389);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21390,seq21389__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21411 = arguments.length;
var i__8982__auto___21412 = (0);
while(true){
if((i__8982__auto___21412 < len__8981__auto___21411)){
args__8988__auto__.push((arguments[i__8982__auto___21412]));

var G__21413 = (i__8982__auto___21412 + (1));
i__8982__auto___21412 = G__21413;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq21403){
var G__21404 = cljs.core.first(seq21403);
var seq21403__$1 = cljs.core.next(seq21403);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__21404,seq21403__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21414 = arguments.length;
var i__8982__auto___21415 = (0);
while(true){
if((i__8982__auto___21415 < len__8981__auto___21414)){
args__8988__auto__.push((arguments[i__8982__auto___21415]));

var G__21416 = (i__8982__auto___21415 + (1));
i__8982__auto___21415 = G__21416;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq21405){
var G__21406 = cljs.core.first(seq21405);
var seq21405__$1 = cljs.core.next(seq21405);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21406,seq21405__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21417 = arguments.length;
var i__8982__auto___21418 = (0);
while(true){
if((i__8982__auto___21418 < len__8981__auto___21417)){
args__8988__auto__.push((arguments[i__8982__auto___21418]));

var G__21419 = (i__8982__auto___21418 + (1));
i__8982__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq21407){
var G__21408 = cljs.core.first(seq21407);
var seq21407__$1 = cljs.core.next(seq21407);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21408,seq21407__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21420 = arguments.length;
var i__8982__auto___21421 = (0);
while(true){
if((i__8982__auto___21421 < len__8981__auto___21420)){
args__8988__auto__.push((arguments[i__8982__auto___21421]));

var G__21422 = (i__8982__auto___21421 + (1));
i__8982__auto___21421 = G__21422;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq21409){
var G__21410 = cljs.core.first(seq21409);
var seq21409__$1 = cljs.core.next(seq21409);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21410,seq21409__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21431 = arguments.length;
var i__8982__auto___21432 = (0);
while(true){
if((i__8982__auto___21432 < len__8981__auto___21431)){
args__8988__auto__.push((arguments[i__8982__auto___21432]));

var G__21433 = (i__8982__auto___21432 + (1));
i__8982__auto___21432 = G__21433;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq21423){
var G__21424 = cljs.core.first(seq21423);
var seq21423__$1 = cljs.core.next(seq21423);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__21424,seq21423__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21434 = arguments.length;
var i__8982__auto___21435 = (0);
while(true){
if((i__8982__auto___21435 < len__8981__auto___21434)){
args__8988__auto__.push((arguments[i__8982__auto___21435]));

var G__21436 = (i__8982__auto___21435 + (1));
i__8982__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq21425){
var G__21426 = cljs.core.first(seq21425);
var seq21425__$1 = cljs.core.next(seq21425);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__21426,seq21425__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21437 = arguments.length;
var i__8982__auto___21438 = (0);
while(true){
if((i__8982__auto___21438 < len__8981__auto___21437)){
args__8988__auto__.push((arguments[i__8982__auto___21438]));

var G__21439 = (i__8982__auto___21438 + (1));
i__8982__auto___21438 = G__21439;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq21427){
var G__21428 = cljs.core.first(seq21427);
var seq21427__$1 = cljs.core.next(seq21427);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__21428,seq21427__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21440 = arguments.length;
var i__8982__auto___21441 = (0);
while(true){
if((i__8982__auto___21441 < len__8981__auto___21440)){
args__8988__auto__.push((arguments[i__8982__auto___21441]));

var G__21442 = (i__8982__auto___21441 + (1));
i__8982__auto___21441 = G__21442;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq21429){
var G__21430 = cljs.core.first(seq21429);
var seq21429__$1 = cljs.core.next(seq21429);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__21430,seq21429__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21451 = arguments.length;
var i__8982__auto___21452 = (0);
while(true){
if((i__8982__auto___21452 < len__8981__auto___21451)){
args__8988__auto__.push((arguments[i__8982__auto___21452]));

var G__21453 = (i__8982__auto___21452 + (1));
i__8982__auto___21452 = G__21453;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq21443){
var G__21444 = cljs.core.first(seq21443);
var seq21443__$1 = cljs.core.next(seq21443);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__21444,seq21443__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21454 = arguments.length;
var i__8982__auto___21455 = (0);
while(true){
if((i__8982__auto___21455 < len__8981__auto___21454)){
args__8988__auto__.push((arguments[i__8982__auto___21455]));

var G__21456 = (i__8982__auto___21455 + (1));
i__8982__auto___21455 = G__21456;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq21445){
var G__21446 = cljs.core.first(seq21445);
var seq21445__$1 = cljs.core.next(seq21445);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21446,seq21445__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21457 = arguments.length;
var i__8982__auto___21458 = (0);
while(true){
if((i__8982__auto___21458 < len__8981__auto___21457)){
args__8988__auto__.push((arguments[i__8982__auto___21458]));

var G__21459 = (i__8982__auto___21458 + (1));
i__8982__auto___21458 = G__21459;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq21447){
var G__21448 = cljs.core.first(seq21447);
var seq21447__$1 = cljs.core.next(seq21447);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21448,seq21447__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21460 = arguments.length;
var i__8982__auto___21461 = (0);
while(true){
if((i__8982__auto___21461 < len__8981__auto___21460)){
args__8988__auto__.push((arguments[i__8982__auto___21461]));

var G__21462 = (i__8982__auto___21461 + (1));
i__8982__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq21449){
var G__21450 = cljs.core.first(seq21449);
var seq21449__$1 = cljs.core.next(seq21449);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21450,seq21449__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21471 = arguments.length;
var i__8982__auto___21472 = (0);
while(true){
if((i__8982__auto___21472 < len__8981__auto___21471)){
args__8988__auto__.push((arguments[i__8982__auto___21472]));

var G__21473 = (i__8982__auto___21472 + (1));
i__8982__auto___21472 = G__21473;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq21463){
var G__21464 = cljs.core.first(seq21463);
var seq21463__$1 = cljs.core.next(seq21463);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__21464,seq21463__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21474 = arguments.length;
var i__8982__auto___21475 = (0);
while(true){
if((i__8982__auto___21475 < len__8981__auto___21474)){
args__8988__auto__.push((arguments[i__8982__auto___21475]));

var G__21476 = (i__8982__auto___21475 + (1));
i__8982__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq21465){
var G__21466 = cljs.core.first(seq21465);
var seq21465__$1 = cljs.core.next(seq21465);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21466,seq21465__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21477 = arguments.length;
var i__8982__auto___21478 = (0);
while(true){
if((i__8982__auto___21478 < len__8981__auto___21477)){
args__8988__auto__.push((arguments[i__8982__auto___21478]));

var G__21479 = (i__8982__auto___21478 + (1));
i__8982__auto___21478 = G__21479;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq21467){
var G__21468 = cljs.core.first(seq21467);
var seq21467__$1 = cljs.core.next(seq21467);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21468,seq21467__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21480 = arguments.length;
var i__8982__auto___21481 = (0);
while(true){
if((i__8982__auto___21481 < len__8981__auto___21480)){
args__8988__auto__.push((arguments[i__8982__auto___21481]));

var G__21482 = (i__8982__auto___21481 + (1));
i__8982__auto___21481 = G__21482;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq21469){
var G__21470 = cljs.core.first(seq21469);
var seq21469__$1 = cljs.core.next(seq21469);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21470,seq21469__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21491 = arguments.length;
var i__8982__auto___21492 = (0);
while(true){
if((i__8982__auto___21492 < len__8981__auto___21491)){
args__8988__auto__.push((arguments[i__8982__auto___21492]));

var G__21493 = (i__8982__auto___21492 + (1));
i__8982__auto___21492 = G__21493;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21318__auto__,rest__21319__auto__){
var convert_case__21320__auto__ = (function (p1__21317__21321__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__21317__21321__auto__,cljs.core.array_seq([rest__21319__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21318__auto__,convert_case__21320__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq21483){
var G__21484 = cljs.core.first(seq21483);
var seq21483__$1 = cljs.core.next(seq21483);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__21484,seq21483__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21494 = arguments.length;
var i__8982__auto___21495 = (0);
while(true){
if((i__8982__auto___21495 < len__8981__auto___21494)){
args__8988__auto__.push((arguments[i__8982__auto___21495]));

var G__21496 = (i__8982__auto___21495 + (1));
i__8982__auto___21495 = G__21496;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq21485){
var G__21486 = cljs.core.first(seq21485);
var seq21485__$1 = cljs.core.next(seq21485);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21486,seq21485__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21497 = arguments.length;
var i__8982__auto___21498 = (0);
while(true){
if((i__8982__auto___21498 < len__8981__auto___21497)){
args__8988__auto__.push((arguments[i__8982__auto___21498]));

var G__21499 = (i__8982__auto___21498 + (1));
i__8982__auto___21498 = G__21499;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq21487){
var G__21488 = cljs.core.first(seq21487);
var seq21487__$1 = cljs.core.next(seq21487);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21488,seq21487__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21500 = arguments.length;
var i__8982__auto___21501 = (0);
while(true){
if((i__8982__auto___21501 < len__8981__auto___21500)){
args__8988__auto__.push((arguments[i__8982__auto___21501]));

var G__21502 = (i__8982__auto___21501 + (1));
i__8982__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21323__auto__,rest__21324__auto__){
if(!((s__21323__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21323__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21323__auto__),cljs.core.array_seq([rest__21324__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq21489){
var G__21490 = cljs.core.first(seq21489);
var seq21489__$1 = cljs.core.next(seq21489);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21490,seq21489__$1);
});

