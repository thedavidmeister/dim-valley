// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('medley.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__23686 = arguments.length;
switch (G__23686) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__23688 = null;
var G__23688__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23688__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23688__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__23688 = function(result,x){
switch(arguments.length){
case 0:
return G__23688__0.call(this);
case 1:
return G__23688__1.call(this,result);
case 2:
return G__23688__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23688.cljs$core$IFn$_invoke$arity$0 = G__23688__0;
G__23688.cljs$core$IFn$_invoke$arity$1 = G__23688__1;
G__23688.cljs$core$IFn$_invoke$arity$2 = G__23688__2;
return G__23688;
})()
});
});

medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
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
var temp__5288__auto__ = cljs.core.seq(ks);
if(temp__5288__auto__){
var vec__23689 = temp__5288__auto__;
var seq__23690 = cljs.core.seq(vec__23689);
var first__23691 = cljs.core.first(seq__23690);
var seq__23690__$1 = cljs.core.next(seq__23690);
var k = first__23691;
var ks__$1 = seq__23690__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__23692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__23693 = ks__$1;
return (medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__23692,G__23693) : medley.core.dissoc_in.call(null,G__23692,G__23693));
})();
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
});
/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__23699 = arguments.length;
switch (G__23699) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___23705 = arguments.length;
var i__9520__auto___23706 = (0);
while(true){
if((i__9520__auto___23706 < len__9519__auto___23705)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23706]));

var G__23707 = (i__9520__auto___23706 + (1));
i__9520__auto___23706 = G__23707;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9543__auto__);

}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__23700){
var vec__23701 = p__23700;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq23695){
var G__23696 = cljs.core.first(seq23695);
var seq23695__$1 = cljs.core.next(seq23695);
var G__23697 = cljs.core.first(seq23695__$1);
var seq23695__$2 = cljs.core.next(seq23695__$1);
var G__23698 = cljs.core.first(seq23695__$2);
var seq23695__$3 = cljs.core.next(seq23695__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__23696,G__23697,G__23698,seq23695__$3);
});

medley.core.assoc_some.cljs$lang$maxFixedArity = (3);

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
if(cljs.core.truth_(medley.core.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll)),coll));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll),coll);
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
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var vec__23709 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23709,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23709,(1),null);
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k__$1,v__$1) : xf.call(null,m,k__$1,v__$1));
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__23712 = m;
var G__23713 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__23714 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__23712,G__23713,G__23714) : xf.call(null,G__23712,G__23713,G__23714));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__23715 = m;
var G__23716 = k;
var G__23717 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__23715,G__23716,G__23717) : xf.call(null,G__23715,G__23716,G__23717));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
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
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
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
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
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
return medley.core.filter_kv(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals(cljs.core.complement(pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__23719 = arguments.length;
switch (G__23719) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(medley.core.queue.cljs$core$IFn$_invoke$arity$0(),coll);
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
var G__23725 = arguments.length;
switch (G__23725) {
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
var args_arr__9542__auto__ = [];
var len__9519__auto___23727 = arguments.length;
var i__9520__auto___23728 = (0);
while(true){
if((i__9520__auto___23728 < len__9519__auto___23727)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23728]));

var G__23729 = (i__9520__auto___23728 + (1));
i__9520__auto___23728 = G__23729;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9543__auto__);

}
});

medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) < (0))){
return a;
} else {
return b;
}
});

medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.least,medley.core.least.cljs$core$IFn$_invoke$arity$2(a,b),more);
});

medley.core.least.cljs$lang$applyTo = (function (seq23722){
var G__23723 = cljs.core.first(seq23722);
var seq23722__$1 = cljs.core.next(seq23722);
var G__23724 = cljs.core.first(seq23722__$1);
var seq23722__$2 = cljs.core.next(seq23722__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__23723,G__23724,seq23722__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__23734 = arguments.length;
switch (G__23734) {
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
var args_arr__9542__auto__ = [];
var len__9519__auto___23736 = arguments.length;
var i__9520__auto___23737 = (0);
while(true){
if((i__9520__auto___23737 < len__9519__auto___23736)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23737]));

var G__23738 = (i__9520__auto___23737 + (1));
i__9520__auto___23737 = G__23738;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9543__auto__);

}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) > (0))){
return a;
} else {
return b;
}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.greatest,medley.core.greatest.cljs$core$IFn$_invoke$arity$2(a,b),more);
});

