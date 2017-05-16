// Compiled by ClojureScript 1.9.521 {}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var args14309 = [];
var len__8981__auto___14312 = arguments.length;
var i__8982__auto___14313 = (0);
while(true){
if((i__8982__auto___14313 < len__8981__auto___14312)){
args14309.push((arguments[i__8982__auto___14313]));

var G__14314 = (i__8982__auto___14313 + (1));
i__8982__auto___14313 = G__14314;
continue;
} else {
}
break;
}

var G__14311 = args14309.length;
switch (G__14311) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14309.length)].join('')));

}
});

medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__14316 = null;
var G__14316__0 = (function (){
return rf.call(null);
});
var G__14316__1 = (function (result){
return rf.call(null,result);
});
var G__14316__2 = (function (result,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,rf.call(null,result,x));
} else {
return result;
}
});
G__14316 = function(result,x){
switch(arguments.length){
case 0:
return G__14316__0.call(this);
case 1:
return G__14316__1.call(this,result);
case 2:
return G__14316__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14316.cljs$core$IFn$_invoke$arity$0 = G__14316__0;
G__14316.cljs$core$IFn$_invoke$arity$1 = G__14316__1;
G__14316.cljs$core$IFn$_invoke$arity$2 = G__14316__2;
return G__14316;
})()
});
});

medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
});

medley.core.find_first.cljs$lang$maxFixedArity = 2;

/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(m,ks){
var temp__6736__auto__ = cljs.core.seq.call(null,ks);
if(temp__6736__auto__){
var vec__14320 = temp__6736__auto__;
var seq__14321 = cljs.core.seq.call(null,vec__14320);
var first__14322 = cljs.core.first.call(null,seq__14321);
var seq__14321__$1 = cljs.core.next.call(null,seq__14321);
var k = first__14322;
var ks__$1 = seq__14321__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley.core.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
});
/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var args14323 = [];
var len__8981__auto___14334 = arguments.length;
var i__8982__auto___14335 = (0);
while(true){
if((i__8982__auto___14335 < len__8981__auto___14334)){
args14323.push((arguments[i__8982__auto___14335]));

var G__14336 = (i__8982__auto___14335 + (1));
i__8982__auto___14335 = G__14336;
continue;
} else {
}
break;
}

var G__14329 = args14323.length;
switch (G__14329) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14323.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9004__auto__);

}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__14330){
var vec__14331 = p__14330;
var k__$1 = cljs.core.nth.call(null,vec__14331,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__14331,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq14324){
var G__14325 = cljs.core.first.call(null,seq14324);
var seq14324__$1 = cljs.core.next.call(null,seq14324);
var G__14326 = cljs.core.first.call(null,seq14324__$1);
var seq14324__$2 = cljs.core.next.call(null,seq14324__$1);
var G__14327 = cljs.core.first.call(null,seq14324__$2);
var seq14324__$3 = cljs.core.next.call(null,seq14324__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__14325,G__14326,G__14327,seq14324__$3);
});

