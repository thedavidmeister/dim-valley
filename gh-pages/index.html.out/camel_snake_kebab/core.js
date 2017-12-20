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
var args__9524__auto__ = [];
var len__9517__auto___24402 = arguments.length;
var i__9518__auto___24403 = (0);
while(true){
if((i__9518__auto___24403 < len__9517__auto___24402)){
args__9524__auto__.push((arguments[i__9518__auto___24403]));

var G__24404 = (i__9518__auto___24403 + (1));
i__9518__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((4) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9525__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24397){
var G__24398 = cljs.core.first(seq24397);
var seq24397__$1 = cljs.core.next(seq24397);
var G__24399 = cljs.core.first(seq24397__$1);
var seq24397__$2 = cljs.core.next(seq24397__$1);
var G__24400 = cljs.core.first(seq24397__$2);
var seq24397__$3 = cljs.core.next(seq24397__$2);
var G__24401 = cljs.core.first(seq24397__$3);
var seq24397__$4 = cljs.core.next(seq24397__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24398,G__24399,G__24400,G__24401,seq24397__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24413 = arguments.length;
var i__9518__auto___24414 = (0);
while(true){
if((i__9518__auto___24414 < len__9517__auto___24413)){
args__9524__auto__.push((arguments[i__9518__auto___24414]));

var G__24415 = (i__9518__auto___24414 + (1));
i__9518__auto___24414 = G__24415;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24405){
var G__24406 = cljs.core.first(seq24405);
var seq24405__$1 = cljs.core.next(seq24405);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24406,seq24405__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24416 = arguments.length;
var i__9518__auto___24417 = (0);
while(true){
if((i__9518__auto___24417 < len__9517__auto___24416)){
args__9524__auto__.push((arguments[i__9518__auto___24417]));

var G__24418 = (i__9518__auto___24417 + (1));
i__9518__auto___24417 = G__24418;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24407){
var G__24408 = cljs.core.first(seq24407);
var seq24407__$1 = cljs.core.next(seq24407);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24408,seq24407__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24419 = arguments.length;
var i__9518__auto___24420 = (0);
while(true){
if((i__9518__auto___24420 < len__9517__auto___24419)){
args__9524__auto__.push((arguments[i__9518__auto___24420]));

var G__24421 = (i__9518__auto___24420 + (1));
i__9518__auto___24420 = G__24421;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24409){
var G__24410 = cljs.core.first(seq24409);
var seq24409__$1 = cljs.core.next(seq24409);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24410,seq24409__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24422 = arguments.length;
var i__9518__auto___24423 = (0);
while(true){
if((i__9518__auto___24423 < len__9517__auto___24422)){
args__9524__auto__.push((arguments[i__9518__auto___24423]));

var G__24424 = (i__9518__auto___24423 + (1));
i__9518__auto___24423 = G__24424;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24411){
var G__24412 = cljs.core.first(seq24411);
var seq24411__$1 = cljs.core.next(seq24411);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24412,seq24411__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24433 = arguments.length;
var i__9518__auto___24434 = (0);
while(true){
if((i__9518__auto___24434 < len__9517__auto___24433)){
args__9524__auto__.push((arguments[i__9518__auto___24434]));

var G__24435 = (i__9518__auto___24434 + (1));
i__9518__auto___24434 = G__24435;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24425){
var G__24426 = cljs.core.first(seq24425);
var seq24425__$1 = cljs.core.next(seq24425);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24426,seq24425__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24436 = arguments.length;
var i__9518__auto___24437 = (0);
while(true){
if((i__9518__auto___24437 < len__9517__auto___24436)){
args__9524__auto__.push((arguments[i__9518__auto___24437]));

var G__24438 = (i__9518__auto___24437 + (1));
i__9518__auto___24437 = G__24438;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24427){
var G__24428 = cljs.core.first(seq24427);
var seq24427__$1 = cljs.core.next(seq24427);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24428,seq24427__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24439 = arguments.length;
var i__9518__auto___24440 = (0);
while(true){
if((i__9518__auto___24440 < len__9517__auto___24439)){
args__9524__auto__.push((arguments[i__9518__auto___24440]));

var G__24441 = (i__9518__auto___24440 + (1));
i__9518__auto___24440 = G__24441;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24429){
var G__24430 = cljs.core.first(seq24429);
var seq24429__$1 = cljs.core.next(seq24429);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24430,seq24429__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24442 = arguments.length;
var i__9518__auto___24443 = (0);
while(true){
if((i__9518__auto___24443 < len__9517__auto___24442)){
args__9524__auto__.push((arguments[i__9518__auto___24443]));

var G__24444 = (i__9518__auto___24443 + (1));
i__9518__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24431){
var G__24432 = cljs.core.first(seq24431);
var seq24431__$1 = cljs.core.next(seq24431);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24432,seq24431__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24453 = arguments.length;
var i__9518__auto___24454 = (0);
while(true){
if((i__9518__auto___24454 < len__9517__auto___24453)){
args__9524__auto__.push((arguments[i__9518__auto___24454]));

var G__24455 = (i__9518__auto___24454 + (1));
i__9518__auto___24454 = G__24455;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24445){
var G__24446 = cljs.core.first(seq24445);
var seq24445__$1 = cljs.core.next(seq24445);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24446,seq24445__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24456 = arguments.length;
var i__9518__auto___24457 = (0);
while(true){
if((i__9518__auto___24457 < len__9517__auto___24456)){
args__9524__auto__.push((arguments[i__9518__auto___24457]));

var G__24458 = (i__9518__auto___24457 + (1));
i__9518__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24447){
var G__24448 = cljs.core.first(seq24447);
var seq24447__$1 = cljs.core.next(seq24447);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24448,seq24447__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24459 = arguments.length;
var i__9518__auto___24460 = (0);
while(true){
if((i__9518__auto___24460 < len__9517__auto___24459)){
args__9524__auto__.push((arguments[i__9518__auto___24460]));

var G__24461 = (i__9518__auto___24460 + (1));
i__9518__auto___24460 = G__24461;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24449){
var G__24450 = cljs.core.first(seq24449);
var seq24449__$1 = cljs.core.next(seq24449);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24450,seq24449__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24462 = arguments.length;
var i__9518__auto___24463 = (0);
while(true){
if((i__9518__auto___24463 < len__9517__auto___24462)){
args__9524__auto__.push((arguments[i__9518__auto___24463]));

var G__24464 = (i__9518__auto___24463 + (1));
i__9518__auto___24463 = G__24464;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24451){
var G__24452 = cljs.core.first(seq24451);
var seq24451__$1 = cljs.core.next(seq24451);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24452,seq24451__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24473 = arguments.length;
var i__9518__auto___24474 = (0);
while(true){
if((i__9518__auto___24474 < len__9517__auto___24473)){
args__9524__auto__.push((arguments[i__9518__auto___24474]));

var G__24475 = (i__9518__auto___24474 + (1));
i__9518__auto___24474 = G__24475;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24465){
var G__24466 = cljs.core.first(seq24465);
var seq24465__$1 = cljs.core.next(seq24465);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24466,seq24465__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24476 = arguments.length;
var i__9518__auto___24477 = (0);
while(true){
if((i__9518__auto___24477 < len__9517__auto___24476)){
args__9524__auto__.push((arguments[i__9518__auto___24477]));

var G__24478 = (i__9518__auto___24477 + (1));
i__9518__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24467){
var G__24468 = cljs.core.first(seq24467);
var seq24467__$1 = cljs.core.next(seq24467);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24468,seq24467__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24479 = arguments.length;
var i__9518__auto___24480 = (0);
while(true){
if((i__9518__auto___24480 < len__9517__auto___24479)){
args__9524__auto__.push((arguments[i__9518__auto___24480]));

var G__24481 = (i__9518__auto___24480 + (1));
i__9518__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24469){
var G__24470 = cljs.core.first(seq24469);
var seq24469__$1 = cljs.core.next(seq24469);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24470,seq24469__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24482 = arguments.length;
var i__9518__auto___24483 = (0);
while(true){
if((i__9518__auto___24483 < len__9517__auto___24482)){
args__9524__auto__.push((arguments[i__9518__auto___24483]));

var G__24484 = (i__9518__auto___24483 + (1));
i__9518__auto___24483 = G__24484;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24471){
var G__24472 = cljs.core.first(seq24471);
var seq24471__$1 = cljs.core.next(seq24471);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24472,seq24471__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24493 = arguments.length;
var i__9518__auto___24494 = (0);
while(true){
if((i__9518__auto___24494 < len__9517__auto___24493)){
args__9524__auto__.push((arguments[i__9518__auto___24494]));

var G__24495 = (i__9518__auto___24494 + (1));
i__9518__auto___24494 = G__24495;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24485){
var G__24486 = cljs.core.first(seq24485);
var seq24485__$1 = cljs.core.next(seq24485);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24486,seq24485__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24496 = arguments.length;
var i__9518__auto___24497 = (0);
while(true){
if((i__9518__auto___24497 < len__9517__auto___24496)){
args__9524__auto__.push((arguments[i__9518__auto___24497]));

var G__24498 = (i__9518__auto___24497 + (1));
i__9518__auto___24497 = G__24498;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24487){
var G__24488 = cljs.core.first(seq24487);
var seq24487__$1 = cljs.core.next(seq24487);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24488,seq24487__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24499 = arguments.length;
var i__9518__auto___24500 = (0);
while(true){
if((i__9518__auto___24500 < len__9517__auto___24499)){
args__9524__auto__.push((arguments[i__9518__auto___24500]));

var G__24501 = (i__9518__auto___24500 + (1));
i__9518__auto___24500 = G__24501;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24489){
var G__24490 = cljs.core.first(seq24489);
var seq24489__$1 = cljs.core.next(seq24489);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24490,seq24489__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24502 = arguments.length;
var i__9518__auto___24503 = (0);
while(true){
if((i__9518__auto___24503 < len__9517__auto___24502)){
args__9524__auto__.push((arguments[i__9518__auto___24503]));

var G__24504 = (i__9518__auto___24503 + (1));
i__9518__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24491){
var G__24492 = cljs.core.first(seq24491);
var seq24491__$1 = cljs.core.next(seq24491);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24492,seq24491__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24513 = arguments.length;
var i__9518__auto___24514 = (0);
while(true){
if((i__9518__auto___24514 < len__9517__auto___24513)){
args__9524__auto__.push((arguments[i__9518__auto___24514]));

var G__24515 = (i__9518__auto___24514 + (1));
i__9518__auto___24514 = G__24515;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24505){
var G__24506 = cljs.core.first(seq24505);
var seq24505__$1 = cljs.core.next(seq24505);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24506,seq24505__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24516 = arguments.length;
var i__9518__auto___24517 = (0);
while(true){
if((i__9518__auto___24517 < len__9517__auto___24516)){
args__9524__auto__.push((arguments[i__9518__auto___24517]));

var G__24518 = (i__9518__auto___24517 + (1));
i__9518__auto___24517 = G__24518;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24507){
var G__24508 = cljs.core.first(seq24507);
var seq24507__$1 = cljs.core.next(seq24507);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24508,seq24507__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24519 = arguments.length;
var i__9518__auto___24520 = (0);
while(true){
if((i__9518__auto___24520 < len__9517__auto___24519)){
args__9524__auto__.push((arguments[i__9518__auto___24520]));

var G__24521 = (i__9518__auto___24520 + (1));
i__9518__auto___24520 = G__24521;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24509){
var G__24510 = cljs.core.first(seq24509);
var seq24509__$1 = cljs.core.next(seq24509);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24510,seq24509__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24522 = arguments.length;
var i__9518__auto___24523 = (0);
while(true){
if((i__9518__auto___24523 < len__9517__auto___24522)){
args__9524__auto__.push((arguments[i__9518__auto___24523]));

var G__24524 = (i__9518__auto___24523 + (1));
i__9518__auto___24523 = G__24524;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24511){
var G__24512 = cljs.core.first(seq24511);
var seq24511__$1 = cljs.core.next(seq24511);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24512,seq24511__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24533 = arguments.length;
var i__9518__auto___24534 = (0);
while(true){
if((i__9518__auto___24534 < len__9517__auto___24533)){
args__9524__auto__.push((arguments[i__9518__auto___24534]));

var G__24535 = (i__9518__auto___24534 + (1));
i__9518__auto___24534 = G__24535;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24360__auto__,rest__24361__auto__){
var convert_case__24362__auto__ = (function (p1__24359__24363__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24359__24363__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24361__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24360__auto__,convert_case__24362__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24525){
var G__24526 = cljs.core.first(seq24525);
var seq24525__$1 = cljs.core.next(seq24525);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24526,seq24525__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24536 = arguments.length;
var i__9518__auto___24537 = (0);
while(true){
if((i__9518__auto___24537 < len__9517__auto___24536)){
args__9524__auto__.push((arguments[i__9518__auto___24537]));

var G__24538 = (i__9518__auto___24537 + (1));
i__9518__auto___24537 = G__24538;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24527){
var G__24528 = cljs.core.first(seq24527);
var seq24527__$1 = cljs.core.next(seq24527);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24528,seq24527__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24539 = arguments.length;
var i__9518__auto___24540 = (0);
while(true){
if((i__9518__auto___24540 < len__9517__auto___24539)){
args__9524__auto__.push((arguments[i__9518__auto___24540]));

var G__24541 = (i__9518__auto___24540 + (1));
i__9518__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24529){
var G__24530 = cljs.core.first(seq24529);
var seq24529__$1 = cljs.core.next(seq24529);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24530,seq24529__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24542 = arguments.length;
var i__9518__auto___24543 = (0);
while(true){
if((i__9518__auto___24543 < len__9517__auto___24542)){
args__9524__auto__.push((arguments[i__9518__auto___24543]));

var G__24544 = (i__9518__auto___24543 + (1));
i__9518__auto___24543 = G__24544;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24365__auto__,rest__24366__auto__){
if(!((s__24365__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24365__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24365__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24366__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24531){
var G__24532 = cljs.core.first(seq24531);
var seq24531__$1 = cljs.core.next(seq24531);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24532,seq24531__$1);
});

