// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
var args__9526__auto__ = [];
var len__9519__auto___14073 = arguments.length;
var i__9520__auto___14074 = (0);
while(true){
if((i__9520__auto___14074 < len__9519__auto___14073)){
args__9526__auto__.push((arguments[i__9520__auto___14074]));

var G__14075 = (i__9520__auto___14074 + (1));
i__9520__auto___14074 = G__14075;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((4) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9527__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq14068){
var G__14069 = cljs.core.first(seq14068);
var seq14068__$1 = cljs.core.next(seq14068);
var G__14070 = cljs.core.first(seq14068__$1);
var seq14068__$2 = cljs.core.next(seq14068__$1);
var G__14071 = cljs.core.first(seq14068__$2);
var seq14068__$3 = cljs.core.next(seq14068__$2);
var G__14072 = cljs.core.first(seq14068__$3);
var seq14068__$4 = cljs.core.next(seq14068__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__14069,G__14070,G__14071,G__14072,seq14068__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14084 = arguments.length;
var i__9520__auto___14085 = (0);
while(true){
if((i__9520__auto___14085 < len__9519__auto___14084)){
args__9526__auto__.push((arguments[i__9520__auto___14085]));

var G__14086 = (i__9520__auto___14085 + (1));
i__9520__auto___14085 = G__14086;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq14076){
var G__14077 = cljs.core.first(seq14076);
var seq14076__$1 = cljs.core.next(seq14076);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__14077,seq14076__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14087 = arguments.length;
var i__9520__auto___14088 = (0);
while(true){
if((i__9520__auto___14088 < len__9519__auto___14087)){
args__9526__auto__.push((arguments[i__9520__auto___14088]));

var G__14089 = (i__9520__auto___14088 + (1));
i__9520__auto___14088 = G__14089;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq14078){
var G__14079 = cljs.core.first(seq14078);
var seq14078__$1 = cljs.core.next(seq14078);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14079,seq14078__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14090 = arguments.length;
var i__9520__auto___14091 = (0);
while(true){
if((i__9520__auto___14091 < len__9519__auto___14090)){
args__9526__auto__.push((arguments[i__9520__auto___14091]));

var G__14092 = (i__9520__auto___14091 + (1));
i__9520__auto___14091 = G__14092;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq14080){
var G__14081 = cljs.core.first(seq14080);
var seq14080__$1 = cljs.core.next(seq14080);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14081,seq14080__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14093 = arguments.length;
var i__9520__auto___14094 = (0);
while(true){
if((i__9520__auto___14094 < len__9519__auto___14093)){
args__9526__auto__.push((arguments[i__9520__auto___14094]));

var G__14095 = (i__9520__auto___14094 + (1));
i__9520__auto___14094 = G__14095;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq14082){
var G__14083 = cljs.core.first(seq14082);
var seq14082__$1 = cljs.core.next(seq14082);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__14083,seq14082__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14104 = arguments.length;
var i__9520__auto___14105 = (0);
while(true){
if((i__9520__auto___14105 < len__9519__auto___14104)){
args__9526__auto__.push((arguments[i__9520__auto___14105]));

var G__14106 = (i__9520__auto___14105 + (1));
i__9520__auto___14105 = G__14106;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq14096){
var G__14097 = cljs.core.first(seq14096);
var seq14096__$1 = cljs.core.next(seq14096);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__14097,seq14096__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14107 = arguments.length;
var i__9520__auto___14108 = (0);
while(true){
if((i__9520__auto___14108 < len__9519__auto___14107)){
args__9526__auto__.push((arguments[i__9520__auto___14108]));

var G__14109 = (i__9520__auto___14108 + (1));
i__9520__auto___14108 = G__14109;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first(seq14098);
var seq14098__$1 = cljs.core.next(seq14098);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14099,seq14098__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14110 = arguments.length;
var i__9520__auto___14111 = (0);
while(true){
if((i__9520__auto___14111 < len__9519__auto___14110)){
args__9526__auto__.push((arguments[i__9520__auto___14111]));

var G__14112 = (i__9520__auto___14111 + (1));
i__9520__auto___14111 = G__14112;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq14100){
var G__14101 = cljs.core.first(seq14100);
var seq14100__$1 = cljs.core.next(seq14100);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14101,seq14100__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14113 = arguments.length;
var i__9520__auto___14114 = (0);
while(true){
if((i__9520__auto___14114 < len__9519__auto___14113)){
args__9526__auto__.push((arguments[i__9520__auto___14114]));

var G__14115 = (i__9520__auto___14114 + (1));
i__9520__auto___14114 = G__14115;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq14102){
var G__14103 = cljs.core.first(seq14102);
var seq14102__$1 = cljs.core.next(seq14102);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14103,seq14102__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14124 = arguments.length;
var i__9520__auto___14125 = (0);
while(true){
if((i__9520__auto___14125 < len__9519__auto___14124)){
args__9526__auto__.push((arguments[i__9520__auto___14125]));

var G__14126 = (i__9520__auto___14125 + (1));
i__9520__auto___14125 = G__14126;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq14116){
var G__14117 = cljs.core.first(seq14116);
var seq14116__$1 = cljs.core.next(seq14116);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__14117,seq14116__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14127 = arguments.length;
var i__9520__auto___14128 = (0);
while(true){
if((i__9520__auto___14128 < len__9519__auto___14127)){
args__9526__auto__.push((arguments[i__9520__auto___14128]));

var G__14129 = (i__9520__auto___14128 + (1));
i__9520__auto___14128 = G__14129;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq14118){
var G__14119 = cljs.core.first(seq14118);
var seq14118__$1 = cljs.core.next(seq14118);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14119,seq14118__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14130 = arguments.length;
var i__9520__auto___14131 = (0);
while(true){
if((i__9520__auto___14131 < len__9519__auto___14130)){
args__9526__auto__.push((arguments[i__9520__auto___14131]));

var G__14132 = (i__9520__auto___14131 + (1));
i__9520__auto___14131 = G__14132;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq14120){
var G__14121 = cljs.core.first(seq14120);
var seq14120__$1 = cljs.core.next(seq14120);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14121,seq14120__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14133 = arguments.length;
var i__9520__auto___14134 = (0);
while(true){
if((i__9520__auto___14134 < len__9519__auto___14133)){
args__9526__auto__.push((arguments[i__9520__auto___14134]));

var G__14135 = (i__9520__auto___14134 + (1));
i__9520__auto___14134 = G__14135;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq14122){
var G__14123 = cljs.core.first(seq14122);
var seq14122__$1 = cljs.core.next(seq14122);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__14123,seq14122__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14144 = arguments.length;
var i__9520__auto___14145 = (0);
while(true){
if((i__9520__auto___14145 < len__9519__auto___14144)){
args__9526__auto__.push((arguments[i__9520__auto___14145]));

var G__14146 = (i__9520__auto___14145 + (1));
i__9520__auto___14145 = G__14146;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq14136){
var G__14137 = cljs.core.first(seq14136);
var seq14136__$1 = cljs.core.next(seq14136);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__14137,seq14136__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14147 = arguments.length;
var i__9520__auto___14148 = (0);
while(true){
if((i__9520__auto___14148 < len__9519__auto___14147)){
args__9526__auto__.push((arguments[i__9520__auto___14148]));

var G__14149 = (i__9520__auto___14148 + (1));
i__9520__auto___14148 = G__14149;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq14138){
var G__14139 = cljs.core.first(seq14138);
var seq14138__$1 = cljs.core.next(seq14138);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__14139,seq14138__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14150 = arguments.length;
var i__9520__auto___14151 = (0);
while(true){
if((i__9520__auto___14151 < len__9519__auto___14150)){
args__9526__auto__.push((arguments[i__9520__auto___14151]));

var G__14152 = (i__9520__auto___14151 + (1));
i__9520__auto___14151 = G__14152;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq14140){
var G__14141 = cljs.core.first(seq14140);
var seq14140__$1 = cljs.core.next(seq14140);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__14141,seq14140__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14153 = arguments.length;
var i__9520__auto___14154 = (0);
while(true){
if((i__9520__auto___14154 < len__9519__auto___14153)){
args__9526__auto__.push((arguments[i__9520__auto___14154]));

var G__14155 = (i__9520__auto___14154 + (1));
i__9520__auto___14154 = G__14155;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq14142){
var G__14143 = cljs.core.first(seq14142);
var seq14142__$1 = cljs.core.next(seq14142);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__14143,seq14142__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14164 = arguments.length;
var i__9520__auto___14165 = (0);
while(true){
if((i__9520__auto___14165 < len__9519__auto___14164)){
args__9526__auto__.push((arguments[i__9520__auto___14165]));

var G__14166 = (i__9520__auto___14165 + (1));
i__9520__auto___14165 = G__14166;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq14156){
var G__14157 = cljs.core.first(seq14156);
var seq14156__$1 = cljs.core.next(seq14156);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__14157,seq14156__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14167 = arguments.length;
var i__9520__auto___14168 = (0);
while(true){
if((i__9520__auto___14168 < len__9519__auto___14167)){
args__9526__auto__.push((arguments[i__9520__auto___14168]));

var G__14169 = (i__9520__auto___14168 + (1));
i__9520__auto___14168 = G__14169;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq14158){
var G__14159 = cljs.core.first(seq14158);
var seq14158__$1 = cljs.core.next(seq14158);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14159,seq14158__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14170 = arguments.length;
var i__9520__auto___14171 = (0);
while(true){
if((i__9520__auto___14171 < len__9519__auto___14170)){
args__9526__auto__.push((arguments[i__9520__auto___14171]));

var G__14172 = (i__9520__auto___14171 + (1));
i__9520__auto___14171 = G__14172;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq14160){
var G__14161 = cljs.core.first(seq14160);
var seq14160__$1 = cljs.core.next(seq14160);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14161,seq14160__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14173 = arguments.length;
var i__9520__auto___14174 = (0);
while(true){
if((i__9520__auto___14174 < len__9519__auto___14173)){
args__9526__auto__.push((arguments[i__9520__auto___14174]));

var G__14175 = (i__9520__auto___14174 + (1));
i__9520__auto___14174 = G__14175;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq14162){
var G__14163 = cljs.core.first(seq14162);
var seq14162__$1 = cljs.core.next(seq14162);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__14163,seq14162__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14184 = arguments.length;
var i__9520__auto___14185 = (0);
while(true){
if((i__9520__auto___14185 < len__9519__auto___14184)){
args__9526__auto__.push((arguments[i__9520__auto___14185]));

var G__14186 = (i__9520__auto___14185 + (1));
i__9520__auto___14185 = G__14186;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq14176){
var G__14177 = cljs.core.first(seq14176);
var seq14176__$1 = cljs.core.next(seq14176);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__14177,seq14176__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14187 = arguments.length;
var i__9520__auto___14188 = (0);
while(true){
if((i__9520__auto___14188 < len__9519__auto___14187)){
args__9526__auto__.push((arguments[i__9520__auto___14188]));

var G__14189 = (i__9520__auto___14188 + (1));
i__9520__auto___14188 = G__14189;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq14178){
var G__14179 = cljs.core.first(seq14178);
var seq14178__$1 = cljs.core.next(seq14178);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14179,seq14178__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14190 = arguments.length;
var i__9520__auto___14191 = (0);
while(true){
if((i__9520__auto___14191 < len__9519__auto___14190)){
args__9526__auto__.push((arguments[i__9520__auto___14191]));

var G__14192 = (i__9520__auto___14191 + (1));
i__9520__auto___14191 = G__14192;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq14180){
var G__14181 = cljs.core.first(seq14180);
var seq14180__$1 = cljs.core.next(seq14180);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14181,seq14180__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14193 = arguments.length;
var i__9520__auto___14194 = (0);
while(true){
if((i__9520__auto___14194 < len__9519__auto___14193)){
args__9526__auto__.push((arguments[i__9520__auto___14194]));

var G__14195 = (i__9520__auto___14194 + (1));
i__9520__auto___14194 = G__14195;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq14182){
var G__14183 = cljs.core.first(seq14182);
var seq14182__$1 = cljs.core.next(seq14182);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__14183,seq14182__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14204 = arguments.length;
var i__9520__auto___14205 = (0);
while(true){
if((i__9520__auto___14205 < len__9519__auto___14204)){
args__9526__auto__.push((arguments[i__9520__auto___14205]));

var G__14206 = (i__9520__auto___14205 + (1));
i__9520__auto___14205 = G__14206;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq14196){
var G__14197 = cljs.core.first(seq14196);
var seq14196__$1 = cljs.core.next(seq14196);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__14197,seq14196__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14207 = arguments.length;
var i__9520__auto___14208 = (0);
while(true){
if((i__9520__auto___14208 < len__9519__auto___14207)){
args__9526__auto__.push((arguments[i__9520__auto___14208]));

var G__14209 = (i__9520__auto___14208 + (1));
i__9520__auto___14208 = G__14209;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq14198){
var G__14199 = cljs.core.first(seq14198);
var seq14198__$1 = cljs.core.next(seq14198);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14199,seq14198__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14210 = arguments.length;
var i__9520__auto___14211 = (0);
while(true){
if((i__9520__auto___14211 < len__9519__auto___14210)){
args__9526__auto__.push((arguments[i__9520__auto___14211]));

var G__14212 = (i__9520__auto___14211 + (1));
i__9520__auto___14211 = G__14212;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq14200){
var G__14201 = cljs.core.first(seq14200);
var seq14200__$1 = cljs.core.next(seq14200);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14201,seq14200__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___14213 = arguments.length;
var i__9520__auto___14214 = (0);
while(true){
if((i__9520__auto___14214 < len__9519__auto___14213)){
args__9526__auto__.push((arguments[i__9520__auto___14214]));

var G__14215 = (i__9520__auto___14214 + (1));
i__9520__auto___14214 = G__14215;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq14202){
var G__14203 = cljs.core.first(seq14202);
var seq14202__$1 = cljs.core.next(seq14202);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14203,seq14202__$1);
});

