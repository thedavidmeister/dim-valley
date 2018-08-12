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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (schema.core.spec[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto__.call(null,this$));
} else {
var m__8976__auto____$1 = (schema.core.spec["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto____$1.call(null,this$));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (schema.core.explain[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto__.call(null,this$));
} else {
var m__8976__auto____$1 = (schema.core.explain["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto____$1.call(null,this$));
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
var fexpr__23198 = schema.core.checker(schema__$1);
return (fexpr__23198.cljs$core$IFn$_invoke$arity$1 ? fexpr__23198.cljs$core$IFn$_invoke$arity$1(x) : fexpr__23198.call(null,x));
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__5290__auto___23199 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__5290__auto___23199)){
var error_23200 = temp__5290__auto___23199;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_23200], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_23200], null));
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
var fexpr__23201 = schema.core.validator(schema__$1);
return (fexpr__23201.cljs$core$IFn$_invoke$arity$1 ? fexpr__23201.cljs$core$IFn$_invoke$arity$1(value) : fexpr__23201.call(null,value));
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__23202_SHARP_){
var and__8230__auto__ = !((p1__23202_SHARP_ == null));
if(and__8230__auto__){
var or__8242__auto__ = (klass === p1__23202_SHARP_.constructor);
if(or__8242__auto__){
return or__8242__auto__;
} else {
return p1__23202_SHARP_ instanceof klass;
}
} else {
return and__8230__auto__;
}
}),(function (p1__23203_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = klass;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23203_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
}));
});
goog.object.set(schema.core.Schema,"function",true);

var G__23204_23213 = schema.core.spec;
var G__23205_23214 = "function";
var G__23206_23215 = ((function (G__23204_23213,G__23205_23214){
return (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var class_schema = temp__5288__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
});})(G__23204_23213,G__23205_23214))
;
goog.object.set(G__23204_23213,G__23205_23214,G__23206_23215);

