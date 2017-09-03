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
var len__8981__auto___14299 = arguments.length;
var i__8982__auto___14300 = (0);
while(true){
if((i__8982__auto___14300 < len__8981__auto___14299)){
args__8988__auto__.push((arguments[i__8982__auto___14300]));

var G__14301 = (i__8982__auto___14300 + (1));
i__8982__auto___14300 = G__14301;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq14294){
var G__14295 = cljs.core.first(seq14294);
var seq14294__$1 = cljs.core.next(seq14294);
var G__14296 = cljs.core.first(seq14294__$1);
var seq14294__$2 = cljs.core.next(seq14294__$1);
var G__14297 = cljs.core.first(seq14294__$2);
var seq14294__$3 = cljs.core.next(seq14294__$2);
var G__14298 = cljs.core.first(seq14294__$3);
var seq14294__$4 = cljs.core.next(seq14294__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__14295,G__14296,G__14297,G__14298,seq14294__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14310 = arguments.length;
var i__8982__auto___14311 = (0);
while(true){
if((i__8982__auto___14311 < len__8981__auto___14310)){
args__8988__auto__.push((arguments[i__8982__auto___14311]));

var G__14312 = (i__8982__auto___14311 + (1));
i__8982__auto___14311 = G__14312;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq14302){
var G__14303 = cljs.core.first(seq14302);
var seq14302__$1 = cljs.core.next(seq14302);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__14303,seq14302__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14313 = arguments.length;
var i__8982__auto___14314 = (0);
while(true){
if((i__8982__auto___14314 < len__8981__auto___14313)){
args__8988__auto__.push((arguments[i__8982__auto___14314]));

var G__14315 = (i__8982__auto___14314 + (1));
i__8982__auto___14314 = G__14315;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq14304){
var G__14305 = cljs.core.first(seq14304);
var seq14304__$1 = cljs.core.next(seq14304);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14305,seq14304__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14316 = arguments.length;
var i__8982__auto___14317 = (0);
while(true){
if((i__8982__auto___14317 < len__8981__auto___14316)){
args__8988__auto__.push((arguments[i__8982__auto___14317]));

var G__14318 = (i__8982__auto___14317 + (1));
i__8982__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq14306){
var G__14307 = cljs.core.first(seq14306);
var seq14306__$1 = cljs.core.next(seq14306);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14307,seq14306__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14319 = arguments.length;
var i__8982__auto___14320 = (0);
while(true){
if((i__8982__auto___14320 < len__8981__auto___14319)){
args__8988__auto__.push((arguments[i__8982__auto___14320]));

var G__14321 = (i__8982__auto___14320 + (1));
i__8982__auto___14320 = G__14321;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq14308){
var G__14309 = cljs.core.first(seq14308);
var seq14308__$1 = cljs.core.next(seq14308);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__14309,seq14308__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14330 = arguments.length;
var i__8982__auto___14331 = (0);
while(true){
if((i__8982__auto___14331 < len__8981__auto___14330)){
args__8988__auto__.push((arguments[i__8982__auto___14331]));

var G__14332 = (i__8982__auto___14331 + (1));
i__8982__auto___14331 = G__14332;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq14322){
var G__14323 = cljs.core.first(seq14322);
var seq14322__$1 = cljs.core.next(seq14322);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__14323,seq14322__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14333 = arguments.length;
var i__8982__auto___14334 = (0);
while(true){
if((i__8982__auto___14334 < len__8981__auto___14333)){
args__8988__auto__.push((arguments[i__8982__auto___14334]));

var G__14335 = (i__8982__auto___14334 + (1));
i__8982__auto___14334 = G__14335;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq14324){
var G__14325 = cljs.core.first(seq14324);
var seq14324__$1 = cljs.core.next(seq14324);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14325,seq14324__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14336 = arguments.length;
var i__8982__auto___14337 = (0);
while(true){
if((i__8982__auto___14337 < len__8981__auto___14336)){
args__8988__auto__.push((arguments[i__8982__auto___14337]));

var G__14338 = (i__8982__auto___14337 + (1));
i__8982__auto___14337 = G__14338;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq14326){
var G__14327 = cljs.core.first(seq14326);
var seq14326__$1 = cljs.core.next(seq14326);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14327,seq14326__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14339 = arguments.length;
var i__8982__auto___14340 = (0);
while(true){
if((i__8982__auto___14340 < len__8981__auto___14339)){
args__8988__auto__.push((arguments[i__8982__auto___14340]));

var G__14341 = (i__8982__auto___14340 + (1));
i__8982__auto___14340 = G__14341;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq14328){
var G__14329 = cljs.core.first(seq14328);
var seq14328__$1 = cljs.core.next(seq14328);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14329,seq14328__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14350 = arguments.length;
var i__8982__auto___14351 = (0);
while(true){
if((i__8982__auto___14351 < len__8981__auto___14350)){
args__8988__auto__.push((arguments[i__8982__auto___14351]));

var G__14352 = (i__8982__auto___14351 + (1));
i__8982__auto___14351 = G__14352;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq14342){
var G__14343 = cljs.core.first(seq14342);
var seq14342__$1 = cljs.core.next(seq14342);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__14343,seq14342__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14353 = arguments.length;
var i__8982__auto___14354 = (0);
while(true){
if((i__8982__auto___14354 < len__8981__auto___14353)){
args__8988__auto__.push((arguments[i__8982__auto___14354]));

var G__14355 = (i__8982__auto___14354 + (1));
i__8982__auto___14354 = G__14355;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq14344){
var G__14345 = cljs.core.first(seq14344);
var seq14344__$1 = cljs.core.next(seq14344);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14345,seq14344__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14356 = arguments.length;
var i__8982__auto___14357 = (0);
while(true){
if((i__8982__auto___14357 < len__8981__auto___14356)){
args__8988__auto__.push((arguments[i__8982__auto___14357]));

var G__14358 = (i__8982__auto___14357 + (1));
i__8982__auto___14357 = G__14358;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq14346){
var G__14347 = cljs.core.first(seq14346);
var seq14346__$1 = cljs.core.next(seq14346);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14347,seq14346__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14359 = arguments.length;
var i__8982__auto___14360 = (0);
while(true){
if((i__8982__auto___14360 < len__8981__auto___14359)){
args__8988__auto__.push((arguments[i__8982__auto___14360]));

var G__14361 = (i__8982__auto___14360 + (1));
i__8982__auto___14360 = G__14361;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq14348){
var G__14349 = cljs.core.first(seq14348);
var seq14348__$1 = cljs.core.next(seq14348);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__14349,seq14348__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14370 = arguments.length;
var i__8982__auto___14371 = (0);
while(true){
if((i__8982__auto___14371 < len__8981__auto___14370)){
args__8988__auto__.push((arguments[i__8982__auto___14371]));

var G__14372 = (i__8982__auto___14371 + (1));
i__8982__auto___14371 = G__14372;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq14362){
var G__14363 = cljs.core.first(seq14362);
var seq14362__$1 = cljs.core.next(seq14362);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__14363,seq14362__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14373 = arguments.length;
var i__8982__auto___14374 = (0);
while(true){
if((i__8982__auto___14374 < len__8981__auto___14373)){
args__8988__auto__.push((arguments[i__8982__auto___14374]));

var G__14375 = (i__8982__auto___14374 + (1));
i__8982__auto___14374 = G__14375;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq14364){
var G__14365 = cljs.core.first(seq14364);
var seq14364__$1 = cljs.core.next(seq14364);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__14365,seq14364__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14376 = arguments.length;
var i__8982__auto___14377 = (0);
while(true){
if((i__8982__auto___14377 < len__8981__auto___14376)){
args__8988__auto__.push((arguments[i__8982__auto___14377]));

var G__14378 = (i__8982__auto___14377 + (1));
i__8982__auto___14377 = G__14378;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq14366){
var G__14367 = cljs.core.first(seq14366);
var seq14366__$1 = cljs.core.next(seq14366);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__14367,seq14366__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14379 = arguments.length;
var i__8982__auto___14380 = (0);
while(true){
if((i__8982__auto___14380 < len__8981__auto___14379)){
args__8988__auto__.push((arguments[i__8982__auto___14380]));

var G__14381 = (i__8982__auto___14380 + (1));
i__8982__auto___14380 = G__14381;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq14368){
var G__14369 = cljs.core.first(seq14368);
var seq14368__$1 = cljs.core.next(seq14368);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__14369,seq14368__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14390 = arguments.length;
var i__8982__auto___14391 = (0);
while(true){
if((i__8982__auto___14391 < len__8981__auto___14390)){
args__8988__auto__.push((arguments[i__8982__auto___14391]));

var G__14392 = (i__8982__auto___14391 + (1));
i__8982__auto___14391 = G__14392;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq14382){
var G__14383 = cljs.core.first(seq14382);
var seq14382__$1 = cljs.core.next(seq14382);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__14383,seq14382__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14393 = arguments.length;
var i__8982__auto___14394 = (0);
while(true){
if((i__8982__auto___14394 < len__8981__auto___14393)){
args__8988__auto__.push((arguments[i__8982__auto___14394]));

var G__14395 = (i__8982__auto___14394 + (1));
i__8982__auto___14394 = G__14395;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq14384){
var G__14385 = cljs.core.first(seq14384);
var seq14384__$1 = cljs.core.next(seq14384);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14385,seq14384__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14396 = arguments.length;
var i__8982__auto___14397 = (0);
while(true){
if((i__8982__auto___14397 < len__8981__auto___14396)){
args__8988__auto__.push((arguments[i__8982__auto___14397]));

var G__14398 = (i__8982__auto___14397 + (1));
i__8982__auto___14397 = G__14398;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq14386){
var G__14387 = cljs.core.first(seq14386);
var seq14386__$1 = cljs.core.next(seq14386);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14387,seq14386__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14399 = arguments.length;
var i__8982__auto___14400 = (0);
while(true){
if((i__8982__auto___14400 < len__8981__auto___14399)){
args__8988__auto__.push((arguments[i__8982__auto___14400]));

var G__14401 = (i__8982__auto___14400 + (1));
i__8982__auto___14400 = G__14401;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq14388){
var G__14389 = cljs.core.first(seq14388);
var seq14388__$1 = cljs.core.next(seq14388);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__14389,seq14388__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14410 = arguments.length;
var i__8982__auto___14411 = (0);
while(true){
if((i__8982__auto___14411 < len__8981__auto___14410)){
args__8988__auto__.push((arguments[i__8982__auto___14411]));

var G__14412 = (i__8982__auto___14411 + (1));
i__8982__auto___14411 = G__14412;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq14402){
var G__14403 = cljs.core.first(seq14402);
var seq14402__$1 = cljs.core.next(seq14402);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__14403,seq14402__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14413 = arguments.length;
var i__8982__auto___14414 = (0);
while(true){
if((i__8982__auto___14414 < len__8981__auto___14413)){
args__8988__auto__.push((arguments[i__8982__auto___14414]));

var G__14415 = (i__8982__auto___14414 + (1));
i__8982__auto___14414 = G__14415;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq14404){
var G__14405 = cljs.core.first(seq14404);
var seq14404__$1 = cljs.core.next(seq14404);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14405,seq14404__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14416 = arguments.length;
var i__8982__auto___14417 = (0);
while(true){
if((i__8982__auto___14417 < len__8981__auto___14416)){
args__8988__auto__.push((arguments[i__8982__auto___14417]));

var G__14418 = (i__8982__auto___14417 + (1));
i__8982__auto___14417 = G__14418;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq14406){
var G__14407 = cljs.core.first(seq14406);
var seq14406__$1 = cljs.core.next(seq14406);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14407,seq14406__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14419 = arguments.length;
var i__8982__auto___14420 = (0);
while(true){
if((i__8982__auto___14420 < len__8981__auto___14419)){
args__8988__auto__.push((arguments[i__8982__auto___14420]));

var G__14421 = (i__8982__auto___14420 + (1));
i__8982__auto___14420 = G__14421;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq14408){
var G__14409 = cljs.core.first(seq14408);
var seq14408__$1 = cljs.core.next(seq14408);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__14409,seq14408__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14430 = arguments.length;
var i__8982__auto___14431 = (0);
while(true){
if((i__8982__auto___14431 < len__8981__auto___14430)){
args__8988__auto__.push((arguments[i__8982__auto___14431]));

var G__14432 = (i__8982__auto___14431 + (1));
i__8982__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14257__auto__,rest__14258__auto__){
var convert_case__14259__auto__ = (function (p1__14256__14260__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__14256__14260__auto__,cljs.core.array_seq([rest__14258__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14257__auto__,convert_case__14259__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq14422){
var G__14423 = cljs.core.first(seq14422);
var seq14422__$1 = cljs.core.next(seq14422);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__14423,seq14422__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14433 = arguments.length;
var i__8982__auto___14434 = (0);
while(true){
if((i__8982__auto___14434 < len__8981__auto___14433)){
args__8988__auto__.push((arguments[i__8982__auto___14434]));

var G__14435 = (i__8982__auto___14434 + (1));
i__8982__auto___14434 = G__14435;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq14424){
var G__14425 = cljs.core.first(seq14424);
var seq14424__$1 = cljs.core.next(seq14424);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14425,seq14424__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14436 = arguments.length;
var i__8982__auto___14437 = (0);
while(true){
if((i__8982__auto___14437 < len__8981__auto___14436)){
args__8988__auto__.push((arguments[i__8982__auto___14437]));

var G__14438 = (i__8982__auto___14437 + (1));
i__8982__auto___14437 = G__14438;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq14426){
var G__14427 = cljs.core.first(seq14426);
var seq14426__$1 = cljs.core.next(seq14426);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14427,seq14426__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__8988__auto__ = [];
var len__8981__auto___14439 = arguments.length;
var i__8982__auto___14440 = (0);
while(true){
if((i__8982__auto___14440 < len__8981__auto___14439)){
args__8988__auto__.push((arguments[i__8982__auto___14440]));

var G__14441 = (i__8982__auto___14440 + (1));
i__8982__auto___14440 = G__14441;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14262__auto__,rest__14263__auto__){
if(!((s__14262__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14262__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14262__auto__),cljs.core.array_seq([rest__14263__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq14428){
var G__14429 = cljs.core.first(seq14428);
var seq14428__$1 = cljs.core.next(seq14428);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14429,seq14428__$1);
});

