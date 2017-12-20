// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__9524__auto__ = [];
var len__9517__auto___21426 = arguments.length;
var i__9518__auto___21427 = (0);
while(true){
if((i__9518__auto___21427 < len__9517__auto___21426)){
args__9524__auto__.push((arguments[i__9518__auto___21427]));

var G__21428 = (i__9518__auto___21427 + (1));
i__9518__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__8240__auto__ = m;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__9122__auto__ = (function schema$utils$iter__21416(s__21417){
return (new cljs.core.LazySeq(null,(function (){
var s__21417__$1 = s__21417;
while(true){
var temp__5290__auto__ = cljs.core.seq(s__21417__$1);
if(temp__5290__auto__){
var s__21417__$2 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21417__$2)){
var c__9120__auto__ = cljs.core.chunk_first(s__21417__$2);
var size__9121__auto__ = cljs.core.count(c__9120__auto__);
var b__21419 = cljs.core.chunk_buffer(size__9121__auto__);
if((function (){var i__21418 = (0);
while(true){
if((i__21418 < size__9121__auto__)){
var vec__21420 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9120__auto__,i__21418);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21420,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21420,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__21419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21429 = (i__21418 + (1));
i__21418 = G__21429;
continue;
} else {
var G__21430 = (i__21418 + (1));
i__21418 = G__21430;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21419),schema$utils$iter__21416(cljs.core.chunk_rest(s__21417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21419),null);
}
} else {
var vec__21423 = cljs.core.first(s__21417__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21423,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__21416(cljs.core.rest(s__21417__$2)));
} else {
var G__21431 = cljs.core.rest(s__21417__$2);
s__21417__$1 = G__21431;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9122__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq21414){
var G__21415 = cljs.core.first(seq21414);
var seq21414__$1 = cljs.core.next(seq21414);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21415,seq21414__$1);
});

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__9524__auto__ = [];
var len__9517__auto___21434 = arguments.length;
var i__9518__auto___21435 = (0);
while(true){
if((i__9518__auto___21435 < len__9517__auto___21434)){
args__9524__auto__.push((arguments[i__9518__auto___21435]));

var G__21436 = (i__9518__auto___21435 + (1));
i__9518__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var argseq__9525__auto__ = ((((1) < args__9524__auto__.length))?(new cljs.core.IndexedSeq(args__9524__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9525__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq21432){
var G__21433 = cljs.core.first(seq21432);
var seq21432__$1 = cljs.core.next(seq21432);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21433,seq21432__$1);
});

schema.utils.max_value_length = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')) <= cljs.core.deref(schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__21438){
var vec__21439 = p__21438;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,(1),null);
return clojure.string.replace(s__$1,from,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__21437_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__21437_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge((function (){var or__8240__auto__ = cljs.core.not_empty(cljs.core.second(cljs.core.re_find(/function ([^\(]*)\(/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''))));
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return "function";
}
})());
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$value,cljs.core.cst$sym$expectation_DASH_delay,cljs.core.cst$sym$fail_DASH_explanation], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
var x__9194__auto__ = (function (){var or__8240__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__8240__auto__)){
return or__8240__auto__;
} else {
return cljs.core.cst$sym$not;
}
})();
return cljs.core._conj((function (){var x__9194__auto____$1 = cljs.core.deref(err.expectation_delay);
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null,this$__$1)),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$error], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__8911__auto__,writer__8912__auto__,opt__8913__auto__){
return cljs.core._write(writer__8912__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj((function (){var x__9194__auto__ = err.error;
return cljs.core._conj((function (){var x__9194__auto____$1 = err.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__9194__auto____$1);
})(),x__9194__auto__);
})(),cljs.core.cst$sym$named);
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
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8928__auto__,k__8929__auto__){
var self__ = this;
var this__8928__auto____$1 = this;
return this__8928__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8929__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8930__auto__,k21444,else__8931__auto__){
var self__ = this;
var this__8930__auto____$1 = this;
var G__21448 = k21444;
var G__21448__$1 = (((G__21448 instanceof cljs.core.Keyword))?G__21448.fqn:null);
switch (G__21448__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21444,else__8931__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8942__auto__,writer__8943__auto__,opts__8944__auto__){
var self__ = this;
var this__8942__auto____$1 = this;
var pr_pair__8945__auto__ = ((function (this__8942__auto____$1){
return (function (keyval__8946__auto__){
return cljs.core.pr_sequential_writer(writer__8943__auto__,cljs.core.pr_writer,""," ","",opts__8944__auto__,keyval__8946__auto__);
});})(this__8942__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8943__auto__,pr_pair__8945__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__8944__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21443){
var self__ = this;
var G__21443__$1 = this;
return (new cljs.core.RecordIter((0),G__21443__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8926__auto__){
var self__ = this;
var this__8926__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8923__auto__){
var self__ = this;
var this__8923__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8932__auto__){
var self__ = this;
var this__8932__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8924__auto__){
var self__ = this;
var this__8924__auto____$1 = this;
var h__8696__auto__ = self__.__hash;
if(!((h__8696__auto__ == null))){
return h__8696__auto__;
} else {
var h__8696__auto____$1 = (function (){var fexpr__21449 = ((function (h__8696__auto__,this__8924__auto____$1){
return (function (coll__8925__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll(coll__8925__auto__));
});})(h__8696__auto__,this__8924__auto____$1))
;
return fexpr__21449(this__8924__auto____$1);
})();
self__.__hash = h__8696__auto____$1;

return h__8696__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21445,other21446){
var self__ = this;
var this21445__$1 = this;
return (!((other21446 == null))) && ((this21445__$1.constructor === other21446.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21445__$1.error,other21446.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21445__$1.__extmap,other21446.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8937__auto__,k__8938__auto__){
var self__ = this;
var this__8937__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,null], null), null),k__8938__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8937__auto____$1),self__.__meta),k__8938__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8938__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8935__auto__,k__8936__auto__,G__21443){
var self__ = this;
var this__8935__auto____$1 = this;
var pred__21450 = cljs.core.keyword_identical_QMARK_;
var expr__21451 = k__8936__auto__;
if(cljs.core.truth_((function (){var G__21453 = cljs.core.cst$kw$error;
var G__21454 = expr__21451;
return (pred__21450.cljs$core$IFn$_invoke$arity$2 ? pred__21450.cljs$core$IFn$_invoke$arity$2(G__21453,G__21454) : pred__21450.call(null,G__21453,G__21454));
})())){
return (new schema.utils.ErrorContainer(G__21443,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8936__auto__,G__21443),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8940__auto__){
var self__ = this;
var this__8940__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8927__auto__,G__21443){
var self__ = this;
var this__8927__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__21443,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8933__auto__,entry__8934__auto__){
var self__ = this;
var this__8933__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8934__auto__)){
return this__8933__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8934__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8934__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8933__auto____$1,entry__8934__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$error], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__8966__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__8966__auto__,writer__8967__auto__){
return cljs.core._write(writer__8967__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__21447){
return (new schema.utils.ErrorContainer(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__21447),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21447,cljs.core.cst$kw$error)),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
