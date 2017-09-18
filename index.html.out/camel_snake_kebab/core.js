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
var len__9519__auto___24316 = arguments.length;
var i__9520__auto___24317 = (0);
while(true){
if((i__9520__auto___24317 < len__9519__auto___24316)){
args__9526__auto__.push((arguments[i__9520__auto___24317]));

var G__24318 = (i__9520__auto___24317 + (1));
i__9520__auto___24317 = G__24318;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24311){
var G__24312 = cljs.core.first(seq24311);
var seq24311__$1 = cljs.core.next(seq24311);
var G__24313 = cljs.core.first(seq24311__$1);
var seq24311__$2 = cljs.core.next(seq24311__$1);
var G__24314 = cljs.core.first(seq24311__$2);
var seq24311__$3 = cljs.core.next(seq24311__$2);
var G__24315 = cljs.core.first(seq24311__$3);
var seq24311__$4 = cljs.core.next(seq24311__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24312,G__24313,G__24314,G__24315,seq24311__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24327 = arguments.length;
var i__9520__auto___24328 = (0);
while(true){
if((i__9520__auto___24328 < len__9519__auto___24327)){
args__9526__auto__.push((arguments[i__9520__auto___24328]));

var G__24329 = (i__9520__auto___24328 + (1));
i__9520__auto___24328 = G__24329;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24319){
var G__24320 = cljs.core.first(seq24319);
var seq24319__$1 = cljs.core.next(seq24319);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24320,seq24319__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24330 = arguments.length;
var i__9520__auto___24331 = (0);
while(true){
if((i__9520__auto___24331 < len__9519__auto___24330)){
args__9526__auto__.push((arguments[i__9520__auto___24331]));

var G__24332 = (i__9520__auto___24331 + (1));
i__9520__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24321){
var G__24322 = cljs.core.first(seq24321);
var seq24321__$1 = cljs.core.next(seq24321);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24322,seq24321__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24333 = arguments.length;
var i__9520__auto___24334 = (0);
while(true){
if((i__9520__auto___24334 < len__9519__auto___24333)){
args__9526__auto__.push((arguments[i__9520__auto___24334]));

var G__24335 = (i__9520__auto___24334 + (1));
i__9520__auto___24334 = G__24335;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24323){
var G__24324 = cljs.core.first(seq24323);
var seq24323__$1 = cljs.core.next(seq24323);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24324,seq24323__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24336 = arguments.length;
var i__9520__auto___24337 = (0);
while(true){
if((i__9520__auto___24337 < len__9519__auto___24336)){
args__9526__auto__.push((arguments[i__9520__auto___24337]));

var G__24338 = (i__9520__auto___24337 + (1));
i__9520__auto___24337 = G__24338;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24325){
var G__24326 = cljs.core.first(seq24325);
var seq24325__$1 = cljs.core.next(seq24325);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24326,seq24325__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24347 = arguments.length;
var i__9520__auto___24348 = (0);
while(true){
if((i__9520__auto___24348 < len__9519__auto___24347)){
args__9526__auto__.push((arguments[i__9520__auto___24348]));

var G__24349 = (i__9520__auto___24348 + (1));
i__9520__auto___24348 = G__24349;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24339){
var G__24340 = cljs.core.first(seq24339);
var seq24339__$1 = cljs.core.next(seq24339);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24340,seq24339__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24341){
var G__24342 = cljs.core.first(seq24341);
var seq24341__$1 = cljs.core.next(seq24341);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24342,seq24341__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24343){
var G__24344 = cljs.core.first(seq24343);
var seq24343__$1 = cljs.core.next(seq24343);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24344,seq24343__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24345){
var G__24346 = cljs.core.first(seq24345);
var seq24345__$1 = cljs.core.next(seq24345);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24346,seq24345__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24367 = arguments.length;
var i__9520__auto___24368 = (0);
while(true){
if((i__9520__auto___24368 < len__9519__auto___24367)){
args__9526__auto__.push((arguments[i__9520__auto___24368]));

var G__24369 = (i__9520__auto___24368 + (1));
i__9520__auto___24368 = G__24369;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24359){
var G__24360 = cljs.core.first(seq24359);
var seq24359__$1 = cljs.core.next(seq24359);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24360,seq24359__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24361){
var G__24362 = cljs.core.first(seq24361);
var seq24361__$1 = cljs.core.next(seq24361);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24362,seq24361__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24363){
var G__24364 = cljs.core.first(seq24363);
var seq24363__$1 = cljs.core.next(seq24363);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24364,seq24363__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24365){
var G__24366 = cljs.core.first(seq24365);
var seq24365__$1 = cljs.core.next(seq24365);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24366,seq24365__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24387 = arguments.length;
var i__9520__auto___24388 = (0);
while(true){
if((i__9520__auto___24388 < len__9519__auto___24387)){
args__9526__auto__.push((arguments[i__9520__auto___24388]));

var G__24389 = (i__9520__auto___24388 + (1));
i__9520__auto___24388 = G__24389;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24379){
var G__24380 = cljs.core.first(seq24379);
var seq24379__$1 = cljs.core.next(seq24379);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24380,seq24379__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24381){
var G__24382 = cljs.core.first(seq24381);
var seq24381__$1 = cljs.core.next(seq24381);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24382,seq24381__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24383){
var G__24384 = cljs.core.first(seq24383);
var seq24383__$1 = cljs.core.next(seq24383);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24384,seq24383__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24385){
var G__24386 = cljs.core.first(seq24385);
var seq24385__$1 = cljs.core.next(seq24385);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24386,seq24385__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24407 = arguments.length;
var i__9520__auto___24408 = (0);
while(true){
if((i__9520__auto___24408 < len__9519__auto___24407)){
args__9526__auto__.push((arguments[i__9520__auto___24408]));

var G__24409 = (i__9520__auto___24408 + (1));
i__9520__auto___24408 = G__24409;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24399){
var G__24400 = cljs.core.first(seq24399);
var seq24399__$1 = cljs.core.next(seq24399);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24400,seq24399__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24401){
var G__24402 = cljs.core.first(seq24401);
var seq24401__$1 = cljs.core.next(seq24401);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24402,seq24401__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24403){
var G__24404 = cljs.core.first(seq24403);
var seq24403__$1 = cljs.core.next(seq24403);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24404,seq24403__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24405){
var G__24406 = cljs.core.first(seq24405);
var seq24405__$1 = cljs.core.next(seq24405);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24406,seq24405__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24427 = arguments.length;
var i__9520__auto___24428 = (0);
while(true){
if((i__9520__auto___24428 < len__9519__auto___24427)){
args__9526__auto__.push((arguments[i__9520__auto___24428]));

var G__24429 = (i__9520__auto___24428 + (1));
i__9520__auto___24428 = G__24429;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24419){
var G__24420 = cljs.core.first(seq24419);
var seq24419__$1 = cljs.core.next(seq24419);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24420,seq24419__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24421){
var G__24422 = cljs.core.first(seq24421);
var seq24421__$1 = cljs.core.next(seq24421);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24422,seq24421__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24423){
var G__24424 = cljs.core.first(seq24423);
var seq24423__$1 = cljs.core.next(seq24423);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24424,seq24423__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24425){
var G__24426 = cljs.core.first(seq24425);
var seq24425__$1 = cljs.core.next(seq24425);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24426,seq24425__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24447 = arguments.length;
var i__9520__auto___24448 = (0);
while(true){
if((i__9520__auto___24448 < len__9519__auto___24447)){
args__9526__auto__.push((arguments[i__9520__auto___24448]));

var G__24449 = (i__9520__auto___24448 + (1));
i__9520__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24274__auto__,rest__24275__auto__){
var convert_case__24276__auto__ = (function (p1__24273__24277__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24273__24277__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24275__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24274__auto__,convert_case__24276__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24439){
var G__24440 = cljs.core.first(seq24439);
var seq24439__$1 = cljs.core.next(seq24439);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24440,seq24439__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24441){
var G__24442 = cljs.core.first(seq24441);
var seq24441__$1 = cljs.core.next(seq24441);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24442,seq24441__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24443){
var G__24444 = cljs.core.first(seq24443);
var seq24443__$1 = cljs.core.next(seq24443);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24444,seq24443__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24279__auto__,rest__24280__auto__){
if(!((s__24279__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24279__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24279__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24280__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24445){
var G__24446 = cljs.core.first(seq24445);
var seq24445__$1 = cljs.core.next(seq24445);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24446,seq24445__$1);
});

