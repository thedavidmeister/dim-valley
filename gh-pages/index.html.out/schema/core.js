// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('schema.utils');
goog.require('schema.spec.core');
goog.require('schema.spec.leaf');
goog.require('schema.spec.variant');
goog.require('schema.spec.collection');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (schema.core.spec[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto__.call(null,this$));
} else {
var m__9372__auto____$1 = (schema.core.spec["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (schema.core.explain[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto__.call(null,this$));
} else {
var m__9372__auto____$1 = (schema.core.explain["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
var fexpr__22479 = schema.core.checker(schema__$1);
return (fexpr__22479.cljs$core$IFn$_invoke$arity$1 ? fexpr__22479.cljs$core$IFn$_invoke$arity$1(x) : fexpr__22479.call(null,x));
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__5290__auto___22480 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__5290__auto___22480)){
var error_22481 = temp__5290__auto___22480;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_22481], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_22481], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
var fexpr__22482 = schema.core.validator(schema__$1);
return (fexpr__22482.cljs$core$IFn$_invoke$arity$1 ? fexpr__22482.cljs$core$IFn$_invoke$arity$1(value) : fexpr__22482.call(null,value));
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__22483_SHARP_){
var and__8626__auto__ = !((p1__22483_SHARP_ == null));
if(and__8626__auto__){
var or__8638__auto__ = (klass === p1__22483_SHARP_.constructor);
if(or__8638__auto__){
return or__8638__auto__;
} else {
return p1__22483_SHARP_ instanceof klass;
}
} else {
return and__8626__auto__;
}
}),(function (p1__22484_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = klass;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22484_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
}));
});
goog.object.set(schema.core.Schema,"function",true);

var G__22485_22494 = schema.core.spec;
var G__22486_22495 = "function";
var G__22487_22496 = ((function (G__22485_22494,G__22486_22495){
return (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var class_schema = temp__5288__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
});})(G__22485_22494,G__22486_22495))
;
goog.object.set(G__22485_22494,G__22486_22495,G__22487_22496);

