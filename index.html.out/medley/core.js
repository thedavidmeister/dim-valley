// Compiled by ClojureScript 1.9.521 {}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var args14165 = [];
var len__8981__auto___14168 = arguments.length;
var i__8982__auto___14169 = (0);
while(true){
if((i__8982__auto___14169 < len__8981__auto___14168)){
args14165.push((arguments[i__8982__auto___14169]));

var G__14170 = (i__8982__auto___14169 + (1));
i__8982__auto___14169 = G__14170;
continue;
} else {
}
break;
}

var G__14167 = args14165.length;
switch (G__14167) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14165.length)].join('')));

}
});

medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__14172 = null;
var G__14172__0 = (function (){
return rf.call(null);
});
var G__14172__1 = (function (result){
return rf.call(null,result);
});
var G__14172__2 = (function (result,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,rf.call(null,result,x));
} else {
return result;
}
});
G__14172 = function(result,x){
switch(arguments.length){
case 0:
return G__14172__0.call(this);
case 1:
return G__14172__1.call(this,result);
case 2:
return G__14172__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14172.cljs$core$IFn$_invoke$arity$0 = G__14172__0;
G__14172.cljs$core$IFn$_invoke$arity$1 = G__14172__1;
G__14172.cljs$core$IFn$_invoke$arity$2 = G__14172__2;
return G__14172;
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
var vec__14176 = temp__6736__auto__;
var seq__14177 = cljs.core.seq.call(null,vec__14176);
var first__14178 = cljs.core.first.call(null,seq__14177);
var seq__14177__$1 = cljs.core.next.call(null,seq__14177);
var k = first__14178;
var ks__$1 = seq__14177__$1;
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
var args14179 = [];
var len__8981__auto___14190 = arguments.length;
var i__8982__auto___14191 = (0);
while(true){
if((i__8982__auto___14191 < len__8981__auto___14190)){
args14179.push((arguments[i__8982__auto___14191]));

var G__14192 = (i__8982__auto___14191 + (1));
i__8982__auto___14191 = G__14192;
continue;
} else {
}
break;
}

var G__14185 = args14179.length;
switch (G__14185) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14179.slice((3)),(0),null));
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
return cljs.core.reduce.call(null,(function (m__$1,p__14186){
var vec__14187 = p__14186;
var k__$1 = cljs.core.nth.call(null,vec__14187,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__14187,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq14180){
var G__14181 = cljs.core.first.call(null,seq14180);
var seq14180__$1 = cljs.core.next.call(null,seq14180);
var G__14182 = cljs.core.first.call(null,seq14180__$1);
var seq14180__$2 = cljs.core.next.call(null,seq14180__$1);
var G__14183 = cljs.core.first.call(null,seq14180__$2);
var seq14180__$3 = cljs.core.next.call(null,seq14180__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__14181,G__14182,G__14183,seq14180__$3);
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
var vec__14199 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__14199,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__14199,(1),null);
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
var args14202 = [];
var len__8981__auto___14205 = arguments.length;
var i__8982__auto___14206 = (0);
while(true){
if((i__8982__auto___14206 < len__8981__auto___14205)){
args14202.push((arguments[i__8982__auto___14206]));

var G__14207 = (i__8982__auto___14206 + (1));
i__8982__auto___14206 = G__14207;
continue;
} else {
}
break;
}

var G__14204 = args14202.length;
switch (G__14204) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14202.length)].join('')));

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
var args14209 = [];
var len__8981__auto___14215 = arguments.length;
var i__8982__auto___14216 = (0);
while(true){
if((i__8982__auto___14216 < len__8981__auto___14215)){
args14209.push((arguments[i__8982__auto___14216]));

var G__14217 = (i__8982__auto___14216 + (1));
i__8982__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var G__14214 = args14209.length;
switch (G__14214) {
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
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14209.slice((2)),(0),null));
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

medley.core.least.cljs$lang$applyTo = (function (seq14210){
var G__14211 = cljs.core.first.call(null,seq14210);
var seq14210__$1 = cljs.core.next.call(null,seq14210);
var G__14212 = cljs.core.first.call(null,seq14210__$1);
var seq14210__$2 = cljs.core.next.call(null,seq14210__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__14211,G__14212,seq14210__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var args14219 = [];
var len__8981__auto___14225 = arguments.length;
var i__8982__auto___14226 = (0);
while(true){
if((i__8982__auto___14226 < len__8981__auto___14225)){
args14219.push((arguments[i__8982__auto___14226]));

var G__14227 = (i__8982__auto___14226 + (1));
i__8982__auto___14226 = G__14227;
continue;
} else {
}
break;
}

var G__14224 = args14219.length;
switch (G__14224) {
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
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14219.slice((2)),(0),null));
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

medley.core.greatest.cljs$lang$applyTo = (function (seq14220){
var G__14221 = cljs.core.first.call(null,seq14220);
var seq14220__$1 = cljs.core.next.call(null,seq14220);
var G__14222 = cljs.core.first.call(null,seq14220__$1);
var seq14220__$2 = cljs.core.next.call(null,seq14220__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__14221,G__14222,seq14220__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var args14229 = [];
var len__8981__auto___14235 = arguments.length;
var i__8982__auto___14236 = (0);
while(true){
if((i__8982__auto___14236 < len__8981__auto___14235)){
args14229.push((arguments[i__8982__auto___14236]));

var G__14237 = (i__8982__auto___14236 + (1));
i__8982__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var G__14234 = args14229.length;
switch (G__14234) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14229.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq14230){
var G__14231 = cljs.core.first.call(null,seq14230);
var seq14230__$1 = cljs.core.next.call(null,seq14230);
var G__14232 = cljs.core.first.call(null,seq14230__$1);
var seq14230__$2 = cljs.core.next.call(null,seq14230__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__14231,G__14232,seq14230__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var args14239 = [];
var len__8981__auto___14245 = arguments.length;
var i__8982__auto___14246 = (0);
while(true){
if((i__8982__auto___14246 < len__8981__auto___14245)){
args14239.push((arguments[i__8982__auto___14246]));

var G__14247 = (i__8982__auto___14246 + (1));
i__8982__auto___14246 = G__14247;
continue;
} else {
}
break;
}

var G__14244 = args14239.length;
switch (G__14244) {
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
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14239.slice((2)),(0),null));
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

medley.core.interleave_all.cljs$lang$applyTo = (function (seq14240){
var G__14241 = cljs.core.first.call(null,seq14240);
var seq14240__$1 = cljs.core.next.call(null,seq14240);
var G__14242 = cljs.core.first.call(null,seq14240__$1);
var seq14240__$2 = cljs.core.next.call(null,seq14240__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__14241,G__14242,seq14240__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var args14249 = [];
var len__8981__auto___14260 = arguments.length;
var i__8982__auto___14261 = (0);
while(true){
if((i__8982__auto___14261 < len__8981__auto___14260)){
args14249.push((arguments[i__8982__auto___14261]));

var G__14262 = (i__8982__auto___14261 + (1));
i__8982__auto___14261 = G__14262;
continue;
} else {
}
break;
}

var G__14251 = args14249.length;
switch (G__14251) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14249.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__14264 = null;
var G__14264__0 = (function (){
return rf.call(null);
});
var G__14264__1 = (function (result){
return rf.call(null,result);
});
var G__14264__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__14264 = function(result,x){
switch(arguments.length){
case 0:
return G__14264__0.call(this);
case 1:
return G__14264__1.call(this,result);
case 2:
return G__14264__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14264.cljs$core$IFn$_invoke$arity$0 = G__14264__0;
G__14264.cljs$core$IFn$_invoke$arity$1 = G__14264__1;
G__14264.cljs$core$IFn$_invoke$arity$2 = G__14264__2;
return G__14264;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__14256,seen__$1){
while(true){
var vec__14257 = p__14256;
var x = cljs.core.nth.call(null,vec__14257,(0),null);
var xs__$1 = vec__14257;
var temp__6738__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__6738__auto__){
var s = temp__6738__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__14265 = cljs.core.rest.call(null,s);
var G__14266 = seen__$1;
p__14256 = G__14265;
seen__$1 = G__14266;
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
var args14267 = [];
var len__8981__auto___14270 = arguments.length;
var i__8982__auto___14271 = (0);
while(true){
if((i__8982__auto___14271 < len__8981__auto___14270)){
args14267.push((arguments[i__8982__auto___14271]));

var G__14272 = (i__8982__auto___14271 + (1));
i__8982__auto___14271 = G__14272;
continue;
} else {
}
break;
}

var G__14269 = args14267.length;
switch (G__14269) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14267.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__14274 = null;
var G__14274__0 = (function (){
return rf.call(null);
});
var G__14274__1 = (function (result){
return rf.call(null,result);
});
var G__14274__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__14274 = function(result,x){
switch(arguments.length){
case 0:
return G__14274__0.call(this);
case 1:
return G__14274__1.call(this,result);
case 2:
return G__14274__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14274.cljs$core$IFn$_invoke$arity$0 = G__14274__0;
G__14274.cljs$core$IFn$_invoke$arity$1 = G__14274__1;
G__14274.cljs$core$IFn$_invoke$arity$2 = G__14274__2;
return G__14274;
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
var args14275 = [];
var len__8981__auto___14278 = arguments.length;
var i__8982__auto___14279 = (0);
while(true){
if((i__8982__auto___14279 < len__8981__auto___14278)){
args14275.push((arguments[i__8982__auto___14279]));

var G__14280 = (i__8982__auto___14279 + (1));
i__8982__auto___14279 = G__14280;
continue;
} else {
}
break;
}

var G__14277 = args14275.length;
switch (G__14277) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14275.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__14282 = null;
var G__14282__0 = (function (){
return rf.call(null);
});
var G__14282__1 = (function (result){
return rf.call(null,result);
});
var G__14282__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__14282 = function(result,x){
switch(arguments.length){
case 0:
return G__14282__0.call(this);
case 1:
return G__14282__1.call(this,result);
case 2:
return G__14282__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14282.cljs$core$IFn$_invoke$arity$0 = G__14282__0;
G__14282.cljs$core$IFn$_invoke$arity$1 = G__14282__1;
G__14282.cljs$core$IFn$_invoke$arity$2 = G__14282__2;
return G__14282;
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
var args14283 = [];
var len__8981__auto___14286 = arguments.length;
var i__8982__auto___14287 = (0);
while(true){
if((i__8982__auto___14287 < len__8981__auto___14286)){
args14283.push((arguments[i__8982__auto___14287]));

var G__14288 = (i__8982__auto___14287 + (1));
i__8982__auto___14287 = G__14288;
continue;
} else {
}
break;
}

var G__14285 = args14283.length;
switch (G__14285) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14283.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__14290 = null;
var G__14290__0 = (function (){
return rf.call(null);
});
var G__14290__1 = (function (result){
return rf.call(null,result);
});
var G__14290__2 = (function (result,x){
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
G__14290 = function(result,x){
switch(arguments.length){
case 0:
return G__14290__0.call(this);
case 1:
return G__14290__1.call(this,result);
case 2:
return G__14290__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14290.cljs$core$IFn$_invoke$arity$0 = G__14290__0;
G__14290.cljs$core$IFn$_invoke$arity$1 = G__14290__1;
G__14290.cljs$core$IFn$_invoke$arity$2 = G__14290__2;
return G__14290;
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
var args14291 = [];
var len__8981__auto___14294 = arguments.length;
var i__8982__auto___14295 = (0);
while(true){
if((i__8982__auto___14295 < len__8981__auto___14294)){
args14291.push((arguments[i__8982__auto___14295]));

var G__14296 = (i__8982__auto___14295 + (1));
i__8982__auto___14295 = G__14296;
continue;
} else {
}
break;
}

var G__14293 = args14291.length;
switch (G__14293) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14291.length)].join('')));

}
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (i){
return (function() {
var G__14298 = null;
var G__14298__0 = (function (){
return rf.call(null);
});
var G__14298__1 = (function (result){
return rf.call(null,result);
});
var G__14298__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__14298 = function(result,x){
switch(arguments.length){
case 0:
return G__14298__0.call(this);
case 1:
return G__14298__1.call(this,result);
case 2:
return G__14298__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14298.cljs$core$IFn$_invoke$arity$0 = G__14298__0;
G__14298.cljs$core$IFn$_invoke$arity$1 = G__14298__1;
G__14298.cljs$core$IFn$_invoke$arity$2 = G__14298__2;
return G__14298;
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
var args14300 = [];
var len__8981__auto___14306 = arguments.length;
var i__8982__auto___14307 = (0);
while(true){
if((i__8982__auto___14307 < len__8981__auto___14306)){
args14300.push((arguments[i__8982__auto___14307]));

var G__14308 = (i__8982__auto___14307 + (1));
i__8982__auto___14307 = G__14308;
continue;
} else {
}
break;
}

var G__14305 = args14300.length;
switch (G__14305) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9004__auto__ = (new cljs.core.IndexedSeq(args14300.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9004__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__14299_SHARP_){
return cljs.core.apply.call(null,f,p1__14299_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq14301){
var G__14302 = cljs.core.first.call(null,seq14301);
var seq14301__$1 = cljs.core.next.call(null,seq14301);
var G__14303 = cljs.core.first.call(null,seq14301__$1);
var seq14301__$2 = cljs.core.next.call(null,seq14301__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14302,G__14303,seq14301__$2);
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