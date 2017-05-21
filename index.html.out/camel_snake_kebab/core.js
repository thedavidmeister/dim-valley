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
var len__8981__auto___21573 = arguments.length;
var i__8982__auto___21574 = (0);
while(true){
if((i__8982__auto___21574 < len__8981__auto___21573)){
args__8988__auto__.push((arguments[i__8982__auto___21574]));

var G__21575 = (i__8982__auto___21574 + (1));
i__8982__auto___21574 = G__21575;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq21568){
var G__21569 = cljs.core.first(seq21568);
var seq21568__$1 = cljs.core.next(seq21568);
var G__21570 = cljs.core.first(seq21568__$1);
var seq21568__$2 = cljs.core.next(seq21568__$1);
var G__21571 = cljs.core.first(seq21568__$2);
var seq21568__$3 = cljs.core.next(seq21568__$2);
var G__21572 = cljs.core.first(seq21568__$3);
var seq21568__$4 = cljs.core.next(seq21568__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__21569,G__21570,G__21571,G__21572,seq21568__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21584 = arguments.length;
var i__8982__auto___21585 = (0);
while(true){
if((i__8982__auto___21585 < len__8981__auto___21584)){
args__8988__auto__.push((arguments[i__8982__auto___21585]));

var G__21586 = (i__8982__auto___21585 + (1));
i__8982__auto___21585 = G__21586;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq21576){
var G__21577 = cljs.core.first(seq21576);
var seq21576__$1 = cljs.core.next(seq21576);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__21577,seq21576__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21587 = arguments.length;
var i__8982__auto___21588 = (0);
while(true){
if((i__8982__auto___21588 < len__8981__auto___21587)){
args__8988__auto__.push((arguments[i__8982__auto___21588]));

var G__21589 = (i__8982__auto___21588 + (1));
i__8982__auto___21588 = G__21589;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq21578){
var G__21579 = cljs.core.first(seq21578);
var seq21578__$1 = cljs.core.next(seq21578);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21579,seq21578__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21590 = arguments.length;
var i__8982__auto___21591 = (0);
while(true){
if((i__8982__auto___21591 < len__8981__auto___21590)){
args__8988__auto__.push((arguments[i__8982__auto___21591]));

var G__21592 = (i__8982__auto___21591 + (1));
i__8982__auto___21591 = G__21592;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq21580){
var G__21581 = cljs.core.first(seq21580);
var seq21580__$1 = cljs.core.next(seq21580);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21581,seq21580__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21593 = arguments.length;
var i__8982__auto___21594 = (0);
while(true){
if((i__8982__auto___21594 < len__8981__auto___21593)){
args__8988__auto__.push((arguments[i__8982__auto___21594]));

var G__21595 = (i__8982__auto___21594 + (1));
i__8982__auto___21594 = G__21595;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq21582){
var G__21583 = cljs.core.first(seq21582);
var seq21582__$1 = cljs.core.next(seq21582);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21583,seq21582__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21604 = arguments.length;
var i__8982__auto___21605 = (0);
while(true){
if((i__8982__auto___21605 < len__8981__auto___21604)){
args__8988__auto__.push((arguments[i__8982__auto___21605]));

var G__21606 = (i__8982__auto___21605 + (1));
i__8982__auto___21605 = G__21606;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq21596){
var G__21597 = cljs.core.first(seq21596);
var seq21596__$1 = cljs.core.next(seq21596);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__21597,seq21596__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21607 = arguments.length;
var i__8982__auto___21608 = (0);
while(true){
if((i__8982__auto___21608 < len__8981__auto___21607)){
args__8988__auto__.push((arguments[i__8982__auto___21608]));

var G__21609 = (i__8982__auto___21608 + (1));
i__8982__auto___21608 = G__21609;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq21598){
var G__21599 = cljs.core.first(seq21598);
var seq21598__$1 = cljs.core.next(seq21598);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21599,seq21598__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21610 = arguments.length;
var i__8982__auto___21611 = (0);
while(true){
if((i__8982__auto___21611 < len__8981__auto___21610)){
args__8988__auto__.push((arguments[i__8982__auto___21611]));

var G__21612 = (i__8982__auto___21611 + (1));
i__8982__auto___21611 = G__21612;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq21600){
var G__21601 = cljs.core.first(seq21600);
var seq21600__$1 = cljs.core.next(seq21600);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21601,seq21600__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21613 = arguments.length;
var i__8982__auto___21614 = (0);
while(true){
if((i__8982__auto___21614 < len__8981__auto___21613)){
args__8988__auto__.push((arguments[i__8982__auto___21614]));

var G__21615 = (i__8982__auto___21614 + (1));
i__8982__auto___21614 = G__21615;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq21602){
var G__21603 = cljs.core.first(seq21602);
var seq21602__$1 = cljs.core.next(seq21602);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21603,seq21602__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21624 = arguments.length;
var i__8982__auto___21625 = (0);
while(true){
if((i__8982__auto___21625 < len__8981__auto___21624)){
args__8988__auto__.push((arguments[i__8982__auto___21625]));

var G__21626 = (i__8982__auto___21625 + (1));
i__8982__auto___21625 = G__21626;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq21616){
var G__21617 = cljs.core.first(seq21616);
var seq21616__$1 = cljs.core.next(seq21616);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__21617,seq21616__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21627 = arguments.length;
var i__8982__auto___21628 = (0);
while(true){
if((i__8982__auto___21628 < len__8981__auto___21627)){
args__8988__auto__.push((arguments[i__8982__auto___21628]));

var G__21629 = (i__8982__auto___21628 + (1));
i__8982__auto___21628 = G__21629;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq21618){
var G__21619 = cljs.core.first(seq21618);
var seq21618__$1 = cljs.core.next(seq21618);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__21619,seq21618__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21630 = arguments.length;
var i__8982__auto___21631 = (0);
while(true){
if((i__8982__auto___21631 < len__8981__auto___21630)){
args__8988__auto__.push((arguments[i__8982__auto___21631]));

var G__21632 = (i__8982__auto___21631 + (1));
i__8982__auto___21631 = G__21632;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq21620){
var G__21621 = cljs.core.first(seq21620);
var seq21620__$1 = cljs.core.next(seq21620);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__21621,seq21620__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21633 = arguments.length;
var i__8982__auto___21634 = (0);
while(true){
if((i__8982__auto___21634 < len__8981__auto___21633)){
args__8988__auto__.push((arguments[i__8982__auto___21634]));

var G__21635 = (i__8982__auto___21634 + (1));
i__8982__auto___21634 = G__21635;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq21622){
var G__21623 = cljs.core.first(seq21622);
var seq21622__$1 = cljs.core.next(seq21622);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__21623,seq21622__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21644 = arguments.length;
var i__8982__auto___21645 = (0);
while(true){
if((i__8982__auto___21645 < len__8981__auto___21644)){
args__8988__auto__.push((arguments[i__8982__auto___21645]));

var G__21646 = (i__8982__auto___21645 + (1));
i__8982__auto___21645 = G__21646;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq21636){
var G__21637 = cljs.core.first(seq21636);
var seq21636__$1 = cljs.core.next(seq21636);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__21637,seq21636__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21647 = arguments.length;
var i__8982__auto___21648 = (0);
while(true){
if((i__8982__auto___21648 < len__8981__auto___21647)){
args__8988__auto__.push((arguments[i__8982__auto___21648]));

var G__21649 = (i__8982__auto___21648 + (1));
i__8982__auto___21648 = G__21649;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq21638){
var G__21639 = cljs.core.first(seq21638);
var seq21638__$1 = cljs.core.next(seq21638);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__21639,seq21638__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21650 = arguments.length;
var i__8982__auto___21651 = (0);
while(true){
if((i__8982__auto___21651 < len__8981__auto___21650)){
args__8988__auto__.push((arguments[i__8982__auto___21651]));

var G__21652 = (i__8982__auto___21651 + (1));
i__8982__auto___21651 = G__21652;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq21640){
var G__21641 = cljs.core.first(seq21640);
var seq21640__$1 = cljs.core.next(seq21640);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__21641,seq21640__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21653 = arguments.length;
var i__8982__auto___21654 = (0);
while(true){
if((i__8982__auto___21654 < len__8981__auto___21653)){
args__8988__auto__.push((arguments[i__8982__auto___21654]));

var G__21655 = (i__8982__auto___21654 + (1));
i__8982__auto___21654 = G__21655;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq21642){
var G__21643 = cljs.core.first(seq21642);
var seq21642__$1 = cljs.core.next(seq21642);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__21643,seq21642__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21664 = arguments.length;
var i__8982__auto___21665 = (0);
while(true){
if((i__8982__auto___21665 < len__8981__auto___21664)){
args__8988__auto__.push((arguments[i__8982__auto___21665]));

var G__21666 = (i__8982__auto___21665 + (1));
i__8982__auto___21665 = G__21666;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq21656){
var G__21657 = cljs.core.first(seq21656);
var seq21656__$1 = cljs.core.next(seq21656);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__21657,seq21656__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21667 = arguments.length;
var i__8982__auto___21668 = (0);
while(true){
if((i__8982__auto___21668 < len__8981__auto___21667)){
args__8988__auto__.push((arguments[i__8982__auto___21668]));

var G__21669 = (i__8982__auto___21668 + (1));
i__8982__auto___21668 = G__21669;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq21658){
var G__21659 = cljs.core.first(seq21658);
var seq21658__$1 = cljs.core.next(seq21658);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21659,seq21658__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21670 = arguments.length;
var i__8982__auto___21671 = (0);
while(true){
if((i__8982__auto___21671 < len__8981__auto___21670)){
args__8988__auto__.push((arguments[i__8982__auto___21671]));

var G__21672 = (i__8982__auto___21671 + (1));
i__8982__auto___21671 = G__21672;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq21660){
var G__21661 = cljs.core.first(seq21660);
var seq21660__$1 = cljs.core.next(seq21660);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21661,seq21660__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21673 = arguments.length;
var i__8982__auto___21674 = (0);
while(true){
if((i__8982__auto___21674 < len__8981__auto___21673)){
args__8988__auto__.push((arguments[i__8982__auto___21674]));

var G__21675 = (i__8982__auto___21674 + (1));
i__8982__auto___21674 = G__21675;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq21662){
var G__21663 = cljs.core.first(seq21662);
var seq21662__$1 = cljs.core.next(seq21662);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21663,seq21662__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21684 = arguments.length;
var i__8982__auto___21685 = (0);
while(true){
if((i__8982__auto___21685 < len__8981__auto___21684)){
args__8988__auto__.push((arguments[i__8982__auto___21685]));

var G__21686 = (i__8982__auto___21685 + (1));
i__8982__auto___21685 = G__21686;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq21676){
var G__21677 = cljs.core.first(seq21676);
var seq21676__$1 = cljs.core.next(seq21676);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__21677,seq21676__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21687 = arguments.length;
var i__8982__auto___21688 = (0);
while(true){
if((i__8982__auto___21688 < len__8981__auto___21687)){
args__8988__auto__.push((arguments[i__8982__auto___21688]));

var G__21689 = (i__8982__auto___21688 + (1));
i__8982__auto___21688 = G__21689;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq21678){
var G__21679 = cljs.core.first(seq21678);
var seq21678__$1 = cljs.core.next(seq21678);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__21679,seq21678__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21690 = arguments.length;
var i__8982__auto___21691 = (0);
while(true){
if((i__8982__auto___21691 < len__8981__auto___21690)){
args__8988__auto__.push((arguments[i__8982__auto___21691]));

var G__21692 = (i__8982__auto___21691 + (1));
i__8982__auto___21691 = G__21692;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq21680){
var G__21681 = cljs.core.first(seq21680);
var seq21680__$1 = cljs.core.next(seq21680);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__21681,seq21680__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21693 = arguments.length;
var i__8982__auto___21694 = (0);
while(true){
if((i__8982__auto___21694 < len__8981__auto___21693)){
args__8988__auto__.push((arguments[i__8982__auto___21694]));

var G__21695 = (i__8982__auto___21694 + (1));
i__8982__auto___21694 = G__21695;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq21682){
var G__21683 = cljs.core.first(seq21682);
var seq21682__$1 = cljs.core.next(seq21682);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__21683,seq21682__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21704 = arguments.length;
var i__8982__auto___21705 = (0);
while(true){
if((i__8982__auto___21705 < len__8981__auto___21704)){
args__8988__auto__.push((arguments[i__8982__auto___21705]));

var G__21706 = (i__8982__auto___21705 + (1));
i__8982__auto___21705 = G__21706;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__21531__auto__,rest__21532__auto__){
var convert_case__21533__auto__ = (function (p1__21530__21534__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__21530__21534__auto__,cljs.core.array_seq([rest__21532__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__21531__auto__,convert_case__21533__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq21696){
var G__21697 = cljs.core.first(seq21696);
var seq21696__$1 = cljs.core.next(seq21696);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__21697,seq21696__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21707 = arguments.length;
var i__8982__auto___21708 = (0);
while(true){
if((i__8982__auto___21708 < len__8981__auto___21707)){
args__8988__auto__.push((arguments[i__8982__auto___21708]));

var G__21709 = (i__8982__auto___21708 + (1));
i__8982__auto___21708 = G__21709;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq21698){
var G__21699 = cljs.core.first(seq21698);
var seq21698__$1 = cljs.core.next(seq21698);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__21699,seq21698__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21710 = arguments.length;
var i__8982__auto___21711 = (0);
while(true){
if((i__8982__auto___21711 < len__8981__auto___21710)){
args__8988__auto__.push((arguments[i__8982__auto___21711]));

var G__21712 = (i__8982__auto___21711 + (1));
i__8982__auto___21711 = G__21712;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq21700){
var G__21701 = cljs.core.first(seq21700);
var seq21700__$1 = cljs.core.next(seq21700);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__21701,seq21700__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___21713 = arguments.length;
var i__8982__auto___21714 = (0);
while(true){
if((i__8982__auto___21714 < len__8981__auto___21713)){
args__8988__auto__.push((arguments[i__8982__auto___21714]));

var G__21715 = (i__8982__auto___21714 + (1));
i__8982__auto___21714 = G__21715;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__21536__auto__,rest__21537__auto__){
if(!((s__21536__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__21536__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__21536__auto__),cljs.core.array_seq([rest__21537__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq21702){
var G__21703 = cljs.core.first(seq21702);
var seq21702__$1 = cljs.core.next(seq21702);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__21703,seq21702__$1);
});