var G__22488_22497 = schema.core.explain;
var G__22489_22498 = "function";
var G__22490_22499 = ((function (G__22488_22497,G__22489_22498){
return (function (this$){
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var more_schema = temp__5288__auto__;
return schema.core.explain(more_schema);
} else {
var pred__22491 = cljs.core._EQ_;
var expr__22492 = this$;
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(null,expr__22492) : pred__22491.call(null,null,expr__22492)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(Boolean,expr__22492) : pred__22491.call(null,Boolean,expr__22492)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(Number,expr__22492) : pred__22491.call(null,Number,expr__22492)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(null,expr__22492) : pred__22491.call(null,null,expr__22492)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(Date,expr__22492) : pred__22491.call(null,Date,expr__22492)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__22491.cljs$core$IFn$_invoke$arity$2 ? pred__22491.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__22492) : pred__22491.call(null,cljs.core.UUID,expr__22492)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
});})(G__22488_22497,G__22489_22498))
;
goog.object.set(G__22488_22497,G__22489_22498,G__22490_22499);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22501,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22505 = k22501;
var G__22505__$1 = (((G__22505 instanceof cljs.core.Keyword))?G__22505.fqn:null);
switch (G__22505__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22501,else__9329__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.AnythingSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22500){
var self__ = this;
var G__22500__$1 = this;
return (new cljs.core.RecordIter((0),G__22500__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22506 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22506(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22502,other22503){
var self__ = this;
var this22502__$1 = this;
return (!((other22503 == null))) && ((this22502__$1.constructor === other22503.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22502__$1._,other22503._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22502__$1.__extmap,other22503.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22500){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22507 = cljs.core.keyword_identical_QMARK_;
var expr__22508 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22510 = cljs.core.cst$kw$_;
var G__22511 = expr__22508;
return (pred__22507.cljs$core$IFn$_invoke$arity$2 ? pred__22507.cljs$core$IFn$_invoke$arity$2(G__22510,G__22511) : pred__22507.call(null,G__22510,G__22511));
})())){
return (new schema.core.AnythingSchema(G__22500,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22500),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22500){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__22500,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__22504){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__22504),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22504,cljs.core.cst$kw$_)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22516,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22520 = k22516;
var G__22520__$1 = (((G__22520 instanceof cljs.core.Keyword))?G__22520.fqn:null);
switch (G__22520__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22516,else__9329__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.EqSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22515){
var self__ = this;
var G__22515__$1 = this;
return (new cljs.core.RecordIter((0),G__22515__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22521 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22521(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22517,other22518){
var self__ = this;
var this22517__$1 = this;
return (!((other22518 == null))) && ((this22517__$1.constructor === other22518.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22517__$1.v,other22518.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22517__$1.__extmap,other22518.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22515){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22522 = cljs.core.keyword_identical_QMARK_;
var expr__22523 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22525 = cljs.core.cst$kw$v;
var G__22526 = expr__22523;
return (pred__22522.cljs$core$IFn$_invoke$arity$2 ? pred__22522.cljs$core$IFn$_invoke$arity$2(G__22525,G__22526) : pred__22522.call(null,G__22525,G__22526));
})())){
return (new schema.core.EqSchema(G__22515,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22515),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22515){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__22515,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22513_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__22513_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22514_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = self__.v;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22514_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = self__.v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__22519){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__22519),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22519,cljs.core.cst$kw$v)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22531,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22535 = k22531;
var G__22535__$1 = (((G__22535 instanceof cljs.core.Keyword))?G__22535.fqn:null);
switch (G__22535__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22531,else__9329__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Isa{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22530){
var self__ = this;
var G__22530__$1 = this;
return (new cljs.core.RecordIter((0),G__22530__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22536 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22536(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22532,other22533){
var self__ = this;
var this22532__$1 = this;
return (!((other22533 == null))) && ((this22532__$1.constructor === other22533.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22532__$1.h,other22533.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22532__$1.parent,other22533.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22532__$1.__extmap,other22533.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22530){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22537 = cljs.core.keyword_identical_QMARK_;
var expr__22538 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22540 = cljs.core.cst$kw$h;
var G__22541 = expr__22538;
return (pred__22537.cljs$core$IFn$_invoke$arity$2 ? pred__22537.cljs$core$IFn$_invoke$arity$2(G__22540,G__22541) : pred__22537.call(null,G__22540,G__22541));
})())){
return (new schema.core.Isa(G__22530,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22542 = cljs.core.cst$kw$parent;
var G__22543 = expr__22538;
return (pred__22537.cljs$core$IFn$_invoke$arity$2 ? pred__22537.cljs$core$IFn$_invoke$arity$2(G__22542,G__22543) : pred__22537.call(null,G__22542,G__22543));
})())){
return (new schema.core.Isa(self__.h,G__22530,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22530),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22530){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__22530,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22528_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__22528_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__22528_SHARP_,self__.parent);
}
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22529_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = p1__22529_SHARP_;
return cljs.core._conj((function (){var x__9592__auto____$1 = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__22534){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__22534),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__22534),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22534,cljs.core.cst$kw$h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent], 0))),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__22546 = arguments.length;
switch (G__22546) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22551,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22555 = k22551;
var G__22555__$1 = (((G__22555 instanceof cljs.core.Keyword))?G__22555.fqn:null);
switch (G__22555__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22551,else__9329__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.EnumSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22550){
var self__ = this;
var G__22550__$1 = this;
return (new cljs.core.RecordIter((0),G__22550__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22556 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22556(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22552,other22553){
var self__ = this;
var this22552__$1 = this;
return (!((other22553 == null))) && ((this22552__$1.constructor === other22553.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22552__$1.vs,other22553.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22552__$1.__extmap,other22553.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22550){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22557 = cljs.core.keyword_identical_QMARK_;
var expr__22558 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22560 = cljs.core.cst$kw$vs;
var G__22561 = expr__22558;
return (pred__22557.cljs$core$IFn$_invoke$arity$2 ? pred__22557.cljs$core$IFn$_invoke$arity$2(G__22560,G__22561) : pred__22557.call(null,G__22560,G__22561));
})())){
return (new schema.core.EnumSchema(G__22550,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22550),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22550){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__22550,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22548_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__22548_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22549_SHARP_){
var x__9592__auto__ = self__.vs;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22549_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__22554){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__22554),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22554,cljs.core.cst$kw$vs)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__9922__auto__ = [];
var len__9915__auto___22564 = arguments.length;
var i__9916__auto___22565 = (0);
while(true){
if((i__9916__auto___22565 < len__9915__auto___22564)){
args__9922__auto__.push((arguments[i__9916__auto___22565]));

var G__22566 = (i__9916__auto___22565 + (1));
i__9916__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq22563){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22563));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22569,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22573 = k22569;
var G__22573__$1 = (((G__22573 instanceof cljs.core.Keyword))?G__22573.fqn:null);
switch (G__22573__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22569,else__9329__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Predicate{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22568){
var self__ = this;
var G__22568__$1 = this;
return (new cljs.core.RecordIter((0),G__22568__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22574 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22574(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22570,other22571){
var self__ = this;
var this22570__$1 = this;
return (!((other22571 == null))) && ((this22570__$1.constructor === other22571.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22570__$1.p_QMARK_,other22571.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22570__$1.pred_name,other22571.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22570__$1.__extmap,other22571.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22568){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22575 = cljs.core.keyword_identical_QMARK_;
var expr__22576 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22578 = cljs.core.cst$kw$p_QMARK_;
var G__22579 = expr__22576;
return (pred__22575.cljs$core$IFn$_invoke$arity$2 ? pred__22575.cljs$core$IFn$_invoke$arity$2(G__22578,G__22579) : pred__22575.call(null,G__22578,G__22579));
})())){
return (new schema.core.Predicate(G__22568,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22580 = cljs.core.cst$kw$pred_DASH_name;
var G__22581 = expr__22576;
return (pred__22575.cljs$core$IFn$_invoke$arity$2 ? pred__22575.cljs$core$IFn$_invoke$arity$2(G__22580,G__22581) : pred__22575.call(null,G__22580,G__22581));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__22568,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22568),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22568){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__22568,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__22567_SHARP_){
var x__9592__auto__ = self__.pred_name;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22567_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj((function (){var x__9592__auto__ = self__.pred_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__22572){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22572),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__22572),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22572,cljs.core.cst$kw$p_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_DASH_name], 0))),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__22584 = arguments.length;
switch (G__22584) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22589,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22593 = k22589;
var G__22593__$1 = (((G__22593 instanceof cljs.core.Keyword))?G__22593.fqn:null);
switch (G__22593__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22589,else__9329__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Protocol{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22588){
var self__ = this;
var G__22588__$1 = this;
return (new cljs.core.RecordIter((0),G__22588__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22594 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22594(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22590,other22591){
var self__ = this;
var this22590__$1 = this;
return (!((other22591 == null))) && ((this22590__$1.constructor === other22591.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22590__$1.p,other22591.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22590__$1.__extmap,other22591.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22588){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22595 = cljs.core.keyword_identical_QMARK_;
var expr__22596 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22598 = cljs.core.cst$kw$p;
var G__22599 = expr__22596;
return (pred__22595.cljs$core$IFn$_invoke$arity$2 ? pred__22595.cljs$core$IFn$_invoke$arity$2(G__22598,G__22599) : pred__22595.call(null,G__22598,G__22599));
})())){
return (new schema.core.Protocol(G__22588,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22588),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22588){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__22588,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22586_SHARP_){
var fexpr__22600 = cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__22600.cljs$core$IFn$_invoke$arity$1 ? fexpr__22600.cljs$core$IFn$_invoke$arity$1(p1__22586_SHARP_) : fexpr__22600.call(null,p1__22586_SHARP_));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22587_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22587_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__22592){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__22592),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22592,cljs.core.cst$kw$p)),null));
});

RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22602_SHARP_){
return cljs.core.re_find(this$__$1,p1__22602_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22603_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(this$__$1);
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22603_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)].join('').slice((1),(-1))),"\""].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core22606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core22606 = (function (meta22607){
this.meta22607 = meta22607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.core.t_schema$core22606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22608,meta22607__$1){
var self__ = this;
var _22608__$1 = this;
return (new schema.core.t_schema$core22606(meta22607__$1));
});

schema.core.t_schema$core22606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22608){
var self__ = this;
var _22608__$1 = this;
return self__.meta22607;
});

