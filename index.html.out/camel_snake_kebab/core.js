// Compiled by ClojureScript 1.9.293 {}
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
var args__7957__auto__ = [];
var len__7950__auto___9489 = arguments.length;
var i__7951__auto___9490 = (0);
while(true){
if((i__7951__auto___9490 < len__7950__auto___9489)){
args__7957__auto__.push((arguments[i__7951__auto___9490]));

var G__9491 = (i__7951__auto___9490 + (1));
i__7951__auto___9490 = G__9491;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq9484){
var G__9485 = cljs.core.first.call(null,seq9484);
var seq9484__$1 = cljs.core.next.call(null,seq9484);
var G__9486 = cljs.core.first.call(null,seq9484__$1);
var seq9484__$2 = cljs.core.next.call(null,seq9484__$1);
var G__9487 = cljs.core.first.call(null,seq9484__$2);
var seq9484__$3 = cljs.core.next.call(null,seq9484__$2);
var G__9488 = cljs.core.first.call(null,seq9484__$3);
var seq9484__$4 = cljs.core.next.call(null,seq9484__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9485,G__9486,G__9487,G__9488,seq9484__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9500 = arguments.length;
var i__7951__auto___9501 = (0);
while(true){
if((i__7951__auto___9501 < len__7950__auto___9500)){
args__7957__auto__.push((arguments[i__7951__auto___9501]));

var G__9502 = (i__7951__auto___9501 + (1));
i__7951__auto___9501 = G__9502;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq9492){
var G__9493 = cljs.core.first.call(null,seq9492);
var seq9492__$1 = cljs.core.next.call(null,seq9492);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__9493,seq9492__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9503 = arguments.length;
var i__7951__auto___9504 = (0);
while(true){
if((i__7951__auto___9504 < len__7950__auto___9503)){
args__7957__auto__.push((arguments[i__7951__auto___9504]));

var G__9505 = (i__7951__auto___9504 + (1));
i__7951__auto___9504 = G__9505;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq9494){
var G__9495 = cljs.core.first.call(null,seq9494);
var seq9494__$1 = cljs.core.next.call(null,seq9494);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9495,seq9494__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9506 = arguments.length;
var i__7951__auto___9507 = (0);
while(true){
if((i__7951__auto___9507 < len__7950__auto___9506)){
args__7957__auto__.push((arguments[i__7951__auto___9507]));

var G__9508 = (i__7951__auto___9507 + (1));
i__7951__auto___9507 = G__9508;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq9496){
var G__9497 = cljs.core.first.call(null,seq9496);
var seq9496__$1 = cljs.core.next.call(null,seq9496);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9497,seq9496__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9509 = arguments.length;
var i__7951__auto___9510 = (0);
while(true){
if((i__7951__auto___9510 < len__7950__auto___9509)){
args__7957__auto__.push((arguments[i__7951__auto___9510]));

var G__9511 = (i__7951__auto___9510 + (1));
i__7951__auto___9510 = G__9511;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq9498){
var G__9499 = cljs.core.first.call(null,seq9498);
var seq9498__$1 = cljs.core.next.call(null,seq9498);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9499,seq9498__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9520 = arguments.length;
var i__7951__auto___9521 = (0);
while(true){
if((i__7951__auto___9521 < len__7950__auto___9520)){
args__7957__auto__.push((arguments[i__7951__auto___9521]));

var G__9522 = (i__7951__auto___9521 + (1));
i__7951__auto___9521 = G__9522;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq9512){
var G__9513 = cljs.core.first.call(null,seq9512);
var seq9512__$1 = cljs.core.next.call(null,seq9512);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__9513,seq9512__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9523 = arguments.length;
var i__7951__auto___9524 = (0);
while(true){
if((i__7951__auto___9524 < len__7950__auto___9523)){
args__7957__auto__.push((arguments[i__7951__auto___9524]));

var G__9525 = (i__7951__auto___9524 + (1));
i__7951__auto___9524 = G__9525;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq9514){
var G__9515 = cljs.core.first.call(null,seq9514);
var seq9514__$1 = cljs.core.next.call(null,seq9514);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9515,seq9514__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9526 = arguments.length;
var i__7951__auto___9527 = (0);
while(true){
if((i__7951__auto___9527 < len__7950__auto___9526)){
args__7957__auto__.push((arguments[i__7951__auto___9527]));

var G__9528 = (i__7951__auto___9527 + (1));
i__7951__auto___9527 = G__9528;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq9516){
var G__9517 = cljs.core.first.call(null,seq9516);
var seq9516__$1 = cljs.core.next.call(null,seq9516);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9517,seq9516__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9529 = arguments.length;
var i__7951__auto___9530 = (0);
while(true){
if((i__7951__auto___9530 < len__7950__auto___9529)){
args__7957__auto__.push((arguments[i__7951__auto___9530]));

var G__9531 = (i__7951__auto___9530 + (1));
i__7951__auto___9530 = G__9531;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq9518){
var G__9519 = cljs.core.first.call(null,seq9518);
var seq9518__$1 = cljs.core.next.call(null,seq9518);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9519,seq9518__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9540 = arguments.length;
var i__7951__auto___9541 = (0);
while(true){
if((i__7951__auto___9541 < len__7950__auto___9540)){
args__7957__auto__.push((arguments[i__7951__auto___9541]));

var G__9542 = (i__7951__auto___9541 + (1));
i__7951__auto___9541 = G__9542;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq9532){
var G__9533 = cljs.core.first.call(null,seq9532);
var seq9532__$1 = cljs.core.next.call(null,seq9532);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__9533,seq9532__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9543 = arguments.length;
var i__7951__auto___9544 = (0);
while(true){
if((i__7951__auto___9544 < len__7950__auto___9543)){
args__7957__auto__.push((arguments[i__7951__auto___9544]));

var G__9545 = (i__7951__auto___9544 + (1));
i__7951__auto___9544 = G__9545;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq9534){
var G__9535 = cljs.core.first.call(null,seq9534);
var seq9534__$1 = cljs.core.next.call(null,seq9534);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9535,seq9534__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9546 = arguments.length;
var i__7951__auto___9547 = (0);
while(true){
if((i__7951__auto___9547 < len__7950__auto___9546)){
args__7957__auto__.push((arguments[i__7951__auto___9547]));

var G__9548 = (i__7951__auto___9547 + (1));
i__7951__auto___9547 = G__9548;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq9536){
var G__9537 = cljs.core.first.call(null,seq9536);
var seq9536__$1 = cljs.core.next.call(null,seq9536);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9537,seq9536__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9549 = arguments.length;
var i__7951__auto___9550 = (0);
while(true){
if((i__7951__auto___9550 < len__7950__auto___9549)){
args__7957__auto__.push((arguments[i__7951__auto___9550]));

var G__9551 = (i__7951__auto___9550 + (1));
i__7951__auto___9550 = G__9551;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq9538){
var G__9539 = cljs.core.first.call(null,seq9538);
var seq9538__$1 = cljs.core.next.call(null,seq9538);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9539,seq9538__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9560 = arguments.length;
var i__7951__auto___9561 = (0);
while(true){
if((i__7951__auto___9561 < len__7950__auto___9560)){
args__7957__auto__.push((arguments[i__7951__auto___9561]));

var G__9562 = (i__7951__auto___9561 + (1));
i__7951__auto___9561 = G__9562;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq9552){
var G__9553 = cljs.core.first.call(null,seq9552);
var seq9552__$1 = cljs.core.next.call(null,seq9552);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__9553,seq9552__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9563 = arguments.length;
var i__7951__auto___9564 = (0);
while(true){
if((i__7951__auto___9564 < len__7950__auto___9563)){
args__7957__auto__.push((arguments[i__7951__auto___9564]));

var G__9565 = (i__7951__auto___9564 + (1));
i__7951__auto___9564 = G__9565;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq9554){
var G__9555 = cljs.core.first.call(null,seq9554);
var seq9554__$1 = cljs.core.next.call(null,seq9554);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__9555,seq9554__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9566 = arguments.length;
var i__7951__auto___9567 = (0);
while(true){
if((i__7951__auto___9567 < len__7950__auto___9566)){
args__7957__auto__.push((arguments[i__7951__auto___9567]));

var G__9568 = (i__7951__auto___9567 + (1));
i__7951__auto___9567 = G__9568;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq9556){
var G__9557 = cljs.core.first.call(null,seq9556);
var seq9556__$1 = cljs.core.next.call(null,seq9556);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__9557,seq9556__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9569 = arguments.length;
var i__7951__auto___9570 = (0);
while(true){
if((i__7951__auto___9570 < len__7950__auto___9569)){
args__7957__auto__.push((arguments[i__7951__auto___9570]));

var G__9571 = (i__7951__auto___9570 + (1));
i__7951__auto___9570 = G__9571;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq9558){
var G__9559 = cljs.core.first.call(null,seq9558);
var seq9558__$1 = cljs.core.next.call(null,seq9558);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__9559,seq9558__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9580 = arguments.length;
var i__7951__auto___9581 = (0);
while(true){
if((i__7951__auto___9581 < len__7950__auto___9580)){
args__7957__auto__.push((arguments[i__7951__auto___9581]));

var G__9582 = (i__7951__auto___9581 + (1));
i__7951__auto___9581 = G__9582;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq9572){
var G__9573 = cljs.core.first.call(null,seq9572);
var seq9572__$1 = cljs.core.next.call(null,seq9572);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__9573,seq9572__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9583 = arguments.length;
var i__7951__auto___9584 = (0);
while(true){
if((i__7951__auto___9584 < len__7950__auto___9583)){
args__7957__auto__.push((arguments[i__7951__auto___9584]));

var G__9585 = (i__7951__auto___9584 + (1));
i__7951__auto___9584 = G__9585;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq9574){
var G__9575 = cljs.core.first.call(null,seq9574);
var seq9574__$1 = cljs.core.next.call(null,seq9574);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9575,seq9574__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9586 = arguments.length;
var i__7951__auto___9587 = (0);
while(true){
if((i__7951__auto___9587 < len__7950__auto___9586)){
args__7957__auto__.push((arguments[i__7951__auto___9587]));

var G__9588 = (i__7951__auto___9587 + (1));
i__7951__auto___9587 = G__9588;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq9576){
var G__9577 = cljs.core.first.call(null,seq9576);
var seq9576__$1 = cljs.core.next.call(null,seq9576);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9577,seq9576__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9589 = arguments.length;
var i__7951__auto___9590 = (0);
while(true){
if((i__7951__auto___9590 < len__7950__auto___9589)){
args__7957__auto__.push((arguments[i__7951__auto___9590]));

var G__9591 = (i__7951__auto___9590 + (1));
i__7951__auto___9590 = G__9591;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq9578){
var G__9579 = cljs.core.first.call(null,seq9578);
var seq9578__$1 = cljs.core.next.call(null,seq9578);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9579,seq9578__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9600 = arguments.length;
var i__7951__auto___9601 = (0);
while(true){
if((i__7951__auto___9601 < len__7950__auto___9600)){
args__7957__auto__.push((arguments[i__7951__auto___9601]));

var G__9602 = (i__7951__auto___9601 + (1));
i__7951__auto___9601 = G__9602;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq9592){
var G__9593 = cljs.core.first.call(null,seq9592);
var seq9592__$1 = cljs.core.next.call(null,seq9592);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__9593,seq9592__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9603 = arguments.length;
var i__7951__auto___9604 = (0);
while(true){
if((i__7951__auto___9604 < len__7950__auto___9603)){
args__7957__auto__.push((arguments[i__7951__auto___9604]));

var G__9605 = (i__7951__auto___9604 + (1));
i__7951__auto___9604 = G__9605;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq9594){
var G__9595 = cljs.core.first.call(null,seq9594);
var seq9594__$1 = cljs.core.next.call(null,seq9594);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9595,seq9594__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9606 = arguments.length;
var i__7951__auto___9607 = (0);
while(true){
if((i__7951__auto___9607 < len__7950__auto___9606)){
args__7957__auto__.push((arguments[i__7951__auto___9607]));

var G__9608 = (i__7951__auto___9607 + (1));
i__7951__auto___9607 = G__9608;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq9596){
var G__9597 = cljs.core.first.call(null,seq9596);
var seq9596__$1 = cljs.core.next.call(null,seq9596);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9597,seq9596__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9609 = arguments.length;
var i__7951__auto___9610 = (0);
while(true){
if((i__7951__auto___9610 < len__7950__auto___9609)){
args__7957__auto__.push((arguments[i__7951__auto___9610]));

var G__9611 = (i__7951__auto___9610 + (1));
i__7951__auto___9610 = G__9611;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq9598){
var G__9599 = cljs.core.first.call(null,seq9598);
var seq9598__$1 = cljs.core.next.call(null,seq9598);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9599,seq9598__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9620 = arguments.length;
var i__7951__auto___9621 = (0);
while(true){
if((i__7951__auto___9621 < len__7950__auto___9620)){
args__7957__auto__.push((arguments[i__7951__auto___9621]));

var G__9622 = (i__7951__auto___9621 + (1));
i__7951__auto___9621 = G__9622;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9451__auto__,rest__9452__auto__){
var convert_case__9453__auto__ = (function (p1__9450__9454__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__9450__9454__auto__,rest__9452__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9451__auto__,convert_case__9453__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq9612){
var G__9613 = cljs.core.first.call(null,seq9612);
var seq9612__$1 = cljs.core.next.call(null,seq9612);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__9613,seq9612__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9623 = arguments.length;
var i__7951__auto___9624 = (0);
while(true){
if((i__7951__auto___9624 < len__7950__auto___9623)){
args__7957__auto__.push((arguments[i__7951__auto___9624]));

var G__9625 = (i__7951__auto___9624 + (1));
i__7951__auto___9624 = G__9625;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq9614){
var G__9615 = cljs.core.first.call(null,seq9614);
var seq9614__$1 = cljs.core.next.call(null,seq9614);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9615,seq9614__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9626 = arguments.length;
var i__7951__auto___9627 = (0);
while(true){
if((i__7951__auto___9627 < len__7950__auto___9626)){
args__7957__auto__.push((arguments[i__7951__auto___9627]));

var G__9628 = (i__7951__auto___9627 + (1));
i__7951__auto___9627 = G__9628;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq9616){
var G__9617 = cljs.core.first.call(null,seq9616);
var seq9616__$1 = cljs.core.next.call(null,seq9616);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9617,seq9616__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9629 = arguments.length;
var i__7951__auto___9630 = (0);
while(true){
if((i__7951__auto___9630 < len__7950__auto___9629)){
args__7957__auto__.push((arguments[i__7951__auto___9630]));

var G__9631 = (i__7951__auto___9630 + (1));
i__7951__auto___9630 = G__9631;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9456__auto__,rest__9457__auto__){
if(!((s__9456__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9456__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9456__auto__),rest__9457__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq9618){
var G__9619 = cljs.core.first.call(null,seq9618);
var seq9618__$1 = cljs.core.next.call(null,seq9618);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9619,seq9618__$1);
});


//# sourceMappingURL=core.js.map