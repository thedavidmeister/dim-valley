// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
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
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k20910,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__20914 = k20910;
var G__20914__$1 = (((G__20914 instanceof cljs.core.Keyword))?G__20914.fqn:null);
switch (G__20914__$1) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20910,else__9329__auto__);

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
var or__8638__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20909){
var self__ = this;
var G__20909__$1 = this;
return (new cljs.core.RecordIter((0),G__20909__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__20915 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1595767002 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__20915(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20911,other20912){
var self__ = this;
var this20911__$1 = this;
return (!((other20912 == null))) && ((this20911__$1.constructor === other20912.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20911__$1.pre,other20912.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20911__$1.__extmap,other20912.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__20909){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__20916 = cljs.core.keyword_identical_QMARK_;
var expr__20917 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__20919 = cljs.core.cst$kw$pre;
var G__20920 = expr__20917;
return (pred__20916.cljs$core$IFn$_invoke$arity$2 ? pred__20916.cljs$core$IFn$_invoke$arity$2(G__20919,G__20920) : pred__20916.call(null,G__20919,G__20920));
})())){
return (new schema.spec.leaf.LeafSpec(G__20909,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__20909),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__20909){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__20909,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__20913){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__20913),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20913,cljs.core.cst$kw$pre)),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
