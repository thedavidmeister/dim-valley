// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.set');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
<<<<<<< HEAD
return (function (p1__15507_SHARP_){
return (max === p1__15507_SHARP_);
=======
return (function (p1__16671_SHARP_){
return (max === p1__16671_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
<<<<<<< HEAD
var G__15512 = arguments.length;
switch (G__15512) {
=======
var G__16676 = arguments.length;
switch (G__16676) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9540__auto__ = [];
var len__9517__auto___15514 = arguments.length;
var i__9518__auto___15515 = (0);
while(true){
if((i__9518__auto___15515 < len__9517__auto___15514)){
args_arr__9540__auto__.push((arguments[i__9518__auto___15515]));

var G__15516 = (i__9518__auto___15515 + (1));
i__9518__auto___15515 = G__15516;
=======
var args_arr__9542__auto__ = [];
var len__9519__auto___16678 = arguments.length;
var i__9520__auto___16679 = (0);
while(true){
if((i__9520__auto___16679 < len__9519__auto___16678)){
args_arr__9542__auto__.push((arguments[i__9520__auto___16679]));

var G__16680 = (i__9520__auto___16679 + (1));
i__9520__auto___16679 = G__16680;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9541__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

<<<<<<< HEAD
clojure.set.union.cljs$lang$applyTo = (function (seq15509){
var G__15510 = cljs.core.first(seq15509);
var seq15509__$1 = cljs.core.next(seq15509);
var G__15511 = cljs.core.first(seq15509__$1);
var seq15509__$2 = cljs.core.next(seq15509__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__15510,G__15511,seq15509__$2);
=======
clojure.set.union.cljs$lang$applyTo = (function (seq16673){
var G__16674 = cljs.core.first(seq16673);
var seq16673__$1 = cljs.core.next(seq16673);
var G__16675 = cljs.core.first(seq16673__$1);
var seq16673__$2 = cljs.core.next(seq16673__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__16674,G__16675,seq16673__$2);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
<<<<<<< HEAD
var G__15522 = arguments.length;
switch (G__15522) {
=======
var G__16686 = arguments.length;
switch (G__16686) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9540__auto__ = [];
var len__9517__auto___15524 = arguments.length;
var i__9518__auto___15525 = (0);
while(true){
if((i__9518__auto___15525 < len__9517__auto___15524)){
args_arr__9540__auto__.push((arguments[i__9518__auto___15525]));

var G__15526 = (i__9518__auto___15525 + (1));
i__9518__auto___15525 = G__15526;
=======
var args_arr__9542__auto__ = [];
var len__9519__auto___16688 = arguments.length;
var i__9520__auto___16689 = (0);
while(true){
if((i__9520__auto___16689 < len__9519__auto___16688)){
args_arr__9542__auto__.push((arguments[i__9520__auto___16689]));

var G__16690 = (i__9520__auto___16689 + (1));
i__9520__auto___16689 = G__16690;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9541__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
<<<<<<< HEAD
var G__15527 = s2;
var G__15528 = s1;
s1 = G__15527;
s2 = G__15528;
=======
var G__16691 = s2;
var G__16692 = s1;
s1 = G__16691;
s2 = G__16692;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
<<<<<<< HEAD
var bubbled_sets = clojure.set.bubble_max_key((function (p1__15517_SHARP_){
return (- cljs.core.count(p1__15517_SHARP_));
=======
var bubbled_sets = clojure.set.bubble_max_key((function (p1__16681_SHARP_){
return (- cljs.core.count(p1__16681_SHARP_));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

<<<<<<< HEAD
clojure.set.intersection.cljs$lang$applyTo = (function (seq15519){
var G__15520 = cljs.core.first(seq15519);
var seq15519__$1 = cljs.core.next(seq15519);
var G__15521 = cljs.core.first(seq15519__$1);
var seq15519__$2 = cljs.core.next(seq15519__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__15520,G__15521,seq15519__$2);
=======
clojure.set.intersection.cljs$lang$applyTo = (function (seq16683){
var G__16684 = cljs.core.first(seq16683);
var seq16683__$1 = cljs.core.next(seq16683);
var G__16685 = cljs.core.first(seq16683__$1);
var seq16683__$2 = cljs.core.next(seq16683__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__16684,G__16685,seq16683__$2);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
<<<<<<< HEAD
var G__15533 = arguments.length;
switch (G__15533) {
=======
var G__16697 = arguments.length;
switch (G__16697) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__9540__auto__ = [];
var len__9517__auto___15535 = arguments.length;
var i__9518__auto___15536 = (0);
while(true){
if((i__9518__auto___15536 < len__9517__auto___15535)){
args_arr__9540__auto__.push((arguments[i__9518__auto___15536]));

var G__15537 = (i__9518__auto___15536 + (1));
i__9518__auto___15536 = G__15537;
=======
var args_arr__9542__auto__ = [];
var len__9519__auto___16699 = arguments.length;
var i__9520__auto___16700 = (0);
while(true){
if((i__9520__auto___16700 < len__9519__auto___16699)){
args_arr__9542__auto__.push((arguments[i__9520__auto___16700]));

var G__16701 = (i__9520__auto___16700 + (1));
i__9520__auto___16700 = G__16701;
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
continue;
} else {
}
break;
}

var argseq__9541__auto__ = (new cljs.core.IndexedSeq(args_arr__9540__auto__.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9541__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

<<<<<<< HEAD
clojure.set.difference.cljs$lang$applyTo = (function (seq15530){
var G__15531 = cljs.core.first(seq15530);
var seq15530__$1 = cljs.core.next(seq15530);
var G__15532 = cljs.core.first(seq15530__$1);
var seq15530__$2 = cljs.core.next(seq15530__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__15531,G__15532,seq15530__$2);
=======
clojure.set.difference.cljs$lang$applyTo = (function (seq16694){
var G__16695 = cljs.core.first(seq16694);
var seq16694__$1 = cljs.core.next(seq16694);
var G__16696 = cljs.core.first(seq16694__$1);
var seq16694__$2 = cljs.core.next(seq16694__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__16695,G__16696,seq16694__$2);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);

/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
<<<<<<< HEAD
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15538_SHARP_){
return cljs.core.select_keys(p1__15538_SHARP_,ks);
=======
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16702_SHARP_){
return cljs.core.select_keys(p1__16702_SHARP_,ks);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
<<<<<<< HEAD
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__15539){
var vec__15540 = p__15539;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(1),null);
=======
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__16703){
var vec__16704 = p__16703;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
<<<<<<< HEAD
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15543_SHARP_){
return clojure.set.rename_keys(p1__15543_SHARP_,kmap);
=======
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16707_SHARP_){
return clojure.set.rename_keys(p1__16707_SHARP_,kmap);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
<<<<<<< HEAD
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__15544){
var vec__15545 = p__15544;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15545,(1),null);
=======
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__16708){
var vec__16709 = p__16708;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16709,(1),null);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
<<<<<<< HEAD
var G__15553 = arguments.length;
switch (G__15553) {
=======
var G__16717 = arguments.length;
switch (G__16717) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
<<<<<<< HEAD
var vec__15554 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__15554,r,s,idx){
return (function (ret,x){
var found = (function (){var G__15557 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__15557) : idx.call(null,G__15557));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__15554,r,s,idx){
return (function (p1__15548_SHARP_,p2__15549_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15548_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__15549_SHARP_,x], 0)));
});})(found,ks,vec__15554,r,s,idx))
=======
var vec__16718 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16718,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16718,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__16718,r,s,idx){
return (function (ret,x){
var found = (function (){var G__16721 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__16721) : idx.call(null,G__16721));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__16718,r,s,idx){
return (function (p1__16712_SHARP_,p2__16713_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16712_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__16713_SHARP_,x], 0)));
});})(found,ks,vec__16718,r,s,idx))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(ks,vec__15554,r,s,idx))
=======
});})(ks,vec__16718,r,s,idx))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
<<<<<<< HEAD
var vec__15558 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15558,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__15558,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__15561 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__15561) : idx.call(null,G__15561));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__15558,r,s,k,idx){
return (function (p1__15550_SHARP_,p2__15551_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__15550_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__15551_SHARP_,x], 0)));
});})(found,vec__15558,r,s,k,idx))
=======
var vec__16722 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16722,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__16722,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__16725 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__16725) : idx.call(null,G__16725));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__16722,r,s,k,idx){
return (function (p1__16714_SHARP_,p2__16715_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16714_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__16715_SHARP_,x], 0)));
});})(found,vec__16722,r,s,k,idx))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(vec__15558,r,s,k,idx))
=======
});})(vec__16722,r,s,k,idx))
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
<<<<<<< HEAD
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__15563_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__15563_SHARP_);
=======
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__16727_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__16727_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
<<<<<<< HEAD
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__15564_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__15564_SHARP_);
=======
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__16728_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__16728_SHARP_);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}),set2));
});
