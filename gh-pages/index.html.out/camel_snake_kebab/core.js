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
var len__9519__auto___24339 = arguments.length;
var i__9520__auto___24340 = (0);
while(true){
if((i__9520__auto___24340 < len__9519__auto___24339)){
args__9526__auto__.push((arguments[i__9520__auto___24340]));

var G__24341 = (i__9520__auto___24340 + (1));
i__9520__auto___24340 = G__24341;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24334){
var G__24335 = cljs.core.first(seq24334);
var seq24334__$1 = cljs.core.next(seq24334);
var G__24336 = cljs.core.first(seq24334__$1);
var seq24334__$2 = cljs.core.next(seq24334__$1);
var G__24337 = cljs.core.first(seq24334__$2);
var seq24334__$3 = cljs.core.next(seq24334__$2);
var G__24338 = cljs.core.first(seq24334__$3);
var seq24334__$4 = cljs.core.next(seq24334__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24335,G__24336,G__24337,G__24338,seq24334__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24350 = arguments.length;
var i__9520__auto___24351 = (0);
while(true){
if((i__9520__auto___24351 < len__9519__auto___24350)){
args__9526__auto__.push((arguments[i__9520__auto___24351]));

var G__24352 = (i__9520__auto___24351 + (1));
i__9520__auto___24351 = G__24352;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24342){
var G__24343 = cljs.core.first(seq24342);
var seq24342__$1 = cljs.core.next(seq24342);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24343,seq24342__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24353 = arguments.length;
var i__9520__auto___24354 = (0);
while(true){
if((i__9520__auto___24354 < len__9519__auto___24353)){
args__9526__auto__.push((arguments[i__9520__auto___24354]));

var G__24355 = (i__9520__auto___24354 + (1));
i__9520__auto___24354 = G__24355;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24344){
var G__24345 = cljs.core.first(seq24344);
var seq24344__$1 = cljs.core.next(seq24344);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24345,seq24344__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24356 = arguments.length;
var i__9520__auto___24357 = (0);
while(true){
if((i__9520__auto___24357 < len__9519__auto___24356)){
args__9526__auto__.push((arguments[i__9520__auto___24357]));

var G__24358 = (i__9520__auto___24357 + (1));
i__9520__auto___24357 = G__24358;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24346){
var G__24347 = cljs.core.first(seq24346);
var seq24346__$1 = cljs.core.next(seq24346);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24347,seq24346__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24359 = arguments.length;
var i__9520__auto___24360 = (0);
while(true){
if((i__9520__auto___24360 < len__9519__auto___24359)){
args__9526__auto__.push((arguments[i__9520__auto___24360]));

var G__24361 = (i__9520__auto___24360 + (1));
i__9520__auto___24360 = G__24361;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24348){
var G__24349 = cljs.core.first(seq24348);
var seq24348__$1 = cljs.core.next(seq24348);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24349,seq24348__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24370 = arguments.length;
var i__9520__auto___24371 = (0);
while(true){
if((i__9520__auto___24371 < len__9519__auto___24370)){
args__9526__auto__.push((arguments[i__9520__auto___24371]));

var G__24372 = (i__9520__auto___24371 + (1));
i__9520__auto___24371 = G__24372;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24362){
var G__24363 = cljs.core.first(seq24362);
var seq24362__$1 = cljs.core.next(seq24362);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24363,seq24362__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24373 = arguments.length;
var i__9520__auto___24374 = (0);
while(true){
if((i__9520__auto___24374 < len__9519__auto___24373)){
args__9526__auto__.push((arguments[i__9520__auto___24374]));

var G__24375 = (i__9520__auto___24374 + (1));
i__9520__auto___24374 = G__24375;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24364){
var G__24365 = cljs.core.first(seq24364);
var seq24364__$1 = cljs.core.next(seq24364);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24365,seq24364__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24376 = arguments.length;
var i__9520__auto___24377 = (0);
while(true){
if((i__9520__auto___24377 < len__9519__auto___24376)){
args__9526__auto__.push((arguments[i__9520__auto___24377]));

var G__24378 = (i__9520__auto___24377 + (1));
i__9520__auto___24377 = G__24378;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24366){
var G__24367 = cljs.core.first(seq24366);
var seq24366__$1 = cljs.core.next(seq24366);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24367,seq24366__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24379 = arguments.length;
var i__9520__auto___24380 = (0);
while(true){
if((i__9520__auto___24380 < len__9519__auto___24379)){
args__9526__auto__.push((arguments[i__9520__auto___24380]));

var G__24381 = (i__9520__auto___24380 + (1));
i__9520__auto___24380 = G__24381;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24368){
var G__24369 = cljs.core.first(seq24368);
var seq24368__$1 = cljs.core.next(seq24368);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24369,seq24368__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24390 = arguments.length;
var i__9520__auto___24391 = (0);
while(true){
if((i__9520__auto___24391 < len__9519__auto___24390)){
args__9526__auto__.push((arguments[i__9520__auto___24391]));

var G__24392 = (i__9520__auto___24391 + (1));
i__9520__auto___24391 = G__24392;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24382){
var G__24383 = cljs.core.first(seq24382);
var seq24382__$1 = cljs.core.next(seq24382);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24383,seq24382__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24393 = arguments.length;
var i__9520__auto___24394 = (0);
while(true){
if((i__9520__auto___24394 < len__9519__auto___24393)){
args__9526__auto__.push((arguments[i__9520__auto___24394]));

var G__24395 = (i__9520__auto___24394 + (1));
i__9520__auto___24394 = G__24395;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24384){
var G__24385 = cljs.core.first(seq24384);
var seq24384__$1 = cljs.core.next(seq24384);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24385,seq24384__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24396 = arguments.length;
var i__9520__auto___24397 = (0);
while(true){
if((i__9520__auto___24397 < len__9519__auto___24396)){
args__9526__auto__.push((arguments[i__9520__auto___24397]));

var G__24398 = (i__9520__auto___24397 + (1));
i__9520__auto___24397 = G__24398;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24386){
var G__24387 = cljs.core.first(seq24386);
var seq24386__$1 = cljs.core.next(seq24386);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24387,seq24386__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24399 = arguments.length;
var i__9520__auto___24400 = (0);
while(true){
if((i__9520__auto___24400 < len__9519__auto___24399)){
args__9526__auto__.push((arguments[i__9520__auto___24400]));

var G__24401 = (i__9520__auto___24400 + (1));
i__9520__auto___24400 = G__24401;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24388){
var G__24389 = cljs.core.first(seq24388);
var seq24388__$1 = cljs.core.next(seq24388);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24389,seq24388__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24410 = arguments.length;
var i__9520__auto___24411 = (0);
while(true){
if((i__9520__auto___24411 < len__9519__auto___24410)){
args__9526__auto__.push((arguments[i__9520__auto___24411]));

var G__24412 = (i__9520__auto___24411 + (1));
i__9520__auto___24411 = G__24412;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24402){
var G__24403 = cljs.core.first(seq24402);
var seq24402__$1 = cljs.core.next(seq24402);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24403,seq24402__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24413 = arguments.length;
var i__9520__auto___24414 = (0);
while(true){
if((i__9520__auto___24414 < len__9519__auto___24413)){
args__9526__auto__.push((arguments[i__9520__auto___24414]));

var G__24415 = (i__9520__auto___24414 + (1));
i__9520__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24404){
var G__24405 = cljs.core.first(seq24404);
var seq24404__$1 = cljs.core.next(seq24404);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24405,seq24404__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24416 = arguments.length;
var i__9520__auto___24417 = (0);
while(true){
if((i__9520__auto___24417 < len__9519__auto___24416)){
args__9526__auto__.push((arguments[i__9520__auto___24417]));

var G__24418 = (i__9520__auto___24417 + (1));
i__9520__auto___24417 = G__24418;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24406){
var G__24407 = cljs.core.first(seq24406);
var seq24406__$1 = cljs.core.next(seq24406);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24407,seq24406__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24419 = arguments.length;
var i__9520__auto___24420 = (0);
while(true){
if((i__9520__auto___24420 < len__9519__auto___24419)){
args__9526__auto__.push((arguments[i__9520__auto___24420]));

var G__24421 = (i__9520__auto___24420 + (1));
i__9520__auto___24420 = G__24421;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24408){
var G__24409 = cljs.core.first(seq24408);
var seq24408__$1 = cljs.core.next(seq24408);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24409,seq24408__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24430 = arguments.length;
var i__9520__auto___24431 = (0);
while(true){
if((i__9520__auto___24431 < len__9519__auto___24430)){
args__9526__auto__.push((arguments[i__9520__auto___24431]));

var G__24432 = (i__9520__auto___24431 + (1));
i__9520__auto___24431 = G__24432;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24422){
var G__24423 = cljs.core.first(seq24422);
var seq24422__$1 = cljs.core.next(seq24422);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24423,seq24422__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24433 = arguments.length;
var i__9520__auto___24434 = (0);
while(true){
if((i__9520__auto___24434 < len__9519__auto___24433)){
args__9526__auto__.push((arguments[i__9520__auto___24434]));

var G__24435 = (i__9520__auto___24434 + (1));
i__9520__auto___24434 = G__24435;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24424){
var G__24425 = cljs.core.first(seq24424);
var seq24424__$1 = cljs.core.next(seq24424);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24425,seq24424__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24436 = arguments.length;
var i__9520__auto___24437 = (0);
while(true){
if((i__9520__auto___24437 < len__9519__auto___24436)){
args__9526__auto__.push((arguments[i__9520__auto___24437]));

var G__24438 = (i__9520__auto___24437 + (1));
i__9520__auto___24437 = G__24438;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24426){
var G__24427 = cljs.core.first(seq24426);
var seq24426__$1 = cljs.core.next(seq24426);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24427,seq24426__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24439 = arguments.length;
var i__9520__auto___24440 = (0);
while(true){
if((i__9520__auto___24440 < len__9519__auto___24439)){
args__9526__auto__.push((arguments[i__9520__auto___24440]));

var G__24441 = (i__9520__auto___24440 + (1));
i__9520__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24428){
var G__24429 = cljs.core.first(seq24428);
var seq24428__$1 = cljs.core.next(seq24428);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24429,seq24428__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24450 = arguments.length;
var i__9520__auto___24451 = (0);
while(true){
if((i__9520__auto___24451 < len__9519__auto___24450)){
args__9526__auto__.push((arguments[i__9520__auto___24451]));

var G__24452 = (i__9520__auto___24451 + (1));
i__9520__auto___24451 = G__24452;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24442){
var G__24443 = cljs.core.first(seq24442);
var seq24442__$1 = cljs.core.next(seq24442);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24443,seq24442__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24453 = arguments.length;
var i__9520__auto___24454 = (0);
while(true){
if((i__9520__auto___24454 < len__9519__auto___24453)){
args__9526__auto__.push((arguments[i__9520__auto___24454]));

var G__24455 = (i__9520__auto___24454 + (1));
i__9520__auto___24454 = G__24455;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24444){
var G__24445 = cljs.core.first(seq24444);
var seq24444__$1 = cljs.core.next(seq24444);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24445,seq24444__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24456 = arguments.length;
var i__9520__auto___24457 = (0);
while(true){
if((i__9520__auto___24457 < len__9519__auto___24456)){
args__9526__auto__.push((arguments[i__9520__auto___24457]));

var G__24458 = (i__9520__auto___24457 + (1));
i__9520__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24446){
var G__24447 = cljs.core.first(seq24446);
var seq24446__$1 = cljs.core.next(seq24446);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24447,seq24446__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24459 = arguments.length;
var i__9520__auto___24460 = (0);
while(true){
if((i__9520__auto___24460 < len__9519__auto___24459)){
args__9526__auto__.push((arguments[i__9520__auto___24460]));

var G__24461 = (i__9520__auto___24460 + (1));
i__9520__auto___24460 = G__24461;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24448){
var G__24449 = cljs.core.first(seq24448);
var seq24448__$1 = cljs.core.next(seq24448);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24449,seq24448__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24470 = arguments.length;
var i__9520__auto___24471 = (0);
while(true){
if((i__9520__auto___24471 < len__9519__auto___24470)){
args__9526__auto__.push((arguments[i__9520__auto___24471]));

var G__24472 = (i__9520__auto___24471 + (1));
i__9520__auto___24471 = G__24472;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24297__auto__,rest__24298__auto__){
var convert_case__24299__auto__ = (function (p1__24296__24300__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24296__24300__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24298__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24297__auto__,convert_case__24299__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24462){
var G__24463 = cljs.core.first(seq24462);
var seq24462__$1 = cljs.core.next(seq24462);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24463,seq24462__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24473 = arguments.length;
var i__9520__auto___24474 = (0);
while(true){
if((i__9520__auto___24474 < len__9519__auto___24473)){
args__9526__auto__.push((arguments[i__9520__auto___24474]));

var G__24475 = (i__9520__auto___24474 + (1));
i__9520__auto___24474 = G__24475;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24464){
var G__24465 = cljs.core.first(seq24464);
var seq24464__$1 = cljs.core.next(seq24464);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24465,seq24464__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24476 = arguments.length;
var i__9520__auto___24477 = (0);
while(true){
if((i__9520__auto___24477 < len__9519__auto___24476)){
args__9526__auto__.push((arguments[i__9520__auto___24477]));

var G__24478 = (i__9520__auto___24477 + (1));
i__9520__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24466){
var G__24467 = cljs.core.first(seq24466);
var seq24466__$1 = cljs.core.next(seq24466);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24467,seq24466__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24479 = arguments.length;
var i__9520__auto___24480 = (0);
while(true){
if((i__9520__auto___24480 < len__9519__auto___24479)){
args__9526__auto__.push((arguments[i__9520__auto___24480]));

var G__24481 = (i__9520__auto___24480 + (1));
i__9520__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24302__auto__,rest__24303__auto__){
if(!((s__24302__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24302__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24302__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24303__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24468){
var G__24469 = cljs.core.first(seq24468);
var seq24468__$1 = cljs.core.next(seq24468);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24469,seq24468__$1);
});

