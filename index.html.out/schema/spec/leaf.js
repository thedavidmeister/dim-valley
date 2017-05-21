// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.spec.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8435__auto__,k__8436__auto__){
var self__ = this;
var this__8435__auto____$1 = this;
return this__8435__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8436__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8437__auto__,k18686,else__8438__auto__){
var self__ = this;
var this__8437__auto____$1 = this;
var G__18688 = (((k18686 instanceof cljs.core.Keyword))?k18686.fqn:null);
switch (G__18688) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18686,else__8438__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__7760__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8449__auto__,writer__8450__auto__,opts__8451__auto__){
var self__ = this;
var this__8449__auto____$1 = this;
var pr_pair__8452__auto__ = ((function (this__8449__auto____$1){
return (function (keyval__8453__auto__){
return cljs.core.pr_sequential_writer(writer__8450__auto__,cljs.core.pr_writer,""," ","",opts__8451__auto__,keyval__8453__auto__);
});})(this__8449__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8450__auto__,pr_pair__8452__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__8451__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18685){
var self__ = this;
var G__18685__$1 = this;
return (new cljs.core.RecordIter((0),G__18685__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8433__auto__){
var self__ = this;
var this__8433__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8429__auto__){
var self__ = this;
var this__8429__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8439__auto__){
var self__ = this;
var this__8439__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8430__auto__){
var self__ = this;
var this__8430__auto____$1 = this;
var h__8202__auto__ = self__.__hash;
if(!((h__8202__auto__ == null))){
return h__8202__auto__;
} else {
var h__8202__auto____$1 = cljs.core.hash_imap(this__8430__auto____$1);
self__.__hash = h__8202__auto____$1;

return h__8202__auto____$1;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8431__auto__,other__8432__auto__){
var self__ = this;
var this__8431__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7748__auto__ = other__8432__auto__;
if(cljs.core.truth_(and__7748__auto__)){
return ((this__8431__auto____$1.constructor === other__8432__auto__.constructor)) && (cljs.core.equiv_map(this__8431__auto____$1,other__8432__auto__));
} else {
return and__7748__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8444__auto__,k__8445__auto__){
var self__ = this;
var this__8444__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__8445__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8444__auto____$1),self__.__meta),k__8445__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8445__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8442__auto__,k__8443__auto__,G__18685){
var self__ = this;
var this__8442__auto____$1 = this;
var pred__18689 = cljs.core.keyword_identical_QMARK_;
var expr__18690 = k__8443__auto__;
if(cljs.core.truth_((function (){var G__18692 = cljs.core.cst$kw$pre;
var G__18693 = expr__18690;
return (pred__18689.cljs$core$IFn$_invoke$arity$2 ? pred__18689.cljs$core$IFn$_invoke$arity$2(G__18692,G__18693) : pred__18689.call(null,G__18692,G__18693));
})())){
return (new schema.spec.leaf.LeafSpec(G__18685,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8443__auto__,G__18685),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8447__auto__){
var self__ = this;
var this__8447__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8434__auto__,G__18685){
var self__ = this;
var this__8434__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__18685,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8440__auto__,entry__8441__auto__){
var self__ = this;
var this__8440__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8441__auto__)){
return this__8440__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8441__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8441__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8440__auto____$1,entry__8441__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__8471__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__8471__auto__,writer__8472__auto__){
return cljs.core._write(writer__8472__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__18687){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__18687),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18687,cljs.core.cst$kw$pre),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
