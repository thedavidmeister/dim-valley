// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('medley.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__23124 = arguments.length;
switch (G__23124) {
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
var G__23126 = null;
var G__23126__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23126__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23126__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__23126 = function(result,x){
switch(arguments.length){
case 0:
return G__23126__0.call(this);
case 1:
return G__23126__1.call(this,result);
case 2:
return G__23126__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23126.cljs$core$IFn$_invoke$arity$0 = G__23126__0;
G__23126.cljs$core$IFn$_invoke$arity$1 = G__23126__1;
G__23126.cljs$core$IFn$_invoke$arity$2 = G__23126__2;
return G__23126;
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
var vec__23127 = temp__5288__auto__;
var seq__23128 = cljs.core.seq(vec__23127);
var first__23129 = cljs.core.first(seq__23128);
var seq__23128__$1 = cljs.core.next(seq__23128);
var k = first__23129;
var ks__$1 = seq__23128__$1;
if(cljs.core.seq(ks__$1)){
var v = (function (){var G__23130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__23131 = ks__$1;
return (medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__23130,G__23131) : medley.core.dissoc_in.call(null,G__23130,G__23131));
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
var G__23137 = arguments.length;
switch (G__23137) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___23143 = arguments.length;
var i__9916__auto___23144 = (0);
while(true){
if((i__9916__auto___23144 < len__9915__auto___23143)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23144]));

var G__23145 = (i__9916__auto___23144 + (1));
i__9916__auto___23144 = G__23145;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__23138){
var vec__23139 = p__23138;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23139,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq23133){
var G__23134 = cljs.core.first(seq23133);
var seq23133__$1 = cljs.core.next(seq23133);
var G__23135 = cljs.core.first(seq23133__$1);
var seq23133__$2 = cljs.core.next(seq23133__$1);
var G__23136 = cljs.core.first(seq23133__$2);
var seq23133__$3 = cljs.core.next(seq23133__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__23134,G__23135,G__23136,seq23133__$3);
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
var vec__23147 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23147,(1),null);
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
var G__23150 = m;
var G__23151 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__23152 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__23150,G__23151,G__23152) : xf.call(null,G__23150,G__23151,G__23152));
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__23153 = m;
var G__23154 = k;
var G__23155 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__23153,G__23154,G__23155) : xf.call(null,G__23153,G__23154,G__23155));
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
var G__23157 = arguments.length;
switch (G__23157) {
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
var G__23163 = arguments.length;
switch (G__23163) {
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
var args_arr__9938__auto__ = [];
var len__9915__auto___23165 = arguments.length;
var i__9916__auto___23166 = (0);
while(true){
if((i__9916__auto___23166 < len__9915__auto___23165)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23166]));

var G__23167 = (i__9916__auto___23166 + (1));
i__9916__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);

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

