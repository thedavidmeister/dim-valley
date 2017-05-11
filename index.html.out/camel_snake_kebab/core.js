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
var len__7950__auto___9711 = arguments.length;
var i__7951__auto___9712 = (0);
while(true){
if((i__7951__auto___9712 < len__7950__auto___9711)){
args__7957__auto__.push((arguments[i__7951__auto___9712]));

var G__9713 = (i__7951__auto___9712 + (1));
i__7951__auto___9712 = G__9713;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq9706){
var G__9707 = cljs.core.first.call(null,seq9706);
var seq9706__$1 = cljs.core.next.call(null,seq9706);
var G__9708 = cljs.core.first.call(null,seq9706__$1);
var seq9706__$2 = cljs.core.next.call(null,seq9706__$1);
var G__9709 = cljs.core.first.call(null,seq9706__$2);
var seq9706__$3 = cljs.core.next.call(null,seq9706__$2);
var G__9710 = cljs.core.first.call(null,seq9706__$3);
var seq9706__$4 = cljs.core.next.call(null,seq9706__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9707,G__9708,G__9709,G__9710,seq9706__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9722 = arguments.length;
var i__7951__auto___9723 = (0);
while(true){
if((i__7951__auto___9723 < len__7950__auto___9722)){
args__7957__auto__.push((arguments[i__7951__auto___9723]));

var G__9724 = (i__7951__auto___9723 + (1));
i__7951__auto___9723 = G__9724;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq9714){
var G__9715 = cljs.core.first.call(null,seq9714);
var seq9714__$1 = cljs.core.next.call(null,seq9714);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__9715,seq9714__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9725 = arguments.length;
var i__7951__auto___9726 = (0);
while(true){
if((i__7951__auto___9726 < len__7950__auto___9725)){
args__7957__auto__.push((arguments[i__7951__auto___9726]));

var G__9727 = (i__7951__auto___9726 + (1));
i__7951__auto___9726 = G__9727;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq9716){
var G__9717 = cljs.core.first.call(null,seq9716);
var seq9716__$1 = cljs.core.next.call(null,seq9716);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9717,seq9716__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9728 = arguments.length;
var i__7951__auto___9729 = (0);
while(true){
if((i__7951__auto___9729 < len__7950__auto___9728)){
args__7957__auto__.push((arguments[i__7951__auto___9729]));

var G__9730 = (i__7951__auto___9729 + (1));
i__7951__auto___9729 = G__9730;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq9718){
var G__9719 = cljs.core.first.call(null,seq9718);
var seq9718__$1 = cljs.core.next.call(null,seq9718);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9719,seq9718__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9731 = arguments.length;
var i__7951__auto___9732 = (0);
while(true){
if((i__7951__auto___9732 < len__7950__auto___9731)){
args__7957__auto__.push((arguments[i__7951__auto___9732]));

var G__9733 = (i__7951__auto___9732 + (1));
i__7951__auto___9732 = G__9733;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq9720){
var G__9721 = cljs.core.first.call(null,seq9720);
var seq9720__$1 = cljs.core.next.call(null,seq9720);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9721,seq9720__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9742 = arguments.length;
var i__7951__auto___9743 = (0);
while(true){
if((i__7951__auto___9743 < len__7950__auto___9742)){
args__7957__auto__.push((arguments[i__7951__auto___9743]));

var G__9744 = (i__7951__auto___9743 + (1));
i__7951__auto___9743 = G__9744;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq9734){
var G__9735 = cljs.core.first.call(null,seq9734);
var seq9734__$1 = cljs.core.next.call(null,seq9734);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__9735,seq9734__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9745 = arguments.length;
var i__7951__auto___9746 = (0);
while(true){
if((i__7951__auto___9746 < len__7950__auto___9745)){
args__7957__auto__.push((arguments[i__7951__auto___9746]));

var G__9747 = (i__7951__auto___9746 + (1));
i__7951__auto___9746 = G__9747;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq9736){
var G__9737 = cljs.core.first.call(null,seq9736);
var seq9736__$1 = cljs.core.next.call(null,seq9736);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9737,seq9736__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9748 = arguments.length;
var i__7951__auto___9749 = (0);
while(true){
if((i__7951__auto___9749 < len__7950__auto___9748)){
args__7957__auto__.push((arguments[i__7951__auto___9749]));

var G__9750 = (i__7951__auto___9749 + (1));
i__7951__auto___9749 = G__9750;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq9738){
var G__9739 = cljs.core.first.call(null,seq9738);
var seq9738__$1 = cljs.core.next.call(null,seq9738);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9739,seq9738__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9751 = arguments.length;
var i__7951__auto___9752 = (0);
while(true){
if((i__7951__auto___9752 < len__7950__auto___9751)){
args__7957__auto__.push((arguments[i__7951__auto___9752]));

var G__9753 = (i__7951__auto___9752 + (1));
i__7951__auto___9752 = G__9753;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq9740){
var G__9741 = cljs.core.first.call(null,seq9740);
var seq9740__$1 = cljs.core.next.call(null,seq9740);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9741,seq9740__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9762 = arguments.length;
var i__7951__auto___9763 = (0);
while(true){
if((i__7951__auto___9763 < len__7950__auto___9762)){
args__7957__auto__.push((arguments[i__7951__auto___9763]));

var G__9764 = (i__7951__auto___9763 + (1));
i__7951__auto___9763 = G__9764;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq9754){
var G__9755 = cljs.core.first.call(null,seq9754);
var seq9754__$1 = cljs.core.next.call(null,seq9754);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__9755,seq9754__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9765 = arguments.length;
var i__7951__auto___9766 = (0);
while(true){
if((i__7951__auto___9766 < len__7950__auto___9765)){
args__7957__auto__.push((arguments[i__7951__auto___9766]));

var G__9767 = (i__7951__auto___9766 + (1));
i__7951__auto___9766 = G__9767;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq9756){
var G__9757 = cljs.core.first.call(null,seq9756);
var seq9756__$1 = cljs.core.next.call(null,seq9756);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9757,seq9756__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9768 = arguments.length;
var i__7951__auto___9769 = (0);
while(true){
if((i__7951__auto___9769 < len__7950__auto___9768)){
args__7957__auto__.push((arguments[i__7951__auto___9769]));

var G__9770 = (i__7951__auto___9769 + (1));
i__7951__auto___9769 = G__9770;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq9758){
var G__9759 = cljs.core.first.call(null,seq9758);
var seq9758__$1 = cljs.core.next.call(null,seq9758);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9759,seq9758__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9771 = arguments.length;
var i__7951__auto___9772 = (0);
while(true){
if((i__7951__auto___9772 < len__7950__auto___9771)){
args__7957__auto__.push((arguments[i__7951__auto___9772]));

var G__9773 = (i__7951__auto___9772 + (1));
i__7951__auto___9772 = G__9773;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq9760){
var G__9761 = cljs.core.first.call(null,seq9760);
var seq9760__$1 = cljs.core.next.call(null,seq9760);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9761,seq9760__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9782 = arguments.length;
var i__7951__auto___9783 = (0);
while(true){
if((i__7951__auto___9783 < len__7950__auto___9782)){
args__7957__auto__.push((arguments[i__7951__auto___9783]));

var G__9784 = (i__7951__auto___9783 + (1));
i__7951__auto___9783 = G__9784;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq9774){
var G__9775 = cljs.core.first.call(null,seq9774);
var seq9774__$1 = cljs.core.next.call(null,seq9774);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__9775,seq9774__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9785 = arguments.length;
var i__7951__auto___9786 = (0);
while(true){
if((i__7951__auto___9786 < len__7950__auto___9785)){
args__7957__auto__.push((arguments[i__7951__auto___9786]));

var G__9787 = (i__7951__auto___9786 + (1));
i__7951__auto___9786 = G__9787;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq9776){
var G__9777 = cljs.core.first.call(null,seq9776);
var seq9776__$1 = cljs.core.next.call(null,seq9776);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__9777,seq9776__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9788 = arguments.length;
var i__7951__auto___9789 = (0);
while(true){
if((i__7951__auto___9789 < len__7950__auto___9788)){
args__7957__auto__.push((arguments[i__7951__auto___9789]));

var G__9790 = (i__7951__auto___9789 + (1));
i__7951__auto___9789 = G__9790;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq9778){
var G__9779 = cljs.core.first.call(null,seq9778);
var seq9778__$1 = cljs.core.next.call(null,seq9778);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__9779,seq9778__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9791 = arguments.length;
var i__7951__auto___9792 = (0);
while(true){
if((i__7951__auto___9792 < len__7950__auto___9791)){
args__7957__auto__.push((arguments[i__7951__auto___9792]));

var G__9793 = (i__7951__auto___9792 + (1));
i__7951__auto___9792 = G__9793;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq9780){
var G__9781 = cljs.core.first.call(null,seq9780);
var seq9780__$1 = cljs.core.next.call(null,seq9780);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__9781,seq9780__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9802 = arguments.length;
var i__7951__auto___9803 = (0);
while(true){
if((i__7951__auto___9803 < len__7950__auto___9802)){
args__7957__auto__.push((arguments[i__7951__auto___9803]));

var G__9804 = (i__7951__auto___9803 + (1));
i__7951__auto___9803 = G__9804;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq9794){
var G__9795 = cljs.core.first.call(null,seq9794);
var seq9794__$1 = cljs.core.next.call(null,seq9794);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__9795,seq9794__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9805 = arguments.length;
var i__7951__auto___9806 = (0);
while(true){
if((i__7951__auto___9806 < len__7950__auto___9805)){
args__7957__auto__.push((arguments[i__7951__auto___9806]));

var G__9807 = (i__7951__auto___9806 + (1));
i__7951__auto___9806 = G__9807;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq9796){
var G__9797 = cljs.core.first.call(null,seq9796);
var seq9796__$1 = cljs.core.next.call(null,seq9796);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9797,seq9796__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9808 = arguments.length;
var i__7951__auto___9809 = (0);
while(true){
if((i__7951__auto___9809 < len__7950__auto___9808)){
args__7957__auto__.push((arguments[i__7951__auto___9809]));

var G__9810 = (i__7951__auto___9809 + (1));
i__7951__auto___9809 = G__9810;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq9798){
var G__9799 = cljs.core.first.call(null,seq9798);
var seq9798__$1 = cljs.core.next.call(null,seq9798);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9799,seq9798__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9811 = arguments.length;
var i__7951__auto___9812 = (0);
while(true){
if((i__7951__auto___9812 < len__7950__auto___9811)){
args__7957__auto__.push((arguments[i__7951__auto___9812]));

var G__9813 = (i__7951__auto___9812 + (1));
i__7951__auto___9812 = G__9813;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq9800){
var G__9801 = cljs.core.first.call(null,seq9800);
var seq9800__$1 = cljs.core.next.call(null,seq9800);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9801,seq9800__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9822 = arguments.length;
var i__7951__auto___9823 = (0);
while(true){
if((i__7951__auto___9823 < len__7950__auto___9822)){
args__7957__auto__.push((arguments[i__7951__auto___9823]));

var G__9824 = (i__7951__auto___9823 + (1));
i__7951__auto___9823 = G__9824;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq9814){
var G__9815 = cljs.core.first.call(null,seq9814);
var seq9814__$1 = cljs.core.next.call(null,seq9814);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__9815,seq9814__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9825 = arguments.length;
var i__7951__auto___9826 = (0);
while(true){
if((i__7951__auto___9826 < len__7950__auto___9825)){
args__7957__auto__.push((arguments[i__7951__auto___9826]));

var G__9827 = (i__7951__auto___9826 + (1));
i__7951__auto___9826 = G__9827;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq9816){
var G__9817 = cljs.core.first.call(null,seq9816);
var seq9816__$1 = cljs.core.next.call(null,seq9816);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9817,seq9816__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9828 = arguments.length;
var i__7951__auto___9829 = (0);
while(true){
if((i__7951__auto___9829 < len__7950__auto___9828)){
args__7957__auto__.push((arguments[i__7951__auto___9829]));

var G__9830 = (i__7951__auto___9829 + (1));
i__7951__auto___9829 = G__9830;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq9818){
var G__9819 = cljs.core.first.call(null,seq9818);
var seq9818__$1 = cljs.core.next.call(null,seq9818);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9819,seq9818__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9831 = arguments.length;
var i__7951__auto___9832 = (0);
while(true){
if((i__7951__auto___9832 < len__7950__auto___9831)){
args__7957__auto__.push((arguments[i__7951__auto___9832]));

var G__9833 = (i__7951__auto___9832 + (1));
i__7951__auto___9832 = G__9833;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq9820){
var G__9821 = cljs.core.first.call(null,seq9820);
var seq9820__$1 = cljs.core.next.call(null,seq9820);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9821,seq9820__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9842 = arguments.length;
var i__7951__auto___9843 = (0);
while(true){
if((i__7951__auto___9843 < len__7950__auto___9842)){
args__7957__auto__.push((arguments[i__7951__auto___9843]));

var G__9844 = (i__7951__auto___9843 + (1));
i__7951__auto___9843 = G__9844;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9673__auto__,rest__9674__auto__){
var convert_case__9675__auto__ = (function (p1__9672__9676__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__9672__9676__auto__,rest__9674__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9673__auto__,convert_case__9675__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq9834){
var G__9835 = cljs.core.first.call(null,seq9834);
var seq9834__$1 = cljs.core.next.call(null,seq9834);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__9835,seq9834__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9845 = arguments.length;
var i__7951__auto___9846 = (0);
while(true){
if((i__7951__auto___9846 < len__7950__auto___9845)){
args__7957__auto__.push((arguments[i__7951__auto___9846]));

var G__9847 = (i__7951__auto___9846 + (1));
i__7951__auto___9846 = G__9847;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq9836){
var G__9837 = cljs.core.first.call(null,seq9836);
var seq9836__$1 = cljs.core.next.call(null,seq9836);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9837,seq9836__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9848 = arguments.length;
var i__7951__auto___9849 = (0);
while(true){
if((i__7951__auto___9849 < len__7950__auto___9848)){
args__7957__auto__.push((arguments[i__7951__auto___9849]));

var G__9850 = (i__7951__auto___9849 + (1));
i__7951__auto___9849 = G__9850;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq9838){
var G__9839 = cljs.core.first.call(null,seq9838);
var seq9838__$1 = cljs.core.next.call(null,seq9838);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9839,seq9838__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9851 = arguments.length;
var i__7951__auto___9852 = (0);
while(true){
if((i__7951__auto___9852 < len__7950__auto___9851)){
args__7957__auto__.push((arguments[i__7951__auto___9852]));

var G__9853 = (i__7951__auto___9852 + (1));
i__7951__auto___9852 = G__9853;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9678__auto__,rest__9679__auto__){
if(!((s__9678__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9678__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9678__auto__),rest__9679__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq9840){
var G__9841 = cljs.core.first.call(null,seq9840);
var seq9840__$1 = cljs.core.next.call(null,seq9840);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9841,seq9840__$1);
});


//# sourceMappingURL=core.js.map