// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
if(cljs.core.vector_QMARK_(e)){
var G__20844 = cljs.core.first(e);
var G__20844__$1 = (((G__20844 instanceof cljs.core.Keyword))?G__20844.fqn:null);
switch (G__20844__$1) {
case "schema.spec.collection/optional":
var G__20845 = cljs.core.next(e);
var G__20846 = params;
var G__20847 = then;
return (schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3 ? schema.spec.collection.sequence_transformer.cljs$core$IFn$_invoke$arity$3(G__20845,G__20846,G__20847) : schema.spec.collection.sequence_transformer.call(null,G__20845,G__20846,G__20847));

break;
case "schema.spec.collection/remaining":
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(e)))?null:(function(){throw (new Error(schema.utils.format_STAR_("remaining can have only one schema.")))})());
var c = schema.spec.core.sub_checker(cljs.core.second(e),params);
return ((function (_,c,G__20844,G__20844__$1){
return (function (res,x){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2(c,x));

return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(res,null) : then.call(null,res,null));
});
;})(_,c,G__20844,G__20844__$1))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20844__$1)].join('')));

}
} else {
var parser = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker(e,params);
return ((function (parser,c){
return (function (res,x){
var G__20848 = res;
var G__20849 = (function (){var G__20850 = ((function (G__20848,parser,c){
return (function (t){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_(t))?t:(c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(t) : c.call(null,t))));
});})(G__20848,parser,c))
;
var G__20851 = x;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__20850,G__20851) : parser.call(null,G__20850,G__20851));
})();
return (then.cljs$core$IFn$_invoke$arity$2 ? then.cljs$core$IFn$_invoke$arity$2(G__20848,G__20849) : then.call(null,G__20848,G__20849));
});
;})(parser,c))
}
});
schema.spec.collection.sequence_transformer = (function schema$spec$collection$sequence_transformer(elts,params,then){
if(cljs.core.not_any_QMARK_((function (p1__20853_SHARP_){
return (cljs.core.vector_QMARK_(p1__20853_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__20853_SHARP_),cljs.core.cst$kw$schema$spec$collection_SLASH_remaining));
}),cljs.core.butlast(elts))){
} else {
throw (new Error(schema.utils.format_STAR_("Remaining schemas must be in tail position.")));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,e){
return schema.spec.collection.element_transformer(e,params,f);
}),then,cljs.core.reverse(elts));
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some(schema.utils.error_QMARK_,l);
});
schema.spec.collection.subschemas = (function schema$spec$collection$subschemas(elt){
if(cljs.core.map_QMARK_(elt)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(elt)], null);
} else {
if(cljs.core.vector_QMARK_(elt)){
} else {
throw (new Error("Assert failed: (vector? elt)"));
}

if(cljs.core.truth_((function (){var G__20855 = cljs.core.first(elt);
var fexpr__20854 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema$spec$collection_SLASH_remaining,null,cljs.core.cst$kw$schema$spec$collection_SLASH_optional,null], null), null);
return (fexpr__20854.cljs$core$IFn$_invoke$arity$1 ? fexpr__20854.cljs$core$IFn$_invoke$arity$1(G__20855) : fexpr__20854.call(null,G__20855));
})())){
} else {
throw (new Error("Assert failed: (#{:schema.spec.collection/remaining :schema.spec.collection/optional} (first elt))"));
}

