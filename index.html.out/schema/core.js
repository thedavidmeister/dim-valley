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
var fexpr__23041 = schema.core.checker(schema__$1);
return (fexpr__23041.cljs$core$IFn$_invoke$arity$1 ? fexpr__23041.cljs$core$IFn$_invoke$arity$1(x) : fexpr__23041.call(null,x));
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__5290__auto___23042 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__5290__auto___23042)){
var error_23043 = temp__5290__auto___23042;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error_23043], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_23043], null));
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
var fexpr__23044 = schema.core.validator(schema__$1);
return (fexpr__23044.cljs$core$IFn$_invoke$arity$1 ? fexpr__23044.cljs$core$IFn$_invoke$arity$1(value) : fexpr__23044.call(null,value));
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__23045_SHARP_){
var and__8230__auto__ = !((p1__23045_SHARP_ == null));
if(and__8230__auto__){
var or__8242__auto__ = (klass === p1__23045_SHARP_.constructor);
if(or__8242__auto__){
return or__8242__auto__;
} else {
return p1__23045_SHARP_ instanceof klass;
}
} else {
return and__8230__auto__;
}
}),(function (p1__23046_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = klass;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23046_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
}));
});
goog.object.set(schema.core.Schema,"function",true);

var G__23047_23056 = schema.core.spec;
var G__23048_23057 = "function";
var G__23049_23058 = ((function (G__23047_23056,G__23048_23057){
return (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var class_schema = temp__5288__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
});})(G__23047_23056,G__23048_23057))
;
goog.object.set(G__23047_23056,G__23048_23057,G__23049_23058);

