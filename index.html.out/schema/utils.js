// Compiled by ClojureScript 1.9.521 {:static-fns true, :optimize-constants true}
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
var args__8988__auto__ = [];
var len__8981__auto___21074 = arguments.length;
var i__8982__auto___21075 = (0);
while(true){
if((i__8982__auto___21075 < len__8981__auto___21074)){
args__8988__auto__.push((arguments[i__8982__auto___21075]));

var G__21076 = (i__8982__auto___21075 + (1));
i__8982__auto___21075 = G__21076;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__7760__auto__ = m;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__8622__auto__ = (function schema$utils$iter__21056(s__21057){
return (new cljs.core.LazySeq(null,(function (){
var s__21057__$1 = s__21057;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21057__$1);
if(temp__6738__auto__){
var s__21057__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21057__$2)){
var c__8620__auto__ = cljs.core.chunk_first(s__21057__$2);
var size__8621__auto__ = cljs.core.count(c__8620__auto__);
var b__21059 = cljs.core.chunk_buffer(size__8621__auto__);
if((function (){var i__21058 = (0);
while(true){
if((i__21058 < size__8621__auto__)){
var vec__21068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8620__auto__,i__21058);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21068,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__21059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21077 = (i__21058 + (1));
i__21058 = G__21077;
continue;
} else {
var G__21078 = (i__21058 + (1));
i__21058 = G__21078;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21059),schema$utils$iter__21056(cljs.core.chunk_rest(s__21057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21059),null);
}
} else {
var vec__21071 = cljs.core.first(s__21057__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21071,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__21056(cljs.core.rest(s__21057__$2)));
} else {
var G__21079 = cljs.core.rest(s__21057__$2);
s__21057__$1 = G__21079;
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
return iter__8622__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq21054){
var G__21055 = cljs.core.first(seq21054);
var seq21054__$1 = cljs.core.next(seq21054);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21055,seq21054__$1);
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
var args__8988__auto__ = [];
var len__8981__auto___21082 = arguments.length;
var i__8982__auto___21083 = (0);
while(true){
if((i__8982__auto___21083 < len__8981__auto___21082)){
args__8988__auto__.push((arguments[i__8982__auto___21083]));

var G__21084 = (i__8982__auto___21083 + (1));
i__8982__auto___21083 = G__21084;
continue;
} else {
}
break;
}

var argseq__8989__auto__ = ((((1) < args__8988__auto__.length))?(new cljs.core.IndexedSeq(args__8988__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8989__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq21080){
var G__21081 = cljs.core.first(seq21080);
var seq21080__$1 = cljs.core.next(seq21080);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21081,seq21080__$1);
});

schema.utils.max_value_length = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19)) : cljs.core.atom.call(null,(19)));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')) <= (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(schema.utils.max_value_length) : cljs.core.deref.call(null,schema.utils.max_value_length)))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("a-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * TODO: eventually use built in demunge in latest cljs.
 */
schema.utils.unmunge = (function schema$utils$unmunge(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__21090){
var vec__21091 = p__21090;
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21091,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21091,(1),null);
return clojure.string.replace(s__$1,from,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(to)].join(''));
}),s,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__21085_SHARP_){
return (- cljs.core.count(cljs.core.second(p1__21085_SHARP_)));
}),cljs.core.PersistentHashMap.fromArrays(["@","!","\"","#","%","&","'","*","+","-","/",":","[","{","<","\\","|","=","]","}",">","^","~","?"],["_CIRCA_","_BANG_","_DOUBLEQUOTE_","_SHARP_","_PERCENT_","_AMPERSAND_","_SINGLEQUOTE_","_STAR_","_PLUS_","_","_SLASH_","_COLON_","_LBRACK_","_LBRACE_","_LT_","_BSLASH_","_BAR_","_EQ_","_RBRACK_","_RBRACE_","_GT_","_CARET_","_TILDE_","_QMARK_"])));
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
return schema.utils.unmunge((function (){var or__7760__auto__ = cljs.core.not_empty(cljs.core.second(cljs.core.re_find(/function ([^\(]*)\(/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''))));
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
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
})
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

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
var x__8694__auto__ = (function (){var or__7760__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__7760__auto__)){
return or__7760__auto__;
} else {
return cljs.core.cst$sym$not;
}
})();
return cljs.core._conj((function (){var x__8694__auto____$1 = (function (){var G__21099 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21099) : cljs.core.deref.call(null,G__21099));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
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
})
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

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__8417__auto__,writer__8418__auto__,opt__8419__auto__){
return cljs.core._write(writer__8418__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj((function (){var x__8694__auto__ = err.error;
return cljs.core._conj((function (){var x__8694__auto____$1 = err.name;
return cljs.core._conj(cljs.core.List.EMPTY,x__8694__auto____$1);
})(),x__8694__auto__);
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
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8435__auto__,k__8436__auto__){
var self__ = this;
var this__8435__auto____$1 = this;
return this__8435__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8436__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8437__auto__,k21101,else__8438__auto__){
var self__ = this;
var this__8437__auto____$1 = this;
var G__21103 = (((k21101 instanceof cljs.core.Keyword))?k21101.fqn:null);
switch (G__21103) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21101,else__8438__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8449__auto__,writer__8450__auto__,opts__8451__auto__){
var self__ = this;
var this__8449__auto____$1 = this;
var pr_pair__8452__auto__ = ((function (this__8449__auto____$1){
return (function (keyval__8453__auto__){
return cljs.core.pr_sequential_writer(writer__8450__auto__,cljs.core.pr_writer,""," ","",opts__8451__auto__,keyval__8453__auto__);
});})(this__8449__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8450__auto__,pr_pair__8452__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__8451__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21100){
var self__ = this;
var G__21100__$1 = this;
return (new cljs.core.RecordIter((0),G__21100__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8433__auto__){
var self__ = this;
var this__8433__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8429__auto__){
var self__ = this;
var this__8429__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8439__auto__){
var self__ = this;
var this__8439__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8430__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8431__auto__,other__8432__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8444__auto__,k__8445__auto__){
var self__ = this;
var this__8444__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,null], null), null),k__8445__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8444__auto____$1),self__.__meta),k__8445__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8445__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8442__auto__,k__8443__auto__,G__21100){
var self__ = this;
var this__8442__auto____$1 = this;
var pred__21104 = cljs.core.keyword_identical_QMARK_;
var expr__21105 = k__8443__auto__;
if(cljs.core.truth_((function (){var G__21107 = cljs.core.cst$kw$error;
var G__21108 = expr__21105;
return (pred__21104.cljs$core$IFn$_invoke$arity$2 ? pred__21104.cljs$core$IFn$_invoke$arity$2(G__21107,G__21108) : pred__21104.call(null,G__21107,G__21108));
})())){
return (new schema.utils.ErrorContainer(G__21100,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8443__auto__,G__21100),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8447__auto__){
var self__ = this;
var this__8447__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8434__auto__,G__21100){
var self__ = this;
var this__8434__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__21100,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8440__auto__,entry__8441__auto__){
var self__ = this;
var this__8440__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8441__auto__)){
return this__8440__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8441__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8441__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8440__auto____$1,entry__8441__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$error], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__8471__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__8471__auto__,writer__8472__auto__){
return cljs.core._write(writer__8472__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__21102){
return (new schema.utils.ErrorContainer(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__21102),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21102,cljs.core.cst$kw$error),null));
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
schema.utils.use_fn_validation = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