medley.core.greatest.cljs$lang$applyTo = (function (seq23731){
var G__23732 = cljs.core.first(seq23731);
var seq23731__$1 = cljs.core.next(seq23731);
var G__23733 = cljs.core.first(seq23731__$1);
var seq23731__$2 = cljs.core.next(seq23731__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__23732,G__23733,seq23731__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__23743 = arguments.length;
switch (G__23743) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___23745 = arguments.length;
var i__9520__auto___23746 = (0);
while(true){
if((i__9520__auto___23746 < len__9519__auto___23745)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23746]));

var G__23747 = (i__9520__auto___23746 + (1));
i__9520__auto___23746 = G__23747;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9543__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq23740){
var G__23741 = cljs.core.first(seq23740);
var seq23740__$1 = cljs.core.next(seq23740);
var G__23742 = cljs.core.first(seq23740__$1);
var seq23740__$2 = cljs.core.next(seq23740__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23741,G__23742,seq23740__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__23752 = arguments.length;
switch (G__23752) {
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
var args_arr__9542__auto__ = [];
var len__9519__auto___23754 = arguments.length;
var i__9520__auto___23755 = (0);
while(true){
if((i__9520__auto___23755 < len__9519__auto___23754)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23755]));

var G__23756 = (i__9520__auto___23755 + (1));
i__9520__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9543__auto__);

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
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return (s1) || (s2);
}
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
if(cljs.core.seq(ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(medley.core.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});

medley.core.interleave_all.cljs$lang$applyTo = (function (seq23749){
var G__23750 = cljs.core.first(seq23749);
var seq23749__$1 = cljs.core.next(seq23749);
var G__23751 = cljs.core.first(seq23749__$1);
var seq23749__$2 = cljs.core.next(seq23749__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__23750,G__23751,seq23749__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__23758 = arguments.length;
switch (G__23758) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__23769 = null;
var G__23769__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23769__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23769__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_(seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__23769 = function(result,x){
switch(arguments.length){
case 0:
return G__23769__0.call(this);
case 1:
return G__23769__1.call(this,result);
case 2:
return G__23769__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23769.cljs$core$IFn$_invoke$arity$0 = G__23769__0;
G__23769.cljs$core$IFn$_invoke$arity$1 = G__23769__1;
G__23769.cljs$core$IFn$_invoke$arity$2 = G__23769__2;
return G__23769;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__23763 = (function (p__23764,seen__$1){
while(true){
var vec__23765 = p__23764;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23765,(0),null);
var xs__$1 = vec__23765;
var temp__5290__auto__ = cljs.core.seq(xs__$1);
if(temp__5290__auto__){
var s = temp__5290__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__23770 = cljs.core.rest(s);
var G__23771 = seen__$1;
p__23764 = G__23770;
seen__$1 = G__23771;
continue;
} else {
return cljs.core.cons(x,medley$core$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
});
return fexpr__23763(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

medley.core.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__23773 = arguments.length;
switch (G__23773) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(cljs.core.cst$kw$medley$core_SLASH_none);
return ((function (pv){
return (function() {
var G__23775 = null;
var G__23775__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23775__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23775__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__23775 = function(result,x){
switch(arguments.length){
case 0:
return G__23775__0.call(this);
case 1:
return G__23775__1.call(this,result);
case 2:
return G__23775__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23775.cljs$core$IFn$_invoke$arity$0 = G__23775__0;
G__23775.cljs$core$IFn$_invoke$arity$1 = G__23775__1;
G__23775.cljs$core$IFn$_invoke$arity$2 = G__23775__2;
return G__23775;
})()
;})(pv))
});
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
});

medley.core.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__23777 = arguments.length;
switch (G__23777) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__23779 = null;
var G__23779__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23779__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23779__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__23779 = function(result,x){
switch(arguments.length){
case 0:
return G__23779__0.call(this);
case 1:
return G__23779__1.call(this,result);
case 2:
return G__23779__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23779.cljs$core$IFn$_invoke$arity$0 = G__23779__0;
G__23779.cljs$core$IFn$_invoke$arity$1 = G__23779__1;
G__23779.cljs$core$IFn$_invoke$arity$2 = G__23779__2;
return G__23779;
})()
});
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5290__auto__ = cljs.core.seq(coll);
if(temp__5290__auto__){
var s = temp__5290__auto__;
var x = cljs.core.first(s);
return cljs.core.cons(x,((cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x))))?medley.core.take_upto.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)):null));
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
var G__23781 = arguments.length;
switch (G__23781) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_(true);
return ((function (dv){
return (function() {
var G__23783 = null;
var G__23783__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23783__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23783__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref(dv))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
cljs.core.vreset_BANG_(dv,false);
} else {
}

return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__23783 = function(result,x){
switch(arguments.length){
case 0:
return G__23783__0.call(this);
case 1:
return G__23783__1.call(this,result);
case 2:
return G__23783__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23783.cljs$core$IFn$_invoke$arity$0 = G__23783__0;
G__23783.cljs$core$IFn$_invoke$arity$1 = G__23783__1;
G__23783.cljs$core$IFn$_invoke$arity$2 = G__23783__2;
return G__23783;
})()
;})(dv))
});
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
});

medley.core.drop_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__23785 = arguments.length;
switch (G__23785) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_((-1));
return ((function (i){
return (function() {
var G__23789 = null;
var G__23789__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23789__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23789__2 = (function (result,x){
var G__23786 = result;
var G__23787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_(i,(cljs.core._deref(i) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23786,G__23787) : rf.call(null,G__23786,G__23787));
});
G__23789 = function(result,x){
switch(arguments.length){
case 0:
return G__23789__0.call(this);
case 1:
return G__23789__1.call(this,result);
case 2:
return G__23789__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23789.cljs$core$IFn$_invoke$arity$0 = G__23789__0;
G__23789.cljs$core$IFn$_invoke$arity$1 = G__23789__1;
G__23789.cljs$core$IFn$_invoke$arity$2 = G__23789__2;
return G__23789;
})()
;})(i))
});
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
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
var G__23795 = arguments.length;
switch (G__23795) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9542__auto__ = [];
var len__9519__auto___23797 = arguments.length;
var i__9520__auto___23798 = (0);
while(true){
if((i__9520__auto___23798 < len__9519__auto___23797)){
args_arr__9542__auto__.push((arguments[i__9520__auto___23798]));

var G__23799 = (i__9520__auto___23798 + (1));
i__9520__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var argseq__9543__auto__ = (new cljs.core.IndexedSeq(args_arr__9542__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9543__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__23790_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__23790_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq23792){
var G__23793 = cljs.core.first(seq23792);
var seq23792__$1 = cljs.core.next(seq23792);
var G__23794 = cljs.core.first(seq23792__$1);
var seq23792__$2 = cljs.core.next(seq23792__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23793,G__23794,seq23792__$2);
});

medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.constantly(newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message(ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-clause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause(ex);
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
return cljs.core.uuid(s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid();
});