var G__23050_23059 = schema.core.explain;
var G__23051_23060 = "function";
var G__23052_23061 = ((function (G__23050_23059,G__23051_23060){
return (function (this$){
var temp__5288__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__5288__auto__)){
var more_schema = temp__5288__auto__;
return schema.core.explain(more_schema);
} else {
var pred__23053 = cljs.core._EQ_;
var expr__23054 = this$;
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(null,expr__23054) : pred__23053.call(null,null,expr__23054)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(Boolean,expr__23054) : pred__23053.call(null,Boolean,expr__23054)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(Number,expr__23054) : pred__23053.call(null,Number,expr__23054)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(null,expr__23054) : pred__23053.call(null,null,expr__23054)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(Date,expr__23054) : pred__23053.call(null,Date,expr__23054)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__23053.cljs$core$IFn$_invoke$arity$2 ? pred__23053.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__23054) : pred__23053.call(null,cljs.core.UUID,expr__23054)))){
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
});})(G__23050_23059,G__23051_23060))
;
goog.object.set(G__23050_23059,G__23051_23060,G__23052_23061);

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

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23063,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23067 = k23063;
var G__23067__$1 = (((G__23067 instanceof cljs.core.Keyword))?G__23067.fqn:null);
switch (G__23067__$1) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23063,else__8933__auto__);

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

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23062){
var self__ = this;
var G__23062__$1 = this;
return (new cljs.core.RecordIter((0),G__23062__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23068 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1432036169 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23068(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23064,other23065){
var self__ = this;
var this23064__$1 = this;
return (!((other23065 == null))) && ((this23064__$1.constructor === other23065.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23064__$1._,other23065._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23064__$1.__extmap,other23065.__extmap));
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

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23062){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23069 = cljs.core.keyword_identical_QMARK_;
var expr__23070 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23072 = cljs.core.cst$kw$_;
var G__23073 = expr__23070;
return (pred__23069.cljs$core$IFn$_invoke$arity$2 ? pred__23069.cljs$core$IFn$_invoke$arity$2(G__23072,G__23073) : pred__23069.call(null,G__23072,G__23073));
})())){
return (new schema.core.AnythingSchema(G__23062,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23062),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23062){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__23062,self__.__extmap,self__.__hash));
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

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__23066){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__23066),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23066,cljs.core.cst$kw$_)),null));
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

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23078,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23082 = k23078;
var G__23082__$1 = (((G__23082 instanceof cljs.core.Keyword))?G__23082.fqn:null);
switch (G__23082__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23078,else__8933__auto__);

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

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23077){
var self__ = this;
var G__23077__$1 = this;
return (new cljs.core.RecordIter((0),G__23077__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23083 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-907989292 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23083(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23079,other23080){
var self__ = this;
var this23079__$1 = this;
return (!((other23080 == null))) && ((this23079__$1.constructor === other23080.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23079__$1.v,other23080.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23079__$1.__extmap,other23080.__extmap));
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

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23077){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23084 = cljs.core.keyword_identical_QMARK_;
var expr__23085 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23087 = cljs.core.cst$kw$v;
var G__23088 = expr__23085;
return (pred__23084.cljs$core$IFn$_invoke$arity$2 ? pred__23084.cljs$core$IFn$_invoke$arity$2(G__23087,G__23088) : pred__23084.call(null,G__23087,G__23088));
})())){
return (new schema.core.EqSchema(G__23077,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23077),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23077){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__23077,self__.__extmap,self__.__hash));
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
return (function (p1__23075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__23075_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23076_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = self__.v;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23076_SHARP_;
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

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__23081){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__23081),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23081,cljs.core.cst$kw$v)),null));
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

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23093,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23097 = k23093;
var G__23097__$1 = (((G__23097 instanceof cljs.core.Keyword))?G__23097.fqn:null);
switch (G__23097__$1) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23093,else__8933__auto__);

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

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23092){
var self__ = this;
var G__23092__$1 = this;
return (new cljs.core.RecordIter((0),G__23092__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23098 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1593744337 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23098(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23094,other23095){
var self__ = this;
var this23094__$1 = this;
return (!((other23095 == null))) && ((this23094__$1.constructor === other23095.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23094__$1.h,other23095.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23094__$1.parent,other23095.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23094__$1.__extmap,other23095.__extmap));
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

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23092){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23099 = cljs.core.keyword_identical_QMARK_;
var expr__23100 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23102 = cljs.core.cst$kw$h;
var G__23103 = expr__23100;
return (pred__23099.cljs$core$IFn$_invoke$arity$2 ? pred__23099.cljs$core$IFn$_invoke$arity$2(G__23102,G__23103) : pred__23099.call(null,G__23102,G__23103));
})())){
return (new schema.core.Isa(G__23092,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23104 = cljs.core.cst$kw$parent;
var G__23105 = expr__23100;
return (pred__23099.cljs$core$IFn$_invoke$arity$2 ? pred__23099.cljs$core$IFn$_invoke$arity$2(G__23104,G__23105) : pred__23099.call(null,G__23104,G__23105));
})())){
return (new schema.core.Isa(self__.h,G__23092,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23092),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23092){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__23092,self__.__extmap,self__.__hash));
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
return (function (p1__23090_SHARP_){
if(cljs.core.truth_(self__.h)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__23090_SHARP_,self__.parent);
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__23090_SHARP_,self__.parent);
}
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23091_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23091_SHARP_;
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

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__23096){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__23096),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__23096),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23096,cljs.core.cst$kw$h,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parent], 0))),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var G__23108 = arguments.length;
switch (G__23108) {
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

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23113,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23117 = k23113;
var G__23117__$1 = (((G__23117 instanceof cljs.core.Keyword))?G__23117.fqn:null);
switch (G__23117__$1) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23113,else__8933__auto__);

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

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23112){
var self__ = this;
var G__23112__$1 = this;
return (new cljs.core.RecordIter((0),G__23112__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23118 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (2002701468 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23118(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23114,other23115){
var self__ = this;
var this23114__$1 = this;
return (!((other23115 == null))) && ((this23114__$1.constructor === other23115.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23114__$1.vs,other23115.vs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23114__$1.__extmap,other23115.__extmap));
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

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23112){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23119 = cljs.core.keyword_identical_QMARK_;
var expr__23120 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23122 = cljs.core.cst$kw$vs;
var G__23123 = expr__23120;
return (pred__23119.cljs$core$IFn$_invoke$arity$2 ? pred__23119.cljs$core$IFn$_invoke$arity$2(G__23122,G__23123) : pred__23119.call(null,G__23122,G__23123));
})())){
return (new schema.core.EnumSchema(G__23112,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23112),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23112){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__23112,self__.__extmap,self__.__hash));
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
return (function (p1__23110_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__23110_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23111_SHARP_){
var x__9196__auto__ = self__.vs;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23111_SHARP_;
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

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__23116){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__23116),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23116,cljs.core.cst$kw$vs)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__9526__auto__ = [];
var len__9519__auto___23126 = arguments.length;
var i__9520__auto___23127 = (0);
while(true){
if((i__9520__auto___23127 < len__9519__auto___23126)){
args__9526__auto__.push((arguments[i__9520__auto___23127]));

var G__23128 = (i__9520__auto___23127 + (1));
i__9520__auto___23127 = G__23128;
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

schema.core.enum$.cljs$lang$applyTo = (function (seq23125){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23125));
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

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23131,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23135 = k23131;
var G__23135__$1 = (((G__23135 instanceof cljs.core.Keyword))?G__23135.fqn:null);
switch (G__23135__$1) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23131,else__8933__auto__);

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

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23130){
var self__ = this;
var G__23130__$1 = this;
return (new cljs.core.RecordIter((0),G__23130__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23136 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (2041221968 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23136(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23132,other23133){
var self__ = this;
var this23132__$1 = this;
return (!((other23133 == null))) && ((this23132__$1.constructor === other23133.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23132__$1.p_QMARK_,other23133.p_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23132__$1.pred_name,other23133.pred_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23132__$1.__extmap,other23133.__extmap));
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

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23130){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23137 = cljs.core.keyword_identical_QMARK_;
var expr__23138 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23140 = cljs.core.cst$kw$p_QMARK_;
var G__23141 = expr__23138;
return (pred__23137.cljs$core$IFn$_invoke$arity$2 ? pred__23137.cljs$core$IFn$_invoke$arity$2(G__23140,G__23141) : pred__23137.call(null,G__23140,G__23141));
})())){
return (new schema.core.Predicate(G__23130,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23142 = cljs.core.cst$kw$pred_DASH_name;
var G__23143 = expr__23138;
return (pred__23137.cljs$core$IFn$_invoke$arity$2 ? pred__23137.cljs$core$IFn$_invoke$arity$2(G__23142,G__23143) : pred__23137.call(null,G__23142,G__23143));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__23130,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23130),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23130){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__23130,self__.__extmap,self__.__hash));
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
return (function (p1__23129_SHARP_){
var x__9196__auto__ = self__.pred_name;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23129_SHARP_;
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

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__23134){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23134),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__23134),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23134,cljs.core.cst$kw$p_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred_DASH_name], 0))),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var G__23146 = arguments.length;
switch (G__23146) {
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

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23151,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23155 = k23151;
var G__23155__$1 = (((G__23155 instanceof cljs.core.Keyword))?G__23155.fqn:null);
switch (G__23155__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23151,else__8933__auto__);

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

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23150){
var self__ = this;
var G__23150__$1 = this;
return (new cljs.core.RecordIter((0),G__23150__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23156 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1892592712 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23156(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23152,other23153){
var self__ = this;
var this23152__$1 = this;
return (!((other23153 == null))) && ((this23152__$1.constructor === other23153.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23152__$1.p,other23153.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23152__$1.__extmap,other23153.__extmap));
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

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23150){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23157 = cljs.core.keyword_identical_QMARK_;
var expr__23158 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23160 = cljs.core.cst$kw$p;
var G__23161 = expr__23158;
return (pred__23157.cljs$core$IFn$_invoke$arity$2 ? pred__23157.cljs$core$IFn$_invoke$arity$2(G__23160,G__23161) : pred__23157.call(null,G__23160,G__23161));
})())){
return (new schema.core.Protocol(G__23150,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23150),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23150){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__23150,self__.__extmap,self__.__hash));
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
return (function (p1__23148_SHARP_){
var fexpr__23162 = cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1));
return (fexpr__23162.cljs$core$IFn$_invoke$arity$1 ? fexpr__23162.cljs$core$IFn$_invoke$arity$1(p1__23148_SHARP_) : fexpr__23162.call(null,p1__23148_SHARP_));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23149_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.protocol_name(this$__$1);
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23149_SHARP_;
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

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__23154){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__23154),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23154,cljs.core.cst$kw$p)),null));
});

