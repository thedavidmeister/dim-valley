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
var len__9519__auto___24398 = arguments.length;
var i__9520__auto___24399 = (0);
while(true){
if((i__9520__auto___24399 < len__9519__auto___24398)){
args__9526__auto__.push((arguments[i__9520__auto___24399]));

var G__24400 = (i__9520__auto___24399 + (1));
i__9520__auto___24399 = G__24400;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24393){
var G__24394 = cljs.core.first(seq24393);
var seq24393__$1 = cljs.core.next(seq24393);
var G__24395 = cljs.core.first(seq24393__$1);
var seq24393__$2 = cljs.core.next(seq24393__$1);
var G__24396 = cljs.core.first(seq24393__$2);
var seq24393__$3 = cljs.core.next(seq24393__$2);
var G__24397 = cljs.core.first(seq24393__$3);
var seq24393__$4 = cljs.core.next(seq24393__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24394,G__24395,G__24396,G__24397,seq24393__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24409 = arguments.length;
var i__9520__auto___24410 = (0);
while(true){
if((i__9520__auto___24410 < len__9519__auto___24409)){
args__9526__auto__.push((arguments[i__9520__auto___24410]));

var G__24411 = (i__9520__auto___24410 + (1));
i__9520__auto___24410 = G__24411;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24401){
var G__24402 = cljs.core.first(seq24401);
var seq24401__$1 = cljs.core.next(seq24401);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24402,seq24401__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24412 = arguments.length;
var i__9520__auto___24413 = (0);
while(true){
if((i__9520__auto___24413 < len__9519__auto___24412)){
args__9526__auto__.push((arguments[i__9520__auto___24413]));

var G__24414 = (i__9520__auto___24413 + (1));
i__9520__auto___24413 = G__24414;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24403){
var G__24404 = cljs.core.first(seq24403);
var seq24403__$1 = cljs.core.next(seq24403);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24404,seq24403__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24415 = arguments.length;
var i__9520__auto___24416 = (0);
while(true){
if((i__9520__auto___24416 < len__9519__auto___24415)){
args__9526__auto__.push((arguments[i__9520__auto___24416]));

var G__24417 = (i__9520__auto___24416 + (1));
i__9520__auto___24416 = G__24417;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24405){
var G__24406 = cljs.core.first(seq24405);
var seq24405__$1 = cljs.core.next(seq24405);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24406,seq24405__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24418 = arguments.length;
var i__9520__auto___24419 = (0);
while(true){
if((i__9520__auto___24419 < len__9519__auto___24418)){
args__9526__auto__.push((arguments[i__9520__auto___24419]));

var G__24420 = (i__9520__auto___24419 + (1));
i__9520__auto___24419 = G__24420;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24407){
var G__24408 = cljs.core.first(seq24407);
var seq24407__$1 = cljs.core.next(seq24407);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24408,seq24407__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24429 = arguments.length;
var i__9520__auto___24430 = (0);
while(true){
if((i__9520__auto___24430 < len__9519__auto___24429)){
args__9526__auto__.push((arguments[i__9520__auto___24430]));

var G__24431 = (i__9520__auto___24430 + (1));
i__9520__auto___24430 = G__24431;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24421){
var G__24422 = cljs.core.first(seq24421);
var seq24421__$1 = cljs.core.next(seq24421);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24422,seq24421__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24432 = arguments.length;
var i__9520__auto___24433 = (0);
while(true){
if((i__9520__auto___24433 < len__9519__auto___24432)){
args__9526__auto__.push((arguments[i__9520__auto___24433]));

var G__24434 = (i__9520__auto___24433 + (1));
i__9520__auto___24433 = G__24434;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24423){
var G__24424 = cljs.core.first(seq24423);
var seq24423__$1 = cljs.core.next(seq24423);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24424,seq24423__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24435 = arguments.length;
var i__9520__auto___24436 = (0);
while(true){
if((i__9520__auto___24436 < len__9519__auto___24435)){
args__9526__auto__.push((arguments[i__9520__auto___24436]));

var G__24437 = (i__9520__auto___24436 + (1));
i__9520__auto___24436 = G__24437;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24425){
var G__24426 = cljs.core.first(seq24425);
var seq24425__$1 = cljs.core.next(seq24425);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24426,seq24425__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24438 = arguments.length;
var i__9520__auto___24439 = (0);
while(true){
if((i__9520__auto___24439 < len__9519__auto___24438)){
args__9526__auto__.push((arguments[i__9520__auto___24439]));

var G__24440 = (i__9520__auto___24439 + (1));
i__9520__auto___24439 = G__24440;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24427){
var G__24428 = cljs.core.first(seq24427);
var seq24427__$1 = cljs.core.next(seq24427);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24428,seq24427__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24449 = arguments.length;
var i__9520__auto___24450 = (0);
while(true){
if((i__9520__auto___24450 < len__9519__auto___24449)){
args__9526__auto__.push((arguments[i__9520__auto___24450]));

var G__24451 = (i__9520__auto___24450 + (1));
i__9520__auto___24450 = G__24451;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24441){
var G__24442 = cljs.core.first(seq24441);
var seq24441__$1 = cljs.core.next(seq24441);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24442,seq24441__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24452 = arguments.length;
var i__9520__auto___24453 = (0);
while(true){
if((i__9520__auto___24453 < len__9519__auto___24452)){
args__9526__auto__.push((arguments[i__9520__auto___24453]));

var G__24454 = (i__9520__auto___24453 + (1));
i__9520__auto___24453 = G__24454;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24443){
var G__24444 = cljs.core.first(seq24443);
var seq24443__$1 = cljs.core.next(seq24443);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24444,seq24443__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24455 = arguments.length;
var i__9520__auto___24456 = (0);
while(true){
if((i__9520__auto___24456 < len__9519__auto___24455)){
args__9526__auto__.push((arguments[i__9520__auto___24456]));

var G__24457 = (i__9520__auto___24456 + (1));
i__9520__auto___24456 = G__24457;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24445){
var G__24446 = cljs.core.first(seq24445);
var seq24445__$1 = cljs.core.next(seq24445);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24446,seq24445__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24458 = arguments.length;
var i__9520__auto___24459 = (0);
while(true){
if((i__9520__auto___24459 < len__9519__auto___24458)){
args__9526__auto__.push((arguments[i__9520__auto___24459]));

var G__24460 = (i__9520__auto___24459 + (1));
i__9520__auto___24459 = G__24460;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24447){
var G__24448 = cljs.core.first(seq24447);
var seq24447__$1 = cljs.core.next(seq24447);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24448,seq24447__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24469 = arguments.length;
var i__9520__auto___24470 = (0);
while(true){
if((i__9520__auto___24470 < len__9519__auto___24469)){
args__9526__auto__.push((arguments[i__9520__auto___24470]));

var G__24471 = (i__9520__auto___24470 + (1));
i__9520__auto___24470 = G__24471;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24461){
var G__24462 = cljs.core.first(seq24461);
var seq24461__$1 = cljs.core.next(seq24461);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24462,seq24461__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24472 = arguments.length;
var i__9520__auto___24473 = (0);
while(true){
if((i__9520__auto___24473 < len__9519__auto___24472)){
args__9526__auto__.push((arguments[i__9520__auto___24473]));

var G__24474 = (i__9520__auto___24473 + (1));
i__9520__auto___24473 = G__24474;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24463){
var G__24464 = cljs.core.first(seq24463);
var seq24463__$1 = cljs.core.next(seq24463);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24464,seq24463__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24475 = arguments.length;
var i__9520__auto___24476 = (0);
while(true){
if((i__9520__auto___24476 < len__9519__auto___24475)){
args__9526__auto__.push((arguments[i__9520__auto___24476]));

var G__24477 = (i__9520__auto___24476 + (1));
i__9520__auto___24476 = G__24477;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24465){
var G__24466 = cljs.core.first(seq24465);
var seq24465__$1 = cljs.core.next(seq24465);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24466,seq24465__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24478 = arguments.length;
var i__9520__auto___24479 = (0);
while(true){
if((i__9520__auto___24479 < len__9519__auto___24478)){
args__9526__auto__.push((arguments[i__9520__auto___24479]));

var G__24480 = (i__9520__auto___24479 + (1));
i__9520__auto___24479 = G__24480;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24467){
var G__24468 = cljs.core.first(seq24467);
var seq24467__$1 = cljs.core.next(seq24467);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24468,seq24467__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24489 = arguments.length;
var i__9520__auto___24490 = (0);
while(true){
if((i__9520__auto___24490 < len__9519__auto___24489)){
args__9526__auto__.push((arguments[i__9520__auto___24490]));

var G__24491 = (i__9520__auto___24490 + (1));
i__9520__auto___24490 = G__24491;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24481){
var G__24482 = cljs.core.first(seq24481);
var seq24481__$1 = cljs.core.next(seq24481);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24482,seq24481__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24492 = arguments.length;
var i__9520__auto___24493 = (0);
while(true){
if((i__9520__auto___24493 < len__9519__auto___24492)){
args__9526__auto__.push((arguments[i__9520__auto___24493]));

var G__24494 = (i__9520__auto___24493 + (1));
i__9520__auto___24493 = G__24494;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24483){
var G__24484 = cljs.core.first(seq24483);
var seq24483__$1 = cljs.core.next(seq24483);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24484,seq24483__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24495 = arguments.length;
var i__9520__auto___24496 = (0);
while(true){
if((i__9520__auto___24496 < len__9519__auto___24495)){
args__9526__auto__.push((arguments[i__9520__auto___24496]));

var G__24497 = (i__9520__auto___24496 + (1));
i__9520__auto___24496 = G__24497;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24485){
var G__24486 = cljs.core.first(seq24485);
var seq24485__$1 = cljs.core.next(seq24485);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24486,seq24485__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24498 = arguments.length;
var i__9520__auto___24499 = (0);
while(true){
if((i__9520__auto___24499 < len__9519__auto___24498)){
args__9526__auto__.push((arguments[i__9520__auto___24499]));

var G__24500 = (i__9520__auto___24499 + (1));
i__9520__auto___24499 = G__24500;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24487){
var G__24488 = cljs.core.first(seq24487);
var seq24487__$1 = cljs.core.next(seq24487);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24488,seq24487__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24509 = arguments.length;
var i__9520__auto___24510 = (0);
while(true){
if((i__9520__auto___24510 < len__9519__auto___24509)){
args__9526__auto__.push((arguments[i__9520__auto___24510]));

var G__24511 = (i__9520__auto___24510 + (1));
i__9520__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24501){
var G__24502 = cljs.core.first(seq24501);
var seq24501__$1 = cljs.core.next(seq24501);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24502,seq24501__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24512 = arguments.length;
var i__9520__auto___24513 = (0);
while(true){
if((i__9520__auto___24513 < len__9519__auto___24512)){
args__9526__auto__.push((arguments[i__9520__auto___24513]));

var G__24514 = (i__9520__auto___24513 + (1));
i__9520__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24503){
var G__24504 = cljs.core.first(seq24503);
var seq24503__$1 = cljs.core.next(seq24503);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24504,seq24503__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24515 = arguments.length;
var i__9520__auto___24516 = (0);
while(true){
if((i__9520__auto___24516 < len__9519__auto___24515)){
args__9526__auto__.push((arguments[i__9520__auto___24516]));

var G__24517 = (i__9520__auto___24516 + (1));
i__9520__auto___24516 = G__24517;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24505){
var G__24506 = cljs.core.first(seq24505);
var seq24505__$1 = cljs.core.next(seq24505);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24506,seq24505__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24518 = arguments.length;
var i__9520__auto___24519 = (0);
while(true){
if((i__9520__auto___24519 < len__9519__auto___24518)){
args__9526__auto__.push((arguments[i__9520__auto___24519]));

var G__24520 = (i__9520__auto___24519 + (1));
i__9520__auto___24519 = G__24520;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24507){
var G__24508 = cljs.core.first(seq24507);
var seq24507__$1 = cljs.core.next(seq24507);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24508,seq24507__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24529 = arguments.length;
var i__9520__auto___24530 = (0);
while(true){
if((i__9520__auto___24530 < len__9519__auto___24529)){
args__9526__auto__.push((arguments[i__9520__auto___24530]));

var G__24531 = (i__9520__auto___24530 + (1));
i__9520__auto___24530 = G__24531;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
var convert_case__24358__auto__ = (function (p1__24355__24359__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24355__24359__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24356__auto__,convert_case__24358__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24521){
var G__24522 = cljs.core.first(seq24521);
var seq24521__$1 = cljs.core.next(seq24521);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24522,seq24521__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24532 = arguments.length;
var i__9520__auto___24533 = (0);
while(true){
if((i__9520__auto___24533 < len__9519__auto___24532)){
args__9526__auto__.push((arguments[i__9520__auto___24533]));

var G__24534 = (i__9520__auto___24533 + (1));
i__9520__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24523){
var G__24524 = cljs.core.first(seq24523);
var seq24523__$1 = cljs.core.next(seq24523);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24524,seq24523__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24535 = arguments.length;
var i__9520__auto___24536 = (0);
while(true){
if((i__9520__auto___24536 < len__9519__auto___24535)){
args__9526__auto__.push((arguments[i__9520__auto___24536]));

var G__24537 = (i__9520__auto___24536 + (1));
i__9520__auto___24536 = G__24537;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24525){
var G__24526 = cljs.core.first(seq24525);
var seq24525__$1 = cljs.core.next(seq24525);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24526,seq24525__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24538 = arguments.length;
var i__9520__auto___24539 = (0);
while(true){
if((i__9520__auto___24539 < len__9519__auto___24538)){
args__9526__auto__.push((arguments[i__9520__auto___24539]));

var G__24540 = (i__9520__auto___24539 + (1));
i__9520__auto___24539 = G__24540;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24361__auto__,rest__24362__auto__){
if(!((s__24361__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24361__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24361__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24362__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24527){
var G__24528 = cljs.core.first(seq24527);
var seq24527__$1 = cljs.core.next(seq24527);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24528,seq24527__$1);
});

