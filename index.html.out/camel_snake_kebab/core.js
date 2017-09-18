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
var len__9519__auto___24262 = arguments.length;
var i__9520__auto___24263 = (0);
while(true){
if((i__9520__auto___24263 < len__9519__auto___24262)){
args__9526__auto__.push((arguments[i__9520__auto___24263]));

var G__24264 = (i__9520__auto___24263 + (1));
i__9520__auto___24263 = G__24264;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq24257){
var G__24258 = cljs.core.first(seq24257);
var seq24257__$1 = cljs.core.next(seq24257);
var G__24259 = cljs.core.first(seq24257__$1);
var seq24257__$2 = cljs.core.next(seq24257__$1);
var G__24260 = cljs.core.first(seq24257__$2);
var seq24257__$3 = cljs.core.next(seq24257__$2);
var G__24261 = cljs.core.first(seq24257__$3);
var seq24257__$4 = cljs.core.next(seq24257__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__24258,G__24259,G__24260,G__24261,seq24257__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24273 = arguments.length;
var i__9520__auto___24274 = (0);
while(true){
if((i__9520__auto___24274 < len__9519__auto___24273)){
args__9526__auto__.push((arguments[i__9520__auto___24274]));

var G__24275 = (i__9520__auto___24274 + (1));
i__9520__auto___24274 = G__24275;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq24265){
var G__24266 = cljs.core.first(seq24265);
var seq24265__$1 = cljs.core.next(seq24265);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__24266,seq24265__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24276 = arguments.length;
var i__9520__auto___24277 = (0);
while(true){
if((i__9520__auto___24277 < len__9519__auto___24276)){
args__9526__auto__.push((arguments[i__9520__auto___24277]));

var G__24278 = (i__9520__auto___24277 + (1));
i__9520__auto___24277 = G__24278;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq24267){
var G__24268 = cljs.core.first(seq24267);
var seq24267__$1 = cljs.core.next(seq24267);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24268,seq24267__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24279 = arguments.length;
var i__9520__auto___24280 = (0);
while(true){
if((i__9520__auto___24280 < len__9519__auto___24279)){
args__9526__auto__.push((arguments[i__9520__auto___24280]));

var G__24281 = (i__9520__auto___24280 + (1));
i__9520__auto___24280 = G__24281;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq24269){
var G__24270 = cljs.core.first(seq24269);
var seq24269__$1 = cljs.core.next(seq24269);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24270,seq24269__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24282 = arguments.length;
var i__9520__auto___24283 = (0);
while(true){
if((i__9520__auto___24283 < len__9519__auto___24282)){
args__9526__auto__.push((arguments[i__9520__auto___24283]));

var G__24284 = (i__9520__auto___24283 + (1));
i__9520__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq24271){
var G__24272 = cljs.core.first(seq24271);
var seq24271__$1 = cljs.core.next(seq24271);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24272,seq24271__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24293 = arguments.length;
var i__9520__auto___24294 = (0);
while(true){
if((i__9520__auto___24294 < len__9519__auto___24293)){
args__9526__auto__.push((arguments[i__9520__auto___24294]));

var G__24295 = (i__9520__auto___24294 + (1));
i__9520__auto___24294 = G__24295;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq24285){
var G__24286 = cljs.core.first(seq24285);
var seq24285__$1 = cljs.core.next(seq24285);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__24286,seq24285__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24296 = arguments.length;
var i__9520__auto___24297 = (0);
while(true){
if((i__9520__auto___24297 < len__9519__auto___24296)){
args__9526__auto__.push((arguments[i__9520__auto___24297]));

var G__24298 = (i__9520__auto___24297 + (1));
i__9520__auto___24297 = G__24298;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq24287){
var G__24288 = cljs.core.first(seq24287);
var seq24287__$1 = cljs.core.next(seq24287);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24288,seq24287__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24299 = arguments.length;
var i__9520__auto___24300 = (0);
while(true){
if((i__9520__auto___24300 < len__9519__auto___24299)){
args__9526__auto__.push((arguments[i__9520__auto___24300]));

var G__24301 = (i__9520__auto___24300 + (1));
i__9520__auto___24300 = G__24301;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq24289){
var G__24290 = cljs.core.first(seq24289);
var seq24289__$1 = cljs.core.next(seq24289);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24290,seq24289__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24302 = arguments.length;
var i__9520__auto___24303 = (0);
while(true){
if((i__9520__auto___24303 < len__9519__auto___24302)){
args__9526__auto__.push((arguments[i__9520__auto___24303]));

var G__24304 = (i__9520__auto___24303 + (1));
i__9520__auto___24303 = G__24304;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq24291){
var G__24292 = cljs.core.first(seq24291);
var seq24291__$1 = cljs.core.next(seq24291);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24292,seq24291__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9526__auto__ = [];
var len__9519__auto___24313 = arguments.length;
var i__9520__auto___24314 = (0);
while(true){
if((i__9520__auto___24314 < len__9519__auto___24313)){
args__9526__auto__.push((arguments[i__9520__auto___24314]));

var G__24315 = (i__9520__auto___24314 + (1));
i__9520__auto___24314 = G__24315;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((1) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq24305){
var G__24306 = cljs.core.first(seq24305);
var seq24305__$1 = cljs.core.next(seq24305);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__24306,seq24305__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq24307){
var G__24308 = cljs.core.first(seq24307);
var seq24307__$1 = cljs.core.next(seq24307);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__24308,seq24307__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq24309){
var G__24310 = cljs.core.first(seq24309);
var seq24309__$1 = cljs.core.next(seq24309);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__24310,seq24309__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
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
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq24311){
var G__24312 = cljs.core.first(seq24311);
var seq24311__$1 = cljs.core.next(seq24311);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__24312,seq24311__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq24325){
var G__24326 = cljs.core.first(seq24325);
var seq24325__$1 = cljs.core.next(seq24325);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__24326,seq24325__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq24327){
var G__24328 = cljs.core.first(seq24327);
var seq24327__$1 = cljs.core.next(seq24327);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__24328,seq24327__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq24329){
var G__24330 = cljs.core.first(seq24329);
var seq24329__$1 = cljs.core.next(seq24329);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__24330,seq24329__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
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
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq24331){
var G__24332 = cljs.core.first(seq24331);
var seq24331__$1 = cljs.core.next(seq24331);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__24332,seq24331__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq24345){
var G__24346 = cljs.core.first(seq24345);
var seq24345__$1 = cljs.core.next(seq24345);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__24346,seq24345__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq24347){
var G__24348 = cljs.core.first(seq24347);
var seq24347__$1 = cljs.core.next(seq24347);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24348,seq24347__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq24349){
var G__24350 = cljs.core.first(seq24349);
var seq24349__$1 = cljs.core.next(seq24349);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24350,seq24349__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq24351){
var G__24352 = cljs.core.first(seq24351);
var seq24351__$1 = cljs.core.next(seq24351);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24352,seq24351__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq24365){
var G__24366 = cljs.core.first(seq24365);
var seq24365__$1 = cljs.core.next(seq24365);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__24366,seq24365__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq24367){
var G__24368 = cljs.core.first(seq24367);
var seq24367__$1 = cljs.core.next(seq24367);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__24368,seq24367__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq24369){
var G__24370 = cljs.core.first(seq24369);
var seq24369__$1 = cljs.core.next(seq24369);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__24370,seq24369__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
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
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq24371){
var G__24372 = cljs.core.first(seq24371);
var seq24371__$1 = cljs.core.next(seq24371);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__24372,seq24371__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__24220__auto__,rest__24221__auto__){
var convert_case__24222__auto__ = (function (p1__24219__24223__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__24219__24223__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24221__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__24220__auto__,convert_case__24222__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq24385){
var G__24386 = cljs.core.first(seq24385);
var seq24385__$1 = cljs.core.next(seq24385);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__24386,seq24385__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq24387){
var G__24388 = cljs.core.first(seq24387);
var seq24387__$1 = cljs.core.next(seq24387);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__24388,seq24387__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq24389){
var G__24390 = cljs.core.first(seq24389);
var seq24389__$1 = cljs.core.next(seq24389);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__24390,seq24389__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9527__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__24225__auto__,rest__24226__auto__){
if(!((s__24225__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__24225__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__24225__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__24226__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq24391){
var G__24392 = cljs.core.first(seq24391);
var seq24391__$1 = cljs.core.next(seq24391);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__24392,seq24391__$1);
});

