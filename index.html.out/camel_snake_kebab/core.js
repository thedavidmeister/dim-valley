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
var len__7950__auto___9491 = arguments.length;
var i__7951__auto___9492 = (0);
while(true){
if((i__7951__auto___9492 < len__7950__auto___9491)){
args__7957__auto__.push((arguments[i__7951__auto___9492]));

var G__9493 = (i__7951__auto___9492 + (1));
i__7951__auto___9492 = G__9493;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq9486){
var G__9487 = cljs.core.first.call(null,seq9486);
var seq9486__$1 = cljs.core.next.call(null,seq9486);
var G__9488 = cljs.core.first.call(null,seq9486__$1);
var seq9486__$2 = cljs.core.next.call(null,seq9486__$1);
var G__9489 = cljs.core.first.call(null,seq9486__$2);
var seq9486__$3 = cljs.core.next.call(null,seq9486__$2);
var G__9490 = cljs.core.first.call(null,seq9486__$3);
var seq9486__$4 = cljs.core.next.call(null,seq9486__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9487,G__9488,G__9489,G__9490,seq9486__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9502 = arguments.length;
var i__7951__auto___9503 = (0);
while(true){
if((i__7951__auto___9503 < len__7950__auto___9502)){
args__7957__auto__.push((arguments[i__7951__auto___9503]));

var G__9504 = (i__7951__auto___9503 + (1));
i__7951__auto___9503 = G__9504;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq9494){
var G__9495 = cljs.core.first.call(null,seq9494);
var seq9494__$1 = cljs.core.next.call(null,seq9494);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__9495,seq9494__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9505 = arguments.length;
var i__7951__auto___9506 = (0);
while(true){
if((i__7951__auto___9506 < len__7950__auto___9505)){
args__7957__auto__.push((arguments[i__7951__auto___9506]));

var G__9507 = (i__7951__auto___9506 + (1));
i__7951__auto___9506 = G__9507;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq9496){
var G__9497 = cljs.core.first.call(null,seq9496);
var seq9496__$1 = cljs.core.next.call(null,seq9496);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9497,seq9496__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9508 = arguments.length;
var i__7951__auto___9509 = (0);
while(true){
if((i__7951__auto___9509 < len__7950__auto___9508)){
args__7957__auto__.push((arguments[i__7951__auto___9509]));

var G__9510 = (i__7951__auto___9509 + (1));
i__7951__auto___9509 = G__9510;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq9498){
var G__9499 = cljs.core.first.call(null,seq9498);
var seq9498__$1 = cljs.core.next.call(null,seq9498);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9499,seq9498__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9511 = arguments.length;
var i__7951__auto___9512 = (0);
while(true){
if((i__7951__auto___9512 < len__7950__auto___9511)){
args__7957__auto__.push((arguments[i__7951__auto___9512]));

var G__9513 = (i__7951__auto___9512 + (1));
i__7951__auto___9512 = G__9513;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq9500){
var G__9501 = cljs.core.first.call(null,seq9500);
var seq9500__$1 = cljs.core.next.call(null,seq9500);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9501,seq9500__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9522 = arguments.length;
var i__7951__auto___9523 = (0);
while(true){
if((i__7951__auto___9523 < len__7950__auto___9522)){
args__7957__auto__.push((arguments[i__7951__auto___9523]));

var G__9524 = (i__7951__auto___9523 + (1));
i__7951__auto___9523 = G__9524;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq9514){
var G__9515 = cljs.core.first.call(null,seq9514);
var seq9514__$1 = cljs.core.next.call(null,seq9514);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__9515,seq9514__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9525 = arguments.length;
var i__7951__auto___9526 = (0);
while(true){
if((i__7951__auto___9526 < len__7950__auto___9525)){
args__7957__auto__.push((arguments[i__7951__auto___9526]));

var G__9527 = (i__7951__auto___9526 + (1));
i__7951__auto___9526 = G__9527;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq9516){
var G__9517 = cljs.core.first.call(null,seq9516);
var seq9516__$1 = cljs.core.next.call(null,seq9516);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9517,seq9516__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq9518){
var G__9519 = cljs.core.first.call(null,seq9518);
var seq9518__$1 = cljs.core.next.call(null,seq9518);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9519,seq9518__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9531 = arguments.length;
var i__7951__auto___9532 = (0);
while(true){
if((i__7951__auto___9532 < len__7950__auto___9531)){
args__7957__auto__.push((arguments[i__7951__auto___9532]));

var G__9533 = (i__7951__auto___9532 + (1));
i__7951__auto___9532 = G__9533;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq9520){
var G__9521 = cljs.core.first.call(null,seq9520);
var seq9520__$1 = cljs.core.next.call(null,seq9520);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9521,seq9520__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9542 = arguments.length;
var i__7951__auto___9543 = (0);
while(true){
if((i__7951__auto___9543 < len__7950__auto___9542)){
args__7957__auto__.push((arguments[i__7951__auto___9543]));

var G__9544 = (i__7951__auto___9543 + (1));
i__7951__auto___9543 = G__9544;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq9534){
var G__9535 = cljs.core.first.call(null,seq9534);
var seq9534__$1 = cljs.core.next.call(null,seq9534);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__9535,seq9534__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9545 = arguments.length;
var i__7951__auto___9546 = (0);
while(true){
if((i__7951__auto___9546 < len__7950__auto___9545)){
args__7957__auto__.push((arguments[i__7951__auto___9546]));

var G__9547 = (i__7951__auto___9546 + (1));
i__7951__auto___9546 = G__9547;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq9536){
var G__9537 = cljs.core.first.call(null,seq9536);
var seq9536__$1 = cljs.core.next.call(null,seq9536);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9537,seq9536__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9548 = arguments.length;
var i__7951__auto___9549 = (0);
while(true){
if((i__7951__auto___9549 < len__7950__auto___9548)){
args__7957__auto__.push((arguments[i__7951__auto___9549]));

var G__9550 = (i__7951__auto___9549 + (1));
i__7951__auto___9549 = G__9550;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq9538){
var G__9539 = cljs.core.first.call(null,seq9538);
var seq9538__$1 = cljs.core.next.call(null,seq9538);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9539,seq9538__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9551 = arguments.length;
var i__7951__auto___9552 = (0);
while(true){
if((i__7951__auto___9552 < len__7950__auto___9551)){
args__7957__auto__.push((arguments[i__7951__auto___9552]));

var G__9553 = (i__7951__auto___9552 + (1));
i__7951__auto___9552 = G__9553;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq9540){
var G__9541 = cljs.core.first.call(null,seq9540);
var seq9540__$1 = cljs.core.next.call(null,seq9540);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9541,seq9540__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9562 = arguments.length;
var i__7951__auto___9563 = (0);
while(true){
if((i__7951__auto___9563 < len__7950__auto___9562)){
args__7957__auto__.push((arguments[i__7951__auto___9563]));

var G__9564 = (i__7951__auto___9563 + (1));
i__7951__auto___9563 = G__9564;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq9554){
var G__9555 = cljs.core.first.call(null,seq9554);
var seq9554__$1 = cljs.core.next.call(null,seq9554);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__9555,seq9554__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9565 = arguments.length;
var i__7951__auto___9566 = (0);
while(true){
if((i__7951__auto___9566 < len__7950__auto___9565)){
args__7957__auto__.push((arguments[i__7951__auto___9566]));

var G__9567 = (i__7951__auto___9566 + (1));
i__7951__auto___9566 = G__9567;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq9556){
var G__9557 = cljs.core.first.call(null,seq9556);
var seq9556__$1 = cljs.core.next.call(null,seq9556);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__9557,seq9556__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9568 = arguments.length;
var i__7951__auto___9569 = (0);
while(true){
if((i__7951__auto___9569 < len__7950__auto___9568)){
args__7957__auto__.push((arguments[i__7951__auto___9569]));

var G__9570 = (i__7951__auto___9569 + (1));
i__7951__auto___9569 = G__9570;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq9558){
var G__9559 = cljs.core.first.call(null,seq9558);
var seq9558__$1 = cljs.core.next.call(null,seq9558);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__9559,seq9558__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9571 = arguments.length;
var i__7951__auto___9572 = (0);
while(true){
if((i__7951__auto___9572 < len__7950__auto___9571)){
args__7957__auto__.push((arguments[i__7951__auto___9572]));

var G__9573 = (i__7951__auto___9572 + (1));
i__7951__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq9560){
var G__9561 = cljs.core.first.call(null,seq9560);
var seq9560__$1 = cljs.core.next.call(null,seq9560);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__9561,seq9560__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9582 = arguments.length;
var i__7951__auto___9583 = (0);
while(true){
if((i__7951__auto___9583 < len__7950__auto___9582)){
args__7957__auto__.push((arguments[i__7951__auto___9583]));

var G__9584 = (i__7951__auto___9583 + (1));
i__7951__auto___9583 = G__9584;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq9574){
var G__9575 = cljs.core.first.call(null,seq9574);
var seq9574__$1 = cljs.core.next.call(null,seq9574);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__9575,seq9574__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9585 = arguments.length;
var i__7951__auto___9586 = (0);
while(true){
if((i__7951__auto___9586 < len__7950__auto___9585)){
args__7957__auto__.push((arguments[i__7951__auto___9586]));

var G__9587 = (i__7951__auto___9586 + (1));
i__7951__auto___9586 = G__9587;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq9576){
var G__9577 = cljs.core.first.call(null,seq9576);
var seq9576__$1 = cljs.core.next.call(null,seq9576);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9577,seq9576__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9588 = arguments.length;
var i__7951__auto___9589 = (0);
while(true){
if((i__7951__auto___9589 < len__7950__auto___9588)){
args__7957__auto__.push((arguments[i__7951__auto___9589]));

var G__9590 = (i__7951__auto___9589 + (1));
i__7951__auto___9589 = G__9590;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq9578){
var G__9579 = cljs.core.first.call(null,seq9578);
var seq9578__$1 = cljs.core.next.call(null,seq9578);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9579,seq9578__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9591 = arguments.length;
var i__7951__auto___9592 = (0);
while(true){
if((i__7951__auto___9592 < len__7950__auto___9591)){
args__7957__auto__.push((arguments[i__7951__auto___9592]));

var G__9593 = (i__7951__auto___9592 + (1));
i__7951__auto___9592 = G__9593;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq9580){
var G__9581 = cljs.core.first.call(null,seq9580);
var seq9580__$1 = cljs.core.next.call(null,seq9580);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9581,seq9580__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9602 = arguments.length;
var i__7951__auto___9603 = (0);
while(true){
if((i__7951__auto___9603 < len__7950__auto___9602)){
args__7957__auto__.push((arguments[i__7951__auto___9603]));

var G__9604 = (i__7951__auto___9603 + (1));
i__7951__auto___9603 = G__9604;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq9594){
var G__9595 = cljs.core.first.call(null,seq9594);
var seq9594__$1 = cljs.core.next.call(null,seq9594);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__9595,seq9594__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9605 = arguments.length;
var i__7951__auto___9606 = (0);
while(true){
if((i__7951__auto___9606 < len__7950__auto___9605)){
args__7957__auto__.push((arguments[i__7951__auto___9606]));

var G__9607 = (i__7951__auto___9606 + (1));
i__7951__auto___9606 = G__9607;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq9596){
var G__9597 = cljs.core.first.call(null,seq9596);
var seq9596__$1 = cljs.core.next.call(null,seq9596);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9597,seq9596__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9608 = arguments.length;
var i__7951__auto___9609 = (0);
while(true){
if((i__7951__auto___9609 < len__7950__auto___9608)){
args__7957__auto__.push((arguments[i__7951__auto___9609]));

var G__9610 = (i__7951__auto___9609 + (1));
i__7951__auto___9609 = G__9610;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq9598){
var G__9599 = cljs.core.first.call(null,seq9598);
var seq9598__$1 = cljs.core.next.call(null,seq9598);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9599,seq9598__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9611 = arguments.length;
var i__7951__auto___9612 = (0);
while(true){
if((i__7951__auto___9612 < len__7950__auto___9611)){
args__7957__auto__.push((arguments[i__7951__auto___9612]));

var G__9613 = (i__7951__auto___9612 + (1));
i__7951__auto___9612 = G__9613;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq9600){
var G__9601 = cljs.core.first.call(null,seq9600);
var seq9600__$1 = cljs.core.next.call(null,seq9600);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9601,seq9600__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9622 = arguments.length;
var i__7951__auto___9623 = (0);
while(true){
if((i__7951__auto___9623 < len__7950__auto___9622)){
args__7957__auto__.push((arguments[i__7951__auto___9623]));

var G__9624 = (i__7951__auto___9623 + (1));
i__7951__auto___9623 = G__9624;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9453__auto__,rest__9454__auto__){
var convert_case__9455__auto__ = (function (p1__9452__9456__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__9452__9456__auto__,rest__9454__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9453__auto__,convert_case__9455__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq9614){
var G__9615 = cljs.core.first.call(null,seq9614);
var seq9614__$1 = cljs.core.next.call(null,seq9614);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__9615,seq9614__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9625 = arguments.length;
var i__7951__auto___9626 = (0);
while(true){
if((i__7951__auto___9626 < len__7950__auto___9625)){
args__7957__auto__.push((arguments[i__7951__auto___9626]));

var G__9627 = (i__7951__auto___9626 + (1));
i__7951__auto___9626 = G__9627;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq9616){
var G__9617 = cljs.core.first.call(null,seq9616);
var seq9616__$1 = cljs.core.next.call(null,seq9616);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9617,seq9616__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9628 = arguments.length;
var i__7951__auto___9629 = (0);
while(true){
if((i__7951__auto___9629 < len__7950__auto___9628)){
args__7957__auto__.push((arguments[i__7951__auto___9629]));

var G__9630 = (i__7951__auto___9629 + (1));
i__7951__auto___9629 = G__9630;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq9618){
var G__9619 = cljs.core.first.call(null,seq9618);
var seq9618__$1 = cljs.core.next.call(null,seq9618);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9619,seq9618__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9631 = arguments.length;
var i__7951__auto___9632 = (0);
while(true){
if((i__7951__auto___9632 < len__7950__auto___9631)){
args__7957__auto__.push((arguments[i__7951__auto___9632]));

var G__9633 = (i__7951__auto___9632 + (1));
i__7951__auto___9632 = G__9633;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9458__auto__,rest__9459__auto__){
if(!((s__9458__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9458__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9458__auto__),rest__9459__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq9620){
var G__9621 = cljs.core.first.call(null,seq9620);
var seq9620__$1 = cljs.core.next.call(null,seq9620);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9621,seq9620__$1);
});


//# sourceMappingURL=core.js.map