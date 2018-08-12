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
var len__9519__auto___24305 = arguments.length;
var i__9520__auto___24306 = (0);
while(true){
if((i__9520__auto___24306 < len__9519__auto___24305)){
args__9526__auto__.push((arguments[i__9520__auto___24306]));

var G__24307 = (i__9520__auto___24306 + (1));
i__9520__auto___24306 = G__24307;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24300){
var G__24301 = cljs.core.first(seq24300);
var seq24300__$1 = cljs.core.next(seq24300);
var G__24302 = cljs.core.first(seq24300__$1);
var seq24300__$2 = cljs.core.next(seq24300__$1);
var G__24303 = cljs.core.first(seq24300__$2);
var seq24300__$3 = cljs.core.next(seq24300__$2);
var G__24304 = cljs.core.first(seq24300__$3);
var seq24300__$4 = cljs.core.next(seq24300__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24301,G__24302,G__24303,G__24304,seq24300__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24308){
var G__24309 = cljs.core.first(seq24308);
var seq24308__$1 = cljs.core.next(seq24308);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24309,seq24308__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24319 = arguments.length;
var i__9520__auto___24320 = (0);
while(true){
if((i__9520__auto___24320 < len__9519__auto___24319)){
args__9526__auto__.push((arguments[i__9520__auto___24320]));

var G__24321 = (i__9520__auto___24320 + (1));
i__9520__auto___24320 = G__24321;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24310){
var G__24311 = cljs.core.first(seq24310);
var seq24310__$1 = cljs.core.next(seq24310);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24311,seq24310__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24322 = arguments.length;
var i__9520__auto___24323 = (0);
while(true){
if((i__9520__auto___24323 < len__9519__auto___24322)){
args__9526__auto__.push((arguments[i__9520__auto___24323]));

var G__24324 = (i__9520__auto___24323 + (1));
i__9520__auto___24323 = G__24324;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24312){
var G__24313 = cljs.core.first(seq24312);
var seq24312__$1 = cljs.core.next(seq24312);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24313,seq24312__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24325 = arguments.length;
var i__9520__auto___24326 = (0);
while(true){
if((i__9520__auto___24326 < len__9519__auto___24325)){
args__9526__auto__.push((arguments[i__9520__auto___24326]));

var G__24327 = (i__9520__auto___24326 + (1));
i__9520__auto___24326 = G__24327;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24314){
var G__24315 = cljs.core.first(seq24314);
var seq24314__$1 = cljs.core.next(seq24314);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24315,seq24314__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24328){
var G__24329 = cljs.core.first(seq24328);
var seq24328__$1 = cljs.core.next(seq24328);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24329,seq24328__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
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

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24330){
var G__24331 = cljs.core.first(seq24330);
var seq24330__$1 = cljs.core.next(seq24330);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24331,seq24330__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24342 = arguments.length;
var i__9520__auto___24343 = (0);
while(true){
if((i__9520__auto___24343 < len__9519__auto___24342)){
args__9526__auto__.push((arguments[i__9520__auto___24343]));

var G__24344 = (i__9520__auto___24343 + (1));
i__9520__auto___24343 = G__24344;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24332){
var G__24333 = cljs.core.first(seq24332);
var seq24332__$1 = cljs.core.next(seq24332);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24333,seq24332__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24345 = arguments.length;
var i__9520__auto___24346 = (0);
while(true){
if((i__9520__auto___24346 < len__9519__auto___24345)){
args__9526__auto__.push((arguments[i__9520__auto___24346]));

var G__24347 = (i__9520__auto___24346 + (1));
i__9520__auto___24346 = G__24347;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24334){
var G__24335 = cljs.core.first(seq24334);
var seq24334__$1 = cljs.core.next(seq24334);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24335,seq24334__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
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
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24348){
var G__24349 = cljs.core.first(seq24348);
var seq24348__$1 = cljs.core.next(seq24348);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24349,seq24348__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24350){
var G__24351 = cljs.core.first(seq24350);
var seq24350__$1 = cljs.core.next(seq24350);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24351,seq24350__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24362 = arguments.length;
var i__9520__auto___24363 = (0);
while(true){
if((i__9520__auto___24363 < len__9519__auto___24362)){
args__9526__auto__.push((arguments[i__9520__auto___24363]));

var G__24364 = (i__9520__auto___24363 + (1));
i__9520__auto___24363 = G__24364;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24352){
var G__24353 = cljs.core.first(seq24352);
var seq24352__$1 = cljs.core.next(seq24352);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24353,seq24352__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24365 = arguments.length;
var i__9520__auto___24366 = (0);
while(true){
if((i__9520__auto___24366 < len__9519__auto___24365)){
args__9526__auto__.push((arguments[i__9520__auto___24366]));

var G__24367 = (i__9520__auto___24366 + (1));
i__9520__auto___24366 = G__24367;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24354){
var G__24355 = cljs.core.first(seq24354);
var seq24354__$1 = cljs.core.next(seq24354);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24355,seq24354__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24368){
var G__24369 = cljs.core.first(seq24368);
var seq24368__$1 = cljs.core.next(seq24368);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24369,seq24368__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24370){
var G__24371 = cljs.core.first(seq24370);
var seq24370__$1 = cljs.core.next(seq24370);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24371,seq24370__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24382 = arguments.length;
var i__9520__auto___24383 = (0);
while(true){
if((i__9520__auto___24383 < len__9519__auto___24382)){
args__9526__auto__.push((arguments[i__9520__auto___24383]));

var G__24384 = (i__9520__auto___24383 + (1));
i__9520__auto___24383 = G__24384;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24372){
var G__24373 = cljs.core.first(seq24372);
var seq24372__$1 = cljs.core.next(seq24372);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24373,seq24372__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24385 = arguments.length;
var i__9520__auto___24386 = (0);
while(true){
if((i__9520__auto___24386 < len__9519__auto___24385)){
args__9526__auto__.push((arguments[i__9520__auto___24386]));

var G__24387 = (i__9520__auto___24386 + (1));
i__9520__auto___24386 = G__24387;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24374){
var G__24375 = cljs.core.first(seq24374);
var seq24374__$1 = cljs.core.next(seq24374);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24375,seq24374__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24388){
var G__24389 = cljs.core.first(seq24388);
var seq24388__$1 = cljs.core.next(seq24388);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24389,seq24388__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24390){
var G__24391 = cljs.core.first(seq24390);
var seq24390__$1 = cljs.core.next(seq24390);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24391,seq24390__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24402 = arguments.length;
var i__9520__auto___24403 = (0);
while(true){
if((i__9520__auto___24403 < len__9519__auto___24402)){
args__9526__auto__.push((arguments[i__9520__auto___24403]));

var G__24404 = (i__9520__auto___24403 + (1));
i__9520__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24392){
var G__24393 = cljs.core.first(seq24392);
var seq24392__$1 = cljs.core.next(seq24392);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24393,seq24392__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24405 = arguments.length;
var i__9520__auto___24406 = (0);
while(true){
if((i__9520__auto___24406 < len__9519__auto___24405)){
args__9526__auto__.push((arguments[i__9520__auto___24406]));

var G__24407 = (i__9520__auto___24406 + (1));
i__9520__auto___24406 = G__24407;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24394){
var G__24395 = cljs.core.first(seq24394);
var seq24394__$1 = cljs.core.next(seq24394);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24395,seq24394__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24408){
var G__24409 = cljs.core.first(seq24408);
var seq24408__$1 = cljs.core.next(seq24408);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24409,seq24408__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24410){
var G__24411 = cljs.core.first(seq24410);
var seq24410__$1 = cljs.core.next(seq24410);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24411,seq24410__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24422 = arguments.length;
var i__9520__auto___24423 = (0);
while(true){
if((i__9520__auto___24423 < len__9519__auto___24422)){
args__9526__auto__.push((arguments[i__9520__auto___24423]));

var G__24424 = (i__9520__auto___24423 + (1));
i__9520__auto___24423 = G__24424;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24412){
var G__24413 = cljs.core.first(seq24412);
var seq24412__$1 = cljs.core.next(seq24412);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24413,seq24412__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24425 = arguments.length;
var i__9520__auto___24426 = (0);
while(true){
if((i__9520__auto___24426 < len__9519__auto___24425)){
args__9526__auto__.push((arguments[i__9520__auto___24426]));

var G__24427 = (i__9520__auto___24426 + (1));
i__9520__auto___24426 = G__24427;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24414){
var G__24415 = cljs.core.first(seq24414);
var seq24414__$1 = cljs.core.next(seq24414);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24415,seq24414__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24263__auto__,rest__24264__auto__){
var convert_case__24265__auto__ = (function (p1__24262__24266__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24262__24266__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24264__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24263__auto__,convert_case__24265__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24428){
var G__24429 = cljs.core.first(seq24428);
var seq24428__$1 = cljs.core.next(seq24428);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24429,seq24428__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24430){
var G__24431 = cljs.core.first(seq24430);
var seq24430__$1 = cljs.core.next(seq24430);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24431,seq24430__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24442 = arguments.length;
var i__9520__auto___24443 = (0);
while(true){
if((i__9520__auto___24443 < len__9519__auto___24442)){
args__9526__auto__.push((arguments[i__9520__auto___24443]));

var G__24444 = (i__9520__auto___24443 + (1));
i__9520__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24432){
var G__24433 = cljs.core.first(seq24432);
var seq24432__$1 = cljs.core.next(seq24432);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24433,seq24432__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24445 = arguments.length;
var i__9520__auto___24446 = (0);
while(true){
if((i__9520__auto___24446 < len__9519__auto___24445)){
args__9526__auto__.push((arguments[i__9520__auto___24446]));

var G__24447 = (i__9520__auto___24446 + (1));
i__9520__auto___24446 = G__24447;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24268__auto__,rest__24269__auto__){
if(!((s__24268__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24268__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24268__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24269__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24434){
var G__24435 = cljs.core.first(seq24434);
var seq24434__$1 = cljs.core.next(seq24434);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24435,seq24434__$1);
});

