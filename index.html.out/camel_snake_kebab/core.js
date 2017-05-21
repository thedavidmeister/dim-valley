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

var argseq__8989__auto__ = ((((4) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8989__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.array_seq([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq21447){
var G__21448 = cljs.core.first(seq21447);
var seq21447__$1 = cljs.core.next(seq21447);
var G__21449 = cljs.core.first(seq21447__$1);
var seq21447__$2 = cljs.core.next(seq21447__$1);
var G__21450 = cljs.core.first(seq21447__$2);
var seq21447__$3 = cljs.core.next(seq21447__$2);
var G__21451 = cljs.core.first(seq21447__$3);
var seq21447__$4 = cljs.core.next(seq21447__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21448,G__21449,G__21450,G__21451,seq21447__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq21455){
var G__21456 = cljs.core.first(seq21455);
var seq21455__$1 = cljs.core.next(seq21455);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__21456,seq21455__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq21457){
var G__21458 = cljs.core.first(seq21457);
var seq21457__$1 = cljs.core.next(seq21457);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21458,seq21457__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq21459){
var G__21460 = cljs.core.first(seq21459);
var seq21459__$1 = cljs.core.next(seq21459);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21460,seq21459__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq21461){
var G__21462 = cljs.core.first(seq21461);
var seq21461__$1 = cljs.core.next(seq21461);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21462,seq21461__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21483 = arguments.length;
var i__8982__auto___21484 = (0);
while(true){
if((i__8982__auto___21484 < len__8981__auto___21483)){
args__8988__auto__.push((arguments[i__8982__auto___21484]));

var G__21485 = (i__8982__auto___21484 + (1));
i__8982__auto___21484 = G__21485;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq21475){
var G__21476 = cljs.core.first(seq21475);
var seq21475__$1 = cljs.core.next(seq21475);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__21476,seq21475__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21486 = arguments.length;
var i__8982__auto___21487 = (0);
while(true){
if((i__8982__auto___21487 < len__8981__auto___21486)){
args__8988__auto__.push((arguments[i__8982__auto___21487]));

var G__21488 = (i__8982__auto___21487 + (1));
i__8982__auto___21487 = G__21488;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq21477){
var G__21478 = cljs.core.first(seq21477);
var seq21477__$1 = cljs.core.next(seq21477);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21478,seq21477__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21489 = arguments.length;
var i__8982__auto___21490 = (0);
while(true){
if((i__8982__auto___21490 < len__8981__auto___21489)){
args__8988__auto__.push((arguments[i__8982__auto___21490]));

var G__21491 = (i__8982__auto___21490 + (1));
i__8982__auto___21490 = G__21491;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq21479){
var G__21480 = cljs.core.first(seq21479);
var seq21479__$1 = cljs.core.next(seq21479);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21480,seq21479__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21492 = arguments.length;
var i__8982__auto___21493 = (0);
while(true){
if((i__8982__auto___21493 < len__8981__auto___21492)){
args__8988__auto__.push((arguments[i__8982__auto___21493]));

var G__21494 = (i__8982__auto___21493 + (1));
i__8982__auto___21493 = G__21494;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq21481){
var G__21482 = cljs.core.first(seq21481);
var seq21481__$1 = cljs.core.next(seq21481);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21482,seq21481__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21503 = arguments.length;
var i__8982__auto___21504 = (0);
while(true){
if((i__8982__auto___21504 < len__8981__auto___21503)){
args__8988__auto__.push((arguments[i__8982__auto___21504]));

var G__21505 = (i__8982__auto___21504 + (1));
i__8982__auto___21504 = G__21505;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq21495){
var G__21496 = cljs.core.first(seq21495);
var seq21495__$1 = cljs.core.next(seq21495);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__21496,seq21495__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21506 = arguments.length;
var i__8982__auto___21507 = (0);
while(true){
if((i__8982__auto___21507 < len__8981__auto___21506)){
args__8988__auto__.push((arguments[i__8982__auto___21507]));

var G__21508 = (i__8982__auto___21507 + (1));
i__8982__auto___21507 = G__21508;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq21497){
var G__21498 = cljs.core.first(seq21497);
var seq21497__$1 = cljs.core.next(seq21497);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21498,seq21497__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21509 = arguments.length;
var i__8982__auto___21510 = (0);
while(true){
if((i__8982__auto___21510 < len__8981__auto___21509)){
args__8988__auto__.push((arguments[i__8982__auto___21510]));

var G__21511 = (i__8982__auto___21510 + (1));
i__8982__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq21499){
var G__21500 = cljs.core.first(seq21499);
var seq21499__$1 = cljs.core.next(seq21499);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21500,seq21499__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21512 = arguments.length;
var i__8982__auto___21513 = (0);
while(true){
if((i__8982__auto___21513 < len__8981__auto___21512)){
args__8988__auto__.push((arguments[i__8982__auto___21513]));

var G__21514 = (i__8982__auto___21513 + (1));
i__8982__auto___21513 = G__21514;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq21501){
var G__21502 = cljs.core.first(seq21501);
var seq21501__$1 = cljs.core.next(seq21501);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21502,seq21501__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21523 = arguments.length;
var i__8982__auto___21524 = (0);
while(true){
if((i__8982__auto___21524 < len__8981__auto___21523)){
args__8988__auto__.push((arguments[i__8982__auto___21524]));

var G__21525 = (i__8982__auto___21524 + (1));
i__8982__auto___21524 = G__21525;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq21515){
var G__21516 = cljs.core.first(seq21515);
var seq21515__$1 = cljs.core.next(seq21515);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__21516,seq21515__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21526 = arguments.length;
var i__8982__auto___21527 = (0);
while(true){
if((i__8982__auto___21527 < len__8981__auto___21526)){
args__8988__auto__.push((arguments[i__8982__auto___21527]));

var G__21528 = (i__8982__auto___21527 + (1));
i__8982__auto___21527 = G__21528;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq21517){
var G__21518 = cljs.core.first(seq21517);
var seq21517__$1 = cljs.core.next(seq21517);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__21518,seq21517__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21529 = arguments.length;
var i__8982__auto___21530 = (0);
while(true){
if((i__8982__auto___21530 < len__8981__auto___21529)){
args__8988__auto__.push((arguments[i__8982__auto___21530]));

var G__21531 = (i__8982__auto___21530 + (1));
i__8982__auto___21530 = G__21531;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq21519){
var G__21520 = cljs.core.first(seq21519);
var seq21519__$1 = cljs.core.next(seq21519);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__21520,seq21519__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21532 = arguments.length;
var i__8982__auto___21533 = (0);
while(true){
if((i__8982__auto___21533 < len__8981__auto___21532)){
args__8988__auto__.push((arguments[i__8982__auto___21533]));

var G__21534 = (i__8982__auto___21533 + (1));
i__8982__auto___21533 = G__21534;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq21521){
var G__21522 = cljs.core.first(seq21521);
var seq21521__$1 = cljs.core.next(seq21521);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__21522,seq21521__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21543 = arguments.length;
var i__8982__auto___21544 = (0);
while(true){
if((i__8982__auto___21544 < len__8981__auto___21543)){
args__8988__auto__.push((arguments[i__8982__auto___21544]));

var G__21545 = (i__8982__auto___21544 + (1));
i__8982__auto___21544 = G__21545;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq21535){
var G__21536 = cljs.core.first(seq21535);
var seq21535__$1 = cljs.core.next(seq21535);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__21536,seq21535__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21546 = arguments.length;
var i__8982__auto___21547 = (0);
while(true){
if((i__8982__auto___21547 < len__8981__auto___21546)){
args__8988__auto__.push((arguments[i__8982__auto___21547]));

var G__21548 = (i__8982__auto___21547 + (1));
i__8982__auto___21547 = G__21548;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq21537){
var G__21538 = cljs.core.first(seq21537);
var seq21537__$1 = cljs.core.next(seq21537);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21538,seq21537__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21549 = arguments.length;
var i__8982__auto___21550 = (0);
while(true){
if((i__8982__auto___21550 < len__8981__auto___21549)){
args__8988__auto__.push((arguments[i__8982__auto___21550]));

var G__21551 = (i__8982__auto___21550 + (1));
i__8982__auto___21550 = G__21551;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq21539){
var G__21540 = cljs.core.first(seq21539);
var seq21539__$1 = cljs.core.next(seq21539);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21540,seq21539__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21552 = arguments.length;
var i__8982__auto___21553 = (0);
while(true){
if((i__8982__auto___21553 < len__8981__auto___21552)){
args__8988__auto__.push((arguments[i__8982__auto___21553]));

var G__21554 = (i__8982__auto___21553 + (1));
i__8982__auto___21553 = G__21554;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq21541){
var G__21542 = cljs.core.first(seq21541);
var seq21541__$1 = cljs.core.next(seq21541);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21542,seq21541__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21563 = arguments.length;
var i__8982__auto___21564 = (0);
while(true){
if((i__8982__auto___21564 < len__8981__auto___21563)){
args__8988__auto__.push((arguments[i__8982__auto___21564]));

var G__21565 = (i__8982__auto___21564 + (1));
i__8982__auto___21564 = G__21565;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq21555){
var G__21556 = cljs.core.first(seq21555);
var seq21555__$1 = cljs.core.next(seq21555);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__21556,seq21555__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21566 = arguments.length;
var i__8982__auto___21567 = (0);
while(true){
if((i__8982__auto___21567 < len__8981__auto___21566)){
args__8988__auto__.push((arguments[i__8982__auto___21567]));

var G__21568 = (i__8982__auto___21567 + (1));
i__8982__auto___21567 = G__21568;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq21557){
var G__21558 = cljs.core.first(seq21557);
var seq21557__$1 = cljs.core.next(seq21557);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21558,seq21557__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21569 = arguments.length;
var i__8982__auto___21570 = (0);
while(true){
if((i__8982__auto___21570 < len__8981__auto___21569)){
args__8988__auto__.push((arguments[i__8982__auto___21570]));

var G__21571 = (i__8982__auto___21570 + (1));
i__8982__auto___21570 = G__21571;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq21559){
var G__21560 = cljs.core.first(seq21559);
var seq21559__$1 = cljs.core.next(seq21559);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21560,seq21559__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21572 = arguments.length;
var i__8982__auto___21573 = (0);
while(true){
if((i__8982__auto___21573 < len__8981__auto___21572)){
args__8988__auto__.push((arguments[i__8982__auto___21573]));

var G__21574 = (i__8982__auto___21573 + (1));
i__8982__auto___21573 = G__21574;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq21561){
var G__21562 = cljs.core.first(seq21561);
var seq21561__$1 = cljs.core.next(seq21561);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21562,seq21561__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21583 = arguments.length;
var i__8982__auto___21584 = (0);
while(true){
if((i__8982__auto___21584 < len__8981__auto___21583)){
args__8988__auto__.push((arguments[i__8982__auto___21584]));

var G__21585 = (i__8982__auto___21584 + (1));
i__8982__auto___21584 = G__21585;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21410__auto__,rest__21411__auto__){
var convert_case__21412__auto__ = (function (p1__21409__21413__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__21409__21413__auto__,cljs.core.array_seq([rest__21411__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21410__auto__,convert_case__21412__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq21575){
var G__21576 = cljs.core.first(seq21575);
var seq21575__$1 = cljs.core.next(seq21575);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__21576,seq21575__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21586 = arguments.length;
var i__8982__auto___21587 = (0);
while(true){
if((i__8982__auto___21587 < len__8981__auto___21586)){
args__8988__auto__.push((arguments[i__8982__auto___21587]));

var G__21588 = (i__8982__auto___21587 + (1));
i__8982__auto___21587 = G__21588;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq21577){
var G__21578 = cljs.core.first(seq21577);
var seq21577__$1 = cljs.core.next(seq21577);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21578,seq21577__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21589 = arguments.length;
var i__8982__auto___21590 = (0);
while(true){
if((i__8982__auto___21590 < len__8981__auto___21589)){
args__8988__auto__.push((arguments[i__8982__auto___21590]));

var G__21591 = (i__8982__auto___21590 + (1));
i__8982__auto___21590 = G__21591;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq21579){
var G__21580 = cljs.core.first(seq21579);
var seq21579__$1 = cljs.core.next(seq21579);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21580,seq21579__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21592 = arguments.length;
var i__8982__auto___21593 = (0);
while(true){
if((i__8982__auto___21593 < len__8981__auto___21592)){
args__8988__auto__.push((arguments[i__8982__auto___21593]));

var G__21594 = (i__8982__auto___21593 + (1));
i__8982__auto___21593 = G__21594;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21415__auto__,rest__21416__auto__){
if(!((s__21415__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21415__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21415__auto__),cljs.core.array_seq([rest__21416__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq21581){
var G__21582 = cljs.core.first(seq21581);
var seq21581__$1 = cljs.core.next(seq21581);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21582,seq21581__$1);
});

