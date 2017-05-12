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

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq9498){
var G__9499 = cljs.core.first.call(null,seq9498);
var seq9498__$1 = cljs.core.next.call(null,seq9498);
var G__9500 = cljs.core.first.call(null,seq9498__$1);
var seq9498__$2 = cljs.core.next.call(null,seq9498__$1);
var G__9501 = cljs.core.first.call(null,seq9498__$2);
var seq9498__$3 = cljs.core.next.call(null,seq9498__$2);
var G__9502 = cljs.core.first.call(null,seq9498__$3);
var seq9498__$4 = cljs.core.next.call(null,seq9498__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9499,G__9500,G__9501,G__9502,seq9498__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9514 = arguments.length;
var i__7951__auto___9515 = (0);
while(true){
if((i__7951__auto___9515 < len__7950__auto___9514)){
args__7957__auto__.push((arguments[i__7951__auto___9515]));

var G__9516 = (i__7951__auto___9515 + (1));
i__7951__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq9506){
var G__9507 = cljs.core.first.call(null,seq9506);
var seq9506__$1 = cljs.core.next.call(null,seq9506);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__9507,seq9506__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9517 = arguments.length;
var i__7951__auto___9518 = (0);
while(true){
if((i__7951__auto___9518 < len__7950__auto___9517)){
args__7957__auto__.push((arguments[i__7951__auto___9518]));

var G__9519 = (i__7951__auto___9518 + (1));
i__7951__auto___9518 = G__9519;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq9508){
var G__9509 = cljs.core.first.call(null,seq9508);
var seq9508__$1 = cljs.core.next.call(null,seq9508);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9509,seq9508__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq9510){
var G__9511 = cljs.core.first.call(null,seq9510);
var seq9510__$1 = cljs.core.next.call(null,seq9510);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9511,seq9510__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq9512){
var G__9513 = cljs.core.first.call(null,seq9512);
var seq9512__$1 = cljs.core.next.call(null,seq9512);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9513,seq9512__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9534 = arguments.length;
var i__7951__auto___9535 = (0);
while(true){
if((i__7951__auto___9535 < len__7950__auto___9534)){
args__7957__auto__.push((arguments[i__7951__auto___9535]));

var G__9536 = (i__7951__auto___9535 + (1));
i__7951__auto___9535 = G__9536;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq9526){
var G__9527 = cljs.core.first.call(null,seq9526);
var seq9526__$1 = cljs.core.next.call(null,seq9526);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__9527,seq9526__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9537 = arguments.length;
var i__7951__auto___9538 = (0);
while(true){
if((i__7951__auto___9538 < len__7950__auto___9537)){
args__7957__auto__.push((arguments[i__7951__auto___9538]));

var G__9539 = (i__7951__auto___9538 + (1));
i__7951__auto___9538 = G__9539;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq9528){
var G__9529 = cljs.core.first.call(null,seq9528);
var seq9528__$1 = cljs.core.next.call(null,seq9528);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9529,seq9528__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq9530){
var G__9531 = cljs.core.first.call(null,seq9530);
var seq9530__$1 = cljs.core.next.call(null,seq9530);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9531,seq9530__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq9532){
var G__9533 = cljs.core.first.call(null,seq9532);
var seq9532__$1 = cljs.core.next.call(null,seq9532);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9533,seq9532__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9554 = arguments.length;
var i__7951__auto___9555 = (0);
while(true){
if((i__7951__auto___9555 < len__7950__auto___9554)){
args__7957__auto__.push((arguments[i__7951__auto___9555]));

var G__9556 = (i__7951__auto___9555 + (1));
i__7951__auto___9555 = G__9556;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq9546){
var G__9547 = cljs.core.first.call(null,seq9546);
var seq9546__$1 = cljs.core.next.call(null,seq9546);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__9547,seq9546__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9557 = arguments.length;
var i__7951__auto___9558 = (0);
while(true){
if((i__7951__auto___9558 < len__7950__auto___9557)){
args__7957__auto__.push((arguments[i__7951__auto___9558]));

var G__9559 = (i__7951__auto___9558 + (1));
i__7951__auto___9558 = G__9559;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq9548){
var G__9549 = cljs.core.first.call(null,seq9548);
var seq9548__$1 = cljs.core.next.call(null,seq9548);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9549,seq9548__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq9550){
var G__9551 = cljs.core.first.call(null,seq9550);
var seq9550__$1 = cljs.core.next.call(null,seq9550);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9551,seq9550__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq9552){
var G__9553 = cljs.core.first.call(null,seq9552);
var seq9552__$1 = cljs.core.next.call(null,seq9552);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9553,seq9552__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9574 = arguments.length;
var i__7951__auto___9575 = (0);
while(true){
if((i__7951__auto___9575 < len__7950__auto___9574)){
args__7957__auto__.push((arguments[i__7951__auto___9575]));

var G__9576 = (i__7951__auto___9575 + (1));
i__7951__auto___9575 = G__9576;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq9566){
var G__9567 = cljs.core.first.call(null,seq9566);
var seq9566__$1 = cljs.core.next.call(null,seq9566);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__9567,seq9566__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9577 = arguments.length;
var i__7951__auto___9578 = (0);
while(true){
if((i__7951__auto___9578 < len__7950__auto___9577)){
args__7957__auto__.push((arguments[i__7951__auto___9578]));

var G__9579 = (i__7951__auto___9578 + (1));
i__7951__auto___9578 = G__9579;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq9568){
var G__9569 = cljs.core.first.call(null,seq9568);
var seq9568__$1 = cljs.core.next.call(null,seq9568);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__9569,seq9568__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq9570){
var G__9571 = cljs.core.first.call(null,seq9570);
var seq9570__$1 = cljs.core.next.call(null,seq9570);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__9571,seq9570__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq9572){
var G__9573 = cljs.core.first.call(null,seq9572);
var seq9572__$1 = cljs.core.next.call(null,seq9572);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__9573,seq9572__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9594 = arguments.length;
var i__7951__auto___9595 = (0);
while(true){
if((i__7951__auto___9595 < len__7950__auto___9594)){
args__7957__auto__.push((arguments[i__7951__auto___9595]));

var G__9596 = (i__7951__auto___9595 + (1));
i__7951__auto___9595 = G__9596;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq9586){
var G__9587 = cljs.core.first.call(null,seq9586);
var seq9586__$1 = cljs.core.next.call(null,seq9586);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__9587,seq9586__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9597 = arguments.length;
var i__7951__auto___9598 = (0);
while(true){
if((i__7951__auto___9598 < len__7950__auto___9597)){
args__7957__auto__.push((arguments[i__7951__auto___9598]));

var G__9599 = (i__7951__auto___9598 + (1));
i__7951__auto___9598 = G__9599;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq9588){
var G__9589 = cljs.core.first.call(null,seq9588);
var seq9588__$1 = cljs.core.next.call(null,seq9588);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9589,seq9588__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq9590){
var G__9591 = cljs.core.first.call(null,seq9590);
var seq9590__$1 = cljs.core.next.call(null,seq9590);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9591,seq9590__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq9592){
var G__9593 = cljs.core.first.call(null,seq9592);
var seq9592__$1 = cljs.core.next.call(null,seq9592);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9593,seq9592__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9614 = arguments.length;
var i__7951__auto___9615 = (0);
while(true){
if((i__7951__auto___9615 < len__7950__auto___9614)){
args__7957__auto__.push((arguments[i__7951__auto___9615]));

var G__9616 = (i__7951__auto___9615 + (1));
i__7951__auto___9615 = G__9616;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq9606){
var G__9607 = cljs.core.first.call(null,seq9606);
var seq9606__$1 = cljs.core.next.call(null,seq9606);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__9607,seq9606__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9617 = arguments.length;
var i__7951__auto___9618 = (0);
while(true){
if((i__7951__auto___9618 < len__7950__auto___9617)){
args__7957__auto__.push((arguments[i__7951__auto___9618]));

var G__9619 = (i__7951__auto___9618 + (1));
i__7951__auto___9618 = G__9619;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq9608){
var G__9609 = cljs.core.first.call(null,seq9608);
var seq9608__$1 = cljs.core.next.call(null,seq9608);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9609,seq9608__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq9610){
var G__9611 = cljs.core.first.call(null,seq9610);
var seq9610__$1 = cljs.core.next.call(null,seq9610);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9611,seq9610__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq9612){
var G__9613 = cljs.core.first.call(null,seq9612);
var seq9612__$1 = cljs.core.next.call(null,seq9612);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9613,seq9612__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9634 = arguments.length;
var i__7951__auto___9635 = (0);
while(true){
if((i__7951__auto___9635 < len__7950__auto___9634)){
args__7957__auto__.push((arguments[i__7951__auto___9635]));

var G__9636 = (i__7951__auto___9635 + (1));
i__7951__auto___9635 = G__9636;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9465__auto__,rest__9466__auto__){
var convert_case__9467__auto__ = (function (p1__9464__9468__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__9464__9468__auto__,rest__9466__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9465__auto__,convert_case__9467__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq9626){
var G__9627 = cljs.core.first.call(null,seq9626);
var seq9626__$1 = cljs.core.next.call(null,seq9626);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__9627,seq9626__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9637 = arguments.length;
var i__7951__auto___9638 = (0);
while(true){
if((i__7951__auto___9638 < len__7950__auto___9637)){
args__7957__auto__.push((arguments[i__7951__auto___9638]));

var G__9639 = (i__7951__auto___9638 + (1));
i__7951__auto___9638 = G__9639;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq9628){
var G__9629 = cljs.core.first.call(null,seq9628);
var seq9628__$1 = cljs.core.next.call(null,seq9628);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9629,seq9628__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9640 = arguments.length;
var i__7951__auto___9641 = (0);
while(true){
if((i__7951__auto___9641 < len__7950__auto___9640)){
args__7957__auto__.push((arguments[i__7951__auto___9641]));

var G__9642 = (i__7951__auto___9641 + (1));
i__7951__auto___9641 = G__9642;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq9630){
var G__9631 = cljs.core.first.call(null,seq9630);
var seq9630__$1 = cljs.core.next.call(null,seq9630);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9631,seq9630__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9643 = arguments.length;
var i__7951__auto___9644 = (0);
while(true){
if((i__7951__auto___9644 < len__7950__auto___9643)){
args__7957__auto__.push((arguments[i__7951__auto___9644]));

var G__9645 = (i__7951__auto___9644 + (1));
i__7951__auto___9644 = G__9645;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9470__auto__,rest__9471__auto__){
if(!((s__9470__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9470__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9470__auto__),rest__9471__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq9632){
var G__9633 = cljs.core.first.call(null,seq9632);
var seq9632__$1 = cljs.core.next.call(null,seq9632);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9633,seq9632__$1);
});


//# sourceMappingURL=core.js.map