RegExp.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23164_SHARP_){
return cljs.core.re_find(this$__$1,p1__23164_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23165_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = schema.core.explain(this$__$1);
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23165_SHARP_;
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
if(typeof schema.core.t_schema$core23168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core23168 = (function (meta23169){
this.meta23169 = meta23169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.core.t_schema$core23168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23170,meta23169__$1){
var self__ = this;
var _23170__$1 = this;
return (new schema.core.t_schema$core23168(meta23169__$1));
});

schema.core.t_schema$core23168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23170){
var self__ = this;
var _23170__$1 = this;
return self__.meta23169;
});

schema.core.t_schema$core23168.prototype.schema$core$Schema$ = cljs.core.PROTOCOL_SENTINEL;

schema.core.t_schema$core23168.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__23166_SHARP_){
return (p1__23166_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23167_SHARP_){
return cljs.core._conj(cljs.core._conj((function (){var x__9196__auto__ = p1__23167_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core23168.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core23168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta23169], null);
});

schema.core.t_schema$core23168.cljs$lang$type = true;

schema.core.t_schema$core23168.cljs$lang$ctorStr = "schema.core/t_schema$core23168";

schema.core.t_schema$core23168.cljs$lang$ctorPrWriter = (function (this__8913__auto__,writer__8914__auto__,opt__8915__auto__){
return cljs.core._write(writer__8914__auto__,"schema.core/t_schema$core23168");
});

schema.core.__GT_t_schema$core23168 = (function schema$core$__GT_t_schema$core23168(meta23169){
return (new schema.core.t_schema$core23168(meta23169));
});

}

return (new schema.core.t_schema$core23168(cljs.core.PersistentArrayMap.EMPTY));
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

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23172,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23176 = k23172;
var G__23176__$1 = (((G__23176 instanceof cljs.core.Keyword))?G__23176.fqn:null);
switch (G__23176__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23172,else__8933__auto__);

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

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23171){
var self__ = this;
var G__23171__$1 = this;
return (new cljs.core.RecordIter((0),G__23171__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23177 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-805411239 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23177(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23173,other23174){
var self__ = this;
var this23173__$1 = this;
return (!((other23174 == null))) && ((this23173__$1.constructor === other23174.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23173__$1.schema,other23174.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23173__$1.__extmap,other23174.__extmap));
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

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23171){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23178 = cljs.core.keyword_identical_QMARK_;
var expr__23179 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23181 = cljs.core.cst$kw$schema;
var G__23182 = expr__23179;
return (pred__23178.cljs$core$IFn$_invoke$arity$2 ? pred__23178.cljs$core$IFn$_invoke$arity$2(G__23181,G__23182) : pred__23178.call(null,G__23181,G__23182));
})())){
return (new schema.core.Maybe(G__23171,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23171),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23171){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__23171,self__.__extmap,self__.__hash));
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

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__23175){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23175),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23175,cljs.core.cst$kw$schema)),null));
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

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23186,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23190 = k23186;
var G__23190__$1 = (((G__23190 instanceof cljs.core.Keyword))?G__23190.fqn:null);
switch (G__23190__$1) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23186,else__8933__auto__);

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

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23185){
var self__ = this;
var G__23185__$1 = this;
return (new cljs.core.RecordIter((0),G__23185__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23191 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (456601728 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23191(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23187,other23188){
var self__ = this;
var this23187__$1 = this;
return (!((other23188 == null))) && ((this23187__$1.constructor === other23188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23187__$1.schema,other23188.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23187__$1.name,other23188.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23187__$1.__extmap,other23188.__extmap));
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

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23185){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23192 = cljs.core.keyword_identical_QMARK_;
var expr__23193 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23195 = cljs.core.cst$kw$schema;
var G__23196 = expr__23193;
return (pred__23192.cljs$core$IFn$_invoke$arity$2 ? pred__23192.cljs$core$IFn$_invoke$arity$2(G__23195,G__23196) : pred__23192.call(null,G__23195,G__23196));
})())){
return (new schema.core.NamedSchema(G__23185,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23197 = cljs.core.cst$kw$name;
var G__23198 = expr__23193;
return (pred__23192.cljs$core$IFn$_invoke$arity$2 ? pred__23192.cljs$core$IFn$_invoke$arity$2(G__23197,G__23198) : pred__23192.call(null,G__23197,G__23198));
})())){
return (new schema.core.NamedSchema(self__.schema,G__23185,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23185),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23185){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__23185,self__.__extmap,self__.__hash));
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
return (function (p1__23184_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__23184_SHARP_);
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

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__23189){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23189),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23189),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23189,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name], 0))),null));
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

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23202,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23206 = k23202;
var G__23206__$1 = (((G__23206 instanceof cljs.core.Keyword))?G__23206.fqn:null);
switch (G__23206__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23202,else__8933__auto__);

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

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23201){
var self__ = this;
var G__23201__$1 = this;
return (new cljs.core.RecordIter((0),G__23201__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23207 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1018568510 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23207(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23203,other23204){
var self__ = this;
var this23203__$1 = this;
return (!((other23204 == null))) && ((this23203__$1.constructor === other23204.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23203__$1.schemas,other23204.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23203__$1.__extmap,other23204.__extmap));
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

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23201){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23208 = cljs.core.keyword_identical_QMARK_;
var expr__23209 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23211 = cljs.core.cst$kw$schemas;
var G__23212 = expr__23209;
return (pred__23208.cljs$core$IFn$_invoke$arity$2 ? pred__23208.cljs$core$IFn$_invoke$arity$2(G__23211,G__23212) : pred__23208.call(null,G__23211,G__23212));
})())){
return (new schema.core.Either(G__23201,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23201),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23201){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__23201,self__.__extmap,self__.__hash));
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
return (function schema$core$iter__23213(s__23214){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23214__$1 = s__23214;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23214__$1);
if(temp__5290__auto__){
var s__23214__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23214__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23214__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23216 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23215 = (0);
while(true){
if((i__23215 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23215);
cljs.core.chunk_append(b__23216,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__23218 = (i__23215 + (1));
i__23215 = G__23218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23216),schema$core$iter__23213(cljs.core.chunk_rest(s__23214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23216),null);
}
} else {
var s = cljs.core.first(s__23214__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__23213(cljs.core.rest(s__23214__$2)));
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
return (function (p1__23200_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23200_SHARP_;
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

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__23205){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23205),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23205,cljs.core.cst$kw$schemas)),null));
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
var len__9519__auto___23220 = arguments.length;
var i__9520__auto___23221 = (0);
while(true){
if((i__9520__auto___23221 < len__9519__auto___23220)){
args__9526__auto__.push((arguments[i__9520__auto___23221]));

var G__23222 = (i__9520__auto___23221 + (1));
i__9520__auto___23221 = G__23222;
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

schema.core.either.cljs$lang$applyTo = (function (seq23219){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23219));
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

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23225,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23229 = k23225;
var G__23229__$1 = (((G__23229 instanceof cljs.core.Keyword))?G__23229.fqn:null);
switch (G__23229__$1) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23225,else__8933__auto__);

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

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23224){
var self__ = this;
var G__23224__$1 = this;
return (new cljs.core.RecordIter((0),G__23224__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23230 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1418435858 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23230(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23226,other23227){
var self__ = this;
var this23226__$1 = this;
return (!((other23227 == null))) && ((this23226__$1.constructor === other23227.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23226__$1.preds_and_schemas,other23227.preds_and_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23226__$1.error_symbol,other23227.error_symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23226__$1.__extmap,other23227.__extmap));
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

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23224){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23231 = cljs.core.keyword_identical_QMARK_;
var expr__23232 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23234 = cljs.core.cst$kw$preds_DASH_and_DASH_schemas;
var G__23235 = expr__23232;
return (pred__23231.cljs$core$IFn$_invoke$arity$2 ? pred__23231.cljs$core$IFn$_invoke$arity$2(G__23234,G__23235) : pred__23231.call(null,G__23234,G__23235));
})())){
return (new schema.core.ConditionalSchema(G__23224,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23236 = cljs.core.cst$kw$error_DASH_symbol;
var G__23237 = expr__23232;
return (pred__23231.cljs$core$IFn$_invoke$arity$2 ? pred__23231.cljs$core$IFn$_invoke$arity$2(G__23236,G__23237) : pred__23231.call(null,G__23236,G__23237));
})())){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__23224,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23224),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23224){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__23224,self__.__extmap,self__.__hash));
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
return (function schema$core$iter__23238(s__23239){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23239__$1 = s__23239;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23239__$1);
if(temp__5290__auto__){
var s__23239__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23239__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23239__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23241 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23240 = (0);
while(true){
if((i__23240 < size__9123__auto__)){
var vec__23242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23240);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23242,(1),null);
cljs.core.chunk_append(b__23241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__23253 = (i__23240 + (1));
i__23240 = G__23253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23241),schema$core$iter__23238(cljs.core.chunk_rest(s__23239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23241),null);
}
} else {
var vec__23245 = cljs.core.first(s__23239__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23245,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23245,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__23238(cljs.core.rest(s__23239__$2)));
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
return (function (p1__23223_SHARP_){
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
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23223_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__23248){
var vec__23249 = p__23248;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23249,(1),null);
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

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__23228){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__23228),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__23228),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23228,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_symbol], 0))),null));
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
var len__9519__auto___23265 = arguments.length;
var i__9520__auto___23266 = (0);
while(true){
if((i__9520__auto___23266 < len__9519__auto___23265)){
args__9526__auto__.push((arguments[i__9520__auto___23266]));

var G__23267 = (i__9520__auto___23266 + (1));
i__9520__auto___23266 = G__23267;
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

return (new schema.core.ConditionalSchema(cljs.core.vec((function (){var iter__9124__auto__ = (function schema$core$iter__23255(s__23256){
return (new cljs.core.LazySeq(null,(function (){
var s__23256__$1 = s__23256;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23256__$1);
if(temp__5290__auto__){
var s__23256__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23256__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23256__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23258 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23257 = (0);
while(true){
if((i__23257 < size__9123__auto__)){
var vec__23259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23257);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23259,(1),null);
cljs.core.chunk_append(b__23258,(function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
);

var G__23268 = (i__23257 + (1));
i__23257 = G__23268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23258),schema$core$iter__23255(cljs.core.chunk_rest(s__23256__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23258),null);
}
} else {
var vec__23262 = cljs.core.first(s__23256__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23262,(1),null);
return cljs.core.cons((function (){
if(cljs.core.ifn_QMARK_(pred)){
} else {
throw (new Error(schema.utils.format_STAR_(["Conditional predicate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," must be a function"].join(''))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null);
})()
,schema$core$iter__23255(cljs.core.rest(s__23256__$2)));
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

schema.core.conditional.cljs$lang$applyTo = (function (seq23254){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23254));
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
return (function schema$core$iter__23269(s__23270){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23270__$1 = s__23270;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23270__$1);
if(temp__5290__auto__){
var s__23270__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23270__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23270__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23272 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23271 = (0);
while(true){
if((i__23271 < size__9123__auto__)){
var map__23273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23271);
var map__23273__$1 = ((((!((map__23273 == null)))?((((map__23273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23273):map__23273);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23273__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__23272,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__23277 = (i__23271 + (1));
i__23271 = G__23277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23272),schema$core$iter__23269(cljs.core.chunk_rest(s__23270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23272),null);
}
} else {
var map__23275 = cljs.core.first(s__23270__$2);
var map__23275__$1 = ((((!((map__23275 == null)))?((((map__23275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23275):map__23275);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23275__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__23269(cljs.core.rest(s__23270__$2)));
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

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23280,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23284 = k23280;
var G__23284__$1 = (((G__23284 instanceof cljs.core.Keyword))?G__23284.fqn:null);
switch (G__23284__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23280,else__8933__auto__);

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

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23279){
var self__ = this;
var G__23279__$1 = this;
return (new cljs.core.RecordIter((0),G__23279__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23285 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-56613580 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23285(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23281,other23282){
var self__ = this;
var this23281__$1 = this;
return (!((other23282 == null))) && ((this23281__$1.constructor === other23282.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23281__$1.schemas,other23282.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23281__$1.__extmap,other23282.__extmap));
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

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23279){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23286 = cljs.core.keyword_identical_QMARK_;
var expr__23287 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23289 = cljs.core.cst$kw$schemas;
var G__23290 = expr__23287;
return (pred__23286.cljs$core$IFn$_invoke$arity$2 ? pred__23286.cljs$core$IFn$_invoke$arity$2(G__23289,G__23290) : pred__23286.call(null,G__23289,G__23290));
})())){
return (new schema.core.CondPre(G__23279,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23279),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23279){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__23279,self__.__extmap,self__.__hash));
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
return (function schema$core$iter__23291(s__23292){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23292__$1 = s__23292;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23292__$1);
if(temp__5290__auto__){
var s__23292__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23292__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23292__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23294 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23293 = (0);
while(true){
if((i__23293 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23293);
cljs.core.chunk_append(b__23294,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__23296 = (i__23293 + (1));
i__23293 = G__23296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23294),schema$core$iter__23291(cljs.core.chunk_rest(s__23292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23294),null);
}
} else {
var s = cljs.core.first(s__23292__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__23291(cljs.core.rest(s__23292__$2)));
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
return (function (p1__23278_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23278_SHARP_;
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

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__23283){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23283),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23283,cljs.core.cst$kw$schemas)),null));
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
var len__9519__auto___23298 = arguments.length;
var i__9520__auto___23299 = (0);
while(true){
if((i__9520__auto___23299 < len__9519__auto___23298)){
args__9526__auto__.push((arguments[i__9520__auto___23299]));

var G__23300 = (i__9520__auto___23299 + (1));
i__9520__auto___23299 = G__23300;
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

schema.core.cond_pre.cljs$lang$applyTo = (function (seq23297){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23297));
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

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23303,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23307 = k23303;
var G__23307__$1 = (((G__23307 instanceof cljs.core.Keyword))?G__23307.fqn:null);
switch (G__23307__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23303,else__8933__auto__);

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

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23302){
var self__ = this;
var G__23302__$1 = this;
return (new cljs.core.RecordIter((0),G__23302__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23308 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (725895648 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23308(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23304,other23305){
var self__ = this;
var this23304__$1 = this;
return (!((other23305 == null))) && ((this23304__$1.constructor === other23305.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.schema,other23305.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.postcondition,other23305.postcondition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.post_name,other23305.post_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23304__$1.__extmap,other23305.__extmap));
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

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23302){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23309 = cljs.core.keyword_identical_QMARK_;
var expr__23310 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23312 = cljs.core.cst$kw$schema;
var G__23313 = expr__23310;
return (pred__23309.cljs$core$IFn$_invoke$arity$2 ? pred__23309.cljs$core$IFn$_invoke$arity$2(G__23312,G__23313) : pred__23309.call(null,G__23312,G__23313));
})())){
return (new schema.core.Constrained(G__23302,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23314 = cljs.core.cst$kw$postcondition;
var G__23315 = expr__23310;
return (pred__23309.cljs$core$IFn$_invoke$arity$2 ? pred__23309.cljs$core$IFn$_invoke$arity$2(G__23314,G__23315) : pred__23309.call(null,G__23314,G__23315));
})())){
return (new schema.core.Constrained(self__.schema,G__23302,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23316 = cljs.core.cst$kw$post_DASH_name;
var G__23317 = expr__23310;
return (pred__23309.cljs$core$IFn$_invoke$arity$2 ? pred__23309.cljs$core$IFn$_invoke$arity$2(G__23316,G__23317) : pred__23309.call(null,G__23316,G__23317));
})())){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__23302,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23302),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23302){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__23302,self__.__extmap,self__.__hash));
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
return (function (p1__23301_SHARP_){
var x__9196__auto__ = self__.post_name;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23301_SHARP_;
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

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__23306){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__23306),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__23306),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23306,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0))),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var G__23320 = arguments.length;
switch (G__23320) {
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

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23324,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23328 = k23324;
var G__23328__$1 = (((G__23328 instanceof cljs.core.Keyword))?G__23328.fqn:null);
switch (G__23328__$1) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23324,else__8933__auto__);

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
var G__23329 = (function (){var or__8242__auto__ = tx;
if(cljs.core.truth_(or__8242__auto__)){
return or__8242__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23329) : f.call(null,G__23329));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__23322_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__23322_SHARP_], null),params);
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

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23323){
var self__ = this;
var G__23323__$1 = this;
return (new cljs.core.RecordIter((0),G__23323__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23330 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1189778852 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23330(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23325,other23326){
var self__ = this;
var this23325__$1 = this;
return (!((other23326 == null))) && ((this23325__$1.constructor === other23326.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23325__$1.schemas,other23326.schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23325__$1.__extmap,other23326.__extmap));
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

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23323){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23331 = cljs.core.keyword_identical_QMARK_;
var expr__23332 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23334 = cljs.core.cst$kw$schemas;
var G__23335 = expr__23332;
return (pred__23331.cljs$core$IFn$_invoke$arity$2 ? pred__23331.cljs$core$IFn$_invoke$arity$2(G__23334,G__23335) : pred__23331.call(null,G__23334,G__23335));
})())){
return (new schema.core.Both(G__23323,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23323),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23323){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__23323,self__.__extmap,self__.__hash));
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

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__23327){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__23327),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23327,cljs.core.cst$kw$schemas)),null));
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
var len__9519__auto___23338 = arguments.length;
var i__9520__auto___23339 = (0);
while(true){
if((i__9520__auto___23339 < len__9519__auto___23338)){
args__9526__auto__.push((arguments[i__9520__auto___23339]));

var G__23340 = (i__9520__auto___23339 + (1));
i__9520__auto___23339 = G__23340;
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

schema.core.both.cljs$lang$applyTo = (function (seq23337){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23337));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__23341 = cljs.core.meta(v);
var map__23341__$1 = ((((!((map__23341 == null)))?((((map__23341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23341):map__23341);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,cljs.core.cst$kw$name);
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

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23344,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23348 = k23344;
var G__23348__$1 = (((G__23348 instanceof cljs.core.Keyword))?G__23348.fqn:null);
switch (G__23348__$1) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23344,else__8933__auto__);

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

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23343){
var self__ = this;
var G__23343__$1 = this;
return (new cljs.core.RecordIter((0),G__23343__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23349 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1521498755 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23349(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23345,other23346){
var self__ = this;
var this23345__$1 = this;
return (!((other23346 == null))) && ((this23345__$1.constructor === other23346.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23345__$1.derefable,other23346.derefable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23345__$1.__extmap,other23346.__extmap));
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

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23343){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23350 = cljs.core.keyword_identical_QMARK_;
var expr__23351 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23353 = cljs.core.cst$kw$derefable;
var G__23354 = expr__23351;
return (pred__23350.cljs$core$IFn$_invoke$arity$2 ? pred__23350.cljs$core$IFn$_invoke$arity$2(G__23353,G__23354) : pred__23350.call(null,G__23353,G__23354));
})())){
return (new schema.core.Recursive(G__23343,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23343),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23343){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__23343,self__.__extmap,self__.__hash));
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

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__23347){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__23347),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23347,cljs.core.cst$kw$derefable)),null));
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

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23359,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23363 = k23359;
var G__23363__$1 = (((G__23363 instanceof cljs.core.Keyword))?G__23363.fqn:null);
switch (G__23363__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23359,else__8933__auto__);

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

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23358){
var self__ = this;
var G__23358__$1 = this;
return (new cljs.core.RecordIter((0),G__23358__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23364 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (1019346599 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23364(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23360,other23361){
var self__ = this;
var this23360__$1 = this;
return (!((other23361 == null))) && ((this23360__$1.constructor === other23361.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.schema,other23361.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.__extmap,other23361.__extmap));
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

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23358){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23365 = cljs.core.keyword_identical_QMARK_;
var expr__23366 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23368 = cljs.core.cst$kw$schema;
var G__23369 = expr__23366;
return (pred__23365.cljs$core$IFn$_invoke$arity$2 ? pred__23365.cljs$core$IFn$_invoke$arity$2(G__23368,G__23369) : pred__23365.call(null,G__23368,G__23369));
})())){
return (new schema.core.Atomic(G__23358,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23358),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23358){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__23358,self__.__extmap,self__.__hash));
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
return (function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__23370_23372 = cljs.core.deref(coll);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23370_23372) : item_fn.call(null,G__23370_23372));

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

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__23362){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23362),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23362,cljs.core.cst$kw$schema)),null));
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

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23374,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23378 = k23374;
var G__23378__$1 = (((G__23378 instanceof cljs.core.Keyword))?G__23378.fqn:null);
switch (G__23378__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23374,else__8933__auto__);

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

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23373){
var self__ = this;
var G__23373__$1 = this;
return (new cljs.core.RecordIter((0),G__23373__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23379 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1805575094 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23379(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23375,other23376){
var self__ = this;
var this23375__$1 = this;
return (!((other23376 == null))) && ((this23375__$1.constructor === other23376.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23375__$1.k,other23376.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23375__$1.__extmap,other23376.__extmap));
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

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23373){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23380 = cljs.core.keyword_identical_QMARK_;
var expr__23381 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23383 = cljs.core.cst$kw$k;
var G__23384 = expr__23381;
return (pred__23380.cljs$core$IFn$_invoke$arity$2 ? pred__23380.cljs$core$IFn$_invoke$arity$2(G__23383,G__23384) : pred__23380.call(null,G__23383,G__23384));
})())){
return (new schema.core.RequiredKey(G__23373,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23373),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23373){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__23373,self__.__extmap,self__.__hash));
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

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__23377){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__23377),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23377,cljs.core.cst$kw$k)),null));
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

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23387,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23391 = k23387;
var G__23391__$1 = (((G__23391 instanceof cljs.core.Keyword))?G__23391.fqn:null);
switch (G__23391__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23387,else__8933__auto__);

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

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23386){
var self__ = this;
var G__23386__$1 = this;
return (new cljs.core.RecordIter((0),G__23386__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23392 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1508333161 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23392(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23388,other23389){
var self__ = this;
var this23388__$1 = this;
return (!((other23389 == null))) && ((this23388__$1.constructor === other23389.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23388__$1.k,other23389.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23388__$1.__extmap,other23389.__extmap));
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

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23386){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23393 = cljs.core.keyword_identical_QMARK_;
var expr__23394 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23396 = cljs.core.cst$kw$k;
var G__23397 = expr__23394;
return (pred__23393.cljs$core$IFn$_invoke$arity$2 ? pred__23393.cljs$core$IFn$_invoke$arity$2(G__23396,G__23397) : pred__23393.call(null,G__23396,G__23397));
})())){
return (new schema.core.OptionalKey(G__23386,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23386),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23386){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__23386,self__.__extmap,self__.__hash));
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

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__23390){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__23390),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23390,cljs.core.cst$kw$k)),null));
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
schema.core.map_entry_ctor = (function schema$core$map_entry_ctor(p__23399){
var vec__23400 = p__23399;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23400,(1),null);
var coll = vec__23400;
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

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23404,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23408 = k23404;
var G__23408__$1 = (((G__23408 instanceof cljs.core.Keyword))?G__23408.fqn:null);
switch (G__23408__$1) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23404,else__8933__auto__);

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

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23403){
var self__ = this;
var G__23403__$1 = this;
return (new cljs.core.RecordIter((0),G__23403__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23409 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-804356212 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23409(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23405,other23406){
var self__ = this;
var this23405__$1 = this;
return (!((other23406 == null))) && ((this23405__$1.constructor === other23406.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23405__$1.key_schema,other23406.key_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23405__$1.val_schema,other23406.val_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23405__$1.__extmap,other23406.__extmap));
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

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23403){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23410 = cljs.core.keyword_identical_QMARK_;
var expr__23411 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23413 = cljs.core.cst$kw$key_DASH_schema;
var G__23414 = expr__23411;
return (pred__23410.cljs$core$IFn$_invoke$arity$2 ? pred__23410.cljs$core$IFn$_invoke$arity$2(G__23413,G__23414) : pred__23410.call(null,G__23413,G__23414));
})())){
return (new schema.core.MapEntry(G__23403,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23415 = cljs.core.cst$kw$val_DASH_schema;
var G__23416 = expr__23411;
return (pred__23410.cljs$core$IFn$_invoke$arity$2 ? pred__23410.cljs$core$IFn$_invoke$arity$2(G__23415,G__23416) : pred__23410.call(null,G__23415,G__23416));
})())){
return (new schema.core.MapEntry(self__.key_schema,G__23403,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23403),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23403){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__23403,self__.__extmap,self__.__hash));
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
var G__23417_23428 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23417_23428) : item_fn.call(null,G__23417_23428));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__23418_23429 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23418_23429) : item_fn.call(null,G__23418_23429));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__23419,p__23420,_){
var vec__23421 = p__23419;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23421,(0),null);
var vec__23424 = p__23420;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23424,(1),null);
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

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__23407){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23407),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23407),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23407,cljs.core.cst$kw$key_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$val_DASH_schema], 0))),null));
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
var duplicate_keys_23443 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__23430_SHARP_){
return (cljs.core.count(p1__23430_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_23443)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duplicate_keys_23443], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9124__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__23431(s__23432){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__23432__$1 = s__23432;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23432__$1);
if(temp__5290__auto__){
var s__23432__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23432__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23432__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23434 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23433 = (0);
while(true){
if((i__23433 < size__9123__auto__)){
var vec__23435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23433);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23435,(1),null);
cljs.core.chunk_append(b__23434,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__23433,rk,required_QMARK_,vec__23435,k,v,c__9122__auto__,size__9123__auto__,b__23434,s__23432__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__23438_23444 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23438_23444) : item_fn.call(null,G__23438_23444));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__23433,rk,required_QMARK_,vec__23435,k,v,c__9122__auto__,size__9123__auto__,b__23434,s__23432__$2,temp__5290__auto__,extra_keys_schema))
);
})());