var G__23207_23216 = schema.core.explain;
var G__23208_23217 = "function";
var G__23209_23218 = ((function (G__23207_23216,G__23208_23217){
return (function (this$){
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var more_schema = temp__5288__auto__;
return schema.core.explain(more_schema);
} else {
var pred__23210 = cljs.core._EQ_;
var expr__23211 = this$;
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(null,expr__23211) : pred__23210.call(null,null,expr__23211)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(Boolean,expr__23211) : pred__23210.call(null,Boolean,expr__23211)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(Number,expr__23211) : pred__23210.call(null,Number,expr__23211)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(null,expr__23211) : pred__23210.call(null,null,expr__23211)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(Date,expr__23211) : pred__23210.call(null,Date,expr__23211)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__23210.cljs$core$IFn$_invoke$arity$2 ? pred__23210.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__23211) : pred__23210.call(null,cljs.core.UUID,expr__23211)))){
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
});})(G__23207_23216,G__23208_23217))
;
goog.object.set(G__23207_23216,G__23208_23217,G__23209_23218);

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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23220,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23224 = k23220;
var G__23224__$1 = (((G__23224 instanceof cljs.core.Keyword))?G__23224.fqn:null);
switch (G__23224__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23220,else__8933__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.AnythingSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23219){
var self__ = this;
var G__23219__$1 = this;
return (new cljs.core.RecordIter((0),G__23219__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23225 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23225(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23221,other23222){
var self__ = this;
var this23221__$1 = this;
return (!((other23222 == null))) && ((this23221__$1.constructor === other23222.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23221__$1._,other23222._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23221__$1.__extmap,other23222.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23219){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23226 = cljs.core.keyword_identical_QMARK_;
var expr__23227 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23229 = cljs.core.cst$kw$_;
var G__23230 = expr__23227;
return (pred__23226.cljs$core$IFn$_invoke$arity$2 ? pred__23226.cljs$core$IFn$_invoke$arity$2(G__23229,G__23230) : pred__23226.call(null,G__23229,G__23230));
})())){
return (new schema.core.AnythingSchema(G__23219,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23219),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23219){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__23219,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
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

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__23223){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__23223),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23223,cljs.core.cst$kw$_)),null));
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23235,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23239 = k23235;
var G__23239__$1 = (((G__23239 instanceof cljs.core.Keyword))?G__23239.fqn:null);
switch (G__23239__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23235,else__8933__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.EqSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23234){
var self__ = this;
var G__23234__$1 = this;
return (new cljs.core.RecordIter((0),G__23234__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23240 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23240(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23236,other23237){
var self__ = this;
var this23236__$1 = this;
return (!((other23237 == null))) && ((this23236__$1.constructor === other23237.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23236__$1.v,other23237.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23236__$1.__extmap,other23237.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23234){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23241 = cljs.core.keyword_identical_QMARK_;
var expr__23242 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23244 = cljs.core.cst$kw$v;
var G__23245 = expr__23242;
return (pred__23241.cljs$core$IFn$_invoke$arity$2 ? pred__23241.cljs$core$IFn$_invoke$arity$2(G__23244,G__23245) : pred__23241.call(null,G__23244,G__23245));
})())){
return (new schema.core.EqSchema(G__23234,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23234),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23234){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__23234,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23232_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__23232_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23233_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = self__.v;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23233_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9196__auto__ = self__.v;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__23238){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__23238),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23238,cljs.core.cst$kw$v)),null));
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
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23250,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23254 = k23250;
var G__23254__$1 = (((G__23254 instanceof cljs.core.Keyword))?G__23254.fqn:null);
switch (G__23254__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23250,else__8933__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Isa{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23249){
var self__ = this;
var G__23249__$1 = this;
return (new cljs.core.RecordIter((0),G__23249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23255 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23255(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23251,other23252){
var self__ = this;
var this23251__$1 = this;
return (!((other23252 == null))) && ((this23251__$1.constructor === other23252.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23251__$1.h,other23252.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23251__$1.parent,other23252.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23251__$1.__extmap,other23252.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23249){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23256 = cljs.core.keyword_identical_QMARK_;
var expr__23257 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23259 = cljs.core.cst$kw$h;
var G__23260 = expr__23257;
return (pred__23256.cljs$core$IFn$_invoke$arity$2 ? pred__23256.cljs$core$IFn$_invoke$arity$2(G__23259,G__23260) : pred__23256.call(null,G__23259,G__23260));
})())){
return (new schema.core.Isa(G__23249,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23261 = cljs.core.cst$kw$parent;
var G__23262 = expr__23257;
return (pred__23256.cljs$core$IFn$_invoke$arity$2 ? pred__23256.cljs$core$IFn$_invoke$arity$2(G__23261,G__23262) : pred__23256.call(null,G__23261,G__23262));
})())){
return (new schema.core.Isa(self__.h,G__23249,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23249),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23249){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__23249,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23247_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__23247_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__23247_SHARP_,self__.parent);
}
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23248_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23248_SHARP_;
return cljs.core._conj((function (){var x__9196__auto____$1 = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9196__auto__ = self__.parent;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__23253){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__23253),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__23253),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23253,cljs.core.cst$kw$h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent], 0))),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__23265 = arguments.length;
switch (G__23265) {
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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23270,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23274 = k23270;
var G__23274__$1 = (((G__23274 instanceof cljs.core.Keyword))?G__23274.fqn:null);
switch (G__23274__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23270,else__8933__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.EnumSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23269){
var self__ = this;
var G__23269__$1 = this;
return (new cljs.core.RecordIter((0),G__23269__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23275 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23275(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23271,other23272){
var self__ = this;
var this23271__$1 = this;
return (!((other23272 == null))) && ((this23271__$1.constructor === other23272.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23271__$1.vs,other23272.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23271__$1.__extmap,other23272.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23269){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23276 = cljs.core.keyword_identical_QMARK_;
var expr__23277 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23279 = cljs.core.cst$kw$vs;
var G__23280 = expr__23277;
return (pred__23276.cljs$core$IFn$_invoke$arity$2 ? pred__23276.cljs$core$IFn$_invoke$arity$2(G__23279,G__23280) : pred__23276.call(null,G__23279,G__23280));
})())){
return (new schema.core.EnumSchema(G__23269,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23269),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23269){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__23269,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23267_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__23267_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23268_SHARP_){
var x__9196__auto__ = self__.vs;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23268_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
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

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__23273){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__23273),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23273,cljs.core.cst$kw$vs)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__9526__auto__ = [];
var len__9519__auto___23283 = arguments.length;
var i__9520__auto___23284 = (0);
while(true){
if((i__9520__auto___23284 < len__9519__auto___23283)){
args__9526__auto__.push((arguments[i__9520__auto___23284]));

var G__23285 = (i__9520__auto___23284 + (1));
i__9520__auto___23284 = G__23285;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq23282){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23282));
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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23288,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23292 = k23288;
var G__23292__$1 = (((G__23292 instanceof cljs.core.Keyword))?G__23292.fqn:null);
switch (G__23292__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23288,else__8933__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Predicate{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23287){
var self__ = this;
var G__23287__$1 = this;
return (new cljs.core.RecordIter((0),G__23287__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23293 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23293(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23289,other23290){
var self__ = this;
var this23289__$1 = this;
return (!((other23290 == null))) && ((this23289__$1.constructor === other23290.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23289__$1.p_QMARK_,other23290.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23289__$1.pred_name,other23290.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23289__$1.__extmap,other23290.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23287){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23294 = cljs.core.keyword_identical_QMARK_;
var expr__23295 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23297 = cljs.core.cst$kw$p_QMARK_;
var G__23298 = expr__23295;
return (pred__23294.cljs$core$IFn$_invoke$arity$2 ? pred__23294.cljs$core$IFn$_invoke$arity$2(G__23297,G__23298) : pred__23294.call(null,G__23297,G__23298));
})())){
return (new schema.core.Predicate(G__23287,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23299 = cljs.core.cst$kw$pred_DASH_name;
var G__23300 = expr__23295;
return (pred__23294.cljs$core$IFn$_invoke$arity$2 ? pred__23294.cljs$core$IFn$_invoke$arity$2(G__23299,G__23300) : pred__23294.call(null,G__23299,G__23300));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__23287,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23287),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23287){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__23287,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__23286_SHARP_){
var x__9196__auto__ = self__.pred_name;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23286_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
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
return cljs.core._conj((function (){var x__9196__auto__ = self__.pred_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__23291){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23291),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__23291),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23291,cljs.core.cst$kw$p_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_DASH_name], 0))),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__23303 = arguments.length;
switch (G__23303) {
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23308,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23312 = k23308;
var G__23312__$1 = (((G__23312 instanceof cljs.core.Keyword))?G__23312.fqn:null);
switch (G__23312__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23308,else__8933__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Protocol{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23307){
var self__ = this;
var G__23307__$1 = this;
return (new cljs.core.RecordIter((0),G__23307__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23313 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23313(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23309,other23310){
var self__ = this;
var this23309__$1 = this;
return (!((other23310 == null))) && ((this23309__$1.constructor === other23310.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23309__$1.p,other23310.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23309__$1.__extmap,other23310.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23307){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23314 = cljs.core.keyword_identical_QMARK_;
var expr__23315 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23317 = cljs.core.cst$kw$p;
var G__23318 = expr__23315;
return (pred__23314.cljs$core$IFn$_invoke$arity$2 ? pred__23314.cljs$core$IFn$_invoke$arity$2(G__23317,G__23318) : pred__23314.call(null,G__23317,G__23318));
})())){
return (new schema.core.Protocol(G__23307,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23307),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23307){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__23307,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23305_SHARP_){
var fexpr__23319 = cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__23319.cljs$core$IFn$_invoke$arity$1 ? fexpr__23319.cljs$core$IFn$_invoke$arity$1(p1__23305_SHARP_) : fexpr__23319.call(null,p1__23305_SHARP_));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23306_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23306_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__23311){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__23311),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23311,cljs.core.cst$kw$p)),null));
});

RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23321_SHARP_){
return cljs.core.re_find(this$__$1,p1__23321_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23322_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(this$__$1);
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23322_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
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
if(typeof schema.core.t_schema$core23325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core23325 = (function (meta23326){
this.meta23326 = meta23326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.core.t_schema$core23325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23327,meta23326__$1){
var self__ = this;
var _23327__$1 = this;
return (new schema.core.t_schema$core23325(meta23326__$1));
});

schema.core.t_schema$core23325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23327){
var self__ = this;
var _23327__$1 = this;
return self__.meta23326;
});

schema.core.t_schema$core23325.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.t_schema$core23325.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23323_SHARP_){
return (p1__23323_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23324_SHARP_){
return cljs.core._conj(cljs.core._conj((function (){var x__9196__auto__ = p1__23324_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core23325.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core23325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta23326], null);
});

schema.core.t_schema$core23325.cljs$lang$type = true;

schema.core.t_schema$core23325.cljs$lang$ctorStr = "schema.core/t_schema$core23325";

schema.core.t_schema$core23325.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"schema.core/t_schema$core23325");
});

schema.core.__GT_t_schema$core23325 = (function schema$core$__GT_t_schema$core23325(meta23326){
return (new schema.core.t_schema$core23325(meta23326));
});

}

