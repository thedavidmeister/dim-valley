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
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8928__auto__,k__8929__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return this__8928__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8929__auto__,null);
});

<<<<<<< HEAD
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8930__auto__,k21728,else__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
var G__21732 = k21728;
var G__21732__$1 = (((G__21732 instanceof cljs.core.Keyword))?G__21732.fqn:null);
switch (G__21732__$1) {
=======
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k22018,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__22022 = k22018;
var G__22022__$1 = (((G__22022 instanceof cljs.core.Keyword))?G__22022.fqn:null);
switch (G__22022__$1) {
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
case "pre":
return self__.pre;

break;
default:
<<<<<<< HEAD
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21728,else__8931__auto__);
=======
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22018,else__8933__auto__);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0

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
var or__8240__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8942__auto__,writer__8943__auto__,opts__8944__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
var pr_pair__8945__auto__ = ((function (this__8942__auto____$1){
return (function (keyval__8946__auto__){
return cljs.core.pr_sequential_writer(writer__8943__auto__,cljs.core.pr_writer,""," ","",opts__8944__auto__,keyval__8946__auto__);
});})(this__8942__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8943__auto__,pr_pair__8945__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__8944__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

<<<<<<< HEAD
schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21727){
var self__ = this;
var G__21727__$1 = this;
return (new cljs.core.RecordIter((0),G__21727__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
=======
schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22017){
var self__ = this;
var G__22017__$1 = this;
return (new cljs.core.RecordIter((0),G__22017__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8923__auto__){
var self__ = this;
var this__8923__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8932__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8924__auto__){
var self__ = this;
var this__8924__auto____$1 = this;
var h__8696__auto__ = self__.__hash;
if(!((h__8696__auto__ == null))){
return h__8696__auto__;
} else {
<<<<<<< HEAD
var h__8696__auto____$1 = (function (){var fexpr__21733 = ((function (h__8696__auto__,this__8924__auto____$1){
return (function (coll__8925__auto__){
return (-1595767002 ^ cljs.core.hash_unordered_coll(coll__8925__auto__));
});})(h__8696__auto__,this__8924__auto____$1))
;
return fexpr__21733(this__8924__auto____$1);
=======
var h__8698__auto____$1 = (function (){var fexpr__22023 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1595767002 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__22023(this__8926__auto____$1);
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
})();
self__.__hash = h__8696__auto____$1;

return h__8696__auto____$1;
}
});

<<<<<<< HEAD
schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21729,other21730){
var self__ = this;
var this21729__$1 = this;
return (!((other21730 == null))) && ((this21729__$1.constructor === other21730.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21729__$1.pre,other21730.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21729__$1.__extmap,other21730.__extmap));
=======
schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22019,other22020){
var self__ = this;
var this22019__$1 = this;
return (!((other22020 == null))) && ((this22019__$1.constructor === other22020.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22019__$1.pre,other22020.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22019__$1.__extmap,other22020.__extmap));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8937__auto__,k__8938__auto__){
var self__ = this;
var this__8937__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__8938__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8937__auto____$1),self__.__meta),k__8938__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8938__auto__)),null));
}
});

<<<<<<< HEAD
schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8935__auto__,k__8936__auto__,G__21727){
var self__ = this;
var this__8935__auto____$1 = this;
var pred__21734 = cljs.core.keyword_identical_QMARK_;
var expr__21735 = k__8936__auto__;
if(cljs.core.truth_((function (){var G__21737 = cljs.core.cst$kw$pre;
var G__21738 = expr__21735;
return (pred__21734.cljs$core$IFn$_invoke$arity$2 ? pred__21734.cljs$core$IFn$_invoke$arity$2(G__21737,G__21738) : pred__21734.call(null,G__21737,G__21738));
})())){
return (new schema.spec.leaf.LeafSpec(G__21727,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8936__auto__,G__21727),null));
=======
schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__22017){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__22024 = cljs.core.keyword_identical_QMARK_;
var expr__22025 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__22027 = cljs.core.cst$kw$pre;
var G__22028 = expr__22025;
return (pred__22024.cljs$core$IFn$_invoke$arity$2 ? pred__22024.cljs$core$IFn$_invoke$arity$2(G__22027,G__22028) : pred__22024.call(null,G__22027,G__22028));
})())){
return (new schema.spec.leaf.LeafSpec(G__22017,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__22017),null));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8940__auto__){
var self__ = this;
var this__8940__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

<<<<<<< HEAD
schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8927__auto__,G__21727){
var self__ = this;
var this__8927__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__21727,self__.__extmap,self__.__hash));
=======
schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__22017){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__22017,self__.__extmap,self__.__hash));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8933__auto__,entry__8934__auto__){
var self__ = this;
var this__8933__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8934__auto__)){
return this__8933__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8934__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8934__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8933__auto____$1,entry__8934__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__8966__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__8966__auto__,writer__8967__auto__){
return cljs.core._write(writer__8967__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

<<<<<<< HEAD
schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__21731){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__21731),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21731,cljs.core.cst$kw$pre)),null));
=======
schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__22021){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__22021),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22021,cljs.core.cst$kw$pre)),null));
>>>>>>> 84b1f3c9136f6022950f77a8e7c9302fda7c28c0
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