return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(elt)], 0));
}
});

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
schema.spec.collection.CollectionSpec = (function (pre,constructor$,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor$ = constructor$;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k20857,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__20861 = k20857;
var G__20861__$1 = (((G__20861 instanceof cljs.core.Keyword))?G__20861.fqn:null);
switch (G__20861__$1) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor$;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20857,else__9329__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(schema.spec.collection.subschemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.elements], 0));
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor$__$1 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?self__.constructor$:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = schema.spec.collection.sequence_transformer(self__.elements,params,((function (constructor$__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor$__$1,this$__$1))
);
return ((function (constructor$__$1,t,this$__$1){
return (function (x){
var or__8638__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var remaining = (t.cljs$core$IFn$_invoke$arity$2 ? t.cljs$core$IFn$_invoke$arity$2(res,x) : t.call(null,res,x));
var res__$1 = cljs.core.deref(res);
if(cljs.core.truth_((function (){var or__8638__auto____$1 = cljs.core.seq(remaining);
if(or__8638__auto____$1){
return or__8638__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_(res__$1);
}
})())){
return schema.utils.error((self__.on_error.cljs$core$IFn$_invoke$arity$3 ? self__.on_error.cljs$core$IFn$_invoke$arity$3(x,res__$1,remaining) : self__.on_error.call(null,x,res__$1,remaining)));
} else {
return (constructor$__$1.cljs$core$IFn$_invoke$arity$1 ? constructor$__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : constructor$__$1.call(null,res__$1));
}
}
});
;})(constructor$__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20856){
var self__ = this;
var G__20856__$1 = this;
return (new cljs.core.RecordIter((0),G__20856__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__20862 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1800698765 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__20862(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20858,other20859){
var self__ = this;
var this20858__$1 = this;
return (!((other20859 == null))) && ((this20858__$1.constructor === other20859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20858__$1.pre,other20859.pre)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20858__$1.constructor,other20859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20858__$1.elements,other20859.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20858__$1.on_error,other20859.on_error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20858__$1.__extmap,other20859.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$elements,null,cljs.core.cst$kw$constructor,null,cljs.core.cst$kw$on_DASH_error,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__20856){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__20863 = cljs.core.keyword_identical_QMARK_;
var expr__20864 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__20866 = cljs.core.cst$kw$pre;
var G__20867 = expr__20864;
return (pred__20863.cljs$core$IFn$_invoke$arity$2 ? pred__20863.cljs$core$IFn$_invoke$arity$2(G__20866,G__20867) : pred__20863.call(null,G__20866,G__20867));
})())){
return (new schema.spec.collection.CollectionSpec(G__20856,self__.constructor$,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20868 = cljs.core.cst$kw$constructor;
var G__20869 = expr__20864;
return (pred__20863.cljs$core$IFn$_invoke$arity$2 ? pred__20863.cljs$core$IFn$_invoke$arity$2(G__20868,G__20869) : pred__20863.call(null,G__20868,G__20869));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__20856,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20870 = cljs.core.cst$kw$elements;
var G__20871 = expr__20864;
return (pred__20863.cljs$core$IFn$_invoke$arity$2 ? pred__20863.cljs$core$IFn$_invoke$arity$2(G__20870,G__20871) : pred__20863.call(null,G__20870,G__20871));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,G__20856,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20872 = cljs.core.cst$kw$on_DASH_error;
var G__20873 = expr__20864;
return (pred__20863.cljs$core$IFn$_invoke$arity$2 ? pred__20863.cljs$core$IFn$_invoke$arity$2(G__20872,G__20873) : pred__20863.call(null,G__20872,G__20873));
})())){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,G__20856,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__20856),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$constructor,self__.constructor$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$on_DASH_error,self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__20856){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor$,self__.elements,self__.on_error,G__20856,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$constructor,cljs.core.cst$sym$elements,cljs.core.cst$sym$on_DASH_error], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor$,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor$,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__20860){
return (new schema.spec.collection.CollectionSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__20860),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(G__20860),cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__20860),cljs.core.cst$kw$on_DASH_error.cljs$core$IFn$_invoke$arity$1(G__20860),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20860,cljs.core.cst$kw$pre,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$constructor,cljs.core.cst$kw$elements,cljs.core.cst$kw$on_DASH_error], 0))),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a nested list structure, in which the leaf elements each
 * provide an element schema, parser (allowing for efficient processing of structured
 * collections), and optional error wrapper.  Each item in the list can be a leaf
 * element or an `optional` nested element spec (see below).  In addition, the final
 * element can be a `remaining` schema (see below).
 * 
 * Note that the `optional` carries no semantics with respect to validation;
 * the user must ensure that the parser enforces the desired semantics, which
 * should match the structure of the spec for proper generation.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor$,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec(pre,constructor$,elements,on_error);
});
/**
 * All remaining elements must match schema s
 */
schema.spec.collection.remaining = (function schema$spec$collection$remaining(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema$spec$collection_SLASH_remaining,s], null);
});
/**
 * If any more elements are present, they must match the elements in 'ss'
 */
schema.spec.collection.optional = (function schema$spec$collection$optional(var_args){
var args__9922__auto__ = [];
var len__9915__auto___20876 = arguments.length;
var i__9916__auto___20877 = (0);
while(true){
if((i__9916__auto___20877 < len__9915__auto___20876)){
args__9922__auto__.push((arguments[i__9916__auto___20877]));

var G__20878 = (i__9916__auto___20877 + (1));
i__9916__auto___20877 = G__20878;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic = (function (ss){
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$schema$spec$collection_SLASH_optional,ss));
});

schema.spec.collection.optional.cljs$lang$maxFixedArity = (0);

schema.spec.collection.optional.cljs$lang$applyTo = (function (seq20875){
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20875));
});

schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return schema.spec.collection.remaining(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,(function (coll){
throw (new Error(["should never be not called"].join('')));
})], null));
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
var base = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,parser], null);
if(cljs.core.truth_(required_QMARK_)){
return base;
} else {
return schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}
});
schema.spec.collection.optional_tail = (function schema$spec$collection$optional_tail(schema__$1,parser,more){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(schema.spec.collection.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$parser,parser], null)], 0)),more);
});
