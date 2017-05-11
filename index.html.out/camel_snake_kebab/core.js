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

var argseq__7958__auto__ = ((((4) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7958__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq9595){
var G__9596 = cljs.core.first.call(null,seq9595);
var seq9595__$1 = cljs.core.next.call(null,seq9595);
var G__9597 = cljs.core.first.call(null,seq9595__$1);
var seq9595__$2 = cljs.core.next.call(null,seq9595__$1);
var G__9598 = cljs.core.first.call(null,seq9595__$2);
var seq9595__$3 = cljs.core.next.call(null,seq9595__$2);
var G__9599 = cljs.core.first.call(null,seq9595__$3);
var seq9595__$4 = cljs.core.next.call(null,seq9595__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__9596,G__9597,G__9598,G__9599,seq9595__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq9603){
var G__9604 = cljs.core.first.call(null,seq9603);
var seq9603__$1 = cljs.core.next.call(null,seq9603);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__9604,seq9603__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq9605){
var G__9606 = cljs.core.first.call(null,seq9605);
var seq9605__$1 = cljs.core.next.call(null,seq9605);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9606,seq9605__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq9607){
var G__9608 = cljs.core.first.call(null,seq9607);
var seq9607__$1 = cljs.core.next.call(null,seq9607);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9608,seq9607__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq9609){
var G__9610 = cljs.core.first.call(null,seq9609);
var seq9609__$1 = cljs.core.next.call(null,seq9609);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9610,seq9609__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq9623){
var G__9624 = cljs.core.first.call(null,seq9623);
var seq9623__$1 = cljs.core.next.call(null,seq9623);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__9624,seq9623__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq9625){
var G__9626 = cljs.core.first.call(null,seq9625);
var seq9625__$1 = cljs.core.next.call(null,seq9625);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9626,seq9625__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq9627){
var G__9628 = cljs.core.first.call(null,seq9627);
var seq9627__$1 = cljs.core.next.call(null,seq9627);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9628,seq9627__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq9629){
var G__9630 = cljs.core.first.call(null,seq9629);
var seq9629__$1 = cljs.core.next.call(null,seq9629);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9630,seq9629__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9651 = arguments.length;
var i__7951__auto___9652 = (0);
while(true){
if((i__7951__auto___9652 < len__7950__auto___9651)){
args__7957__auto__.push((arguments[i__7951__auto___9652]));

var G__9653 = (i__7951__auto___9652 + (1));
i__7951__auto___9652 = G__9653;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq9643){
var G__9644 = cljs.core.first.call(null,seq9643);
var seq9643__$1 = cljs.core.next.call(null,seq9643);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__9644,seq9643__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9654 = arguments.length;
var i__7951__auto___9655 = (0);
while(true){
if((i__7951__auto___9655 < len__7950__auto___9654)){
args__7957__auto__.push((arguments[i__7951__auto___9655]));

var G__9656 = (i__7951__auto___9655 + (1));
i__7951__auto___9655 = G__9656;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq9645){
var G__9646 = cljs.core.first.call(null,seq9645);
var seq9645__$1 = cljs.core.next.call(null,seq9645);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__9646,seq9645__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9657 = arguments.length;
var i__7951__auto___9658 = (0);
while(true){
if((i__7951__auto___9658 < len__7950__auto___9657)){
args__7957__auto__.push((arguments[i__7951__auto___9658]));

var G__9659 = (i__7951__auto___9658 + (1));
i__7951__auto___9658 = G__9659;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq9647){
var G__9648 = cljs.core.first.call(null,seq9647);
var seq9647__$1 = cljs.core.next.call(null,seq9647);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__9648,seq9647__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9660 = arguments.length;
var i__7951__auto___9661 = (0);
while(true){
if((i__7951__auto___9661 < len__7950__auto___9660)){
args__7957__auto__.push((arguments[i__7951__auto___9661]));

var G__9662 = (i__7951__auto___9661 + (1));
i__7951__auto___9661 = G__9662;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq9649){
var G__9650 = cljs.core.first.call(null,seq9649);
var seq9649__$1 = cljs.core.next.call(null,seq9649);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__9650,seq9649__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9671 = arguments.length;
var i__7951__auto___9672 = (0);
while(true){
if((i__7951__auto___9672 < len__7950__auto___9671)){
args__7957__auto__.push((arguments[i__7951__auto___9672]));

var G__9673 = (i__7951__auto___9672 + (1));
i__7951__auto___9672 = G__9673;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq9663){
var G__9664 = cljs.core.first.call(null,seq9663);
var seq9663__$1 = cljs.core.next.call(null,seq9663);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__9664,seq9663__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9674 = arguments.length;
var i__7951__auto___9675 = (0);
while(true){
if((i__7951__auto___9675 < len__7950__auto___9674)){
args__7957__auto__.push((arguments[i__7951__auto___9675]));

var G__9676 = (i__7951__auto___9675 + (1));
i__7951__auto___9675 = G__9676;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq9665){
var G__9666 = cljs.core.first.call(null,seq9665);
var seq9665__$1 = cljs.core.next.call(null,seq9665);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__9666,seq9665__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9677 = arguments.length;
var i__7951__auto___9678 = (0);
while(true){
if((i__7951__auto___9678 < len__7950__auto___9677)){
args__7957__auto__.push((arguments[i__7951__auto___9678]));

var G__9679 = (i__7951__auto___9678 + (1));
i__7951__auto___9678 = G__9679;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq9667){
var G__9668 = cljs.core.first.call(null,seq9667);
var seq9667__$1 = cljs.core.next.call(null,seq9667);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__9668,seq9667__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9680 = arguments.length;
var i__7951__auto___9681 = (0);
while(true){
if((i__7951__auto___9681 < len__7950__auto___9680)){
args__7957__auto__.push((arguments[i__7951__auto___9681]));

var G__9682 = (i__7951__auto___9681 + (1));
i__7951__auto___9681 = G__9682;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq9669){
var G__9670 = cljs.core.first.call(null,seq9669);
var seq9669__$1 = cljs.core.next.call(null,seq9669);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__9670,seq9669__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9691 = arguments.length;
var i__7951__auto___9692 = (0);
while(true){
if((i__7951__auto___9692 < len__7950__auto___9691)){
args__7957__auto__.push((arguments[i__7951__auto___9692]));

var G__9693 = (i__7951__auto___9692 + (1));
i__7951__auto___9692 = G__9693;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq9683){
var G__9684 = cljs.core.first.call(null,seq9683);
var seq9683__$1 = cljs.core.next.call(null,seq9683);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__9684,seq9683__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9694 = arguments.length;
var i__7951__auto___9695 = (0);
while(true){
if((i__7951__auto___9695 < len__7950__auto___9694)){
args__7957__auto__.push((arguments[i__7951__auto___9695]));

var G__9696 = (i__7951__auto___9695 + (1));
i__7951__auto___9695 = G__9696;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq9685){
var G__9686 = cljs.core.first.call(null,seq9685);
var seq9685__$1 = cljs.core.next.call(null,seq9685);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9686,seq9685__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9697 = arguments.length;
var i__7951__auto___9698 = (0);
while(true){
if((i__7951__auto___9698 < len__7950__auto___9697)){
args__7957__auto__.push((arguments[i__7951__auto___9698]));

var G__9699 = (i__7951__auto___9698 + (1));
i__7951__auto___9698 = G__9699;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq9687){
var G__9688 = cljs.core.first.call(null,seq9687);
var seq9687__$1 = cljs.core.next.call(null,seq9687);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9688,seq9687__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9700 = arguments.length;
var i__7951__auto___9701 = (0);
while(true){
if((i__7951__auto___9701 < len__7950__auto___9700)){
args__7957__auto__.push((arguments[i__7951__auto___9701]));

var G__9702 = (i__7951__auto___9701 + (1));
i__7951__auto___9701 = G__9702;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq9689){
var G__9690 = cljs.core.first.call(null,seq9689);
var seq9689__$1 = cljs.core.next.call(null,seq9689);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9690,seq9689__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq9703){
var G__9704 = cljs.core.first.call(null,seq9703);
var seq9703__$1 = cljs.core.next.call(null,seq9703);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__9704,seq9703__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9714 = arguments.length;
var i__7951__auto___9715 = (0);
while(true){
if((i__7951__auto___9715 < len__7950__auto___9714)){
args__7957__auto__.push((arguments[i__7951__auto___9715]));

var G__9716 = (i__7951__auto___9715 + (1));
i__7951__auto___9715 = G__9716;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq9705){
var G__9706 = cljs.core.first.call(null,seq9705);
var seq9705__$1 = cljs.core.next.call(null,seq9705);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__9706,seq9705__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9717 = arguments.length;
var i__7951__auto___9718 = (0);
while(true){
if((i__7951__auto___9718 < len__7950__auto___9717)){
args__7957__auto__.push((arguments[i__7951__auto___9718]));

var G__9719 = (i__7951__auto___9718 + (1));
i__7951__auto___9718 = G__9719;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq9707){
var G__9708 = cljs.core.first.call(null,seq9707);
var seq9707__$1 = cljs.core.next.call(null,seq9707);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__9708,seq9707__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9720 = arguments.length;
var i__7951__auto___9721 = (0);
while(true){
if((i__7951__auto___9721 < len__7950__auto___9720)){
args__7957__auto__.push((arguments[i__7951__auto___9721]));

var G__9722 = (i__7951__auto___9721 + (1));
i__7951__auto___9721 = G__9722;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq9709){
var G__9710 = cljs.core.first.call(null,seq9709);
var seq9709__$1 = cljs.core.next.call(null,seq9709);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__9710,seq9709__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__9562__auto__,rest__9563__auto__){
var convert_case__9564__auto__ = (function (p1__9561__9565__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__9561__9565__auto__,rest__9563__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__9562__auto__,convert_case__9564__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq9723){
var G__9724 = cljs.core.first.call(null,seq9723);
var seq9723__$1 = cljs.core.next.call(null,seq9723);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__9724,seq9723__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9734 = arguments.length;
var i__7951__auto___9735 = (0);
while(true){
if((i__7951__auto___9735 < len__7950__auto___9734)){
args__7957__auto__.push((arguments[i__7951__auto___9735]));

var G__9736 = (i__7951__auto___9735 + (1));
i__7951__auto___9735 = G__9736;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq9725){
var G__9726 = cljs.core.first.call(null,seq9725);
var seq9725__$1 = cljs.core.next.call(null,seq9725);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__9726,seq9725__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9737 = arguments.length;
var i__7951__auto___9738 = (0);
while(true){
if((i__7951__auto___9738 < len__7950__auto___9737)){
args__7957__auto__.push((arguments[i__7951__auto___9738]));

var G__9739 = (i__7951__auto___9738 + (1));
i__7951__auto___9738 = G__9739;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq9727){
var G__9728 = cljs.core.first.call(null,seq9727);
var seq9727__$1 = cljs.core.next.call(null,seq9727);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__9728,seq9727__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9740 = arguments.length;
var i__7951__auto___9741 = (0);
while(true){
if((i__7951__auto___9741 < len__7950__auto___9740)){
args__7957__auto__.push((arguments[i__7951__auto___9741]));

var G__9742 = (i__7951__auto___9741 + (1));
i__7951__auto___9741 = G__9742;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__9567__auto__,rest__9568__auto__){
if(!((s__9567__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__9567__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__9567__auto__),rest__9568__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq9729){
var G__9730 = cljs.core.first.call(null,seq9729);
var seq9729__$1 = cljs.core.next.call(null,seq9729);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__9730,seq9729__$1);
});


//# sourceMappingURL=core.js.map