medley.core.assoc_some.cljs$lang$maxFixedArity = (3);

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
if(cljs.core.truth_(medley.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
/**
 * Maps a function over the key/value pairs of an associate collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__14343 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__14343,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__14343,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var args14346 = [];
var len__8981__auto___14349 = arguments.length;
var i__8982__auto___14350 = (0);
while(true){
if((i__8982__auto___14350 < len__8981__auto___14349)){
args14346.push((arguments[i__8982__auto___14350]));

var G__14351 = (i__8982__auto___14350 + (1));
i__8982__auto___14350 = G__14351;
continue;
} else {
}
break;
}

var G__14348 = args14346.length;
switch (G__14348) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14346.length)].join('')));

}
});

medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
});

medley.core.queue.cljs$lang$maxFixedArity = 1;

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return (x === true) || (x === false);
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var args14353 = [];
var len__8981__auto___14359 = arguments.length;
var i__8982__auto___14360 = (0);
while(true){
if((i__8982__auto___14360 < len__8981__auto___14359)){
args14353.push((arguments[i__8982__auto___14360]));

var G__14361 = (i__8982__auto___14360 + (1));
i__8982__auto___14360 = G__14361;
continue;
} else {
}
break;
}

var G__14358 = args14353.length;
switch (G__14358) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14353.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
});

medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
});

medley.core.least.cljs$lang$applyTo = (function (seq14354){
var G__14355 = cljs.core.first.call(null,seq14354);
var seq14354__$1 = cljs.core.next.call(null,seq14354);
var G__14356 = cljs.core.first.call(null,seq14354__$1);
var seq14354__$2 = cljs.core.next.call(null,seq14354__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__14355,G__14356,seq14354__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var args14363 = [];
var len__8981__auto___14369 = arguments.length;
var i__8982__auto___14370 = (0);
while(true){
if((i__8982__auto___14370 < len__8981__auto___14369)){
args14363.push((arguments[i__8982__auto___14370]));

var G__14371 = (i__8982__auto___14370 + (1));
i__8982__auto___14370 = G__14371;
continue;
} else {
}
break;
}

var G__14368 = args14363.length;
switch (G__14368) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14363.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
});

medley.core.greatest.cljs$lang$applyTo = (function (seq14364){
var G__14365 = cljs.core.first.call(null,seq14364);
var seq14364__$1 = cljs.core.next.call(null,seq14364);
var G__14366 = cljs.core.first.call(null,seq14364__$1);
var seq14364__$2 = cljs.core.next.call(null,seq14364__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__14365,G__14366,seq14364__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var args14373 = [];
var len__8981__auto___14379 = arguments.length;
var i__8982__auto___14380 = (0);
while(true){
if((i__8982__auto___14380 < len__8981__auto___14379)){
args14373.push((arguments[i__8982__auto___14380]));

var G__14381 = (i__8982__auto___14380 + (1));
i__8982__auto___14380 = G__14381;
continue;
} else {
}
break;
}

var G__14378 = args14373.length;
switch (G__14378) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14373.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq14374){
var G__14375 = cljs.core.first.call(null,seq14374);
var seq14374__$1 = cljs.core.next.call(null,seq14374);
var G__14376 = cljs.core.first.call(null,seq14374__$1);
var seq14374__$2 = cljs.core.next.call(null,seq14374__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__14375,G__14376,seq14374__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var args14383 = [];
var len__8981__auto___14389 = arguments.length;
var i__8982__auto___14390 = (0);
while(true){
if((i__8982__auto___14390 < len__8981__auto___14389)){
args14383.push((arguments[i__8982__auto___14390]));

var G__14391 = (i__8982__auto___14390 + (1));
i__8982__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var G__14388 = args14383.length;
switch (G__14388) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14383.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return (s1) || (s2);
}
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});

medley.core.interleave_all.cljs$lang$applyTo = (function (seq14384){
var G__14385 = cljs.core.first.call(null,seq14384);
var seq14384__$1 = cljs.core.next.call(null,seq14384);
var G__14386 = cljs.core.first.call(null,seq14384__$1);
var seq14384__$2 = cljs.core.next.call(null,seq14384__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__14385,G__14386,seq14384__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var args14393 = [];
var len__8981__auto___14404 = arguments.length;
var i__8982__auto___14405 = (0);
while(true){
if((i__8982__auto___14405 < len__8981__auto___14404)){
args14393.push((arguments[i__8982__auto___14405]));

var G__14406 = (i__8982__auto___14405 + (1));
i__8982__auto___14405 = G__14406;
continue;
} else {
}
break;
}

var G__14395 = args14393.length;
switch (G__14395) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14393.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__14408 = null;
var G__14408__0 = (function (){
return rf.call(null);
});
var G__14408__1 = (function (result){
return rf.call(null,result);
});
var G__14408__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__14408 = function(result,x){
switch(arguments.length){
case 0:
return G__14408__0.call(this);
case 1:
return G__14408__1.call(this,result);
case 2:
return G__14408__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14408.cljs$core$IFn$_invoke$arity$0 = G__14408__0;
G__14408.cljs$core$IFn$_invoke$arity$1 = G__14408__1;
G__14408.cljs$core$IFn$_invoke$arity$2 = G__14408__2;
return G__14408;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__14400,seen__$1){
while(true){
var vec__14401 = p__14400;
var x = cljs.core.nth.call(null,vec__14401,(0),null);
var xs__$1 = vec__14401;
var temp__6738__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__6738__auto__){
var s = temp__6738__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__14409 = cljs.core.rest.call(null,s);
var G__14410 = seen__$1;
p__14400 = G__14409;
seen__$1 = G__14410;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

medley.core.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var args14411 = [];
var len__8981__auto___14414 = arguments.length;
var i__8982__auto___14415 = (0);
while(true){
if((i__8982__auto___14415 < len__8981__auto___14414)){
args14411.push((arguments[i__8982__auto___14415]));

var G__14416 = (i__8982__auto___14415 + (1));
i__8982__auto___14415 = G__14416;
continue;
} else {
}
break;
}

var G__14413 = args14411.length;
switch (G__14413) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14411.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__14418 = null;
var G__14418__0 = (function (){
return rf.call(null);
});
var G__14418__1 = (function (result){
return rf.call(null,result);
});
var G__14418__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__14418 = function(result,x){
switch(arguments.length){
case 0:
return G__14418__0.call(this);
case 1:
return G__14418__1.call(this,result);
case 2:
return G__14418__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14418.cljs$core$IFn$_invoke$arity$0 = G__14418__0;
G__14418.cljs$core$IFn$_invoke$arity$1 = G__14418__1;
G__14418.cljs$core$IFn$_invoke$arity$2 = G__14418__2;
return G__14418;
})()
;})(pv))
});
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
});

medley.core.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var args14419 = [];
var len__8981__auto___14422 = arguments.length;
var i__8982__auto___14423 = (0);
while(true){
if((i__8982__auto___14423 < len__8981__auto___14422)){
args14419.push((arguments[i__8982__auto___14423]));

var G__14424 = (i__8982__auto___14423 + (1));
i__8982__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var G__14421 = args14419.length;
switch (G__14421) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14419.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__14426 = null;
var G__14426__0 = (function (){
return rf.call(null);
});
var G__14426__1 = (function (result){
return rf.call(null,result);
});
var G__14426__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__14426 = function(result,x){
switch(arguments.length){
case 0:
return G__14426__0.call(this);
case 1:
return G__14426__1.call(this,result);
case 2:
return G__14426__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14426.cljs$core$IFn$_invoke$arity$0 = G__14426__0;
G__14426.cljs$core$IFn$_invoke$arity$1 = G__14426__1;
G__14426.cljs$core$IFn$_invoke$arity$2 = G__14426__2;
return G__14426;
})()
});
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__6738__auto__ = cljs.core.seq.call(null,coll);
if(temp__6738__auto__){
var s = temp__6738__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
});

medley.core.take_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var args14427 = [];
var len__8981__auto___14430 = arguments.length;
var i__8982__auto___14431 = (0);
while(true){
if((i__8982__auto___14431 < len__8981__auto___14430)){
args14427.push((arguments[i__8982__auto___14431]));

var G__14432 = (i__8982__auto___14431 + (1));
i__8982__auto___14431 = G__14432;
continue;
} else {
}
break;
}

var G__14429 = args14427.length;
switch (G__14429) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14427.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__14434 = null;
var G__14434__0 = (function (){
return rf.call(null);
});
var G__14434__1 = (function (result){
return rf.call(null,result);
});
var G__14434__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__14434 = function(result,x){
switch(arguments.length){
case 0:
return G__14434__0.call(this);
case 1:
return G__14434__1.call(this,result);
case 2:
return G__14434__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14434.cljs$core$IFn$_invoke$arity$0 = G__14434__0;
G__14434.cljs$core$IFn$_invoke$arity$1 = G__14434__1;
G__14434.cljs$core$IFn$_invoke$arity$2 = G__14434__2;
return G__14434;
})()
;})(dv))
});
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
});

medley.core.drop_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var args14435 = [];
var len__8981__auto___14438 = arguments.length;
var i__8982__auto___14439 = (0);
while(true){
if((i__8982__auto___14439 < len__8981__auto___14438)){
args14435.push((arguments[i__8982__auto___14439]));

var G__14440 = (i__8982__auto___14439 + (1));
i__8982__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var G__14437 = args14435.length;
switch (G__14437) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14435.length)].join('')));

}
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (i){
return (function() {
var G__14442 = null;
var G__14442__0 = (function (){
return rf.call(null);
});
var G__14442__1 = (function (result){
return rf.call(null,result);
});
var G__14442__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__14442 = function(result,x){
switch(arguments.length){
case 0:
return G__14442__0.call(this);
case 1:
return G__14442__1.call(this,result);
case 2:
return G__14442__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14442.cljs$core$IFn$_invoke$arity$0 = G__14442__0;
G__14442.cljs$core$IFn$_invoke$arity$1 = G__14442__1;
G__14442.cljs$core$IFn$_invoke$arity$2 = G__14442__2;
return G__14442;
})()
;})(i))
});
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});

medley.core.indexed.cljs$lang$maxFixedArity = 1;

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var args14444 = [];
var len__8981__auto___14450 = arguments.length;
var i__8982__auto___14451 = (0);
while(true){
if((i__8982__auto___14451 < len__8981__auto___14450)){
args14444.push((arguments[i__8982__auto___14451]));

var G__14452 = (i__8982__auto___14451 + (1));
i__8982__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14449 = args14444.length;
switch (G__14449) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14444.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__14443_SHARP_){
return cljs.core.apply.call(null,f,p1__14443_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq14445){
var G__14446 = cljs.core.first.call(null,seq14445);
var seq14445__$1 = cljs.core.next.call(null,seq14445);
var G__14447 = cljs.core.first.call(null,seq14445__$1);
var seq14445__$2 = cljs.core.next.call(null,seq14445__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14446,G__14447,seq14445__$2);
});

medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-clause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});

//# sourceMappingURL=core.js.map