var G__23445 = (i__23433 + (1));
i__23433 = G__23445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23434),schema$core$map_elements_$_iter__23431(cljs.core.chunk_rest(s__23432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23434),null);
}
} else {
var vec__23439 = cljs.core.first(s__23432__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23439,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__23439,k,v,s__23432__$2,temp__5290__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__23442_23446 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23442_23446) : item_fn.call(null,G__23442_23446));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__23439,k,v,s__23432__$2,temp__5290__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__23431(cljs.core.rest(s__23432__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__9124__auto__ = (function schema$core$map_error_$_iter__23447(s__23448){
return (new cljs.core.LazySeq(null,(function (){
var s__23448__$1 = s__23448;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23448__$1);
if(temp__5290__auto__){
var s__23448__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23448__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23448__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23450 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23449 = (0);
while(true){
if((i__23449 < size__9123__auto__)){
var vec__23451 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23449);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23451,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23451,(1),null);
cljs.core.chunk_append(b__23450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__23457 = (i__23449 + (1));
i__23449 = G__23457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23450),schema$core$map_error_$_iter__23447(cljs.core.chunk_rest(s__23448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23450),null);
}
} else {
var vec__23454 = cljs.core.first(s__23448__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23454,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23454,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__23447(cljs.core.rest(s__23448__$2)));
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
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__23458_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__23458_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__9124__auto__ = (function schema$core$map_explain_$_iter__23459(s__23460){
return (new cljs.core.LazySeq(null,(function (){
var s__23460__$1 = s__23460;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23460__$1);
if(temp__5290__auto__){
var s__23460__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23460__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23460__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23462 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23461 = (0);
while(true){
if((i__23461 < size__9123__auto__)){
var vec__23463 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23461);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23463,(1),null);
cljs.core.chunk_append(b__23462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__23469 = (i__23461 + (1));
i__23461 = G__23469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23462),schema$core$map_explain_$_iter__23459(cljs.core.chunk_rest(s__23460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23462),null);
}
} else {
var vec__23466 = cljs.core.first(s__23460__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23466,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__23459(cljs.core.rest(s__23460__$2)));
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
return (function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
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

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23471,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23475 = k23471;
var G__23475__$1 = (((G__23475 instanceof cljs.core.Keyword))?G__23475.fqn:null);
switch (G__23475__$1) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23471,else__8933__auto__);

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

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23470){
var self__ = this;
var G__23470__$1 = this;
return (new cljs.core.RecordIter((0),G__23470__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23476 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1542973436 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23476(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23472,other23473){
var self__ = this;
var this23472__$1 = this;
return (!((other23473 == null))) && ((this23472__$1.constructor === other23473.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23472__$1.schema,other23473.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23472__$1.__extmap,other23473.__extmap));
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

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23470){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23477 = cljs.core.keyword_identical_QMARK_;
var expr__23478 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23480 = cljs.core.cst$kw$schema;
var G__23481 = expr__23478;
return (pred__23477.cljs$core$IFn$_invoke$arity$2 ? pred__23477.cljs$core$IFn$_invoke$arity$2(G__23480,G__23481) : pred__23477.call(null,G__23480,G__23481));
})())){
return (new schema.core.Queue(G__23470,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23470),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23470){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__23470,self__.__extmap,self__.__hash));
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
return (function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
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

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__23474){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23474),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23474,cljs.core.cst$kw$schema)),null));
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

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23484,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23488 = k23484;
var G__23488__$1 = (((G__23488 instanceof cljs.core.Keyword))?G__23488.fqn:null);
switch (G__23488__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23484,else__8933__auto__);

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

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23483){
var self__ = this;
var G__23483__$1 = this;
return (new cljs.core.RecordIter((0),G__23483__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23489 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-197981045 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23489(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23485,other23486){
var self__ = this;
var this23485__$1 = this;
return (!((other23486 == null))) && ((this23485__$1.constructor === other23486.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23485__$1.schema,other23486.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23485__$1.optional_QMARK_,other23486.optional_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23485__$1.name,other23486.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23485__$1.__extmap,other23486.__extmap));
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

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23483){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23490 = cljs.core.keyword_identical_QMARK_;
var expr__23491 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23493 = cljs.core.cst$kw$schema;
var G__23494 = expr__23491;
return (pred__23490.cljs$core$IFn$_invoke$arity$2 ? pred__23490.cljs$core$IFn$_invoke$arity$2(G__23493,G__23494) : pred__23490.call(null,G__23493,G__23494));
})())){
return (new schema.core.One(G__23483,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23495 = cljs.core.cst$kw$optional_QMARK_;
var G__23496 = expr__23491;
return (pred__23490.cljs$core$IFn$_invoke$arity$2 ? pred__23490.cljs$core$IFn$_invoke$arity$2(G__23495,G__23496) : pred__23490.call(null,G__23495,G__23496));
})())){
return (new schema.core.One(self__.schema,G__23483,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23497 = cljs.core.cst$kw$name;
var G__23498 = expr__23491;
return (pred__23490.cljs$core$IFn$_invoke$arity$2 ? pred__23490.cljs$core$IFn$_invoke$arity$2(G__23497,G__23498) : pred__23490.call(null,G__23497,G__23498));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__23483,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23483),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23483){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__23483,self__.__extmap,self__.__hash));
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

schema.core.map__GT_One = (function schema$core$map__GT_One(G__23487){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23487),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__23487),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23487),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23487,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0))),null));
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