return (new schema.core.t_schema$core23325(cljs.core.PersistentArrayMap.EMPTY));
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23329,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23333 = k23329;
var G__23333__$1 = (((G__23333 instanceof cljs.core.Keyword))?G__23333.fqn:null);
switch (G__23333__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23329,else__8933__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Maybe{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23328){
var self__ = this;
var G__23328__$1 = this;
return (new cljs.core.RecordIter((0),G__23328__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23334 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23334(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23330,other23331){
var self__ = this;
var this23330__$1 = this;
return (!((other23331 == null))) && ((this23330__$1.constructor === other23331.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23330__$1.schema,other23331.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23330__$1.__extmap,other23331.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23328){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23335 = cljs.core.keyword_identical_QMARK_;
var expr__23336 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23338 = cljs.core.cst$kw$schema;
var G__23339 = expr__23336;
return (pred__23335.cljs$core$IFn$_invoke$arity$2 ? pred__23335.cljs$core$IFn$_invoke$arity$2(G__23338,G__23339) : pred__23335.call(null,G__23338,G__23339));
})())){
return (new schema.core.Maybe(G__23328,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23328),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23328){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__23328,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
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
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__23332){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23332),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23332,cljs.core.cst$kw$schema)),null));
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23343,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23347 = k23343;
var G__23347__$1 = (((G__23347 instanceof cljs.core.Keyword))?G__23347.fqn:null);
switch (G__23347__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23343,else__8933__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.NamedSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23342){
var self__ = this;
var G__23342__$1 = this;
return (new cljs.core.RecordIter((0),G__23342__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23348 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23348(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23344,other23345){
var self__ = this;
var this23344__$1 = this;
return (!((other23345 == null))) && ((this23344__$1.constructor === other23345.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23344__$1.schema,other23345.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23344__$1.name,other23345.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23344__$1.__extmap,other23345.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23342){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23349 = cljs.core.keyword_identical_QMARK_;
var expr__23350 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23352 = cljs.core.cst$kw$schema;
var G__23353 = expr__23350;
return (pred__23349.cljs$core$IFn$_invoke$arity$2 ? pred__23349.cljs$core$IFn$_invoke$arity$2(G__23352,G__23353) : pred__23349.call(null,G__23352,G__23353));
})())){
return (new schema.core.NamedSchema(G__23342,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23354 = cljs.core.cst$kw$name;
var G__23355 = expr__23350;
return (pred__23349.cljs$core$IFn$_invoke$arity$2 ? pred__23349.cljs$core$IFn$_invoke$arity$2(G__23354,G__23355) : pred__23349.call(null,G__23354,G__23355));
})())){
return (new schema.core.NamedSchema(self__.schema,G__23342,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23342),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23342){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__23342,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__23341_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__23341_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9196__auto____$1 = self__.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__23346){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23346),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23346),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23346,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name], 0))),null));
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23359,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23363 = k23359;
var G__23363__$1 = (((G__23363 instanceof cljs.core.Keyword))?G__23363.fqn:null);
switch (G__23363__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23359,else__8933__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Either{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23358){
var self__ = this;
var G__23358__$1 = this;
return (new cljs.core.RecordIter((0),G__23358__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23364 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23364(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23360,other23361){
var self__ = this;
var this23360__$1 = this;
return (!((other23361 == null))) && ((this23360__$1.constructor === other23361.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.schemas,other23361.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.__extmap,other23361.__extmap));
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23358){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23365 = cljs.core.keyword_identical_QMARK_;
var expr__23366 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23368 = cljs.core.cst$kw$schemas;
var G__23369 = expr__23366;
return (pred__23365.cljs$core$IFn$_invoke$arity$2 ? pred__23365.cljs$core$IFn$_invoke$arity$2(G__23368,G__23369) : pred__23365.call(null,G__23368,G__23369));
})())){
return (new schema.core.Either(G__23358,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23358),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23358){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__23358,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9124__auto__ = ((function (this$__$1){
return (function schema$core$iter__23370(s__23371){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23371__$1 = s__23371;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23371__$1);
if(temp__5290__auto__){
var s__23371__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23371__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23371__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23373 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23372 = (0);
while(true){
if((i__23372 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23372);
cljs.core.chunk_append(b__23373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__23375 = (i__23372 + (1));
i__23372 = G__23375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23373),schema$core$iter__23370(cljs.core.chunk_rest(s__23371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23373),null);
}
} else {
var s = cljs.core.first(s__23371__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__23370(cljs.core.rest(s__23371__$2)));
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
return iter__9124__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__23357_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23357_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__23362){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23362),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23362,cljs.core.cst$kw$schemas)),null));
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
var args__9526__auto__ = [];
var len__9519__auto___23377 = arguments.length;
var i__9520__auto___23378 = (0);
while(true){
if((i__9520__auto___23378 < len__9519__auto___23377)){
args__9526__auto__.push((arguments[i__9520__auto___23378]));

var G__23379 = (i__9520__auto___23378 + (1));
i__9520__auto___23378 = G__23379;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq23376){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23376));
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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23382,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23386 = k23382;
var G__23386__$1 = (((G__23386 instanceof cljs.core.Keyword))?G__23386.fqn:null);
switch (G__23386__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23382,else__8933__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23381){
var self__ = this;
var G__23381__$1 = this;
return (new cljs.core.RecordIter((0),G__23381__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23387 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23387(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23383,other23384){
var self__ = this;
var this23383__$1 = this;
return (!((other23384 == null))) && ((this23383__$1.constructor === other23384.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23383__$1.preds_and_schemas,other23384.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23383__$1.error_symbol,other23384.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23383__$1.__extmap,other23384.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23381){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23388 = cljs.core.keyword_identical_QMARK_;
var expr__23389 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23391 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__23392 = expr__23389;
return (pred__23388.cljs$core$IFn$_invoke$arity$2 ? pred__23388.cljs$core$IFn$_invoke$arity$2(G__23391,G__23392) : pred__23388.call(null,G__23391,G__23392));
})())){
return (new schema.core.ConditionalSchema(G__23381,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23393 = cljs.core.cst$kw$error_DASH_symbol;
var G__23394 = expr__23389;
return (pred__23388.cljs$core$IFn$_invoke$arity$2 ? pred__23388.cljs$core$IFn$_invoke$arity$2(G__23393,G__23394) : pred__23388.call(null,G__23393,G__23394));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__23381,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23381),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23381){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__23381,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9124__auto__ = ((function (this$__$1){
return (function schema$core$iter__23395(s__23396){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23396__$1 = s__23396;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23396__$1);
if(temp__5290__auto__){
var s__23396__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23396__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23396__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23398 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23397 = (0);
while(true){
if((i__23397 < size__9123__auto__)){
var vec__23399 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23397);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23399,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23399,(1),null);
cljs.core.chunk_append(b__23398,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__23410 = (i__23397 + (1));
i__23397 = G__23410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23398),schema$core$iter__23395(cljs.core.chunk_rest(s__23396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23398),null);
}
} else {
var vec__23402 = cljs.core.first(s__23396__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23402,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__23395(cljs.core.rest(s__23396__$2)));
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
return iter__9124__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__23380_SHARP_){
var x__9196__auto__ = (function (){var or__8242__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})();
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23380_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__23405){
var vec__23406 = p__23405;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__23385){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__23385),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__23385),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23385,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_symbol], 0))),null));
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
var args__9526__auto__ = [];
var len__9519__auto___23422 = arguments.length;
var i__9520__auto___23423 = (0);
while(true){
if((i__9520__auto___23423 < len__9519__auto___23422)){
args__9526__auto__.push((arguments[i__9520__auto___23423]));

var G__23424 = (i__9520__auto___23423 + (1));
i__9520__auto___23423 = G__23424;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__9124__auto__ = (function schema$core$iter__23412(s__23413){
return (new cljs.core.LazySeq(null,(function (){
var s__23413__$1 = s__23413;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23413__$1);
if(temp__5290__auto__){
var s__23413__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23413__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23413__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23415 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23414 = (0);
while(true){
if((i__23414 < size__9123__auto__)){
var vec__23416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23414);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23416,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23416,(1),null);
cljs.core.chunk_append(b__23415,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__23425 = (i__23414 + (1));
i__23414 = G__23425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23415),schema$core$iter__23412(cljs.core.chunk_rest(s__23413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23415),null);
}
} else {
var vec__23419 = cljs.core.first(s__23413__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23419,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23419,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__23412(cljs.core.rest(s__23413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})()),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq23411){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23411));
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
var x__8975__auto__ = (((this$ == null))?null:this$);
var m__8976__auto__ = (schema.core.precondition[goog.typeOf(x__8975__auto__)]);
if(!((m__8976__auto__ == null))){
return (m__8976__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto__.call(null,this$));
} else {
var m__8976__auto____$1 = (schema.core.precondition["_"]);
if(!((m__8976__auto____$1 == null))){
return (m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8976__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8976__auto____$1.call(null,this$));
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
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__9124__auto__ = ((function (this$__$1){
return (function schema$core$iter__23426(s__23427){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23427__$1 = s__23427;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23427__$1);
if(temp__5290__auto__){
var s__23427__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23427__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23427__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23429 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23428 = (0);
while(true){
if((i__23428 < size__9123__auto__)){
var map__23430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23428);
var map__23430__$1 = ((((!((map__23430 == null)))?((((map__23430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23430):map__23430);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__23429,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__23434 = (i__23428 + (1));
i__23428 = G__23434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23429),schema$core$iter__23426(cljs.core.chunk_rest(s__23427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23429),null);
}
} else {
var map__23432 = cljs.core.first(s__23427__$2);
var map__23432__$1 = ((((!((map__23432 == null)))?((((map__23432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23432):map__23432);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__23426(cljs.core.rest(s__23427__$2)));
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
return iter__9124__auto__(this$__$1.options);
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
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23437,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23441 = k23437;
var G__23441__$1 = (((G__23441 instanceof cljs.core.Keyword))?G__23441.fqn:null);
switch (G__23441__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23437,else__8933__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.CondPre{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23436){
var self__ = this;
var G__23436__$1 = this;
return (new cljs.core.RecordIter((0),G__23436__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23442 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23442(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23438,other23439){
var self__ = this;
var this23438__$1 = this;
return (!((other23439 == null))) && ((this23438__$1.constructor === other23439.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23438__$1.schemas,other23439.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23438__$1.__extmap,other23439.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23436){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23443 = cljs.core.keyword_identical_QMARK_;
var expr__23444 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23446 = cljs.core.cst$kw$schemas;
var G__23447 = expr__23444;
return (pred__23443.cljs$core$IFn$_invoke$arity$2 ? pred__23443.cljs$core$IFn$_invoke$arity$2(G__23446,G__23447) : pred__23443.call(null,G__23446,G__23447));
})())){
return (new schema.core.CondPre(G__23436,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23436),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23436){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__23436,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__9124__auto__ = ((function (this$__$1){
return (function schema$core$iter__23448(s__23449){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23449__$1 = s__23449;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23449__$1);
if(temp__5290__auto__){
var s__23449__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23449__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23449__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23451 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23450 = (0);
while(true){
if((i__23450 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23450);
cljs.core.chunk_append(b__23451,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__23453 = (i__23450 + (1));
i__23450 = G__23453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23451),schema$core$iter__23448(cljs.core.chunk_rest(s__23449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23451),null);
}
} else {
var s = cljs.core.first(s__23449__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__23448(cljs.core.rest(s__23449__$2)));
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
return iter__9124__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__23435_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23435_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__23440){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23440),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23440,cljs.core.cst$kw$schemas)),null));
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
var args__9526__auto__ = [];
var len__9519__auto___23455 = arguments.length;
var i__9520__auto___23456 = (0);
while(true){
if((i__9520__auto___23456 < len__9519__auto___23455)){
args__9526__auto__.push((arguments[i__9520__auto___23456]));

var G__23457 = (i__9520__auto___23456 + (1));
i__9520__auto___23456 = G__23457;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq23454){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23454));
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
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23460,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23464 = k23460;
var G__23464__$1 = (((G__23464 instanceof cljs.core.Keyword))?G__23464.fqn:null);
switch (G__23464__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23460,else__8933__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Constrained{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23459){
var self__ = this;
var G__23459__$1 = this;
return (new cljs.core.RecordIter((0),G__23459__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23465 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23465(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23461,other23462){
var self__ = this;
var this23461__$1 = this;
return (!((other23462 == null))) && ((this23461__$1.constructor === other23462.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23461__$1.schema,other23462.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23461__$1.postcondition,other23462.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23461__$1.post_name,other23462.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23461__$1.__extmap,other23462.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23459){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23466 = cljs.core.keyword_identical_QMARK_;
var expr__23467 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23469 = cljs.core.cst$kw$schema;
var G__23470 = expr__23467;
return (pred__23466.cljs$core$IFn$_invoke$arity$2 ? pred__23466.cljs$core$IFn$_invoke$arity$2(G__23469,G__23470) : pred__23466.call(null,G__23469,G__23470));
})())){
return (new schema.core.Constrained(G__23459,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23471 = cljs.core.cst$kw$postcondition;
var G__23472 = expr__23467;
return (pred__23466.cljs$core$IFn$_invoke$arity$2 ? pred__23466.cljs$core$IFn$_invoke$arity$2(G__23471,G__23472) : pred__23466.call(null,G__23471,G__23472));
})())){
return (new schema.core.Constrained(self__.schema,G__23459,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23473 = cljs.core.cst$kw$post_DASH_name;
var G__23474 = expr__23467;
return (pred__23466.cljs$core$IFn$_invoke$arity$2 ? pred__23466.cljs$core$IFn$_invoke$arity$2(G__23473,G__23474) : pred__23466.call(null,G__23473,G__23474));
})())){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__23459,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23459),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23459){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__23459,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__23458_SHARP_){
var x__9196__auto__ = self__.post_name;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23458_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj((function (){var x__9196__auto____$1 = self__.post_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$constrained);
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__23463){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23463),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__23463),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__23463),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23463,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0))),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__23477 = arguments.length;
switch (G__23477) {
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
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23481,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23485 = k23481;
var G__23485__$1 = (((G__23485 instanceof cljs.core.Keyword))?G__23485.fqn:null);
switch (G__23485__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23481,else__8933__auto__);

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
var G__23486 = (function (){var or__8242__auto__ = tx;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23486) : f.call(null,G__23486));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__23479_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__23479_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Both{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23480){
var self__ = this;
var G__23480__$1 = this;
return (new cljs.core.RecordIter((0),G__23480__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23487 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23487(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23482,other23483){
var self__ = this;
var this23482__$1 = this;
return (!((other23483 == null))) && ((this23482__$1.constructor === other23483.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23482__$1.schemas,other23483.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23482__$1.__extmap,other23483.__extmap));
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23480){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23488 = cljs.core.keyword_identical_QMARK_;
var expr__23489 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23491 = cljs.core.cst$kw$schemas;
var G__23492 = expr__23489;
return (pred__23488.cljs$core$IFn$_invoke$arity$2 ? pred__23488.cljs$core$IFn$_invoke$arity$2(G__23491,G__23492) : pred__23488.call(null,G__23491,G__23492));
})())){
return (new schema.core.Both(G__23480,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23480),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23480){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__23480,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
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

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__23484){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23484),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23484,cljs.core.cst$kw$schemas)),null));
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
var args__9526__auto__ = [];
var len__9519__auto___23495 = arguments.length;
var i__9520__auto___23496 = (0);
while(true){
if((i__9520__auto___23496 < len__9519__auto___23495)){
args__9526__auto__.push((arguments[i__9520__auto___23496]));

var G__23497 = (i__9520__auto___23496 + (1));
i__9520__auto___23496 = G__23497;
continue;
} else {
}
break;
}

var argseq__9527__auto__ = ((((0) < args__9526__auto__.length))?(new cljs.core.IndexedSeq(args__9526__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__9527__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq23494){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23494));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__23498 = cljs.core.meta(v);
var map__23498__$1 = ((((!((map__23498 == null)))?((((map__23498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23498):map__23498);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23498__$1,cljs.core.cst$kw$name);
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
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23501,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23505 = k23501;
var G__23505__$1 = (((G__23505 instanceof cljs.core.Keyword))?G__23505.fqn:null);
switch (G__23505__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23501,else__8933__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Recursive{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23500){
var self__ = this;
var G__23500__$1 = this;
return (new cljs.core.RecordIter((0),G__23500__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23506 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23506(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23502,other23503){
var self__ = this;
var this23502__$1 = this;
return (!((other23503 == null))) && ((this23502__$1.constructor === other23503.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23502__$1.derefable,other23503.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23502__$1.__extmap,other23503.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23500){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23507 = cljs.core.keyword_identical_QMARK_;
var expr__23508 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23510 = cljs.core.cst$kw$derefable;
var G__23511 = expr__23508;
return (pred__23507.cljs$core$IFn$_invoke$arity$2 ? pred__23507.cljs$core$IFn$_invoke$arity$2(G__23510,G__23511) : pred__23507.call(null,G__23510,G__23511));
})())){
return (new schema.core.Recursive(G__23500,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23500),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23500){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__23500,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
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
return cljs.core._conj((function (){var x__9196__auto__ = (((self__.derefable instanceof cljs.core.Var))?cljs.core._conj((function (){var x__9196__auto__ = schema.core.var_name(self__.derefable);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__23504){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__23504),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23504,cljs.core.cst$kw$derefable)),null));
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
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23516,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23520 = k23516;
var G__23520__$1 = (((G__23520 instanceof cljs.core.Keyword))?G__23520.fqn:null);
switch (G__23520__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23516,else__8933__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Atomic{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23515){
var self__ = this;
var G__23515__$1 = this;
return (new cljs.core.RecordIter((0),G__23515__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23521 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23521(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23517,other23518){
var self__ = this;
var this23517__$1 = this;
return (!((other23518 == null))) && ((this23517__$1.constructor === other23518.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23517__$1.schema,other23518.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23517__$1.__extmap,other23518.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23515){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23522 = cljs.core.keyword_identical_QMARK_;
var expr__23523 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23525 = cljs.core.cst$kw$schema;
var G__23526 = expr__23523;
return (pred__23522.cljs$core$IFn$_invoke$arity$2 ? pred__23522.cljs$core$IFn$_invoke$arity$2(G__23525,G__23526) : pred__23522.call(null,G__23525,G__23526));
})())){
return (new schema.core.Atomic(G__23515,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23515),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23515){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__23515,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__23527_23529 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23527_23529) : item_fn.call(null,G__23527_23529));

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
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$atom);
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__23519){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23519),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23519,cljs.core.cst$kw$schema)),null));
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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23531,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23535 = k23531;
var G__23535__$1 = (((G__23535 instanceof cljs.core.Keyword))?G__23535.fqn:null);
switch (G__23535__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23531,else__8933__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.RequiredKey{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23530){
var self__ = this;
var G__23530__$1 = this;
return (new cljs.core.RecordIter((0),G__23530__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23536 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23536(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23532,other23533){
var self__ = this;
var this23532__$1 = this;
return (!((other23533 == null))) && ((this23532__$1.constructor === other23533.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23532__$1.k,other23533.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23532__$1.__extmap,other23533.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23530){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23537 = cljs.core.keyword_identical_QMARK_;
var expr__23538 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23540 = cljs.core.cst$kw$k;
var G__23541 = expr__23538;
return (pred__23537.cljs$core$IFn$_invoke$arity$2 ? pred__23537.cljs$core$IFn$_invoke$arity$2(G__23540,G__23541) : pred__23537.call(null,G__23540,G__23541));
})())){
return (new schema.core.RequiredKey(G__23530,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23530),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23530){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__23530,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__23534){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__23534),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23534,cljs.core.cst$kw$k)),null));
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23544,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23548 = k23544;
var G__23548__$1 = (((G__23548 instanceof cljs.core.Keyword))?G__23548.fqn:null);
switch (G__23548__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23544,else__8933__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.OptionalKey{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23543){
var self__ = this;
var G__23543__$1 = this;
return (new cljs.core.RecordIter((0),G__23543__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23549 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23549(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23545,other23546){
var self__ = this;
var this23545__$1 = this;
return (!((other23546 == null))) && ((this23545__$1.constructor === other23546.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23545__$1.k,other23546.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23545__$1.__extmap,other23546.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23543){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23550 = cljs.core.keyword_identical_QMARK_;
var expr__23551 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23553 = cljs.core.cst$kw$k;
var G__23554 = expr__23551;
return (pred__23550.cljs$core$IFn$_invoke$arity$2 ? pred__23550.cljs$core$IFn$_invoke$arity$2(G__23553,G__23554) : pred__23550.call(null,G__23553,G__23554));
})())){
return (new schema.core.OptionalKey(G__23543,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23543),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23543){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__23543,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__23547){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__23547),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23547,cljs.core.cst$kw$k)),null));
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
var or__8242__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__23556){
var vec__23557 = p__23556;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23557,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23557,(1),null);
var coll = vec__23557;
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23561,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23565 = k23561;
var G__23565__$1 = (((G__23565 instanceof cljs.core.Keyword))?G__23565.fqn:null);
switch (G__23565__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23561,else__8933__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.MapEntry{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23560){
var self__ = this;
var G__23560__$1 = this;
return (new cljs.core.RecordIter((0),G__23560__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23566 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23566(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23562,other23563){
var self__ = this;
var this23562__$1 = this;
return (!((other23563 == null))) && ((this23562__$1.constructor === other23563.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.key_schema,other23563.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.val_schema,other23563.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23562__$1.__extmap,other23563.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23560){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23567 = cljs.core.keyword_identical_QMARK_;
var expr__23568 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23570 = cljs.core.cst$kw$key_DASH_schema;
var G__23571 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23570,G__23571) : pred__23567.call(null,G__23570,G__23571));
})())){
return (new schema.core.MapEntry(G__23560,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23572 = cljs.core.cst$kw$val_DASH_schema;
var G__23573 = expr__23568;
return (pred__23567.cljs$core$IFn$_invoke$arity$2 ? pred__23567.cljs$core$IFn$_invoke$arity$2(G__23572,G__23573) : pred__23567.call(null,G__23572,G__23573));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__23560,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23560),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23560){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__23560,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,schema.core.map_entry_ctor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__23574_23585 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23574_23585) : item_fn.call(null,G__23574_23585));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__23575_23586 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23575_23586) : item_fn.call(null,G__23575_23586));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__23576,p__23577,_){
var vec__23578 = p__23576;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23578,(0),null);
var vec__23581 = p__23577;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23581,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23581,(1),null);
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
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.key_schema);
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(self__.val_schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__23564){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23564),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23564),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23564,cljs.core.cst$kw$key_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val_DASH_schema], 0))),null));
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
var x__9196__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null));
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explicit_schema_key(kspec);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_23600 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__23587_SHARP_){
return (cljs.core.count(p1__23587_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_23600)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_23600], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9124__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__23588(s__23589){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__23589__$1 = s__23589;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23589__$1);
if(temp__5290__auto__){
var s__23589__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23589__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23589__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23591 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23590 = (0);
while(true){
if((i__23590 < size__9123__auto__)){
var vec__23592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23590);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(1),null);
cljs.core.chunk_append(b__23591,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__23590,rk,required_QMARK_,vec__23592,k,v,c__9122__auto__,size__9123__auto__,b__23591,s__23589__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__23595_23601 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23595_23601) : item_fn.call(null,G__23595_23601));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__23590,rk,required_QMARK_,vec__23592,k,v,c__9122__auto__,size__9123__auto__,b__23591,s__23589__$2,temp__5290__auto__,extra_keys_schema))
);
})());

var G__23602 = (i__23590 + (1));
i__23590 = G__23602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23591),schema$core$map_elements_$_iter__23588(cljs.core.chunk_rest(s__23589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23591),null);
}
} else {
var vec__23596 = cljs.core.first(s__23589__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__23596,k,v,s__23589__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__23599_23603 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23599_23603) : item_fn.call(null,G__23599_23603));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__23596,k,v,s__23589__$2,temp__5290__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__23588(cljs.core.rest(s__23589__$2)));
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
return iter__9124__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__9124__auto__ = (function schema$core$map_error_$_iter__23604(s__23605){
return (new cljs.core.LazySeq(null,(function (){
var s__23605__$1 = s__23605;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23605__$1);
if(temp__5290__auto__){
var s__23605__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23605__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23605__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23607 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23606 = (0);
while(true){
if((i__23606 < size__9123__auto__)){
var vec__23608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23606);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23608,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23608,(1),null);
cljs.core.chunk_append(b__23607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__23614 = (i__23606 + (1));
i__23606 = G__23614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23607),schema$core$map_error_$_iter__23604(cljs.core.chunk_rest(s__23605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23607),null);
}
} else {
var vec__23611 = cljs.core.first(s__23605__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23611,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23611,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__23604(cljs.core.rest(s__23605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__23615_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__23615_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9124__auto__ = (function schema$core$map_explain_$_iter__23616(s__23617){
return (new cljs.core.LazySeq(null,(function (){
var s__23617__$1 = s__23617;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23617__$1);
if(temp__5290__auto__){
var s__23617__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23617__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23617__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23619 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23618 = (0);
while(true){
if((i__23618 < size__9123__auto__)){
var vec__23620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23618);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,(1),null);
cljs.core.chunk_append(b__23619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__23626 = (i__23618 + (1));
i__23618 = G__23626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23619),schema$core$map_explain_$_iter__23616(cljs.core.chunk_rest(s__23617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23619),null);
}
} else {
var vec__23623 = cljs.core.first(s__23617__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23623,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__23616(cljs.core.rest(s__23617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9124__auto__(this$);
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
return (function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23628,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23632 = k23628;
var G__23632__$1 = (((G__23632 instanceof cljs.core.Keyword))?G__23632.fqn:null);
switch (G__23632__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23628,else__8933__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Queue{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23627){
var self__ = this;
var G__23627__$1 = this;
return (new cljs.core.RecordIter((0),G__23627__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23633 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23633(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23629,other23630){
var self__ = this;
var this23629__$1 = this;
return (!((other23630 == null))) && ((this23629__$1.constructor === other23630.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23629__$1.schema,other23630.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23629__$1.__extmap,other23630.__extmap));
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23627){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23634 = cljs.core.keyword_identical_QMARK_;
var expr__23635 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23637 = cljs.core.cst$kw$schema;
var G__23638 = expr__23635;
return (pred__23634.cljs$core$IFn$_invoke$arity$2 ? pred__23634.cljs$core$IFn$_invoke$arity$2(G__23637,G__23638) : pred__23634.call(null,G__23637,G__23638));
})())){
return (new schema.core.Queue(G__23627,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23627),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23627){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__23627,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__23631){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23631),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23631,cljs.core.cst$kw$schema)),null));
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23641,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23645 = k23641;
var G__23645__$1 = (((G__23645 instanceof cljs.core.Keyword))?G__23645.fqn:null);
switch (G__23645__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23641,else__8933__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.One{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23640){
var self__ = this;
var G__23640__$1 = this;
return (new cljs.core.RecordIter((0),G__23640__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23646 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23646(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23642,other23643){
var self__ = this;
var this23642__$1 = this;
return (!((other23643 == null))) && ((this23642__$1.constructor === other23643.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23642__$1.schema,other23643.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23642__$1.optional_QMARK_,other23643.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23642__$1.name,other23643.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23642__$1.__extmap,other23643.__extmap));
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23640){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23647 = cljs.core.keyword_identical_QMARK_;
var expr__23648 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23650 = cljs.core.cst$kw$schema;
var G__23651 = expr__23648;
return (pred__23647.cljs$core$IFn$_invoke$arity$2 ? pred__23647.cljs$core$IFn$_invoke$arity$2(G__23650,G__23651) : pred__23647.call(null,G__23650,G__23651));
})())){
return (new schema.core.One(G__23640,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23652 = cljs.core.cst$kw$optional_QMARK_;
var G__23653 = expr__23648;
return (pred__23647.cljs$core$IFn$_invoke$arity$2 ? pred__23647.cljs$core$IFn$_invoke$arity$2(G__23652,G__23653) : pred__23647.call(null,G__23652,G__23653));
})())){
return (new schema.core.One(self__.schema,G__23640,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23654 = cljs.core.cst$kw$name;
var G__23655 = expr__23648;
return (pred__23647.cljs$core$IFn$_invoke$arity$2 ? pred__23647.cljs$core$IFn$_invoke$arity$2(G__23654,G__23655) : pred__23647.call(null,G__23654,G__23655));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__23640,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23640),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23640){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__23640,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__23644){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23644),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23644),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23644),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23644,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0))),null));
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

var vec__23660 = cljs.core.split_with((function (p1__23657_SHARP_){
return ((p1__23657_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__23657_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23660,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23660,(1),null);
var vec__23663 = cljs.core.split_with(((function (vec__23660,required,more){
return (function (p1__23658_SHARP_){
var and__8230__auto__ = (p1__23658_SHARP_ instanceof schema.core.One);
if(and__8230__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__23658_SHARP_);
} else {
return and__8230__auto__;
}
});})(vec__23660,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23663,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__23660,required,more,vec__23663,optional,more__$1){
return (function (p1__23659_SHARP_){
return !((p1__23659_SHARP_ instanceof schema.core.One));
});})(vec__23660,required,more,vec__23663,optional,more__$1))
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
return (function (p1__23666_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23666_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__23667 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23667,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23667,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__23667,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),((function (vec__23667,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5288__auto__ = cljs.core.seq(x);
if(temp__5288__auto__){
var x__$1 = temp__5288__auto__;
var G__23670_23680 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23670_23680) : item_fn.call(null,G__23670_23680));

return cljs.core.rest(x__$1);
} else {
var G__23671_23681 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__5288__auto__,vec__23667,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9196__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(temp__5288__auto__,vec__23667,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23671_23681) : item_fn.call(null,G__23671_23681));

return null;
}
});})(vec__23667,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),((function (vec__23667,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5290__auto__ = cljs.core.seq(x);
if(temp__5290__auto__){
var x__$1 = temp__5290__auto__;
var G__23672_23682 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23672_23682) : item_fn.call(null,G__23672_23682));

return cljs.core.rest(x__$1);
} else {
return null;
}
});})(vec__23667,singles,multi,this$__$1))
,more)], null);
}
});})(vec__23667,singles,multi,this$__$1))
,(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null),cljs.core.reverse(singles));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9196__auto__ = cljs.core.count(extra);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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
var vec__23673 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23673,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23673,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9124__auto__ = ((function (vec__23673,singles,multi,this$__$1){
return (function schema$core$iter__23676(s__23677){
return (new cljs.core.LazySeq(null,((function (vec__23673,singles,multi,this$__$1){
return (function (){
var s__23677__$1 = s__23677;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23677__$1);
if(temp__5290__auto__){
var s__23677__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23677__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23677__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23679 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23678 = (0);
while(true){
if((i__23678 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23678);
cljs.core.chunk_append(b__23679,(function (){var x__9196__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9196__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$2);
})(),x__9196__auto____$1);
})(),x__9196__auto__);
})());

var G__23683 = (i__23678 + (1));
i__23678 = G__23683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23679),schema$core$iter__23676(cljs.core.chunk_rest(s__23677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23679),null);
}
} else {
var s = cljs.core.first(s__23677__$2);
return cljs.core.cons((function (){var x__9196__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9196__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$2);
})(),x__9196__auto____$1);
})(),x__9196__auto__);
})(),schema$core$iter__23676(cljs.core.rest(s__23677__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23673,singles,multi,this$__$1))
,null,null));
});})(vec__23673,singles,multi,this$__$1))
;
return iter__9124__auto__(singles);
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23688,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23692 = k23688;
var G__23692__$1 = (((G__23692 instanceof cljs.core.Keyword))?G__23692.fqn:null);
switch (G__23692__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23688,else__8933__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.Record{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23687){
var self__ = this;
var G__23687__$1 = this;
return (new cljs.core.RecordIter((0),G__23687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23693 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23693(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23689,other23690){
var self__ = this;
var this23689__$1 = this;
return (!((other23690 == null))) && ((this23689__$1.constructor === other23690.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23689__$1.klass,other23690.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23689__$1.schema,other23690.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23689__$1.__extmap,other23690.__extmap));
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23687){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23694 = cljs.core.keyword_identical_QMARK_;
var expr__23695 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23697 = cljs.core.cst$kw$klass;
var G__23698 = expr__23695;
return (pred__23694.cljs$core$IFn$_invoke$arity$2 ? pred__23694.cljs$core$IFn$_invoke$arity$2(G__23697,G__23698) : pred__23694.call(null,G__23697,G__23698));
})())){
return (new schema.core.Record(G__23687,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23699 = cljs.core.cst$kw$schema;
var G__23700 = expr__23695;
return (pred__23694.cljs$core$IFn$_invoke$arity$2 ? pred__23694.cljs$core$IFn$_invoke$arity$2(G__23699,G__23700) : pred__23694.call(null,G__23699,G__23700));
})())){
return (new schema.core.Record(self__.klass,G__23687,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23687),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23687){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__23687,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23684_SHARP_){
return (p1__23684_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23685_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = self__.klass;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23685_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__5288__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var evf = temp__5288__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__5288__auto__,p,this$__$1){
return (function (p1__23686_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23686_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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
return cljs.core._conj((function (){var x__9196__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.klass], 0)));
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(self__.schema);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__23691){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__23691),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23691),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23691,cljs.core.cst$kw$klass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema], 0))),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__23704 = cljs.core.split_with((function (p1__23702_SHARP_){
return (p1__23702_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23704,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23704,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23704,required,more){
return (function (p1__23703_SHARP_){
return schema.core.explain(p1__23703_SHARP_.schema);
});})(vec__23704,required,more))
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8930__auto__,k__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
return this__8930__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8931__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23708,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23712 = k23708;
var G__23712__$1 = (((G__23712 instanceof cljs.core.Keyword))?G__23712.fqn:null);
switch (G__23712__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23708,else__8933__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8944__auto__,writer__8945__auto__,opts__8946__auto__){
var self__ = this;
var this__8944__auto____$1 = this;
var pr_pair__8947__auto__ = ((function (this__8944__auto____$1){
return (function (keyval__8948__auto__){
return cljs.core.pr_sequential_writer(writer__8945__auto__,cljs.core.pr_writer,""," ","",opts__8946__auto__,keyval__8948__auto__);
});})(this__8944__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8945__auto__,pr_pair__8947__auto__,"#schema.core.FnSchema{",", ","}",opts__8946__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23707){
var self__ = this;
var G__23707__$1 = this;
return (new cljs.core.RecordIter((0),G__23707__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8928__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8925__auto__){
var self__ = this;
var this__8925__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8934__auto__){
var self__ = this;
var this__8934__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
var h__8698__auto__ = self__.__hash;
if(!((h__8698__auto__ == null))){
return h__8698__auto__;
} else {
var h__8698__auto____$1 = (function (){var fexpr__23713 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23713(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23709,other23710){
var self__ = this;
var this23709__$1 = this;
return (!((other23710 == null))) && ((this23709__$1.constructor === other23710.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23709__$1.output_schema,other23710.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23709__$1.input_schemas,other23710.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23709__$1.__extmap,other23710.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8939__auto__,k__8940__auto__){
var self__ = this;
var this__8939__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__8940__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8939__auto____$1),self__.__meta),k__8940__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8940__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23707){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23714 = cljs.core.keyword_identical_QMARK_;
var expr__23715 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23717 = cljs.core.cst$kw$output_DASH_schema;
var G__23718 = expr__23715;
return (pred__23714.cljs$core$IFn$_invoke$arity$2 ? pred__23714.cljs$core$IFn$_invoke$arity$2(G__23717,G__23718) : pred__23714.call(null,G__23717,G__23718));
})())){
return (new schema.core.FnSchema(G__23707,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23719 = cljs.core.cst$kw$input_DASH_schemas;
var G__23720 = expr__23715;
return (pred__23714.cljs$core$IFn$_invoke$arity$2 ? pred__23714.cljs$core$IFn$_invoke$arity$2(G__23719,G__23720) : pred__23714.call(null,G__23719,G__23720));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__23707,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23707),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23707){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__23707,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8935__auto__,entry__8936__auto__){
var self__ = this;
var this__8935__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8936__auto__)){
return this__8935__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8936__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8935__auto____$1,entry__8936__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__21711__21712__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21711__21712__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
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

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__8968__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__8968__auto__,writer__8969__auto__){
return cljs.core._write(writer__8969__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__23711){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23711),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__23711),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23711,cljs.core.cst$kw$output_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_schemas], 0))),null));
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

var or__8242__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
var m__21388__auto__ = cljs.core.meta(f);
var k__21389__auto__ = cljs.core.cst$kw$schema;
var temp__5288__auto__ = cljs.core.find(m__21388__auto__,k__21389__auto__);
if(cljs.core.truth_(temp__5288__auto__)){
var pair__21390__auto__ = temp__5288__auto__;
return cljs.core.val(pair__21390__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__21389__auto__,m__21388__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
