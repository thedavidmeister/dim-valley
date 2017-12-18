// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.test.check.generators');
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
<<<<<<< HEAD
}catch (e17684){var t = e17684;
=======
}catch (e18848){var t = e18848;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return t;
}})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$result,result,cljs.core.cst$kw$function,function$,cljs.core.cst$kw$args,args], null);
});
});
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
<<<<<<< HEAD
var ret__9563__auto___17689 = (function (){
=======
var ret__9565__auto___18853 = (function (){
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
<<<<<<< HEAD
var args__9524__auto__ = [];
var len__9517__auto___17690 = arguments.length;
var i__9518__auto___17691 = (0);
while(true){
if((i__9518__auto___17691 < len__9517__auto___17690)){
args__9524__auto__.push((arguments[i__9518__auto___17691]));

var G__17692 = (i__9518__auto___17691 + (1));
i__9518__auto___17691 = G__17692;
=======
var args__9526__auto__ = [];
var len__9519__auto___18854 = arguments.length;
var i__9520__auto___18855 = (0);
while(true){
if((i__9520__auto___18855 < len__9519__auto___18854)){
args__9526__auto__.push((arguments[i__9520__auto___18855]));

var G__18856 = (i__9520__auto___18855 + (1));
i__9520__auto___18855 = G__18856;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((3) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9525__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),(function (){var x__9194__auto__ = cljs.core.vec(clojure.test.check.properties.binding_gens(bindings));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__9194__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__9194__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(clojure.test.check.properties.binding_vars(bindings)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto__);
})()], 0))));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

<<<<<<< HEAD
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq17685){
var G__17686 = cljs.core.first(seq17685);
var seq17685__$1 = cljs.core.next(seq17685);
var G__17687 = cljs.core.first(seq17685__$1);
var seq17685__$2 = cljs.core.next(seq17685__$1);
var G__17688 = cljs.core.first(seq17685__$2);
var seq17685__$3 = cljs.core.next(seq17685__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__17686,G__17687,G__17688,seq17685__$3);
=======
clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq18849){
var G__18850 = cljs.core.first(seq18849);
var seq18849__$1 = cljs.core.next(seq18849);
var G__18851 = cljs.core.first(seq18849__$1);
var seq18849__$2 = cljs.core.next(seq18849__$1);
var G__18852 = cljs.core.first(seq18849__$2);
var seq18849__$3 = cljs.core.next(seq18849__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__18850,G__18851,G__18852,seq18849__$3);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

return null;
})()
;
clojure.test.check.properties.for_all.cljs$lang$macro = true;