medley.core.least.cljs$lang$applyTo = (function (seq23160){
var G__23161 = cljs.core.first(seq23160);
var seq23160__$1 = cljs.core.next(seq23160);
var G__23162 = cljs.core.first(seq23160__$1);
var seq23160__$2 = cljs.core.next(seq23160__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__23161,G__23162,seq23160__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__23172 = arguments.length;
switch (G__23172) {
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
var args_arr__9938__auto__ = [];
var len__9915__auto___23174 = arguments.length;
var i__9916__auto___23175 = (0);
while(true){
if((i__9916__auto___23175 < len__9915__auto___23174)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23175]));

var G__23176 = (i__9916__auto___23175 + (1));
i__9916__auto___23175 = G__23176;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);

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

medley.core.greatest.cljs$lang$applyTo = (function (seq23169){
var G__23170 = cljs.core.first(seq23169);
var seq23169__$1 = cljs.core.next(seq23169);
var G__23171 = cljs.core.first(seq23169__$1);
var seq23169__$2 = cljs.core.next(seq23169__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__23170,G__23171,seq23169__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__23181 = arguments.length;
switch (G__23181) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___23183 = arguments.length;
var i__9916__auto___23184 = (0);
while(true){
if((i__9916__auto___23184 < len__9915__auto___23183)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23184]));

var G__23185 = (i__9916__auto___23184 + (1));
i__9916__auto___23184 = G__23185;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq23178){
var G__23179 = cljs.core.first(seq23178);
var seq23178__$1 = cljs.core.next(seq23178);
var G__23180 = cljs.core.first(seq23178__$1);
var seq23178__$2 = cljs.core.next(seq23178__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__23179,G__23180,seq23178__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__23190 = arguments.length;
switch (G__23190) {
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
var args_arr__9938__auto__ = [];
var len__9915__auto___23192 = arguments.length;
var i__9916__auto___23193 = (0);
while(true){
if((i__9916__auto___23193 < len__9915__auto___23192)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23193]));

var G__23194 = (i__9916__auto___23193 + (1));
i__9916__auto___23193 = G__23194;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);

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

medley.core.interleave_all.cljs$lang$applyTo = (function (seq23187){
var G__23188 = cljs.core.first(seq23187);
var seq23187__$1 = cljs.core.next(seq23187);
var G__23189 = cljs.core.first(seq23187__$1);
var seq23187__$2 = cljs.core.next(seq23187__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__23188,G__23189,seq23187__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__23196 = arguments.length;
switch (G__23196) {
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
var G__23207 = null;
var G__23207__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23207__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23207__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_(seen,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__23207 = function(result,x){
switch(arguments.length){
case 0:
return G__23207__0.call(this);
case 1:
return G__23207__1.call(this,result);
case 2:
return G__23207__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23207.cljs$core$IFn$_invoke$arity$0 = G__23207__0;
G__23207.cljs$core$IFn$_invoke$arity$1 = G__23207__1;
G__23207.cljs$core$IFn$_invoke$arity$2 = G__23207__2;
return G__23207;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__23201 = (function (p__23202,seen__$1){
while(true){
var vec__23203 = p__23202;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23203,(0),null);
var xs__$1 = vec__23203;
var temp__5290__auto__ = cljs.core.seq(xs__$1);
if(temp__5290__auto__){
var s = temp__5290__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__23208 = cljs.core.rest(s);
var G__23209 = seen__$1;
p__23202 = G__23208;
seen__$1 = G__23209;
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
return fexpr__23201(xs,seen);
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
var G__23211 = arguments.length;
switch (G__23211) {
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
var G__23213 = null;
var G__23213__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23213__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23213__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__23213 = function(result,x){
switch(arguments.length){
case 0:
return G__23213__0.call(this);
case 1:
return G__23213__1.call(this,result);
case 2:
return G__23213__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23213.cljs$core$IFn$_invoke$arity$0 = G__23213__0;
G__23213.cljs$core$IFn$_invoke$arity$1 = G__23213__1;
G__23213.cljs$core$IFn$_invoke$arity$2 = G__23213__2;
return G__23213;
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
var G__23215 = arguments.length;
switch (G__23215) {
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
var G__23217 = null;
var G__23217__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23217__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23217__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__23217 = function(result,x){
switch(arguments.length){
case 0:
return G__23217__0.call(this);
case 1:
return G__23217__1.call(this,result);
case 2:
return G__23217__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23217.cljs$core$IFn$_invoke$arity$0 = G__23217__0;
G__23217.cljs$core$IFn$_invoke$arity$1 = G__23217__1;
G__23217.cljs$core$IFn$_invoke$arity$2 = G__23217__2;
return G__23217;
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
var G__23219 = arguments.length;
switch (G__23219) {
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
var G__23221 = null;
var G__23221__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23221__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23221__2 = (function (result,x){
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
G__23221 = function(result,x){
switch(arguments.length){
case 0:
return G__23221__0.call(this);
case 1:
return G__23221__1.call(this,result);
case 2:
return G__23221__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23221.cljs$core$IFn$_invoke$arity$0 = G__23221__0;
G__23221.cljs$core$IFn$_invoke$arity$1 = G__23221__1;
G__23221.cljs$core$IFn$_invoke$arity$2 = G__23221__2;
return G__23221;
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
var G__23223 = arguments.length;
switch (G__23223) {
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
var G__23227 = null;
var G__23227__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__23227__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__23227__2 = (function (result,x){
var G__23224 = result;
var G__23225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_(i,(cljs.core._deref(i) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__23224,G__23225) : rf.call(null,G__23224,G__23225));
});
G__23227 = function(result,x){
switch(arguments.length){
case 0:
return G__23227__0.call(this);
case 1:
return G__23227__1.call(this,result);
case 2:
return G__23227__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__23227.cljs$core$IFn$_invoke$arity$0 = G__23227__0;
G__23227.cljs$core$IFn$_invoke$arity$1 = G__23227__1;
G__23227.cljs$core$IFn$_invoke$arity$2 = G__23227__2;
return G__23227;
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
var G__23233 = arguments.length;
switch (G__23233) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9938__auto__ = [];
var len__9915__auto___23235 = arguments.length;
var i__9916__auto___23236 = (0);
while(true){
if((i__9916__auto___23236 < len__9915__auto___23235)){
args_arr__9938__auto__.push((arguments[i__9916__auto___23236]));

var G__23237 = (i__9916__auto___23236 + (1));
i__9916__auto___23236 = G__23237;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = (new cljs.core.IndexedSeq(args_arr__9938__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__23228_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__23228_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq23230){
var G__23231 = cljs.core.first(seq23230);
var seq23230__$1 = cljs.core.next(seq23230);
var G__23232 = cljs.core.first(seq23230__$1);
var seq23230__$2 = cljs.core.next(seq23230__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23231,G__23232,seq23230__$2);
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