var vec__23503 = cljs.core.split_with((function (p1__23500_SHARP_){
return ((p1__23500_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__23500_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23503,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23503,(1),null);
var vec__23506 = cljs.core.split_with(((function (vec__23503,required,more){
return (function (p1__23501_SHARP_){
var and__8230__auto__ = (p1__23501_SHARP_ instanceof schema.core.One);
if(and__8230__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__23501_SHARP_);
} else {
return and__8230__auto__;
}
});})(vec__23503,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23506,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23506,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__23503,required,more,vec__23506,optional,more__$1){
return (function (p1__23502_SHARP_){
return !((p1__23502_SHARP_ instanceof schema.core.One));
});})(vec__23503,required,more,vec__23506,optional,more__$1))
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
return (function (p1__23509_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23509_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__23510 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23510,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23510,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__23510,singles,multi,this$__$1){
return (function (more,s){
if(cljs.core.not(s.optional_QMARK_)){
return cljs.core.cons(schema.spec.collection.one_element(true,schema.core.named(s.schema,s.name),((function (vec__23510,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5288__auto__ = cljs.core.seq(x);
if(temp__5288__auto__){
var x__$1 = temp__5288__auto__;
var G__23513_23523 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23513_23523) : item_fn.call(null,G__23513_23523));

return cljs.core.rest(x__$1);
} else {
var G__23514_23524 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__5288__auto__,vec__23510,singles,multi,this$__$1){
return (function (){
return cljs.core._conj((function (){var x__9196__auto__ = s.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto__);
})(),cljs.core.cst$sym$present_QMARK_);
});})(temp__5288__auto__,vec__23510,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23514_23524) : item_fn.call(null,G__23514_23524));

return null;
}
});})(vec__23510,singles,multi,this$__$1))
),more);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.optional_tail(schema.core.named(s.schema,s.name),((function (vec__23510,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__5290__auto__ = cljs.core.seq(x);
if(temp__5290__auto__){
var x__$1 = temp__5290__auto__;
var G__23515_23525 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__23515_23525) : item_fn.call(null,G__23515_23525));

return cljs.core.rest(x__$1);
} else {
return null;
}
});})(vec__23510,singles,multi,this$__$1))
,more)], null);
}
});})(vec__23510,singles,multi,this$__$1))
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
var vec__23516 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23516,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__9124__auto__ = ((function (vec__23516,singles,multi,this$__$1){
return (function schema$core$iter__23519(s__23520){
return (new cljs.core.LazySeq(null,((function (vec__23516,singles,multi,this$__$1){
return (function (){
var s__23520__$1 = s__23520;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__23520__$1);
if(temp__5290__auto__){
var s__23520__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23520__$2)){
var c__9122__auto__ = cljs.core.chunk_first(s__23520__$2);
var size__9123__auto__ = cljs.core.count(c__9122__auto__);
var b__23522 = cljs.core.chunk_buffer(size__9123__auto__);
if((function (){var i__23521 = (0);
while(true){
if((i__23521 < size__9123__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9122__auto__,i__23521);
cljs.core.chunk_append(b__23522,(function (){var x__9196__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9196__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$2);
})(),x__9196__auto____$1);
})(),x__9196__auto__);
})());

var G__23526 = (i__23521 + (1));
i__23521 = G__23526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23522),schema$core$iter__23519(cljs.core.chunk_rest(s__23520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23522),null);
}
} else {
var s = cljs.core.first(s__23520__$2);
return cljs.core.cons((function (){var x__9196__auto__ = (cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one);
return cljs.core._conj((function (){var x__9196__auto____$1 = schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj((function (){var x__9196__auto____$2 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$2);
})(),x__9196__auto____$1);
})(),x__9196__auto__);
})(),schema$core$iter__23519(cljs.core.rest(s__23520__$2)));
}
} else {
return null;
}
break;
}
});})(vec__23516,singles,multi,this$__$1))
,null,null));
});})(vec__23516,singles,multi,this$__$1))
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

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23531,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23535 = k23531;
var G__23535__$1 = (((G__23535 instanceof cljs.core.Keyword))?G__23535.fqn:null);
switch (G__23535__$1) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23531,else__8933__auto__);

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

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23530){
var self__ = this;
var G__23530__$1 = this;
return (new cljs.core.RecordIter((0),G__23530__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23536 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-1486476872 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23536(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23532,other23533){
var self__ = this;
var this23532__$1 = this;
return (!((other23533 == null))) && ((this23532__$1.constructor === other23533.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23532__$1.klass,other23533.klass)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23532__$1.schema,other23533.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23532__$1.__extmap,other23533.__extmap));
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

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23530){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23537 = cljs.core.keyword_identical_QMARK_;
var expr__23538 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23540 = cljs.core.cst$kw$klass;
var G__23541 = expr__23538;
return (pred__23537.cljs$core$IFn$_invoke$arity$2 ? pred__23537.cljs$core$IFn$_invoke$arity$2(G__23540,G__23541) : pred__23537.call(null,G__23540,G__23541));
})())){
return (new schema.core.Record(G__23530,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23542 = cljs.core.cst$kw$schema;
var G__23543 = expr__23538;
return (pred__23537.cljs$core$IFn$_invoke$arity$2 ? pred__23537.cljs$core$IFn$_invoke$arity$2(G__23542,G__23543) : pred__23537.call(null,G__23542,G__23543));
})())){
return (new schema.core.Record(self__.klass,G__23530,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23530),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23530){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__23530,self__.__extmap,self__.__hash));
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
return (function (p1__23527_SHARP_){
return (p1__23527_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__23528_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = self__.klass;
return cljs.core._conj((function (){var x__9196__auto____$1 = p1__23528_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__9196__auto____$1);
})(),x__9196__auto__);
})(),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__5288__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5288__auto__)){
var evf = temp__5288__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__5288__auto__,p,this$__$1){
return (function (p1__23529_SHARP_){
return cljs.core._conj((function (){var x__9196__auto__ = p1__23529_SHARP_;
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

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__23534){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__23534),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23534),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23534,cljs.core.cst$kw$klass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema], 0))),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__23547 = cljs.core.split_with((function (p1__23545_SHARP_){
return (p1__23545_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__23547,required,more){
return (function (p1__23546_SHARP_){
return schema.core.explain(p1__23546_SHARP_.schema);
});})(vec__23547,required,more))
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

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8932__auto__,k23551,else__8933__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
var G__23555 = k23551;
var G__23555__$1 = (((G__23555 instanceof cljs.core.Keyword))?G__23555.fqn:null);
switch (G__23555__$1) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23551,else__8933__auto__);

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

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23550){
var self__ = this;
var G__23550__$1 = this;
return (new cljs.core.RecordIter((0),G__23550__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__8698__auto____$1 = (function (){var fexpr__23556 = ((function (h__8698__auto__,this__8926__auto____$1){
return (function (coll__8927__auto__){
return (-2054647546 ^ cljs.core.hash_unordered_coll(coll__8927__auto__));
});})(h__8698__auto__,this__8926__auto____$1))
;
return fexpr__23556(this__8926__auto____$1);
})();
self__.__hash = h__8698__auto____$1;

return h__8698__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23552,other23553){
var self__ = this;
var this23552__$1 = this;
return (!((other23553 == null))) && ((this23552__$1.constructor === other23553.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23552__$1.output_schema,other23553.output_schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23552__$1.input_schemas,other23553.input_schemas)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23552__$1.__extmap,other23553.__extmap));
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

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8937__auto__,k__8938__auto__,G__23550){
var self__ = this;
var this__8937__auto____$1 = this;
var pred__23557 = cljs.core.keyword_identical_QMARK_;
var expr__23558 = k__8938__auto__;
if(cljs.core.truth_((function (){var G__23560 = cljs.core.cst$kw$output_DASH_schema;
var G__23561 = expr__23558;
return (pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(G__23560,G__23561) : pred__23557.call(null,G__23560,G__23561));
})())){
return (new schema.core.FnSchema(G__23550,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23562 = cljs.core.cst$kw$input_DASH_schemas;
var G__23563 = expr__23558;
return (pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(G__23562,G__23563) : pred__23557.call(null,G__23562,G__23563));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__23550,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8938__auto__,G__23550),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8942__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8929__auto__,G__23550){
var self__ = this;
var this__8929__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__23550,self__.__extmap,self__.__hash));
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
return (function (p1__21554__21555__auto__){
return cljs.core._conj((function (){var x__9196__auto__ = p1__21554__21555__auto__;
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

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__23554){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__23554),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__23554),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23554,cljs.core.cst$kw$output_DASH_schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$input_DASH_schemas], 0))),null));
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
var m__21231__auto__ = cljs.core.meta(f);
var k__21232__auto__ = cljs.core.cst$kw$schema;
var temp__5288__auto__ = cljs.core.find(m__21231__auto__,k__21232__auto__);
if(cljs.core.truth_(temp__5288__auto__)){
var pair__21233__auto__ = temp__5288__auto__;
return cljs.core.val(pair__21233__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__21232__auto__,m__21231__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_(schema.utils.max_value_length,max_length);
});
