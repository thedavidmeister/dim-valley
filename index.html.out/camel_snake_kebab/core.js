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
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24393 = arguments.length;
var i__9518__auto___24394 = (0);
while(true){
if((i__9518__auto___24394 < len__9517__auto___24393)){
args__9524__auto__.push((arguments[i__9518__auto___24394]));

var G__24395 = (i__9518__auto___24394 + (1));
i__9518__auto___24394 = G__24395;
=======
var args__9526__auto__ = [];
var len__9519__auto___14073 = arguments.length;
var i__9520__auto___14074 = (0);
while(true){
if((i__9520__auto___14074 < len__9519__auto___14073)){
args__9526__auto__.push((arguments[i__9520__auto___14074]));

var G__14075 = (i__9520__auto___14074 + (1));
i__9520__auto___14074 = G__14075;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
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

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24396){
var G__24397 = cljs.core.first(seq24396);
var seq24396__$1 = cljs.core.next(seq24396);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24397,seq24396__$1);
=======
camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq14076){
var G__14077 = cljs.core.first(seq14076);
var seq14076__$1 = cljs.core.next(seq14076);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__14077,seq14076__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24407 = arguments.length;
var i__9518__auto___24408 = (0);
while(true){
if((i__9518__auto___24408 < len__9517__auto___24407)){
args__9524__auto__.push((arguments[i__9518__auto___24408]));

var G__24409 = (i__9518__auto___24408 + (1));
i__9518__auto___24408 = G__24409;
=======
var args__9526__auto__ = [];
var len__9519__auto___14087 = arguments.length;
var i__9520__auto___14088 = (0);
while(true){
if((i__9520__auto___14088 < len__9519__auto___14087)){
args__9526__auto__.push((arguments[i__9520__auto___14088]));

var G__14089 = (i__9520__auto___14088 + (1));
i__9520__auto___14088 = G__14089;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24398){
var G__24399 = cljs.core.first(seq24398);
var seq24398__$1 = cljs.core.next(seq24398);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24399,seq24398__$1);
=======
camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq14078){
var G__14079 = cljs.core.first(seq14078);
var seq14078__$1 = cljs.core.next(seq14078);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14079,seq14078__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24410 = arguments.length;
var i__9518__auto___24411 = (0);
while(true){
if((i__9518__auto___24411 < len__9517__auto___24410)){
args__9524__auto__.push((arguments[i__9518__auto___24411]));

var G__24412 = (i__9518__auto___24411 + (1));
i__9518__auto___24411 = G__24412;
=======
var args__9526__auto__ = [];
var len__9519__auto___14090 = arguments.length;
var i__9520__auto___14091 = (0);
while(true){
if((i__9520__auto___14091 < len__9519__auto___14090)){
args__9526__auto__.push((arguments[i__9520__auto___14091]));

var G__14092 = (i__9520__auto___14091 + (1));
i__9520__auto___14091 = G__14092;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24400){
var G__24401 = cljs.core.first(seq24400);
var seq24400__$1 = cljs.core.next(seq24400);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24401,seq24400__$1);
=======
camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq14080){
var G__14081 = cljs.core.first(seq14080);
var seq14080__$1 = cljs.core.next(seq14080);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14081,seq14080__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24413 = arguments.length;
var i__9518__auto___24414 = (0);
while(true){
if((i__9518__auto___24414 < len__9517__auto___24413)){
args__9524__auto__.push((arguments[i__9518__auto___24414]));

var G__24415 = (i__9518__auto___24414 + (1));
i__9518__auto___24414 = G__24415;
=======
var args__9526__auto__ = [];
var len__9519__auto___14093 = arguments.length;
var i__9520__auto___14094 = (0);
while(true){
if((i__9520__auto___14094 < len__9519__auto___14093)){
args__9526__auto__.push((arguments[i__9520__auto___14094]));

var G__14095 = (i__9520__auto___14094 + (1));
i__9520__auto___14094 = G__14095;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24416){
var G__24417 = cljs.core.first(seq24416);
var seq24416__$1 = cljs.core.next(seq24416);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24417,seq24416__$1);
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq14096){
var G__14097 = cljs.core.first(seq14096);
var seq14096__$1 = cljs.core.next(seq14096);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__14097,seq14096__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24427 = arguments.length;
var i__9518__auto___24428 = (0);
while(true){
if((i__9518__auto___24428 < len__9517__auto___24427)){
args__9524__auto__.push((arguments[i__9518__auto___24428]));

var G__24429 = (i__9518__auto___24428 + (1));
i__9518__auto___24428 = G__24429;
=======
var args__9526__auto__ = [];
var len__9519__auto___14107 = arguments.length;
var i__9520__auto___14108 = (0);
while(true){
if((i__9520__auto___14108 < len__9519__auto___14107)){
args__9526__auto__.push((arguments[i__9520__auto___14108]));

var G__14109 = (i__9520__auto___14108 + (1));
i__9520__auto___14108 = G__14109;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24418){
var G__24419 = cljs.core.first(seq24418);
var seq24418__$1 = cljs.core.next(seq24418);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24419,seq24418__$1);
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first(seq14098);
var seq14098__$1 = cljs.core.next(seq14098);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14099,seq14098__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24430 = arguments.length;
var i__9518__auto___24431 = (0);
while(true){
if((i__9518__auto___24431 < len__9517__auto___24430)){
args__9524__auto__.push((arguments[i__9518__auto___24431]));

var G__24432 = (i__9518__auto___24431 + (1));
i__9518__auto___24431 = G__24432;
=======
var args__9526__auto__ = [];
var len__9519__auto___14110 = arguments.length;
var i__9520__auto___14111 = (0);
while(true){
if((i__9520__auto___14111 < len__9519__auto___14110)){
args__9526__auto__.push((arguments[i__9520__auto___14111]));

var G__14112 = (i__9520__auto___14111 + (1));
i__9520__auto___14111 = G__14112;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24420){
var G__24421 = cljs.core.first(seq24420);
var seq24420__$1 = cljs.core.next(seq24420);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24421,seq24420__$1);
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq14100){
var G__14101 = cljs.core.first(seq14100);
var seq14100__$1 = cljs.core.next(seq14100);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14101,seq14100__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24433 = arguments.length;
var i__9518__auto___24434 = (0);
while(true){
if((i__9518__auto___24434 < len__9517__auto___24433)){
args__9524__auto__.push((arguments[i__9518__auto___24434]));

var G__24435 = (i__9518__auto___24434 + (1));
i__9518__auto___24434 = G__24435;
=======
var args__9526__auto__ = [];
var len__9519__auto___14113 = arguments.length;
var i__9520__auto___14114 = (0);
while(true){
if((i__9520__auto___14114 < len__9519__auto___14113)){
args__9526__auto__.push((arguments[i__9520__auto___14114]));

var G__14115 = (i__9520__auto___14114 + (1));
i__9520__auto___14114 = G__14115;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24436){
var G__24437 = cljs.core.first(seq24436);
var seq24436__$1 = cljs.core.next(seq24436);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24437,seq24436__$1);
=======
camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq14116){
var G__14117 = cljs.core.first(seq14116);
var seq14116__$1 = cljs.core.next(seq14116);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__14117,seq14116__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24447 = arguments.length;
var i__9518__auto___24448 = (0);
while(true){
if((i__9518__auto___24448 < len__9517__auto___24447)){
args__9524__auto__.push((arguments[i__9518__auto___24448]));

var G__24449 = (i__9518__auto___24448 + (1));
i__9518__auto___24448 = G__24449;
=======
var args__9526__auto__ = [];
var len__9519__auto___14127 = arguments.length;
var i__9520__auto___14128 = (0);
while(true){
if((i__9520__auto___14128 < len__9519__auto___14127)){
args__9526__auto__.push((arguments[i__9520__auto___14128]));

var G__14129 = (i__9520__auto___14128 + (1));
i__9520__auto___14128 = G__14129;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24438){
var G__24439 = cljs.core.first(seq24438);
var seq24438__$1 = cljs.core.next(seq24438);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24439,seq24438__$1);
=======
camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq14118){
var G__14119 = cljs.core.first(seq14118);
var seq14118__$1 = cljs.core.next(seq14118);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__14119,seq14118__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24450 = arguments.length;
var i__9518__auto___24451 = (0);
while(true){
if((i__9518__auto___24451 < len__9517__auto___24450)){
args__9524__auto__.push((arguments[i__9518__auto___24451]));

var G__24452 = (i__9518__auto___24451 + (1));
i__9518__auto___24451 = G__24452;
=======
var args__9526__auto__ = [];
var len__9519__auto___14130 = arguments.length;
var i__9520__auto___14131 = (0);
while(true){
if((i__9520__auto___14131 < len__9519__auto___14130)){
args__9526__auto__.push((arguments[i__9520__auto___14131]));

var G__14132 = (i__9520__auto___14131 + (1));
i__9520__auto___14131 = G__14132;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24440){
var G__24441 = cljs.core.first(seq24440);
var seq24440__$1 = cljs.core.next(seq24440);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24441,seq24440__$1);
=======
camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq14120){
var G__14121 = cljs.core.first(seq14120);
var seq14120__$1 = cljs.core.next(seq14120);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__14121,seq14120__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24453 = arguments.length;
var i__9518__auto___24454 = (0);
while(true){
if((i__9518__auto___24454 < len__9517__auto___24453)){
args__9524__auto__.push((arguments[i__9518__auto___24454]));

var G__24455 = (i__9518__auto___24454 + (1));
i__9518__auto___24454 = G__24455;
=======
var args__9526__auto__ = [];
var len__9519__auto___14133 = arguments.length;
var i__9520__auto___14134 = (0);
while(true){
if((i__9520__auto___14134 < len__9519__auto___14133)){
args__9526__auto__.push((arguments[i__9520__auto___14134]));

var G__14135 = (i__9520__auto___14134 + (1));
i__9520__auto___14134 = G__14135;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24456){
var G__24457 = cljs.core.first(seq24456);
var seq24456__$1 = cljs.core.next(seq24456);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24457,seq24456__$1);
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq14136){
var G__14137 = cljs.core.first(seq14136);
var seq14136__$1 = cljs.core.next(seq14136);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__14137,seq14136__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24467 = arguments.length;
var i__9518__auto___24468 = (0);
while(true){
if((i__9518__auto___24468 < len__9517__auto___24467)){
args__9524__auto__.push((arguments[i__9518__auto___24468]));

var G__24469 = (i__9518__auto___24468 + (1));
i__9518__auto___24468 = G__24469;
=======
var args__9526__auto__ = [];
var len__9519__auto___14147 = arguments.length;
var i__9520__auto___14148 = (0);
while(true){
if((i__9520__auto___14148 < len__9519__auto___14147)){
args__9526__auto__.push((arguments[i__9520__auto___14148]));

var G__14149 = (i__9520__auto___14148 + (1));
i__9520__auto___14148 = G__14149;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24458){
var G__24459 = cljs.core.first(seq24458);
var seq24458__$1 = cljs.core.next(seq24458);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24459,seq24458__$1);
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq14138){
var G__14139 = cljs.core.first(seq14138);
var seq14138__$1 = cljs.core.next(seq14138);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__14139,seq14138__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24470 = arguments.length;
var i__9518__auto___24471 = (0);
while(true){
if((i__9518__auto___24471 < len__9517__auto___24470)){
args__9524__auto__.push((arguments[i__9518__auto___24471]));

var G__24472 = (i__9518__auto___24471 + (1));
i__9518__auto___24471 = G__24472;
=======
var args__9526__auto__ = [];
var len__9519__auto___14150 = arguments.length;
var i__9520__auto___14151 = (0);
while(true){
if((i__9520__auto___14151 < len__9519__auto___14150)){
args__9526__auto__.push((arguments[i__9520__auto___14151]));

var G__14152 = (i__9520__auto___14151 + (1));
i__9520__auto___14151 = G__14152;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24460){
var G__24461 = cljs.core.first(seq24460);
var seq24460__$1 = cljs.core.next(seq24460);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24461,seq24460__$1);
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq14140){
var G__14141 = cljs.core.first(seq14140);
var seq14140__$1 = cljs.core.next(seq14140);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__14141,seq14140__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24473 = arguments.length;
var i__9518__auto___24474 = (0);
while(true){
if((i__9518__auto___24474 < len__9517__auto___24473)){
args__9524__auto__.push((arguments[i__9518__auto___24474]));

var G__24475 = (i__9518__auto___24474 + (1));
i__9518__auto___24474 = G__24475;
=======
var args__9526__auto__ = [];
var len__9519__auto___14153 = arguments.length;
var i__9520__auto___14154 = (0);
while(true){
if((i__9520__auto___14154 < len__9519__auto___14153)){
args__9526__auto__.push((arguments[i__9520__auto___14154]));

var G__14155 = (i__9520__auto___14154 + (1));
i__9520__auto___14154 = G__14155;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24476){
var G__24477 = cljs.core.first(seq24476);
var seq24476__$1 = cljs.core.next(seq24476);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24477,seq24476__$1);
=======
camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq14156){
var G__14157 = cljs.core.first(seq14156);
var seq14156__$1 = cljs.core.next(seq14156);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__14157,seq14156__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24487 = arguments.length;
var i__9518__auto___24488 = (0);
while(true){
if((i__9518__auto___24488 < len__9517__auto___24487)){
args__9524__auto__.push((arguments[i__9518__auto___24488]));

var G__24489 = (i__9518__auto___24488 + (1));
i__9518__auto___24488 = G__24489;
=======
var args__9526__auto__ = [];
var len__9519__auto___14167 = arguments.length;
var i__9520__auto___14168 = (0);
while(true){
if((i__9520__auto___14168 < len__9519__auto___14167)){
args__9526__auto__.push((arguments[i__9520__auto___14168]));

var G__14169 = (i__9520__auto___14168 + (1));
i__9520__auto___14168 = G__14169;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24478){
var G__24479 = cljs.core.first(seq24478);
var seq24478__$1 = cljs.core.next(seq24478);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24479,seq24478__$1);
=======
camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq14158){
var G__14159 = cljs.core.first(seq14158);
var seq14158__$1 = cljs.core.next(seq14158);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14159,seq14158__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24490 = arguments.length;
var i__9518__auto___24491 = (0);
while(true){
if((i__9518__auto___24491 < len__9517__auto___24490)){
args__9524__auto__.push((arguments[i__9518__auto___24491]));

var G__24492 = (i__9518__auto___24491 + (1));
i__9518__auto___24491 = G__24492;
=======
var args__9526__auto__ = [];
var len__9519__auto___14170 = arguments.length;
var i__9520__auto___14171 = (0);
while(true){
if((i__9520__auto___14171 < len__9519__auto___14170)){
args__9526__auto__.push((arguments[i__9520__auto___14171]));

var G__14172 = (i__9520__auto___14171 + (1));
i__9520__auto___14171 = G__14172;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24480){
var G__24481 = cljs.core.first(seq24480);
var seq24480__$1 = cljs.core.next(seq24480);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24481,seq24480__$1);
=======
camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq14160){
var G__14161 = cljs.core.first(seq14160);
var seq14160__$1 = cljs.core.next(seq14160);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14161,seq14160__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24493 = arguments.length;
var i__9518__auto___24494 = (0);
while(true){
if((i__9518__auto___24494 < len__9517__auto___24493)){
args__9524__auto__.push((arguments[i__9518__auto___24494]));

var G__24495 = (i__9518__auto___24494 + (1));
i__9518__auto___24494 = G__24495;
=======
var args__9526__auto__ = [];
var len__9519__auto___14173 = arguments.length;
var i__9520__auto___14174 = (0);
while(true){
if((i__9520__auto___14174 < len__9519__auto___14173)){
args__9526__auto__.push((arguments[i__9520__auto___14174]));

var G__14175 = (i__9520__auto___14174 + (1));
i__9520__auto___14174 = G__14175;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24496){
var G__24497 = cljs.core.first(seq24496);
var seq24496__$1 = cljs.core.next(seq24496);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24497,seq24496__$1);
=======
camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq14176){
var G__14177 = cljs.core.first(seq14176);
var seq14176__$1 = cljs.core.next(seq14176);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__14177,seq14176__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24507 = arguments.length;
var i__9518__auto___24508 = (0);
while(true){
if((i__9518__auto___24508 < len__9517__auto___24507)){
args__9524__auto__.push((arguments[i__9518__auto___24508]));

var G__24509 = (i__9518__auto___24508 + (1));
i__9518__auto___24508 = G__24509;
=======
var args__9526__auto__ = [];
var len__9519__auto___14187 = arguments.length;
var i__9520__auto___14188 = (0);
while(true){
if((i__9520__auto___14188 < len__9519__auto___14187)){
args__9526__auto__.push((arguments[i__9520__auto___14188]));

var G__14189 = (i__9520__auto___14188 + (1));
i__9520__auto___14188 = G__14189;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24498){
var G__24499 = cljs.core.first(seq24498);
var seq24498__$1 = cljs.core.next(seq24498);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24499,seq24498__$1);
=======
camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq14178){
var G__14179 = cljs.core.first(seq14178);
var seq14178__$1 = cljs.core.next(seq14178);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__14179,seq14178__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24510 = arguments.length;
var i__9518__auto___24511 = (0);
while(true){
if((i__9518__auto___24511 < len__9517__auto___24510)){
args__9524__auto__.push((arguments[i__9518__auto___24511]));

var G__24512 = (i__9518__auto___24511 + (1));
i__9518__auto___24511 = G__24512;
=======
var args__9526__auto__ = [];
var len__9519__auto___14190 = arguments.length;
var i__9520__auto___14191 = (0);
while(true){
if((i__9520__auto___14191 < len__9519__auto___14190)){
args__9526__auto__.push((arguments[i__9520__auto___14191]));

var G__14192 = (i__9520__auto___14191 + (1));
i__9520__auto___14191 = G__14192;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24500){
var G__24501 = cljs.core.first(seq24500);
var seq24500__$1 = cljs.core.next(seq24500);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24501,seq24500__$1);
=======
camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq14180){
var G__14181 = cljs.core.first(seq14180);
var seq14180__$1 = cljs.core.next(seq14180);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__14181,seq14180__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24513 = arguments.length;
var i__9518__auto___24514 = (0);
while(true){
if((i__9518__auto___24514 < len__9517__auto___24513)){
args__9524__auto__.push((arguments[i__9518__auto___24514]));

var G__24515 = (i__9518__auto___24514 + (1));
i__9518__auto___24514 = G__24515;
=======
var args__9526__auto__ = [];
var len__9519__auto___14193 = arguments.length;
var i__9520__auto___14194 = (0);
while(true){
if((i__9520__auto___14194 < len__9519__auto___14193)){
args__9526__auto__.push((arguments[i__9520__auto___14194]));

var G__14195 = (i__9520__auto___14194 + (1));
i__9520__auto___14194 = G__14195;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
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
=======
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
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24351__auto__,rest__24352__auto__){
var convert_case__24353__auto__ = (function (p1__24350__24354__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24350__24354__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24352__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24351__auto__,convert_case__24353__auto__);
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__14031__auto__,rest__14032__auto__){
var convert_case__14033__auto__ = (function (p1__14030__14034__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__14030__14034__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14032__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__14031__auto__,convert_case__14033__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24516){
var G__24517 = cljs.core.first(seq24516);
var seq24516__$1 = cljs.core.next(seq24516);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24517,seq24516__$1);
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq14196){
var G__14197 = cljs.core.first(seq14196);
var seq14196__$1 = cljs.core.next(seq14196);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__14197,seq14196__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24527 = arguments.length;
var i__9518__auto___24528 = (0);
while(true){
if((i__9518__auto___24528 < len__9517__auto___24527)){
args__9524__auto__.push((arguments[i__9518__auto___24528]));

var G__24529 = (i__9518__auto___24528 + (1));
i__9518__auto___24528 = G__24529;
=======
var args__9526__auto__ = [];
var len__9519__auto___14207 = arguments.length;
var i__9520__auto___14208 = (0);
while(true){
if((i__9520__auto___14208 < len__9519__auto___14207)){
args__9526__auto__.push((arguments[i__9520__auto___14208]));

var G__14209 = (i__9520__auto___14208 + (1));
i__9520__auto___14208 = G__14209;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24518){
var G__24519 = cljs.core.first(seq24518);
var seq24518__$1 = cljs.core.next(seq24518);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24519,seq24518__$1);
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq14198){
var G__14199 = cljs.core.first(seq14198);
var seq14198__$1 = cljs.core.next(seq14198);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__14199,seq14198__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24530 = arguments.length;
var i__9518__auto___24531 = (0);
while(true){
if((i__9518__auto___24531 < len__9517__auto___24530)){
args__9524__auto__.push((arguments[i__9518__auto___24531]));

var G__24532 = (i__9518__auto___24531 + (1));
i__9518__auto___24531 = G__24532;
=======
var args__9526__auto__ = [];
var len__9519__auto___14210 = arguments.length;
var i__9520__auto___14211 = (0);
while(true){
if((i__9520__auto___14211 < len__9519__auto___14210)){
args__9526__auto__.push((arguments[i__9520__auto___14211]));

var G__14212 = (i__9520__auto___14211 + (1));
i__9520__auto___14211 = G__14212;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24520){
var G__24521 = cljs.core.first(seq24520);
var seq24520__$1 = cljs.core.next(seq24520);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24521,seq24520__$1);
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq14200){
var G__14201 = cljs.core.first(seq14200);
var seq14200__$1 = cljs.core.next(seq14200);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__14201,seq14200__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___24533 = arguments.length;
var i__9518__auto___24534 = (0);
while(true){
if((i__9518__auto___24534 < len__9517__auto___24533)){
args__9524__auto__.push((arguments[i__9518__auto___24534]));

var G__24535 = (i__9518__auto___24534 + (1));
i__9518__auto___24534 = G__24535;
=======
var args__9526__auto__ = [];
var len__9519__auto___14213 = arguments.length;
var i__9520__auto___14214 = (0);
while(true){
if((i__9520__auto___14214 < len__9519__auto___14213)){
args__9526__auto__.push((arguments[i__9520__auto___14214]));

var G__14215 = (i__9520__auto___14214 + (1));
i__9520__auto___14214 = G__14215;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24356__auto__,rest__24357__auto__){
if(!((s__24356__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24356__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24356__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24357__auto__], 0)));
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__14036__auto__,rest__14037__auto__){
if(!((s__14036__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__14036__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__14036__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__14037__auto__], 0)));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

<<<<<<< HEAD
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24522){
var G__24523 = cljs.core.first(seq24522);
var seq24522__$1 = cljs.core.next(seq24522);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24523,seq24522__$1);
=======
camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq14202){
var G__14203 = cljs.core.first(seq14202);
var seq14202__$1 = cljs.core.next(seq14202);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__14203,seq14202__$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