schema.core.t_schema$core22606.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.t_schema$core22606.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22604_SHARP_){
return (p1__22604_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22605_SHARP_){
return cljs.core._conj(cljs.core._conj((function (){var x__9592__auto__ = p1__22605_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core22606.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core22606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta22607], null);
});

schema.core.t_schema$core22606.cljs$lang$type = true;

schema.core.t_schema$core22606.cljs$lang$ctorStr = "schema.core/t_schema$core22606";

schema.core.t_schema$core22606.cljs$lang$ctorPrWriter = (function (this__9309__auto__,writer__9310__auto__,opt__9311__auto__){
return cljs.core._write(writer__9310__auto__,"schema.core/t_schema$core22606");
});

schema.core.__GT_t_schema$core22606 = (function schema$core$__GT_t_schema$core22606(meta22607){
return (new schema.core.t_schema$core22606(meta22607));
});

}

return (new schema.core.t_schema$core22606(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22610,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22614 = k22610;
var G__22614__$1 = (((G__22614 instanceof cljs.core.Keyword))?G__22614.fqn:null);
switch (G__22614__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22610,else__9329__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Maybe{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22609){
var self__ = this;
var G__22609__$1 = this;
return (new cljs.core.RecordIter((0),G__22609__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22615 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22615(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22611,other22612){
var self__ = this;
var this22611__$1 = this;
return (!((other22612 == null))) && ((this22611__$1.constructor === other22612.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22611__$1.schema,other22612.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22611__$1.__extmap,other22612.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22609){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22616 = cljs.core.keyword_identical_QMARK_;
var expr__22617 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22619 = cljs.core.cst$kw$schema;
var G__22620 = expr__22617;
return (pred__22616.cljs$core$IFn$_invoke$arity$2 ? pred__22616.cljs$core$IFn$_invoke$arity$2(G__22619,G__22620) : pred__22616.call(null,G__22619,G__22620));
})())){
return (new schema.core.Maybe(G__22609,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22609),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22609){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__22609,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__22613){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22613),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22613,cljs.core.cst$kw$schema)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22624,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22628 = k22624;
var G__22628__$1 = (((G__22628 instanceof cljs.core.Keyword))?G__22628.fqn:null);
switch (G__22628__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22624,else__9329__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.NamedSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22623){
var self__ = this;
var G__22623__$1 = this;
return (new cljs.core.RecordIter((0),G__22623__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22629 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22629(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22625,other22626){
var self__ = this;
var this22625__$1 = this;
return (!((other22626 == null))) && ((this22625__$1.constructor === other22626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22625__$1.schema,other22626.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22625__$1.name,other22626.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22625__$1.__extmap,other22626.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22623){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22630 = cljs.core.keyword_identical_QMARK_;
var expr__22631 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22633 = cljs.core.cst$kw$schema;
var G__22634 = expr__22631;
return (pred__22630.cljs$core$IFn$_invoke$arity$2 ? pred__22630.cljs$core$IFn$_invoke$arity$2(G__22633,G__22634) : pred__22630.call(null,G__22633,G__22634));
})())){
return (new schema.core.NamedSchema(G__22623,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22635 = cljs.core.cst$kw$name;
var G__22636 = expr__22631;
return (pred__22630.cljs$core$IFn$_invoke$arity$2 ? pred__22630.cljs$core$IFn$_invoke$arity$2(G__22635,G__22636) : pred__22630.call(null,G__22635,G__22636));
})())){
return (new schema.core.NamedSchema(self__.schema,G__22623,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22623),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22623){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__22623,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__22622_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__22622_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9592__auto____$1 = self__.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__22627){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22627),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__22627),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22627,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name], 0))),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22640,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22644 = k22640;
var G__22644__$1 = (((G__22644 instanceof cljs.core.Keyword))?G__22644.fqn:null);
switch (G__22644__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22640,else__9329__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Either{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22639){
var self__ = this;
var G__22639__$1 = this;
return (new cljs.core.RecordIter((0),G__22639__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22645 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22645(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22641,other22642){
var self__ = this;
var this22641__$1 = this;
return (!((other22642 == null))) && ((this22641__$1.constructor === other22642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22641__$1.schemas,other22642.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22641__$1.__extmap,other22642.__extmap));
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22639){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22646 = cljs.core.keyword_identical_QMARK_;
var expr__22647 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22649 = cljs.core.cst$kw$schemas;
var G__22650 = expr__22647;
return (pred__22646.cljs$core$IFn$_invoke$arity$2 ? pred__22646.cljs$core$IFn$_invoke$arity$2(G__22649,G__22650) : pred__22646.call(null,G__22649,G__22650));
})())){
return (new schema.core.Either(G__22639,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22639),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22639){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__22639,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9520__auto__ = ((function (this$__$1){
return (function schema$core$iter__22651(s__22652){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22652__$1 = s__22652;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22652__$1);
if(temp__5290__auto__){
var s__22652__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22652__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22652__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22654 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22653 = (0);
while(true){
if((i__22653 < size__9519__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22653);
cljs.core.chunk_append(b__22654,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__22656 = (i__22653 + (1));
i__22653 = G__22656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),schema$core$iter__22651(cljs.core.chunk_rest(s__22652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),null);
}
} else {
var s = cljs.core.first(s__22652__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__22651(cljs.core.rest(s__22652__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__9520__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__22638_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = p1__22638_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__22643){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__22643),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22643,cljs.core.cst$kw$schemas)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__9922__auto__ = [];
var len__9915__auto___22658 = arguments.length;
var i__9916__auto___22659 = (0);
while(true){
if((i__9916__auto___22659 < len__9915__auto___22658)){
args__9922__auto__.push((arguments[i__9916__auto___22659]));

var G__22660 = (i__9916__auto___22659 + (1));
i__9916__auto___22659 = G__22660;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq22657){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22657));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22663,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22667 = k22663;
var G__22667__$1 = (((G__22667 instanceof cljs.core.Keyword))?G__22667.fqn:null);
switch (G__22667__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22663,else__9329__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22662){
var self__ = this;
var G__22662__$1 = this;
return (new cljs.core.RecordIter((0),G__22662__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22668 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22668(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22664,other22665){
var self__ = this;
var this22664__$1 = this;
return (!((other22665 == null))) && ((this22664__$1.constructor === other22665.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22664__$1.preds_and_schemas,other22665.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22664__$1.error_symbol,other22665.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22664__$1.__extmap,other22665.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22662){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22669 = cljs.core.keyword_identical_QMARK_;
var expr__22670 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22672 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__22673 = expr__22670;
return (pred__22669.cljs$core$IFn$_invoke$arity$2 ? pred__22669.cljs$core$IFn$_invoke$arity$2(G__22672,G__22673) : pred__22669.call(null,G__22672,G__22673));
})())){
return (new schema.core.ConditionalSchema(G__22662,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22674 = cljs.core.cst$kw$error_DASH_symbol;
var G__22675 = expr__22670;
return (pred__22669.cljs$core$IFn$_invoke$arity$2 ? pred__22669.cljs$core$IFn$_invoke$arity$2(G__22674,G__22675) : pred__22669.call(null,G__22674,G__22675));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__22662,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22662),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22662){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__22662,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9520__auto__ = ((function (this$__$1){
return (function schema$core$iter__22676(s__22677){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22677__$1 = s__22677;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22677__$1);
if(temp__5290__auto__){
var s__22677__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22677__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22677__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22679 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22678 = (0);
while(true){
if((i__22678 < size__9519__auto__)){
var vec__22680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22678);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22680,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22680,(1),null);
cljs.core.chunk_append(b__22679,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__22691 = (i__22678 + (1));
i__22678 = G__22691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22679),schema$core$iter__22676(cljs.core.chunk_rest(s__22677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22679),null);
}
} else {
var vec__22683 = cljs.core.first(s__22677__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__22676(cljs.core.rest(s__22677__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__9520__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__22661_SHARP_){
var x__9592__auto__ = (function (){var or__8638__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})();
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22661_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__22686){
var vec__22687 = p__22686;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22687,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22687,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__22666){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__22666),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__22666),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22666,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_symbol], 0))),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schemaX where predX (an ordinary Clojure function
 * that returns true or false) returns true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__9922__auto__ = [];
var len__9915__auto___22703 = arguments.length;
var i__9916__auto___22704 = (0);
while(true){
if((i__9916__auto___22704 < len__9915__auto___22703)){
args__9922__auto__.push((arguments[i__9916__auto___22704]));

var G__22705 = (i__9916__auto___22704 + (1));
i__9916__auto___22704 = G__22705;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__9520__auto__ = (function schema$core$iter__22693(s__22694){
return (new cljs.core.LazySeq(null,(function (){
var s__22694__$1 = s__22694;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22694__$1);
if(temp__5290__auto__){
var s__22694__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22694__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22694__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22696 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22695 = (0);
while(true){
if((i__22695 < size__9519__auto__)){
var vec__22697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22695);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,(1),null);
cljs.core.chunk_append(b__22696,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__22706 = (i__22695 + (1));
i__22695 = G__22706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22696),schema$core$iter__22693(cljs.core.chunk_rest(s__22694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22696),null);
}
} else {
var vec__22700 = cljs.core.first(s__22694__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22700,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__22693(cljs.core.rest(s__22694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9520__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq22692){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22692));
});


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__9371__auto__ = (((this$ == null))?null:this$);
var m__9372__auto__ = (schema.core.precondition[goog.typeOf(x__9371__auto__)]);
if(!((m__9372__auto__ == null))){
return (m__9372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto__.call(null,this$));
} else {
var m__9372__auto____$1 = (schema.core.precondition["_"]);
if(!((m__9372__auto____$1 == null))){
return (m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9372__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9372__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__9520__auto__ = ((function (this$__$1){
return (function schema$core$iter__22707(s__22708){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22708__$1 = s__22708;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22708__$1);
if(temp__5290__auto__){
var s__22708__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22708__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22708__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22710 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22709 = (0);
while(true){
if((i__22709 < size__9519__auto__)){
var map__22711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22709);
var map__22711__$1 = ((((!((map__22711 == null)))?((((map__22711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22711):map__22711);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22711__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22711__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__22710,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__22715 = (i__22709 + (1));
i__22709 = G__22715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22710),schema$core$iter__22707(cljs.core.chunk_rest(s__22708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22710),null);
}
} else {
var map__22713 = cljs.core.first(s__22708__$2);
var map__22713__$1 = ((((!((map__22713 == null)))?((((map__22713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22713):map__22713);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22713__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22713__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__22707(cljs.core.rest(s__22708__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__9520__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22718,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22722 = k22718;
var G__22722__$1 = (((G__22722 instanceof cljs.core.Keyword))?G__22722.fqn:null);
switch (G__22722__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22718,else__9329__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.CondPre{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22717){
var self__ = this;
var G__22717__$1 = this;
return (new cljs.core.RecordIter((0),G__22717__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22723 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22723(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22719,other22720){
var self__ = this;
var this22719__$1 = this;
return (!((other22720 == null))) && ((this22719__$1.constructor === other22720.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22719__$1.schemas,other22720.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22719__$1.__extmap,other22720.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22717){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22724 = cljs.core.keyword_identical_QMARK_;
var expr__22725 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22727 = cljs.core.cst$kw$schemas;
var G__22728 = expr__22725;
return (pred__22724.cljs$core$IFn$_invoke$arity$2 ? pred__22724.cljs$core$IFn$_invoke$arity$2(G__22727,G__22728) : pred__22724.call(null,G__22727,G__22728));
})())){
return (new schema.core.CondPre(G__22717,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22717),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22717){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__22717,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9520__auto__ = ((function (this$__$1){
return (function schema$core$iter__22729(s__22730){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__22730__$1 = s__22730;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22730__$1);
if(temp__5290__auto__){
var s__22730__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22730__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22730__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22732 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22731 = (0);
while(true){
if((i__22731 < size__9519__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22731);
cljs.core.chunk_append(b__22732,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__22734 = (i__22731 + (1));
i__22731 = G__22734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22732),schema$core$iter__22729(cljs.core.chunk_rest(s__22730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22732),null);
}
} else {
var s = cljs.core.first(s__22730__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__22729(cljs.core.rest(s__22730__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__9520__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__22716_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = p1__22716_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__22721){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__22721),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22721,cljs.core.cst$kw$schemas)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * Given a datum, the preconditions for each schema (which typically
 * check just the outermost class) are tested against the datum in turn.
 * The first schema whose precondition matches is greedily selected,
 * and the datum is validated against that schema.  Unlike `either`,
 * a validation failure is final (and there is no backtracking to try
 * other schemas that might match).
 * 
 * Thus, `cond-pre` is only suitable for schemas with mutually exclusive
 * preconditions (e.g., s/Int and s/Str).  If this doesn't hold
 * (e.g. {:a s/Int} and {:b s/Str}), you must use `conditional` instead
 * and provide an explicit condition for distinguishing the cases.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__9922__auto__ = [];
var len__9915__auto___22736 = arguments.length;
var i__9916__auto___22737 = (0);
while(true){
if((i__9916__auto___22737 < len__9915__auto___22736)){
args__9922__auto__.push((arguments[i__9916__auto___22737]));

var G__22738 = (i__9916__auto___22737 + (1));
i__9916__auto___22737 = G__22738;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq22735){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22735));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22741,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22745 = k22741;
var G__22745__$1 = (((G__22745 instanceof cljs.core.Keyword))?G__22745.fqn:null);
switch (G__22745__$1) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22741,else__9329__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Constrained{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22740){
var self__ = this;
var G__22740__$1 = this;
return (new cljs.core.RecordIter((0),G__22740__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22746 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22746(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22742,other22743){
var self__ = this;
var this22742__$1 = this;
return (!((other22743 == null))) && ((this22742__$1.constructor === other22743.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22742__$1.schema,other22743.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22742__$1.postcondition,other22743.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22742__$1.post_name,other22743.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22742__$1.__extmap,other22743.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22740){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22747 = cljs.core.keyword_identical_QMARK_;
var expr__22748 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22750 = cljs.core.cst$kw$schema;
var G__22751 = expr__22748;
return (pred__22747.cljs$core$IFn$_invoke$arity$2 ? pred__22747.cljs$core$IFn$_invoke$arity$2(G__22750,G__22751) : pred__22747.call(null,G__22750,G__22751));
})())){
return (new schema.core.Constrained(G__22740,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22752 = cljs.core.cst$kw$postcondition;
var G__22753 = expr__22748;
return (pred__22747.cljs$core$IFn$_invoke$arity$2 ? pred__22747.cljs$core$IFn$_invoke$arity$2(G__22752,G__22753) : pred__22747.call(null,G__22752,G__22753));
})())){
return (new schema.core.Constrained(self__.schema,G__22740,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22754 = cljs.core.cst$kw$post_DASH_name;
var G__22755 = expr__22748;
return (pred__22747.cljs$core$IFn$_invoke$arity$2 ? pred__22747.cljs$core$IFn$_invoke$arity$2(G__22754,G__22755) : pred__22747.call(null,G__22754,G__22755));
})())){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__22740,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22740),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22740){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__22740,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__22739_SHARP_){
var x__9592__auto__ = self__.post_name;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22739_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9592__auto____$1 = self__.post_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$constrained);
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__22744){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22744),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__22744),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__22744),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22744,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0))),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__22758 = arguments.length;
switch (G__22758) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22762,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22766 = k22762;
var G__22766__$1 = (((G__22766 instanceof cljs.core.Keyword))?G__22766.fqn:null);
switch (G__22766__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22762,else__9329__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__22767 = (function (){var or__8638__auto__ = tx;
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22767) : f.call(null,G__22767));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__22760_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__22760_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Both{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22761){
var self__ = this;
var G__22761__$1 = this;
return (new cljs.core.RecordIter((0),G__22761__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22768 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22768(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22763,other22764){
var self__ = this;
var this22763__$1 = this;
return (!((other22764 == null))) && ((this22763__$1.constructor === other22764.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22763__$1.schemas,other22764.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22763__$1.__extmap,other22764.__extmap));
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22761){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22769 = cljs.core.keyword_identical_QMARK_;
var expr__22770 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22772 = cljs.core.cst$kw$schemas;
var G__22773 = expr__22770;
return (pred__22769.cljs$core$IFn$_invoke$arity$2 ? pred__22769.cljs$core$IFn$_invoke$arity$2(G__22772,G__22773) : pred__22769.call(null,G__22772,G__22773));
})())){
return (new schema.core.Both(G__22761,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22761),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22761){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__22761,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__22765){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__22765),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22765,cljs.core.cst$kw$schemas)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__9922__auto__ = [];
var len__9915__auto___22776 = arguments.length;
var i__9916__auto___22777 = (0);
while(true){
if((i__9916__auto___22777 < len__9915__auto___22776)){
args__9922__auto__.push((arguments[i__9916__auto___22777]));

var G__22778 = (i__9916__auto___22777 + (1));
i__9916__auto___22777 = G__22778;
continue;
} else {
}
break;
}

var argseq__9923__auto__ = ((((0) < args__9922__auto__.length))?(new cljs.core.IndexedSeq(args__9922__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__9923__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq22775){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22775));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__22779 = cljs.core.meta(v);
var map__22779__$1 = ((((!((map__22779 == null)))?((((map__22779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22779):map__22779);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22782,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22786 = k22782;
var G__22786__$1 = (((G__22786 instanceof cljs.core.Keyword))?G__22786.fqn:null);
switch (G__22786__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22782,else__9329__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Recursive{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22781){
var self__ = this;
var G__22781__$1 = this;
return (new cljs.core.RecordIter((0),G__22781__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22787 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22787(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22783,other22784){
var self__ = this;
var this22783__$1 = this;
return (!((other22784 == null))) && ((this22783__$1.constructor === other22784.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22783__$1.derefable,other22784.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22783__$1.__extmap,other22784.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22781){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22788 = cljs.core.keyword_identical_QMARK_;
var expr__22789 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22791 = cljs.core.cst$kw$derefable;
var G__22792 = expr__22789;
return (pred__22788.cljs$core$IFn$_invoke$arity$2 ? pred__22788.cljs$core$IFn$_invoke$arity$2(G__22791,G__22792) : pred__22788.call(null,G__22791,G__22792));
})())){
return (new schema.core.Recursive(G__22781,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22781),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22781){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__22781,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,cljs.core.deref(self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = (((self__.derefable instanceof cljs.core.Var))?cljs.core._conj((function (){var x__9592__auto__ = schema.core.var_name(self__.derefable);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__22785){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__22785),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22785,cljs.core.cst$kw$derefable)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === schema__$1.cljs$core$IDeref$)))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IAtom$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22797,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22801 = k22797;
var G__22801__$1 = (((G__22801 instanceof cljs.core.Keyword))?G__22801.fqn:null);
switch (G__22801__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22797,else__9329__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Atomic{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22796){
var self__ = this;
var G__22796__$1 = this;
return (new cljs.core.RecordIter((0),G__22796__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22802 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22802(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22798,other22799){
var self__ = this;
var this22798__$1 = this;
return (!((other22799 == null))) && ((this22798__$1.constructor === other22799.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22798__$1.schema,other22799.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22798__$1.__extmap,other22799.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22796){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22803 = cljs.core.keyword_identical_QMARK_;
var expr__22804 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22806 = cljs.core.cst$kw$schema;
var G__22807 = expr__22804;
return (pred__22803.cljs$core$IFn$_invoke$arity$2 ? pred__22803.cljs$core$IFn$_invoke$arity$2(G__22806,G__22807) : pred__22803.call(null,G__22806,G__22807));
})())){
return (new schema.core.Atomic(G__22796,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22796),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22796){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__22796,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__22808_22810 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22808_22810) : item_fn.call(null,G__22808_22810));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$atom);
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__22800){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22800),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22800,cljs.core.cst$kw$schema)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22812,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22816 = k22812;
var G__22816__$1 = (((G__22816 instanceof cljs.core.Keyword))?G__22816.fqn:null);
switch (G__22816__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22812,else__9329__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.RequiredKey{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22811){
var self__ = this;
var G__22811__$1 = this;
return (new cljs.core.RecordIter((0),G__22811__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22817 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22817(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22813,other22814){
var self__ = this;
var this22813__$1 = this;
return (!((other22814 == null))) && ((this22813__$1.constructor === other22814.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22813__$1.k,other22814.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22813__$1.__extmap,other22814.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22811){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22818 = cljs.core.keyword_identical_QMARK_;
var expr__22819 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22821 = cljs.core.cst$kw$k;
var G__22822 = expr__22819;
return (pred__22818.cljs$core$IFn$_invoke$arity$2 ? pred__22818.cljs$core$IFn$_invoke$arity$2(G__22821,G__22822) : pred__22818.call(null,G__22821,G__22822));
})())){
return (new schema.core.RequiredKey(G__22811,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22811),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22811){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__22811,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__22815){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__22815),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22815,cljs.core.cst$kw$k)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22825,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22829 = k22825;
var G__22829__$1 = (((G__22829 instanceof cljs.core.Keyword))?G__22829.fqn:null);
switch (G__22829__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22825,else__9329__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.OptionalKey{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22824){
var self__ = this;
var G__22824__$1 = this;
return (new cljs.core.RecordIter((0),G__22824__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22830 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22830(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22826,other22827){
var self__ = this;
var this22826__$1 = this;
return (!((other22827 == null))) && ((this22826__$1.constructor === other22827.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22826__$1.k,other22827.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22826__$1.__extmap,other22827.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22824){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22831 = cljs.core.keyword_identical_QMARK_;
var expr__22832 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22834 = cljs.core.cst$kw$k;
var G__22835 = expr__22832;
return (pred__22831.cljs$core$IFn$_invoke$arity$2 ? pred__22831.cljs$core$IFn$_invoke$arity$2(G__22834,G__22835) : pred__22831.call(null,G__22834,G__22835));
})())){
return (new schema.core.OptionalKey(G__22824,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22824),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22824){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__22824,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__22828){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__22828),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22828,cljs.core.cst$kw$k)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__8638__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__22837){
var vec__22838 = p__22837;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22838,(1),null);
var coll = vec__22838;
return cljs.core.vec(coll);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22842,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22846 = k22842;
var G__22846__$1 = (((G__22846 instanceof cljs.core.Keyword))?G__22846.fqn:null);
switch (G__22846__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22842,else__9329__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.MapEntry{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22841){
var self__ = this;
var G__22841__$1 = this;
return (new cljs.core.RecordIter((0),G__22841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22847 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22847(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22843,other22844){
var self__ = this;
var this22843__$1 = this;
return (!((other22844 == null))) && ((this22843__$1.constructor === other22844.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22843__$1.key_schema,other22844.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22843__$1.val_schema,other22844.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22843__$1.__extmap,other22844.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22841){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22848 = cljs.core.keyword_identical_QMARK_;
var expr__22849 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22851 = cljs.core.cst$kw$key_DASH_schema;
var G__22852 = expr__22849;
return (pred__22848.cljs$core$IFn$_invoke$arity$2 ? pred__22848.cljs$core$IFn$_invoke$arity$2(G__22851,G__22852) : pred__22848.call(null,G__22851,G__22852));
})())){
return (new schema.core.MapEntry(G__22841,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22853 = cljs.core.cst$kw$val_DASH_schema;
var G__22854 = expr__22849;
return (pred__22848.cljs$core$IFn$_invoke$arity$2 ? pred__22848.cljs$core$IFn$_invoke$arity$2(G__22853,G__22854) : pred__22848.call(null,G__22853,G__22854));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__22841,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22841),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22841){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__22841,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__22855_22866 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22855_22866) : item_fn.call(null,G__22855_22866));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__22856_22867 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22856_22867) : item_fn.call(null,G__22856_22867));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__22857,p__22858,_){
var vec__22859 = p__22857;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859,(0),null);
var vec__22862 = p__22858;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,(1),null);
var temp__5288__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__5288__auto__)){
var k_err = temp__5288__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.key_schema);
return cljs.core._conj((function (){var x__9592__auto____$1 = schema.core.explain(self__.val_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__22845){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__22845),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__22845),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22845,cljs.core.cst$kw$key_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val_DASH_schema], 0))),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
var x__9592__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null));
return cljs.core._conj((function (){var x__9592__auto____$1 = schema.core.explicit_schema_key(kspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_22881 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__22868_SHARP_){
return (cljs.core.count(p1__22868_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_22881)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_22881], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9520__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__22869(s__22870){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__22870__$1 = s__22870;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22870__$1);
if(temp__5290__auto__){
var s__22870__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22870__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22870__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22872 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22871 = (0);
while(true){
if((i__22871 < size__9519__auto__)){
var vec__22873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22871);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22873,(1),null);
cljs.core.chunk_append(b__22872,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__22871,rk,required_QMARK_,vec__22873,k,v,c__9518__auto__,size__9519__auto__,b__22872,s__22870__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__22876_22882 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22876_22882) : item_fn.call(null,G__22876_22882));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__22871,rk,required_QMARK_,vec__22873,k,v,c__9518__auto__,size__9519__auto__,b__22872,s__22870__$2,temp__5290__auto__,extra_keys_schema))
);
})());

var G__22883 = (i__22871 + (1));
i__22871 = G__22883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22872),schema$core$map_elements_$_iter__22869(cljs.core.chunk_rest(s__22870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22872),null);
}
} else {
var vec__22877 = cljs.core.first(s__22870__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22877,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__22877,k,v,s__22870__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__22880_22884 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22880_22884) : item_fn.call(null,G__22880_22884));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__22877,k,v,s__22870__$2,temp__5290__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__22869(cljs.core.rest(s__22870__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__9520__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__9520__auto__ = (function schema$core$map_error_$_iter__22885(s__22886){
return (new cljs.core.LazySeq(null,(function (){
var s__22886__$1 = s__22886;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22886__$1);
if(temp__5290__auto__){
var s__22886__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22886__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22886__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22888 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22887 = (0);
while(true){
if((i__22887 < size__9519__auto__)){
var vec__22889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22887);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22889,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22889,(1),null);
cljs.core.chunk_append(b__22888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__22895 = (i__22887 + (1));
i__22887 = G__22895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22888),schema$core$map_error_$_iter__22885(cljs.core.chunk_rest(s__22886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22888),null);
}
} else {
var vec__22892 = cljs.core.first(s__22886__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22892,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__22885(cljs.core.rest(s__22886__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9520__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__22896_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__22896_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9520__auto__ = (function schema$core$map_explain_$_iter__22897(s__22898){
return (new cljs.core.LazySeq(null,(function (){
var s__22898__$1 = s__22898;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22898__$1);
if(temp__5290__auto__){
var s__22898__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22898__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22898__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22900 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22899 = (0);
while(true){
if((i__22899 < size__9519__auto__)){
var vec__22901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22899);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22901,(1),null);
cljs.core.chunk_append(b__22900,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__22907 = (i__22899 + (1));
i__22899 = G__22907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22900),schema$core$map_explain_$_iter__22897(cljs.core.chunk_rest(s__22898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22900),null);
}
} else {
var vec__22904 = cljs.core.first(s__22898__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22904,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22904,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__22897(cljs.core.rest(s__22898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9520__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22909,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22913 = k22909;
var G__22913__$1 = (((G__22913 instanceof cljs.core.Keyword))?G__22913.fqn:null);
switch (G__22913__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22909,else__9329__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Queue{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22908){
var self__ = this;
var G__22908__$1 = this;
return (new cljs.core.RecordIter((0),G__22908__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22914 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22914(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22910,other22911){
var self__ = this;
var this22910__$1 = this;
return (!((other22911 == null))) && ((this22910__$1.constructor === other22911.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22910__$1.schema,other22911.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22910__$1.__extmap,other22911.__extmap));
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22908){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22915 = cljs.core.keyword_identical_QMARK_;
var expr__22916 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22918 = cljs.core.cst$kw$schema;
var G__22919 = expr__22916;
return (pred__22915.cljs$core$IFn$_invoke$arity$2 ? pred__22915.cljs$core$IFn$_invoke$arity$2(G__22918,G__22919) : pred__22915.call(null,G__22918,G__22919));
})())){
return (new schema.core.Queue(G__22908,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22908),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22908){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__22908,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__22912){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22912),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22912,cljs.core.cst$kw$schema)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22922,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22926 = k22922;
var G__22926__$1 = (((G__22926 instanceof cljs.core.Keyword))?G__22926.fqn:null);
switch (G__22926__$1) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22922,else__9329__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.One{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22921){
var self__ = this;
var G__22921__$1 = this;
return (new cljs.core.RecordIter((0),G__22921__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22927 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22927(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22923,other22924){
var self__ = this;
var this22923__$1 = this;
return (!((other22924 == null))) && ((this22923__$1.constructor === other22924.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22923__$1.schema,other22924.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22923__$1.optional_QMARK_,other22924.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22923__$1.name,other22924.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22923__$1.__extmap,other22924.__extmap));
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22921){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22928 = cljs.core.keyword_identical_QMARK_;
var expr__22929 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22931 = cljs.core.cst$kw$schema;
var G__22932 = expr__22929;
return (pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(G__22931,G__22932) : pred__22928.call(null,G__22931,G__22932));
})())){
return (new schema.core.One(G__22921,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22933 = cljs.core.cst$kw$optional_QMARK_;
var G__22934 = expr__22929;
return (pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(G__22933,G__22934) : pred__22928.call(null,G__22933,G__22934));
})())){
return (new schema.core.One(self__.schema,G__22921,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22935 = cljs.core.cst$kw$name;
var G__22936 = expr__22929;
return (pred__22928.cljs$core$IFn$_invoke$arity$2 ? pred__22928.cljs$core$IFn$_invoke$arity$2(G__22935,G__22936) : pred__22928.call(null,G__22935,G__22936));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__22921,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22921),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22921){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__22921,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__22925){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22925),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22925),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__22925),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22925,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0))),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__22941 = cljs.core.split_with((function (p1__22938_SHARP_){
return ((p1__22938_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__22938_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941,(1),null);
var vec__22944 = cljs.core.split_with(((function (vec__22941,required,more){
return (function (p1__22939_SHARP_){
var and__8626__auto__ = (p1__22939_SHARP_ instanceof schema.core.One);
if(and__8626__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__22939_SHARP_);
} else {
return and__8626__auto__;
}
});})(vec__22941,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22944,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__22941,required,more,vec__22944,optional,more__$1){
return (function (p1__22940_SHARP_){
return !((p1__22940_SHARP_ instanceof schema.core.One));
});})(vec__22941,required,more,vec__22944,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22947_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = p1__22947_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__22948 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22948,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22948,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22948,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),((function (vec__22948,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5288__auto__ = cljs.core.seq(x);
if(temp__5288__auto__){
var x__$1 = temp__5288__auto__;
var G__22951_22961 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22951_22961) : item_fn.call(null,G__22951_22961));

return cljs.core.rest(x__$1);
} else {
var G__22952_22962 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__5288__auto__,vec__22948,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9592__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(temp__5288__auto__,vec__22948,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22952_22962) : item_fn.call(null,G__22952_22962));

return null;
}
});})(vec__22948,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),((function (vec__22948,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5290__auto__ = cljs.core.seq(x);
if(temp__5290__auto__){
var x__$1 = temp__5290__auto__;
var G__22953_22963 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__22953_22963) : item_fn.call(null,G__22953_22963));

return cljs.core.rest(x__$1);
} else {
return null;
}
});})(vec__22948,singles,multi,this$__$1))
,more)], null);
}
});})(vec__22948,singles,multi,this$__$1))
,(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9592__auto__ = cljs.core.count(extra);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__22954 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22954,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9520__auto__ = ((function (vec__22954,singles,multi,this$__$1){
return (function schema$core$iter__22957(s__22958){
return (new cljs.core.LazySeq(null,((function (vec__22954,singles,multi,this$__$1){
return (function (){
var s__22958__$1 = s__22958;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__22958__$1);
if(temp__5290__auto__){
var s__22958__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22958__$2)){
var c__9518__auto__ = cljs.core.chunk_first(s__22958__$2);
var size__9519__auto__ = cljs.core.count(c__9518__auto__);
var b__22960 = cljs.core.chunk_buffer(size__9519__auto__);
if((function (){var i__22959 = (0);
while(true){
if((i__22959 < size__9519__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9518__auto__,i__22959);
cljs.core.chunk_append(b__22960,(function (){var x__9592__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9592__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9592__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$2);
})(),x__9592__auto____$1);
})(),x__9592__auto__);
})());

var G__22964 = (i__22959 + (1));
i__22959 = G__22964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22960),schema$core$iter__22957(cljs.core.chunk_rest(s__22958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22960),null);
}
} else {
var s = cljs.core.first(s__22958__$2);
return cljs.core.cons((function (){var x__9592__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9592__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9592__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$2);
})(),x__9592__auto____$1);
})(),x__9592__auto__);
})(),schema$core$iter__22957(cljs.core.rest(s__22958__$2)));
}
} else {
return null;
}
break;
}
});})(vec__22954,singles,multi,this$__$1))
,null,null));
});})(vec__22954,singles,multi,this$__$1))
;
return iter__9520__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22969,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22973 = k22969;
var G__22973__$1 = (((G__22973 instanceof cljs.core.Keyword))?G__22973.fqn:null);
switch (G__22973__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22969,else__9329__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.Record{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22968){
var self__ = this;
var G__22968__$1 = this;
return (new cljs.core.RecordIter((0),G__22968__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22974 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22974(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22970,other22971){
var self__ = this;
var this22970__$1 = this;
return (!((other22971 == null))) && ((this22970__$1.constructor === other22971.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22970__$1.klass,other22971.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22970__$1.schema,other22971.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22970__$1.__extmap,other22971.__extmap));
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22968){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22975 = cljs.core.keyword_identical_QMARK_;
var expr__22976 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22978 = cljs.core.cst$kw$klass;
var G__22979 = expr__22976;
return (pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(G__22978,G__22979) : pred__22975.call(null,G__22978,G__22979));
})())){
return (new schema.core.Record(G__22968,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22980 = cljs.core.cst$kw$schema;
var G__22981 = expr__22976;
return (pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(G__22980,G__22981) : pred__22975.call(null,G__22980,G__22981));
})())){
return (new schema.core.Record(self__.klass,G__22968,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22968),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22968){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__22968,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__22965_SHARP_){
return (p1__22965_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__22966_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = self__.klass;
return cljs.core._conj((function (){var x__9592__auto____$1 = p1__22966_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__5288__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var evf = temp__5288__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__5288__auto__,p,this$__$1){
return (function (p1__22967_SHARP_){
return cljs.core._conj((function (){var x__9592__auto__ = p1__22967_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__5288__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9592__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0)));
return cljs.core._conj((function (){var x__9592__auto____$1 = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto____$1);
})(),x__9592__auto__);
})(),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__22972){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__22972),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__22972),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22972,cljs.core.cst$kw$klass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema], 0))),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__22985 = cljs.core.split_with((function (p1__22983_SHARP_){
return (p1__22983_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22985,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22985,required,more){
return (function (p1__22984_SHARP_){
return schema.core.explain(p1__22984_SHARP_.schema);
});})(vec__22985,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9326__auto__,k__9327__auto__){
var self__ = this;
var this__9326__auto____$1 = this;
return this__9326__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9327__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9328__auto__,k22989,else__9329__auto__){
var self__ = this;
var this__9328__auto____$1 = this;
var G__22993 = k22989;
var G__22993__$1 = (((G__22993 instanceof cljs.core.Keyword))?G__22993.fqn:null);
switch (G__22993__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22989,else__9329__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9340__auto__,writer__9341__auto__,opts__9342__auto__){
var self__ = this;
var this__9340__auto____$1 = this;
var pr_pair__9343__auto__ = ((function (this__9340__auto____$1){
return (function (keyval__9344__auto__){
return cljs.core.pr_sequential_writer(writer__9341__auto__,cljs.core.pr_writer,""," ","",opts__9342__auto__,keyval__9344__auto__);
});})(this__9340__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9341__auto__,pr_pair__9343__auto__,"#schema.core.FnSchema{",", ","}",opts__9342__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22988){
var self__ = this;
var G__22988__$1 = this;
return (new cljs.core.RecordIter((0),G__22988__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9324__auto__){
var self__ = this;
var this__9324__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9321__auto__){
var self__ = this;
var this__9321__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9330__auto__){
var self__ = this;
var this__9330__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9322__auto__){
var self__ = this;
var this__9322__auto____$1 = this;
var h__9094__auto__ = self__.__hash;
if(!((h__9094__auto__ == null))){
return h__9094__auto__;
} else {
var h__9094__auto____$1 = (function (){var fexpr__22994 = ((function (h__9094__auto__,this__9322__auto____$1){
return (function (coll__9323__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__9323__auto__));
});})(h__9094__auto__,this__9322__auto____$1))
;
return fexpr__22994(this__9322__auto____$1);
})();
self__.__hash = h__9094__auto____$1;

return h__9094__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22990,other22991){
var self__ = this;
var this22990__$1 = this;
return (!((other22991 == null))) && ((this22990__$1.constructor === other22991.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22990__$1.output_schema,other22991.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22990__$1.input_schemas,other22991.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22990__$1.__extmap,other22991.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9335__auto__,k__9336__auto__){
var self__ = this;
var this__9335__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__9336__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9335__auto____$1),self__.__meta),k__9336__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9336__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9333__auto__,k__9334__auto__,G__22988){
var self__ = this;
var this__9333__auto____$1 = this;
var pred__22995 = cljs.core.keyword_identical_QMARK_;
var expr__22996 = k__9334__auto__;
if(cljs.core.truth_((function (){var G__22998 = cljs.core.cst$kw$output_DASH_schema;
var G__22999 = expr__22996;
return (pred__22995.cljs$core$IFn$_invoke$arity$2 ? pred__22995.cljs$core$IFn$_invoke$arity$2(G__22998,G__22999) : pred__22995.call(null,G__22998,G__22999));
})())){
return (new schema.core.FnSchema(G__22988,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23000 = cljs.core.cst$kw$input_DASH_schemas;
var G__23001 = expr__22996;
return (pred__22995.cljs$core$IFn$_invoke$arity$2 ? pred__22995.cljs$core$IFn$_invoke$arity$2(G__23000,G__23001) : pred__22995.call(null,G__23000,G__23001));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__22988,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9334__auto__,G__22988),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9338__auto__){
var self__ = this;
var this__9338__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9325__auto__,G__22988){
var self__ = this;
var this__9325__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__22988,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9331__auto__,entry__9332__auto__){
var self__ = this;
var this__9331__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9332__auto__)){
return this__9331__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9332__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9331__auto____$1,entry__9332__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__20992__20993__auto__){
return cljs.core._conj((function (){var x__9592__auto__ = p1__20992__20993__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9592__auto__);
})(),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__9364__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__9364__auto__,writer__9365__auto__){
return cljs.core._write(writer__9365__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__22992){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__22992),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__22992),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22992,cljs.core.cst$kw$output_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_schemas], 0))),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return cljs.core.deref(schema.utils.use_fn_validation);
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return cljs.core.reset_BANG_(schema.utils.use_fn_validation,on_QMARK_);
});
/**
 * A var that can be rebound to a function to customize the behavior
 *   of fn validation. When fn validation is on and `fn-validator` is
 *   bound to a function, normal argument and return value checks will
 *   be substituted with a call to this function with five arguments:
 * 
 *  direction   - :input or :output
 *  fn-name     - a symbol, the function's name
 *  schema      - the schema for the arglist or the return value
 *  checker     - a precompiled checker to check a value against
 *                the schema
 *  value       - the actual arglist or return value
 * 
 *   The function's return value will be ignored.
 */
schema.core.fn_validator = null;
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(f)], 0))));
}

var or__8638__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__8638__auto__)){
return or__8638__auto__;
} else {
var m__20669__auto__ = cljs.core.meta(f);
var k__20670__auto__ = cljs.core.cst$kw$schema;
var temp__5288__auto__ = cljs.core.find(m__20669__auto__,k__20670__auto__);
if(cljs.core.truth_(temp__5288__auto__)){
var pair__20671__auto__ = temp__5288__auto__;
return cljs.core.val(pair__20671__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__20670__auto__,m__20669__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
