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
var len__9517__auto___24393 = arguments.length;
var i__9518__auto___24394 = (0);
while(true){
if((i__9518__auto___24394 < len__9517__auto___24393)){
args__9524__auto__.push((arguments[i__9518__auto___24394]));

var G__24395 = (i__9518__auto___24394 + (1));
i__9518__auto___24394 = G__24395;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24388){
var G__24389 = cljs.core.first(seq24388);
var seq24388__$1 = cljs.core.next(seq24388);
var G__24390 = cljs.core.first(seq24388__$1);
var seq24388__$2 = cljs.core.next(seq24388__$1);
var G__24391 = cljs.core.first(seq24388__$2);
var seq24388__$3 = cljs.core.next(seq24388__$2);
var G__24392 = cljs.core.first(seq24388__$3);
var seq24388__$4 = cljs.core.next(seq24388__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24389,G__24390,G__24391,G__24392,seq24388__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24404 = arguments.length;
var i__9518__auto___24405 = (0);
while(true){
if((i__9518__auto___24405 < len__9517__auto___24404)){
args__9524__auto__.push((arguments[i__9518__auto___24405]));

var G__24406 = (i__9518__auto___24405 + (1));
i__9518__auto___24405 = G__24406;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24396){
var G__24397 = cljs.core.first(seq24396);
var seq24396__$1 = cljs.core.next(seq24396);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24397,seq24396__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24407 = arguments.length;
var i__9518__auto___24408 = (0);
while(true){
if((i__9518__auto___24408 < len__9517__auto___24407)){
args__9524__auto__.push((arguments[i__9518__auto___24408]));

var G__24409 = (i__9518__auto___24408 + (1));
i__9518__auto___24408 = G__24409;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24398){
var G__24399 = cljs.core.first(seq24398);
var seq24398__$1 = cljs.core.next(seq24398);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24399,seq24398__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24410 = arguments.length;
var i__9518__auto___24411 = (0);
while(true){
if((i__9518__auto___24411 < len__9517__auto___24410)){
args__9524__auto__.push((arguments[i__9518__auto___24411]));

var G__24412 = (i__9518__auto___24411 + (1));
i__9518__auto___24411 = G__24412;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24400){
var G__24401 = cljs.core.first(seq24400);
var seq24400__$1 = cljs.core.next(seq24400);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24401,seq24400__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24402){
var G__24403 = cljs.core.first(seq24402);
var seq24402__$1 = cljs.core.next(seq24402);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24403,seq24402__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24424 = arguments.length;
var i__9518__auto___24425 = (0);
while(true){
if((i__9518__auto___24425 < len__9517__auto___24424)){
args__9524__auto__.push((arguments[i__9518__auto___24425]));

var G__24426 = (i__9518__auto___24425 + (1));
i__9518__auto___24425 = G__24426;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24416){
var G__24417 = cljs.core.first(seq24416);
var seq24416__$1 = cljs.core.next(seq24416);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24417,seq24416__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24427 = arguments.length;
var i__9518__auto___24428 = (0);
while(true){
if((i__9518__auto___24428 < len__9517__auto___24427)){
args__9524__auto__.push((arguments[i__9518__auto___24428]));

var G__24429 = (i__9518__auto___24428 + (1));
i__9518__auto___24428 = G__24429;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24418){
var G__24419 = cljs.core.first(seq24418);
var seq24418__$1 = cljs.core.next(seq24418);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24419,seq24418__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24430 = arguments.length;
var i__9518__auto___24431 = (0);
while(true){
if((i__9518__auto___24431 < len__9517__auto___24430)){
args__9524__auto__.push((arguments[i__9518__auto___24431]));

var G__24432 = (i__9518__auto___24431 + (1));
i__9518__auto___24431 = G__24432;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24420){
var G__24421 = cljs.core.first(seq24420);
var seq24420__$1 = cljs.core.next(seq24420);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24421,seq24420__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24422){
var G__24423 = cljs.core.first(seq24422);
var seq24422__$1 = cljs.core.next(seq24422);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24423,seq24422__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24444 = arguments.length;
var i__9518__auto___24445 = (0);
while(true){
if((i__9518__auto___24445 < len__9517__auto___24444)){
args__9524__auto__.push((arguments[i__9518__auto___24445]));

var G__24446 = (i__9518__auto___24445 + (1));
i__9518__auto___24445 = G__24446;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24436){
var G__24437 = cljs.core.first(seq24436);
var seq24436__$1 = cljs.core.next(seq24436);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24437,seq24436__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24447 = arguments.length;
var i__9518__auto___24448 = (0);
while(true){
if((i__9518__auto___24448 < len__9517__auto___24447)){
args__9524__auto__.push((arguments[i__9518__auto___24448]));

var G__24449 = (i__9518__auto___24448 + (1));
i__9518__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24438){
var G__24439 = cljs.core.first(seq24438);
var seq24438__$1 = cljs.core.next(seq24438);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24439,seq24438__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24450 = arguments.length;
var i__9518__auto___24451 = (0);
while(true){
if((i__9518__auto___24451 < len__9517__auto___24450)){
args__9524__auto__.push((arguments[i__9518__auto___24451]));

var G__24452 = (i__9518__auto___24451 + (1));
i__9518__auto___24451 = G__24452;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24440){
var G__24441 = cljs.core.first(seq24440);
var seq24440__$1 = cljs.core.next(seq24440);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24441,seq24440__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24442){
var G__24443 = cljs.core.first(seq24442);
var seq24442__$1 = cljs.core.next(seq24442);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24443,seq24442__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24464 = arguments.length;
var i__9518__auto___24465 = (0);
while(true){
if((i__9518__auto___24465 < len__9517__auto___24464)){
args__9524__auto__.push((arguments[i__9518__auto___24465]));

var G__24466 = (i__9518__auto___24465 + (1));
i__9518__auto___24465 = G__24466;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24456){
var G__24457 = cljs.core.first(seq24456);
var seq24456__$1 = cljs.core.next(seq24456);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24457,seq24456__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24467 = arguments.length;
var i__9518__auto___24468 = (0);
while(true){
if((i__9518__auto___24468 < len__9517__auto___24467)){
args__9524__auto__.push((arguments[i__9518__auto___24468]));

var G__24469 = (i__9518__auto___24468 + (1));
i__9518__auto___24468 = G__24469;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24458){
var G__24459 = cljs.core.first(seq24458);
var seq24458__$1 = cljs.core.next(seq24458);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24459,seq24458__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24470 = arguments.length;
var i__9518__auto___24471 = (0);
while(true){
if((i__9518__auto___24471 < len__9517__auto___24470)){
args__9524__auto__.push((arguments[i__9518__auto___24471]));

var G__24472 = (i__9518__auto___24471 + (1));
i__9518__auto___24471 = G__24472;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24460){
var G__24461 = cljs.core.first(seq24460);
var seq24460__$1 = cljs.core.next(seq24460);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24461,seq24460__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24462){
var G__24463 = cljs.core.first(seq24462);
var seq24462__$1 = cljs.core.next(seq24462);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24463,seq24462__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24484 = arguments.length;
var i__9518__auto___24485 = (0);
while(true){
if((i__9518__auto___24485 < len__9517__auto___24484)){
args__9524__auto__.push((arguments[i__9518__auto___24485]));

var G__24486 = (i__9518__auto___24485 + (1));
i__9518__auto___24485 = G__24486;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24476){
var G__24477 = cljs.core.first(seq24476);
var seq24476__$1 = cljs.core.next(seq24476);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24477,seq24476__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24487 = arguments.length;
var i__9518__auto___24488 = (0);
while(true){
if((i__9518__auto___24488 < len__9517__auto___24487)){
args__9524__auto__.push((arguments[i__9518__auto___24488]));

var G__24489 = (i__9518__auto___24488 + (1));
i__9518__auto___24488 = G__24489;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24478){
var G__24479 = cljs.core.first(seq24478);
var seq24478__$1 = cljs.core.next(seq24478);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24479,seq24478__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24490 = arguments.length;
var i__9518__auto___24491 = (0);
while(true){
if((i__9518__auto___24491 < len__9517__auto___24490)){
args__9524__auto__.push((arguments[i__9518__auto___24491]));

var G__24492 = (i__9518__auto___24491 + (1));
i__9518__auto___24491 = G__24492;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24480){
var G__24481 = cljs.core.first(seq24480);
var seq24480__$1 = cljs.core.next(seq24480);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24481,seq24480__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24482){
var G__24483 = cljs.core.first(seq24482);
var seq24482__$1 = cljs.core.next(seq24482);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24483,seq24482__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24504 = arguments.length;
var i__9518__auto___24505 = (0);
while(true){
if((i__9518__auto___24505 < len__9517__auto___24504)){
args__9524__auto__.push((arguments[i__9518__auto___24505]));

var G__24506 = (i__9518__auto___24505 + (1));
i__9518__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24496){
var G__24497 = cljs.core.first(seq24496);
var seq24496__$1 = cljs.core.next(seq24496);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24497,seq24496__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24507 = arguments.length;
var i__9518__auto___24508 = (0);
while(true){
if((i__9518__auto___24508 < len__9517__auto___24507)){
args__9524__auto__.push((arguments[i__9518__auto___24508]));

var G__24509 = (i__9518__auto___24508 + (1));
i__9518__auto___24508 = G__24509;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24498){
var G__24499 = cljs.core.first(seq24498);
var seq24498__$1 = cljs.core.next(seq24498);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24499,seq24498__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24510 = arguments.length;
var i__9518__auto___24511 = (0);
while(true){
if((i__9518__auto___24511 < len__9517__auto___24510)){
args__9524__auto__.push((arguments[i__9518__auto___24511]));

var G__24512 = (i__9518__auto___24511 + (1));
i__9518__auto___24511 = G__24512;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24500){
var G__24501 = cljs.core.first(seq24500);
var seq24500__$1 = cljs.core.next(seq24500);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24501,seq24500__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24502){
var G__24503 = cljs.core.first(seq24502);
var seq24502__$1 = cljs.core.next(seq24502);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24503,seq24502__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24524 = arguments.length;
var i__9518__auto___24525 = (0);
while(true){
if((i__9518__auto___24525 < len__9517__auto___24524)){
args__9524__auto__.push((arguments[i__9518__auto___24525]));

var G__24526 = (i__9518__auto___24525 + (1));
i__9518__auto___24525 = G__24526;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24516){
var G__24517 = cljs.core.first(seq24516);
var seq24516__$1 = cljs.core.next(seq24516);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24517,seq24516__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24527 = arguments.length;
var i__9518__auto___24528 = (0);
while(true){
if((i__9518__auto___24528 < len__9517__auto___24527)){
args__9524__auto__.push((arguments[i__9518__auto___24528]));

var G__24529 = (i__9518__auto___24528 + (1));
i__9518__auto___24528 = G__24529;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24518){
var G__24519 = cljs.core.first(seq24518);
var seq24518__$1 = cljs.core.next(seq24518);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24519,seq24518__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9524__auto__ = [];
var len__9517__auto___24530 = arguments.length;
var i__9518__auto___24531 = (0);
while(true){
if((i__9518__auto___24531 < len__9517__auto___24530)){
args__9524__auto__.push((arguments[i__9518__auto___24531]));

var G__24532 = (i__9518__auto___24531 + (1));
i__9518__auto___24531 = G__24532;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24520){
var G__24521 = cljs.core.first(seq24520);
var seq24520__$1 = cljs.core.next(seq24520);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24521,seq24520__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24522){
var G__24523 = cljs.core.first(seq24522);
var seq24522__$1 = cljs.core.next(seq24522);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24523,seq24522__$1);
});

