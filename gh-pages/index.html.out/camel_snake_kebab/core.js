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
var args__9922__auto__ = [];
var len__9915__auto___23673 = arguments.length;
var i__9916__auto___23674 = (0);
while(true){
if((i__9916__auto___23674 < len__9915__auto___23673)){
args__9922__auto__.push((arguments[i__9916__auto___23674]));

var G__23675 = (i__9916__auto___23674 + (1));
i__9916__auto___23674 = G__23675;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((4) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9923__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq23668){
var G__23669 = cljs.core.first(seq23668);
var seq23668__$1 = cljs.core.next(seq23668);
var G__23670 = cljs.core.first(seq23668__$1);
var seq23668__$2 = cljs.core.next(seq23668__$1);
var G__23671 = cljs.core.first(seq23668__$2);
var seq23668__$3 = cljs.core.next(seq23668__$2);
var G__23672 = cljs.core.first(seq23668__$3);
var seq23668__$4 = cljs.core.next(seq23668__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__23669,G__23670,G__23671,G__23672,seq23668__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23684 = arguments.length;
var i__9916__auto___23685 = (0);
while(true){
if((i__9916__auto___23685 < len__9915__auto___23684)){
args__9922__auto__.push((arguments[i__9916__auto___23685]));

var G__23686 = (i__9916__auto___23685 + (1));
i__9916__auto___23685 = G__23686;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq23676){
var G__23677 = cljs.core.first(seq23676);
var seq23676__$1 = cljs.core.next(seq23676);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__23677,seq23676__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23687 = arguments.length;
var i__9916__auto___23688 = (0);
while(true){
if((i__9916__auto___23688 < len__9915__auto___23687)){
args__9922__auto__.push((arguments[i__9916__auto___23688]));

var G__23689 = (i__9916__auto___23688 + (1));
i__9916__auto___23688 = G__23689;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq23678){
var G__23679 = cljs.core.first(seq23678);
var seq23678__$1 = cljs.core.next(seq23678);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__23679,seq23678__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23690 = arguments.length;
var i__9916__auto___23691 = (0);
while(true){
if((i__9916__auto___23691 < len__9915__auto___23690)){
args__9922__auto__.push((arguments[i__9916__auto___23691]));

var G__23692 = (i__9916__auto___23691 + (1));
i__9916__auto___23691 = G__23692;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq23680){
var G__23681 = cljs.core.first(seq23680);
var seq23680__$1 = cljs.core.next(seq23680);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__23681,seq23680__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23693 = arguments.length;
var i__9916__auto___23694 = (0);
while(true){
if((i__9916__auto___23694 < len__9915__auto___23693)){
args__9922__auto__.push((arguments[i__9916__auto___23694]));

var G__23695 = (i__9916__auto___23694 + (1));
i__9916__auto___23694 = G__23695;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq23682){
var G__23683 = cljs.core.first(seq23682);
var seq23682__$1 = cljs.core.next(seq23682);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__23683,seq23682__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23704 = arguments.length;
var i__9916__auto___23705 = (0);
while(true){
if((i__9916__auto___23705 < len__9915__auto___23704)){
args__9922__auto__.push((arguments[i__9916__auto___23705]));

var G__23706 = (i__9916__auto___23705 + (1));
i__9916__auto___23705 = G__23706;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq23696){
var G__23697 = cljs.core.first(seq23696);
var seq23696__$1 = cljs.core.next(seq23696);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__23697,seq23696__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23707 = arguments.length;
var i__9916__auto___23708 = (0);
while(true){
if((i__9916__auto___23708 < len__9915__auto___23707)){
args__9922__auto__.push((arguments[i__9916__auto___23708]));

var G__23709 = (i__9916__auto___23708 + (1));
i__9916__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq23698){
var G__23699 = cljs.core.first(seq23698);
var seq23698__$1 = cljs.core.next(seq23698);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__23699,seq23698__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23710 = arguments.length;
var i__9916__auto___23711 = (0);
while(true){
if((i__9916__auto___23711 < len__9915__auto___23710)){
args__9922__auto__.push((arguments[i__9916__auto___23711]));

var G__23712 = (i__9916__auto___23711 + (1));
i__9916__auto___23711 = G__23712;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq23700){
var G__23701 = cljs.core.first(seq23700);
var seq23700__$1 = cljs.core.next(seq23700);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__23701,seq23700__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23713 = arguments.length;
var i__9916__auto___23714 = (0);
while(true){
if((i__9916__auto___23714 < len__9915__auto___23713)){
args__9922__auto__.push((arguments[i__9916__auto___23714]));

var G__23715 = (i__9916__auto___23714 + (1));
i__9916__auto___23714 = G__23715;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq23702){
var G__23703 = cljs.core.first(seq23702);
var seq23702__$1 = cljs.core.next(seq23702);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__23703,seq23702__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23724 = arguments.length;
var i__9916__auto___23725 = (0);
while(true){
if((i__9916__auto___23725 < len__9915__auto___23724)){
args__9922__auto__.push((arguments[i__9916__auto___23725]));

var G__23726 = (i__9916__auto___23725 + (1));
i__9916__auto___23725 = G__23726;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq23716){
var G__23717 = cljs.core.first(seq23716);
var seq23716__$1 = cljs.core.next(seq23716);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__23717,seq23716__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23727 = arguments.length;
var i__9916__auto___23728 = (0);
while(true){
if((i__9916__auto___23728 < len__9915__auto___23727)){
args__9922__auto__.push((arguments[i__9916__auto___23728]));

var G__23729 = (i__9916__auto___23728 + (1));
i__9916__auto___23728 = G__23729;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq23718){
var G__23719 = cljs.core.first(seq23718);
var seq23718__$1 = cljs.core.next(seq23718);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__23719,seq23718__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23730 = arguments.length;
var i__9916__auto___23731 = (0);
while(true){
if((i__9916__auto___23731 < len__9915__auto___23730)){
args__9922__auto__.push((arguments[i__9916__auto___23731]));

var G__23732 = (i__9916__auto___23731 + (1));
i__9916__auto___23731 = G__23732;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq23720){
var G__23721 = cljs.core.first(seq23720);
var seq23720__$1 = cljs.core.next(seq23720);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__23721,seq23720__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23733 = arguments.length;
var i__9916__auto___23734 = (0);
while(true){
if((i__9916__auto___23734 < len__9915__auto___23733)){
args__9922__auto__.push((arguments[i__9916__auto___23734]));

var G__23735 = (i__9916__auto___23734 + (1));
i__9916__auto___23734 = G__23735;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq23722){
var G__23723 = cljs.core.first(seq23722);
var seq23722__$1 = cljs.core.next(seq23722);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__23723,seq23722__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23744 = arguments.length;
var i__9916__auto___23745 = (0);
while(true){
if((i__9916__auto___23745 < len__9915__auto___23744)){
args__9922__auto__.push((arguments[i__9916__auto___23745]));

var G__23746 = (i__9916__auto___23745 + (1));
i__9916__auto___23745 = G__23746;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq23736){
var G__23737 = cljs.core.first(seq23736);
var seq23736__$1 = cljs.core.next(seq23736);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__23737,seq23736__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23747 = arguments.length;
var i__9916__auto___23748 = (0);
while(true){
if((i__9916__auto___23748 < len__9915__auto___23747)){
args__9922__auto__.push((arguments[i__9916__auto___23748]));

var G__23749 = (i__9916__auto___23748 + (1));
i__9916__auto___23748 = G__23749;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq23738){
var G__23739 = cljs.core.first(seq23738);
var seq23738__$1 = cljs.core.next(seq23738);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__23739,seq23738__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23750 = arguments.length;
var i__9916__auto___23751 = (0);
while(true){
if((i__9916__auto___23751 < len__9915__auto___23750)){
args__9922__auto__.push((arguments[i__9916__auto___23751]));

var G__23752 = (i__9916__auto___23751 + (1));
i__9916__auto___23751 = G__23752;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq23740){
var G__23741 = cljs.core.first(seq23740);
var seq23740__$1 = cljs.core.next(seq23740);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__23741,seq23740__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23753 = arguments.length;
var i__9916__auto___23754 = (0);
while(true){
if((i__9916__auto___23754 < len__9915__auto___23753)){
args__9922__auto__.push((arguments[i__9916__auto___23754]));

var G__23755 = (i__9916__auto___23754 + (1));
i__9916__auto___23754 = G__23755;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq23742){
var G__23743 = cljs.core.first(seq23742);
var seq23742__$1 = cljs.core.next(seq23742);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__23743,seq23742__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23764 = arguments.length;
var i__9916__auto___23765 = (0);
while(true){
if((i__9916__auto___23765 < len__9915__auto___23764)){
args__9922__auto__.push((arguments[i__9916__auto___23765]));

var G__23766 = (i__9916__auto___23765 + (1));
i__9916__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq23756){
var G__23757 = cljs.core.first(seq23756);
var seq23756__$1 = cljs.core.next(seq23756);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__23757,seq23756__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23767 = arguments.length;
var i__9916__auto___23768 = (0);
while(true){
if((i__9916__auto___23768 < len__9915__auto___23767)){
args__9922__auto__.push((arguments[i__9916__auto___23768]));

var G__23769 = (i__9916__auto___23768 + (1));
i__9916__auto___23768 = G__23769;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq23758){
var G__23759 = cljs.core.first(seq23758);
var seq23758__$1 = cljs.core.next(seq23758);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__23759,seq23758__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23770 = arguments.length;
var i__9916__auto___23771 = (0);
while(true){
if((i__9916__auto___23771 < len__9915__auto___23770)){
args__9922__auto__.push((arguments[i__9916__auto___23771]));

var G__23772 = (i__9916__auto___23771 + (1));
i__9916__auto___23771 = G__23772;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq23760){
var G__23761 = cljs.core.first(seq23760);
var seq23760__$1 = cljs.core.next(seq23760);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__23761,seq23760__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23773 = arguments.length;
var i__9916__auto___23774 = (0);
while(true){
if((i__9916__auto___23774 < len__9915__auto___23773)){
args__9922__auto__.push((arguments[i__9916__auto___23774]));

var G__23775 = (i__9916__auto___23774 + (1));
i__9916__auto___23774 = G__23775;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq23762){
var G__23763 = cljs.core.first(seq23762);
var seq23762__$1 = cljs.core.next(seq23762);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__23763,seq23762__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23784 = arguments.length;
var i__9916__auto___23785 = (0);
while(true){
if((i__9916__auto___23785 < len__9915__auto___23784)){
args__9922__auto__.push((arguments[i__9916__auto___23785]));

var G__23786 = (i__9916__auto___23785 + (1));
i__9916__auto___23785 = G__23786;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq23776){
var G__23777 = cljs.core.first(seq23776);
var seq23776__$1 = cljs.core.next(seq23776);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__23777,seq23776__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23787 = arguments.length;
var i__9916__auto___23788 = (0);
while(true){
if((i__9916__auto___23788 < len__9915__auto___23787)){
args__9922__auto__.push((arguments[i__9916__auto___23788]));

var G__23789 = (i__9916__auto___23788 + (1));
i__9916__auto___23788 = G__23789;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq23778){
var G__23779 = cljs.core.first(seq23778);
var seq23778__$1 = cljs.core.next(seq23778);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__23779,seq23778__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23790 = arguments.length;
var i__9916__auto___23791 = (0);
while(true){
if((i__9916__auto___23791 < len__9915__auto___23790)){
args__9922__auto__.push((arguments[i__9916__auto___23791]));

var G__23792 = (i__9916__auto___23791 + (1));
i__9916__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq23780){
var G__23781 = cljs.core.first(seq23780);
var seq23780__$1 = cljs.core.next(seq23780);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__23781,seq23780__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23793 = arguments.length;
var i__9916__auto___23794 = (0);
while(true){
if((i__9916__auto___23794 < len__9915__auto___23793)){
args__9922__auto__.push((arguments[i__9916__auto___23794]));

var G__23795 = (i__9916__auto___23794 + (1));
i__9916__auto___23794 = G__23795;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq23782){
var G__23783 = cljs.core.first(seq23782);
var seq23782__$1 = cljs.core.next(seq23782);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__23783,seq23782__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23804 = arguments.length;
var i__9916__auto___23805 = (0);
while(true){
if((i__9916__auto___23805 < len__9915__auto___23804)){
args__9922__auto__.push((arguments[i__9916__auto___23805]));

var G__23806 = (i__9916__auto___23805 + (1));
i__9916__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23631__auto__,rest__23632__auto__){
var convert_case__23633__auto__ = (function (p1__23630__23634__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__23630__23634__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23632__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__23631__auto__,convert_case__23633__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq23796){
var G__23797 = cljs.core.first(seq23796);
var seq23796__$1 = cljs.core.next(seq23796);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__23797,seq23796__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23807 = arguments.length;
var i__9916__auto___23808 = (0);
while(true){
if((i__9916__auto___23808 < len__9915__auto___23807)){
args__9922__auto__.push((arguments[i__9916__auto___23808]));

var G__23809 = (i__9916__auto___23808 + (1));
i__9916__auto___23808 = G__23809;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq23798){
var G__23799 = cljs.core.first(seq23798);
var seq23798__$1 = cljs.core.next(seq23798);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__23799,seq23798__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23810 = arguments.length;
var i__9916__auto___23811 = (0);
while(true){
if((i__9916__auto___23811 < len__9915__auto___23810)){
args__9922__auto__.push((arguments[i__9916__auto___23811]));

var G__23812 = (i__9916__auto___23811 + (1));
i__9916__auto___23811 = G__23812;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq23800){
var G__23801 = cljs.core.first(seq23800);
var seq23800__$1 = cljs.core.next(seq23800);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__23801,seq23800__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__9922__auto__ = [];
var len__9915__auto___23813 = arguments.length;
var i__9916__auto___23814 = (0);
while(true){
if((i__9916__auto___23814 < len__9915__auto___23813)){
args__9922__auto__.push((arguments[i__9916__auto___23814]));

var G__23815 = (i__9916__auto___23814 + (1));
i__9916__auto___23814 = G__23815;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((1) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9923__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23636__auto__,rest__23637__auto__){
if(!((s__23636__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__23636__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__23636__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__23637__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq23802){
var G__23803 = cljs.core.first(seq23802);
var seq23802__$1 = cljs.core.next(seq23802);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__23803,seq23802__$1);
});

